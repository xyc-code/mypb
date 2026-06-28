package avicit.tu.fixedassets.dynfixedassetsledger.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Serializable;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;



import freemarker.template.Configuration;
import freemarker.template.Template;


@Service
public class ExportWord implements Serializable {

	private static final long serialVersionUID = 1L;
	public  File createDoc(Map<?, ?> dataMap, String type) {  
		Configuration configuration = new Configuration();
		Map<String, Template> allTemplates = null;
        configuration.setDefaultEncoding("UTF-8");  
        configuration.setClassForTemplateLoading(ExportWord.class, "/avicit/tu/fixedassets/dynfixedassetsledger/service");  
        allTemplates = new HashMap<>();   // Java 7 钻石语法  
        try {  
            allTemplates.put("template", configuration.getTemplate("template.ftl","UTF-8"));  
        } catch (IOException e) {  
            e.printStackTrace();  
            throw new RuntimeException(e);  
        }    
        String name = "template" + ".doc";  
        File f = new File(name);  
        Template t = allTemplates.get(type);  
        try {  
            // 这个地方不能使用FileWriter因为需要指定编码类型否则生成的Word文档会因为有无法识别的编码而无法打开  
            Writer w = new OutputStreamWriter(new FileOutputStream(f), "UTF-8");  
            t.process(dataMap, w);  
            w.close();  
        } catch (Exception ex) {  
            ex.printStackTrace();  
            throw new RuntimeException(ex);  
        }  
        return f;  
    }  
	
	public File createDoc2(Map<?, ?> dataMap, String type) {  
		Configuration configuration = new Configuration();
		Map<String, Template> allTemplates = null;
        configuration.setDefaultEncoding("UTF-8");  
        configuration.setClassForTemplateLoading(ExportWord.class, "/avicit/supervise/keypi/kpiimporttreedata/service");  
        allTemplates = new HashMap<>();   // Java 7 钻石语法  
        try {  
        	 allTemplates.put("template", configuration.getTemplate("template.ftl","UTF-8"));             
        } catch (IOException e) {  
            e.printStackTrace();  
            throw new RuntimeException(e);  
        }    
        String name = "template" + ".doc";  
        File f = new File(name);  
        Template t = allTemplates.get(type);  
        try {  
            // 这个地方不能使用FileWriter因为需要指定编码类型否则生成的Word文档会因为有无法识别的编码而无法打开  
            Writer w = new OutputStreamWriter(new FileOutputStream(f), "UTF-8");  
            t.process(dataMap, w);  
            w.close();  
        } catch (Exception ex) {  
            ex.printStackTrace();  
            throw new RuntimeException(ex);  
        }  
        return f;  
    }  
}
