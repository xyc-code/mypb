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
public class MonthlyAssessmentDataPermission {
    public static final String MAPPER = "MonthlyAssessmentPermissionMapper.xml";
    public static final String METHOD = "selectVisibleResultIds";
    public static final String STATEMENT = "avicit.pb.assessment.dao.MonthlyAssessmentPermissionMapper." + METHOD;
    @Autowired private SysDataPermissionsAuthService dataPermissions;
    @Autowired private SqlSessionFactory sqlSessionFactory;
    @Autowired private JdbcTemplate jdbc;

    public String visibleResultSql() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String user = SessionHelper.getLoginSysUserId(request);
        if (user == null || user.isEmpty()) throw new IllegalArgumentException("请先登录");
        List<Map<String, String>> rules = new ArrayList<Map<String, String>>();
        for (String mapperName : jdbc.queryForList(
                "select distinct MAPPER_NAME from SYS_DATA_PERMISSIONS_METHOD where TYPE='0' and TABLE_NAME=? and MAPPER_NAME is not null",
                String.class, "PB_ASSESS_RESULT_DEPT")) {
            // Use the registered resource value even when the deployment directory changes.
            String name = mapperName.trim().replace('\\', '/');
            if (name.endsWith("]")) name = name.substring(0, name.length() - 1);
            if (!MAPPER.equals(name) && !name.endsWith("/" + MAPPER)) continue;
            List<Map<String, String>> matched = dataPermissions.checkMapper(mapperName, METHOD, user);
            if (matched != null) rules.addAll(matched);
        }
        // PB leaves reads unrestricted when no role formula is assigned.
        if (rules.isEmpty()) return "";
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("loginUserId", user);
        parameters.put("loginDeptId", SessionHelper.getCurrentDeptId(request));
        parameters.put("loginOrgId", SessionHelper.getCurrentOrgIdentity(request));
        parameters.put("tableName", "PB_ASSESS_RESULT_DEPT");
        String sql = sqlSessionFactory.getConfiguration().getMappedStatement(STATEMENT).getBoundSql(null).getSql();
        String scoped = dataPermissions.splicingSql(sql, parameters, rules);
        if (scoped == null || scoped.trim().isEmpty()) {
            throw new IllegalStateException("月度考核行数据权限解析失败，请检查平台规则配置");
        }
        return scoped;
    }
}
