package avicit.pb.membernotice;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.InputStream;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.*;

/** POI 3.9: inspect the cell type before calling its numeric date APIs. */
public final class NoticeExcel {
    public static final String[] HEADERS = {"工号", "接收党组织", "党员类别", "党委会讨论日期", "党委会届次／会议名称",
            "预备期开始日期", "预备期结束日期", "转正日期"};
    public static final String[] PROBATION_HEADERS = {"工号", "接收党组织", "党委会讨论日期", "党委会届次／会议名称", "预备期开始日期", "预备期结束日期"};
    public static final String[] FORMAL_HEADERS = {"工号", "接收党组织", "党委会讨论日期", "党委会届次／会议名称", "转正日期"};
    public static final String[] FIELDS = {"employeeCode", "receiverOrg", "partyType", "meetingDate", "meetingName", "probationStart", "probationEnd", "regularDate"};
    private NoticeExcel() { }
    public static Workbook template() { return template(""); }
    public static Workbook template(String type) {
        String[] headers = withName("probation".equals(type) ? PROBATION_HEADERS : "formal".equals(type) ? FORMAL_HEADERS : HEADERS);
        Workbook book = new XSSFWorkbook();
        Sheet sheet = book.createSheet("probation".equals(type) ? "预备党员" : "formal".equals(type) ? "正式党员" : "党员发送阅知");
        Row head = sheet.createRow(0);
        CellStyle text = book.createCellStyle();
        text.setDataFormat(book.createDataFormat().getFormat("@"));
        for (int i = 0; i < headers.length; i++) {
            head.createCell(i).setCellValue(headers[i]);
            sheet.setColumnWidth(i, ("接收党组织".equals(headers[i]) || "党委会届次／会议名称".equals(headers[i]) ? 36 : 22) * 256);
            sheet.setDefaultColumnStyle(i, text);
        }
        sheet.createFreezePane(0, 1);
        Sheet help = book.createSheet("填写说明");
        String[] notes = {"工号按文本填写，保留前导零；姓名供录入核对，系统以工号匹配的党员库姓名为准，标题自动生成。",
                "接收党组织填写系统中的完整名称；找不到或匹配到多个组织时，该行会提示原因。分类模板无需另填党员类别。",
                "预备党员模板填写预备期起止日期；正式党员模板填写转正日期，不包含预备期。",
                "会议信息可不填；日期支持yyyy-MM-dd文本或Excel日期单元格。",
                "成功行导入列表，错误行显示行号及原因；导入不会修改党员库。"};
        for (int i = 0; i < notes.length; i++) help.createRow(i).createCell(0).setCellValue(notes[i]);
        help.setColumnWidth(0, 110 * 256);
        return book;
    }
    private static String[] withName(String[] headers) {
        String[] named = new String[headers.length + 1];
        named[0] = headers[0]; named[1] = "姓名";
        System.arraycopy(headers, 1, named, 2, headers.length - 1);
        return named;
    }
    public static String[] headers(Row row) {
        // Earlier templates had no name column and may end with a file number.
        boolean named = row != null && "姓名".equals(value(row.getCell(1)));
        for (String[] original : new String[][]{HEADERS, PROBATION_HEADERS, FORMAL_HEADERS}) {
            String[] headers = named ? withName(original) : original;
            boolean match = row != null && row.getLastCellNum() >= headers.length;
            for (int i = 0; match && i < headers.length; i++) match = headers[i].equals(value(row.getCell(i)));
            if (match) return headers;
        }
        throw new IllegalArgumentException("表头与模板不一致，请使用预备党员、正式党员或原通用模板");
    }
    public static Map<String, String> fields(Row row, String[] headers) {
        Map<String, String> data = new HashMap<String, String>();
        List<String> columns = Arrays.asList(headers);
        if (!columns.contains("党员类别")) data.put("partyType", columns.contains("转正日期") ? "正式党员" : "预备党员");
        for (int i = 0; i < headers.length; i++) {
            int canonical = Arrays.asList(HEADERS).indexOf(headers[i]);
            if (canonical < 0) continue; // Name is for reference; the member record supplies the stored name.
            String value;
            try {
                java.sql.Date date = canonical == 3 || canonical == 5 || canonical == 6 || canonical == 7 ? date(row.getCell(i)) : null;
                value = date == null ? value(row.getCell(i)) : date.toString();
            } catch (IllegalArgumentException ex) { throw new IllegalArgumentException(headers[i] + "：" + ex.getMessage()); }
            data.put(FIELDS[canonical], value);
        }
        return data;
    }
    public static Workbook open(InputStream stream) throws Exception { return WorkbookFactory.create(stream); }
    public static String value(Cell cell) {
        if (cell == null) return "";
        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
            int type = cell.getCachedFormulaResultType();
            if (type == Cell.CELL_TYPE_STRING) return cell.getStringCellValue().trim();
            if (type == Cell.CELL_TYPE_NUMERIC) return new DataFormatter().formatRawCellContents(cell.getNumericCellValue(),
                    cell.getCellStyle().getDataFormat(), cell.getCellStyle().getDataFormatString()).trim();
            throw new IllegalArgumentException("公式单元格没有有效的文本或数字结果");
        }
        return new DataFormatter().formatCellValue(cell).trim();
    }
    public static java.sql.Date date(Cell cell) {
        if (cell == null || cell.getCellType() == Cell.CELL_TYPE_BLANK) return null;
        int type = cell.getCellType() == Cell.CELL_TYPE_FORMULA ? cell.getCachedFormulaResultType() : cell.getCellType();
        if (type == Cell.CELL_TYPE_NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            Calendar c = Calendar.getInstance(); c.setTime(cell.getDateCellValue());
            return java.sql.Date.valueOf(java.time.LocalDate.of(c.get(Calendar.YEAR), c.get(Calendar.MONTH) + 1, c.get(Calendar.DAY_OF_MONTH)));
        }
        return parseDate(value(cell));
    }
    public static java.sql.Date parseDate(String raw) {
        raw = NoticeRules.text(raw);
        if (raw.isEmpty()) return null;
        for (String pattern : new String[]{"yyyy-MM-dd", "yyyy/M/d", "yyyy年M月d日"}) {
            SimpleDateFormat format = new SimpleDateFormat(pattern); format.setLenient(false);
            ParsePosition position = new ParsePosition(0);
            Date parsed = format.parse(raw, position);
            if (parsed != null && position.getIndex() == raw.length()) return new java.sql.Date(parsed.getTime());
        }
        throw new IllegalArgumentException("日期格式不正确，请填写有效日期（如2026-07-06）");
    }
}
