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

import avicit.pb.groupsync.service.GroupDataSyncService;
import avicit.platform6.api.session.SessionHelper;

/** 同步集团数据管理入口。菜单由平台管理员按 toManage 地址手工关联。 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/groupsync/groupSyncController")
public class GroupDataSyncController {
    @Autowired
    private GroupDataSyncService service;

    @Autowired
    private avicit.pb.groupsync.service.GroupFormalDataSyncService formalService;

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
        return deprecated();
        /*
        try {
            Map<String, Object> result = service.list(type, keyword, status, page, pageSize,
                    orgIdentity(request), loginUser(request));
            result.put("flag", "success");
            return result;
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/get", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> get(@RequestParam("type") String type,
                                   @RequestParam("id") String id,
                                   HttpServletRequest request) {
        return deprecated();
        /*
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "success");
             map.put("data", service.get(type, id, orgIdentity(request), loginUser(request)));
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> save(@RequestParam("type") String type, HttpServletRequest request) {
        return deprecated();
        /*
        try {
            return data(service.save(type, params(request), request));
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> delete(@RequestParam("type") String type,
                                      @RequestParam("id") String id,
                                      HttpServletRequest request) {
        return deprecated();
        /*
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", service.physicalDelete(type, id, request) > 0 ? "success" : "failure");
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/deleteBatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deleteBatch(@RequestParam("type") String type,
                                           @RequestParam("ids") String ids,
                                           HttpServletRequest request) {
        return deprecated();
        /*
        try {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "success");
            map.put("deleted", service.physicalDeleteBatch(type, ids, request));
            return map;
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/sync", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> sync(HttpServletRequest request) {
        try {
            service.assertAdministrator(loginUser(request));
            return data(service.sync(orgIdentity(request), loginUser(request), "MANUAL"));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    /** 数据中心只读分页接口；按内网白名单开放，记录调用 IP。 */
    @RequestMapping(value = "api/rest/page", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> formalPage(@RequestParam("type") String type,
                                          @RequestParam(value = "page", required = false, defaultValue = "1") int page,
                                          @RequestParam(value = "pageSize", required = false, defaultValue = "20") int pageSize,
                                          @RequestParam(value = "updatedAfter", required = false) String updatedAfter,
                                          HttpServletRequest request) {
        try {
            Date since = parseDate(updatedAfter);
            Map<String, Object> result = formalService.page(type, page, pageSize, since, request.getRemoteAddr());
            result.put("flag", "success");
            return result;
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/rest/sync", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> formalSync(@RequestParam(value = "updatedAfter", required = false) String updatedAfter,
                                          HttpServletRequest request) {
        try {
            service.assertAdministrator(loginUser(request));
            Date since = parseDate(updatedAfter);
            return data(formalService.sync(orgIdentity(request), loginUser(request), "MANUAL", since, request.getRemoteAddr()));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "api/rest/health", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> formalHealth(HttpServletRequest request) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "success"); result.put("service", "group-formal-sync");
        result.put("ip", request.getRemoteAddr()); result.put("timestamp", new Date());
        return result;
    }

    @RequestMapping(value = "api/rest/logs", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> formalLogs(@RequestParam(value = "limit", required = false, defaultValue = "50") int limit,
                                          HttpServletRequest request) {
        try { Map<String, Object> result = formalService.logs(orgIdentity(request), limit); result.put("flag", "success"); return result; }
        catch (Exception ex) { return failure(ex); }
    }

    private Date parseDate(String value) throws Exception {
        if (StringUtils.isBlank(value)) { return null; }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format.setLenient(false);
        return format.parse(value);
    }

    @RequestMapping(value = "api/logs", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> logs(HttpServletRequest request) {
        return deprecated();
        /*
        try {
            return rows(service.logs(orgIdentity(request)));
        } catch (Exception ex) {
            return failure(ex);
        }
        */
    }

    @RequestMapping(value = "api/exportZip", method = RequestMethod.POST)
    public void exportZip(@RequestParam(value = "type", required = false, defaultValue = "organization") String type,
                          @RequestParam(value = "ids", required = false) String ids,
                          @RequestParam(value = "keyword", required = false) String keyword,
                          @RequestParam(value = "status", required = false, defaultValue = "active") String status,
                          HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.sendError(HttpServletResponse.SC_GONE, "旧 DYN 导出接口已停用");
    }

    @RequestMapping(value = "api/import", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> importFile(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        return deprecated();
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
        result.put("flag", "failure");
        result.put("errorMsg", StringUtils.defaultIfBlank(ex.getMessage(), ex.toString()));
        return result;
    }

    private Map<String, Object> deprecated() {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "failure");
        result.put("errorMsg", "旧 DYN 集团镜像接口已停用，请使用正式表只读分页和同步接口");
        return result;
    }

    private String orgIdentity(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getCurrentOrgIdentity(request), "1");
    }

    private String loginUser(HttpServletRequest request) {
        return StringUtils.defaultIfBlank(SessionHelper.getLoginSysUserId(request), "GROUP_SYNC");
    }
}
