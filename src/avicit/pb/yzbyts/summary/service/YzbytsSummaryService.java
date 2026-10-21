package avicit.pb.yzbyts.summary.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.ComUtil;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.sql.Blob;
import java.sql.Clob;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

@Service
public class YzbytsSummaryService {
    private static final String SUMMARY_TABLE = "DYN_YZBYTS_SUMMARY";
    private static final String FILE_TABLE = "DYN_YZBYTS_SUMMARY_FILE";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Map<String, Object> config() {
        return config(latestYear());
    }

    public int latestYear() {
        int latest = 0;
        for (String value : jdbcTemplate.queryForList("SELECT DISTINCT TRIM(NF) FROM DYN_D_YZBYTS WHERE NF IS NOT NULL", String.class)) {
            if (value != null && value.matches("[1-9][0-9]{3}")) latest = Math.max(latest, Integer.parseInt(value));
        }
        if (latest == 0) throw new IllegalArgumentException("申报表暂无有效年度，请先填写申报年度");
        return latest;
    }

    public Map<String, Object> config(int year) {
        checkYear(year);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        LocalDateTime deadline = YzbytsSummaryRules.deadline(year);
        result.put("year", year);
        result.put("deadline", deadline.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        result.put("deadlineDate", deadline.format(DateTimeFormatter.ofPattern("yyyy年M月d日")));
        result.put("deadlineWeekday", "一二三四五六日".substring(deadline.getDayOfWeek().getValue() - 1, deadline.getDayOfWeek().getValue()));
        result.put("serverTime", now().atZone(YzbytsSummaryRules.TIME_ZONE).toInstant().toEpochMilli());
        result.put("deadlineTime", deadline.atZone(YzbytsSummaryRules.TIME_ZONE).toInstant().toEpochMilli());
        result.put("themeMax", 1000);
        result.put("goalMax", YzbytsSummaryRules.GOAL_MAX);
        result.put("backgroundMax", YzbytsSummaryRules.BACKGROUND_MAX);
        result.put("thoughtMax", YzbytsSummaryRules.THOUGHT_MAX);
        result.put("practiceMax", YzbytsSummaryRules.PRACTICE_MAX);
        result.put("achievementMax", YzbytsSummaryRules.ACHIEVEMENT_MAX);
        result.put("photoMax", YzbytsSummaryRules.PHOTO_MAX);
        result.put("photoSizeMax", YzbytsSummaryRules.PHOTO_SIZE_MAX);
        return result;
    }

    public Map<String, Object> list(int year, String partyName, String status, int page, int rows) {
        checkYear(year);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        String base = sourceSql();
        List<Object> args = new ArrayList<Object>();
        args.add(String.valueOf(year));
        args.add(String.valueOf(year));
        StringBuilder condition = new StringBuilder();
        if (StringUtils.isNotBlank(partyName)) {
            condition.append(" AND PARTY_NAME LIKE '%' || ? || '%'");
            args.add(partyName.trim());
        }
        if (StringUtils.isNotBlank(status)) {
            if (!isStatus(status)) throw new IllegalArgumentException("提交状态无效");
            if ("NOT_STARTED".equals(status)) {
                condition.append(" AND (STATUS IS NULL OR STATUS='')");
            } else {
                condition.append(" AND STATUS=?");
                args.add(status);
            }
        }
        long records = count("SELECT * FROM (" + base + ") B WHERE 1=1" + condition, args);
        int total = (int) ((records + rows - 1) / rows);
        int actualPage = Math.min(page, Math.max(1, total));
        long offset = (long) (actualPage - 1) * rows;
        List<Object> pageArgs = new ArrayList<Object>(args);
        pageArgs.add(offset);
        pageArgs.add(offset + rows);
        String sql = "SELECT * FROM (SELECT X.*, ROW_NUMBER() OVER (ORDER BY X.PARTY_NAME, X.PARTY_ID) AS RN2 FROM ("
                + base + ") X WHERE 1=1" + condition + ") Y WHERE Y.RN2 > ? AND Y.RN2 <= ? ORDER BY Y.RN2";
        List<Map<String, Object>> data = jdbcTemplate.queryForList(sql, pageArgs.toArray());
        for (Map<String, Object> row : data) enrichRow(row);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("page", actualPage);
        result.put("total", total);
        result.put("records", records);
        result.put("data", data);
        return result;
    }

    public Map<String, Object> get(int year, String partyId) {
        checkYear(year);
        if (StringUtils.isBlank(partyId)) throw new IllegalArgumentException("请选择党组织");
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sourceSql()
                + " AND X.PARTY_ID=?", String.valueOf(year), String.valueOf(year), partyId.trim());
        if (rows.isEmpty()) throw new IllegalArgumentException("党组织未申报" + year + "年度一支部一特色");
        Map<String, Object> row = rows.get(0);
        enrichRow(row);
        List<Map<String, Object>> files = listFiles(string(row.get("SUMMARY_ID")));
        row.put("files", files);
        return row;
    }

    @Transactional(rollbackFor = Exception.class)
    public Map<String, Object> save(Map<String, String> params, HttpServletRequest request) {
        int year = integer(params.get("year"), "年度");
        checkYear(year);
        checkWritable(year);
        String partyId = required(params.get("partyId"), "党组织");
        // Serialize first-save requests for the same organization without changing the schema.
        jdbcTemplate.queryForList("SELECT ID FROM PARTY_ORGANIZATION WHERE ID=? FOR UPDATE", partyId);
        checkWritable(year);
        Map<String, Object> source = source(partyId, year);
        String theme = required(params.get("activityTheme"), "活动主题");
        String background = required(params.get("activityBackground"), "活动背景");
        String goal = required(params.get("activityGoal"), "活动目标");
        String thought = required(params.get("workThought"), "工作思路");
        String practice = required(params.get("practice"), "具体做法");
        String achievement = required(params.get("achievement"), "突出成效");
        YzbytsSummaryRules.checkLength("活动主题", theme, 1000);
        YzbytsSummaryRules.checkText(goal, background, thought, practice, achievement);
        String id = existingId(year, partyId);
        String user = loginUser(request);
        String org = orgIdentity(request);
        if (id == null) {
            id = ComUtil.getId();
            jdbcTemplate.update("INSERT INTO " + SUMMARY_TABLE + " (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,SUMMARY_YEAR,PARTY_ID,DECLARATION_ID,PARTY_NAME,SOURCE_THEME,SOURCE_BACKGROUND,SOURCE_EXTRACTED_AT,ACTIVITY_THEME,ACTIVITY_GOAL,ACTIVITY_BACKGROUND,WORK_THOUGHT,PRACTICE,ACHIEVEMENT,STATUS) VALUES (?,?,SYSDATE,?,SYSDATE,?,0,?,?,?,?,?,?,?,SYSDATE,?,?,?,?,?,?,'DRAFT')",
                    id, user, user, request.getRemoteAddr(), org, String.valueOf(year), partyId,
                    string(source.get("DECLARATION_ID")), string(source.get("PARTY_NAME")), string(source.get("SOURCE_THEME")),
                    source.get("SOURCE_BACKGROUND"), theme, goal, background, thought, practice, achievement);
        } else {
            jdbcTemplate.update("UPDATE " + SUMMARY_TABLE + " SET LAST_UPDATED_BY=?,LAST_UPDATE_DATE=SYSDATE,LAST_UPDATE_IP=?,ACTIVITY_THEME=?,ACTIVITY_GOAL=?,ACTIVITY_BACKGROUND=?,WORK_THOUGHT=?,PRACTICE=?,ACHIEVEMENT=? WHERE ID=?",
                    user, request.getRemoteAddr(), theme, goal, background, thought, practice, achievement, id);
        }
        return get(year, partyId);
    }

    @Transactional(rollbackFor = Exception.class)
    public Map<String, Object> submit(Map<String, String> params, HttpServletRequest request) {
        Map<String, Object> current = save(params, request);
        int year = integer(params.get("year"), "年度");
        String partyId = required(params.get("partyId"), "党组织");
        String id = string(current.get("SUMMARY_ID"));
        jdbcTemplate.update("UPDATE " + SUMMARY_TABLE + " SET STATUS='SUBMITTED',SUBMITTED_AT=SYSDATE,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=SYSDATE,LAST_UPDATE_IP=? WHERE ID=?",
                loginUser(request), request.getRemoteAddr(), id);
        return get(year, partyId);
    }

    @Transactional(rollbackFor = Exception.class)
    public Map<String, Object> upload(String summaryId, MultipartFile file, HttpServletRequest request) throws IOException {
        if (StringUtils.isBlank(summaryId)) throw new IllegalArgumentException("缺少总结记录");
        lockSummary(summaryId);
        if (file == null || file.isEmpty()) throw new IllegalArgumentException("请选择活动照片");
        YzbytsSummaryRules.checkPhoto(file.getOriginalFilename(), file.getContentType(), file.getSize());
        byte[] content = file.getBytes();
        int pictureType = pictureType(content);
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(1) FROM " + FILE_TABLE + " WHERE SUMMARY_ID=?", Integer.class, summaryId);
        if (count != null && count >= YzbytsSummaryRules.PHOTO_MAX) {
            throw new IllegalArgumentException("活动照片最多上传" + YzbytsSummaryRules.PHOTO_MAX + "张");
        }
        String id = ComUtil.getId();
        String user = loginUser(request);
        Integer maxSort = jdbcTemplate.queryForObject("SELECT NVL(MAX(SORT_NO),0) FROM " + FILE_TABLE + " WHERE SUMMARY_ID=?", Integer.class, summaryId);
        jdbcTemplate.update("INSERT INTO " + FILE_TABLE + " (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,SUMMARY_ID,FILE_NAME,CONTENT_TYPE,FILE_SIZE,SORT_NO,FILE_CONTENT) VALUES (?,?,SYSDATE,?,SYSDATE,?,0,?,?,?,?,?,?,?)",
                id, user, user, request.getRemoteAddr(), orgIdentity(request), summaryId,
                file.getOriginalFilename(), pictureType == Workbook.PICTURE_TYPE_PNG ? "image/png" : "image/jpeg", file.getSize(), (maxSort == null ? 0 : maxSort) + 1, content);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("id", id);
        result.put("fileName", file.getOriginalFilename());
        result.put("files", listFiles(summaryId));
        return result;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteFile(String fileId) {
        if (StringUtils.isBlank(fileId)) throw new IllegalArgumentException("缺少照片");
        List<String> parents = jdbcTemplate.queryForList("SELECT SUMMARY_ID FROM " + FILE_TABLE + " WHERE ID=?", String.class, fileId);
        if (parents.isEmpty()) throw new IllegalArgumentException("照片不存在");
        lockSummary(parents.get(0));
        if (jdbcTemplate.update("DELETE FROM " + FILE_TABLE + " WHERE ID=?", fileId) == 0) {
            throw new IllegalArgumentException("照片不存在");
        }
    }

    public void download(String fileId, boolean inline, HttpServletResponse response) throws IOException, SQLException {
        if (StringUtils.isBlank(fileId)) throw new IllegalArgumentException("缺少照片");
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT FILE_NAME,CONTENT_TYPE,FILE_CONTENT FROM " + FILE_TABLE + " WHERE ID=?", fileId);
        if (rows.isEmpty()) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        Map<String, Object> row = rows.get(0);
        byte[] content = bytes(row.get("FILE_CONTENT"));
        String name = string(row.get("FILE_NAME"));
        response.reset();
        response.setContentType(StringUtils.defaultIfBlank(string(row.get("CONTENT_TYPE")), "application/octet-stream"));
        response.setHeader("Content-Disposition", (inline ? "inline" : "attachment") + ";filename*=UTF-8''" + URLEncoder.encode(name, "UTF-8").replace("+", "%20"));
        response.setContentLength(content.length);
        OutputStream out = response.getOutputStream();
        out.write(content);
        out.flush();
    }

    public byte[] export(int year, String partyName, String status) throws Exception {
        checkYear(year);
        String sql = "SELECT * FROM (" + sourceSql() + ") X WHERE 1=1";
        List<Object> args = new ArrayList<Object>();
        args.add(String.valueOf(year));
        args.add(String.valueOf(year));
        if (StringUtils.isNotBlank(partyName)) {
            sql += " AND PARTY_NAME LIKE '%' || ? || '%'";
            args.add(partyName.trim());
        }
        if (StringUtils.isNotBlank(status)) {
            if (!isStatus(status)) throw new IllegalArgumentException("提交状态无效");
            if ("NOT_STARTED".equals(status)) sql += " AND (STATUS IS NULL OR STATUS='')";
            else { sql += " AND STATUS=?"; args.add(status); }
        }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql + " ORDER BY PARTY_NAME,PARTY_ID", args.toArray());
        XSSFWorkbook workbook = new XSSFWorkbook();
        try {
            Sheet sheet = workbook.createSheet("一支部一特色总结");
            String[] headers = {"年度", "党组织名称", "活动主题", "活动目标", "活动背景", "工作思路", "具体做法", "突出成效", "提交状态", "提交时间", "活动照片1", "活动照片2", "活动照片3", "活动照片4"};
            CellStyle headerStyle = workbook.createCellStyle();
            org.apache.poi.ss.usermodel.Font font = workbook.createFont();
            font.setBoldweight(org.apache.poi.ss.usermodel.Font.BOLDWEIGHT_BOLD);
            headerStyle.setFont(font);
            CellStyle bodyStyle = workbook.createCellStyle();
            bodyStyle.setWrapText(true);
            bodyStyle.setVerticalAlignment(CellStyle.VERTICAL_TOP);
            Drawing drawing = sheet.createDrawingPatriarch();
            for (int i = 0; i < headers.length; i++) sheet.setColumnWidth(i, (i >= 10 ? 32 : i >= 2 && i <= 7 ? 40 : 22) * 256);
            sheet.createFreezePane(2, 1);
            Row header = sheet.createRow(0);
            header.setHeightInPoints(28);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(headerStyle);
            }
            for (int i = 0; i < rows.size(); i++) {
                Map<String, Object> row = rows.get(i);
                enrichRow(row);
                Row excelRow = sheet.createRow(i + 1);
                String[] values = {String.valueOf(year), string(row.get("PARTY_NAME")), string(row.get("ACTIVITY_THEME")),
                        string(row.get("ACTIVITY_GOAL")), string(row.get("ACTIVITY_BACKGROUND")), string(row.get("WORK_THOUGHT")),
                        string(row.get("PRACTICE")), string(row.get("ACHIEVEMENT")), statusLabel(string(row.get("STATUS"))),
                        string(row.get("SUBMITTED_AT"))};
                int lines = 1;
                for (int c = 0; c < values.length; c++) {
                    Cell cell = excelRow.createCell(c);
                    cell.setCellValue(values[c]);
                    cell.setCellStyle(bodyStyle);
                    int textLines = 0;
                    for (String line : values[c].split("\n", -1)) textLines += Math.max(1, (line.length() + 17) / 18);
                    lines = Math.max(lines, textLines);
                }
                List<Map<String, Object>> photos = jdbcTemplate.queryForList("SELECT FILE_CONTENT,FILE_NAME FROM " + FILE_TABLE + " WHERE SUMMARY_ID=? ORDER BY SORT_NO,CREATION_DATE,ID", string(row.get("SUMMARY_ID")));
                excelRow.setHeightInPoints(Math.min(409, Math.max(photos.isEmpty() ? 40 : 150, lines * 13)));
                for (int p = 0; p < Math.min(YzbytsSummaryRules.PHOTO_MAX, photos.size()); p++) {
                    byte[] content = bytes(photos.get(p).get("FILE_CONTENT"));
                    BufferedImage photo = ImageIO.read(new ByteArrayInputStream(content));
                    if (photo == null) throw new IllegalArgumentException("照片无法读取：" + string(photos.get(p).get("FILE_NAME")));
                    double scale = Math.min(208.0 / photo.getWidth(), 180.0 / photo.getHeight());
                    int width = (int) Math.round(photo.getWidth() * scale);
                    int height = (int) Math.round(photo.getHeight() * scale);
                    ClientAnchor anchor = workbook.getCreationHelper().createClientAnchor();
                    anchor.setCol1(10 + p); anchor.setCol2(10 + p);
                    anchor.setRow1(i + 1); anchor.setRow2(i + 1);
                    anchor.setDx1(8 * 9525); anchor.setDy1(8 * 9525);
                    anchor.setDx2((8 + width) * 9525); anchor.setDy2((8 + height) * 9525);
                    drawing.createPicture(anchor, workbook.addPicture(content, pictureType(content)));
                }
            }
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            workbook.write(out);
            return out.toByteArray();
        } finally {
            workbook.getPackage().close();
        }
    }

    protected LocalDateTime now() { return LocalDateTime.now(YzbytsSummaryRules.TIME_ZONE); }

    private void checkWritable(int year) { YzbytsSummaryRules.checkBeforeDeadline(year, now()); }

    private void lockSummary(String id) {
        List<String> years = jdbcTemplate.queryForList("SELECT SUMMARY_YEAR FROM " + SUMMARY_TABLE + " WHERE ID=? FOR UPDATE", String.class, id);
        if (years.isEmpty()) {
            throw new IllegalArgumentException("总结记录不存在，请刷新后重试");
        }
        checkWritable(integer(years.get(0), "总结年度"));
    }

    private static int pictureType(byte[] content) throws IOException {
        boolean png = content.length > 8 && content[0] == (byte) 0x89 && content[1] == 0x50 && content[2] == 0x4e && content[3] == 0x47;
        boolean jpeg = content.length > 3 && content[0] == (byte) 0xff && content[1] == (byte) 0xd8 && content[2] == (byte) 0xff;
        if ((!png && !jpeg) || ImageIO.read(new ByteArrayInputStream(content)) == null) {
            throw new IllegalArgumentException("文件内容不是有效的JPG或PNG照片");
        }
        return png ? Workbook.PICTURE_TYPE_PNG : Workbook.PICTURE_TYPE_JPEG;
    }

    private String sourceSql() {
        return "SELECT X.PARTY_ID,X.PARTY_NAME,X.DECLARATION_ID,X.SOURCE_THEME,X.SOURCE_BACKGROUND," +
                "S.ID SUMMARY_ID,S.ACTIVITY_THEME,S.ACTIVITY_GOAL,S.ACTIVITY_BACKGROUND,S.WORK_THOUGHT,S.PRACTICE,S.ACHIEVEMENT,S.STATUS,S.SUBMITTED_AT " +
                "FROM (SELECT M.PARTY_ID,NVL(NULLIF(TRIM(M.D_DZZMC),''),P.PARTY_NAME) PARTY_NAME,M.ID DECLARATION_ID,M.D_HDZT SOURCE_THEME,M.D_HDRWJJ SOURCE_BACKGROUND," +
                "ROW_NUMBER() OVER (PARTITION BY M.PARTY_ID,TRIM(M.NF) ORDER BY NVL(M.LAST_UPDATE_DATE,TO_DATE('1900-01-01','YYYY-MM-DD')) DESC,M.ID DESC) RN " +
                "FROM DYN_D_YZBYTS M JOIN PARTY_ORGANIZATION P ON P.ID=M.PARTY_ID WHERE TRIM(M.NF)=? AND M.PARTY_ID IS NOT NULL) X " +
                "LEFT JOIN " + SUMMARY_TABLE + " S ON S.PARTY_ID=X.PARTY_ID AND S.SUMMARY_YEAR=? WHERE X.RN=1";
    }

    private long count(String base, List<Object> args) {
        String sql = "SELECT COUNT(1) FROM (" + base + ") X WHERE 1=1";
        List<Object> queryArgs = new ArrayList<Object>(args);
        return jdbcTemplate.queryForObject(sql, queryArgs.toArray(), Long.class);
    }

    private Map<String, Object> source(String partyId, int year) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sourceSql() + " AND X.PARTY_ID=?", String.valueOf(year), String.valueOf(year), partyId);
        if (rows.isEmpty()) throw new IllegalArgumentException("党组织未申报" + year + "年度一支部一特色");
        return rows.get(0);
    }

    private String existingId(int year, String partyId) {
        List<String> ids = jdbcTemplate.query("SELECT ID FROM " + SUMMARY_TABLE + " WHERE SUMMARY_YEAR=? AND PARTY_ID=?", new Object[]{String.valueOf(year), partyId},
                (rs, rowNum) -> rs.getString(1));
        return ids.isEmpty() ? null : ids.get(0);
    }

    private List<Map<String, Object>> listFiles(String summaryId) {
        if (StringUtils.isBlank(summaryId)) return new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT ID,FILE_NAME,CONTENT_TYPE,FILE_SIZE,SORT_NO FROM " + FILE_TABLE + " WHERE SUMMARY_ID=? ORDER BY SORT_NO,CREATION_DATE,ID", summaryId);
        for (Map<String, Object> row : rows) {
            row.put("name", string(row.get("FILE_NAME")));
            row.put("url", "platform/avicit/pb/yzbyts/summary/download?fileId=" + string(row.get("ID")));
        }
        return rows;
    }

    private void enrichRow(Map<String, Object> row) {
        String status = string(row.get("STATUS"));
        if (status.length() == 0) status = "NOT_STARTED";
        row.put("STATUS", status);
        row.put("STATUS_LABEL", statusLabel(status));
        row.put("SOURCE_THEME", string(row.get("SOURCE_THEME")));
        row.put("SOURCE_BACKGROUND", string(row.get("SOURCE_BACKGROUND")));
        boolean saved = StringUtils.isNotBlank(string(row.get("SUMMARY_ID")));
        row.put("ACTIVITY_THEME", string(row.get(saved ? "ACTIVITY_THEME" : "SOURCE_THEME")));
        row.put("ACTIVITY_BACKGROUND", string(row.get(saved ? "ACTIVITY_BACKGROUND" : "SOURCE_BACKGROUND")));
        row.put("ACTIVITY_GOAL", string(row.get("ACTIVITY_GOAL")));
        row.put("WORK_THOUGHT", string(row.get("WORK_THOUGHT")));
        row.put("PRACTICE", string(row.get("PRACTICE")));
        row.put("ACHIEVEMENT", string(row.get("ACHIEVEMENT")));
    }

    private static String statusLabel(String status) {
        if ("SUBMITTED".equals(status)) return "已提交";
        if ("DRAFT".equals(status)) return "草稿";
        return "未开始";
    }

    private static boolean isStatus(String status) {
        return "NOT_STARTED".equals(status) || "DRAFT".equals(status) || "SUBMITTED".equals(status);
    }

    private static void checkYear(int year) {
        if (year < 1000 || year > 9999) throw new IllegalArgumentException("年度须为有效的四位年份");
    }

    private static int integer(String value, String label) {
        try {
            return Integer.parseInt(value);
        } catch (Exception ex) {
            throw new IllegalArgumentException(label + "须提供有效整数", ex);
        }
    }

    private static String required(String value, String label) {
        String result = YzbytsSummaryRules.text(value);
        if (StringUtils.isBlank(result)) throw new IllegalArgumentException(label + "不能为空");
        return result;
    }

    private static String string(Object value) {
        if (value == null) return "";
        if (value instanceof Clob) {
            try {
                Clob clob = (Clob) value;
                return clob.getSubString(1, (int) clob.length());
            } catch (SQLException ex) {
                throw new IllegalStateException("总结文本读取失败", ex);
            }
        }
        return String.valueOf(value);
    }

    private static byte[] bytes(Object value) throws IOException, SQLException {
        if (value instanceof byte[]) return (byte[]) value;
        if (value instanceof Blob) {
            Blob blob = (Blob) value;
            InputStream in = blob.getBinaryStream();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buffer = new byte[8192];
            int read;
            while ((read = in.read(buffer)) >= 0) out.write(buffer, 0, read);
            in.close();
            return out.toByteArray();
        }
        return new byte[0];
    }

    private static String loginUser(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getLoginSysUserId(request), "YZBYTS_SUMMARY");
    }

    private static String orgIdentity(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getCurrentOrgIdentity(request), "1");
    }
}
