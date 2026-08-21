package avicit.pb.groupsync.service;

import java.sql.Clob;
import java.sql.Timestamp;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataValidation;
import org.apache.poi.ss.usermodel.DataValidationConstraint;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFDataValidationHelper;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import avicit.platform6.api.session.SessionHelper;

/**
 * 集团党员、党组织标准数据同步服务。
 *
 * 目标表只作为集团采集镜像，源表 PARTY_MEMBER/PARTY_ORGANIZATION 是唯一准源。
 */
@Service
public class GroupDataSyncService {
    private static final String MEMBER_TABLE = "DYN_DY_PARTY_MEMBER";
    private static final String ORG_TABLE = "DYN_DZZ_PARTY_ORGANIZATION";
    private static final String MEMBER_SOURCE = "PARTY_MEMBER";
    private static final String ORG_SOURCE = "PARTY_ORGANIZATION";
    private static final String LOG_TABLE = "DYN_GROUP_SYNC_LOG";
    private static final String OVERRIDE_TABLE = "DYN_GROUP_SYNC_OVERRIDE";
    private static final String MANUAL_SOURCE = "MANUAL";
    private static final String PARTY_ADMIN_ROLE = "党委一级管理员";
    private static final String PLATFORM_ADMIN_ROLE = "平台管理员";

    private static final String[] MEMBER_FIELDS = new String[] {
            "DY_JBXX_GROUP_EMPLOYEE_CODE", "DY_COMPANY_NAME", "DY_PARTY_MEMBER_UNIQUE_ID", "DY_NAME",
            "DY_GENDER", "DY_ID_NUMBER", "DY_BIRTH_DATE", "DY_EDUCATION_LEVEL", "DY_DEGREE",
            "DY_ETHNICITY", "DY_JOB_POSITION", "DY_NEW_SOCIAL_STRATUM_TYPE", "DY_PROFESSIONAL_POSITION",
            "DY_IS_MIGRANT_WORKER", "DY_MOBILE_NUMBER", "DY_AFFILIATED_BRANCH",
            "DY_PARTY_ORGANIZATION_UNIQUE_ID", "DY_JOINT_BRANCH_UNIT", "DY_HOUSEHOLD_LOCATION",
            "DY_CURRENT_ADDRESS", "DY_PARTY_ENTRY_DATE", "DY_PARTY_REGULARIZATION_DATE", "DY_PARTY_YEARS",
            "DY_PARTY_YEARS_CORRECTION", "DY_ENTRY_SYSTEM_TYPE", "DY_ENTRY_SYSTEM_DATE",
            "DY_ENTRY_SYSTEM_OPERATING_PARTY_ID", "DY_EXIT_SYSTEM_TYPE", "DY_EXIT_SYSTEM_DATE",
            "DY_EXIT_SYSTEM_OPERATING_PARTY_ID", "DY_DELETE_FLAG", "DY_UPDATE_TIMESTAMP",
            "DY_OPERATING_PARTY_ORGANIZATION"
    };

    private static final String[] ORG_FIELDS = new String[] {
            "DZZ_PARTY_ORGANIZATION_UNIQUE_ID", "DZZ_COMPANY_NAME",
            "DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID", "DZZ_PARTY_ORGANIZATION_ENCODING",
            "DZZ_PARTY_ORGANIZATION_FULL_NAME", "DZZ_PARTY_ORGANIZATION_SHORT_NAME",
            "DZZ_PARTY_ORGANIZATION_CATEGORY", "DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE",
            "DZZ_PARTY_ORGANIZATION_MEMBER_COUNT", "DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE",
            "DZZ_PARTY_ORGANIZATION_CONTACT_NAME", "DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE",
            "DZZ_PARTY_ORGANIZATION_UNIT_SITUATION", "DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA",
            "DZZ_DISPLAY_ORDER", "DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", "DZZ_DELETE_FLAG",
            "DZZ_UPDATE_TIMESTAMP", "DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY",
            "DZZ_OPERATING_PARTY_ORGANIZATION", "DZZ_PARTY_ORGANIZATION_SECRETARY_NAME",
            "DZZ_PARTY_ORGANIZATION_DEPUTY_SECRETARY_NAME"
    };

    private static final Map<String, String> FIELD_LABELS = fieldLabels();
    private static final Map<String, String> LOOKUP_TYPES = lookupTypes();

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static Map<String, String> fieldLabels() {
        Map<String, String> labels = new LinkedHashMap<String, String>();
        labels.put("DY_JBXX_GROUP_EMPLOYEE_CODE", "集团员工编码");
        labels.put("DY_COMPANY_NAME", "企业名称");
        labels.put("DY_PARTY_MEMBER_UNIQUE_ID", "集团党员唯一标识");
        labels.put("DY_NAME", "姓名");
        labels.put("DY_GENDER", "性别");
        labels.put("DY_ID_NUMBER", "公民身份号码");
        labels.put("DY_BIRTH_DATE", "出生日期");
        labels.put("DY_EDUCATION_LEVEL", "学历");
        labels.put("DY_DEGREE", "学位");
        labels.put("DY_ETHNICITY", "民族");
        labels.put("DY_JOB_POSITION", "工作岗位");
        labels.put("DY_NEW_SOCIAL_STRATUM_TYPE", "新社会阶层类型");
        labels.put("DY_PROFESSIONAL_POSITION", "专业技术职务");
        labels.put("DY_IS_MIGRANT_WORKER", "是否农民工");
        labels.put("DY_MOBILE_NUMBER", "手机号码");
        labels.put("DY_AFFILIATED_BRANCH", "组织关系所在党支部");
        labels.put("DY_PARTY_ORGANIZATION_UNIQUE_ID", "党组织唯一标识");
        labels.put("DY_JOINT_BRANCH_UNIT", "联合支部所在单位");
        labels.put("DY_HOUSEHOLD_LOCATION", "户籍所在地");
        labels.put("DY_CURRENT_ADDRESS", "现居住地");
        labels.put("DY_PARTY_ENTRY_DATE", "入党日期");
        labels.put("DY_PARTY_REGULARIZATION_DATE", "转正日期");
        labels.put("DY_PARTY_YEARS", "党龄");
        labels.put("DY_PARTY_YEARS_CORRECTION", "党龄校正值（月）");
        labels.put("DY_ENTRY_SYSTEM_TYPE", "进入本系统类型");
        labels.put("DY_ENTRY_SYSTEM_DATE", "进入本系统日期");
        labels.put("DY_ENTRY_SYSTEM_OPERATING_PARTY_ID", "进入本系统操作党组织唯一标识");
        labels.put("DY_EXIT_SYSTEM_TYPE", "离开本系统类型");
        labels.put("DY_EXIT_SYSTEM_DATE", "离开本系统日期");
        labels.put("DY_EXIT_SYSTEM_OPERATING_PARTY_ID", "离开本系统操作党组织唯一标识");
        labels.put("DY_DELETE_FLAG", "删除标识");
        labels.put("DY_UPDATE_TIMESTAMP", "更新时间戳");
        labels.put("DY_OPERATING_PARTY_ORGANIZATION", "操作党组织");
        labels.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID", "集团党组织唯一标识");
        labels.put("DZZ_COMPANY_NAME", "企业名称");
        labels.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID", "上一级党组织唯一标识");
        labels.put("DZZ_PARTY_ORGANIZATION_ENCODING", "党组织编码");
        labels.put("DZZ_PARTY_ORGANIZATION_FULL_NAME", "党组织全称");
        labels.put("DZZ_PARTY_ORGANIZATION_SHORT_NAME", "党组织简称");
        labels.put("DZZ_PARTY_ORGANIZATION_CATEGORY", "组织类别");
        labels.put("DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE", "成立日期");
        labels.put("DZZ_PARTY_ORGANIZATION_MEMBER_COUNT", "党组织党员人数");
        labels.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE", "联系人编码");
        labels.put("DZZ_PARTY_ORGANIZATION_CONTACT_NAME", "联系人");
        labels.put("DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE", "联系电话");
        labels.put("DZZ_PARTY_ORGANIZATION_UNIT_SITUATION", "党组织所在单位情况");
        labels.put("DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA", "所在行政区划");
        labels.put("DZZ_DISPLAY_ORDER", "显示排序");
        labels.put("DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", "批准成立的上级党组织全称");
        labels.put("DZZ_DELETE_FLAG", "删除标识");
        labels.put("DZZ_UPDATE_TIMESTAMP", "更新时间戳");
        labels.put("DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY", "党支部标准化规范化建设类别");
        labels.put("DZZ_OPERATING_PARTY_ORGANIZATION", "操作党组织");
        labels.put("DZZ_PARTY_ORGANIZATION_SECRETARY_NAME", "党组织书记");
        labels.put("DZZ_PARTY_ORGANIZATION_DEPUTY_SECRETARY_NAME", "党组织副书记");
        return labels;
    }

    private static Map<String, String> lookupTypes() {
        Map<String, String> types = new LinkedHashMap<String, String>();
        types.put("DY_GENDER", "PLATFORM_SEX");
        types.put("DY_EDUCATION_LEVEL", "PM_EDUCATION_LEVEL");
        types.put("DY_DEGREE", "PLATFORM_DEGREE");
        types.put("DY_ETHNICITY", "PLATFORM_FOLK");
        types.put("DY_NEW_SOCIAL_STRATUM_TYPE", "PM_CATEGORY");
        types.put("DY_PROFESSIONAL_POSITION", "PM_PROFESSIONAL_RANK_LEVEL");
        types.put("DY_IS_MIGRANT_WORKER", "PLATFORM_SYSTEM_FLAG");
        types.put("DY_ENTRY_SYSTEM_TYPE", "PM_JOINZG_TYPE");
        types.put("DZZ_PARTY_ORGANIZATION_CATEGORY", "PARTY_ORG_TYPE");
        return types;
    }

    public Map<String, Object> list(String type, String keyword, String status, int page, int pageSize,
                                    String orgIdentity, String userId) {
        String table = tableFor(type);
        String nameColumn = "member".equals(type) ? "DY_NAME" : "DZZ_PARTY_ORGANIZATION_FULL_NAME";
        String codeColumn = "member".equals(type) ? "DY_ID_NUMBER" : "DZZ_PARTY_ORGANIZATION_ENCODING";
        String flagColumn = "member".equals(type) ? "DY_DELETE_FLAG" : "DZZ_DELETE_FLAG";
        StringBuilder where = new StringBuilder(" where ORG_IDENTITY=?");
        List<Object> args = new ArrayList<Object>();
        args.add(orgIdentity);
        if ("deleted".equalsIgnoreCase(status)) {
            where.append(" and nvl(").append(flagColumn).append(",'0')='1'");
        } else if (!"all".equalsIgnoreCase(status)) {
            where.append(" and nvl(").append(flagColumn).append(",'0')='0'");
        }
        appendAccessFilter(where, args, type, orgIdentity, userId);
        if (StringUtils.isNotBlank(keyword)) {
            where.append(" and (").append(nameColumn).append(" like ? or ").append(codeColumn).append(" like ?)");
            args.add("%" + keyword.trim() + "%");
            args.add("%" + keyword.trim() + "%");
        }
        int safePage = Math.max(page, 1);
        int safePageSize = pageSize <= 0 ? 0 : Math.min(pageSize, 200);
        Number totalValue = jdbcTemplate.queryForObject("select count(1) from " + table + where, Number.class, args.toArray());
        List<Map<String, Object>> rows;
        if (safePageSize == 0) {
            rows = jdbcTemplate.queryForList("select * from " + table + where + " order by LAST_UPDATE_DATE desc",
                    args.toArray());
        } else {
            int from = (safePage - 1) * safePageSize;
            int to = from + safePageSize;
            List<Object> pageArgs = new ArrayList<Object>(args);
            pageArgs.add(Integer.valueOf(from));
            pageArgs.add(Integer.valueOf(to));
            rows = jdbcTemplate.queryForList(
                    "select * from (select t.*, row_number() over(order by t.LAST_UPDATE_DATE desc) RN from "
                            + table + " t" + where + ") where RN>? and RN<=?", pageArgs.toArray());
        }
        for (Map<String, Object> row : rows) {
            row.remove("RN");
            formatDateFields(row, "member".equalsIgnoreCase(type) ? MEMBER_FIELDS : ORG_FIELDS);
        }
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("rows", rows);
        result.put("total", totalValue == null ? Integer.valueOf(0) : totalValue.intValue());
        result.put("page", Integer.valueOf(safePage));
        result.put("pageSize", Integer.valueOf(safePageSize));
        return result;
    }

    public Map<String, Object> get(String type, String id, String orgIdentity, String userId) {
        String table = tableFor(type);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select * from " + table + " where ID=? and ORG_IDENTITY=?", id, orgIdentity);
        if (rows.isEmpty()) { return null; }
        assertTargetAccess(type, rows.get(0), orgIdentity, userId);
        formatDateFields(rows.get(0), "member".equalsIgnoreCase(type) ? MEMBER_FIELDS : ORG_FIELDS);
        return rows.get(0);
    }

    public Map<String, Object> save(String type, Map<String, String> params, HttpServletRequest request) {
        String table = tableFor(type);
        String orgIdentity = currentOrgIdentity(request);
        String userId = currentUser(request);
        String id = trim(params.get("ID"));
        boolean insert = StringUtils.isBlank(id);
        Date now = new Date();
        if (insert) {
            id = newId();
        }

        String uniqueColumn = "member".equals(type) ? "DY_PARTY_MEMBER_UNIQUE_ID" : "DZZ_PARTY_ORGANIZATION_UNIQUE_ID";
        String[] fields = "member".equals(type) ? MEMBER_FIELDS : ORG_FIELDS;
        Map<String, Object> values = new HashMap<String, Object>();
        for (String field : fields) {
            if (params.containsKey(field)) {
                values.put(field, convertValue(field, params.get(field)));
            }
        }
        if (!insert) {
            Map<String, Object> existing = get(type, id, orgIdentity, userId);
            if (existing == null) { throw new IllegalArgumentException("记录不存在或无权操作"); }
        } else if ("organization".equalsIgnoreCase(type) && !isAdministrator(userId)) {
            throw new IllegalArgumentException("只有管理员可以新增党组织");
        } else if ("member".equalsIgnoreCase(type)) {
            String organizationUid = string(values.get("DY_PARTY_ORGANIZATION_UNIQUE_ID"));
            if (StringUtils.isBlank(organizationUid)) {
                throw new IllegalArgumentException("新增党员必须指定党组织");
            }
            Map<String, Object> organization = firstByUid(organizationUid, orgIdentity);
            if (organization == null) { throw new IllegalArgumentException("党组织不存在或无权操作"); }
            assertTargetAccess("organization", organization, orgIdentity, userId);
        }
        values.put(uniqueColumn, insert ? id : values.get(uniqueColumn));
        if (values.get(uniqueColumn) == null) {
            Object existing = scalar("select " + uniqueColumn + " from " + table
                    + " where ID=? and ORG_IDENTITY=?", id, orgIdentity);
            values.put(uniqueColumn, existing == null ? id : existing);
        }
        if (values.get("member".equals(type) ? "DY_DELETE_FLAG" : "DZZ_DELETE_FLAG") == null) {
            values.put("member".equals(type) ? "DY_DELETE_FLAG" : "DZZ_DELETE_FLAG", "0");
        }

        if (insert) {
            List<String> columns = new ArrayList<String>();
            List<Object> insertValues = new ArrayList<Object>();
            add(columns, insertValues, "ID", id);
            add(columns, insertValues, "CREATED_BY", userId);
            add(columns, insertValues, "CREATION_DATE", new Timestamp(now.getTime()));
            add(columns, insertValues, "LAST_UPDATED_BY", userId);
            add(columns, insertValues, "LAST_UPDATE_DATE", new Timestamp(now.getTime()));
            add(columns, insertValues, "LAST_UPDATE_IP", request == null ? "" : request.getRemoteAddr());
            add(columns, insertValues, "VERSION", Long.valueOf(0));
            add(columns, insertValues, "ORG_IDENTITY", orgIdentity);
            addFields(columns, insertValues, fields, values);
            add(columns, insertValues, "SYNC_SOURCE_ID", null);
            add(columns, insertValues, "SYNC_SOURCE_TABLE", MANUAL_SOURCE);
            add(columns, insertValues, "SYNC_BATCH_ID", null);
            add(columns, insertValues, "SYNC_STATE", "MANUAL");
            add(columns, insertValues, "SYNC_ERROR_MESSAGE", null);
            jdbcTemplate.update(insertSql(table, columns), insertValues.toArray());
        } else {
            List<String> assignments = new ArrayList<String>();
            List<Object> updateValues = new ArrayList<Object>();
            for (String field : fields) {
                if (values.containsKey(field)) {
                    assignments.add(field + "=?");
                    updateValues.add(values.get(field));
                }
            }
            assignments.add("LAST_UPDATED_BY=?");
            updateValues.add(userId);
            assignments.add("LAST_UPDATE_DATE=?");
            updateValues.add(new Timestamp(now.getTime()));
            assignments.add("LAST_UPDATE_IP=?");
            updateValues.add(request == null ? "" : request.getRemoteAddr());
            assignments.add("VERSION=NVL(VERSION,0)+1");
            assignments.add("SYNC_STATE=?");
            updateValues.add("MANUAL");
            assignments.add("SYNC_SOURCE_TABLE=?");
            updateValues.add(MANUAL_SOURCE);
            updateValues.add(id);
            updateValues.add(orgIdentity);
            jdbcTemplate.update("update " + table + " set " + join(assignments, ",")
                    + " where ID=? and ORG_IDENTITY=?", updateValues.toArray());
        }
        return get(type, id, orgIdentity, userId);
    }

    public int physicalDelete(String type, String id, HttpServletRequest request) {
        String table = tableFor(type);
        String orgIdentity = currentOrgIdentity(request);
        Map<String, Object> target = get(type, id, orgIdentity, currentUser(request));
        if (target == null) { return 0; }
        if ("organization".equalsIgnoreCase(type)) {
            jdbcTemplate.update("delete from " + MEMBER_TABLE + " where ORG_IDENTITY=? and DY_PARTY_ORGANIZATION_UNIQUE_ID=?",
                    orgIdentity, target.get("DZZ_PARTY_ORGANIZATION_UNIQUE_ID"));
        }
        return jdbcTemplate.update("delete from " + table + " where ID=? and ORG_IDENTITY=?", id, orgIdentity);
    }

    @Transactional
    public int physicalDeleteBatch(String type, String ids, HttpServletRequest request) {
        String[] values = StringUtils.split(ids, ',');
        if (values == null || values.length == 0) {
            return 0;
        }
        int deleted = 0;
        for (String value : values) {
            String id = trim(value);
            if (StringUtils.isBlank(id)) {
                continue;
            }
            deleted += physicalDelete(type, id, request);
        }
        return deleted;
    }

    @Transactional
    public Map<String, Object> sync(String orgIdentity, String executorId, String triggerType) {
        String batchId = newId();
        Timestamp start = new Timestamp(System.currentTimeMillis());
        String userId = StringUtils.defaultIfBlank(executorId, "GROUP_SYNC");
        jdbcTemplate.update("insert into " + LOG_TABLE
                + " (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,BATCH_START_TIME,STATUS,TOTAL_COUNT,SUCCESS_COUNT,ERROR_COUNT,DELETED_COUNT,TRIGGER_TYPE,EXECUTOR_ID)"
                + " values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", batchId, userId, start, userId, start, "", 0,
                orgIdentity, start, "RUNNING", 0, 0, 0, 0, triggerType, executorId);

        int total = 0;
        int success = 0;
        int errors = 0;
        int deleted = 0;
        StringBuilder errorMessage = new StringBuilder();
        Set<String> seenOrganizations = new HashSet<String>();
        Set<String> seenMembers = new HashSet<String>();
        Map<String, String> organizationIds = new HashMap<String, String>();
        Date now = new Date();
        String companyName = rootOrganizationName(orgIdentity);

        try {
            List<Map<String, Object>> organizations = jdbcTemplate.queryForList(
                    "select p.*, (select count(1) from PARTY_MEMBER m where m.PARTY_ID=p.ID and nvl(m.STATUS,'1')='1') MEMBER_COUNT "
                            + "from PARTY_ORGANIZATION p where nvl(p.VALID_FLAG,'1')='1' and p.ORG_IDENTITY=? "
                            + "order by p.TREE_LEVEL, p.TREE_SORTS, p.TREE_SORT", orgIdentity);
            total += organizations.size();
            for (Map<String, Object> source : organizations) {
                try {
                    String sourceId = string(source.get("ID"));
                    String sourceCode = string(source.get("PARTY_CODE"));
                    String sourceName = string(source.get("PARTY_NAME"));
                    if (StringUtils.isBlank(sourceId) || StringUtils.isBlank(sourceCode) || StringUtils.isBlank(sourceName)) {
                        throw new IllegalArgumentException("党组织缺少 ID、PARTY_CODE 或 PARTY_NAME");
                    }
                    String parentId = string(source.get("PARENT_ID"));
                    String parentUid = StringUtils.isBlank(parentId) ? null : organizationIds.get(parentId);
                    if (StringUtils.isNotBlank(parentId) && !"-1".equals(parentId) && parentUid == null) {
                        throw new IllegalArgumentException("上级党组织尚未同步: " + parentId);
                    }
                    Map<String, Object> target = new HashMap<String, Object>();
                    String targetId = findTargetId(ORG_TABLE, ORG_SOURCE, sourceId, orgIdentity);
                    if (targetId == null) {
                        targetId = newId();
                    }
                    Map<String, Object> contact = contact(sourceId);
                    target.put("ID", targetId);
                    target.put("DZZ_PARTY_ORGANIZATION_UNIQUE_ID", targetId);
                    target.put("DZZ_COMPANY_NAME", companyName);
                    target.put("DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID", parentUid);
                    target.put("DZZ_PARTY_ORGANIZATION_ENCODING", sourceCode);
                    target.put("DZZ_PARTY_ORGANIZATION_FULL_NAME", sourceName);
                    target.put("DZZ_PARTY_ORGANIZATION_SHORT_NAME", sourceName);
                    target.put("DZZ_PARTY_ORGANIZATION_CATEGORY", string(source.get("ATTRIBUTE_01")));
                    target.put("DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE", source.get("CREATION_DATE"));
                    target.put("DZZ_PARTY_ORGANIZATION_MEMBER_COUNT", source.get("MEMBER_COUNT"));
                    target.put("DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE", contact.get("EMPLOYEE_CODE"));
                    target.put("DZZ_PARTY_ORGANIZATION_CONTACT_NAME", contact.get("SECRETARY_NAME"));
                    target.put("DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE", contact.get("MOBILE"));
                    target.put("DZZ_PARTY_ORGANIZATION_UNIT_SITUATION", companyName);
                    target.put("DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA", source.get("ATTRIBUTE_03"));
                    target.put("DZZ_DISPLAY_ORDER", source.get("TREE_SORT"));
                     target.put("DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME", parentName(parentId, orgIdentity));
                    target.put("DZZ_DELETE_FLAG", "0");
                    target.put("DZZ_UPDATE_TIMESTAMP", source.get("LAST_UPDATE_DATE"));
                    target.put("DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY", source.get("ATTRIBUTE_02"));
                    target.put("DZZ_OPERATING_PARTY_ORGANIZATION", companyName);
                    target.put("DZZ_PARTY_ORGANIZATION_SECRETARY_NAME", contact.get("SECRETARY_NAME"));
                    target.put("DZZ_PARTY_ORGANIZATION_DEPUTY_SECRETARY_NAME", contact.get("DEPUTY_NAME"));
                    target.put("SYNC_SOURCE_ID", sourceId);
                    target.put("SYNC_SOURCE_TABLE", ORG_SOURCE);
                    target.put("SYNC_BATCH_ID", batchId);
                    target.put("SYNC_STATE", "SYNCED");
                    target.put("SYNC_ERROR_MESSAGE", null);
                    applyOverrides("organization", targetId, target, orgIdentity);
                    upsertTarget(ORG_TABLE, ORG_FIELDS, target, orgIdentity, userId, now);
                    organizationIds.put(sourceId, targetId);
                    seenOrganizations.add(sourceId);
                    success++;
                } catch (Exception ex) {
                    errors++;
                    appendError(errorMessage, ORG_SOURCE, source, ex);
                    markError(ORG_TABLE, ORG_SOURCE, string(source.get("ID")), batchId, ex.getMessage(), orgIdentity, userId, now);
                }
            }
            deleted += markMissing(ORG_TABLE, ORG_SOURCE, batchId, orgIdentity);

            List<Map<String, Object>> members = jdbcTemplate.queryForList(
                    "select m.*, u.NAME USER_NAME, u.MOBILE USER_MOBILE, p.PARTY_NAME PARTY_NAME "
                            + "from PARTY_MEMBER m left join SYS_USER u on u.ID=m.USER_ID "
                            + "left join PARTY_ORGANIZATION p on p.ID=m.PARTY_ID "
                            + "where nvl(m.STATUS,'1')='1' and m.ORG_IDENTITY=?", orgIdentity);
            total += members.size();
            for (Map<String, Object> source : members) {
                try {
                    String sourceId = string(source.get("ID"));
                    String name = StringUtils.defaultIfBlank(string(source.get("USER_NAME")), string(source.get("USER_CODE")));
                    if (StringUtils.isBlank(sourceId) || StringUtils.isBlank(name)) {
                        throw new IllegalArgumentException("党员缺少 ID 或姓名");
                    }
                    String partyId = string(source.get("PARTY_ID"));
                    String partyUid = organizationIds.get(partyId);
                    Map<String, Object> target = new HashMap<String, Object>();
                    String targetId = findTargetId(MEMBER_TABLE, MEMBER_SOURCE, sourceId, orgIdentity);
                    if (targetId == null) {
                        targetId = newId();
                    }
                    Date joinDate = date(source.get("JOIN_PARTY"));
                    target.put("ID", targetId);
                    target.put("DY_JBXX_GROUP_EMPLOYEE_CODE", number(source.get("USER_CODE"), 8));
                    target.put("DY_COMPANY_NAME", companyName);
                    target.put("DY_PARTY_MEMBER_UNIQUE_ID", targetId);
                    target.put("DY_NAME", name);
                    target.put("DY_GENDER", source.get("SEX"));
                    target.put("DY_ID_NUMBER", source.get("IDCARD"));
                    target.put("DY_BIRTH_DATE", source.get("BIRTHDAY"));
                    target.put("DY_EDUCATION_LEVEL", source.get("EDUCATION_LEVEL"));
                    target.put("DY_DEGREE", source.get("EDUCATION_SECTOR"));
                    target.put("DY_ETHNICITY", source.get("NATION"));
                    target.put("DY_JOB_POSITION", source.get("POST"));
                    target.put("DY_NEW_SOCIAL_STRATUM_TYPE", source.get("CATEGORY"));
                    target.put("DY_PROFESSIONAL_POSITION", source.get("PROFESSIONAL_RANK"));
                    target.put("DY_IS_MIGRANT_WORKER", source.get("ATTRIBUTE_10"));
                    target.put("DY_MOBILE_NUMBER", source.get("TEL"));
                    target.put("DY_AFFILIATED_BRANCH", source.get("PARTY_NAME"));
                    target.put("DY_PARTY_ORGANIZATION_UNIQUE_ID", partyUid);
                    target.put("DY_JOINT_BRANCH_UNIT", source.get("JOINPARTY_DEPT"));
                    target.put("DY_HOUSEHOLD_LOCATION", source.get("REGISTER_ADDRESS"));
                    target.put("DY_CURRENT_ADDRESS", source.get("ADDRESS"));
                    target.put("DY_PARTY_ENTRY_DATE", joinDate);
                    target.put("DY_PARTY_REGULARIZATION_DATE", source.get("REGULAR_DATE"));
                    target.put("DY_PARTY_YEARS", joinDate == null ? null : Integer.valueOf(years(joinDate, now)));
                    target.put("DY_PARTY_YEARS_CORRECTION", joinDate == null ? null : Integer.valueOf(months(joinDate, now)));
                    target.put("DY_ENTRY_SYSTEM_TYPE", source.get("JOINZG_TYPE"));
                    target.put("DY_ENTRY_SYSTEM_DATE", joinDate);
                    target.put("DY_ENTRY_SYSTEM_OPERATING_PARTY_ID", partyUid);
                    target.put("DY_EXIT_SYSTEM_TYPE", "0");
                    target.put("DY_EXIT_SYSTEM_DATE", null);
                    target.put("DY_EXIT_SYSTEM_OPERATING_PARTY_ID", null);
                    target.put("DY_DELETE_FLAG", "0");
                    target.put("DY_UPDATE_TIMESTAMP", source.get("LAST_UPDATE_DATE"));
                    target.put("DY_OPERATING_PARTY_ORGANIZATION", companyName);
                    target.put("SYNC_SOURCE_ID", sourceId);
                    target.put("SYNC_SOURCE_TABLE", MEMBER_SOURCE);
                    target.put("SYNC_BATCH_ID", batchId);
                    target.put("SYNC_STATE", "SYNCED");
                    target.put("SYNC_ERROR_MESSAGE", null);
                    applyOverrides("member", targetId, target, orgIdentity);
                    upsertTarget(MEMBER_TABLE, MEMBER_FIELDS, target, orgIdentity, userId, now);
                    seenMembers.add(sourceId);
                    success++;
                } catch (Exception ex) {
                    errors++;
                    appendError(errorMessage, MEMBER_SOURCE, source, ex);
                    markError(MEMBER_TABLE, MEMBER_SOURCE, string(source.get("ID")), batchId, ex.getMessage(), orgIdentity, userId, now);
                }
            }
            deleted += markMissing(MEMBER_TABLE, MEMBER_SOURCE, batchId, orgIdentity);
            String status = errors == 0 ? "SUCCESS" : (success == 0 ? "FAILED" : "PARTIAL");
            finishLog(batchId, status, total, success, errors, deleted, errorMessage.toString(), now);
        } catch (Exception ex) {
            errors++;
            appendError(errorMessage, "BATCH", null, ex);
            finishLog(batchId, "FAILED", total, success, errors, deleted, errorMessage.toString(), new Date());
        }
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("batchId", batchId);
        result.put("total", Integer.valueOf(total));
        result.put("success", Integer.valueOf(success));
        result.put("errors", Integer.valueOf(errors));
        result.put("deleted", Integer.valueOf(deleted));
        result.put("message", errorMessage.toString());
        return result;
    }

    public List<Map<String, Object>> logs(String orgIdentity) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from " + LOG_TABLE
                + " where ORG_IDENTITY=? order by BATCH_START_TIME desc", orgIdentity);
        for (Map<String, Object> row : rows) {
            Object error = row.get("ERROR_MESSAGE");
            if (row.get("BATCH_START_TIME") != null) {
                row.put("BATCH_START_TIME", formatDate("UPDATE_TIMESTAMP", row.get("BATCH_START_TIME")));
            }
            if (row.get("BATCH_END_TIME") != null) {
                row.put("BATCH_END_TIME", formatDate("UPDATE_TIMESTAMP", row.get("BATCH_END_TIME")));
            }
            if (error instanceof Clob) {
                try {
                    Clob clob = (Clob) error;
                    long length = clob.length();
                    row.put("ERROR_MESSAGE", clob.getSubString(1, (int) Math.min(length, 30000L)));
                } catch (Exception ex) {
                    row.put("ERROR_MESSAGE", "日志正文读取失败: " + ex.getMessage());
                }
            } else if (error != null) {
                row.put("ERROR_MESSAGE", String.valueOf(error));
            }
        }
        return rows;
    }

    public byte[] exportZip(String orgIdentity, String userId, String ids) throws IOException {
        return exportZip(orgIdentity, userId, "organization", ids, "", "active");
    }

    public byte[] exportZip(String orgIdentity, String userId, String exportType, String ids,
                            String keyword, String status) throws IOException {
        if ("member".equalsIgnoreCase(exportType)) {
            return exportMemberZip(orgIdentity, userId, ids, keyword, status);
        }
        return exportOrganizationZip(orgIdentity, userId, ids, keyword, status);
    }

    private byte[] exportOrganizationZip(String orgIdentity, String userId, String ids,
                                         String keyword, String status) throws IOException {
        List<Map<String, Object>> organizations;
        StringBuilder sql = new StringBuilder("select * from ").append(ORG_TABLE)
                .append(" where ORG_IDENTITY=?");
        List<Object> args = new ArrayList<Object>();
        args.add(orgIdentity);
        if ("deleted".equalsIgnoreCase(status)) {
            sql.append(" and nvl(DZZ_DELETE_FLAG,'0')='1'");
        } else if (!"all".equalsIgnoreCase(status)) {
            sql.append(" and nvl(DZZ_DELETE_FLAG,'0')='0'");
        }
        if (!isAdministrator(userId)) {
            sql.append(" and SYNC_SOURCE_ID in (select PARTY_ID from PARTY_ORGAN_MEMBER where USER_ID=? and nvl(VALID_FLAG,'1')='1')");
            args.add(userId);
        }
        if (StringUtils.isNotBlank(keyword)) {
            sql.append(" and (DZZ_PARTY_ORGANIZATION_FULL_NAME like ? or DZZ_PARTY_ORGANIZATION_ENCODING like ?)");
            args.add("%" + keyword.trim() + "%");
            args.add("%" + keyword.trim() + "%");
        }
        String[] selected = StringUtils.split(ids, ',');
        if (selected != null && selected.length > 0) {
            sql.append(" and ID in (");
            for (int i = 0; i < selected.length; i++) {
                if (i > 0) { sql.append(','); }
                sql.append('?');
                args.add(selected[i].trim());
            }
            sql.append(')');
        }
        sql.append(" order by DZZ_DISPLAY_ORDER, DZZ_PARTY_ORGANIZATION_FULL_NAME");
        organizations = jdbcTemplate.queryForList(sql.toString(), args.toArray());
        Map<String, Map<String, String>> dictionaries = loadDictionaries();
        ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        ZipOutputStream zip = new ZipOutputStream(bytes);
        Set<String> entryNames = new HashSet<String>();
        for (Map<String, Object> organization : organizations) {
            String uid = string(organization.get("DZZ_PARTY_ORGANIZATION_UNIQUE_ID"));
            String safeName = fileName(string(organization.get("DZZ_PARTY_ORGANIZATION_SHORT_NAME")));
            String entryName = safeName + "_集团党建数据.xlsx";
            int suffix = 2;
            while (!entryNames.add(entryName)) {
                entryName = safeName + "_" + suffix++ + "_集团党建数据.xlsx";
            }
            XSSFWorkbook workbook = new XSSFWorkbook();
            writeSheet(workbook, "党组织信息", ORG_FIELDS, organization, null, uid, "organization", dictionaries, false);
            List<Map<String, Object>> members = jdbcTemplate.queryForList("select * from " + MEMBER_TABLE
                    + " where ORG_IDENTITY=? and nvl(DY_DELETE_FLAG,'0')='0' and DY_PARTY_ORGANIZATION_UNIQUE_ID=?"
                    + " order by DY_NAME", orgIdentity, uid);
            writeSheet(workbook, "党员信息", MEMBER_FIELDS, null, members, uid, "organization", dictionaries, false);
            ByteArrayOutputStream workbookBytes = new ByteArrayOutputStream();
            workbook.write(workbookBytes);
            zip.putNextEntry(new ZipEntry(entryName));
            zip.write(workbookBytes.toByteArray());
            zip.closeEntry();
        }
        zip.finish();
        zip.close();
        return bytes.toByteArray();
    }

    private byte[] exportMemberZip(String orgIdentity, String userId, String ids,
                                   String keyword, String status) throws IOException {
        StringBuilder sql = new StringBuilder("select m.* from ").append(MEMBER_TABLE).append(" m ")
                .append("where m.ORG_IDENTITY=?");
        List<Object> args = new ArrayList<Object>();
        args.add(orgIdentity);
        if (!isAdministrator(userId)) {
            sql.append(" and m.DY_PARTY_ORGANIZATION_UNIQUE_ID in (select o.DZZ_PARTY_ORGANIZATION_UNIQUE_ID from ")
                    .append(ORG_TABLE).append(" o where o.ORG_IDENTITY=? and o.SYNC_SOURCE_ID in (select PARTY_ID from PARTY_ORGAN_MEMBER where USER_ID=? and nvl(VALID_FLAG,'1')='1'))");
            args.add(orgIdentity);
            args.add(userId);
        }
        if ("deleted".equalsIgnoreCase(status)) {
            sql.append(" and nvl(m.DY_DELETE_FLAG,'0')='1'");
        } else if (!"all".equalsIgnoreCase(status)) {
            sql.append(" and nvl(m.DY_DELETE_FLAG,'0')='0'");
        }
        String[] selected = StringUtils.split(ids, ',');
        if (selected != null && selected.length > 0) {
            sql.append(" and m.ID in (");
            for (int i = 0; i < selected.length; i++) {
                if (i > 0) { sql.append(','); }
                sql.append('?');
                args.add(selected[i].trim());
            }
            sql.append(')');
        }
        if (StringUtils.isNotBlank(keyword)) {
            sql.append(" and (m.DY_NAME like ? or m.DY_ID_NUMBER like ?)");
            args.add("%" + keyword.trim() + "%");
            args.add("%" + keyword.trim() + "%");
        }
        sql.append(" order by m.DY_PARTY_ORGANIZATION_UNIQUE_ID,m.DY_NAME");
        List<Map<String, Object>> members = jdbcTemplate.queryForList(sql.toString(), args.toArray());
        Map<String, List<Map<String, Object>>> membersByOrganization = new LinkedHashMap<String, List<Map<String, Object>>>();
        for (Map<String, Object> member : members) {
            String uid = string(member.get("DY_PARTY_ORGANIZATION_UNIQUE_ID"));
            if (StringUtils.isBlank(uid)) { continue; }
            List<Map<String, Object>> group = membersByOrganization.get(uid);
            if (group == null) {
                group = new ArrayList<Map<String, Object>>();
                membersByOrganization.put(uid, group);
            }
            group.add(member);
        }
        Map<String, Map<String, String>> dictionaries = loadDictionaries();
        ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        ZipOutputStream zip = new ZipOutputStream(bytes);
        for (Map.Entry<String, List<Map<String, Object>>> entry : membersByOrganization.entrySet()) {
            Map<String, Object> organization = firstByUid(entry.getKey(), orgIdentity);
            if (organization == null) { continue; }
            ensureOrganizationAccess(organization, userId);
            String safeName = fileName(string(organization.get("DZZ_PARTY_ORGANIZATION_SHORT_NAME")));
            XSSFWorkbook workbook = new XSSFWorkbook();
            writeSheet(workbook, "党组织信息", ORG_FIELDS, organization, null, entry.getKey(), "member", dictionaries, false);
            writeSheet(workbook, "党员信息", MEMBER_FIELDS, null, entry.getValue(), entry.getKey(), "member", dictionaries, false);
            ByteArrayOutputStream workbookBytes = new ByteArrayOutputStream();
            workbook.write(workbookBytes);
            zip.putNextEntry(new ZipEntry(safeName + "_党员数据.xlsx"));
            zip.write(workbookBytes.toByteArray());
            zip.closeEntry();
        }
        zip.finish();
        zip.close();
        return bytes.toByteArray();
    }

    public Map<String, Object> importFile(MultipartFile file, String orgIdentity, String userId,
                                          String remoteIp) throws Exception {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("请选择 Excel 或 ZIP 文件");
        }
        String batchId = newId();
        List<String> errors = new ArrayList<String>();
        int files = 0;
        int imported = 0;
        String name = StringUtils.defaultString(file.getOriginalFilename()).toLowerCase();
        if (name.endsWith(".zip")) {
            ZipInputStream zip = new ZipInputStream(file.getInputStream());
            ZipEntry entry;
            while ((entry = zip.getNextEntry()) != null) {
                if (entry.isDirectory() || !entry.getName().toLowerCase().endsWith(".xlsx")) { continue; }
                files++;
                ByteArrayOutputStream workbookBytes = new ByteArrayOutputStream();
                byte[] buffer = new byte[8192];
                int read;
                while ((read = zip.read(buffer)) >= 0) { workbookBytes.write(buffer, 0, read); }
                try {
                    imported += importWorkbook(new ByteArrayInputStream(workbookBytes.toByteArray()), entry.getName(),
                            orgIdentity, userId, remoteIp, batchId);
                } catch (Exception ex) {
                    errors.add(entry.getName() + "：" + StringUtils.defaultIfBlank(ex.getMessage(), ex.toString()));
                }
            }
            zip.close();
        } else {
            files = 1;
            try {
                imported = importWorkbook(file.getInputStream(), file.getOriginalFilename(), orgIdentity, userId,
                        remoteIp, batchId);
            } catch (Exception ex) {
                errors.add(StringUtils.defaultString(file.getOriginalFilename()) + "："
                        + StringUtils.defaultIfBlank(ex.getMessage(), ex.toString()));
            }
        }
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("batchId", batchId);
        result.put("files", files);
        result.put("imported", imported);
        result.put("failedFiles", errors.size());
        result.put("errors", errors);
        if (!errors.isEmpty()) { result.put("errorReportBase64", Base64.getEncoder().encodeToString(errorReport(errors))); }
        return result;
    }

    private int importWorkbook(InputStream input, String fileName, String orgIdentity, String userId,
                               String remoteIp, String batchId) throws Exception {
        XSSFWorkbook workbook = new XSSFWorkbook(input);
        try {
            XSSFSheet organizationSheet = workbook.getSheet("党组织信息");
            XSSFSheet memberSheet = workbook.getSheet("党员信息");
            if (organizationSheet == null || memberSheet == null) {
                throw new IllegalArgumentException("工作簿必须包含“党组织信息”和“党员信息”两个页签");
            }
            Map<String, Integer> organizationHeaders = headers(organizationSheet);
            Map<String, Integer> memberHeaders = headers(memberSheet);
            String uid = cellText(organizationSheet, 1, organizationHeaders.get("DZZ_PARTY_ORGANIZATION_UNIQUE_ID"));
            if (StringUtils.isBlank(uid)) {
                uid = cellText(organizationSheet, 1, organizationHeaders.get("_ORG_UID"));
            }
            Map<String, Object> organization = firstByUid(uid, orgIdentity);
            if (organization == null) {
                throw new IllegalArgumentException("党组织唯一标识不存在或无权导入：" + uid);
            }
            ensureOrganizationAccess(organization, userId);
            String exportMode = cellText(organizationSheet, 1, organizationHeaders.get("_EXPORT_MODE"));
            boolean membersOnly = "member".equalsIgnoreCase(exportMode);
            Map<String, Map<String, String>> dictionaries = loadDictionaries();
            List<Map<String, String>> organizationValues = rows(organizationSheet, organizationHeaders);
            List<Map<String, String>> memberValues = rows(memberSheet, memberHeaders);
            resolveDictionaryValues(organizationValues, dictionaries, "组织");
            resolveDictionaryValues(memberValues, dictionaries, "党员");
            validateRows(organizationValues, "组织", uid);
            validateRows(memberValues, "党员", uid);
            if (!membersOnly && !organizationValues.isEmpty()) {
                updateImported("organization", string(organization.get("ID")), organizationValues.get(0), orgIdentity,
                        userId, remoteIp, batchId);
                saveOverrides("organization", string(organization.get("ID")), organizationValues.get(0), orgIdentity,
                        userId, remoteIp, batchId);
            }
            int imported = !membersOnly && !organizationValues.isEmpty() ? 1 : 0;
            for (Map<String, String> values : memberValues) {
                String targetId = values.remove("_TARGET_ID");
                if (StringUtils.isBlank(targetId)) { targetId = newId(); }
                Map<String, Object> existing = get("member", targetId, orgIdentity, userId);
                if (existing == null) {
                    Map<String, Object> target = new HashMap<String, Object>();
                    target.put("ID", targetId);
                    target.put("DY_PARTY_MEMBER_UNIQUE_ID", targetId);
                    target.put("DY_PARTY_ORGANIZATION_UNIQUE_ID", uid);
                    target.put("DY_DELETE_FLAG", "0");
                    target.put("SYNC_SOURCE_TABLE", "IMPORT");
                    target.put("SYNC_SOURCE_ID", null);
                    target.put("SYNC_BATCH_ID", batchId);
                    target.put("SYNC_STATE", "IMPORTED");
                    target.put("SYNC_ERROR_MESSAGE", null);
                    for (String field : MEMBER_FIELDS) {
                        if (values.containsKey(field)) { target.put(field, convertValue(field, values.get(field))); }
                    }
                    upsertTarget(MEMBER_TABLE, MEMBER_FIELDS, target, orgIdentity, userId, new Date());
                } else {
                    updateImported("member", targetId, values, orgIdentity, userId, remoteIp, batchId);
                }
                saveOverrides("member", targetId, values, orgIdentity, userId, remoteIp, batchId);
                imported++;
            }
            return imported;
        } finally {
        }
    }

    private void resolveDictionaryValues(List<Map<String, String>> values,
                                         Map<String, Map<String, String>> dictionaries, String type) {
        for (Map<String, String> row : values) {
            for (String field : LOOKUP_TYPES.keySet()) {
                if (!row.containsKey(field)) { continue; }
                String visible = trim(row.get(field));
                String hiddenCode = trim(row.get("_CODE_" + field));
                if (StringUtils.isBlank(visible)) {
                    row.put(field, hiddenCode);
                    continue;
                }
                Map<String, String> nameToCode = dictionaries.get(field + "#name");
                Map<String, String> codeToName = dictionaries.get(field + "#code");
                if (nameToCode == null || nameToCode.isEmpty() || codeToName == null) { continue; }
                if (codeToName.containsKey(visible)) {
                    row.put(field, visible);
                } else if (nameToCode.containsKey(visible)) {
                    row.put(field, nameToCode.get(visible));
                } else if (StringUtils.isNotBlank(hiddenCode)
                        && visible.equals(codeToName.get(hiddenCode))) {
                    row.put(field, hiddenCode);
                } else {
                    throw new IllegalArgumentException(type + "第" + row.get("__ROW_NUMBER")
                            + "行的“" + label(field) + "”不是平台字典值: " + visible);
                }
            }
        }
    }

    private void validateRows(List<Map<String, String>> values, String type, String uid) {
        for (Map<String, String> row : values) {
            if ("党员".equals(type) && StringUtils.isBlank(row.get("DY_NAME"))) {
                throw new IllegalArgumentException("党员页存在姓名为空的行");
            }
            if ("组织".equals(type) && StringUtils.isBlank(row.get("DZZ_PARTY_ORGANIZATION_FULL_NAME"))) {
                throw new IllegalArgumentException("党组织页存在全称为空的行");
            }
            String rowUid = row.get("DY_PARTY_ORGANIZATION_UNIQUE_ID");
            if (StringUtils.isNotBlank(rowUid) && !uid.equals(rowUid)) {
                throw new IllegalArgumentException("党员所属党组织与文件不一致");
            }
            String typeKey = "党员".equals(type) ? "member" : "organization";
            for (Map.Entry<String, String> value : row.entrySet()) {
                if (isAllowedField(typeKey, value.getKey())) { convertValue(value.getKey(), value.getValue()); }
            }
        }
    }

    private void updateImported(String type, String targetId, Map<String, String> values, String orgIdentity,
                                String userId, String remoteIp, String batchId) {
        String table = tableFor(type);
        String[] fields = "member".equals(type) ? MEMBER_FIELDS : ORG_FIELDS;
        List<String> assignments = new ArrayList<String>();
        List<Object> args = new ArrayList<Object>();
        for (String field : fields) {
            if (values.containsKey(field) && !isReadonlyField(field)) {
                assignments.add(field + "=?");
                args.add(convertValue(field, values.get(field)));
            }
        }
        assignments.add("SYNC_STATE=?"); args.add("IMPORTED");
        assignments.add("SYNC_BATCH_ID=?"); args.add(batchId);
        assignments.add("LAST_UPDATED_BY=?"); args.add(userId);
        assignments.add("LAST_UPDATE_DATE=?"); args.add(new Timestamp(System.currentTimeMillis()));
        assignments.add("LAST_UPDATE_IP=?"); args.add(remoteIp);
        assignments.add("VERSION=NVL(VERSION,0)+1");
        args.add(targetId); args.add(orgIdentity);
        jdbcTemplate.update("update " + table + " set " + join(assignments, ",") + " where ID=? and ORG_IDENTITY=?", args.toArray());
    }

    private void saveOverrides(String type, String targetId, Map<String, String> values, String orgIdentity,
                               String userId, String remoteIp, String batchId) {
        String[] fields = "member".equals(type) ? MEMBER_FIELDS : ORG_FIELDS;
        for (String field : fields) {
            if (!values.containsKey(field) || isReadonlyField(field)) { continue; }
            String value = values.get(field);
            Object existing = scalar("select ID from " + OVERRIDE_TABLE + " where ORG_IDENTITY=? and TARGET_TYPE=? and TARGET_ID=? and FIELD_NAME=?",
                    orgIdentity, type, targetId, field);
            if (existing == null) {
                jdbcTemplate.update("insert into " + OVERRIDE_TABLE
                        + " (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,TARGET_TYPE,TARGET_ID,FIELD_NAME,FIELD_VALUE,IMPORT_BATCH_ID,ACTIVE_FLAG) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        newId(), userId, new Timestamp(System.currentTimeMillis()), userId,
                        new Timestamp(System.currentTimeMillis()), remoteIp, 0, orgIdentity, type, targetId, field,
                        value, batchId, "1");
            } else {
                jdbcTemplate.update("update " + OVERRIDE_TABLE + " set FIELD_VALUE=?,IMPORT_BATCH_ID=?,ACTIVE_FLAG='1',LAST_UPDATED_BY=?,LAST_UPDATE_DATE=?,LAST_UPDATE_IP=?,VERSION=NVL(VERSION,0)+1 where ID=? and ORG_IDENTITY=?",
                        value, batchId, userId, new Timestamp(System.currentTimeMillis()), remoteIp, existing, orgIdentity);
            }
        }
    }

    private void applyOverrides(String type, String targetId, Map<String, Object> target, String orgIdentity) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select FIELD_NAME,FIELD_VALUE from " + OVERRIDE_TABLE
                + " where ORG_IDENTITY=? and TARGET_TYPE=? and TARGET_ID=? and nvl(ACTIVE_FLAG,'1')='1'", orgIdentity, type, targetId);
        for (Map<String, Object> row : rows) {
            String field = string(row.get("FIELD_NAME"));
            if (isAllowedField(type, field)) { target.put(field, convertValue(field, string(row.get("FIELD_VALUE")))); }
        }
    }

    private void upsertTarget(String table, String[] fields, Map<String, Object> target,
                              String orgIdentity, String userId, Date now) {
        String sourceTable = string(target.get("SYNC_SOURCE_TABLE"));
        String sourceId = string(target.get("SYNC_SOURCE_ID"));
        String existingId = findTargetId(table, sourceTable, sourceId, orgIdentity);
        if (existingId != null) {
            target.put("ID", existingId);
        }
        List<String> columns = new ArrayList<String>();
        List<Object> values = new ArrayList<Object>();
        if (existingId == null) {
            add(columns, values, "ID", target.get("ID"));
            add(columns, values, "CREATED_BY", userId);
            add(columns, values, "CREATION_DATE", new Timestamp(now.getTime()));
            add(columns, values, "VERSION", Long.valueOf(0));
            add(columns, values, "ORG_IDENTITY", orgIdentity);
            addFields(columns, values, fields, target);
            add(columns, values, "SYNC_SOURCE_ID", sourceId);
            add(columns, values, "SYNC_SOURCE_TABLE", sourceTable);
            add(columns, values, "SYNC_BATCH_ID", target.get("SYNC_BATCH_ID"));
            add(columns, values, "SYNC_STATE", target.get("SYNC_STATE"));
            add(columns, values, "SYNC_ERROR_MESSAGE", target.get("SYNC_ERROR_MESSAGE"));
            add(columns, values, "LAST_UPDATED_BY", userId);
            add(columns, values, "LAST_UPDATE_DATE", new Timestamp(now.getTime()));
            add(columns, values, "LAST_UPDATE_IP", "");
            jdbcTemplate.update(insertSql(table, columns), values.toArray());
        } else {
            List<String> assignments = new ArrayList<String>();
            List<Object> updateValues = new ArrayList<Object>();
            for (String field : fields) {
                assignments.add(field + "=?");
                updateValues.add(target.get(field));
            }
            assignments.add("SYNC_BATCH_ID=?");
            updateValues.add(target.get("SYNC_BATCH_ID"));
            assignments.add("SYNC_STATE=?");
            updateValues.add(target.get("SYNC_STATE"));
            assignments.add("SYNC_ERROR_MESSAGE=?");
            updateValues.add(target.get("SYNC_ERROR_MESSAGE"));
            assignments.add("LAST_UPDATED_BY=?");
            updateValues.add(userId);
            assignments.add("LAST_UPDATE_DATE=?");
            updateValues.add(new Timestamp(now.getTime()));
            assignments.add("LAST_UPDATE_IP=?");
            updateValues.add("");
            assignments.add("VERSION=NVL(VERSION,0)+1");
            updateValues.add(existingId);
            updateValues.add(orgIdentity);
            jdbcTemplate.update("update " + table + " set " + join(assignments, ",")
                    + " where ID=? and ORG_IDENTITY=?", updateValues.toArray());
        }
    }

    private int markMissing(String table, String sourceTable, String batchId, String orgIdentity) {
        return jdbcTemplate.update("delete from " + table
                + " where ORG_IDENTITY=? and SYNC_SOURCE_TABLE=? and nvl(SYNC_BATCH_ID,'-')<>?",
                orgIdentity, sourceTable, batchId);
    }

    private void markError(String table, String sourceTable, String sourceId, String batchId, String message,
                           String orgIdentity, String userId, Date now) {
        if (StringUtils.isBlank(sourceId)) {
            return;
        }
        jdbcTemplate.update("update " + table + " set SYNC_BATCH_ID=?, SYNC_STATE='ERROR', SYNC_ERROR_MESSAGE=?, "
                + "LAST_UPDATED_BY=?, LAST_UPDATE_DATE=?, LAST_UPDATE_IP=?, VERSION=NVL(VERSION,0)+1 "
                + "where ORG_IDENTITY=? and SYNC_SOURCE_TABLE=? and SYNC_SOURCE_ID=?",
                batchId, StringUtils.abbreviate(message, 950), userId, new Timestamp(now.getTime()), "",
                orgIdentity, sourceTable, sourceId);
    }

    private Map<String, Object> contact(String partyId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select u.NAME, u.LOGIN_NAME, u.MOBILE, v.LOOKUP_NAME, m.USER_POST "
                        + "from PARTY_ORGAN_MEMBER m left join SYS_USER u on u.ID=m.USER_ID "
                        + "left join SYS_LOOKUP_V v on v.LOOKUP_CODE=m.USER_POST and v.LOOKUP_TYPE='PARTY_POST' "
                        + "where m.PARTY_ID=? and nvl(m.VALID_FLAG,'1')='1' "
                        + "and (v.LOOKUP_NAME like '%书记%' or m.USER_POST in ('0','1','2')) "
                        + "order by case when v.LOOKUP_NAME like '%副书记%' then 2 else 1 end", partyId);
        Map<String, Object> result = new HashMap<String, Object>();
        for (Map<String, Object> row : rows) {
            String name = string(row.get("NAME"));
            if (StringUtils.isBlank(name)) {
                continue;
            }
            String postName = string(row.get("LOOKUP_NAME"));
            if (postName.indexOf("副书记") >= 0 && result.get("DEPUTY_NAME") == null) {
                result.put("DEPUTY_NAME", name);
            } else if (result.get("SECRETARY_NAME") == null) {
                result.put("SECRETARY_NAME", name);
                result.put("EMPLOYEE_CODE", row.get("LOGIN_NAME"));
                result.put("MOBILE", row.get("MOBILE"));
            }
        }
        return result;
    }

    private String parentName(String parentId, String orgIdentity) {
        if (StringUtils.isBlank(parentId) || "-1".equals(parentId)) {
            return null;
        }
        Object name = scalar("select PARTY_NAME from PARTY_ORGANIZATION where ID=? and ORG_IDENTITY=?", parentId, orgIdentity);
        return name == null ? null : String.valueOf(name);
    }

    private String rootOrganizationName(String orgIdentity) {
        try {
            Object name = scalar("select PARTY_NAME from PARTY_ORGANIZATION where PARENT_ID='-1' and ORG_IDENTITY=? order by TREE_SORT", orgIdentity);
            return name == null ? "" : String.valueOf(name);
        } catch (Exception ex) {
            return "";
        }
    }

    private String findTargetId(String table, String sourceTable, String sourceId, String orgIdentity) {
        if (StringUtils.isBlank(sourceId)) {
            return null;
        }
        Object id = scalar("select ID from " + table
                + " where ORG_IDENTITY=? and SYNC_SOURCE_TABLE=? and SYNC_SOURCE_ID=?",
                orgIdentity, sourceTable, sourceId);
        return id == null ? null : String.valueOf(id);
    }

    private Object scalar(String sql, Object... args) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, args);
        if (rows.isEmpty()) {
            return null;
        }
        return rows.get(0).values().iterator().next();
    }

    private String tableFor(String type) {
        if ("member".equalsIgnoreCase(type)) {
            return MEMBER_TABLE;
        }
        if ("organization".equalsIgnoreCase(type)) {
            return ORG_TABLE;
        }
        throw new IllegalArgumentException("不支持的数据类型: " + type);
    }

    private void finishLog(String batchId, String status, int total, int success, int errors, int deleted,
                           String errorMessage, Date end) {
        String message = errorMessage;
        if (message != null && message.length() > 30000) {
            message = message.substring(0, 30000);
        }
        jdbcTemplate.update("update " + LOG_TABLE + " set BATCH_END_TIME=?, LAST_UPDATE_DATE=?, STATUS=?, TOTAL_COUNT=?, "
                + "SUCCESS_COUNT=?, ERROR_COUNT=?, DELETED_COUNT=?, ERROR_MESSAGE=?, VERSION=NVL(VERSION,0)+1 where ID=?",
                new Timestamp(end.getTime()), new Timestamp(end.getTime()), status, total, success, errors, deleted, message, batchId);
    }

    private void appendError(StringBuilder errors, String sourceTable, Map<String, Object> row, Exception ex) {
        if (errors.length() > 29000) {
            return;
        }
        errors.append(sourceTable).append("[ID=").append(row == null ? "" : string(row.get("ID"))).append("]: ")
                .append(ex.getMessage()).append('\n');
    }

    private String currentOrgIdentity(HttpServletRequest request) {
        String identity = request == null ? null : SessionHelper.getCurrentOrgIdentity(request);
        return StringUtils.defaultIfBlank(identity, "1");
    }

    private String currentUser(HttpServletRequest request) {
        String user = request == null ? null : SessionHelper.getLoginSysUserId(request);
        return StringUtils.defaultIfBlank(user, "GROUP_SYNC");
    }

    private void addFields(List<String> columns, List<Object> values, String[] fields, Map<String, Object> source) {
        for (String field : fields) {
            add(columns, values, field, source.get(field));
        }
    }

    private void add(List<String> columns, List<Object> values, String column, Object value) {
        columns.add(column);
        values.add(value);
    }

    private String insertSql(String table, List<String> columns) {
        StringBuilder placeholders = new StringBuilder();
        for (int i = 0; i < columns.size(); i++) {
            if (i > 0) {
                placeholders.append(',');
            }
            placeholders.append('?');
        }
        return "insert into " + table + " (" + join(columns, ",") + ") values (" + placeholders + ")";
    }

    private String join(List<String> values, String separator) {
        StringBuilder result = new StringBuilder();
        for (String value : values) {
            if (result.length() > 0) {
                result.append(separator);
            }
            result.append(value);
        }
        return result.toString();
    }

    private Object convertValue(String field, String value) {
        if (StringUtils.isBlank(value)) {
            return null;
        }
        if (field.indexOf("DATE") >= 0 || field.indexOf("TIMESTAMP") >= 0) {
            return new Timestamp(parseDate(value).getTime());
        }
        if (field.indexOf("COUNT") >= 0 || field.indexOf("ORDER") >= 0 || field.indexOf("YEARS") >= 0
                || field.indexOf("CODE") >= 0 && field.indexOf("EMPLOYEE") >= 0) {
            return Long.valueOf(value.trim());
        }
        return value.trim();
    }

    private void formatDateFields(Map<String, Object> row, String[] fields) {
        for (String field : fields) {
            if (isDateField(field) && row.containsKey(field) && row.get(field) != null) {
                row.put(field, formatDate(field, row.get(field)));
            }
        }
    }

    private String formatDate(String field, Object value) {
        Date dateValue;
        if (value instanceof Date) {
            dateValue = (Date) value;
        } else if (value instanceof Number) {
            long timestamp = ((Number) value).longValue();
            if (Math.abs(timestamp) < 100000000000L) {
                timestamp *= 1000L;
            }
            dateValue = new Date(timestamp);
        } else {
            return String.valueOf(value);
        }
        String pattern = field.indexOf("UPDATE_TIMESTAMP") >= 0 ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";
        return new SimpleDateFormat(pattern).format(dateValue);
    }

    private void writeSheet(XSSFWorkbook workbook, String sheetName, String[] fields,
                            Map<String, Object> organization, List<Map<String, Object>> members, String orgUid,
                            String exportMode, Map<String, Map<String, String>> dictionaries,
                            boolean allLocked) {
        XSSFSheet sheet = workbook.createSheet(sheetName);
        Row header = sheet.createRow(0);
        List<String> columns = new ArrayList<String>();
        for (String field : fields) { columns.add(field); }
        for (String field : fields) { columns.add("_FIELD_" + field); }
        for (String field : fields) {
            if (LOOKUP_TYPES.containsKey(field)) { columns.add("_CODE_" + field); }
        }
        columns.add("_TARGET_ID");
        columns.add("_SOURCE_ID");
        columns.add("_ORG_UID");
        columns.add("_EXPORT_MODE");
        CellStyle locked = workbook.createCellStyle();
        locked.setLocked(true);
        CellStyle lockedDate = workbook.createCellStyle();
        lockedDate.setLocked(true);
        lockedDate.setDataFormat(workbook.createDataFormat().getFormat("yyyy-mm-dd"));
        CellStyle editable = workbook.createCellStyle();
        editable.setLocked(!allLocked);
        CellStyle dateStyle = workbook.createCellStyle();
        dateStyle.setLocked(!allLocked);
        dateStyle.setDataFormat(workbook.createDataFormat().getFormat("yyyy-mm-dd"));
        for (int i = 0; i < columns.size(); i++) {
            String column = columns.get(i);
            Cell cell = header.createCell(i);
            cell.setCellValue(i < fields.length ? label(column) : column);
            cell.setCellStyle(locked);
            if (column.startsWith("_") || isReadonlyField(column)) { sheet.setColumnHidden(i, true); }
        }
        if (members == null) {
            writeRow(sheet, 1, fields, organization, null, orgUid, exportMode, dictionaries,
                    editable, locked, lockedDate, dateStyle, allLocked);
        } else {
            for (int i = 0; i < members.size(); i++) {
                Map<String, Object> row = members.get(i);
                writeRow(sheet, i + 1, fields, row, row, orgUid, exportMode, dictionaries,
                        editable, locked, lockedDate, dateStyle, allLocked);
            }
            for (int i = members.size(); i < members.size() + 20; i++) {
                writeRow(sheet, i + 1, fields, new HashMap<String, Object>(), null, orgUid, exportMode,
                        dictionaries, editable, locked, lockedDate, dateStyle, allLocked);
            }
        }
        addDictionaryValidation(workbook, sheet, fields, dictionaries, members == null ? 1 : members.size() + 20);
        sheet.createFreezePane(0, 1);
        for (int i = 0; i < fields.length; i++) { sheet.autoSizeColumn(i); }
    }

    private void writeRow(XSSFSheet sheet, int rowIndex, String[] fields, Map<String, Object> row,
                          Map<String, Object> metadata, String orgUid, String exportMode,
                          Map<String, Map<String, String>> dictionaries, CellStyle editable,
                          CellStyle locked, CellStyle lockedDate, CellStyle dateStyle, boolean allLocked) {
        Row out = sheet.createRow(rowIndex);
        int offset = fields.length;
        for (int i = 0; i < fields.length; i++) {
            String field = fields[i];
            Cell cell = out.createCell(i);
            Object value = row == null ? null : row.get(field);
            if (value instanceof Date && isDateField(field)) {
                cell.setCellValue((Date) value);
                cell.setCellStyle(isReadonlyField(field) || allLocked ? lockedDate : dateStyle);
            } else {
                cell.setCellValue(displayValue(field, value, dictionaries));
                cell.setCellStyle(isReadonlyField(field) || allLocked ? locked : editable);
            }
        }
        for (String field : fields) {
            Cell technical = out.createCell(offset++);
            technical.setCellValue(field);
            technical.setCellStyle(locked);
        }
        for (String field : fields) {
            if (!LOOKUP_TYPES.containsKey(field)) { continue; }
            Cell code = out.createCell(offset++);
            code.setCellValue(row == null ? "" : string(row.get(field)));
            code.setCellStyle(locked);
        }
        Cell target = out.createCell(offset++);
        target.setCellValue(metadata == null ? "" : string(metadata.get("ID")));
        target.setCellStyle(locked);
        Cell source = out.createCell(offset++);
        source.setCellValue(metadata == null ? "" : string(metadata.get("SYNC_SOURCE_ID")));
        source.setCellStyle(locked);
        Cell org = out.createCell(offset++);
        org.setCellValue(orgUid);
        org.setCellStyle(locked);
        Cell mode = out.createCell(offset);
        mode.setCellValue(exportMode);
        mode.setCellStyle(locked);
    }

    private String displayValue(String field, Object value, Map<String, Map<String, String>> dictionaries) {
        if (value == null) { return ""; }
        String raw = String.valueOf(value);
        Map<String, String> codeToName = dictionaries.get(field + "#code");
        if (codeToName != null && codeToName.containsKey(raw)) { return codeToName.get(raw); }
        return raw;
    }

    private void addDictionaryValidation(XSSFWorkbook workbook, XSSFSheet sheet, String[] fields,
                                         Map<String, Map<String, String>> dictionaries, int lastRow) {
        XSSFSheet dictionarySheet = workbook.getSheet("字典");
            if (dictionarySheet == null) {
            dictionarySheet = workbook.createSheet("字典");
            int column = 0;
            Row dictionaryHeader = dictionarySheet.createRow(0);
            for (String field : LOOKUP_TYPES.keySet()) {
                Map<String, String> codeToName = dictionaries.get(field + "#code");
                if (codeToName == null || codeToName.isEmpty()) { continue; }
                dictionaryHeader.createCell(column).setCellValue(label(field));
                int row = 1;
                for (String name : codeToName.values()) {
                    Row dictionaryRow = dictionarySheet.getRow(row);
                    if (dictionaryRow == null) { dictionaryRow = dictionarySheet.createRow(row); }
                    dictionaryRow.createCell(column).setCellValue(name);
                    row++;
                }
                column++;
            }
            workbook.setSheetHidden(workbook.getSheetIndex(dictionarySheet), true);
        }
        XSSFDataValidationHelper helper = new XSSFDataValidationHelper(sheet);
        int fieldColumn = 0;
        int dictionaryColumn = 0;
        for (String field : fields) {
            Map<String, String> codeToName = dictionaries.get(field + "#code");
            if (codeToName == null || codeToName.isEmpty()) { fieldColumn++; continue; }
            String formula = "'字典'!$" + excelColumn(dictionaryColumn) + "$2:$" + excelColumn(dictionaryColumn) + "$" + (codeToName.size() + 1);
            DataValidationConstraint constraint = helper.createFormulaListConstraint(formula);
            DataValidation validation = helper.createValidation(constraint,
                    new CellRangeAddressList(1, Math.max(1, lastRow), fieldColumn, fieldColumn));
            validation.setShowErrorBox(true);
            validation.setErrorStyle(0);
            validation.createErrorBox("字典值错误", "请选择下拉列表中的中文值");
            sheet.addValidationData(validation);
            fieldColumn++;
            dictionaryColumn++;
        }
    }

    private String excelColumn(int zeroBased) {
        StringBuilder result = new StringBuilder();
        int value = zeroBased + 1;
        while (value > 0) {
            int remainder = (value - 1) % 26;
            result.insert(0, (char) ('A' + remainder));
            value = (value - 1) / 26;
        }
        return result.toString();
    }

    private Map<String, Map<String, String>> loadDictionaries() {
        Map<String, Map<String, String>> result = new HashMap<String, Map<String, String>>();
        for (Map.Entry<String, String> entry : LOOKUP_TYPES.entrySet()) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select LOOKUP_CODE,LOOKUP_NAME from SYS_LOOKUP_V where LOOKUP_TYPE=? order by LOOKUP_CODE",
                    entry.getValue());
            Map<String, String> codeToName = new LinkedHashMap<String, String>();
            Map<String, String> nameToCode = new HashMap<String, String>();
            for (Map<String, Object> row : rows) {
                String code = trim(string(row.get("LOOKUP_CODE")));
                String name = trim(string(row.get("LOOKUP_NAME")));
                if (StringUtils.isNotBlank(code) && StringUtils.isNotBlank(name)) {
                    codeToName.put(code, name);
                    nameToCode.put(name, code);
                }
            }
            result.put(entry.getKey() + "#code", codeToName);
            result.put(entry.getKey() + "#name", nameToCode);
        }
        return result;
    }

    private Map<String, Integer> headers(XSSFSheet sheet) {
        Map<String, Integer> result = new LinkedHashMap<String, Integer>();
        Row row = sheet.getRow(0);
        if (row == null) { return result; }
        DataFormatter formatter = new DataFormatter();
        for (int i = 0; i < row.getLastCellNum(); i++) {
            String value = formatter.formatCellValue(row.getCell(i));
            if (StringUtils.isBlank(value)) { continue; }
            String header = canonicalHeader(value.trim());
            if (header.length() == 0 || header.startsWith("_FIELD_")) { continue; }
            result.put(header, Integer.valueOf(i));
        }
        return result;
    }

    private String canonicalHeader(String header) {
        if (FIELD_LABELS.containsKey(header) || header.startsWith("_") || isFieldName(header)) { return header; }
        for (Map.Entry<String, String> entry : FIELD_LABELS.entrySet()) {
            if (entry.getValue().equals(header)) { return entry.getKey(); }
        }
        return "";
    }

    private boolean isFieldName(String value) {
        for (String field : MEMBER_FIELDS) { if (field.equals(value)) { return true; } }
        for (String field : ORG_FIELDS) { if (field.equals(value)) { return true; } }
        return false;
    }

    private List<Map<String, String>> rows(XSSFSheet sheet, Map<String, Integer> headers) {
        List<Map<String, String>> result = new ArrayList<Map<String, String>>();
        for (int rowIndex = 1; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
            Row row = sheet.getRow(rowIndex);
            if (row == null) { continue; }
            Map<String, String> values = new LinkedHashMap<String, String>();
            values.put("__ROW_NUMBER", String.valueOf(rowIndex + 1));
            for (Map.Entry<String, Integer> header : headers.entrySet()) {
                values.put(header.getKey(), cellText(row, header.getValue().intValue()));
            }
            boolean empty = true;
            for (Map.Entry<String, String> value : values.entrySet()) {
                if (!value.getKey().startsWith("_") && !"__ROW_NUMBER".equals(value.getKey())
                        && StringUtils.isNotBlank(value.getValue())) { empty = false; break; }
            }
            if (!empty) { result.add(values); }
        }
        return result;
    }

    private String cellText(XSSFSheet sheet, int rowIndex, Integer column) {
        return column == null ? "" : cellText(sheet.getRow(rowIndex), column.intValue());
    }

    private String cellText(Row row, int column) {
        if (row == null || row.getCell(column) == null) { return ""; }
        Cell cell = row.getCell(column);
        if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            return new SimpleDateFormat("yyyy-MM-dd").format(cell.getDateCellValue());
        }
        return new DataFormatter().formatCellValue(cell).trim();
    }

    private Map<String, Object> firstByUid(String uid, String orgIdentity) {
        if (StringUtils.isBlank(uid)) { return null; }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from " + ORG_TABLE
                + " where ORG_IDENTITY=? and DZZ_PARTY_ORGANIZATION_UNIQUE_ID=? and nvl(DZZ_DELETE_FLAG,'0')='0'", orgIdentity, uid);
        return rows.isEmpty() ? null : rows.get(0);
    }

    private void ensureOrganizationAccess(Map<String, Object> organization, String userId) {
        if (isAdministrator(userId)) { return; }
        Integer count = jdbcTemplate.queryForObject("select count(1) from PARTY_ORGAN_MEMBER where USER_ID=? and PARTY_ID=? and nvl(VALID_FLAG,'1')='1'",
                Integer.class, userId, organization.get("SYNC_SOURCE_ID"));
        if (count == null || count.intValue() == 0) { throw new IllegalArgumentException("无权导入该党组织文件"); }
    }

    private void appendAccessFilter(StringBuilder sql, List<Object> args, String type,
                                    String orgIdentity, String userId) {
        if (isAdministrator(userId)) { return; }
        if ("member".equalsIgnoreCase(type)) {
            sql.append(" and DY_PARTY_ORGANIZATION_UNIQUE_ID in (select o.DZZ_PARTY_ORGANIZATION_UNIQUE_ID from ")
                    .append(ORG_TABLE).append(" o where o.ORG_IDENTITY=? and o.SYNC_SOURCE_ID in ")
                    .append("(select PARTY_ID from PARTY_ORGAN_MEMBER where USER_ID=? and nvl(VALID_FLAG,'1')='1'))");
            args.add(orgIdentity);
            args.add(userId);
        } else {
            sql.append(" and SYNC_SOURCE_ID in (select PARTY_ID from PARTY_ORGAN_MEMBER where USER_ID=? and nvl(VALID_FLAG,'1')='1')");
            args.add(userId);
        }
    }

    private void assertTargetAccess(String type, Map<String, Object> target,
                                    String orgIdentity, String userId) {
        if (isAdministrator(userId)) { return; }
        if ("organization".equalsIgnoreCase(type)) {
            ensureOrganizationAccess(target, userId);
            return;
        }
        String organizationUid = string(target.get("DY_PARTY_ORGANIZATION_UNIQUE_ID"));
        if (StringUtils.isBlank(organizationUid)) {
            throw new IllegalArgumentException("党员未关联党组织，无法操作");
        }
        Map<String, Object> organization = firstByUid(organizationUid, orgIdentity);
        if (organization == null) { throw new IllegalArgumentException("党组织不存在或无权操作"); }
        ensureOrganizationAccess(organization, userId);
    }

    public void assertAdministrator(String userId) {
        if (!isAdministrator(userId)) {
            throw new IllegalArgumentException("只有管理员可以执行全量同步");
        }
    }

    private boolean isAdministrator(String userId) {
        if (StringUtils.isBlank(userId)) { return false; }
        Integer count = jdbcTemplate.queryForObject("select count(1) from SYS_USER_ROLE ur join SYS_ROLE r on r.ID=ur.SYS_ROLE_ID where ur.SYS_USER_ID=? and r.ROLE_NAME in (?,?) and nvl(r.VALID_FLAG,'1')='1'",
                Integer.class, userId, PARTY_ADMIN_ROLE, PLATFORM_ADMIN_ROLE);
        return count != null && count.intValue() > 0;
    }

    private byte[] errorReport(List<String> errors) throws IOException {
        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("导入错误");
        sheet.createRow(0).createCell(0).setCellValue("文件");
        sheet.getRow(0).createCell(1).setCellValue("错误信息");
        for (int i = 0; i < errors.size(); i++) {
            String error = errors.get(i);
            int split = error.indexOf('：');
            Row row = sheet.createRow(i + 1);
            row.createCell(0).setCellValue(split < 0 ? "" : error.substring(0, split));
            row.createCell(1).setCellValue(split < 0 ? error : error.substring(split + 1));
        }
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        return out.toByteArray();
    }

    private String fileName(String value) {
        String result = StringUtils.defaultIfBlank(value, "党组织").replaceAll("[\\\\/:*?\"<>|]", "_");
        return result.length() > 40 ? result.substring(0, 40) : result;
    }

    private String label(String field) {
        String label = FIELD_LABELS.get(field);
        return StringUtils.defaultIfBlank(label, field);
    }

    private boolean isDateField(String field) {
        return field.indexOf("DATE") >= 0 || field.indexOf("TIMESTAMP") >= 0;
    }

    private boolean isReadonlyField(String field) {
        return field.indexOf("UNIQUE_ID") >= 0 || field.indexOf("DELETE_FLAG") >= 0
                || field.indexOf("UPDATE_TIMESTAMP") >= 0 || field.indexOf("OPERATING_PARTY_ORGANIZATION") >= 0
                || "DZZ_PARTY_ORGANIZATION_MEMBER_COUNT".equals(field);
    }

    private boolean isAllowedField(String type, String field) {
        String[] fields = "member".equals(type) ? MEMBER_FIELDS : ORG_FIELDS;
        for (String value : fields) { if (value.equals(field)) { return !isReadonlyField(field); } }
        return false;
    }

    private Date parseDate(String text) {
        String normalized = text == null ? "" : text.trim();
        if (normalized.matches("\\d{10,13}")) {
            long timestamp = Long.parseLong(normalized);
            if (normalized.length() == 10) {
                timestamp *= 1000L;
            }
            return new Date(timestamp);
        }
        String[] patterns = new String[] {"yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd", "yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd"};
        for (String pattern : patterns) {
            try {
                SimpleDateFormat format = new SimpleDateFormat(pattern);
                format.setLenient(false);
                return format.parse(normalized);
            } catch (ParseException ignore) {
                // try next supported format
            }
        }
        throw new IllegalArgumentException("日期格式错误: " + text);
    }

    private Date date(Object value) {
        return value instanceof Date ? (Date) value : (value == null ? null : parseDate(String.valueOf(value)));
    }

    private Integer number(Object value, int maxDigits) {
        if (value == null || StringUtils.isBlank(String.valueOf(value))) {
            return null;
        }
        String text = String.valueOf(value).trim();
        if (text.length() > maxDigits) {
            throw new IllegalArgumentException("员工编码超过 " + maxDigits + " 位");
        }
        try {
            return Integer.valueOf(text);
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("员工编码不是数字: " + text);
        }
    }

    private int years(Date from, Date to) {
        Calendar start = Calendar.getInstance();
        start.setTime(from);
        Calendar end = Calendar.getInstance();
        end.setTime(to);
        int result = end.get(Calendar.YEAR) - start.get(Calendar.YEAR);
        if (end.get(Calendar.DAY_OF_YEAR) < start.get(Calendar.DAY_OF_YEAR)) {
            result--;
        }
        return Math.max(result, 0);
    }

    private int months(Date from, Date to) {
        Calendar start = Calendar.getInstance();
        start.setTime(from);
        Calendar end = Calendar.getInstance();
        end.setTime(to);
        int result = (end.get(Calendar.YEAR) - start.get(Calendar.YEAR)) * 12
                + end.get(Calendar.MONTH) - start.get(Calendar.MONTH);
        if (end.get(Calendar.DAY_OF_MONTH) < start.get(Calendar.DAY_OF_MONTH)) {
            result--;
        }
        return Math.max(result, 0);
    }

    private String newId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    private String string(Object value) {
        return value == null ? "" : String.valueOf(value);
    }

    private String trim(String value) {
        return value == null ? null : value.trim();
    }
}
