import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.sql.*;
import java.util.*;
import java.util.regex.*;

/** Installs only this module's tables, storage metadata and permission method. No menu/role grants. */
public class CompetencyInstall {
    public static void main(String[] args)throws Exception{
        String password=System.getenv("PB_TEST_DB_PASSWORD");if(password==null)throw new IllegalStateException("Set PB_TEST_DB_PASSWORD");Class.forName("dm.jdbc.driver.DmDriver");
        try(Connection c=DriverManager.getConnection(args.length>0?args[0]:"jdbc:dm://127.0.0.1:5236",args.length>1?args[1]:"DJ",password)){
            String ddl=new String(Files.readAllBytes(Paths.get("db/secretary_competency.sql")),StandardCharsets.UTF_8);
            for(String table:new String[]{"DYN_SJ_COMP_BATCH","DYN_SJ_COMP_SCORE"})if(!exists(c,"select count(*) from user_tables where TABLE_NAME=?",table)){Matcher m=Pattern.compile("CREATE TABLE "+table+" \\((.*?)\\n\\);",Pattern.DOTALL).matcher(ddl);if(!m.find())throw new IllegalStateException("Missing table DDL");execute(c,m.group());}
            if(!exists(c,"select count(*) from user_indexes where INDEX_NAME='IX_SJ_COMP_PARTY'"))execute(c,"CREATE INDEX IX_SJ_COMP_PARTY ON DYN_SJ_COMP_SCORE(PARTY_ID,BATCH_ID)");
            Map<String,String> labels=new HashMap<String,String>();String[][] names={{"BATCH_NAME","批次名称"},{"EVAL_YEAR","测评年份"},{"EVAL_DATE","测评日期"},{"RULE_VERSION","规则版本"},{"BATCH_ID","测评批次"},{"USER_ID","人员ID"},{"PARTY_ID","党组织ID"},{"EMPLOYEE_CODE","工号"},{"MEMBER_NAME","姓名"},{"PARTY_NAME","党组织名称"},{"POST_NAME","当次职务"},{"THEORY_SCORE","理论考试"},{"BUSINESS_SCORE","业务考核"},{"INTERVIEW_SCORE","面试成绩"},{"SATISFACTION_SCORE","满意度测评"},{"ACTIVITY_SCORE","特色活动"}};for(String[] n:names)labels.put(n[0],n[1]);
            c.setAutoCommit(false);
            try{
                for(String table:new String[]{"DYN_SJ_COMP_BATCH","DYN_SJ_COMP_SCORE"}){
                    String label=table.endsWith("BATCH")?"书记胜任力测评批次":"书记胜任力人员成绩",model="SJCOMP_STORAGE_"+(table.endsWith("BATCH")?"BATCH":"SCORE");
                    if(!exists(c,"select count(*) from DB_TABLE where TABLE_NAME=?",table))update(c,"insert into DB_TABLE (ID,TABLE_NAME,TABLE_COMMENTS,SYS_APPLICATION_ID,ORG_IDENTITY,TABLE_IS_CREATED,CREATION_DATE,LAST_UPDATE_DATE,CREATED_BY,LAST_UPDATED_BY,LAST_UPDATE_IP,VERSION,DATASOURCE_ID,DB_TYPE) values (?,?,?,'1','ORG_ROOT','Y',sysdate,sysdate,'1','1','127.0.0.1',0,'dataSource','1')",model,table,label);
                    else try(PreparedStatement p=c.prepareStatement("select ID from DB_TABLE where TABLE_NAME=?")){p.setString(1,table);try(ResultSet r=p.executeQuery()){r.next();model=r.getString(1);}}
                    try(PreparedStatement p=c.prepareStatement("select COLUMN_NAME,DATA_TYPE,DATA_LENGTH,DATA_PRECISION,DATA_SCALE,NULLABLE,COLUMN_ID from USER_TAB_COLUMNS where TABLE_NAME=? order by COLUMN_ID")){p.setString(1,table);try(ResultSet r=p.executeQuery()){while(r.next()){
                        String col=r.getString(1),type=r.getString(2),colLabel=labels.containsKey(col)?labels.get(col):col,len="DATE".equals(type)?"0":"NUMBER".equals(type)?r.getString(4):r.getString(3);int order=r.getInt(7);
                        if(!exists(c,"select count(*) from DB_TABLE_COL where TABLE_ID=? and COL_NAME=?",model,col))update(c,"insert into DB_TABLE_COL (ID,TABLE_ID,COL_NAME,COL_TYPE,COL_LENGTH,COL_NULLABLE,COL_COMMENTS,COL_IS_PK,COL_IS_UNIQUE,SYS_APPLICATION_ID,ORG_IDENTITY,CREATION_DATE,LAST_UPDATE_DATE,CREATED_BY,LAST_UPDATED_BY,LAST_UPDATE_IP,VERSION,COL_IS_SYS,COL_DECIMAL) values (?,?,?,?,?,?,?,?,?,'1','ORG_ROOT',sysdate,sysdate,'1','1','127.0.0.1',0,?,?)",model+"_"+order,model,col,type,len,r.getString(6),colLabel,"ID".equals(col)?"Y":"N","ID".equals(col)?"Y":"N",order<=9?"Y":"N",r.getString(5)==null?"0":r.getString(5));
                    }}}
                }
                if(!exists(c,"select count(*) from SYS_DATA_PERMISSIONS_METHOD where ID='SJCOMP_PERMISSION'"))update(c,"insert into SYS_DATA_PERMISSIONS_METHOD (ID,TYPE,TABLE_NAME,TABLE_REMARKS,MAPPER_NAME,MAPPER_REMARKS,METHOD,METHOD_REMARKS,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) values ('SJCOMP_PERMISSION','0','DYN_SJ_COMP_SCORE','书记胜任力人员成绩','CompetencyPermissionMapper.xml','书记胜任力','selectVisiblePartyIds','按PARTY_ID统一过滤人员、成绩及报告',sysdate,'1',sysdate,'1','127.0.0.1',0,'ORG_ROOT')");
                c.commit();
            }catch(Exception e){c.rollback();throw e;}
            execute(c,"comment on table DYN_SJ_COMP_BATCH is '书记胜任力测评批次'");execute(c,"comment on table DYN_SJ_COMP_SCORE is '书记胜任力人员成绩'");
            for(String table:new String[]{"DYN_SJ_COMP_BATCH","DYN_SJ_COMP_SCORE"})try(PreparedStatement p=c.prepareStatement("select COLUMN_NAME from USER_TAB_COLUMNS where TABLE_NAME=?")){p.setString(1,table);try(ResultSet r=p.executeQuery()){while(r.next()){String col=r.getString(1);execute(c,"comment on column "+table+"."+col+" is '"+(labels.containsKey(col)?labels.get(col):col)+"'");}}}
            System.out.println("Competency: tables, 9 audit fields, storage metadata and permission method installed. No menus/role formulas changed.");
        }
    }
    static boolean exists(Connection c,String sql,Object...args)throws Exception{try(PreparedStatement p=c.prepareStatement(sql)){bind(p,args);try(ResultSet r=p.executeQuery()){r.next();return r.getLong(1)>0;}}}
    static void execute(Connection c,String sql)throws Exception{try(Statement s=c.createStatement()){s.execute(sql);}}
    static void update(Connection c,String sql,Object...args)throws Exception{try(PreparedStatement p=c.prepareStatement(sql)){bind(p,args);p.executeUpdate();}}
    static void bind(PreparedStatement p,Object[] args)throws Exception{for(int i=0;i<args.length;i++)p.setObject(i+1,args[i]);}
}
