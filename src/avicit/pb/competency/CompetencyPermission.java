package avicit.pb.competency;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.msystem.sysdatapermissions.sysdatapermissionsauth.service.SysDataPermissionsAuthService;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;
import java.util.*;
import static avicit.pb.competency.CompetencyRules.*;

@Service
public class CompetencyPermission {
    public static final String METHOD="selectVisiblePartyIds", MAPPER="CompetencyPermissionMapper.xml";
    @Autowired private SysDataPermissionsAuthService permissions;
    @Autowired private SqlSessionFactory factory;
    @Autowired private JdbcTemplate jdbc;
    public String parties(HttpServletRequest request) {
        String user=SessionHelper.getLoginSysUserId(request);require(!text(user).isEmpty(),"请先登录");
        List<String> resources=jdbc.queryForList("select distinct m.MAPPER_NAME from SYS_DATA_PERMISSIONS_METHOD m where m.TYPE='0' and m.TABLE_NAME='DYN_SJ_COMP_SCORE' and m.METHOD=? and exists (select 1 from SYS_DATA_PERMISSIONS_AUTH a where a.METHOD_ID=m.ID and length(trim(a.FORMULA))>0)",String.class,METHOD);
        if(resources.isEmpty())return "select ID from PARTY_ORGANIZATION union select PARTY_ID from DYN_SJ_COMP_SCORE";
        List<Map<String,String>> rules=new ArrayList<Map<String,String>>();
        for(String resource:resources){String name=text(resource).replace('\\','/');if(name.endsWith("]"))name=name.substring(0,name.length()-1);if(MAPPER.equals(name)||name.endsWith("/"+MAPPER)){List<Map<String,String>> found=permissions.checkMapper(resource,METHOD,user);if(found!=null)rules.addAll(found);}}
        if(rules.isEmpty())return "select ID from PARTY_ORGANIZATION where 1=0";
        Map<String,String> params=new HashMap<String,String>();params.put("loginUserId",user);params.put("loginDeptId",SessionHelper.getCurrentDeptId(request));params.put("loginOrgId",SessionHelper.getCurrentOrgIdentity(request));params.put("tableName","DYN_SJ_COMP_SCORE");
        String source=factory.getConfiguration().getMappedStatement("avicit.pb.competency.dao.CompetencyPermissionMapper."+METHOD).getBoundSql(null).getSql();
        // The platform's select/view entry point appends predicates to the outer PARTY_ID projection.
        params.put("sql",source);
        String scoped=permissions.splicingSelectSql(params,rules);require(!text(scoped).isEmpty(),"书记胜任力行数据权限解析失败，请检查平台公式");return scoped;
    }
}
