package avicit.pb.excelexportconfig.controller;

import avicit.pb.excelexportconfig.service.ExcelExportConfigService;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/excelexportconfig/excelExportConfigController")
public class ExcelExportConfigController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExcelExportConfigController.class);

    @Autowired
    private ExcelExportConfigService excelExportConfigService;

    @RequestMapping(value = "toExcelExportConfigManage")
    public ModelAndView toExcelExportConfigManage() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/excelexportconfig/ExcelExportConfigManage");
        mav.addObject("url", "platform/avicit/pb/excelexportconfig/excelExportConfigController/operation/");
        return mav;
    }

    @RequestMapping(value = "/operation/currentUser", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> currentUser(HttpServletRequest request) {
        return success(excelExportConfigService.currentUser(request));
    }

    @RequestMapping(value = "/operation/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> list(HttpServletRequest request) {
        try {
            return excelExportConfigService.listConfigs(request);
        } catch (Exception e) {
            LOGGER.error("list excel export config error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/detail", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> detail(HttpServletRequest request) {
        try {
            return success(excelExportConfigService.detail(ServletRequestUtils.getStringParameter(request, "id", "")));
        } catch (Exception e) {
            LOGGER.error("detail excel export config error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> save(HttpServletRequest request) {
        try {
            String data = ServletRequestUtils.getStringParameter(request, "data", "");
            String id = excelExportConfigService.save(data, request);
            Map<String, Object> body = new HashMap<String, Object>();
            body.put("id", id);
            return success(body);
        } catch (Exception e) {
            LOGGER.error("save excel export config error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> delete(HttpServletRequest request) {
        try {
            String text = ServletRequestUtils.getStringParameter(request, "ids", "");
            String[] ids = StringUtils.isBlank(text) ? new String[0] : text.split(",");
            excelExportConfigService.delete(ids);
            return success(null);
        } catch (Exception e) {
            LOGGER.error("delete excel export config error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/tables", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> tables(HttpServletRequest request) {
        try {
            List<Map<String, Object>> rows = excelExportConfigService.listTables(ServletRequestUtils.getStringParameter(request, "keyWord", ""));
            return rows(rows);
        } catch (Exception e) {
            LOGGER.error("list table metadata error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/columns", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> columns(HttpServletRequest request) {
        try {
            List<Map<String, Object>> rows = excelExportConfigService.listColumns(ServletRequestUtils.getStringParameter(request, "tableName", ""));
            return rows(rows);
        } catch (Exception e) {
            LOGGER.error("list column metadata error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/childConfigs", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> childConfigs(HttpServletRequest request) {
        try {
            List<Map<String, Object>> rows = excelExportConfigService.listChildConfigs(ServletRequestUtils.getStringParameter(request, "keyWord", ""));
            return rows(rows);
        } catch (Exception e) {
            LOGGER.error("list child configs error", e);
            return failure(e);
        }
    }

    @RequestMapping(value = "/operation/export")
    public void exportFromManage(HttpServletRequest request, HttpServletResponse response) {
        export(request, response);
    }

    @RequestMapping(value = "/api/export")
    public void export(HttpServletRequest request, HttpServletResponse response) {
        OutputStream os = null;
        try {
            String code = ServletRequestUtils.getStringParameter(request, "code", "");
            String id = ServletRequestUtils.getStringParameter(request, "id", "");
            if (StringUtils.isBlank(id)) {
                id = ServletRequestUtils.getStringParameter(request, "ids", "");
            }
            byte[] bytes = excelExportConfigService.exportByConfigMulti(code, id);
            String fileName = URLEncoder.encode(excelExportConfigService.exportFileName(code), "UTF-8").replace("+", "%20");
            response.reset();
            response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8");
            response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
            os = response.getOutputStream();
            os.write(bytes);
            os.flush();
        } catch (Exception e) {
            LOGGER.error("export excel by config error", e);
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            try {
                response.setContentType("text/plain;charset=UTF-8");
                response.getWriter().write(e.getMessage());
                response.getWriter().flush();
            } catch (Exception ignored) {
            }
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (Exception e) {
                    LOGGER.error("close export stream error", e);
                }
            }
        }
    }

    private Map<String, Object> rows(List<Map<String, Object>> rows) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", OpResult.success);
        result.put("rows", rows);
        result.put("total", rows == null ? 0 : rows.size());
        return result;
    }

    private Map<String, Object> success(Object data) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", OpResult.success);
        if (data instanceof Map) {
            result.putAll((Map<String, Object>) data);
        } else if (data != null) {
            result.put("data", data);
        }
        return result;
    }

    private Map<String, Object> failure(Exception e) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", OpResult.failure);
        result.put("errorMsg", e.getMessage());
        return result;
    }
}
