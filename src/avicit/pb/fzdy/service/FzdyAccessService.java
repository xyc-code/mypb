package avicit.pb.fzdy.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.msystem.sysdatapermissions.sysdatapermissionsauth.service.SysDataPermissionsAuthService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

/** Uses the same row authorization as the configured development-member view. */
@Service
public class FzdyAccessService {
    public static final String PERMISSION = "fzdy_convert_party_member";
    @Autowired
    private SysDataPermissionsAuthService dataPermissions;

    public Context authorize(HttpServletRequest request) throws Exception {
        String userId = SessionHelper.getLoginSysUserId(request);
        if (blank(userId) || !SecurityUtils.getSubject().isAuthenticated()
                || !SecurityUtils.getSubject().isPermitted(PERMISSION)) {
            throw new SecurityException("没有发展党员转党员操作权限，请联系管理员授权。");
        }
        String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);
        if (blank(orgIdentity)) throw new SecurityException("当前登录组织不明确。");
        Properties properties = new Properties();
        try (InputStream in = getClass().getResourceAsStream("/fzdy-conversion.properties")) {
            if (in != null) properties.load(in);
        }
        String viewCode = properties.getProperty("viewCode", "").trim();
        if (blank(viewCode)) throw new IllegalStateException("尚未配置发展党员视图编码 viewCode。");
        List<Map<String, String>> rules = dataPermissions.checkEform(viewCode, "DYN_FZDY", userId);
        // The platform returns an empty list on both missing grants and lookup errors.
        // Do not interpret it as unrestricted access, even for administrators.
        if (rules == null || rules.isEmpty()) {
            throw new SecurityException("未取得发展党员视图的数据授权，请联系管理员配置数据权限。");
        }
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("loginUserId", userId);
        parameters.put("loginDeptId", SessionHelper.getCurrentDeptId(request));
        parameters.put("loginOrgId", SessionHelper.getCurrentOrgId(request));
        parameters.put("loginOrgIdentity", orgIdentity);
        parameters.put("tableName", "DYN_FZDY");
        for (Map<String, String> rule : rules) {
            if (blank(rule.get("formula")) || blank(rule.get("methodId"))) {
                throw new SecurityException("发展党员数据授权规则不完整。");
            }
            if (!rules.get(0).get("methodId").equals(rule.get("methodId"))) {
                throw new SecurityException("发展党员视图绑定了多个数据权限方法，请先核对配置。");
            }
        }
        String scopedSql = dataPermissions.splicingSql("select DYN_FZDY.ID from DYN_FZDY", parameters, rules);
        if (blank(scopedSql)) throw new SecurityException("发展党员数据授权解析失败。");
        return new Context(orgIdentity, scopedSql);
    }

    private static boolean blank(String value) { return value == null || value.trim().isEmpty(); }

    public static final class Context {
        public final String orgIdentity;
        public final String scopedSql;

        public Context(String orgIdentity, String scopedSql) {
            this.orgIdentity = orgIdentity;
            this.scopedSql = scopedSql;
        }
    }
}
