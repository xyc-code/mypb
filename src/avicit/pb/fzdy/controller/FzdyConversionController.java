package avicit.pb.fzdy.controller;

import avicit.pb.fzdy.service.FzdyAccessService;
import avicit.pb.fzdy.service.FzdyConversionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
@RequestMapping("avicit/pb/fzdy/conversion")
public class FzdyConversionController {
    private static final Logger LOGGER = LoggerFactory.getLogger(FzdyConversionController.class);
    @Autowired
    private FzdyAccessService access;
    @Autowired
    private FzdyConversionService service;

    @RequestMapping(value = "convert", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public Map<String, Object> convert(@RequestBody String[] ids, HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-store");
        try {
            return service.convert(ids, access.authorize(request));
        } catch (SecurityException ex) {
            return error(response, 403, ex.getMessage());
        } catch (IllegalArgumentException ex) {
            return error(response, 400, ex.getMessage());
        } catch (Exception ex) {
            LOGGER.error("发展党员转换配置或权限读取失败", ex);
            return error(response, 500, "转换服务未就绪，请管理员核对视图编码、数据授权和部署日志。");
        }
    }

    private Map<String, Object> error(HttpServletResponse response, int status, String message) {
        response.setStatus(status);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("ok", false);
        result.put("message", message);
        return result;
    }
}
