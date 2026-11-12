import avicit.pb.membernotice.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import java.io.*;
import java.time.LocalDate;

public class MemberNoticeRulesTest {
    private static int checks;
    public static void main(String[] args) throws Exception {
        check(NoticeRules.partyYears(LocalDate.of(2026,6,16),LocalDate.of(2026,11,10))==0,"under one year");
        check(NoticeRules.partyYears(LocalDate.of(2026,6,16),LocalDate.of(2027,6,15))==0,"day before anniversary");
        check(NoticeRules.partyYears(LocalDate.of(2026,6,16),LocalDate.of(2027,6,16))==1,"exact anniversary");
        check(NoticeRules.partyYears(LocalDate.of(2026,12,31),LocalDate.of(2027,1,1))==0,"cross calendar year");
        check(NoticeRules.partyYears(LocalDate.of(2024,2,29),LocalDate.of(2025,2,28))==0,"leap anniversary not reached");
        check(NoticeRules.partyYears(LocalDate.of(2024,2,29),LocalDate.of(2025,3,1))==1,"leap anniversary reached");
        check(NoticeRules.partyYears(LocalDate.of(2027,1,1),LocalDate.of(2026,11,10))==0,"future date clamped to zero");
        check(NoticeRules.title("张三","预备党员").equals("关于批准发展张三同志为中共预备党员的审批意见"),"probation title");
        check(NoticeRules.title("李四","正式党员").equals("关于同意李四同志转为中共正式党员的审批意见"),"formal title");
        XSSFWorkbook book=(XSSFWorkbook)NoticeExcel.template();
        try {
            Sheet s=book.getSheetAt(0);Row row=s.createRow(1);
            Cell code=row.createCell(0);code.setCellValue("00001");check("00001".equals(NoticeExcel.value(code)),"text code preserves leading zero");
            Cell number=row.createCell(1);number.setCellValue(1);CellStyle codeStyle=book.createCellStyle();codeStyle.setDataFormat(book.createDataFormat().getFormat("00000"));number.setCellStyle(codeStyle);
            check("00001".equals(NoticeExcel.value(number)),"formatted numeric code preserves displayed zero");
            Cell text=row.createCell(2);text.setCellValue("2026-07-06");
            check("2026-07-06".equals(NoticeExcel.date(text).toString()),"text date");
            Cell nativeDate=row.createCell(3);nativeDate.setCellValue(java.sql.Date.valueOf("2026-07-06"));
            CellStyle dateStyle=book.createCellStyle();dateStyle.setDataFormat(book.createDataFormat().getFormat("yyyy-mm-dd"));nativeDate.setCellStyle(dateStyle);
            check(NoticeExcel.date(nativeDate).equals(NoticeExcel.date(text)),"native date matches text");
            Cell formula=row.createCell(4);formula.setCellFormula("DATE(2026,7,6)");formula.setCellStyle(dateStyle);book.getCreationHelper().createFormulaEvaluator().evaluateFormulaCell(formula);
            check(NoticeExcel.date(formula).equals(NoticeExcel.date(text)),"numeric formula date");
            formula.setCellFormula("\"2026-07-06\"");book.getCreationHelper().createFormulaEvaluator().evaluateFormulaCell(formula);
            check(NoticeExcel.date(formula).equals(NoticeExcel.date(text)),"text formula date");
            formula.setCellFormula("1/0");book.getCreationHelper().createFormulaEvaluator().evaluateFormulaCell(formula);
            try{NoticeExcel.date(formula);throw new AssertionError("error formula accepted");}catch(IllegalArgumentException expected){checks++;}
            Cell name=row.createCell(5);name.setCellValue("普通文本");check("普通文本".equals(NoticeExcel.value(name)),"ordinary text avoids numeric APIs");
            text.setCellValue("2026-02-30");try{NoticeExcel.date(text);throw new AssertionError("invalid date accepted");}catch(IllegalArgumentException expected){checks++;}
            text.setCellValue("2026-07-06garbage");try{NoticeExcel.date(text);throw new AssertionError("trailing text accepted");}catch(IllegalArgumentException expected){checks++;}
            check(NoticeExcel.date(null)==null,"blank date remains null");
            ByteArrayOutputStream out=new ByteArrayOutputStream();book.write(out);
            XSSFWorkbook reread=(XSSFWorkbook)NoticeExcel.open(new ByteArrayInputStream(out.toByteArray()));
            try{check("00001".equals(NoticeExcel.value(reread.getSheetAt(0).getRow(1).getCell(0))),"real workbook roundtrip");}finally{reread.getPackage().close();}
        } finally {book.getPackage().close();}
        for(String kind:new String[]{"probation","formal"}) {
            XSSFWorkbook typed=(XSSFWorkbook)NoticeExcel.template(kind);
            try {
                Sheet sheet=typed.getSheetAt(0);String[] headers=NoticeExcel.headers(sheet.getRow(0));
                check("姓名".equals(headers[1]),"downloaded template includes name");
                Row row=sheet.createRow(1);row.createCell(0).setCellValue("00001");row.createCell(1).setCellValue("核对用姓名");row.createCell(2).setCellValue("测试组织");
                java.util.Map<String,String> data=NoticeExcel.fields(row,headers);
                check(("formal".equals(kind)?"正式党员":"预备党员").equals(data.get("partyType")),"typed template infers category");
                check(java.util.Arrays.asList(headers).contains("转正日期")=="formal".equals(kind),"only formal has regular date");
                check(java.util.Arrays.asList(headers).contains("预备期开始日期")=="probation".equals(kind),"only probation has probation dates");
                check("00001".equals(data.get("employeeCode")),"typed template keeps leading zeros");
                check("测试组织".equals(data.get("receiverOrg")),"name column does not shift organization");
            }finally{typed.getPackage().close();}
        }
        XSSFWorkbook mac=new XSSFWorkbook();
        try {
            mac.getCTWorkbook().getWorkbookPr().setDate1904(true);
            Cell date=mac.createSheet().createRow(0).createCell(0);
            CellStyle style=mac.createCellStyle();style.setDataFormat(mac.createDataFormat().getFormat("yyyy-mm-dd"));date.setCellStyle(style);
            date.setCellValue(DateUtil.getExcelDate(java.sql.Date.valueOf("2026-07-06"),true));
            check("2026-07-06".equals(NoticeExcel.date(date).toString()),"1904 workbook date system");
        }finally{mac.getPackage().close();}
        HSSFWorkbook legacy=new HSSFWorkbook();
        Cell date=legacy.createSheet().createRow(0).createCell(0);date.setCellValue(java.sql.Date.valueOf("2026-07-06"));
        CellStyle style=legacy.createCellStyle();style.setDataFormat(legacy.createDataFormat().getFormat("yyyy-mm-dd"));date.setCellStyle(style);
        ByteArrayOutputStream legacyOut=new ByteArrayOutputStream();legacy.write(legacyOut);
        Workbook legacyRead=NoticeExcel.open(new ByteArrayInputStream(legacyOut.toByteArray()));
        check("2026-07-06".equals(NoticeExcel.date(legacyRead.getSheetAt(0).getRow(0).getCell(0)).toString()),"legacy xls native date roundtrip");
        System.out.println("PASS "+checks+" member notice rules and POI 3.9 checks");
    }
    static void check(boolean condition,String name){if(!condition)throw new AssertionError(name);checks++;}
}
