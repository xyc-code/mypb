package avicit.pb.groupsync.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.LinkedHashSet;
import java.util.Set;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/** 集团 FINEDB 正式表同步与只读分页服务。正式表不写入 PB 元数据。 */
@Service
public class GroupFormalDataSyncService {
    // Formal tables are owned by the PB connection schema in the intranet (PT6).
    // Keep identifiers unqualified so the same package follows the authenticated schema.
    private static final String MEMBER_TABLE = "PULL_D12_PTY_MBR_BASIC_INFO";
    private static final String ORG_TABLE = "PULL_D12_PTY_ORG_BASIC_INFO";
    private static final int MAX_PAGE_SIZE = 200;
    private static final String ROOT_PARENT_UID = "00000000000000000000000000000000";
    private static final Object SYNC_LOCK = new Object();
    private static final Map<String, String> LOOKUP_TYPES = new LinkedHashMap<String, String>();
    static {
        LOOKUP_TYPES.put("DY_GENDER", "PLATFORM_SEX");
        LOOKUP_TYPES.put("DY_EDUCATION_LEVEL", "PM_EDUCATION_LEVEL");
        LOOKUP_TYPES.put("DY_DEGREE", "PLATFORM_DEGREE");
        LOOKUP_TYPES.put("DY_ETHNICITY", "PLATFORM_FOLK");
        LOOKUP_TYPES.put("DY_NEW_SOCIAL_STRATUM_TYPE", "PM_CATEGORY");
        LOOKUP_TYPES.put("DY_PROFESSIONAL_POSITION", "PM_PROFESSIONAL_RANK_LEVEL");
        LOOKUP_TYPES.put("DY_IS_MIGRANT_WORKER", "PLATFORM_SYSTEM_FLAG");
        LOOKUP_TYPES.put("DY_ENTRY_SYSTEM_TYPE", "PM_JOINZG_TYPE");
        LOOKUP_TYPES.put("DZZ_PARTY_ORGANIZATION_CATEGORY", "PARTY_ORG_TYPE");
    }
    private static final String[] MEMBER_EXPORT_FIELDS = new String[] {"RYJBXX_GROUP_EMPLOYEE_COPE","DY_COMPANY_NAME","DY_PARTY_MEMBER_UNIQUE_ID","DY_NAME","DY_GENDER","DY_ID_NUMBER","DY_BIRTH_DATE","DY_EDUCATION_LEVEL","DY_DEGREE","DY_ETHNICITY","DY_JOB_POSITION","DY_NEW_SOCIAL_STRATUM_TYPE","DY_PROFESSIONAL_POSITION","DY_IS_MIGRANT_WORKER","DY_MOBILE_NUMBER","DY_AFFILIATED_BRANCH","DY_PARTY_ORGANIZATION_UNIQUE_ID","DY_JOINT_BRANCH_UNIT","DY_HOUSEHOLD_LOCATION","DY_CURRENT_ADDRESS","DY_PARTY_ENTRY_DATE","DY_PARTY_REGULARIZATION_DATE","DY_PARTY_YEARS","DY_PARTY_YEARS_CORRECTION","DY_ENTRY_SYSTEM_TYPE","DY_ENTRY_SYSTEM_DATE","DY_ENTRY_SYSTEM_OPERATING_PARTY_ID","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_DATE","DY_EXIT_SYSTEM_OPERATING_PARTY_ID","DY_UPDATE_TIMESTAMP","DY_OPERATING_PARTY_ORGANIZATION"};
    private static final String[] ORG_EXPORT_FIELDS = new String[] {"DZZ_PARTY_ORGANIZATION_UNIQUE_ID","DZZ_COMPANY_NAME","DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID","DZZ_PARTY_ORGANIZATION_ENCODING","DZZ_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_ORGANIZATION_SHORT_NAME","DZZ_PARTY_ORGANIZATION_CATEGORY","DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE","DZZ_PARTY_ORGANIZATION_MEMBER_COUNT","DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE","DZZ_PARTY_ORGANIZATION_CONTACT_NAME","DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE","DZZ_PARTY_ORGANIZATION_UNIT_SITUATION","DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA","DZZ_DISPLAY_ORDER","DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME","DZZ_DELETE_FLAG","DZZ_UPDATE_TIMESTAMP","DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY","DZZ_OPERATING_PARTY_ORGANIZATION"};
    private static final String[] MEMBER_EXPORT_HEADERS = new String[] {"集团员工编码","企业名称","党员唯一标识","姓名","性别","公民身份号码","出生日期","学历","学位","民族","工作岗位","新社会阶层类型","从事专业技术职务","是否农民工","手机号码","组织关系所在党支部","党组织唯一标识","联合支部所在单位","户籍所在地","现居住地","入党日期","转正日期","党龄","党龄校正值","进入本信息系统类型","进入本信息系统日期","进入本信息系统操作党组织唯一标识","离开本信息系统类型","离开本信息系统日期","离开本信息系统操作党组织唯一标识","更新时间戳","操作党组织"};
    private static final String[] ORG_EXPORT_HEADERS = new String[] {"党组织唯一标识","企业名称","上一级党组织唯一标识","党组织编码","党组织全称","党组织简称","组织类别","成立日期","党组织党员人数","党组织联系人集团员工编码","党组织联系人","联系电话","党组织所在单位情况","党组织所在行政区划","显示排序","批准成立的上级党组织全称","删除标识","更新时间戳","党支部标准化规范化建设类别","操作党组织"};

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static class FormalSchemaNotReadyException extends RuntimeException {
        private static final long serialVersionUID = 1L;
        public FormalSchemaNotReadyException() { super("集团正式表尚未安装，请执行初始化脚本并联系 DBA"); }
    }

    public static boolean isFormalSchemaNotReady(Throwable error) {
        Throwable current = error;
        while (current != null) {
            String message = current.getMessage();
            if (message != null) {
                String text = message.toLowerCase();
                if (text.contains("无效模式名") || text.contains("invalid schema") || text.contains("表或视图不存在")
                        || text.contains("table or view does not exist") || text.contains("对象不存在")
                        || text.contains("object does not exist")) { return true; }
            }
            current = current.getCause();
        }
        return error instanceof FormalSchemaNotReadyException;
    }

    public void ensureFormalSchemaReady() {
        try {
            jdbcTemplate.queryForObject("select count(1) from " + MEMBER_TABLE, Number.class);
            jdbcTemplate.queryForObject("select count(1) from " + ORG_TABLE, Number.class);
        } catch (RuntimeException ex) {
            if (isFormalSchemaNotReady(ex)) { throw new FormalSchemaNotReadyException(); }
            throw ex;
        }
    }

    public Map<String, Object> sync(String orgIdentity, String executor, String trigger, Date updatedAfter,
                                    String callIp) {
        synchronized (SYNC_LOCK) {
            ensureFormalSchemaReady();
            String batchId = java.util.UUID.randomUUID().toString().replace("-", "");
            int success = 0;
            int errors = 0;
            List<String> errorMessages = new ArrayList<String>();
            try {
                jdbcTemplate.update("insert into DYN_GROUP_SYNC_LOG (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_START_TIME,STATUS,TOTAL_COUNT,SUCCESS_COUNT,ERROR_COUNT,DELETED_COUNT,TRIGGER_TYPE,EXECUTOR_ID,CALL_IP,INCREMENTAL_FROM) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        batchId, executor, new Date(), executor, new Date(), callIp, 1, orgIdentity, new Date(), "RUNNING", 0, 0, 0, 0, trigger, executor, callIp, updatedAfter);
                Map<String, String> organizations = new HashMap<String, String>();
                List<Map<String, Object>> orgRows = sourceRows("select p.*, (select count(1) from PARTY_MEMBER m where m.PARTY_ID=p.ID and nvl(m.STATUS,'1')='1') MEMBER_COUNT, (select pp.PARTY_NAME from PARTY_ORGANIZATION pp where pp.ID=p.PARENT_ID) PARENT_NAME from PARTY_ORGANIZATION p where p.ORG_IDENTITY=? and nvl(p.VALID_FLAG,'1')='1'" + since(updatedAfter, "p") + " order by p.TREE_LEVEL,p.TREE_SORTS,p.TREE_SORT", orgIdentity, updatedAfter);
                for (Map<String, Object> row : orgRows) {
                    try {
                        String sourceId = text(row.get("ID"));
                        String key = require(sourceId, "组织ID");
                        String sourceParent = text(row.get("PARENT_ID"));
                        String parent = sourceParent.length() == 0 || "-1".equals(sourceParent) ? ROOT_PARENT_UID : findMapped(orgIdentity, "PARTY_ORGANIZATION", sourceParent);
                        if (parent.length() == 0) {
                            throw new IllegalArgumentException("组织父级缺失");
                        }
                        String targetUid = findMapped(orgIdentity, "PARTY_ORGANIZATION", sourceId);
                        if (targetUid.length() == 0) { targetUid = java.util.UUID.randomUUID().toString().replace("-", ""); }
                        Map<String, Object> target = organization(row, targetUid, parent);
                        if (sourceParent.length() == 0 || "-1".equals(sourceParent)) {
                            target.put("DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", text(row.get("PARTY_NAME")));
                        }
                        target.putAll(contact(sourceId));
                        translateLookupValues(target);
                        validate(target, organizationLimits());
                        requireValues(target, new String[]{"DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE","DZZ_PARTY_ORGANIZATION_MEMBER_COUNT","DZZ_DISPLAY_ORDER","DZZ_DELETE_FLAG"});
                        upsert(ORG_TABLE, "DZZ_PARTY_ORGANIZATION_UNIQUE_ID", target);
                        mapSource(orgIdentity, "PARTY_ORGANIZATION", sourceId, ORG_TABLE, targetUid, executor, callIp);
                        organizations.put(sourceId, targetUid);
                        success++;
                    } catch (Exception ex) {
                        errors++;
                        reject(batchId, "PARTY_ORGANIZATION", text(row.get("ID")), ex.getMessage(), orgIdentity, callIp);
                        errorMessages.add("组织" + text(row.get("ID")) + ":" + ex.getMessage());
                    }
                }
                List<Map<String, Object>> memberRows = sourceRows("select m.*, u.NAME USER_NAME, u.MOBILE USER_MOBILE, p.PARTY_NAME PARTY_NAME, p.ORG_IDENTITY PARTY_ORG_ID, p.PARTY_CODE PARTY_CODE, p.PARTY_NAME COMPANY_NAME, m.EDUCATION_SECTOR EDUCATION_LEVEL, m.POST PROFESSIONAL_RANK, m.JOIN_PARTY JOIN_SYSTEM_DATE, m.CREATED_BY JOIN_OPERATING_PARTY_ID, m.REGULAR_TYPE EXIT_SYSTEM_TYPE, m.REGULAR_DATE EXIT_SYSTEM_DATE, m.LAST_UPDATED_BY EXIT_SYSTEM_OPERATING_PARTY_ID, floor((current_date-m.JOIN_PARTY)/365) PARTY_YEARS, 0 PARTY_YEARS_CORRECTION from PARTY_MEMBER m left join SYS_USER u on u.ID=m.USER_ID left join PARTY_ORGANIZATION p on p.ID=m.PARTY_ID where m.ORG_IDENTITY=? and nvl(m.STATUS,'1')='1'" + since(updatedAfter, "m"), orgIdentity, updatedAfter);
                for (Map<String, Object> row : memberRows) {
                    try {
                        String sourceId = require(text(row.get("ID")), "党员ID");
                        String employeeCode = text(row.get("USER_CODE"));
                        if (employeeCode.trim().length() == 0) { employeeCode = "UNKNOWN"; }
                        if (employeeCode.length() > 8) { throw new IllegalArgumentException("集团员工编码超长"); }
                        String partyId = text(row.get("PARTY_ID"));
                        String partyUid = organizations.get(partyId);
                        if (partyUid == null || partyUid.length() == 0) { partyUid = findMapped(orgIdentity, "PARTY_ORGANIZATION", partyId); }
                        if (partyUid == null || partyUid.length() == 0) { partyUid = ROOT_PARENT_UID; }
                        Map<String, Object> target = member(row, employeeCode, partyUid);
                        applyMemberDefaults(target, sourceId);
                        translateLookupValues(target);
                        upsert(MEMBER_TABLE, "RYJBXX_GROUP_EMPLOYEE_COPE", target);
                        mapSource(orgIdentity, "PARTY_MEMBER", sourceId, MEMBER_TABLE, text(target.get("DY_PARTY_MEMBER_UNIQUE_ID")), executor, callIp);
                        success++;
                    } catch (Exception ex) {
                        errors++;
                        reject(batchId, "PARTY_MEMBER", text(row.get("ID")), ex.getMessage(), orgIdentity, callIp);
                        errorMessages.add("党员" + text(row.get("ID")) + ":" + ex.getMessage());
                    }
                }
                String status = errors == 0 ? "SUCCESS" : "PARTIAL";
                jdbcTemplate.update("update DYN_GROUP_SYNC_LOG set BATCH_END_TIME=?,STATUS=?,TOTAL_COUNT=?,SUCCESS_COUNT=?,ERROR_COUNT=?,ERROR_MESSAGE=? where ID=?",
                        new Date(), status, success + errors, success, errors, join(errorMessages, "\n"), batchId);
                Map<String, Object> result = new HashMap<String, Object>();
                result.put("batchId", batchId); result.put("success", success); result.put("errors", errors);
                result.put("status", status); result.put("deleted", Integer.valueOf(0));
                return result;
            } catch (RuntimeException ex) {
                jdbcTemplate.update("update DYN_GROUP_SYNC_LOG set BATCH_END_TIME=?,STATUS=?,ERROR_MESSAGE=? where ID=?", new Date(), "FAILED", ex.toString(), batchId);
                throw ex;
            }
        }
    }

    public Map<String, Object> page(String type, int page, int pageSize, Date updatedAfter, String callIp) {
        ensureFormalSchemaReady();
        if (!"member".equalsIgnoreCase(type) && !"organization".equalsIgnoreCase(type)) {
            throw new IllegalArgumentException("type 必须为 member 或 organization");
        }
        int safePage = Math.max(1, page);
        int safeSize = Math.min(Math.max(1, pageSize), MAX_PAGE_SIZE);
        String table = "member".equalsIgnoreCase(type) ? MEMBER_TABLE : ORG_TABLE;
        String key = "member".equalsIgnoreCase(type) ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        String updateColumn = "member".equalsIgnoreCase(type) ? "DY_UPDATE_TIMESTAMP" : "DZZ_UPDATE_TIMESTAMP";
        String where = updatedAfter == null ? "" : " where " + updateColumn + ">?";
        List<Object> args = new ArrayList<Object>(); if (updatedAfter != null) { args.add(updatedAfter); }
        Number total = jdbcTemplate.queryForObject("select count(1) from " + table + where, Number.class, args.toArray());
        int from = (safePage - 1) * safeSize;
        args.add(Integer.valueOf(from)); args.add(Integer.valueOf(from + safeSize));
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from (select t.*, row_number() over(order by t." + updateColumn + ",t." + key + ") rn from " + table + " t" + (where.length() == 0 ? "" : where) + ") where rn>? and rn<=?", args.toArray());
        for (Map<String,Object> row : rows) { row.remove("RN"); row.remove("rn"); }
        Map<String, Object> result = new HashMap<String, Object>(); result.put("rows", rows); result.put("total", total); result.put("page", safePage); result.put("pageSize", safeSize); result.put("updatedAfter", updatedAfter); logAccess(callIp, type);
        return result;
    }

    /** 数据中心直读接口：返回指定正式表的全部正式字段，不附加 PB 辅助字段。 */
    public Map<String, Object> all(String type, Date updatedAfter, String callIp) {
        ensureFormalSchemaReady();
        boolean member = "member".equalsIgnoreCase(type);
        if (!member && !"organization".equalsIgnoreCase(type)) {
            throw new IllegalArgumentException("type 必须为 member 或 organization");
        }
        String table = member ? MEMBER_TABLE : ORG_TABLE;
        String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        String updateColumn = member ? "DY_UPDATE_TIMESTAMP" : "DZZ_UPDATE_TIMESTAMP";
        String where = updatedAfter == null ? "" : " where " + updateColumn + ">?";
        List<Map<String, Object>> rows = updatedAfter == null
                ? jdbcTemplate.queryForList("select * from " + table + " order by " + updateColumn + "," + key)
                : jdbcTemplate.queryForList("select * from " + table + where + " order by " + updateColumn + "," + key, updatedAfter);
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("rows", rows);
        result.put("total", Integer.valueOf(rows.size()));
        result.put("type", type.toLowerCase());
        result.put("updatedAfter", updatedAfter);
        logAccess(callIp, type);
        return result;
    }

    /** Compatibility surface for the original maintenance page; storage remains the formal tables. */
    public Map<String, Object> list(String type, String keyword, String status, int page, int pageSize,
                                    String orgIdentity, String userId) {
        ensureFormalSchemaReady();
        boolean member = "member".equalsIgnoreCase(type);
        if (!member && !"organization".equalsIgnoreCase(type)) { throw new IllegalArgumentException("type 必须为 member 或 organization"); }
        String table = member ? MEMBER_TABLE : ORG_TABLE;
        String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        String name = member ? "DY_NAME" : "DZZ_PARTY_ORGANIZATION_FULL_NAME";
        String code = member ? "DY_ID_NUMBER" : "DZZ_PARTY_ORGANIZATION_ENCODING";
        StringBuilder where = new StringBuilder(" where 1=1");
        List<Object> args = new ArrayList<Object>();
        if (keyword != null && keyword.trim().length() > 0) { where.append(" and (").append(name).append(" like ? or ").append(code).append(" like ?)"); args.add("%" + keyword.trim() + "%"); args.add("%" + keyword.trim() + "%"); }
        Number total = jdbcTemplate.queryForObject("select count(1) from " + table + where, Number.class, args.toArray());
        int safePage = Math.max(1, page), safeSize = pageSize <= 0 ? 0 : Math.min(pageSize, MAX_PAGE_SIZE);
        List<Map<String, Object>> rows;
        if (safeSize == 0) { rows = jdbcTemplate.queryForList("select * from " + table + where + " order by " + key, args.toArray()); }
        else { List<Object> pageArgs = new ArrayList<Object>(args); pageArgs.add((safePage - 1) * safeSize); pageArgs.add(safePage * safeSize); rows = jdbcTemplate.queryForList("select * from (select t.*,row_number() over(order by t." + key + ") RN from " + table + " t" + where + ") where RN>? and RN<=?", pageArgs.toArray()); for (Map<String,Object> row : rows) row.remove("RN"); }
        for (Map<String,Object> row : rows) { row.put("ID", row.get(key)); if (member) row.put("DY_JBXX_GROUP_EMPLOYEE_CODE", row.get("RYJBXX_GROUP_EMPLOYEE_COPE")); }
        Map<String,Object> result = new HashMap<String,Object>(); result.put("rows", rows); result.put("total", total == null ? 0 : total.intValue()); result.put("page", safePage); result.put("pageSize", safeSize); return result;
    }

    public Map<String, Object> get(String type, String id, String orgIdentity, String userId) {
        boolean member = "member".equalsIgnoreCase(type); String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        List<Map<String,Object>> rows = jdbcTemplate.queryForList("select * from " + (member ? MEMBER_TABLE : ORG_TABLE) + " where " + key + "=?", id);
        if (rows.isEmpty()) return null; Map<String,Object> row = rows.get(0); row.put("ID", id); if (member) row.put("DY_JBXX_GROUP_EMPLOYEE_CODE", row.get("RYJBXX_GROUP_EMPLOYEE_COPE")); return row;
    }

    public Map<String, Object> save(String type, Map<String, String> params, HttpServletRequest request) {
        boolean member = "member".equalsIgnoreCase(type); String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID"; String table = member ? MEMBER_TABLE : ORG_TABLE;
        String id = text(params.get("ID")); if (id.length() == 0) id = text(params.get(member ? "DY_JBXX_GROUP_EMPLOYEE_CODE" : key));
        if (id.length() == 0) id = java.util.UUID.randomUUID().toString().replace("-", "");
        Map<String,Object> values = new HashMap<String,Object>();
        Map<String,Object> existing = get(type, id, "", "");
        if (existing != null) { values.putAll(existing); }
        values.remove("ID");
        values.remove("DY_JBXX_GROUP_EMPLOYEE_CODE");
        values.put(key, id);
        for (Map.Entry<String,String> e : params.entrySet()) { String column = e.getKey(); if ("ID".equals(column) || "type".equals(column)) continue; if (member && "DY_JBXX_GROUP_EMPLOYEE_CODE".equals(column)) continue; if (column.matches("[A-Z][A-Z0-9_]{1,63}")) values.put(column, e.getValue()); }
        if (member && values.get("DY_PARTY_ORGANIZATION_UNIQUE_ID") == null) throw new IllegalArgumentException("新增党员必须指定党组织");
        normalizeFormalTypes(values, member);
        validate(values, member ? memberLimits() : organizationLimits());
        requireValues(values, member ? new String[]{"RYJBXX_GROUP_EMPLOYEE_COPE","DY_COMPANY_NAME","DY_PARTY_MEMBER_UNIQUE_ID","DY_NAME","DY_GENDER","DY_ID_NUMBER","DY_BIRTH_DATE","DY_EDUCATION_LEVEL","DY_DEGREE","DY_ETHNICITY","DY_JOB_POSITION","DY_NEW_SOCIAL_STRATUM_TYPE","DY_PROFESSIONAL_POSITION","DY_IS_MIGRANT_WORKER","DY_MOBILE_NUMBER","DY_AFFILIATED_BRANCH","DY_PARTY_ORGANIZATION_UNIQUE_ID","DY_HOUSEHOLD_LOCATION","DY_CURRENT_ADDRESS","DY_PARTY_ENTRY_DATE","DY_PARTY_REGULARIZATION_DATE","DY_PARTY_YEARS","DY_PARTY_YEARS_CORRECTION","DY_ENTRY_SYSTEM_TYPE","DY_ENTRY_SYSTEM_DATE","DY_ENTRY_SYSTEM_OPERATING_PARTY_ID","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_DATE","DY_EXIT_SYSTEM_OPERATING_PARTY_ID","DY_UPDATE_TIMESTAMP","DY_OPERATING_PARTY_ORGANIZATION"} : new String[]{"DZZ_PARTY_ORGANIZATION_UNIQUE_ID","DZZ_COMPANY_NAME","DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID","DZZ_PARTY_ORGANIZATION_ENCODING","DZZ_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_ORGANIZATION_SHORT_NAME","DZZ_PARTY_ORGANIZATION_CATEGORY","DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE","DZZ_PARTY_ORGANIZATION_MEMBER_COUNT","DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE","DZZ_PARTY_ORGANIZATION_CONTACT_NAME","DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE","DZZ_PARTY_ORGANIZATION_UNIT_SITUATION","DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA","DZZ_DISPLAY_ORDER","DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME","DZZ_DELETE_FLAG"});
        upsert(table, key, values); return get(type, id, "", "");
    }

    private void normalizeFormalTypes(Map<String,Object> values, boolean member) {
        String[] integers = member ? new String[]{"DY_PARTY_YEARS","DY_PARTY_YEARS_CORRECTION"} : new String[]{"DZZ_PARTY_ORGANIZATION_MEMBER_COUNT","DZZ_DISPLAY_ORDER"};
        for (String field : integers) {
            Object value = values.get(field);
            if (value instanceof String && ((String)value).trim().length() > 0) values.put(field, Integer.valueOf(((String)value).trim()));
        }
        String[] dates = member ? new String[]{"DY_BIRTH_DATE","DY_PARTY_ENTRY_DATE","DY_PARTY_REGULARIZATION_DATE","DY_ENTRY_SYSTEM_DATE","DY_EXIT_SYSTEM_DATE"} : new String[]{"DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE"};
        for (String field : dates) {
            Object value = values.get(field);
            if (value instanceof String && ((String)value).trim().length() > 0) values.put(field, formalDate((String)value));
        }
        String timestamp = member ? "DY_UPDATE_TIMESTAMP" : "DZZ_UPDATE_TIMESTAMP";
        Object value = values.get(timestamp);
        if (value instanceof String && ((String)value).trim().length() > 0) values.put(timestamp, formalTimestamp((String)value));
    }

    private java.sql.Date formalDate(String raw) {
        String value = raw.trim();
        if (value.matches("\\d{10,}")) return new java.sql.Date(Long.parseLong(value));
        if (value.length() > 10) value = value.substring(0, 10);
        return java.sql.Date.valueOf(value);
    }

    private java.sql.Timestamp formalTimestamp(String raw) {
        String value = raw.trim();
        if (value.matches("\\d{10,}")) return new java.sql.Timestamp(Long.parseLong(value));
        if (value.length() == 10) value += " 00:00:00";
        return java.sql.Timestamp.valueOf(value);
    }

    public int physicalDelete(String type, String id, HttpServletRequest request) {
        boolean member = "member".equalsIgnoreCase(type); String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        if (!member) { jdbcTemplate.update("delete from " + MEMBER_TABLE + " where DY_PARTY_ORGANIZATION_UNIQUE_ID=?", id); }
        int count = jdbcTemplate.update("delete from " + (member ? MEMBER_TABLE : ORG_TABLE) + " where " + key + "=?", id);
        jdbcTemplate.update("delete from DYN_GROUP_SYNC_ID_MAP where TARGET_KEY=?", id); return count;
    }
    public int physicalDeleteBatch(String type, String ids, HttpServletRequest request) { int n=0; if (ids != null) for (String id : ids.split(",")) if (id.trim().length()>0) n += physicalDelete(type,id.trim(),request); return n; }
    public List<Map<String,Object>> logs(String orgIdentity) { return jdbcTemplate.queryForList("select * from DYN_GROUP_SYNC_LOG order by BATCH_START_TIME desc"); }

    /** Keeps the original ZIP/XLSX workflow while exposing only formal-table columns. */
    public byte[] exportZip(String type, String ids, String keyword, String status) throws IOException {
        ensureFormalSchemaReady();
        boolean member = "member".equalsIgnoreCase(type);
        String table = member ? MEMBER_TABLE : ORG_TABLE;
        String key = member ? "RYJBXX_GROUP_EMPLOYEE_COPE" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        String name = member ? "DY_NAME" : "DZZ_PARTY_ORGANIZATION_FULL_NAME";
        String code = member ? "DY_ID_NUMBER" : "DZZ_PARTY_ORGANIZATION_ENCODING";
        StringBuilder sql = new StringBuilder("select * from ").append(table).append(" where 1=1");
        List<Object> args = new ArrayList<Object>();
        if (StringUtils.isNotBlank(keyword)) { sql.append(" and (").append(name).append(" like ? or ").append(code).append(" like ?)"); args.add("%" + keyword.trim() + "%"); args.add("%" + keyword.trim() + "%"); }
        if (StringUtils.isNotBlank(ids)) { String[] selected = ids.split(","); sql.append(" and ").append(key).append(" in ("); for (int i=0;i<selected.length;i++) { if (i>0) sql.append(','); sql.append('?'); args.add(selected[i].trim()); } sql.append(')'); }
        sql.append(" order by ").append(key);
        List<Map<String,Object>> rows = jdbcTemplate.queryForList(sql.toString(), args.toArray());
        ByteArrayOutputStream out = new ByteArrayOutputStream(); ZipOutputStream zip = new ZipOutputStream(out);
        Set<String> entryNames = new LinkedHashSet<String>();
        if (member) {
            Map<String,List<Map<String,Object>>> grouped = new HashMap<String,List<Map<String,Object>>>();
            for (Map<String,Object> row : rows) { String org = text(row.get("DY_PARTY_ORGANIZATION_UNIQUE_ID")); List<Map<String,Object>> group = grouped.get(org); if (group == null) { group = new ArrayList<Map<String,Object>>(); grouped.put(org, group); } group.add(row); }
            for (Map.Entry<String,List<Map<String,Object>>> entry : grouped.entrySet()) {
                Map<String,Object> org = jdbcTemplate.queryForMap("select * from " + ORG_TABLE + " where DZZ_PARTY_ORGANIZATION_UNIQUE_ID=?", entry.getKey());
                writeExportWorkbook(zip, entryNames, org, entry.getValue(), "党员数据");
            }
        } else {
            for (Map<String,Object> org : rows) {
                List<Map<String,Object>> members = jdbcTemplate.queryForList("select * from " + MEMBER_TABLE + " where DY_PARTY_ORGANIZATION_UNIQUE_ID=? order by RYJBXX_GROUP_EMPLOYEE_COPE", text(org.get("DZZ_PARTY_ORGANIZATION_UNIQUE_ID")));
                writeExportWorkbook(zip, entryNames, org, members, "集团党建数据");
            }
        }
        zip.finish(); zip.close(); return out.toByteArray();
    }

    private void writeExportWorkbook(ZipOutputStream zip, Set<String> names, Map<String,Object> org, List<Map<String,Object>> members, String suffix) throws IOException {
        String base = text(org.get("DZZ_PARTY_ORGANIZATION_SHORT_NAME")); if (base.length() == 0) base = "集团组织"; String entry = "集团党建数据_" + base + "_" + suffix + ".xlsx"; int n=2; while (!names.add(entry)) entry = "集团党建数据_" + base + "_" + n++ + "_" + suffix + ".xlsx";
        XSSFWorkbook workbook = new XSSFWorkbook(); Sheet os = workbook.createSheet("党组织信息"); writeExportRows(os, ORG_EXPORT_FIELDS, ORG_EXPORT_HEADERS, java.util.Collections.singletonList(org)); Sheet ms = workbook.createSheet("党员信息"); writeExportRows(ms, MEMBER_EXPORT_FIELDS, MEMBER_EXPORT_HEADERS, members); ByteArrayOutputStream bytes = new ByteArrayOutputStream(); workbook.write(bytes); zip.putNextEntry(new ZipEntry(entry)); zip.write(bytes.toByteArray()); zip.closeEntry();
    }

    private void writeExportRows(Sheet sheet, String[] fields, String[] headers, List<Map<String,Object>> rows) {
        Row header = sheet.createRow(0); for (int i=0;i<fields.length;i++) header.createCell(i).setCellValue(headers[i]);
        for (int r=0;r<rows.size();r++) { Row row=sheet.createRow(r+1); for (int c=0;c<fields.length;c++) { Object value=rows.get(r).get(fields[c]); row.createCell(c).setCellValue(value == null ? "" : String.valueOf(value)); } }
    }

    public Map<String,Object> importFile(MultipartFile file, String remoteIp) throws Exception {
        if (file == null || file.isEmpty()) throw new IllegalArgumentException("请选择 Excel 或 ZIP 文件");
        ensureFormalSchemaReady();
        List<byte[]> workbooks = new ArrayList<byte[]>(); List<String> names = new ArrayList<String>();
        String filename = file.getOriginalFilename() == null ? "upload.xlsx" : file.getOriginalFilename();
        if (filename.toLowerCase().endsWith(".zip")) {
            ZipInputStream zin = new ZipInputStream(file.getInputStream()); ZipEntry entry; byte[] buf = new byte[8192];
            while ((entry = zin.getNextEntry()) != null) { if (entry.isDirectory() || !entry.getName().toLowerCase().endsWith(".xlsx")) continue; ByteArrayOutputStream b = new ByteArrayOutputStream(); int n; while ((n=zin.read(buf)) >= 0) b.write(buf,0,n); workbooks.add(b.toByteArray()); names.add(entry.getName()); } zin.close();
        } else { ByteArrayOutputStream b = new ByteArrayOutputStream(); InputStream in=file.getInputStream(); byte[] buf=new byte[8192]; int n; while((n=in.read(buf))>=0)b.write(buf,0,n); in.close(); workbooks.add(b.toByteArray()); names.add(filename); }
        int imported=0; List<String> errors=new ArrayList<String>();
        for (int i=0;i<workbooks.size();i++) try { imported += importWorkbook(workbooks.get(i), names.get(i), remoteIp); } catch (Exception ex) { errors.add(names.get(i)+"："+StringUtils.defaultIfBlank(ex.getMessage(), "导入失败")); }
        Map<String,Object> result=new HashMap<String,Object>(); result.put("files", workbooks.size()); result.put("imported", imported); result.put("failedFiles", errors.size()); result.put("errors", errors); return result;
    }

    private int importWorkbook(byte[] bytes, String filename, String remoteIp) throws Exception {
        XSSFWorkbook workbook = new XSSFWorkbook(new ByteArrayInputStream(bytes)); int count=0;
        try { for (int s=0;s<workbook.getNumberOfSheets();s++) { Sheet sheet=workbook.getSheetAt(s); String type=sheet.getSheetName().contains("党员") ? "member" : (sheet.getSheetName().contains("组织") ? "organization" : null); if (type==null) continue; Row header=sheet.getRow(0); if(header==null) continue; Map<String,Integer> columns=new HashMap<String,Integer>(); for(int c=0;c<header.getLastCellNum();c++) columns.put(new DataFormatter().formatCellValue(header.getCell(c)).trim().toUpperCase(), c); String[] fields="member".equals(type)?MEMBER_EXPORT_FIELDS:ORG_EXPORT_FIELDS; String[] headers="member".equals(type)?MEMBER_EXPORT_HEADERS:ORG_EXPORT_HEADERS; for(int r=1;r<=sheet.getLastRowNum();r++){ Row row=sheet.getRow(r); if(row==null) continue; Map<String,String> params=new HashMap<String,String>(); DataFormatter f=new DataFormatter(); for(int i=0;i<fields.length;i++){ Integer c=columns.get(fields[i]); if(c==null) c=columns.get(headers[i].toUpperCase()); if(c!=null && row.getCell(c)!=null) params.put(fields[i],f.formatCellValue(row.getCell(c))); } String id="member".equals(type)?params.get("RYJBXX_GROUP_EMPLOYEE_COPE"):params.get("DZZ_PARTY_ORGANIZATION_UNIQUE_ID"); if(StringUtils.isBlank(id)) throw new IllegalArgumentException("缺少正式表主键"); params.put("ID",id); save(type,params,null); count++; } } } finally { } return count;
    }
    public Map<String, Object> logs(String orgIdentity, int limit) {
        ensureFormalSchemaReady();
        int safeLimit = Math.min(Math.max(1, limit), 100);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from (select ID,BATCH_START_TIME,BATCH_END_TIME,STATUS,TOTAL_COUNT,SUCCESS_COUNT,ERROR_COUNT,DELETED_COUNT,ERROR_MESSAGE from DYN_GROUP_SYNC_LOG where ORG_IDENTITY=? order by BATCH_START_TIME desc) where rownum<=?", orgIdentity, safeLimit);
        for (Map<String, Object> row : rows) { row.put("ERROR_MESSAGE", safeMessage(text(row.get("ERROR_MESSAGE")))); }
        List<Map<String, Object>> rejects = jdbcTemplate.queryForList("select * from (select ID,BATCH_ID,SOURCE_TABLE,SOURCE_ID,REASON_CODE,DETAIL_MESSAGE from DYN_GROUP_SYNC_REJECT where ORG_IDENTITY=? order by CREATION_DATE desc) where rownum<=?", orgIdentity, safeLimit);
        Map<String, Object> result = new HashMap<String, Object>(); result.put("rows", rows); result.put("rejects", rejects); return result;
    }

    private List<Map<String, Object>> sourceRows(String sql, String orgIdentity, Date updatedAfter) {
        return jdbcTemplate.queryForList(sql, updatedAfter == null ? new Object[] { orgIdentity } : new Object[] { orgIdentity, updatedAfter });
    }
    private String since(Date d, String alias) { return d == null ? "" : " and " + alias + ".LAST_UPDATE_DATE>?"; }
    private Map<String, Object> organization(Map<String, Object> s, String key, String parent) {
        String company = text(s.get("COMPANY_NAME")); if (company.length() == 0) { company = text(s.get("PARTY_NAME")); }
        Map<String, Object> t = new HashMap<String, Object>(); t.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID", key); t.put("DZZ_COMPANY_NAME", company); t.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID", parent); t.put("DZZ_PARTY_ORGANIZATION_ENCODING", text(s.get("PARTY_CODE"))); t.put("DZZ_PARTY_ORGANIZATION_FULL_NAME", text(s.get("PARTY_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_SHORT_NAME", text(s.get("PARTY_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_CATEGORY", text(s.get("ATTRIBUTE_01"))); t.put("DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE", s.get("CREATION_DATE")); t.put("DZZ_PARTY_ORGANIZATION_MEMBER_COUNT", s.get("MEMBER_COUNT")); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE", text(s.get("CONTACT_EMPLOYEE_CODE"))); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_NAME", text(s.get("CONTACT_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE", text(s.get("CONTACT_MOBILE"))); t.put("DZZ_PARTY_ORGANIZATION_UNIT_SITUATION", company); t.put("DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA", text(s.get("ATTRIBUTE_03"))); t.put("DZZ_DISPLAY_ORDER", s.get("TREE_SORT")); t.put("DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", text(s.get("PARENT_NAME"))); t.put("DZZ_DELETE_FLAG", "0"); t.put("DZZ_UPDATE_TIMESTAMP", s.get("LAST_UPDATE_DATE")); t.put("DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY", text(s.get("ATTRIBUTE_04"))); t.put("DZZ_OPERATING_PARTY_ORGANIZATION", company); return t;
    }
    private Map<String, Object> member(Map<String, Object> s, String employee, String org) {
        String company = text(s.get("COMPANY_NAME")); if (company.length() == 0) { company = text(s.get("PARTY_NAME")); }
        Map<String, Object> t = new HashMap<String, Object>(); t.put("RYJBXX_GROUP_EMPLOYEE_COPE", employee); t.put("DY_COMPANY_NAME", company); t.put("DY_PARTY_MEMBER_UNIQUE_ID", text(s.get("ID"))); t.put("DY_NAME", text(s.get("USER_NAME"))); t.put("DY_GENDER", text(s.get("SEX"))); t.put("DY_ID_NUMBER", text(s.get("IDCARD"))); t.put("DY_BIRTH_DATE", s.get("BIRTHDAY")); t.put("DY_EDUCATION_LEVEL", text(s.get("EDUCATION_LEVEL"))); t.put("DY_DEGREE", text(s.get("EDUCATION_SECTOR"))); t.put("DY_ETHNICITY", text(s.get("NATION"))); t.put("DY_JOB_POSITION", text(s.get("POST"))); t.put("DY_NEW_SOCIAL_STRATUM_TYPE", text(s.get("CATEGORY"))); t.put("DY_PROFESSIONAL_POSITION", text(s.get("PROFESSIONAL_RANK"))); t.put("DY_IS_MIGRANT_WORKER", text(s.get("ATTRIBUTE_10"))); t.put("DY_MOBILE_NUMBER", text(s.get("TEL"))); t.put("DY_AFFILIATED_BRANCH", text(s.get("PARTY_NAME"))); t.put("DY_PARTY_ORGANIZATION_UNIQUE_ID", org); t.put("DY_JOINT_BRANCH_UNIT", text(s.get("JOINPARTY_DEPT"))); t.put("DY_HOUSEHOLD_LOCATION", text(s.get("REGISTER_ADDRESS"))); t.put("DY_CURRENT_ADDRESS", text(s.get("ADDRESS"))); t.put("DY_PARTY_ENTRY_DATE", s.get("JOIN_PARTY")); t.put("DY_PARTY_REGULARIZATION_DATE", s.get("REGULAR_DATE")); t.put("DY_PARTY_YEARS", s.get("PARTY_YEARS")); t.put("DY_PARTY_YEARS_CORRECTION", s.get("PARTY_YEARS_CORRECTION")); t.put("DY_ENTRY_SYSTEM_TYPE", text(s.get("JOINZG_TYPE"))); t.put("DY_ENTRY_SYSTEM_DATE", s.get("JOIN_SYSTEM_DATE")); t.put("DY_ENTRY_SYSTEM_OPERATING_PARTY_ID", text(s.get("JOIN_OPERATING_PARTY_ID"))); t.put("DY_EXIT_SYSTEM_TYPE", text(s.get("EXIT_SYSTEM_TYPE"))); t.put("DY_EXIT_SYSTEM_DATE", s.get("EXIT_SYSTEM_DATE")); t.put("DY_EXIT_SYSTEM_OPERATING_PARTY_ID", text(s.get("EXIT_SYSTEM_OPERATING_PARTY_ID"))); t.put("DY_UPDATE_TIMESTAMP", s.get("LAST_UPDATE_DATE")); t.put("DY_OPERATING_PARTY_ORGANIZATION", org); return t;
    }
    /** 将源表中的通用代码转换为平台字典名称；未配置或查不到时保留原值。 */
    private void translateLookupValues(Map<String, Object> target) {
        for (Map.Entry<String, String> entry : LOOKUP_TYPES.entrySet()) {
            String field = entry.getKey();
            String code = text(target.get(field)).trim();
            if (code.length() == 0 || "UNKNOWN".equalsIgnoreCase(code)) { continue; }
            // 正式表 CHAR(1) 字段只能保留代码，中文名称会触发 DM8 字节截断。
            if ("DY_GENDER".equals(field) || "DY_IS_MIGRANT_WORKER".equals(field)) { continue; }
            try {
                List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                        "select LOOKUP_NAME from SYS_LOOKUP_V where LOOKUP_TYPE=? and LOOKUP_CODE=?",
                        entry.getValue(), code);
                if (!rows.isEmpty()) {
                    String name = text(rows.get(0).get("LOOKUP_NAME"));
                    if (name.length() > 0) { target.put(field, name); }
                }
            } catch (RuntimeException ignored) {
                // 字典查询异常不应阻断有效党员同步，保留源代码值。
            }
        }
    }

    private void applyMemberDefaults(Map<String, Object> target, String sourceId) {
        String[] strings = new String[]{"DY_COMPANY_NAME","DY_NAME","DY_GENDER","DY_EDUCATION_LEVEL","DY_DEGREE","DY_ETHNICITY","DY_JOB_POSITION","DY_NEW_SOCIAL_STRATUM_TYPE","DY_PROFESSIONAL_POSITION","DY_MOBILE_NUMBER","DY_AFFILIATED_BRANCH","DY_JOINT_BRANCH_UNIT","DY_HOUSEHOLD_LOCATION","DY_CURRENT_ADDRESS","DY_ENTRY_SYSTEM_TYPE","DY_ENTRY_SYSTEM_OPERATING_PARTY_ID","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_OPERATING_PARTY_ID","DY_OPERATING_PARTY_ORGANIZATION"};
        for (String field : strings) { Object value = target.get(field); if (value == null || text(value).trim().length() == 0) { target.put(field, "UNKNOWN"); } }
        Object migrant = target.get("DY_IS_MIGRANT_WORKER");
        if (migrant == null || text(migrant).trim().length() == 0) { target.put("DY_IS_MIGRANT_WORKER", "0"); }
        if (target.get("DY_PARTY_YEARS") == null || text(target.get("DY_PARTY_YEARS")).trim().length() == 0) { target.put("DY_PARTY_YEARS", Integer.valueOf(0)); }
        if (target.get("DY_PARTY_YEARS_CORRECTION") == null || text(target.get("DY_PARTY_YEARS_CORRECTION")).trim().length() == 0) { target.put("DY_PARTY_YEARS_CORRECTION", Integer.valueOf(0)); }
        if (text(target.get("DY_PARTY_MEMBER_UNIQUE_ID")).trim().length() == 0) { target.put("DY_PARTY_MEMBER_UNIQUE_ID", "UNKNOWN_" + text(sourceId)); }
        if (text(target.get("DY_ID_NUMBER")).trim().length() == 0) { target.put("DY_ID_NUMBER", "000000000000000000"); }
        java.sql.Date defaultDate = java.sql.Date.valueOf("1970-01-01");
        for (String field : new String[]{"DY_BIRTH_DATE","DY_PARTY_ENTRY_DATE","DY_PARTY_REGULARIZATION_DATE","DY_ENTRY_SYSTEM_DATE","DY_EXIT_SYSTEM_DATE"}) { if (target.get(field) == null || text(target.get(field)).trim().length() == 0) { target.put(field, defaultDate); } }
        if (target.get("DY_UPDATE_TIMESTAMP") == null || text(target.get("DY_UPDATE_TIMESTAMP")).trim().length() == 0) { target.put("DY_UPDATE_TIMESTAMP", java.sql.Timestamp.valueOf("1970-01-01 00:00:00")); }
    }

    private Map<String, Object> contact(String partyId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select u.NAME,u.LOGIN_NAME,u.MOBILE,v.LOOKUP_NAME from PARTY_ORGAN_MEMBER m left join SYS_USER u on u.ID=m.USER_ID left join SYS_LOOKUP_V v on v.LOOKUP_CODE=m.USER_POST and v.LOOKUP_TYPE='PARTY_POST' where m.PARTY_ID=? and nvl(m.VALID_FLAG,'1')='1' and (v.LOOKUP_NAME like '%书记%' or m.USER_POST in ('0','1','2')) order by case when v.LOOKUP_NAME like '%副书记%' then 2 else 1 end", partyId);
        Map<String, Object> result = new HashMap<String, Object>();
        for (Map<String, Object> row : rows) {
            String name = text(row.get("NAME")); if (name.length() == 0) { continue; }
            if (text(row.get("LOOKUP_NAME")).indexOf("副书记") < 0 && !result.containsKey("DZZ_PARTY_ORGANIZATION_CONTACT_NAME")) { result.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE", text(row.get("LOGIN_NAME"))); result.put("DZZ_PARTY_ORGANIZATION_CONTACT_NAME", name); result.put("DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE", text(row.get("MOBILE"))); }
        }
        if (!result.containsKey("DZZ_PARTY_ORGANIZATION_CONTACT_NAME")) { throw new IllegalArgumentException("党组织联系人缺失（PARTY_POST/有效组织成员）"); }
        return result;
    }

    private String safeMessage(String value) {
        if (value == null || value.length() == 0) { return ""; }
        if (value.toLowerCase().contains("sql") || value.toLowerCase().contains("preparedstatement")
                || value.toLowerCase().contains("exception") || value.contains("无效模式名")) {
            return "同步失败，详细原因已记录在服务器日志，请联系管理员";
        }
        return value.length() > 500 ? value.substring(0, 500) : value;
    }
    private void upsert(String table, String key, Map<String, Object> values) {
        List<String> columns = new ArrayList<String>(values.keySet());
        List<String> updateColumns = new ArrayList<String>();
        List<Object> insertValues = new ArrayList<Object>();
        for (String column : columns) {
            insertValues.add(values.get(column));
            if (!column.equals(key)) { updateColumns.add(column); }
        }
        StringBuilder set = new StringBuilder();
        List<Object> updateValues = new ArrayList<Object>();
        for (String column : updateColumns) {
            if (set.length() > 0) { set.append(","); }
            set.append(column).append("=?");
            updateValues.add(values.get(column));
        }
        updateValues.add(values.get(key));
        int count = jdbcTemplate.update("update " + table + " set " + set + " where " + key + "=?", updateValues.toArray());
        if (count == 0) {
            StringBuilder placeholders = new StringBuilder();
            for (int i = 0; i < columns.size(); i++) { if (i > 0) { placeholders.append(","); } placeholders.append("?"); }
            jdbcTemplate.update("insert into " + table + " (" + join(columns, ",") + ") values (" + placeholders + ")", insertValues.toArray());
        }
    }
    private void mapSource(String org, String st, String sid, String tt, String tk, String user, String ip) { jdbcTemplate.update("delete from DYN_GROUP_SYNC_ID_MAP where ORG_IDENTITY=? and SOURCE_TABLE=? and SOURCE_ID=?", org, st, sid); jdbcTemplate.update("insert into DYN_GROUP_SYNC_ID_MAP (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,SOURCE_TABLE,SOURCE_ID,TARGET_TABLE,TARGET_KEY) values (?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), user, new Date(), user, new Date(), ip, 1, org, st, sid, tt, tk); }
    private String findMapped(String org, String sourceTable, String sourceId) { if (sourceId == null || sourceId.length() == 0) { return ""; } List<Map<String, Object>> rows = jdbcTemplate.queryForList("select TARGET_KEY from DYN_GROUP_SYNC_ID_MAP where ORG_IDENTITY=? and SOURCE_TABLE=? and SOURCE_ID=?", org, sourceTable, sourceId); return rows.isEmpty() ? "" : text(rows.get(0).get("TARGET_KEY")); }
    private void reject(String batch, String st, String sid, String msg, String org, String ip) { jdbcTemplate.update("insert into DYN_GROUP_SYNC_REJECT (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_ID,SOURCE_TABLE,SOURCE_ID,REASON_CODE,DETAIL_MESSAGE) values (?,?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), "GROUP_SYNC", new Date(), "GROUP_SYNC", new Date(), ip, 1, org, batch, st, sid, "VALIDATION", msg == null ? "" : msg); }
    private void logAccess(String ip, String type) { jdbcTemplate.update("insert into DYN_GROUP_SYNC_LOG (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_START_TIME,STATUS,TRIGGER_TYPE,EXECUTOR_ID,CALL_IP,ERROR_MESSAGE) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), "REST", new Date(), "REST", new Date(), ip, 1, "REST", new Date(), "READ", type, "REST", ip, ""); }
    private String require(String v, String label) { if (v == null || v.trim().length() == 0) throw new IllegalArgumentException(label + "为空"); return v; }
    private String text(Object v) { return v == null ? "" : String.valueOf(v); }
    private String join(List<String> v, String sep) { StringBuilder b = new StringBuilder(); for (String s : v) { if (b.length() > 0) b.append(sep); b.append(s); } return b.toString(); }
    private Map<String, Integer> memberLimits() { Map<String, Integer> m = new HashMap<String, Integer>(); m.put("RYJBXX_GROUP_EMPLOYEE_COPE",8); for (String s : new String[]{"DY_COMPANY_NAME","DY_PARTY_MEMBER_UNIQUE_ID","DY_NAME","DY_GENDER","DY_EDUCATION_LEVEL","DY_DEGREE","DY_ETHNICITY","DY_JOB_POSITION","DY_NEW_SOCIAL_STRATUM_TYPE","DY_PROFESSIONAL_POSITION","DY_MOBILE_NUMBER","DY_AFFILIATED_BRANCH","DY_PARTY_ORGANIZATION_UNIQUE_ID","DY_JOINT_BRANCH_UNIT","DY_HOUSEHOLD_LOCATION","DY_CURRENT_ADDRESS","DY_ENTRY_SYSTEM_TYPE","DY_ENTRY_SYSTEM_OPERATING_PARTY_ID","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_OPERATING_PARTY_ID","DY_OPERATING_PARTY_ORGANIZATION"}) m.put(s,50); return m; }
    private Map<String, Integer> organizationLimits() { Map<String, Integer> m = new HashMap<String, Integer>(); m.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID",32); m.put("DZZ_COMPANY_NAME",50); m.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID",32); m.put("DZZ_PARTY_ORGANIZATION_ENCODING",12); for (String s : new String[]{"DZZ_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_ORGANIZATION_SHORT_NAME","DZZ_PARTY_ORGANIZATION_CATEGORY","DZZ_PARTY_ORGANIZATION_CONTACT_NAME","DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE","DZZ_PARTY_ORGANIZATION_UNIT_SITUATION","DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA","DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY","DZZ_OPERATING_PARTY_ORGANIZATION"}) m.put(s,50); m.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE",10); return m; }
    private void validate(Map<String, Object> row, Map<String, Integer> limits) { for (Map.Entry<String,Integer> e : limits.entrySet()) { String v = text(row.get(e.getKey())); if (v.length() == 0 && !optionalField(e.getKey())) throw new IllegalArgumentException(e.getKey() + "为空"); if (v.length() > e.getValue().intValue()) throw new IllegalArgumentException(e.getKey() + "超长"); } }
    private boolean optionalField(String field) { return "DY_JOINT_BRANCH_UNIT".equals(field) || "DZZ_UPDATE_TIMESTAMP".equals(field) || "DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY".equals(field) || "DZZ_OPERATING_PARTY_ORGANIZATION".equals(field); }
    private void requireValues(Map<String, Object> row, String[] fields) { for (String field : fields) { Object value = row.get(field); if (value == null || text(value).trim().length() == 0) { throw new IllegalArgumentException(field + "为空"); } } }
}
