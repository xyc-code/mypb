package avicit.pb.excelexportconfig.controller;

import avicit.pb.excelexportconfig.service.ExcelExportConfigService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.net.URLEncoder;

@Controller
@Scope("prototype")
@RequestMapping("api/pb/excelExportConfig/")
public class ExcelExportApiController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExcelExportApiController.class);

    @Autowired
    private ExcelExportConfigService excelExportConfigService;

    @RequestMapping(value = "export")
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
            LOGGER.error("export excel by config api error", e);
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
}
