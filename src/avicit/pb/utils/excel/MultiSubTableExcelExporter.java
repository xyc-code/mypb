package avicit.pb.utils.excel;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class MultiSubTableExcelExporter {

    private static final int DEFAULT_ROW_HEIGHT = 420;
    private static final int MIN_COLUMN_WIDTH = 10;
    private static final int MAX_COLUMN_WIDTH = 60;

    private MultiSubTableExcelExporter() {
    }

    public static Workbook buildWorkbook(Report report) {
        if (report == null) {
            throw new IllegalArgumentException("report is null");
        }
        XSSFWorkbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet(defaultText(report.getSheetName(), "Report"));
        Styles styles = new Styles(workbook);
        int columnCount = resolveColumnCount(report);
        setupColumns(sheet, report, columnCount);

        int rowIndex = 0;
        if (notBlank(report.getTitle())) {
            rowIndex = writeReportTitle(sheet, rowIndex, columnCount, report.getTitle(), styles);
            rowIndex++;
        }

        List<MasterBlock> blocks = report.getBlocks();
        if (blocks == null || blocks.isEmpty()) {
            writeEmptyRow(sheet, rowIndex, columnCount, "No data", styles);
        } else {
            for (int i = 0; i < blocks.size(); i++) {
                rowIndex = writeBlock(sheet, rowIndex, columnCount, blocks.get(i), i + 1, styles);
                rowIndex++;
            }
        }

        sheet.createFreezePane(0, notBlank(report.getTitle()) ? 2 : 0);
        sheet.setDisplayGridlines(false);
        autoSizeColumns(sheet, columnCount);
        return workbook;
    }

    public static byte[] export(Report report) throws IOException {
        Workbook workbook = buildWorkbook(report);
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        workbook.write(output);
        return output.toByteArray();
    }

    private static int writeReportTitle(Sheet sheet, int rowIndex, int columnCount, String title, Styles styles) {
        Row row = sheet.createRow(rowIndex);
        row.setHeightInPoints(28);
        merge(sheet, rowIndex, 0, rowIndex, columnCount - 1);
        Cell cell = createCell(row, 0, title, styles.reportTitle);
        cell.setCellStyle(styles.reportTitle);
        fillMergedRow(row, 0, columnCount, styles.reportTitle);
        return rowIndex + 1;
    }

    private static int writeBlock(Sheet sheet, int rowIndex, int columnCount, MasterBlock block, int blockIndex, Styles styles) {
        rowIndex = writeMasterFields(sheet, rowIndex, block.getFields(), columnCount, styles);
        rowIndex++;

        List<Section> sections = block.getSections();
        if (sections == null || sections.isEmpty()) {
            rowIndex = writeEmptyRow(sheet, rowIndex, columnCount, "No child section", styles);
        } else {
            for (int i = 0; i < sections.size(); i++) {
                rowIndex = writeSection(sheet, rowIndex, columnCount, sections.get(i), styles);
                rowIndex++;
            }
        }
        return rowIndex;
    }

    private static int writeMasterFields(Sheet sheet, int rowIndex, List<Field> fields, int columnCount, Styles styles) {
        if (fields == null || fields.isEmpty()) {
            return writeEmptyRow(sheet, rowIndex, columnCount, "No master data", styles);
        }
        Row labelRow = sheet.createRow(rowIndex);
        labelRow.setHeight((short) DEFAULT_ROW_HEIGHT);
        Row valueRow = sheet.createRow(rowIndex + 1);
        valueRow.setHeight((short) DEFAULT_ROW_HEIGHT);
        for (int i = 0; i < fields.size(); i++) {
            if (i >= columnCount) {
                break;
            }
            Field field = fields.get(i);
            createCell(labelRow, i, field.getLabel(), styles.masterLabel);
            createCell(valueRow, i, field.getValue(), styles.masterValue, styles.masterDate);
        }
        fillMergedRow(labelRow, fields.size(), columnCount, styles.masterLabel);
        fillMergedRow(valueRow, fields.size(), columnCount, styles.masterValue);
        return rowIndex + 2;
    }

    private static int writeSection(Sheet sheet, int rowIndex, int columnCount, Section section, Styles styles) {
        Row sectionRow = sheet.createRow(rowIndex);
        sectionRow.setHeightInPoints(22);
        merge(sheet, rowIndex, 0, rowIndex, columnCount - 1);
        createCell(sectionRow, 0, defaultText(section.getTitle(), "Child section"), styles.sectionTitle);
        fillMergedRow(sectionRow, 0, columnCount, styles.sectionTitle);
        rowIndex++;

        List<Column> columns = section.getColumns();
        if (columns == null || columns.isEmpty()) {
            return writeEmptyRow(sheet, rowIndex, columnCount, "No column config", styles);
        }

        Row headerRow = sheet.createRow(rowIndex);
        headerRow.setHeight((short) DEFAULT_ROW_HEIGHT);
        for (int i = 0; i < columns.size(); i++) {
            createCell(headerRow, i, columns.get(i).getTitle(), styles.childHeader);
        }
        fillMergedRow(headerRow, columns.size(), columnCount, styles.childHeader);
        rowIndex++;

        List<Map<String, Object>> rows = section.getRows();
        if (rows == null || rows.isEmpty()) {
            return writeEmptyRow(sheet, rowIndex, columnCount, defaultText(section.getEmptyText(), "No child data"), styles);
        }

        for (int i = 0; i < rows.size(); i++) {
            Row row = sheet.createRow(rowIndex);
            row.setHeight((short) DEFAULT_ROW_HEIGHT);
            Map<String, Object> data = rows.get(i);
            for (int j = 0; j < columns.size(); j++) {
                Column column = columns.get(j);
                createCell(row, j, data == null ? null : data.get(column.getField()), styles.childValue, styles.childDate);
            }
            fillMergedRow(row, columns.size(), columnCount, styles.childValue);
            rowIndex++;
        }
        return rowIndex;
    }

    private static int writeEmptyRow(Sheet sheet, int rowIndex, int columnCount, String text, Styles styles) {
        Row row = sheet.createRow(rowIndex);
        row.setHeight((short) DEFAULT_ROW_HEIGHT);
        merge(sheet, rowIndex, 0, rowIndex, columnCount - 1);
        createCell(row, 0, text, styles.empty);
        fillMergedRow(row, 0, columnCount, styles.empty);
        return rowIndex + 1;
    }

    private static Cell createCell(Row row, int columnIndex, Object value, CellStyle style) {
        return createCell(row, columnIndex, value, style, null);
    }

    private static Cell createCell(Row row, int columnIndex, Object value, CellStyle style, CellStyle dateStyle) {
        Cell cell = row.getCell(columnIndex);
        if (cell == null) {
            cell = row.createCell(columnIndex);
        }
        CellStyle targetStyle = style;
        if (value == null) {
            cell.setCellValue("");
        } else if (value instanceof Date) {
            cell.setCellValue((Date) value);
            if (dateStyle != null) {
                targetStyle = dateStyle;
            }
        } else if (value instanceof Number) {
            cell.setCellValue(((Number) value).doubleValue());
        } else if (value instanceof Boolean) {
            cell.setCellValue(((Boolean) value).booleanValue());
        } else {
            cell.setCellValue(String.valueOf(value));
        }
        if (targetStyle != null) {
            cell.setCellStyle(targetStyle);
        }
        return cell;
    }

    private static void fillMergedRow(Row row, int fromColumn, int columnCount, CellStyle style) {
        for (int i = fromColumn; i < columnCount; i++) {
            Cell cell = row.getCell(i);
            if (cell == null) {
                cell = row.createCell(i);
                if (style != null) {
                    cell.setCellStyle(style);
                }
            }
        }
    }

    private static void merge(Sheet sheet, int firstRow, int firstCol, int lastRow, int lastCol) {
        if (lastRow > firstRow || lastCol > firstCol) {
            sheet.addMergedRegion(new CellRangeAddress(firstRow, lastRow, firstCol, lastCol));
        }
    }

    private static int resolveColumnCount(Report report) {
        int count = 0;
        List<MasterBlock> blocks = report.getBlocks();
        if (blocks == null) {
            return 1;
        }
        for (int i = 0; i < blocks.size(); i++) {
            List<Field> fields = blocks.get(i).getFields();
            if (fields != null && fields.size() > count) {
                count = fields.size();
            }
            List<Section> sections = blocks.get(i).getSections();
            if (sections == null) {
                continue;
            }
            for (int j = 0; j < sections.size(); j++) {
                List<Column> columns = sections.get(j).getColumns();
                if (columns != null && columns.size() > count) {
                    count = columns.size();
                }
            }
        }
        return Math.max(count, 1);
    }

    private static void setupColumns(Sheet sheet, Report report, int columnCount) {
        int[] widths = new int[columnCount];
        for (int i = 0; i < widths.length; i++) {
            widths[i] = i % 2 == 0 ? 16 : 22;
        }
        List<MasterBlock> blocks = report.getBlocks();
        if (blocks != null) {
            for (int i = 0; i < blocks.size(); i++) {
                List<Section> sections = blocks.get(i).getSections();
                if (sections == null) {
                    continue;
                }
                for (int j = 0; j < sections.size(); j++) {
                    List<Column> columns = sections.get(j).getColumns();
                    if (columns == null) {
                        continue;
                    }
                    for (int k = 0; k < columns.size() && k < widths.length; k++) {
                        widths[k] = Math.max(widths[k], columns.get(k).getWidth());
                    }
                }
            }
        }
        for (int i = 0; i < widths.length; i++) {
            sheet.setColumnWidth(i, Math.min(widths[i], MAX_COLUMN_WIDTH) * 256);
        }
    }

    private static void autoSizeColumns(Sheet sheet, int columnCount) {
        int[] widths = new int[columnCount];
        for (int i = 0; i < widths.length; i++) {
            widths[i] = MIN_COLUMN_WIDTH;
        }
        for (int i = 0; i <= sheet.getLastRowNum(); i++) {
            Row row = sheet.getRow(i);
            if (row == null) {
                continue;
            }
            for (int j = 0; j < columnCount; j++) {
                if (isMergedAcrossColumns(sheet, i, j)) {
                    continue;
                }
                Cell cell = row.getCell(j);
                if (cell == null) {
                    continue;
                }
                widths[j] = Math.max(widths[j], estimateWidth(cell));
            }
        }
        for (int i = 0; i < widths.length; i++) {
            sheet.setColumnWidth(i, Math.min(Math.max(widths[i], MIN_COLUMN_WIDTH), MAX_COLUMN_WIDTH) * 256);
        }
    }

    private static boolean isMergedAcrossColumns(Sheet sheet, int rowIndex, int columnIndex) {
        for (int i = 0; i < sheet.getNumMergedRegions(); i++) {
            CellRangeAddress range = sheet.getMergedRegion(i);
            if (range.isInRange(rowIndex, columnIndex) && range.getFirstColumn() != range.getLastColumn()) {
                return true;
            }
        }
        return false;
    }

    private static int estimateWidth(Cell cell) {
        String text = cellText(cell);
        int width = 0;
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            width += c > 127 ? 2 : 1;
        }
        return width + 4;
    }

    private static String cellText(Cell cell) {
        if (cell == null) {
            return "";
        }
        switch (cell.getCellType()) {
            case Cell.CELL_TYPE_NUMERIC:
                return String.valueOf(cell.getNumericCellValue());
            case Cell.CELL_TYPE_BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case Cell.CELL_TYPE_STRING:
                return cell.getStringCellValue();
            case Cell.CELL_TYPE_FORMULA:
                return cell.getCellFormula();
            default:
                return "";
        }
    }

    private static String defaultText(String text, String defaultText) {
        return notBlank(text) ? text : defaultText;
    }

    private static boolean notBlank(String text) {
        return text != null && text.trim().length() > 0;
    }

    private static CellStyle createStyle(Workbook workbook, short fillColor, boolean bold, short fontColor, short align) {
        Font font = workbook.createFont();
        font.setFontName("Microsoft YaHei");
        font.setFontHeightInPoints((short) 10);
        font.setBoldweight(bold ? Font.BOLDWEIGHT_BOLD : Font.BOLDWEIGHT_NORMAL);
        font.setColor(fontColor);

        CellStyle style = workbook.createCellStyle();
        style.setFont(font);
        style.setAlignment(align);
        style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        style.setWrapText(false);
        style.setBorderTop(CellStyle.BORDER_THIN);
        style.setBorderBottom(CellStyle.BORDER_THIN);
        style.setBorderLeft(CellStyle.BORDER_THIN);
        style.setBorderRight(CellStyle.BORDER_THIN);
        if (fillColor != IndexedColors.WHITE.getIndex()) {
            style.setFillPattern(CellStyle.SOLID_FOREGROUND);
            style.setFillForegroundColor(fillColor);
        }
        return style;
    }

    private static CellStyle createDateStyle(Workbook workbook, CellStyle baseStyle) {
        CellStyle style = workbook.createCellStyle();
        style.cloneStyleFrom(baseStyle);
        style.setDataFormat(workbook.createDataFormat().getFormat("yyyy-mm-dd"));
        return style;
    }

    private static class Styles {
        private final CellStyle reportTitle;
        private final CellStyle blockTitle;
        private final CellStyle masterLabel;
        private final CellStyle masterValue;
        private final CellStyle masterDate;
        private final CellStyle sectionTitle;
        private final CellStyle childHeader;
        private final CellStyle childValue;
        private final CellStyle childDate;
        private final CellStyle empty;

        private Styles(Workbook workbook) {
            reportTitle = createStyle(workbook, IndexedColors.WHITE.getIndex(), true, IndexedColors.DARK_BLUE.getIndex(), CellStyle.ALIGN_LEFT);
            blockTitle = createStyle(workbook, IndexedColors.WHITE.getIndex(), true, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_LEFT);
            masterLabel = createStyle(workbook, IndexedColors.PALE_BLUE.getIndex(), true, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_CENTER);
            masterValue = createStyle(workbook, IndexedColors.WHITE.getIndex(), false, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_LEFT);
            masterDate = createDateStyle(workbook, masterValue);
            sectionTitle = createStyle(workbook, IndexedColors.GREY_25_PERCENT.getIndex(), true, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_LEFT);
            childHeader = createStyle(workbook, IndexedColors.GREY_25_PERCENT.getIndex(), true, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_CENTER);
            childValue = createStyle(workbook, IndexedColors.WHITE.getIndex(), false, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_LEFT);
            childDate = createDateStyle(workbook, childValue);
            empty = createStyle(workbook, IndexedColors.WHITE.getIndex(), false, IndexedColors.BLACK.getIndex(), CellStyle.ALIGN_CENTER);
        }
    }

    public static class Report {
        private String title;
        private String sheetName;
        private List<MasterBlock> blocks = new ArrayList<MasterBlock>();

        public String getTitle() {
            return title;
        }

        public Report setTitle(String title) {
            this.title = title;
            return this;
        }

        public String getSheetName() {
            return sheetName;
        }

        public Report setSheetName(String sheetName) {
            this.sheetName = sheetName;
            return this;
        }

        public List<MasterBlock> getBlocks() {
            return blocks;
        }

        public Report setBlocks(List<MasterBlock> blocks) {
            this.blocks = blocks;
            return this;
        }

        public Report addBlock(MasterBlock block) {
            this.blocks.add(block);
            return this;
        }
    }

    public static class MasterBlock {
        private String title;
        private List<Field> fields = new ArrayList<Field>();
        private List<Section> sections = new ArrayList<Section>();

        public String getTitle() {
            return title;
        }

        public MasterBlock setTitle(String title) {
            this.title = title;
            return this;
        }

        public List<Field> getFields() {
            return fields;
        }

        public MasterBlock setFields(List<Field> fields) {
            this.fields = fields;
            return this;
        }

        public List<Section> getSections() {
            return sections;
        }

        public MasterBlock setSections(List<Section> sections) {
            this.sections = sections;
            return this;
        }

        public MasterBlock addField(String label, Object value) {
            this.fields.add(new Field(label, value));
            return this;
        }

        public MasterBlock addSection(Section section) {
            this.sections.add(section);
            return this;
        }
    }

    public static class Field {
        private String label;
        private Object value;

        public Field() {
        }

        public Field(String label, Object value) {
            this.label = label;
            this.value = value;
        }

        public String getLabel() {
            return label;
        }

        public Field setLabel(String label) {
            this.label = label;
            return this;
        }

        public Object getValue() {
            return value;
        }

        public Field setValue(Object value) {
            this.value = value;
            return this;
        }
    }

    public static class Section {
        private String title;
        private String emptyText;
        private List<Column> columns = new ArrayList<Column>();
        private List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();

        public String getTitle() {
            return title;
        }

        public Section setTitle(String title) {
            this.title = title;
            return this;
        }

        public String getEmptyText() {
            return emptyText;
        }

        public Section setEmptyText(String emptyText) {
            this.emptyText = emptyText;
            return this;
        }

        public List<Column> getColumns() {
            return columns;
        }

        public Section setColumns(List<Column> columns) {
            this.columns = columns;
            return this;
        }

        public List<Map<String, Object>> getRows() {
            return rows;
        }

        public Section setRows(List<Map<String, Object>> rows) {
            this.rows = rows;
            return this;
        }

        public Section addColumn(String field, String title, int width) {
            this.columns.add(new Column(field, title, width));
            return this;
        }

        public Section addRow(Map<String, Object> row) {
            this.rows.add(row);
            return this;
        }
    }

    public static class Column {
        private String field;
        private String title;
        private int width = 16;

        public Column() {
        }

        public Column(String field, String title, int width) {
            this.field = field;
            this.title = title;
            this.width = width;
        }

        public String getField() {
            return field;
        }

        public Column setField(String field) {
            this.field = field;
            return this;
        }

        public String getTitle() {
            return title;
        }

        public Column setTitle(String title) {
            this.title = title;
            return this;
        }

        public int getWidth() {
            return width <= 0 ? 16 : width;
        }

        public Column setWidth(int width) {
            this.width = width;
            return this;
        }
    }
}
