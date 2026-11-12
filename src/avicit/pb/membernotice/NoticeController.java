package avicit.pb.membernotice;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import avicit.platform6.api.session.SessionHelper;
import javax.servlet.http.*;
import java.net.URLEncoder;
import java.util.*;

@Controller
@RequestMapping("avicit/pb/membernotice")
public class NoticeController {
    private static final Logger LOG = LoggerFactory.getLogger(NoticeController.class);
    @Autowired private NoticeService service;
    private final ObjectMapper json = new ObjectMapper();
    @RequestMapping(value="/manage", method=RequestMethod.GET)
    public ModelAndView manage() { return new ModelAndView("avicit/pb/membernotice/NoticeManage"); }

    @RequestMapping(value="/add", method=RequestMethod.GET)
    public ModelAndView add() { return new ModelAndView("avicit/pb/membernotice/NoticeAdd"); }

    @RequestMapping(value="/member", method=RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> member(@RequestParam("userId") String userId, HttpServletRequest request) {
        try { Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("member", service.memberByUser(userId, request)); return ok(result);
        } catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/create", method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> create(@RequestParam Map<String, String> data, HttpServletRequest request) {
        try { Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("id", service.create(data, request)); return ok(result);
        } catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value="/form", method=RequestMethod.GET)
    public ModelAndView form(HttpServletRequest request) {
        try {
            Map<String, Object> row = service.detail(request.getParameter("id"), request, true);
            return new ModelAndView("avicit/pb/membernotice/NoticeForm", "notice", row)
                    .addObject("noticeTask", !NoticeRules.text(request.getParameter("entryId")).isEmpty());
        } catch (Exception ex) { return new ModelAndView("avicit/pb/membernotice/NoticeError", "noticeError", failure(ex).get("message")); }
    }
    @RequestMapping(value="/list", method=RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> list(@RequestParam(value="keyword", defaultValue="") String keyword,
            @RequestParam(value="type", defaultValue="") String type, @RequestParam(value="state", defaultValue="") String state,
            @RequestParam(value="page", defaultValue="1") int page, @RequestParam(value="size", defaultValue="20") int size,
            HttpServletRequest request) {
        try { return ok(service.list(keyword, type, state, page, size, request)); } catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/eligible-ids", method=RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> eligible(@RequestParam(value="keyword", defaultValue="") String keyword,
            @RequestParam(value="type", defaultValue="") String type, @RequestParam(value="state", defaultValue="") String state,
            HttpServletRequest request) {
        try { Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("ids", service.eligibleIds(keyword, type, state, request)); return ok(result);
        } catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/detail", method=RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> detail(@RequestParam("id") String id, HttpServletRequest request) {
        try { Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("notice", service.detail(id, request, false)); return ok(result);
        } catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/template", method=RequestMethod.GET)
    public void template(HttpServletRequest request, HttpServletResponse response) throws Exception {
        NoticeRules.require(!NoticeRules.text(SessionHelper.getLoginSysUserId(request)).isEmpty(), "请先登录");
        String type = NoticeRules.text(request.getParameter("type"));
        Workbook book = NoticeExcel.template(type);
        try {
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            String filename = URLEncoder.encode(("probation".equals(type) ? "预备党员" : "formal".equals(type) ? "正式党员" : "党员发送阅知") + "导入模板.xlsx", "UTF-8").replace("+", "%20");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + filename);
            book.write(response.getOutputStream());
        } finally { ((XSSFWorkbook) book).getPackage().close(); }
    }
    @RequestMapping(value="/import", method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> importFile(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try (java.io.InputStream in = file.getInputStream()) {
            return ok(service.importFile(in, file.getOriginalFilename(), request));
        } catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/start", method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> start(@RequestParam("ids") String ids, HttpServletRequest request) {
        try { return ok(service.start(json.readValue(ids, new TypeReference<List<String>>() { }), request)); }
        catch (Exception ex) { return failure(ex); }
    }
    @RequestMapping(value="/delete", method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> delete(@RequestParam("ids") String ids, HttpServletRequest request) {
        try { return ok(service.deleteDrafts(json.readValue(ids, new TypeReference<List<String>>() { }), request)); }
        catch (Exception ex) { return failure(ex); }
    }
    private Map<String, Object> ok(Map<String, Object> result) { result.put("ok", true); return result; }
    private Map<String, Object> failure(Exception ex) {
        Map<String, Object> result = new LinkedHashMap<String, Object>(); result.put("ok", false);
        if (ex instanceof IllegalArgumentException) result.put("message", ex.getMessage());
        else {
            String error = UUID.randomUUID().toString(); LOG.error("党员发送阅知操作错误 errorId=" + error, ex);
            result.put("message", "操作失败，请凭错误编号查询日志：" + error);
        }
        return result;
    }
}
