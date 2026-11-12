package avicit.pb.competency;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddressList;
import java.io.*;
import java.math.BigDecimal;
import java.util.*;
import static avicit.pb.competency.CompetencyRules.*;

public final class CompetencyExcel {
    private static final String[] HEADERS={"人员ID","PARTY_ID","工号","姓名","党组织名称","理论考试","业务考核","面试成绩","满意度测评","特色活动","版本"};
    private CompetencyExcel(){}
    public static final class ImportRow {
        public int number;public String userId,partyId,code,name,partyName,version,error;public String[] scores=new String[5];
    }
    public static void close(Workbook book)throws IOException{if(book instanceof XSSFWorkbook)((XSSFWorkbook)book).getPackage().close();}
    public static String value(Cell cell,FormulaEvaluator evaluator){
        if(cell==null)return "";
        int type=cell.getCellType();
        if(type==Cell.CELL_TYPE_FORMULA){CellValue v=evaluator.evaluate(cell);if(v==null)return "";switch(v.getCellType()){case Cell.CELL_TYPE_NUMERIC:require(!DateUtil.isCellDateFormatted(cell),"成绩和识别列不能为日期格式");return BigDecimal.valueOf(v.getNumberValue()).stripTrailingZeros().toPlainString();case Cell.CELL_TYPE_STRING:return text(v.getStringValue());case Cell.CELL_TYPE_BLANK:return "";default:throw new IllegalArgumentException("公式未产生有效文本或数字");}}
        if(type==Cell.CELL_TYPE_NUMERIC){require(!DateUtil.isCellDateFormatted(cell),"成绩和识别列不能为日期格式");return new DataFormatter().formatCellValue(cell).trim();}
        if(type==Cell.CELL_TYPE_STRING)return text(cell.getStringCellValue());
        if(type==Cell.CELL_TYPE_BLANK)return "";
        throw new IllegalArgumentException("单元格含错误或不支持的值");
    }
    public static List<ImportRow> read(InputStream stream)throws Exception{
        Workbook book=WorkbookFactory.create(stream);
        try{
            require(book.getNumberOfSheets()>0,"工作簿没有数据工作表");Sheet sheet=book.getSheetAt(0);FormulaEvaluator evaluator=book.getCreationHelper().createFormulaEvaluator();Row header=sheet.getRow(0);require(header!=null,"缺少表头");
            Map<String,Integer> cols=new LinkedHashMap<String,Integer>();
            for(int i=0;i<header.getLastCellNum();i++){String h=value(header.getCell(i),evaluator);if(!h.isEmpty()){require(!cols.containsKey(h),"表头重复："+h);cols.put(h,i);}}
            for(String h:new String[]{"工号","姓名","党组织名称","理论考试","业务考核","面试成绩","满意度测评","特色活动"})require(cols.containsKey(h),"缺少模板列："+h);
            List<ImportRow> out=new ArrayList<ImportRow>();
            for(int i=1;i<=sheet.getLastRowNum();i++){
                Row row=sheet.getRow(i);if(row==null)continue;boolean blank=true;for(Cell cell:row)if(cell.getCellType()!=Cell.CELL_TYPE_BLANK){if(cell.getCellType()!=Cell.CELL_TYPE_STRING||!text(cell.getStringCellValue()).isEmpty())blank=false;}if(blank)continue;
                ImportRow line=new ImportRow();line.number=i+1;
                try{
                    line.userId=at(row,cols,"人员ID",evaluator);line.partyId=at(row,cols,"PARTY_ID",evaluator);line.code=at(row,cols,"工号",evaluator);line.name=at(row,cols,"姓名",evaluator);line.partyName=at(row,cols,"党组织名称",evaluator);line.version=at(row,cols,"版本",evaluator);
                    for(int j=0;j<5;j++){Cell cell=row.getCell(cols.get(LABELS[j]));line.scores[j]=value(cell,evaluator);if(cell!=null&&cell.getCellType()==Cell.CELL_TYPE_NUMERIC)line.scores[j]=BigDecimal.valueOf(cell.getNumericCellValue()).stripTrailingZeros().toPlainString();try{score(line.scores[j]);}catch(IllegalArgumentException ex){throw new IllegalArgumentException(LABELS[j]+"："+ex.getMessage());}}
                }catch(Exception ex){line.error=ex instanceof IllegalArgumentException?ex.getMessage():"无法读取该行单元格";}
                out.add(line);
            }
            return out;
        }finally{close(book);}
    }
    private static String at(Row row,Map<String,Integer> cols,String name,FormulaEvaluator evaluator){Integer c=cols.get(name);return c==null?"":value(row.getCell(c),evaluator);}
    public static Workbook workbook(List<Map<String,Object>> rows,boolean template){
        XSSFWorkbook book=new XSSFWorkbook();Sheet sheet=book.createSheet(template?"成绩录入":"测评成绩台账");
        CellStyle heading=book.createCellStyle();heading.setFillForegroundColor(IndexedColors.PALE_BLUE.getIndex());heading.setFillPattern(CellStyle.SOLID_FOREGROUND);Font hf=book.createFont();hf.setFontName("微软雅黑");hf.setBoldweight(Font.BOLDWEIGHT_BOLD);heading.setFont(hf);
        CellStyle textStyle=book.createCellStyle();textStyle.setDataFormat(book.createDataFormat().getFormat("@"));Font body=book.createFont();body.setFontName("微软雅黑");body.setFontHeightInPoints((short)11);textStyle.setFont(body);
        CellStyle numeric=book.createCellStyle();numeric.setFont(body);numeric.setDataFormat(book.createDataFormat().getFormat("0.00"));
        Row header=sheet.createRow(0);for(int i=0;i<HEADERS.length;i++){Cell c=header.createCell(i);c.setCellValue(HEADERS[i]);c.setCellStyle(heading);}if(!template){header.createCell(11).setCellValue("综合得分");header.createCell(12).setCellValue("评价等次");header.getCell(11).setCellStyle(heading);header.getCell(12).setCellStyle(heading);}
        int index=1;for(Map<String,Object> item:rows){Row row=sheet.createRow(index++);String[] keys={"USER_ID","PARTY_ID","EMPLOYEE_CODE","MEMBER_NAME","PARTY_NAME"};for(int i=0;i<keys.length;i++){Cell c=row.createCell(i);c.setCellStyle(textStyle);c.setCellValue(text(item.get(keys[i])));}for(int i=0;i<5;i++){Cell c=row.createCell(5+i);c.setCellStyle(numeric);if(!template&&item.get(FIELDS[i])!=null)c.setCellValue(((Number)item.get(FIELDS[i])).doubleValue());}row.createCell(10).setCellValue(text(item.get("VERSION")));if(!template){Cell total=row.createCell(11);total.setCellStyle(numeric);if(item.get("total")!=null)total.setCellValue(((Number)item.get("total")).doubleValue());row.createCell(12).setCellValue(text(item.get("level")));}row.setHeightInPoints(24);}
        for(int i=0;i<13;i++){sheet.setColumnWidth(i,(i==4?34:i==3?16:18)*256);}for(int i:new int[]{0,1,10})sheet.setColumnHidden(i,true);sheet.createFreezePane(5,1);sheet.setAutoFilter(new org.apache.poi.ss.util.CellRangeAddress(0,Math.max(0,rows.size()),0,template?10:12));header.setHeightInPoints(28);
        if(template){DataValidationHelper helper=sheet.getDataValidationHelper();DataValidation validation=helper.createValidation(helper.createDecimalConstraint(DataValidationConstraint.OperatorType.BETWEEN,"0","100"),new CellRangeAddressList(1,Math.max(1,rows.size()),5,9));validation.setEmptyCellAllowed(true);validation.setShowErrorBox(true);validation.createErrorBox("成绩范围","请输入0—100之间的成绩，最多两位小数。");sheet.addValidationData(validation);}
        Sheet help=book.createSheet("填写说明");String[] notes={"本批次每人每党组织一行，隐藏人员ID、PARTY_ID、版本用于准确匹配。","所有成绩为0—100分，最多两位小数；允许空白，0分是有效成绩。","导入将覆盖匹配行的五项成绩，空白列将清空对应成绩；模板默认不带出成绩。","仅五项齐全后计算综合分和等次。固定权重：理论30%＋业务40%＋面试30%。","没有ID的手工文件，按工号和党组织名称唯一匹配，姓名核对。","不要修改隐藏识别列。已被其他人修改的记录需重新下载模板。"};for(int i=0;i<notes.length;i++)help.createRow(i).createCell(0).setCellValue(notes[i]);help.setColumnWidth(0,110*256);
        return book;
    }
}
