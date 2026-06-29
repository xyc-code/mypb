package avicit.pb.excelexportconfig.service;

import avicit.pb.utils.excel.MultiSubTableExcelExporter;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class ExcelExportConfigService {

    private static final String TYPE_MAIN = "MAIN";
    private static final String TYPE_CHILD = "CHILD";
    private static final String EXPORT_YES = "Y";
    private static final String STATUS_ENABLED = "1";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private volatile boolean schemaChecked;

    public Map<String, Object> currentUser(HttpServletRequest request) {
        Map<String, Object> result = new HashMap<String, Object>();
        SysUser user = SessionHelper.getLoginSysUser(request);
        if (user != null) {
            result.put("id", user.getId());
            result.put("name", StringUtils.defaultIfEmpty(user.getName(), user.getLoginName()));
        } else {
            result.put("id", "");
            result.put("name", "");
        }
        result.put("date", new java.text.SimpleDateFormat("yyyy-MM-dd").format(new Date()));
        return result;
    }

    public Map<String, Object> listConfigs(HttpServletRequest request) {
        ensureSchema();
        int page = parseInt(request.getParameter("page"), 1);
        int rows = parseInt(request.getParameter("rows"), 20);
        String keyWord = trim(request.getParameter("keyWord"));
        String type = trim(request.getParameter("type"));

        List<Object> args = new ArrayList<Object>();
        StringBuilder where = new StringBuilder(" where 1=1 ");
        if (StringUtils.isNotBlank(type)) {
            where.append(" and CONFIG_TYPE = ? ");
            args.add(type);
        }
        if (StringUtils.isNotBlank(keyWord)) {
            where.append(" and (upper(CONFIG_CODE) like ? or upper(CONFIG_NAME) like ? or upper(TABLE_NAME) like ? or upper(TABLE_COMMENT) like ?) ");
            String like = "%" + keyWord.toUpperCase() + "%";
            args.add(like);
            args.add(like);
            args.add(like);
            args.add(like);
        }

        int totalCount = jdbcTemplate.queryForObject("select count(1) from PB_EXCEL_EXPORT_CONFIG " + where, args.toArray(), Integer.class);
        int start = (page - 1) * rows;
        int end = page * rows;
        List<Object> pageArgs = new ArrayList<Object>(args);
        pageArgs.add(Integer.valueOf(end));
        pageArgs.add(Integer.valueOf(start));
        String sql = "select * from (select rownum rn, t.* from (" +
                "select ID, CONFIG_CODE, CONFIG_NAME, CONFIG_TYPE, TABLE_NAME, TABLE_COMMENT, STATUS, CREATED_BY, CREATION_DATE " +
                "from PB_EXCEL_EXPORT_CONFIG " + where +
                " order by CREATION_DATE desc, CONFIG_CODE) t where rownum <= ?) where rn > ?";
        List<Map<String, Object>> data = jdbcTemplate.queryForList(sql, pageArgs.toArray());

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("records", Integer.valueOf(totalCount));
        result.put("page", Integer.valueOf(page));
        result.put("total", Integer.valueOf((totalCount + rows - 1) / rows));
        result.put("rows", data);
        return result;
    }

    public Map<String, Object> detail(String id) {
        ensureSchema();
        requireNotBlank(id, "id不能为空");
        Map<String, Object> config = querySingle("select * from PB_EXCEL_EXPORT_CONFIG where ID = ?", id);
        if (config == null) {
            throw new IllegalArgumentException("配置不存在");
        }
        List<Map<String, Object>> columns = jdbcTemplate.queryForList(
                "select * from PB_EXCEL_EXPORT_COLUMN where CONFIG_ID = ? order by SORT_NO, COLUMN_NAME", id);
        List<Map<String, Object>> relations = jdbcTemplate.queryForList(
                "select r.*, c.CONFIG_NAME CHILD_CONFIG_NAME, c.TABLE_NAME CHILD_TABLE_NAME " +
                        "from PB_EXCEL_EXPORT_RELATION r left join PB_EXCEL_EXPORT_CONFIG c on c.ID = r.CHILD_CONFIG_ID " +
                        "where r.MAIN_CONFIG_ID = ? order by r.SORT_NO, r.ID", id);
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("config", config);
        result.put("columns", columns);
        result.put("relations", relations);
        return result;
    }

    public String save(String data, HttpServletRequest request) {
        ensureSchema();
        JSONObject root = JSON.parseObject(data);
        JSONObject config = root.getJSONObject("config");
        JSONArray columns = root.getJSONArray("columns");
        JSONArray relations = root.getJSONArray("relations");
        if (config == null) {
            throw new IllegalArgumentException("配置主信息不能为空");
        }
        String id = trim(config.getString("ID"));
        String code = upper(config.getString("CONFIG_CODE"));
        String name = trim(config.getString("CONFIG_NAME"));
        String type = upper(config.getString("CONFIG_TYPE"));
        String tableName = upper(config.getString("TABLE_NAME"));
        String tableComment = trim(config.getString("TABLE_COMMENT"));
        String status = StringUtils.defaultIfBlank(trim(config.getString("STATUS")), STATUS_ENABLED);

        requireNotBlank(code, "编码不能为空");
        requireNotBlank(name, "名称不能为空");
        requireType(type);
        requireIdentifier(tableName, "表名不合法");
        requireTableExists(tableName);
        if (columns == null || columns.isEmpty()) {
            throw new IllegalArgumentException("字段配置不能为空");
        }
        validateColumns(tableName, columns);
        if (TYPE_CHILD.equals(type)) {
            relations = new JSONArray();
        }

        Map<String, Object> audit = audit(request);
        if (StringUtils.isBlank(id)) {
            assertCodeUnique(code, null);
            id = ComUtil.getId();
            jdbcTemplate.update("insert into PB_EXCEL_EXPORT_CONFIG (" +
                            "ID, CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE, LAST_UPDATE_IP, VERSION, ORG_IDENTITY, " +
                            "CONFIG_CODE, CONFIG_NAME, CONFIG_TYPE, TABLE_NAME, TABLE_COMMENT, STATUS, REMARK) " +
                            "values (?, ?, sysdate, ?, sysdate, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?)",
                    id, audit.get("userName"), audit.get("userName"), audit.get("ip"), audit.get("orgIdentity"),
                    code, name, type, tableName, tableComment, status, trim(config.getString("REMARK")));
        } else {
            assertCodeUnique(code, id);
            jdbcTemplate.update("update PB_EXCEL_EXPORT_CONFIG set LAST_UPDATED_BY = ?, LAST_UPDATE_DATE = sysdate, LAST_UPDATE_IP = ?, VERSION = VERSION + 1, " +
                            "CONFIG_CODE = ?, CONFIG_NAME = ?, CONFIG_TYPE = ?, TABLE_NAME = ?, TABLE_COMMENT = ?, STATUS = ?, REMARK = ? where ID = ?",
                    audit.get("userName"), audit.get("ip"), code, name, type, tableName, tableComment, status, trim(config.getString("REMARK")), id);
            jdbcTemplate.update("delete from PB_EXCEL_EXPORT_COLUMN where CONFIG_ID = ?", id);
            jdbcTemplate.update("delete from PB_EXCEL_EXPORT_RELATION where MAIN_CONFIG_ID = ?", id);
        }

        saveColumns(id, tableName, columns, audit);
        if (TYPE_MAIN.equals(type)) {
            saveRelations(id, relations, audit);
        }
        return id;
    }

    public void delete(String[] ids) {
        ensureSchema();
        if (ids == null || ids.length == 0) {
            throw new IllegalArgumentException("请选择要删除的数据");
        }
        for (int i = 0; i < ids.length; i++) {
            String id = trim(ids[i]);
            if (StringUtils.isBlank(id)) {
                continue;
            }
            jdbcTemplate.update("delete from PB_EXCEL_EXPORT_RELATION where MAIN_CONFIG_ID = ? or CHILD_CONFIG_ID = ?", id, id);
            jdbcTemplate.update("delete from PB_EXCEL_EXPORT_COLUMN where CONFIG_ID = ?", id);
            jdbcTemplate.update("delete from PB_EXCEL_EXPORT_CONFIG where ID = ?", id);
        }
    }

    public List<Map<String, Object>> listTables(String keyWord) {
        ensureSchema();
        List<Object> args = new ArrayList<Object>();
        StringBuilder sql = new StringBuilder();
        sql.append("select * from (select TABLE_NAME, COMMENTS TABLE_COMMENT from USER_TAB_COMMENTS where TABLE_TYPE = 'TABLE' ");
        if (StringUtils.isNotBlank(keyWord)) {
            sql.append(" and (upper(TABLE_NAME) like ? or upper(COMMENTS) like ?) ");
            String like = "%" + keyWord.toUpperCase() + "%";
            args.add(like);
            args.add(like);
        }
        sql.append(" order by TABLE_NAME) where rownum <= 80");
        return jdbcTemplate.queryForList(sql.toString(), args.toArray());
    }

    public List<Map<String, Object>> listColumns(String tableName) {
        ensureSchema();
        tableName = upper(tableName);
        requireIdentifier(tableName, "表名不合法");
        requireTableExists(tableName);
        return jdbcTemplate.queryForList(
                "select c.COLUMN_NAME, nvl(cc.COMMENTS, c.COLUMN_NAME) COLUMN_LABEL, c.DATA_TYPE COLUMN_TYPE, c.DATA_LENGTH COLUMN_LENGTH, c.COLUMN_ID SORT_NO " +
                        "from USER_TAB_COLUMNS c left join USER_COL_COMMENTS cc on cc.TABLE_NAME = c.TABLE_NAME and cc.COLUMN_NAME = c.COLUMN_NAME " +
                        "where c.TABLE_NAME = ? order by c.COLUMN_ID", tableName);
    }

    public List<Map<String, Object>> listChildConfigs(String keyWord) {
        ensureSchema();
        List<Object> args = new ArrayList<Object>();
        StringBuilder sql = new StringBuilder();
        sql.append("select ID, CONFIG_CODE, CONFIG_NAME, TABLE_NAME from PB_EXCEL_EXPORT_CONFIG where CONFIG_TYPE = 'CHILD' and STATUS = '1' ");
        if (StringUtils.isNotBlank(keyWord)) {
            sql.append(" and (upper(CONFIG_CODE) like ? or upper(CONFIG_NAME) like ? or upper(TABLE_NAME) like ?) ");
            String like = "%" + keyWord.toUpperCase() + "%";
            args.add(like);
            args.add(like);
            args.add(like);
        }
        sql.append(" order by CONFIG_CODE");
        return jdbcTemplate.queryForList(sql.toString(), args.toArray());
    }

    public byte[] exportByConfig(String code, String id) throws Exception {
        ensureSchema();
        code = upper(code);
        requireNotBlank(code, "编码不能为空");
        requireNotBlank(id, "业务主键不能为空");
        Map<String, Object> config = querySingle(
                "select * from PB_EXCEL_EXPORT_CONFIG where CONFIG_CODE = ? and CONFIG_TYPE = 'MAIN' and STATUS = '1'", code);
        if (config == null) {
            throw new IllegalArgumentException("未找到可用的主表导出配置：" + code);
        }
        String tableName = value(config, "TABLE_NAME");
        List<Map<String, Object>> columns = exportColumns(value(config, "ID"));
        if (columns.isEmpty()) {
            throw new IllegalArgumentException("主表未配置导出字段");
        }
        Map<String, Object> master = querySingle(buildSelectAllSql(tableName, "ID"), id);
        if (master == null) {
            throw new IllegalArgumentException("主表数据不存在：" + id);
        }

        MultiSubTableExcelExporter.Report report = new MultiSubTableExcelExporter.Report()
                .setSheetName(safeSheetName(value(config, "CONFIG_NAME")));
        MultiSubTableExcelExporter.MasterBlock block = new MultiSubTableExcelExporter.MasterBlock();
        for (int i = 0; i < columns.size(); i++) {
            Map<String, Object> col = columns.get(i);
            String columnName = value(col, "COLUMN_NAME");
            block.addField(value(col, "COLUMN_LABEL"), master.get(columnName));
        }
        addSections(block, value(config, "ID"), master);
        report.addBlock(block);
        return MultiSubTableExcelExporter.export(report);
    }

    public byte[] exportByConfigMulti(String code, String idsText) throws Exception {
        ensureSchema();
        code = upper(code);
        requireNotBlank(code, "编码不能为空");
        List<String> ids = parseIds(idsText);
        if (ids.isEmpty()) {
            throw new IllegalArgumentException("业务主键不能为空");
        }
        Map<String, Object> config = querySingle(
                "select * from PB_EXCEL_EXPORT_CONFIG where CONFIG_CODE = ? and CONFIG_TYPE = 'MAIN' and STATUS = '1'", code);
        if (config == null) {
            throw new IllegalArgumentException("未找到可用的主表导出配置：" + code);
        }
        String tableName = value(config, "TABLE_NAME");
        List<Map<String, Object>> columns = exportColumns(value(config, "ID"));
        if (columns.isEmpty()) {
            throw new IllegalArgumentException("主表未配置导出字段");
        }

        MultiSubTableExcelExporter.Report report = new MultiSubTableExcelExporter.Report()
                .setSheetName(safeSheetName(value(config, "CONFIG_NAME")));
        for (int i = 0; i < ids.size(); i++) {
            Map<String, Object> master = querySingle(buildSelectAllSql(tableName, "ID"), ids.get(i));
            if (master == null) {
                throw new IllegalArgumentException("主表数据不存在：" + ids.get(i));
            }
            report.addBlock(buildMasterBlock(value(config, "ID"), columns, master));
        }
        return MultiSubTableExcelExporter.export(report);
    }

    private MultiSubTableExcelExporter.MasterBlock buildMasterBlock(String mainConfigId, List<Map<String, Object>> columns, Map<String, Object> master) {
        MultiSubTableExcelExporter.MasterBlock block = new MultiSubTableExcelExporter.MasterBlock();
        for (int i = 0; i < columns.size(); i++) {
            Map<String, Object> col = columns.get(i);
            String columnName = value(col, "COLUMN_NAME");
            block.addField(value(col, "COLUMN_LABEL"), master.get(columnName));
        }
        addSections(block, mainConfigId, master);
        return block;
    }

    public String exportFileName(String code) {
        ensureSchema();
        Map<String, Object> config = querySingle("select CONFIG_NAME from PB_EXCEL_EXPORT_CONFIG where CONFIG_CODE = ?", upper(code));
        String name = config == null ? code : value(config, "CONFIG_NAME");
        return StringUtils.defaultIfBlank(name, "export") + ".xlsx";
    }

    private void addSections(MultiSubTableExcelExporter.MasterBlock block, String mainConfigId, Map<String, Object> master) {
        List<Map<String, Object>> relations = jdbcTemplate.queryForList(
                "select r.*, c.CONFIG_NAME, c.TABLE_NAME from PB_EXCEL_EXPORT_RELATION r " +
                        "join PB_EXCEL_EXPORT_CONFIG c on c.ID = r.CHILD_CONFIG_ID " +
                        "where r.MAIN_CONFIG_ID = ? and c.STATUS = '1' order by r.SORT_NO, r.ID", mainConfigId);
        for (int i = 0; i < relations.size(); i++) {
            Map<String, Object> relation = relations.get(i);
            String childConfigId = value(relation, "CHILD_CONFIG_ID");
            String childTable = value(relation, "TABLE_NAME");
            String mainColumn = value(relation, "MAIN_COLUMN_NAME");
            String childColumn = value(relation, "CHILD_COLUMN_NAME");
            Object relationValue = master.get(mainColumn);
            List<Map<String, Object>> childColumns = exportColumns(childConfigId);
            MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                    .setTitle(value(relation, "CONFIG_NAME"));
            for (int j = 0; j < childColumns.size(); j++) {
                Map<String, Object> col = childColumns.get(j);
                section.addColumn(value(col, "COLUMN_NAME"), value(col, "COLUMN_LABEL"), parseInt(value(col, "COLUMN_WIDTH"), 16));
            }
            if (relationValue != null && !childColumns.isEmpty()) {
                section.setRows(jdbcTemplate.queryForList(buildSelectSql(childTable, childColumns, childColumn), relationValue));
            }
            block.addSection(section);
        }
    }

    private List<Map<String, Object>> exportColumns(String configId) {
        return jdbcTemplate.queryForList(
                "select COLUMN_NAME, COLUMN_LABEL, COLUMN_WIDTH from PB_EXCEL_EXPORT_COLUMN " +
                        "where CONFIG_ID = ? and EXPORT_FLAG = 'Y' order by SORT_NO, COLUMN_NAME", configId);
    }

    private String buildSelectSql(String tableName, List<Map<String, Object>> columns, String whereColumn) {
        requireIdentifier(tableName, "表名不合法");
        requireIdentifier(whereColumn, "关联字段不合法");
        StringBuilder select = new StringBuilder("select ");
        for (int i = 0; i < columns.size(); i++) {
            String columnName = value(columns.get(i), "COLUMN_NAME");
            requireIdentifier(columnName, "字段名不合法");
            if (i > 0) {
                select.append(", ");
            }
            select.append(columnName);
        }
        select.append(" from ").append(tableName).append(" where ").append(whereColumn).append(" = ?");
        if (hasColumn(tableName, "ID")) {
            select.append(" order by ID");
        }
        return select.toString();
    }

    private String buildSelectAllSql(String tableName, String whereColumn) {
        requireIdentifier(tableName, "表名不合法");
        requireIdentifier(whereColumn, "关联字段不合法");
        StringBuilder select = new StringBuilder("select * from ");
        select.append(tableName).append(" where ").append(whereColumn).append(" = ?");
        if (hasColumn(tableName, "ID")) {
            select.append(" order by ID");
        }
        return select.toString();
    }

    private void saveColumns(String configId, String tableName, JSONArray columns, Map<String, Object> audit) {
        for (int i = 0; i < columns.size(); i++) {
            JSONObject col = columns.getJSONObject(i);
            String columnName = upper(col.getString("COLUMN_NAME"));
            String columnLabel = StringUtils.defaultIfBlank(trim(col.getString("COLUMN_LABEL")), columnName);
            String columnType = trim(col.getString("COLUMN_TYPE"));
            int sortNo = parseInt(col.getString("SORT_NO"), i + 1);
            String exportFlag = EXPORT_YES.equalsIgnoreCase(trim(col.getString("EXPORT_FLAG"))) ? EXPORT_YES : "N";
            int width = parseInt(col.getString("COLUMN_WIDTH"), 16);
            jdbcTemplate.update("insert into PB_EXCEL_EXPORT_COLUMN (" +
                            "ID, CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE, LAST_UPDATE_IP, VERSION, ORG_IDENTITY, " +
                            "CONFIG_ID, TABLE_NAME, COLUMN_NAME, COLUMN_LABEL, COLUMN_TYPE, COLUMN_LENGTH, EXPORT_FLAG, SORT_NO, COLUMN_WIDTH) " +
                            "values (?, ?, sysdate, ?, sysdate, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    ComUtil.getId(), audit.get("userName"), audit.get("userName"), audit.get("ip"), audit.get("orgIdentity"),
                    configId, tableName, columnName, columnLabel, columnType, Integer.valueOf(parseInt(col.getString("COLUMN_LENGTH"), 0)),
                    exportFlag, Integer.valueOf(sortNo), Integer.valueOf(width));
        }
    }

    private void saveRelations(String mainConfigId, JSONArray relations, Map<String, Object> audit) {
        if (relations == null) {
            return;
        }
        for (int i = 0; i < relations.size(); i++) {
            JSONObject relation = relations.getJSONObject(i);
            String childConfigId = trim(relation.getString("CHILD_CONFIG_ID"));
            if (StringUtils.isBlank(childConfigId)) {
                continue;
            }
            Map<String, Object> child = querySingle("select ID, TABLE_NAME, CONFIG_TYPE from PB_EXCEL_EXPORT_CONFIG where ID = ?", childConfigId);
            if (child == null || !TYPE_CHILD.equals(value(child, "CONFIG_TYPE"))) {
                throw new IllegalArgumentException("关联子表配置不存在或类型不是子表");
            }
            String mainColumn = upper(relation.getString("MAIN_COLUMN_NAME"));
            String childColumn = upper(relation.getString("CHILD_COLUMN_NAME"));
            requireIdentifier(mainColumn, "主表关联字段不合法");
            requireIdentifier(childColumn, "子表关联字段不合法");
            jdbcTemplate.update("insert into PB_EXCEL_EXPORT_RELATION (" +
                            "ID, CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE, LAST_UPDATE_IP, VERSION, ORG_IDENTITY, " +
                            "MAIN_CONFIG_ID, CHILD_CONFIG_ID, MAIN_COLUMN_NAME, CHILD_COLUMN_NAME, SORT_NO) " +
                            "values (?, ?, sysdate, ?, sysdate, ?, 0, ?, ?, ?, ?, ?, ?)",
                    ComUtil.getId(), audit.get("userName"), audit.get("userName"), audit.get("ip"), audit.get("orgIdentity"),
                    mainConfigId, childConfigId, mainColumn, childColumn, Integer.valueOf(parseInt(relation.getString("SORT_NO"), i + 1)));
        }
    }

    private void validateColumns(String tableName, JSONArray columns) {
        Set<String> actual = new HashSet<String>();
        List<Map<String, Object>> dbColumns = listColumns(tableName);
        for (int i = 0; i < dbColumns.size(); i++) {
            actual.add(value(dbColumns.get(i), "COLUMN_NAME"));
        }
        for (int i = 0; i < columns.size(); i++) {
            String columnName = upper(columns.getJSONObject(i).getString("COLUMN_NAME"));
            requireIdentifier(columnName, "字段名不合法");
            if (!actual.contains(columnName)) {
                throw new IllegalArgumentException("字段不存在：" + columnName);
            }
        }
    }

    private void assertCodeUnique(String code, String selfId) {
        List<Object> args = new ArrayList<Object>();
        args.add(code);
        String sql = "select count(1) from PB_EXCEL_EXPORT_CONFIG where CONFIG_CODE = ?";
        if (StringUtils.isNotBlank(selfId)) {
            sql += " and ID <> ?";
            args.add(selfId);
        }
        int count = jdbcTemplate.queryForObject(sql, args.toArray(), Integer.class);
        if (count > 0) {
            throw new IllegalArgumentException("编码已存在：" + code);
        }
    }

    private void requireTableExists(String tableName) {
        int count = jdbcTemplate.queryForObject("select count(1) from USER_TABLES where TABLE_NAME = ?", new Object[]{tableName}, Integer.class);
        if (count == 0) {
            throw new IllegalArgumentException("表不存在：" + tableName);
        }
    }

    private boolean hasColumn(String tableName, String columnName) {
        int count = jdbcTemplate.queryForObject(
                "select count(1) from USER_TAB_COLUMNS where TABLE_NAME = ? and COLUMN_NAME = ?",
                new Object[]{upper(tableName), upper(columnName)}, Integer.class);
        return count > 0;
    }

    private void requireType(String type) {
        if (!TYPE_MAIN.equals(type) && !TYPE_CHILD.equals(type)) {
            throw new IllegalArgumentException("类型只能是主表或子表");
        }
    }

    private void requireIdentifier(String text, String message) {
        if (StringUtils.isBlank(text) || !text.matches("[A-Z][A-Z0-9_]*")) {
            throw new IllegalArgumentException(message);
        }
    }

    private void requireNotBlank(String text, String message) {
        if (StringUtils.isBlank(text)) {
            throw new IllegalArgumentException(message);
        }
    }

    private Map<String, Object> querySingle(String sql, Object... args) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, args);
        return rows.isEmpty() ? null : new LinkedHashMap<String, Object>(rows.get(0));
    }

    private Map<String, Object> audit(HttpServletRequest request) {
        Map<String, Object> audit = new HashMap<String, Object>();
        SysUser user = SessionHelper.getLoginSysUser(request);
        String userId = user == null ? SessionHelper.getLoginSysUserId(request) : user.getId();
        String userName = user == null ? "" : StringUtils.defaultIfBlank(user.getName(), user.getLoginName());
        audit.put("userId", StringUtils.defaultIfBlank(userId, "1"));
        audit.put("userName", StringUtils.defaultIfBlank(userName, StringUtils.defaultIfBlank(userId, "1")));
        audit.put("orgIdentity", StringUtils.defaultIfBlank(SessionHelper.getCurrentOrgIdentity(request), "1"));
        audit.put("ip", StringUtils.defaultIfBlank(request.getRemoteAddr(), "127.0.0.1"));
        return audit;
    }

    private List<String> parseIds(String text) {
        List<String> ids = new ArrayList<String>();
        String[] parts = trim(text).split(",");
        for (int i = 0; i < parts.length; i++) {
            String id = trim(parts[i]);
            if (StringUtils.isNotBlank(id)) {
                ids.add(id);
            }
        }
        return ids;
    }

    private String value(Map<String, Object> map, String key) {
        Object value = map == null ? null : map.get(key);
        return value == null ? "" : String.valueOf(value);
    }

    private String trim(String text) {
        return text == null ? "" : text.trim();
    }

    private String upper(String text) {
        return trim(text).toUpperCase();
    }

    private int parseInt(String text, int defaultValue) {
        try {
            return Integer.parseInt(trim(text));
        } catch (Exception e) {
            return defaultValue;
        }
    }

    private String safeSheetName(String name) {
        String text = StringUtils.defaultIfBlank(name, "Export").replaceAll("[\\\\/?*\\[\\]:]", "_");
        return text.length() > 31 ? text.substring(0, 31) : text;
    }

    private void ensureSchema() {
        if (schemaChecked) {
            return;
        }
        synchronized (this) {
            if (schemaChecked) {
                return;
            }
            createTablesIfMissing();
            schemaChecked = true;
        }
    }

    private void createTablesIfMissing() {
        if (!tableExists("PB_EXCEL_EXPORT_CONFIG")) {
            jdbcTemplate.execute("create table PB_EXCEL_EXPORT_CONFIG (" +
                    "ID VARCHAR2(50) not null, CREATED_BY VARCHAR2(50), CREATION_DATE DATE, LAST_UPDATED_BY VARCHAR2(50), LAST_UPDATE_DATE DATE, " +
                    "LAST_UPDATE_IP VARCHAR2(50), VERSION NUMBER(16), ORG_IDENTITY VARCHAR2(32), CONFIG_CODE VARCHAR2(100) not null, " +
                    "CONFIG_NAME VARCHAR2(200) not null, CONFIG_TYPE VARCHAR2(20) not null, TABLE_NAME VARCHAR2(100) not null, " +
                    "TABLE_COMMENT VARCHAR2(500), STATUS VARCHAR2(10), REMARK VARCHAR2(1000), primary key (ID))");
            jdbcTemplate.execute("create unique index UK_PB_EXCEL_EXPORT_CONFIG on PB_EXCEL_EXPORT_CONFIG(CONFIG_CODE)");
        }
        if (!tableExists("PB_EXCEL_EXPORT_COLUMN")) {
            jdbcTemplate.execute("create table PB_EXCEL_EXPORT_COLUMN (" +
                    "ID VARCHAR2(50) not null, CREATED_BY VARCHAR2(50), CREATION_DATE DATE, LAST_UPDATED_BY VARCHAR2(50), LAST_UPDATE_DATE DATE, " +
                    "LAST_UPDATE_IP VARCHAR2(50), VERSION NUMBER(16), ORG_IDENTITY VARCHAR2(32), CONFIG_ID VARCHAR2(50) not null, TABLE_NAME VARCHAR2(100), " +
                    "COLUMN_NAME VARCHAR2(100) not null, COLUMN_LABEL VARCHAR2(200), COLUMN_TYPE VARCHAR2(100), COLUMN_LENGTH NUMBER(16), " +
                    "EXPORT_FLAG VARCHAR2(10), SORT_NO NUMBER(16), COLUMN_WIDTH NUMBER(16), primary key (ID))");
            jdbcTemplate.execute("create index IDX_PB_EXCEL_COLUMN_CFG on PB_EXCEL_EXPORT_COLUMN(CONFIG_ID, SORT_NO)");
        }
        if (!tableExists("PB_EXCEL_EXPORT_RELATION")) {
            jdbcTemplate.execute("create table PB_EXCEL_EXPORT_RELATION (" +
                    "ID VARCHAR2(50) not null, CREATED_BY VARCHAR2(50), CREATION_DATE DATE, LAST_UPDATED_BY VARCHAR2(50), LAST_UPDATE_DATE DATE, " +
                    "LAST_UPDATE_IP VARCHAR2(50), VERSION NUMBER(16), ORG_IDENTITY VARCHAR2(32), MAIN_CONFIG_ID VARCHAR2(50) not null, " +
                    "CHILD_CONFIG_ID VARCHAR2(50) not null, MAIN_COLUMN_NAME VARCHAR2(100) not null, CHILD_COLUMN_NAME VARCHAR2(100) not null, " +
                    "SORT_NO NUMBER(16), primary key (ID))");
            jdbcTemplate.execute("create index IDX_PB_EXCEL_REL_MAIN on PB_EXCEL_EXPORT_RELATION(MAIN_CONFIG_ID, SORT_NO)");
        }
    }

    private boolean tableExists(String tableName) {
        int count = jdbcTemplate.queryForObject("select count(1) from USER_TABLES where TABLE_NAME = ?", new Object[]{tableName}, Integer.class);
        return count > 0;
    }
}
