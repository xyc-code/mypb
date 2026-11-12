package avicit.pb.membernotice;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.msystem.sysdatapermissions.sysdatapermissionsauth.service.SysDataPermissionsAuthService;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class NoticePermission {
    public static final String MAPPER = "NoticePermissionMapper.xml";
    public static final String METHOD = "selectVisibleNoticeIds";
    @Autowired private SysDataPermissionsAuthService dataPermissions;
    @Autowired private SqlSessionFactory sqlSessionFactory;
    @Autowired private JdbcTemplate jdbc;

    public String visibleIds(HttpServletRequest request) {
        String user = SessionHelper.getLoginSysUserId(request);
        NoticeRules.require(!NoticeRules.text(user).isEmpty(), "请先登录");
        List<String> configuredMappers = jdbc.queryForList("select distinct m.MAPPER_NAME from SYS_DATA_PERMISSIONS_METHOD m "
                + "where m.TYPE='0' and m.TABLE_NAME='DYN_DYFSYZ' and m.METHOD=? "
                + "and exists (select 1 from SYS_DATA_PERMISSIONS_AUTH a where a.METHOD_ID=m.ID and length(trim(a.FORMULA))>0)",
                String.class, METHOD);
        // Preset formulas do not limit access until a formula is assigned to a role.
        if (configuredMappers.isEmpty()) return "select ID from DYN_DYFSYZ";
        List<Map<String, String>> rules = new ArrayList<Map<String, String>>();
        for (String resource : configuredMappers) {
            if (resource == null) continue;
            String name = resource.trim().replace('\\', '/');
            if (name.endsWith("]")) name = name.substring(0, name.length() - 1);
            if (!MAPPER.equals(name) && !name.endsWith("/" + MAPPER)) continue;
            List<Map<String, String>> matched = dataPermissions.checkMapper(resource, METHOD, user);
            if (matched != null) rules.addAll(matched);
        }
        if (rules.isEmpty()) return "select ID from DYN_DYFSYZ where 1=0";
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("loginUserId", user);
        parameters.put("loginDeptId", SessionHelper.getCurrentDeptId(request));
        parameters.put("loginOrgId", SessionHelper.getCurrentOrgIdentity(request));
        parameters.put("tableName", "DYN_DYFSYZ");
        String sql = sqlSessionFactory.getConfiguration().getMappedStatement(
                "avicit.pb.membernotice.dao.NoticePermissionMapper." + METHOD).getBoundSql(null).getSql();
        String scoped = dataPermissions.splicingSql(sql, parameters, rules);
        NoticeRules.require(scoped != null && !scoped.trim().isEmpty(), "党员发送阅知行数据权限解析失败，请核对系统授权公式");
        return scoped;
    }
}
