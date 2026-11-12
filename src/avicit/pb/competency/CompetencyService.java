package avicit.pb.competency;

import avicit.platform6.api.session.SessionHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;
import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;
import static avicit.pb.competency.CompetencyRules.*;

@Service
public class CompetencyService {
    private static final Logger LOG=LoggerFactory.getLogger(CompetencyService.class);
    @Autowired private JdbcTemplate jdbc;
    @Autowired private CompetencyPermission permission;
    @Autowired private PlatformTransactionManager transactionManager;
    private String user(HttpServletRequest r){String u=SessionHelper.getLoginSysUserId(r);require(!text(u).isEmpty(),"请先登录");return u;}
    private TransactionTemplate tx(){return new TransactionTemplate(transactionManager);}
    public List<Map<String,Object>> batches(HttpServletRequest request){user(request);return jdbc.queryForList("select ID,BATCH_NAME,EVAL_YEAR,to_char(EVAL_DATE,'YYYY-MM-DD') EVAL_DATE,VERSION,RULE_VERSION from DYN_SJ_COMP_BATCH order by EVAL_DATE desc,CREATION_DATE desc,ID");}
    public Map<String,Object> batch(String id,HttpServletRequest request){user(request);List<Map<String,Object>> rows=jdbc.queryForList("select ID,BATCH_NAME,EVAL_YEAR,to_char(EVAL_DATE,'YYYY-MM-DD') EVAL_DATE,VERSION,RULE_VERSION from DYN_SJ_COMP_BATCH where ID=?",id);require(rows.size()==1,"测评批次不存在");return rows.get(0);}
    public Map<String,Object> saveBatch(final Map<String,String> data,final HttpServletRequest request){
        user(request);final String name=text(data.get("name")),id=text(data.get("id"));
        require(!name.isEmpty()&&name.length()<=200,"请填写200字以内的批次名称");
        final int year;try{year=Integer.parseInt(text(data.get("year")));}catch(Exception ex){throw new IllegalArgumentException("年份应为四位数字");}require(year>=1000&&year<=9999,"年份应为四位数字");
        final java.sql.Date date;try{SimpleDateFormat f=new SimpleDateFormat("yyyy-MM-dd");f.setLenient(false);String raw=text(data.get("date"));java.util.Date parsed=f.parse(raw);require(raw.equals(f.format(parsed)),"测评日期格式应为yyyy-MM-dd");date=new java.sql.Date(parsed.getTime());}catch(Exception ex){throw new IllegalArgumentException("请填写有效测评日期，格式yyyy-MM-dd");}
        return tx().execute(status->{
            String saved=id;
            if(id.isEmpty()){
                saved=UUID.randomUUID().toString();
                jdbc.update("insert into DYN_SJ_COMP_BATCH (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,BATCH_NAME,EVAL_YEAR,EVAL_DATE,RULE_VERSION) values (?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)",saved,user(request),user(request),SessionHelper.getClientIp(request),SessionHelper.getCurrentOrgIdentity(request),SessionHelper.getCurrentDeptId(request),name,year,date,VERSION);
                refreshInternal(saved,request);
            }else{
                int n=jdbc.update("update DYN_SJ_COMP_BATCH set BATCH_NAME=?,EVAL_YEAR=?,EVAL_DATE=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?,VERSION=VERSION+1 where ID=? and VERSION=?",name,year,date,user(request),SessionHelper.getClientIp(request),id,version(data.get("version")));
                require(n==1,"批次已被其他人修改，请刷新后重试");
            }
            return batch(saved,request);
        });
    }
    public int refresh(String batchId,HttpServletRequest request){batch(batchId,request);return tx().execute(status->refreshInternal(batchId,request));}
    private int refreshInternal(String batchId,HttpServletRequest r){
        jdbc.queryForObject("select ID from DYN_SJ_COMP_BATCH where ID=? for update",String.class,batchId);
        String scope=permission.parties(r);
        List<Map<String,Object>> roster=jdbc.queryForList("select distinct m.USER_ID,m.PARTY_ID,u.LOGIN_NAME EMPLOYEE_CODE,u.NAME MEMBER_NAME,o.PARTY_NAME,p.LOOKUP_NAME POST_NAME from PARTY_ORGAN_MEMBER m join SYS_USER u on u.ID=m.USER_ID join PARTY_ORGANIZATION o on o.ID=m.PARTY_ID join SYS_LOOKUP_V p on p.LOOKUP_CODE=m.USER_POST and p.LOOKUP_TYPE='PARTY_POST' and p.SYS_APPLICATION_ID='1' where nvl(m.VALID_FLAG,'1')='1' and p.LOOKUP_NAME in ('党支部书记','支部书记','党委书记','党总支书记','党总支部书记','总支书记','书记') and m.PARTY_ID in ("+scope+") order by o.PARTY_NAME,u.NAME,m.USER_ID");
        int added=0;
        for(Map<String,Object> row:roster){
            int n=jdbc.update("insert into DYN_SJ_COMP_SCORE (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,BATCH_ID,USER_ID,PARTY_ID,EMPLOYEE_CODE,MEMBER_NAME,PARTY_NAME,POST_NAME,RULE_VERSION) select ?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,? from dual where not exists (select 1 from DYN_SJ_COMP_SCORE where BATCH_ID=? and USER_ID=? and PARTY_ID=?)",UUID.randomUUID().toString(),user(r),user(r),SessionHelper.getClientIp(r),SessionHelper.getCurrentOrgIdentity(r),SessionHelper.getCurrentDeptId(r),batchId,row.get("USER_ID"),row.get("PARTY_ID"),row.get("EMPLOYEE_CODE"),row.get("MEMBER_NAME"),row.get("PARTY_NAME"),row.get("POST_NAME"),VERSION,batchId,row.get("USER_ID"),row.get("PARTY_ID"));
            added+=n;
        }
        return added;
    }
    public List<Map<String,Object>> rows(String batchId,HttpServletRequest r){
        batch(batchId,r);List<Map<String,Object>> rows=jdbc.queryForList("select * from DYN_SJ_COMP_SCORE where BATCH_ID=? and PARTY_ID in ("+permission.parties(r)+") order by CREATION_DATE,PARTY_NAME,MEMBER_NAME,ID",batchId);
        for(Map<String,Object> row:rows)result(row);return rows;
    }
    public Map<String,Object> overview(String batchId,HttpServletRequest r){
        List<Map<String,Object>> rows=rows(batchId,r);Map<String,Object> out=summary(rows);List<Map<String,Object>> people=new ArrayList<Map<String,Object>>();
        for(Map<String,Object> row:rows){Map<String,Object> p=new LinkedHashMap<String,Object>();for(String key:new String[]{"ID","MEMBER_NAME","PARTY_NAME","complete"})p.put(key,row.get(key));people.add(p);}out.put("peopleOptions",people);return out;
    }
    public Map<String,Object> list(String batchId,String keyword,String level,int page,int size,HttpServletRequest r){
        List<Map<String,Object>> found=new ArrayList<Map<String,Object>>();
        for(Map<String,Object> row:rows(batchId,r))if((text(keyword).isEmpty()||(text(row.get("MEMBER_NAME"))+" "+text(row.get("PARTY_NAME"))+" "+text(row.get("EMPLOYEE_CODE"))).contains(keyword.trim()))&&(text(level).isEmpty()||level.equals(row.get("level"))))found.add(row);
        int length=Math.max(1,Math.min(100,size)),current=Math.max(1,page),start=(int)Math.min(found.size(),((long)current-1)*length);
        Map<String,Object> out=new LinkedHashMap<String,Object>();out.put("rows",new ArrayList<Map<String,Object>>(found.subList(start,Math.min(found.size(),start+length))));out.put("total",found.size());out.put("page",current);out.put("size",length);return out;
    }
    public Map<String,Object> detail(String id,HttpServletRequest r){
        List<Map<String,Object>> rows=jdbc.queryForList("select * from DYN_SJ_COMP_SCORE where ID=? and PARTY_ID in ("+permission.parties(r)+")",id);require(rows.size()==1,"记录不存在或不在当前数据范围内");return result(rows.get(0));
    }
    private long version(Object value){try{return Long.parseLong(text(value));}catch(Exception ex){throw new IllegalArgumentException("版本信息缺失，请刷新后重试");}}
    public int save(String batchId,List<Map<String,Object>> changes,HttpServletRequest r){
        batch(batchId,r);require(changes!=null&&!changes.isEmpty(),"没有需要保存的修改");
        return tx().execute(status->{Set<String> ids=new HashSet<String>();for(Map<String,Object> change:changes){String id=text(change.get("id"));require(ids.add(id),"保存数据包含重复记录");update(batchId,id,change,r);}return changes.size();});
    }
    private void update(String batchId,String id,Map<String,Object> data,HttpServletRequest r){
        BigDecimal[] s=new BigDecimal[5];for(int i=0;i<5;i++)try{s[i]=score(data.get(FIELDS[i]));}catch(IllegalArgumentException ex){throw new IllegalArgumentException(LABELS[i]+"："+ex.getMessage());}
        int n=jdbc.update("update DYN_SJ_COMP_SCORE set THEORY_SCORE=?,BUSINESS_SCORE=?,INTERVIEW_SCORE=?,SATISFACTION_SCORE=?,ACTIVITY_SCORE=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?,VERSION=VERSION+1 where ID=? and BATCH_ID=? and VERSION=? and PARTY_ID in ("+permission.parties(r)+")",s[0],s[1],s[2],s[3],s[4],user(r),SessionHelper.getClientIp(r),id,batchId,version(data.get("version")));
        require(n==1,"记录已修改或不在当前数据范围内，请刷新后重试；本次修改未保存");
    }
    public Map<String,Object> importFile(String batchId,InputStream stream,String filename,HttpServletRequest request)throws Exception{
        List<Map<String,Object>> visible=rows(batchId,request);
        List<CompetencyExcel.ImportRow> imported;
        try{imported=CompetencyExcel.read(stream);}catch(Exception ex){String error=UUID.randomUUID().toString();LOG.error("书记胜任力导入失败 errorId="+error+", file="+text(filename).replaceAll("[\\r\\n]","_"),ex);throw new IllegalArgumentException((ex instanceof IllegalArgumentException?ex.getMessage():"工作簿无法读取")+"；错误编号："+error);}
        List<Map<String,Object>> results=new ArrayList<Map<String,Object>>();Set<String> seen=new HashSet<String>();int success=0;
        for(CompetencyExcel.ImportRow line:imported){Map<String,Object> result=new LinkedHashMap<String,Object>();result.put("row",line.number);
            try{
                require(line.error==null,line.error);
                Map<String,Object> matched=match(line,visible,request);String id=text(matched.get("ID"));require(seen.add(id),"同一文件人员与党组织组合重复");
                Map<String,Object> change=new LinkedHashMap<String,Object>();change.put("id",id);change.put("version",line.version.isEmpty()?matched.get("VERSION"):line.version);
                for(int i=0;i<5;i++)change.put(FIELDS[i],line.scores[i]);
                tx().execute(status->{update(batchId,id,change,request);return null;});result.put("success",true);result.put("id",id);success++;
            }catch(Exception ex){result.put("success",false);if(ex instanceof IllegalArgumentException)result.put("message",ex.getMessage());else{String error=UUID.randomUUID().toString();LOG.error("书记胜任力导入行错误 errorId="+error+", file="+text(filename).replaceAll("[\\r\\n]","_")+", row="+line.number,ex);result.put("message","导入异常，错误编号："+error);}}
            results.add(result);
        }
        Map<String,Object> out=new LinkedHashMap<String,Object>();out.put("successCount",success);out.put("failureCount",results.size()-success);out.put("results",results);return out;
    }
    private Map<String,Object> match(CompetencyExcel.ImportRow line,List<Map<String,Object>> visible,HttpServletRequest r){
        String uid=line.userId,pid=line.partyId;
        require(uid.isEmpty()==pid.isEmpty(),"人员ID与PARTY_ID须同时提供，或同时留空后使用工号及党组织名称匹配");
        if(uid.isEmpty()){
            require(!line.code.isEmpty(),"工号为空，无法匹配人员");require(!line.partyName.isEmpty(),"党组织名称为空");
            List<String> parties=jdbc.queryForList("select ID from PARTY_ORGANIZATION where PARTY_NAME=?",String.class,line.partyName);
            require(parties.size()==1,parties.isEmpty()?"党组织名称未匹配到系统组织":"党组织名称重复，请使用下载模板中的PARTY_ID");pid=parties.get(0);
            List<String> users=jdbc.queryForList("select ID from SYS_USER where LOGIN_NAME=?",String.class,line.code);require(users.size()==1,users.isEmpty()?"工号未匹配到平台人员":"工号匹配到多个人员");uid=users.get(0);
        }
        List<Map<String,Object>> matches=new ArrayList<Map<String,Object>>();for(Map<String,Object> row:visible)if(uid.equals(text(row.get("USER_ID")))&&pid.equals(text(row.get("PARTY_ID"))))matches.add(row);
        require(matches.size()==1,"人员与党组织未匹配到本批次可见记录，请核对名单或刷新人员");Map<String,Object> row=matches.get(0);
        require(!line.name.isEmpty()&&line.name.equals(text(row.get("MEMBER_NAME"))),"姓名与本批次人员不一致");
        require(line.code.isEmpty()||line.code.equals(text(row.get("EMPLOYEE_CODE"))),"工号与本批次人员不一致");
        require(line.partyName.isEmpty()||line.partyName.equals(text(row.get("PARTY_NAME"))),"党组织名称与本批次记录不一致");return row;
    }
}
