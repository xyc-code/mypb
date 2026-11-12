package avicit.pb.competency;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.*;
import java.io.*;
import java.net.URLEncoder;
import java.util.*;
import static avicit.pb.competency.CompetencyRules.*;

@Controller
@RequestMapping("avicit/pb/competency")
public class CompetencyController {
    private static final Logger LOG=LoggerFactory.getLogger(CompetencyController.class);
    @Autowired private CompetencyService service;
    private final ObjectMapper json=new ObjectMapper();
    @RequestMapping(value="/manage",method=RequestMethod.GET)
    public ModelAndView manage(){return new ModelAndView("avicit/pb/competency/CompetencyManage");}
    @RequestMapping(value="/batches",method=RequestMethod.GET) @ResponseBody
    public Map<String,Object> batches(HttpServletRequest r){try{return ok("batches",service.batches(r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/batch/save",method=RequestMethod.POST) @ResponseBody
    public Map<String,Object> batchSave(@RequestParam Map<String,String> data,HttpServletRequest r){try{return ok("batch",service.saveBatch(data,r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/refresh",method=RequestMethod.POST) @ResponseBody
    public Map<String,Object> refresh(@RequestParam("batchId")String batchId,HttpServletRequest r){try{return ok("added",service.refresh(batchId,r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/overview",method=RequestMethod.GET) @ResponseBody
    public Map<String,Object> overview(@RequestParam("batchId")String batchId,HttpServletRequest r){try{return ok("summary",service.overview(batchId,r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/scores",method=RequestMethod.GET) @ResponseBody
    public Map<String,Object> scores(@RequestParam("batchId")String batchId,@RequestParam(value="keyword",defaultValue="")String keyword,@RequestParam(value="level",defaultValue="")String level,@RequestParam(value="page",defaultValue="1")int page,@RequestParam(value="size",defaultValue="20")int size,HttpServletRequest r){try{Map<String,Object> result=service.list(batchId,keyword,level,page,size,r);result.put("ok",true);return result;}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/detail",method=RequestMethod.GET) @ResponseBody
    public Map<String,Object> detail(@RequestParam("id")String id,HttpServletRequest r){try{return ok("record",service.detail(id,r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/scores/save",method=RequestMethod.POST) @ResponseBody
    public Map<String,Object> save(@RequestParam("batchId")String batchId,@RequestParam("rows")String rows,HttpServletRequest r){try{return ok("saved",service.save(batchId,json.readValue(rows,new TypeReference<List<Map<String,Object>>>(){}),r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value="/import",method=RequestMethod.POST) @ResponseBody
    public Map<String,Object> importFile(@RequestParam("batchId")String batchId,@RequestParam("file")MultipartFile file,HttpServletRequest r){try(InputStream in=file.getInputStream()){return ok("result",service.importFile(batchId,in,file.getOriginalFilename(),r));}catch(Exception e){return failure(e);}}
    @RequestMapping(value={"/template","/ledger"},method=RequestMethod.GET)
    public void excel(@RequestParam("batchId")String batchId,HttpServletRequest r,HttpServletResponse response)throws Exception{
        try{boolean template=r.getServletPath().endsWith("/template")||r.getRequestURI().endsWith("/template");Map<String,Object> batch=service.batch(batchId,r);Workbook book=CompetencyExcel.workbook(service.rows(batchId,r),template);byte[] bytes;
            try{ByteArrayOutputStream out=new ByteArrayOutputStream();book.write(out);bytes=out.toByteArray();}finally{CompetencyExcel.close(book);}
            download(response,bytes,text(batch.get("BATCH_NAME"))+(template?"-录入模板":"-测评台账")+".xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }catch(Exception e){downloadFailure(response,e);}
    }
    @RequestMapping(value="/report",method=RequestMethod.GET)
    public void report(@RequestParam("batchId")String batchId,@RequestParam(value="id",defaultValue="")String id,@RequestParam("format")String format,HttpServletRequest r,HttpServletResponse response)throws Exception{
        try{require("docx".equals(format)||"pdf".equals(format),"请选择Word或PDF格式");Map<String,Object> batch=service.batch(batchId,r);CompetencyReport.Content content;String name;
            if(id.isEmpty()){content=CompetencyReport.team(batch,service.rows(batchId,r));name="队伍报告";}else{Map<String,Object> row=service.detail(id,r);require(batchId.equals(text(row.get("BATCH_ID"))),"记录不属于当前批次");content=CompetencyReport.personal(batch,row);name=text(row.get("MEMBER_NAME"))+"-"+text(row.get("PARTY_NAME"))+"-个人报告";}
            byte[] bytes="pdf".equals(format)?CompetencyReport.pdf(content):CompetencyReport.word(content);download(response,bytes,text(batch.get("BATCH_NAME"))+"-"+name+"."+format,"pdf".equals(format)?"application/pdf":"application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        }catch(Exception e){downloadFailure(response,e);}
    }
    private void download(HttpServletResponse r,byte[] bytes,String name,String type)throws Exception{String encoded=URLEncoder.encode(name.replaceAll("[\\r\\n]",""),"UTF-8").replace("+","%20");r.setContentType(type);r.setHeader("Cache-Control","no-store");r.setHeader("Content-Disposition","attachment; filename=\""+encoded+"\"; filename*=UTF-8''"+encoded);r.setContentLength(bytes.length);r.getOutputStream().write(bytes);}
    private void downloadFailure(HttpServletResponse r,Exception e)throws Exception{r.setStatus(400);r.setContentType("application/json;charset=UTF-8");json.writeValue(r.getOutputStream(),failure(e));}
    private Map<String,Object> ok(String key,Object value){Map<String,Object> out=new LinkedHashMap<String,Object>();out.put("ok",true);out.put(key,value);return out;}
    private Map<String,Object> failure(Exception ex){Map<String,Object> out=new LinkedHashMap<String,Object>();out.put("ok",false);if(ex instanceof IllegalArgumentException)out.put("message",ex.getMessage());else{String id=UUID.randomUUID().toString();LOG.error("书记胜任力操作失败 errorId="+id,ex);out.put("message","操作失败，错误编号："+id);}return out;}
}
