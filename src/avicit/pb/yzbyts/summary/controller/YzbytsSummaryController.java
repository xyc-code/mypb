package avicit.pb.yzbyts.summary.controller;

import avicit.pb.yzbyts.summary.service.YzbytsSummaryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("avicit/pb/yzbyts/summary")
public class YzbytsSummaryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(YzbytsSummaryController.class);

    @Autowired
    private YzbytsSummaryService service;

    @RequestMapping(value = "toManage", method = RequestMethod.GET)
    public ModelAndView toManage() {
        return new ModelAndView("avicit/pb/yzbyts/YzbytsSummaryManage");
    }

    @RequestMapping(value = "toEdit", method = RequestMethod.GET)
    public ModelAndView toEdit() {
        return new ModelAndView("avicit/pb/yzbyts/YzbytsSummaryEdit");
    }

    @RequestMapping(value = "config", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> config(@RequestParam(value = "year", required = false) String year) {
        try {
            return success(service.config(resolveYear(year)));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> list(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "partyName", required = false) String partyName,
            @RequestParam(value = "status", required = false) String status,
            @RequestParam(value = "page", defaultValue = "1") String page,
            @RequestParam(value = "rows", defaultValue = "20") String rows) {
        try {
            return success(service.list(resolveYear(year), partyName, status, integer(page, "页码"), integer(rows, "每页条数")));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "get", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> get(@RequestParam(value = "year", required = false) String year,
            @RequestParam("partyId") String partyId) {
        try {
            return success(service.get(resolveYear(year), partyId));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> save(HttpServletRequest request) {
        try {
            return success(service.save(params(request), request));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "submit", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submit(HttpServletRequest request) {
        try {
            return success(service.submit(params(request), request));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "upload", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> upload(@RequestParam("summaryId") String summaryId,
            @RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {
            return success(service.upload(summaryId, file, request));
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "deleteFile", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deleteFile(@RequestParam("fileId") String fileId) {
        try {
            service.deleteFile(fileId);
            return success(null);
        } catch (Exception ex) {
            return failure(ex);
        }
    }

    @RequestMapping(value = "download", method = RequestMethod.GET)
    public void download(@RequestParam("fileId") String fileId,
            @RequestParam(value = "inline", defaultValue = "false") boolean inline, HttpServletResponse response) throws Exception {
        service.download(fileId, inline, response);
    }

    @RequestMapping(value = "export", method = RequestMethod.GET)
    public void export(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "partyName", required = false) String partyName,
            @RequestParam(value = "status", required = false) String status,
            HttpServletResponse response) throws Exception {
        try {
            int exportYear = resolveYear(year);
            byte[] bytes = service.export(exportYear, partyName, status);
            response.reset();
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.setHeader("Content-Disposition", "attachment;filename*=UTF-8''"
                    + URLEncoder.encode(exportYear + "年一支部一特色年度总结.xlsx", "UTF-8").replace("+", "%20"));
            response.setContentLength(bytes.length);
            response.getOutputStream().write(bytes);
            response.getOutputStream().flush();
        } catch (Exception ex) {
            LOGGER.error("导出一支部一特色年度总结失败", ex);
            response.reset();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().write("{\"flag\":\"failure\",\"message\":\"导出失败，请联系管理员\"}");
        }
    }

    private Map<String, Object> success(Object data) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "success");
        if (data != null) result.put("data", data);
        return result;
    }

    private Map<String, Object> failure(Exception ex) {
        LOGGER.error("一支部一特色年度总结请求失败", ex);
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "failure");
        result.put("message", ex instanceof IllegalArgumentException ? ex.getMessage() : "操作失败，请联系管理员");
        return result;
    }

    private Map<String, String> params(HttpServletRequest request) {
        Map<String, String> result = new HashMap<String, String>();
        for (Map.Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
            String[] values = entry.getValue();
            result.put(entry.getKey(), values == null || values.length == 0 ? "" : values[0]);
        }
        return result;
    }

    private int resolveYear(String year) {
        return year == null || year.trim().isEmpty() ? service.latestYear() : integer(year.trim(), "年度");
    }

    private static int integer(String value, String label) {
        try {
            return Integer.parseInt(value);
        } catch (Exception ex) {
            throw new IllegalArgumentException(label + "须提供有效整数", ex);
        }
    }
}
