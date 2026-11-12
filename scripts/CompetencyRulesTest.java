import avicit.pb.competency.*;
import java.math.BigDecimal;
import java.util.*;
import java.io.*;
import java.nio.file.*;
import org.apache.poi.ss.usermodel.*;
import static avicit.pb.competency.CompetencyRules.*;

public class CompetencyRulesTest {
    static int checks;
    static void check(boolean condition,String message){checks++;if(!condition)throw new AssertionError(message);}
    static Map<String,Object> row(String id,String...values){Map<String,Object> r=new LinkedHashMap<String,Object>();r.put("ID",id);r.put("USER_ID",id);r.put("PARTY_ID","TEST_PARTY");r.put("EMPLOYEE_CODE","000123");r.put("MEMBER_NAME","张书记");r.put("PARTY_NAME","测试党支部");r.put("POST_NAME","支部书记");r.put("VERSION",0);r.put("RULE_VERSION",VERSION);for(int i=0;i<5;i++)r.put(FIELDS[i],score(values[i]));return result(r);}
    static void rejects(String s){try{score(s);throw new AssertionError("Accepted invalid score "+s);}catch(IllegalArgumentException expected){checks++;}}
    public static void main(String[] args)throws Exception{
        Map<String,Object> z=row("zero","0","0","0","0","0"),partial=row("partial","0","0","0","","0");check(Boolean.TRUE.equals(z.get("complete"))&&"0.00".equals(format(z.get("total"))),"zero must complete");check(!Boolean.TRUE.equals(partial.get("complete"))&&partial.get("total")==null,"blank must remain incomplete");
        check("基本胜任".equals(row("85","85","85","85","0","0").get("level")),"85 boundary");check("胜任".equals(row("95","95","95","95","0","0").get("level")),"95 boundary");
        Map<String,Object> rounding=row("r","94.99","95","95","90","90");check("95.00".equals(format(rounding.get("total")))&&"胜任".equals(rounding.get("level")),"round before level");check("85.00".equals(format(row("r2","84.99","85","85","90","90").get("total"))),"round85");
        rejects("100.01");rejects("-0.01");rejects("99.999");rejects("NaN");check(score("0.00").compareTo(BigDecimal.ZERO)==0,"decimal zero");
        String[][] seed={{"100","99.5","97","99.8","99"},{"98","96","95","98","97"},{"94","92","90","95","94"},{"92","90","88","93","92"},{"91","89","86","91","90"},{"90","87","85","90","88"},{"88","86","84","88","87"},{"87","85","83","87","86"},{"84","80","78","82","80"},{"80","76","72","78","75"}};
        List<Map<String,Object>> rows=new ArrayList<Map<String,Object>>();for(int i=0;i<seed.length;i++)rows.add(row("U"+i,seed[i]));check("98.90".equals(format(rows.get(0).get("total"))),"document Zhang98.90");Map<String,Object> summary=summary(rows);check("88.08".equals(format(summary.get("mean"))),"document mean88.08");check(Arrays.equals(new int[]{2,6,2},(int[])summary.get("counts")),"document levels2/6/2");
        check(((List<?>)z.get("advantages")).equals(Arrays.asList(0,1,2))&&Integer.valueOf(0).equals(z.get("weakIndex")),"stable ties");
        List<Map<String,Object>> partialOnly=Arrays.asList(partial);check(summary(partialOnly).get("mean")==null&&((List<?>)summary(partialOnly).get("dimensions")).isEmpty(),"incomplete excluded");
        Map<String,Object> dual=row("U0","90","90","90","90","90");rows.add(dual);check(Integer.valueOf(10).equals(summary(rows).get("people"))&&Integer.valueOf(11).equals(summary(rows).get("records")),"dual posts count separately");rows.remove(rows.size()-1);
        Path output=Paths.get("temp/competency-tests/exports");Files.createDirectories(output);
        Workbook template=CompetencyExcel.workbook(rows,true);Sheet sheet=template.getSheetAt(0);check(sheet.isColumnHidden(0)&&sheet.isColumnHidden(1)&&sheet.isColumnHidden(10),"hidden identifiers/version");check(sheet.getRow(1).getCell(5).getCellType()==Cell.CELL_TYPE_BLANK,"template blank scores");
        sheet.getRow(1).getCell(5).setCellValue(99.999);sheet.getRow(2).getCell(5).setCellFormula("50+45");sheet.getRow(3).getCell(5).setCellValue("12.5");sheet.getRow(4).getCell(5).setCellValue("invalid");Cell dateCell=sheet.getRow(5).getCell(5);dateCell.setCellValue(new Date());CellStyle dateStyle=template.createCellStyle();dateStyle.setDataFormat(template.createDataFormat().getFormat("yyyy-mm-dd"));dateCell.setCellStyle(dateStyle);
        Cell formulaDate=sheet.getRow(6).getCell(5);formulaDate.setCellFormula("1+1");formulaDate.setCellStyle(dateStyle);
        ByteArrayOutputStream out=new ByteArrayOutputStream();template.write(out);CompetencyExcel.close(template);List<CompetencyExcel.ImportRow> imported=CompetencyExcel.read(new ByteArrayInputStream(out.toByteArray()));check(imported.get(0).error!=null,"display format must not round invalid raw decimal");check("95".equals(imported.get(1).scores[0]),"numeric formula");check("12.5".equals(imported.get(2).scores[0]),"text decimal");check(imported.get(3).error!=null&&imported.get(4).error!=null,"invalid text/date per-row errors");check(imported.get(5).error!=null,"numeric date formula cannot become a valid score");check("000123".equals(imported.get(2).code),"leading-zero identifier");
        Workbook ledger=CompetencyExcel.workbook(rows,false);try(OutputStream f=Files.newOutputStream(output.resolve("ledger.xlsx"))){ledger.write(f);}finally{CompetencyExcel.close(ledger);}
        Map<String,Object> b=new HashMap<String,Object>();b.put("BATCH_NAME","2026年度书记胜任力验收批次");b.put("EVAL_DATE","2026-11-11");
        CompetencyReport.Content p=CompetencyReport.personal(b,rows.get(0)),t=CompetencyReport.team(b,rows);
        Files.write(output.resolve("personal.docx"),CompetencyReport.word(p));Files.write(output.resolve("personal.pdf"),CompetencyReport.pdf(p));Files.write(output.resolve("team.docx"),CompetencyReport.word(t));Files.write(output.resolve("team.pdf"),CompetencyReport.pdf(t));
        check(Files.size(output.resolve("personal.pdf"))>10000&&Files.size(output.resolve("team.docx"))>10000,"real report files");
        for(String name:new String[]{"personal","team"}){
            com.itextpdf.text.pdf.PdfReader pdf=new com.itextpdf.text.pdf.PdfReader(Files.readAllBytes(output.resolve(name+".pdf")));
            try{check(pdf.getNumberOfPages()==("personal".equals(name)?1:3),name+" PDF page count");}finally{pdf.close();}
            org.apache.poi.xwpf.usermodel.XWPFDocument word=new org.apache.poi.xwpf.usermodel.XWPFDocument(Files.newInputStream(output.resolve(name+".docx")));
            try{check(word.getAllPictures().size()==1,name+" Word real chart");String text="";for(org.apache.poi.xwpf.usermodel.XWPFParagraph para:word.getParagraphs())text+=para.getText();check(text.contains("书记")&&text.contains("personal".equals(name)?"建议":"分层施策"),name+" Word Chinese paragraphs");int charts=0;for(org.apache.poi.xwpf.usermodel.XWPFParagraph para:word.getParagraphs())for(org.apache.poi.xwpf.usermodel.XWPFRun run:para.getRuns())charts+=run.getEmbeddedPictures().size();check(charts==1,name+" Word inline chart preserved");}finally{word.getPackage().close();}
        }
        System.out.println("Competency rules/import/export: "+checks+" checks passed. Sample: 98.90, mean88.08, levels2/6/2.");
    }
}
