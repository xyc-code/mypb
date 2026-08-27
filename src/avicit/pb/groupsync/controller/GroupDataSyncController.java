package avicit.pb.groupsync.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import avicit.pb.groupsync.service.GroupFormalDataSyncService;
import avicit.platform6.api.session.SessionHelper;

/** 同步集团数据管理入口。菜单由平台管理员按 toManage 地址手工关联。 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/groupsync/groupSyncController")
public class GroupDataSyncController {
    private static final Logger LOGGER = LoggerFactory.getLogger(GroupDataSyncController.class);
    @Autowired
    private GroupFormalDataSyncService formalService;

    @RequestMapping(value = "toManage")
    public ModelAndView toManage() {
        return new ModelAndView("avicit/pb/groupsync/GroupDataSyncManage");
    }

    @RequestMapping(value = "api/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> list(@RequestParam("type") String type,
                                    @RequestParam(value = "keyword", required = false) String keyword,
                                    @RequestParam(value = "status", required = false) String status,
                                    @RequestParam(value = "page", required = false, defaultValue = "1") int page,
                                    @RequestParam(value = "pageSize", required = false, defaultValue = "20") int pageSize,
                                    HttpServletRequest request) {
        try {
            Map<String, Object> result = formalService.list(type, keyword, status, page, pageSize,
                    orgIdentity(request), loginUser(request));
            result.put("flag", "success");
            return result;
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/get", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> get(@RequestParam("type") String type,
                                   @RequestParam("id") String id,
                                   HttpServletRequest request) {
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "success");
             map.put("data", formalService.get(type, id, orgIdentity(request), loginUser(request)));
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> save(@RequestParam("type") String type, HttpServletRequest request) {
        try {
            return data(formalService.save(type, params(request), request));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> delete(@RequestParam("type") String type,
                                      @RequestParam("id") String id,
                                      HttpServletRequest request) {
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", formalService.physicalDelete(type, id, request) > 0 ? "success" : "failure");
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/deleteBatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deleteBatch(@RequestParam("type") String type,
                                           @RequestParam("ids") String ids,
                                           HttpServletRequest request) {
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "success");
            map.put("deleted", formalService.physicalDeleteBatch(type, ids, request));
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/sync", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> sync(HttpServletRequest request) {
        try {
            formalService.assertAdministrator(loginUser(request));
            return data(formalService.sync(orgIdentity(request), loginUser(request), "MANUAL", null, request.getRemoteAddr()));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/logs", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> logs(HttpServletRequest request) {
        try {
            return rows(formalService.logs(orgIdentity(request)));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/rest/page", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> formalPage(@RequestParam("type") String type, @RequestParam(value="page",defaultValue="1") int page,
                                         @RequestParam(value="pageSize",defaultValue="20") int pageSize,
                                         @RequestParam(value="updatedAfter",required=false) String updatedAfter, HttpServletRequest request) {
        try { Map<String,Object> result = formalService.page(type,page,pageSize,parseDate(updatedAfter),request.getRemoteAddr()); result.put("flag","success"); return result; }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/rest/member", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> formalMembers(@RequestParam(value="updatedAfter",required=false) String updatedAfter,
                                            HttpServletRequest request) {
        try { Map<String,Object> result = formalService.all("member", parseDate(updatedAfter), request.getRemoteAddr()); result.put("flag","success"); return result; }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/rest/organization", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> formalOrganizations(@RequestParam(value="updatedAfter",required=false) String updatedAfter,
                                                 HttpServletRequest request) {
        try { Map<String,Object> result = formalService.all("organization", parseDate(updatedAfter), request.getRemoteAddr()); result.put("flag","success"); return result; }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/rest/health", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> formalHealth(HttpServletRequest request) {
        try { formalService.ensureFormalSchemaReady(); Map<String,Object> r=new HashMap<String,Object>(); r.put("flag","success"); r.put("service","group-formal-sync"); r.put("formalSchema","READY"); r.put("ip",request.getRemoteAddr()); return r; }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/rest/logs", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> formalLogs(@RequestParam(value="limit",defaultValue="50") int limit, HttpServletRequest request) {
        try { Map<String,Object> r=new HashMap<String,Object>(); r.put("flag","success"); r.putAll(formalService.logs(orgIdentity(request),limit)); return r; }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/rest/sync", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> formalSync(@RequestParam(value="updatedAfter",required=false) String updatedAfter, HttpServletRequest request) {
        try { formalService.assertAdministrator(loginUser(request)); return data(formalService.sync(orgIdentity(request),loginUser(request),"MANUAL",parseDate(updatedAfter),request.getRemoteAddr())); }
        catch (Exception ex) { return failure(ex); }
    }

    @RequestMapping(value = "api/exportZip", method = RequestMethod.POST)
    public void exportZip(@RequestParam(value = "type", required = false, defaultValue = "organization") String type,
                          @RequestParam(value = "ids", required = false) String ids,
                          @RequestParam(value = "keyword", required = false) String keyword,
                          @RequestParam(value = "status", required = false, defaultValue = "active") String status,
                          HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            byte[] content = formalService.exportZip(type, ids, keyword, status);
            response.reset();
            response.setContentType("application/zip");
            String downloadName = "member".equalsIgnoreCase(type) ? "集团党员数据.zip" : "集团党组织数据.zip";
            response.setHeader("Content-Disposition", "attachment;filename*=UTF-8''" + java.net.URLEncoder.encode(downloadName, "UTF-8").replace("+", "%20"));
            response.getOutputStream().write(content);
            response.getOutputStream().flush();
        } catch (Exception ex) {
            response.reset();
            response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            response.setContentType("application/json;charset=UTF-8");
            if (GroupFormalDataSyncService.isFormalSchemaNotReady(ex)) {
                response.getWriter().write("{\"flag\":\"failure\",\"errorCode\":\"FORMAL_SCHEMA_NOT_READY\",\"errorMsg\":\"集团正式表尚未安装，请执行初始化脚本并联系 DBA\"}");
            } else {
                response.getWriter().write("{\"flag\":\"failure\",\"errorCode\":\"GROUP_SYNC_ERROR\",\"errorMsg\":\"集团同步服务暂时不可用，请联系管理员\"}");
            }
        }
    }

    @RequestMapping(value = "api/import", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> importFile(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {
            return data(formalService.importFile(file, request.getRemoteAddr()));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    private Map<String, String> params(HttpServletRequest request) {
        Map<String, String> result = new HashMap<String, String>();
        Map<String, String[]> raw = request.getParameterMap();
        for (Map.Entry<String, String[]> entry : raw.entrySet()) {
            String[] values = entry.getValue();
            result.put(entry.getKey(), values == null || values.length == 0 ? "" : values[0]);
        }
        return result;
    }

    private Map<String, Object> rows(List<Map<String, Object>> rows) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "success");
        result.put("rows", rows);
        return result;
    }

    private Map<String, Object> data(Object value) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "success");
        result.put("data", value);
        return result;
    }

    private Map<String, Object> failure(Exception ex) {
        Map<String, Object> result = new HashMap<String, Object>();
        String requestId = java.util.UUID.randomUUID().toString().replace("-", "");
        LOGGER.error("group-sync request failed, requestId=" + requestId, ex);
        result.put("flag", "failure");
        result.put("requestId", requestId);
        if (avicit.pb.groupsync.service.GroupFormalDataSyncService.isFormalSchemaNotReady(ex)) { result.put("errorCode", "FORMAL_SCHEMA_NOT_READY"); result.put("errorMsg", "集团正式表尚未安装，请执行初始化脚本并联系 DBA"); }
        else { result.put("errorCode", "GROUP_SYNC_ERROR"); result.put("errorMsg", "集团同步服务暂时不可用，请联系管理员"); }
        return result;
    }

    private Date parseDate(String value) throws Exception { if (StringUtils.isBlank(value)) return null; SimpleDateFormat f=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); f.setLenient(false); return f.parse(value); }

    private String orgIdentity(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getCurrentOrgIdentity(request), "1");
    }

    private String loginUser(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getLoginSysUserId(request), "GROUP_SYNC");
    }
}
