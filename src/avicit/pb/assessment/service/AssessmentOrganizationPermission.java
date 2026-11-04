package avicit.pb.assessment.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.msystem.sysdatapermissions.sysdatapermissionsauth.service.SysDataPermissionsAuthService;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AssessmentOrganizationPermission {
    public static final String MAPPER = "AssessmentOrganizationPermissionMapper.xml";

    public enum Page {
        TWSHYK("LEAGUE_ORGANIZATION", "selectTwshykOrganizationIds"),
        DWSHYK("PARTY_ORGANIZATION", "selectDwshykOrganizationIds"),
        YZBYTS("PARTY_ORGANIZATION", "selectYzbytsOrganizationIds"),
        ZTDR("PARTY_ORGANIZATION", "selectZtdrOrganizationIds"),
        ZXGJ("PARTY_ORGANIZATION", "selectZxgjOrganizationIds");

        public final String table;
        public final String method;
        Page(String table, String method) { this.table = table; this.method = method; }
    }

    @Autowired private SysDataPermissionsAuthService dataPermissions;
    @Autowired private SqlSessionFactory sqlSessionFactory;
    @Autowired private JdbcTemplate jdbc;

    /** Only page controllers resolve session permissions; collectors keep their original business scope. */
    public String visibleOrganizationSql(Page page) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String user = SessionHelper.getLoginSysUserId(request);
        if (user == null || user.isEmpty()) throw new IllegalArgumentException("请先登录");
        List<Map<String, String>> rules = new ArrayList<Map<String, String>>();
        for (String mapperName : jdbc.queryForList(
                "select distinct MAPPER_NAME from SYS_DATA_PERMISSIONS_METHOD where TYPE='0' and TABLE_NAME=? and MAPPER_NAME is not null",
                String.class, page.table)) {
            String name = mapperName.trim().replace('\\', '/');
            if (name.endsWith("]")) name = name.substring(0, name.length() - 1);
            if (!MAPPER.equals(name) && !name.endsWith("/" + MAPPER)) continue;
            List<Map<String, String>> matched = dataPermissions.checkMapper(mapperName, page.method, user);
            if (matched != null) rules.addAll(matched);
        }
        // Preserve the platform's unrestricted behavior when no role formula is assigned.
        if (rules.isEmpty()) return "";
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("loginUserId", user);
        parameters.put("loginDeptId", SessionHelper.getCurrentDeptId(request));
        parameters.put("loginOrgId", SessionHelper.getCurrentOrgIdentity(request));
        parameters.put("tableName", page.table);
        String statement = "avicit.pb.assessment.dao.AssessmentOrganizationPermissionMapper." + page.method;
        String sql = sqlSessionFactory.getConfiguration().getMappedStatement(statement).getBoundSql(null).getSql();
        String scoped = dataPermissions.splicingSql(sql, parameters, rules);
        if (scoped == null || scoped.trim().isEmpty()) {
            throw new IllegalStateException("考核组织行数据权限解析失败，请检查平台规则配置");
        }
        return scoped;
    }
}
