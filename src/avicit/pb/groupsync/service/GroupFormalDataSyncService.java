package avicit.pb.groupsync.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

/** 集团 FINEDB 正式表同步与只读分页服务。正式表不写入 PB 元数据。 */
@Service
public class GroupFormalDataSyncService {
    private static final String MEMBER_TABLE = "FINEDB.PULL_D12_PTY_MBR_BASIC_INFO";
    private static final String ORG_TABLE = "FINEDB.PULL_D12_PTY_ORG_BASIC_INFO";
    private static final int MAX_PAGE_SIZE = 200;
    private static final String ROOT_PARENT_UID = "00000000000000000000000000000000";
    private static final Object SYNC_LOCK = new Object();

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
                List<Map<String, Object>> orgRows = sourceRows("select p.*, (select count(1) from PARTY_MEMBER m where m.PARTY_ID=p.ID and nvl(m.STATUS,'1')='1') MEMBER_COUNT, (select u.USER_CODE from PARTY_ORGAN_MEMBER pom join SYS_USER u on u.ID=pom.USER_ID where pom.PARTY_ID=p.ID and pom.IS_MAIN='1' and rownum=1) CONTACT_EMPLOYEE_CODE, (select u.NAME from PARTY_ORGAN_MEMBER pom join SYS_USER u on u.ID=pom.USER_ID where pom.PARTY_ID=p.ID and pom.IS_MAIN='1' and rownum=1) CONTACT_NAME, (select u.MOBILE from PARTY_ORGAN_MEMBER pom join SYS_USER u on u.ID=pom.USER_ID where pom.PARTY_ID=p.ID and pom.IS_MAIN='1' and rownum=1) CONTACT_MOBILE, (select pp.PARTY_NAME from PARTY_ORGANIZATION pp where pp.ID=p.PARENT_ID) PARENT_NAME from PARTY_ORGANIZATION p where p.ORG_IDENTITY=? and nvl(p.VALID_FLAG,'1')='1'" + since(updatedAfter) + " order by p.TREE_LEVEL,p.TREE_SORTS,p.TREE_SORT", orgIdentity, updatedAfter);
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
                        target.putAll(contact(sourceId));
                        validate(target, organizationLimits());
                        requireValues(target, new String[]{"DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE","DZZ_PARTY_ORGANIZATION_MEMBER_COUNT","DZZ_DISPLAY_ORDER","DZZ_DELETE_FLAG","DZZ_UPDATE_TIMESTAMP"});
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
                List<Map<String, Object>> memberRows = sourceRows("select m.*, u.NAME USER_NAME, u.MOBILE USER_MOBILE, p.PARTY_NAME PARTY_NAME, p.ORG_IDENTITY PARTY_ORG_ID, p.PARTY_CODE PARTY_CODE, (select o.COMPANY_NAME from PARTY_ORGANIZATION o where o.ID=p.ID) COMPANY_NAME from PARTY_MEMBER m left join SYS_USER u on u.ID=m.USER_ID left join PARTY_ORGANIZATION p on p.ID=m.PARTY_ID where m.ORG_IDENTITY=? and nvl(m.STATUS,'1')='1'" + since(updatedAfter), orgIdentity, updatedAfter);
                for (Map<String, Object> row : memberRows) {
                    try {
                        String sourceId = require(text(row.get("ID")), "党员ID");
                        String employeeCode = require(text(row.get("USER_CODE")), "集团员工编码");
                        if (employeeCode.length() > 8) { throw new IllegalArgumentException("集团员工编码超长"); }
                        String partyId = require(text(row.get("PARTY_ID")), "党员组织");
                        String partyUid = organizations.get(partyId);
                        if (partyUid == null || partyUid.length() == 0) { partyUid = findMapped(orgIdentity, "PARTY_ORGANIZATION", partyId); }
                        if (partyUid == null || partyUid.length() == 0) { throw new IllegalArgumentException("党员所属组织缺失"); }
                        Map<String, Object> target = member(row, employeeCode, partyUid);
                        validate(target, memberLimits());
                        requireValues(target, new String[]{"DY_BIRTH_DATE","DY_PARTY_ENTRY_DATE","DY_PARTY_REGULARIZATION_DATE","DY_PARTY_YEARS","DY_PARTY_YEARS_CORRECTION","DY_ENTRY_SYSTEM_DATE","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_DATE","DY_UPDATE_TIMESTAMP"});
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
        Map<String, Object> result = new HashMap<String, Object>(); result.put("rows", rows); result.put("total", total); result.put("page", safePage); result.put("pageSize", safeSize); result.put("updatedAfter", updatedAfter); logAccess(callIp, type);
        return result;
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
    private String since(Date d) { return d == null ? "" : " and LAST_UPDATE_DATE>?"; }
    private Map<String, Object> organization(Map<String, Object> s, String key, String parent) {
        String company = text(s.get("COMPANY_NAME")); if (company.length() == 0) { company = text(s.get("PARTY_NAME")); }
        Map<String, Object> t = new HashMap<String, Object>(); t.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID", key); t.put("DZZ_COMPANY_NAME", company); t.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID", parent); t.put("DZZ_PARTY_ORGANIZATION_ENCODING", text(s.get("PARTY_CODE"))); t.put("DZZ_PARTY_ORGANIZATION_FULL_NAME", text(s.get("PARTY_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_SHORT_NAME", text(s.get("PARTY_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_CATEGORY", text(s.get("ATTRIBUTE_01"))); t.put("DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE", s.get("CREATION_DATE")); t.put("DZZ_PARTY_ORGANIZATION_MEMBER_COUNT", s.get("MEMBER_COUNT")); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE", text(s.get("CONTACT_EMPLOYEE_CODE"))); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_NAME", text(s.get("CONTACT_NAME"))); t.put("DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE", text(s.get("CONTACT_MOBILE"))); t.put("DZZ_PARTY_ORGANIZATION_UNIT_SITUATION", company); t.put("DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA", text(s.get("ATTRIBUTE_03"))); t.put("DZZ_DISPLAY_ORDER", s.get("TREE_SORT")); t.put("DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", text(s.get("PARENT_NAME"))); t.put("DZZ_DELETE_FLAG", "0"); t.put("DZZ_UPDATE_TIMESTAMP", s.get("LAST_UPDATE_DATE")); t.put("DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY", text(s.get("ATTRIBUTE_04"))); t.put("DZZ_OPERATING_PARTY_ORGANIZATION", company); return t;
    }
    private Map<String, Object> member(Map<String, Object> s, String employee, String org) {
        String company = text(s.get("COMPANY_NAME")); if (company.length() == 0) { company = text(s.get("PARTY_NAME")); }
        Map<String, Object> t = new HashMap<String, Object>(); t.put("RYJBXX_GROUP_EMPLOYEE_COPE", employee); t.put("DY_COMPANY_NAME", company); t.put("DY_PARTY_MEMBER_UNIQUE_ID", text(s.get("ID"))); t.put("DY_NAME", text(s.get("USER_NAME"))); t.put("DY_GENDER", text(s.get("SEX"))); t.put("DY_ID_NUMBER", text(s.get("IDCARD"))); t.put("DY_BIRTH_DATE", s.get("BIRTHDAY")); t.put("DY_EDUCATION_LEVEL", text(s.get("EDUCATION_LEVEL"))); t.put("DY_DEGREE", text(s.get("EDUCATION_SECTOR"))); t.put("DY_ETHNICITY", text(s.get("NATION"))); t.put("DY_JOB_POSITION", text(s.get("POST"))); t.put("DY_NEW_SOCIAL_STRATUM_TYPE", text(s.get("CATEGORY"))); t.put("DY_PROFESSIONAL_POSITION", text(s.get("PROFESSIONAL_RANK"))); t.put("DY_IS_MIGRANT_WORKER", text(s.get("ATTRIBUTE_10"))); t.put("DY_MOBILE_NUMBER", text(s.get("TEL"))); t.put("DY_AFFILIATED_BRANCH", text(s.get("PARTY_NAME"))); t.put("DY_PARTY_ORGANIZATION_UNIQUE_ID", org); t.put("DY_JOINT_BRANCH_UNIT", text(s.get("JOINPARTY_DEPT"))); t.put("DY_HOUSEHOLD_LOCATION", text(s.get("REGISTER_ADDRESS"))); t.put("DY_CURRENT_ADDRESS", text(s.get("ADDRESS"))); t.put("DY_PARTY_ENTRY_DATE", s.get("JOIN_PARTY")); t.put("DY_PARTY_REGULARIZATION_DATE", s.get("REGULAR_DATE")); t.put("DY_PARTY_YEARS", s.get("PARTY_YEARS")); t.put("DY_PARTY_YEARS_CORRECTION", s.get("PARTY_YEARS_CORRECTION")); t.put("DY_ENTRY_SYSTEM_TYPE", text(s.get("JOINZG_TYPE"))); t.put("DY_ENTRY_SYSTEM_DATE", s.get("JOIN_SYSTEM_DATE")); t.put("DY_ENTRY_SYSTEM_OPERATING_PARTY_ID", text(s.get("JOIN_OPERATING_PARTY_ID"))); t.put("DY_EXIT_SYSTEM_TYPE", text(s.get("EXIT_SYSTEM_TYPE"))); t.put("DY_EXIT_SYSTEM_DATE", s.get("EXIT_SYSTEM_DATE")); t.put("DY_EXIT_SYSTEM_OPERATING_PARTY_ID", text(s.get("EXIT_OPERATING_PARTY_ID"))); t.put("DY_UPDATE_TIMESTAMP", s.get("LAST_UPDATE_DATE")); t.put("DY_OPERATING_PARTY_ORGANIZATION", org); return t;
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
    private void upsert(String table, String key, Map<String, Object> values) { List<String> c = new ArrayList<String>(values.keySet()); List<Object> v = new ArrayList<Object>(); for (String x : c) v.add(values.get(x)); StringBuilder set = new StringBuilder(); for (String x : c) { if (set.length() > 0) set.append(","); if (!x.equals(key)) set.append(x).append("=?"); } List<Object> update = new ArrayList<Object>(); for (String x : c) if (!x.equals(key)) update.add(values.get(x)); update.add(values.get(key)); int n = jdbcTemplate.update("update " + table + " set " + set + " where " + key + "=?", update.toArray()); if (n == 0) { StringBuilder q = new StringBuilder(); for (int i=0;i<c.size();i++) { if (i>0) q.append(","); q.append("?"); } jdbcTemplate.update("insert into " + table + " (" + join(c, ",") + ") values (" + q + ")", v.toArray()); } }
    private void mapSource(String org, String st, String sid, String tt, String tk, String user, String ip) { jdbcTemplate.update("delete from DYN_GROUP_SYNC_ID_MAP where ORG_IDENTITY=? and SOURCE_TABLE=? and SOURCE_ID=?", org, st, sid); jdbcTemplate.update("insert into DYN_GROUP_SYNC_ID_MAP (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,SOURCE_TABLE,SOURCE_ID,TARGET_TABLE,TARGET_KEY) values (?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), user, new Date(), user, new Date(), ip, 1, org, st, sid, tt, tk); }
    private String findMapped(String org, String sourceTable, String sourceId) { if (sourceId == null || sourceId.length() == 0) { return ""; } List<Map<String, Object>> rows = jdbcTemplate.queryForList("select TARGET_KEY from DYN_GROUP_SYNC_ID_MAP where ORG_IDENTITY=? and SOURCE_TABLE=? and SOURCE_ID=?", org, sourceTable, sourceId); return rows.isEmpty() ? "" : text(rows.get(0).get("TARGET_KEY")); }
    private void reject(String batch, String st, String sid, String msg, String org, String ip) { jdbcTemplate.update("insert into DYN_GROUP_SYNC_REJECT (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_ID,SOURCE_TABLE,SOURCE_ID,REASON_CODE,DETAIL_MESSAGE) values (?,?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), "GROUP_SYNC", new Date(), "GROUP_SYNC", new Date(), ip, 1, org, batch, st, sid, "VALIDATION", msg == null ? "" : msg); }
    private void logAccess(String ip, String type) { jdbcTemplate.update("insert into DYN_GROUP_SYNC_LOG (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_START_TIME,STATUS,TRIGGER_TYPE,EXECUTOR_ID,CALL_IP,ERROR_MESSAGE) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", java.util.UUID.randomUUID().toString().replace("-", ""), "REST", new Date(), "REST", new Date(), ip, 1, "REST", new Date(), "READ", type, "REST", ip, ""); }
    private String require(String v, String label) { if (v == null || v.trim().length() == 0) throw new IllegalArgumentException(label + "为空"); return v; }
    private String text(Object v) { return v == null ? "" : String.valueOf(v); }
    private String join(List<String> v, String sep) { StringBuilder b = new StringBuilder(); for (String s : v) { if (b.length() > 0) b.append(sep); b.append(s); } return b.toString(); }
    private Map<String, Integer> memberLimits() { Map<String, Integer> m = new HashMap<String, Integer>(); m.put("RYJBXX_GROUP_EMPLOYEE_COPE",8); for (String s : new String[]{"DY_COMPANY_NAME","DY_PARTY_MEMBER_UNIQUE_ID","DY_NAME","DY_GENDER","DY_EDUCATION_LEVEL","DY_DEGREE","DY_ETHNICITY","DY_JOB_POSITION","DY_NEW_SOCIAL_STRATUM_TYPE","DY_PROFESSIONAL_POSITION","DY_MOBILE_NUMBER","DY_AFFILIATED_BRANCH","DY_PARTY_ORGANIZATION_UNIQUE_ID","DY_JOINT_BRANCH_UNIT","DY_HOUSEHOLD_LOCATION","DY_CURRENT_ADDRESS","DY_ENTRY_SYSTEM_TYPE","DY_ENTRY_SYSTEM_OPERATING_PARTY_ID","DY_EXIT_SYSTEM_TYPE","DY_EXIT_SYSTEM_OPERATING_PARTY_ID","DY_OPERATING_PARTY_ORGANIZATION"}) m.put(s,50); return m; }
    private Map<String, Integer> organizationLimits() { Map<String, Integer> m = new HashMap<String, Integer>(); m.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID",32); m.put("DZZ_COMPANY_NAME",50); m.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID",32); m.put("DZZ_PARTY_ORGANIZATION_ENCODING",12); for (String s : new String[]{"DZZ_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_ORGANIZATION_SHORT_NAME","DZZ_PARTY_ORGANIZATION_CATEGORY","DZZ_PARTY_ORGANIZATION_CONTACT_NAME","DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE","DZZ_PARTY_ORGANIZATION_UNIT_SITUATION","DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA","DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME","DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY","DZZ_OPERATING_PARTY_ORGANIZATION"}) m.put(s,50); m.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE",10); return m; }
    private void validate(Map<String, Object> row, Map<String, Integer> limits) { for (Map.Entry<String,Integer> e : limits.entrySet()) { String v = text(row.get(e.getKey())); if (v.length() == 0) throw new IllegalArgumentException(e.getKey() + "为空"); if (v.length() > e.getValue().intValue()) throw new IllegalArgumentException(e.getKey() + "超长"); } }
    private void requireValues(Map<String, Object> row, String[] fields) { for (String field : fields) { Object value = row.get(field); if (value == null || text(value).trim().length() == 0) { throw new IllegalArgumentException(field + "为空"); } } }
}
