package avicit.pb.fzdy.service;

import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

@Service
public class FzdyConversionService {
    private static final Logger LOGGER = LoggerFactory.getLogger(FzdyConversionService.class);
    private final JdbcTemplate jdbc;
    private final PartyMemberService members;
    private final SysLookupAPI lookups;
    private final SysUserAPI users;
    private final TransactionTemplate transaction;

    @Autowired
    public FzdyConversionService(JdbcTemplate jdbc, PartyMemberService members, SysLookupAPI lookups,
            SysUserAPI users, @Qualifier("transactionManagerMybatis") PlatformTransactionManager manager) {
        this.jdbc = jdbc;
        this.members = members;
        this.lookups = lookups;
        this.users = users;
        this.transaction = new TransactionTemplate(manager);
        this.transaction.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        this.transaction.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
        this.transaction.setTimeout(30);
    }

    public Map<String, Object> convert(String[] ids, final FzdyAccessService.Context context) {
        if (ids == null || ids.length == 0 || ids.length > 200) {
            throw new IllegalArgumentException("请选择 1 至 200 条发展党员记录。");
        }
        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        Set<String> seen = new HashSet<String>();
        int success = 0, skipped = 0, failed = 0;
        for (String submitted : ids) {
            final String id = text(submitted);
            Map<String, Object> result;
            if (id.isEmpty() || id.length() > 50) {
                result = result(id, "", "skipped", "记录 ID 为空或超长。", null);
            } else if (!seen.add(id)) {
                result = result(id, "", "skipped", "本次选择中包含重复记录。", null);
            } else {
                try {
                    result = transaction.execute(status -> convertOne(id, context));
                } catch (Exception ex) {
                    LOGGER.error("发展党员转换失败，sourceId=" + id, ex);
                    result = result(id, "", "failed", "该条转换已回滚，请管理员检查字段约束、字典或数据库日志。", null);
                }
            }
            results.add(result);
            if ("success".equals(result.get("status"))) success++;
            else if ("skipped".equals(result.get("status"))) skipped++;
            else failed++;
        }
        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("ok", true);
        response.put("success", success);
        response.put("skipped", skipped);
        response.put("failed", failed);
        response.put("results", results);
        return response;
    }

    private Map<String, Object> convertOne(String id, FzdyAccessService.Context context) {
        // The SQL is generated server-side from platform grants, never supplied by the client.
        if (jdbc.queryForList("select ID from (" + context.scopedSql + ") permitted where ID=?", id).isEmpty()) {
            return result(id, "", "skipped", "记录不存在或没有数据访问权限。", null);
        }
        List<Map<String, Object>> rows = jdbc.queryForList(
                "select ID, XM, USER_ID, PARTY_ID, XB, MZ, CRNY, JG, CSD, WHCD, CJGZSJ, XRZW, ZC, SSZH, JTZZ "
                + "from DYN_FZDY where ID=? and ORG_IDENTITY=? for update", id, context.orgIdentity);
        if (rows.size() != 1) return result(id, "", "skipped", "记录不存在或不属于当前组织。", null);
        Map<String, Object> source = rows.get(0);
        String name = text(source.get("XM"));
        // Recheck grants after acquiring the row lock in case source fields changed while waiting.
        if (jdbc.queryForList("select ID from (" + context.scopedSql + ") permitted where ID=?", id).isEmpty()) {
            return result(id, "", "skipped", "没有数据访问权限。", null);
        }
        String idcard = text(source.get("SSZH")).toUpperCase(Locale.ROOT);
        if (idcard.isEmpty()) {
            return result(id, name, "skipped", "身份证号为空，不能转党员。", null);
        }
        List<Map<String, Object>> flows = jdbc.queryForList(
                "select ID_, STATE_, BUSINESSSTATE_, END_ from BPM_HIST_PROCINST where FORMID_=? for update", id);
        // No timestamp guessing: multiple instances require the administrator to resolve the association.
        if (flows.size() != 1) return result(id, name, "skipped", "没有流程或存在多个流程实例，无法确认当前流程。", null);
        Map<String, Object> flow = flows.get(0);
        if (!"ended".equals(text(flow.get("STATE_"))) || !"ended".equals(text(flow.get("BUSINESSSTATE_")))
                || flow.get("END_") == null) {
            return result(id, name, "skipped", "流程尚未正常完成，不能转党员。", null);
        }
        String userId = text(source.get("USER_ID"));
        String partyId = text(source.get("PARTY_ID"));
        if (userId.isEmpty() || partyId.isEmpty()) return result(id, name, "skipped", "用户 ID 或党组织 ID 为空。", null);
        List<Map<String, Object>> userRows = jdbc.queryForList("select ID, NO, STATUS from SYS_USER where ID=?", userId);
        if (userRows.size() != 1 || !"1".equals(text(userRows.get(0).get("STATUS")))) {
            return result(id, name, "skipped", "系统用户不存在或无效。", null);
        }
        if (jdbc.queryForObject("select count(*) from PARTY_ORGANIZATION where ID=? and ORG_IDENTITY=?",
                Integer.class, partyId, context.orgIdentity) != 1) {
            return result(id, name, "skipped", "党组织不存在或不属于当前组织。", null);
        }
        SysUser user = users.getSysUserById(userId);
        if (user == null || text(user.getDeptId()).isEmpty() || text(userRows.get(0).get("NO")).isEmpty()) {
            return result(id, name, "skipped", "系统用户的人员编码或部门不完整。", null);
        }
        PartyMemberDTO dto = new PartyMemberDTO();
        dto.setUserId(userId);
        dto.setPartyId(partyId);
        dto.setUserCode(text(userRows.get(0).get("NO")));
        dto.setDeptId(user.getDeptId());
        try {
            dto.setSex(lookup("PLATFORM_SEX", source.get("XB"), false));
            dto.setEducationLevel(lookup("PM_EDUCATION_LEVEL", source.get("WHCD"), false));
            dto.setPartyType(lookup("PM_PARTY_TYPE", "正式党员", true));
        } catch (IllegalArgumentException ex) {
            return result(id, name, "skipped", ex.getMessage(), null);
        }
        dto.setNation(nullable(source.get("MZ")));
        dto.setBirthday(date(source.get("CRNY")));
        dto.setOrign(nullable(source.get("JG")));
        dto.setBirthPlace(nullable(source.get("CSD")));
        dto.setWorkTime(date(source.get("CJGZSJ")));
        dto.setPost(nullable(source.get("XRZW")));
        dto.setProfessionalRank(nullable(source.get("ZC")));
        dto.setIdcard(idcard);
        dto.setAddress(nullable(source.get("JTZZ")));
        dto.setStatus("1");
        dto.setOrgIdentity(context.orgIdentity);
        // Missing dates/categories are intentionally null. Do not borrow application dates.
        try {
            // No extra columns/lock table: serialize only the final check-and-insert.
            // A SYS_USER row lock cannot protect identical ID cards on different user accounts.
            jdbc.execute("lock table PARTY_MEMBER in exclusive mode");
            if (jdbc.queryForObject("select count(*) from PARTY_MEMBER where upper(trim(IDCARD))=?",
                    Integer.class, idcard) > 0) {
                return result(id, name, "skipped", "该身份证号已存在党员记录（包括无效党员），不重复新增。", null);
            }
            String memberId = members.insertPartyMember(dto);
            if (text(memberId).isEmpty()) throw new IllegalStateException("新增党员未返回主键");
            return result(id, name, "success", "已新增为有效正式党员。", memberId);
        } catch (Exception ex) {
            // Checked exceptions must also roll back the REQUIRES_NEW transaction.
            throw new IllegalStateException("党员新增失败", ex);
        }
    }

    private String lookup(String type, Object raw, boolean nameOnly) {
        String value = text(raw);
        if (value.isEmpty()) return null;
        Collection<SysLookupSimpleVo> values = lookups.getLookUpListByTypeByAppId(type, "1");
        Set<String> matches = new HashSet<String>();
        if (values != null) for (SysLookupSimpleVo item : values) {
            if (value.equals(item.getLookupName()) || (!nameOnly && value.equals(item.getLookupCode()))) {
                if (!text(item.getLookupCode()).isEmpty()) matches.add(item.getLookupCode());
            }
        }
        if (matches.size() != 1) throw new IllegalArgumentException(type + " 字典值缺失或不唯一，请核对源数据与字典。");
        return matches.iterator().next();
    }

    private static Date date(Object value) {
        if (value == null) return null;
        if (value instanceof Date) return (Date) value;
        throw new IllegalArgumentException("源日期字段不是数据库日期类型");
    }

    private static String text(Object value) { return value == null ? "" : value.toString().trim(); }
    private static String nullable(Object value) { String s = text(value); return s.isEmpty() ? null : s; }

    private static Map<String, Object> result(String id, String name, String status, String message, String memberId) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("id", id);
        result.put("name", name);
        result.put("status", status);
        result.put("message", message);
        if (memberId != null) result.put("memberId", memberId);
        return result;
    }
}
