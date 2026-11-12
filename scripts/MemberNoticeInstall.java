import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.sql.*;
import java.util.*;
import java.util.regex.*;

/** Idempotent module installer. Does not grant roles or modify existing business records. */
public class MemberNoticeInstall {
    public static void main(String[] args) throws Exception {
        String password = System.getenv("PB_TEST_DB_PASSWORD");
        if (password == null) throw new IllegalStateException("Set PB_TEST_DB_PASSWORD");
        Class.forName("dm.jdbc.driver.DmDriver");
        String url = args.length > 0 ? args[0] : "jdbc:dm://127.0.0.1:5236";
        String user = args.length > 1 ? args[1] : "DJ";
        try (Connection c = DriverManager.getConnection(url, user, password)) {
            String ddl = new String(Files.readAllBytes(Paths.get("db/party_member_notice.sql")), StandardCharsets.UTF_8);
            if (!exists(c, "select count(*) from user_tables where TABLE_NAME='DYN_DYFSYZ'")) {
                Matcher m = Pattern.compile("CREATE TABLE DYN_DYFSYZ \\((.*?)\\n\\);", Pattern.DOTALL).matcher(ddl);
                if (!m.find()) throw new IllegalStateException("Missing DYN_DYFSYZ DDL");
                execute(c, m.group());
            } else if (exists(c, "select count(*) from USER_TAB_COLUMNS where TABLE_NAME='DYN_DYFSYZ' and COLUMN_NAME='RECEIVER_ORG_ID'")) {
                execute(c, "alter table DYN_DYFSYZ rename column RECEIVER_ORG_ID to PARTY_ID");
            }
            if (!exists(c, "select count(*) from user_indexes where INDEX_NAME='UX_DYFSYZ_PROCESS'"))
                execute(c, "create unique index UX_DYFSYZ_PROCESS on DYN_DYFSYZ(PROCESS_INSTANCE_ID)");
            execute(c, "comment on table DYN_DYFSYZ is '党员发送阅知'");
            c.setAutoCommit(false);
            try {
                String model = "DYFSYZ_STORAGE";
                if (!exists(c, "select count(*) from DB_TABLE where TABLE_NAME='DYN_DYFSYZ'")) {
                    update(c, "insert into DB_TABLE (ID,TABLE_NAME,TABLE_COMMENTS,SYS_APPLICATION_ID,ORG_IDENTITY,TABLE_IS_CREATED,"
                            + "CREATION_DATE,LAST_UPDATE_DATE,CREATED_BY,LAST_UPDATED_BY,LAST_UPDATE_IP,VERSION,DATASOURCE_ID,DB_TYPE) "
                            + "values (?,'DYN_DYFSYZ','党员发送阅知','1','ORG_ROOT','Y',sysdate,sysdate,'1','1','127.0.0.1',0,'dataSource','1')", model);
                } else model = scalar(c, "select ID from DB_TABLE where TABLE_NAME='DYN_DYFSYZ'");
                update(c, "update DB_TABLE_COL set COL_NAME='PARTY_ID' where TABLE_ID=? and COL_NAME='RECEIVER_ORG_ID'", model);
                Map<String, String> labels = new HashMap<String, String>();
                String[][] names = {{"EMPLOYEE_CODE","工号"},{"MEMBER_ID","党员记录ID"},{"MEMBER_NAME","姓名"},
                        {"PARTY_ID","接收党组织ID"},{"RECEIVER_ORG_NAME","接收党组织"},{"PARTY_TYPE","党员类别编码"},
                        {"PARTY_TYPE_NAME","党员类别"},{"MEETING_DATE","党委会讨论日期"},{"MEETING_NAME","党委会届次／会议名称"},
                        {"PROBATION_START","预备期开始日期"},{"PROBATION_END","预备期结束日期"},{"REGULAR_DATE","转正日期"},
                        {"DOCUMENT_NO","文件编号"},{"TITLE","标题"},{"PROCESS_INSTANCE_ID","流程实例ID"},{"SECRETARY_ID","接收书记"},
                        {"NOTICE_STATE","流程状态"},{"APPLIED_DATE","回写完成时间"}};
                for (String[] name : names) labels.put(name[0], name[1]);
                try (Statement s = c.createStatement(); ResultSet r = s.executeQuery("select COLUMN_NAME,DATA_TYPE,DATA_LENGTH,DATA_PRECISION,"
                        + "NULLABLE,COLUMN_ID from USER_TAB_COLUMNS where TABLE_NAME='DYN_DYFSYZ' order by COLUMN_ID")) {
                    while (r.next()) {
                        String col = r.getString(1), type = r.getString(2);
                        if (exists(c, "select count(*) from DB_TABLE_COL where TABLE_ID=? and COL_NAME=?", model, col)) continue;
                        String len = "DATE".equals(type) ? "0" : "NUMBER".equals(type) ? r.getString(4) : r.getString(3);
                        update(c, "insert into DB_TABLE_COL (ID,TABLE_ID,COL_NAME,COL_TYPE,COL_LENGTH,COL_NULLABLE,COL_COMMENTS,COL_IS_PK,"
                                + "COL_IS_UNIQUE,SYS_APPLICATION_ID,ORG_IDENTITY,CREATION_DATE,LAST_UPDATE_DATE,CREATED_BY,LAST_UPDATED_BY,"
                                + "LAST_UPDATE_IP,VERSION,COL_IS_SYS,COL_DECIMAL) values (?,?,?,?,?,?,?,?,?,'1','ORG_ROOT',sysdate,sysdate,'1','1','127.0.0.1',0,?,'0')",
                                "DYFSYZ_COL_" + r.getInt(6), model, col, type, len, r.getString(5), labels.containsKey(col) ? labels.get(col) : col,
                                "ID".equals(col) ? "Y" : "N", "ID".equals(col) ? "Y" : "N", r.getInt(6) <= 9 ? "Y" : "N");
                    }
                }
                if (!exists(c, "select count(*) from BPM_FORMS where FORM_CODE='DYFSYZ'"))
                    update(c, "insert into BPM_FORMS (ID,FORM_CODE,FORM_NAME,FORM_URL,FORM_TYPE,APP_ID,VALID_FLAG,LAST_UPDATE_DATE,"
                            + "LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,IS_PROXY) values ('DYFSYZ','DYFSYZ','党员发送阅知',"
                            + "'platform/avicit/pb/membernotice/form','uri','1','1',sysdate,'1',sysdate,'1','127.0.0.1',0,'N')");
                if (!exists(c, "select count(*) from BPM_PROCESS_DEF where KEY_='dyfsyz'")) {
                    byte[] xml = Files.readAllBytes(Paths.get("config/bpm/DYFSYZ.xml"));
                    byte[] png = Files.readAllBytes(Paths.get("config/bpm/DYFSYZ.png"));
                    update(c, "insert into BPM_PROCESS_DEF (DBID_,KEY_,NAME_,XML_,PNG_,STATE_,APP_,DESIGNER_,DEPLOYER_,ISUFLOW_) "
                            + "values ('DYFSYZ_MODEL','dyfsyz','党员发送阅知',?,?,'0','Platform','1','1','1')", xml, png);
                }
                String method = "DYFSYZ_PERMISSION";
                if (!exists(c, "select count(*) from SYS_DATA_PERMISSIONS_METHOD where ID=?", method))
                    update(c, "insert into SYS_DATA_PERMISSIONS_METHOD (ID,TYPE,TABLE_NAME,TABLE_REMARKS,MAPPER_NAME,MAPPER_REMARKS,METHOD,"
                            + "METHOD_REMARKS,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) "
                            + "values (?,'0','DYN_DYFSYZ','党员发送阅知','NoticePermissionMapper.xml','党员发送阅知','selectVisibleNoticeIds',"
                            + "'通知列表及批量发起',sysdate,'1',sysdate,'1','127.0.0.1',0,'ORG_ROOT')", method);
                rule(c, "DYFSYZ_RULE_ALL", "1", "全部数据", "1=1");
                rule(c, "DYFSYZ_RULE_SELF", "2", "本人创建", "#{t}.CREATED_BY=#{loginUserId}");
                rule(c, "DYFSYZ_RULE_DEPT", "3", "本部门创建", "#{t}.CREATED_DEPT=#{loginDeptId}");
                if (!exists(c, "select count(*) from SYS_MENU_DIRECTORY where MENU_CODE='DYFSYZ'")) {
                    String parent = scalar(c, "select ID from SYS_MENU_DIRECTORY where MENU_NAME='党员管理' and rownum=1");
                    if (parent == null) throw new IllegalStateException("Missing 党员管理 parent menu");
                    update(c, "insert into SYS_MENU_DIRECTORY (ID,APP_ID,MENU_CODE,MENU_URL,PARENT_ID,MENU_ORDER,MENU_TYPE,MENU_STATUS,"
                            + "LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,MENU_VIEW,IS_MENU,ORG_IDENTITY,"
                            + "IS_SHOW,MENU_NAME,OPEN_TYPE) values ('DYFSYZ_MENU','1','DYFSYZ','platform/avicit/pb/membernotice/manage',?,90,'1','1',"
                            + "sysdate,'1',sysdate,'1','127.0.0.1',0,'avicit/pb/membernotice/NoticeManage.jsp','0','ORG_ROOT','0','党员发送阅知','_mainframe')", parent);
                }
                c.commit();
            } catch (Exception e) { c.rollback(); throw e; }
            System.out.println("DYFSYZ table (9 audit fields), storage metadata, form, process model, menu and permission formulas installed. No roles granted.");
        }
    }
    static void rule(Connection c, String id, String identifier, String name, String sql) throws Exception {
        if (!exists(c, "select count(*) from SYS_DATA_PERMISSIONS_RULE where ID=?", id))
            update(c, "insert into SYS_DATA_PERMISSIONS_RULE (ID,METHOD_ID,IDENTIFIER,RULE_NAME,STATE,FILTER_CONDITION_SQL,"
                    + "LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) "
                    + "values (?,'DYFSYZ_PERMISSION',?,?,'0',?,sysdate,'1',sysdate,'1','127.0.0.1',0,'ORG_ROOT')", id, identifier, name, sql);
    }
    static boolean exists(Connection c, String sql, Object... args) throws Exception {
        try (PreparedStatement s=c.prepareStatement(sql)) { bind(s,args); try(ResultSet r=s.executeQuery()){r.next();return r.getLong(1)>0;} }
    }
    static String scalar(Connection c, String sql) throws Exception { try(Statement s=c.createStatement();ResultSet r=s.executeQuery(sql)){return r.next()?r.getString(1):null;} }
    static void execute(Connection c, String sql) throws Exception { try(Statement s=c.createStatement()){s.execute(sql);} }
    static void update(Connection c, String sql, Object... args) throws Exception { try(PreparedStatement s=c.prepareStatement(sql)){bind(s,args);s.executeUpdate();} }
    static void bind(PreparedStatement s,Object[] args)throws Exception {for(int i=0;i<args.length;i++)if(args[i] instanceof byte[])s.setBytes(i+1,(byte[])args[i]);else s.setObject(i+1,args[i]);}
}
