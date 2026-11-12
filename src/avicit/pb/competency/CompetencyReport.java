package avicit.pb.competency;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import org.apache.poi.xwpf.usermodel.*;
import org.apache.poi.util.Units;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.geom.Path2D;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.*;
import java.math.BigDecimal;
import java.util.*;
import java.util.List;
import static avicit.pb.competency.CompetencyRules.*;

/** Creates both formats from the same report sections and a server-rendered PNG. */
public final class CompetencyReport {
    private CompetencyReport(){}
    public static final class Content {
        public String title,subtitle;public byte[] chart;public final List<Section> sections=new ArrayList<Section>();
    }
    public static final class Section {
        public String title;public List<String> lines=new ArrayList<String>();public List<String[]> table=new ArrayList<String[]>();public boolean pageBreak;
        Section(String title){this.title=title;}
    }
    @SuppressWarnings("unchecked")
    public static Content personal(Map<String,Object> batch,Map<String,Object> row)throws Exception{
        require(Boolean.TRUE.equals(row.get("complete")),"五项成绩尚未录齐，暂不能生成正式报告");
        Content c=new Content();c.title="党支部书记胜任力分析报告（个人版）";c.subtitle=text(batch.get("BATCH_NAME"))+" · "+text(batch.get("EVAL_DATE"));
        Section top=new Section(text(row.get("MEMBER_NAME"))+" · "+text(row.get("PARTY_NAME")));
        top.lines.add("职务："+text(row.get("POST_NAME"))+"　综合得分："+format(row.get("total"))+"分　评价等次："+row.get("level"));c.sections.add(top);
        List<BigDecimal> ds=(List<BigDecimal>)row.get("dimensions");c.chart=chart(ds,null,null,"个人九项能力画像");
        Section analysis=new Section("能力分析");List<String> strengths=new ArrayList<String>();for(Integer i:(List<Integer>)row.get("advantages"))strengths.add(DIMENSIONS[i]+"（"+format(ds.get(i))+"分）");
        int weak=(Integer)row.get("weakIndex");analysis.lines.add("相对优势："+String.join("、",strengths)+"。");analysis.lines.add("优先关注："+DIMENSIONS[weak]+"（"+format(ds.get(weak))+"分），为本次测评相对最低项。"+ (ds.get(weak).compareTo(new BigDecimal("90"))<0?"该项低于90分，应优先补强。":"可作为下一步持续提升方向。"));
        List<BigDecimal> bs=(List<BigDecimal>)row.get("blocks");analysis.lines.add("板块表现：三懂 "+format(bs.get(0))+"，三会 "+format(bs.get(1))+"，三过硬 "+format(bs.get(2))+"。");c.sections.add(analysis);
        Section actions=new Section("下一步提升建议");int n=1;for(String s:(List<String>)row.get("suggestions"))actions.lines.add((n++)+". "+s);c.sections.add(actions);
        Section scores=new Section("原始成绩与评价口径");List<String> parts=new ArrayList<String>();for(int i=0;i<5;i++)parts.add(LABELS[i]+" "+format(row.get(FIELDS[i])));scores.lines.add(String.join("；",parts)+"。");scores.lines.add("综合分＝理论×30%＋业务×40%＋面试×30%。95分及以上胜任，85至不足95分基本胜任，低于85分不胜任。规则版本："+text(row.get("RULE_VERSION")));c.sections.add(scores);return c;
    }
    @SuppressWarnings("unchecked")
    public static Content team(Map<String,Object> batch,List<Map<String,Object>> rows)throws Exception{
        Map<String,Object> summary=summary(rows);int completed=(Integer)summary.get("completed");require(completed>0,"本批次可见范围内没有录齐五项成绩的记录，暂不能生成正式报告");
        Content c=new Content();c.title="党支部书记胜任力分析报告（队伍版）";c.subtitle=text(batch.get("BATCH_NAME"))+" · "+text(batch.get("EVAL_DATE"));
        int[] counts=(int[])summary.get("counts");Section overview=new Section("一、总体情况");
        overview.lines.add("本批次当前数据范围内共有书记"+summary.get("people")+"人、测评记录"+summary.get("records")+"条，其中"+completed+"条五项成绩齐全，参与以下统计。兼职书记在不同党组织分别测评。");
        overview.lines.add("综合平均分"+format(summary.get("mean"))+"分，区间"+format(summary.get("min"))+"—"+format(summary.get("max"))+"分。胜任"+counts[0]+"条，基本胜任"+counts[1]+"条，不胜任"+counts[2]+"条。未录齐成绩不按零分统计。");c.sections.add(overview);
        List<BigDecimal> means=(List<BigDecimal>)summary.get("dimensions");c.chart=chart(means,(List<BigDecimal>)summary.get("maxDimensions"),(List<BigDecimal>)summary.get("minDimensions"),"队伍九项能力 · 均值 / 最高 / 最低");
        Section structure=new Section("二、能力结构");structure.pageBreak=true;
        structure.table.add(new String[]{"能力维度","队伍均值","最高分","最低分"});for(int i=0;i<9;i++)structure.table.add(new String[]{DIMENSIONS[i],format(means.get(i)),format(((List<BigDecimal>)summary.get("maxDimensions")).get(i)),format(((List<BigDecimal>)summary.get("minDimensions")).get(i))});
        List<BigDecimal> bs=(List<BigDecimal>)summary.get("blocks");structure.lines.add("三大板块均分：三懂"+format(bs.get(0))+"，三会"+format(bs.get(1))+"，三过硬"+format(bs.get(2))+"。");List<Integer> weaknesses=(List<Integer>)summary.get("weakDimensions");
        if(weaknesses.isEmpty())structure.lines.add("九项能力均值均达到90分，建议继续关注个体差异。");
        else{List<String> items=new ArrayList<String>();for(int i:weaknesses)items.add(DIMENSIONS[i]+"（"+format(means.get(i))+"分）");structure.lines.add("共性短板优先关注："+String.join("、",items)+"。以上按低于90分的维度均值从低到高列示，最多三项。");for(int i:weaknesses)structure.lines.add(DIMENSIONS[i]+"提升参考："+ACTIONS_FOR_REPORT(i));}c.sections.add(structure);
        Section groups=new Section("三、分层施策");groups.pageBreak=true;
        String[] levels={"胜任","基本胜任","不胜任"};String[] advice={"承担经验交流、片区带教等工作，沉淀可复用的方法。","围绕个人短板开展针对性培训和实践交流，跟踪提升效果。","围绕短板制定改进清单，开展辅导并在后续批次复评。"};
        for(int i=0;i<3;i++){groups.lines.add(levels[i]+"（"+counts[i]+"条）："+advice[i]);}
        groups.table.add(new String[]{"姓名","党组织","评价等次","最低分维度"});for(Map<String,Object> row:rows)if(Boolean.TRUE.equals(row.get("complete")))groups.table.add(new String[]{text(row.get("MEMBER_NAME")),text(row.get("PARTY_NAME")),text(row.get("level")),DIMENSIONS[(Integer)row.get("weakIndex")]});
        groups.lines.add("名单按人员记录顺序展示，不作公开个人排名。报告只反映当前批次及当前可见数据范围，修改成绩后重新下载可获得最新结果。");c.sections.add(groups);return c;
    }
    private static String ACTIONS_FOR_REPORT(int i){return suggestion(i);}
    public static byte[] word(Content content)throws Exception{
        XWPFDocument doc=new XWPFDocument();
        try{
            paragraph(doc,content.title,17,true);paragraph(doc,content.subtitle,10,false);
            boolean image=false;
            for(Section s:content.sections){
                if(s.pageBreak)doc.createParagraph().setPageBreak(true);
                paragraph(doc,s.title,12,true);for(String line:s.lines)paragraph(doc,line,10,false);
                if(!image){XWPFRun run=doc.createParagraph().createRun();wordChart(doc,run,content.chart);image=true;}
                if(!s.table.isEmpty())wordTable(doc,s.table);
            }
            wordPage(doc);
            ByteArrayOutputStream out=new ByteArrayOutputStream();doc.write(out);return out.toByteArray();
        }finally{doc.getPackage().close();}
    }
    private static void wordTable(XWPFDocument doc,List<String[]> rows){
        boolean dimensions="能力维度".equals(rows.get(0)[0]);
        int[] widths=dimensions?new int[]{3400,2080,2080,2080}:new int[]{1500,3900,1700,2540};
        XWPFTable table=doc.createTable(rows.size(),widths.length);table.setWidth(9640);
        // Explicit DXA widths prevent Word from shrinking these tables to their text content.
        org.w3c.dom.Element root=(org.w3c.dom.Element)table.getCTTbl().getDomNode();
        org.w3c.dom.Element properties=(org.w3c.dom.Element)root.getFirstChild();
        org.w3c.dom.Element width=(org.w3c.dom.Element)properties.getFirstChild();wordAttr(width,"type","dxa");
        table.setInsideHBorder(XWPFTable.XWPFBorderType.SINGLE,4,0,"DFE7F2");table.setInsideVBorder(XWPFTable.XWPFBorderType.SINGLE,4,0,"DFE7F2");
        org.w3c.dom.Element layout=wordElement(properties,"tblLayout");wordAttr(layout,"type","fixed");
        table.setCellMargins(100,140,100,140);
        org.w3c.dom.Element grid=wordElement(root,"tblGrid");
        root.insertBefore(grid,table.getRow(0).getCtRow().getDomNode());
        for(int value:widths){org.w3c.dom.Element column=wordElement(grid,"gridCol");wordAttr(column,"w",value);}
        for(int i=0;i<rows.size();i++){
            XWPFTableRow row=table.getRow(i);row.setHeight(560);row.setCantSplitRow(true);if(i==0)row.setRepeatHeader(true);
            for(int j=0;j<widths.length;j++){
                XWPFTableCell cell=row.getCell(j);
                org.w3c.dom.Node cellNode=cell.getCTTc().getDomNode();
                org.w3c.dom.Element cellProperties=wordElement(cellNode,"tcPr");cellNode.insertBefore(cellProperties,cellNode.getFirstChild());
                org.w3c.dom.Element cellWidth=wordElement(cellProperties,"tcW");wordAttr(cellWidth,"w",widths[j]);wordAttr(cellWidth,"type","dxa");
                cell.setVerticalAlignment(XWPFTableCell.XWPFVertAlign.CENTER);
                XWPFParagraph paragraph=cell.getParagraphs().get(0);paragraph.setSpacingBefore(0);paragraph.setSpacingAfter(0);
                if(dimensions&&j>0)paragraph.setAlignment(ParagraphAlignment.CENTER);
                XWPFRun run=paragraph.createRun();run.setText(rows.get(i)[j]);run.setFontFamily("宋体");run.setFontSize(12);run.setBold(i==0);run.setColor(i==0?"2458A4":"243650");
                org.w3c.dom.Element fonts=(org.w3c.dom.Element)run.getCTR().getDomNode().getFirstChild().getFirstChild();wordAttr(fonts,"eastAsia","宋体");
                if(i==0)cell.setColor("EDF4FF");else if(i%2==0)cell.setColor("F8FAFD");
            }
        }
    }
    private static void wordPage(XWPFDocument doc){
        org.w3c.dom.Element section=wordElement(doc.getDocument().getBody().getDomNode(),"sectPr");
        org.w3c.dom.Element size=wordElement(section,"pgSz");wordAttr(size,"w",11906);wordAttr(size,"h",16838);
        org.w3c.dom.Element margins=wordElement(section,"pgMar");
        for(String side:new String[]{"top","right","bottom","left"})wordAttr(margins,side,1133);
        wordAttr(margins,"header",567);wordAttr(margins,"footer",567);wordAttr(margins,"gutter",0);
    }
    private static org.w3c.dom.Element wordElement(org.w3c.dom.Node parent,String name){
        org.w3c.dom.Element element=parent.getOwnerDocument().createElementNS("http://schemas.openxmlformats.org/wordprocessingml/2006/main","w:"+name);parent.appendChild(element);return element;
    }
    private static void wordAttr(org.w3c.dom.Element element,String name,Object value){element.setAttributeNS("http://schemas.openxmlformats.org/wordprocessingml/2006/main","w:"+name,String.valueOf(value));}
    private static void paragraph(XWPFDocument doc,String text,int fontSize,boolean bold){XWPFParagraph p=doc.createParagraph();p.setSpacingAfter(100);XWPFRun r=p.createRun();r.setText(text);r.setFontFamily("宋体");r.setFontSize(fontSize);r.setBold(bold);if(bold)r.setColor("2458A4");}
    private static void wordChart(XWPFDocument doc,XWPFRun run,byte[] chart)throws Exception{
        String rel=doc.addPictureData(chart,XWPFDocument.PICTURE_TYPE_PNG);int width=Units.toEMU(430),height=Units.toEMU(250);
        // POI 3.9's addPicture detaches the populated picture node with the bundled schemas.
        // Write the complete graphic once so the saved document retains its image relationship.
        String xml="<a:graphic xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\"><a:graphicData uri=\"http://schemas.openxmlformats.org/drawingml/2006/picture\"><pic:pic xmlns:pic=\"http://schemas.openxmlformats.org/drawingml/2006/picture\"><pic:nvPicPr><pic:cNvPr id=\"0\" name=\"Competency radar\" descr=\"能力雷达图\"/><pic:cNvPicPr><a:picLocks noChangeAspect=\"1\"/></pic:cNvPicPr></pic:nvPicPr><pic:blipFill><a:blip xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" r:embed=\""+rel+"\"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x=\"0\" y=\"0\"/><a:ext cx=\""+width+"\" cy=\""+height+"\"/></a:xfrm><a:prstGeom prst=\"rect\"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic>";
        org.openxmlformats.schemas.drawingml.x2006.wordprocessingDrawing.CTInline inline=run.getCTR().addNewDrawing().addNewInline();inline.set(org.apache.xmlbeans.XmlToken.Factory.parse(xml));
        inline.setDistT(0);inline.setDistB(0);inline.setDistL(0);inline.setDistR(0);
        org.openxmlformats.schemas.drawingml.x2006.main.CTPositiveSize2D size=inline.addNewExtent();size.setCx(width);size.setCy(height);
        org.openxmlformats.schemas.drawingml.x2006.main.CTNonVisualDrawingProps props=inline.addNewDocPr();props.setId(1);props.setName("Competency radar");props.setDescr("能力雷达图");
    }
    public static byte[] pdf(Content content)throws Exception{
        ByteArrayOutputStream out=new ByteArrayOutputStream();com.itextpdf.text.Document doc=new com.itextpdf.text.Document(PageSize.A4,42,42,36,36);PdfWriter.getInstance(doc,out);
        BaseFont base=BaseFont.createFont("STSong-Light","UniGB-UCS2-H",BaseFont.NOT_EMBEDDED);com.itextpdf.text.Font body=new com.itextpdf.text.Font(base,10),heading=new com.itextpdf.text.Font(base,12,com.itextpdf.text.Font.BOLD,new BaseColor(36,88,164));
        doc.open();try{doc.add(new Paragraph(content.title,new com.itextpdf.text.Font(base,17,com.itextpdf.text.Font.BOLD)));doc.add(new Paragraph(content.subtitle,body));boolean image=false;
            for(Section s:content.sections){if(s.pageBreak)doc.newPage();Paragraph h=new Paragraph(s.title,heading);h.setSpacingBefore(12);h.setSpacingAfter(6);doc.add(h);for(String line:s.lines){Paragraph p=new Paragraph(line,body);p.setLeading(16);p.setSpacingAfter(5);doc.add(p);}if(!image){Image chart=Image.getInstance(content.chart);chart.scaleToFit(490,285);chart.setAlignment(Element.ALIGN_CENTER);doc.add(chart);image=true;}if(!s.table.isEmpty()){PdfPTable table=new PdfPTable(s.table.get(0).length);table.setWidthPercentage(100);table.setHeaderRows(1);table.setSpacingBefore(8);for(int i=0;i<s.table.size();i++)for(String value:s.table.get(i)){PdfPCell cell=new PdfPCell(new Phrase(value,body));cell.setPadding(7);cell.setBorderColor(new BaseColor(224,232,243));if(i==0)cell.setBackgroundColor(new BaseColor(237,244,255));table.addCell(cell);}doc.add(table);}}
        }finally{doc.close();}return out.toByteArray();
    }
    private static byte[] chart(List<BigDecimal> means,List<BigDecimal> max,List<BigDecimal> min,String title)throws Exception{
        BufferedImage image=new BufferedImage(1800,1040,BufferedImage.TYPE_INT_RGB);Graphics2D g=image.createGraphics();g.setRenderingHint(RenderingHints.KEY_ANTIALIASING,RenderingHints.VALUE_ANTIALIAS_ON);g.setColor(Color.WHITE);g.fillRect(0,0,1800,1040);g.setFont(new java.awt.Font("Dialog",java.awt.Font.BOLD,32));g.setColor(new Color(36,54,80));g.drawString(title,60,55);
        double cx=900,cy=490,r=325;g.setStroke(new BasicStroke(2));
        for(int n=20;n<=100;n+=20){g.setColor(new Color(226,234,245));g.draw(polygon(Collections.nCopies(9,new BigDecimal(n)),cx,cy,r));}
        g.setFont(new java.awt.Font("Dialog",java.awt.Font.PLAIN,27));for(int i=0;i<9;i++){double a=(i*40-90)*Math.PI/180;g.setColor(new Color(226,234,245));g.drawLine((int)cx,(int)cy,(int)(cx+Math.cos(a)*r),(int)(cy+Math.sin(a)*r));String label=DIMENSIONS[i]+" "+format(means.get(i));int x=(int)(cx+Math.cos(a)*(r+60)),y=(int)(cy+Math.sin(a)*(r+60));int width=g.getFontMetrics().stringWidth(label);if(Math.cos(a)<-.1)x-=width;else if(Math.abs(Math.cos(a))<=.1)x-=width/2;g.setColor(new Color(80,103,133));g.drawString(label,x,y);}
        g.setStroke(new BasicStroke(2,BasicStroke.CAP_BUTT,BasicStroke.JOIN_ROUND,0,new float[]{8,8},0));g.setColor(new Color(204,170,110));g.draw(polygon(Collections.nCopies(9,new BigDecimal("90")),cx,cy,r));g.setColor(new Color(140,166,200));g.draw(polygon(Collections.nCopies(9,new BigDecimal("95")),cx,cy,r));
        if(max!=null){g.setStroke(new BasicStroke(3));g.setColor(new Color(32,167,131));g.draw(polygon(max,cx,cy,r));}if(min!=null){g.setStroke(new BasicStroke(3));g.setColor(new Color(216,151,39));g.draw(polygon(min,cx,cy,r));}
        Path2D shape=polygon(means,cx,cy,r);g.setColor(new Color(52,120,246,32));g.fill(shape);g.setColor(new Color(52,120,246));g.setStroke(new BasicStroke(5));g.draw(shape);
        g.setFont(new java.awt.Font("Dialog",java.awt.Font.PLAIN,24));g.drawString(max==null?"蓝色：个人得分　虚线：90 / 95分参考线":"蓝色：均值　绿色：逐维最高　金色：逐维最低　虚线：90 / 95分",320,1000);g.dispose();ByteArrayOutputStream out=new ByteArrayOutputStream();ImageIO.write(image,"png",out);return out.toByteArray();
    }
    private static Path2D polygon(List<BigDecimal> values,double cx,double cy,double radius){Path2D p=new Path2D.Double();for(int i=0;i<9;i++){double a=(i*40-90)*Math.PI/180,r=radius*values.get(i).doubleValue()/100,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;if(i==0)p.moveTo(x,y);else p.lineTo(x,y);}p.closePath();return p;}
}
