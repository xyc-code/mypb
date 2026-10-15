package avicit.pb.assessment.controller;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import avicit.platform6.api.session.SessionHelper;
import avicit.pb.assessment.service.MonthlyAssessmentService;

@Controller
@RequestMapping("avicit/pb/assessment")
public class MonthlyAssessmentController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MonthlyAssessmentController.class);
    @Autowired
    private MonthlyAssessmentService service;

    @RequestMapping(value = "toManage", method = RequestMethod.GET)
    public ModelAndView toManage() {
        YearMonth month = MonthlyAssessmentService.previousMonth(LocalDate.now(MonthlyAssessmentService.ZONE));
        ModelAndView view = new ModelAndView("avicit/pb/assessment/MonthlyAssessmentManage");
        view.addObject("defaultYear", month.getYear());
        view.addObject("defaultMonth", month.getMonthValue());
        return view;
    }

    @RequestMapping(value = "options", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> options(HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-store");
        try {
            return service.options(SessionHelper.getCurrentOrgIdentity());
        } catch (Exception ex) {
            LOGGER.error("月度考核筛选项查询失败", ex);
            response.setStatus(ex instanceof IllegalArgumentException ? 400 : 500);
            Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("flag", "failure");
            result.put("message", ex instanceof IllegalArgumentException ? ex.getMessage() : "查询失败，请联系管理员");
            return result;
        }
    }

    @RequestMapping(value = "results", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> results(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "month", required = false) String month,
            @RequestParam(value = "departmentId", required = false) String departmentId,
            @RequestParam(value = "categoryCode", required = false) String categoryCode,
            @RequestParam(value = "moduleCode", required = false) String moduleCode,
            @RequestParam(value = "page", defaultValue = "1") String page,
            @RequestParam(value = "pageSize", defaultValue = "20") String pageSize,
            HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-store");
        try {
            return service.page(SessionHelper.getCurrentOrgIdentity(), integer(year, "year"), integer(month, "month"),
                    departmentId, categoryCode, moduleCode, integer(page, "page"), integer(pageSize, "pageSize"));
        } catch (Exception ex) {
            LOGGER.error("月度考核结果查询失败", ex);
            response.setStatus(ex instanceof IllegalArgumentException ? 400 : 500);
            Map<String, Object> result = new LinkedHashMap<String, Object>();
            result.put("flag", "failure");
            result.put("message", ex instanceof IllegalArgumentException ? ex.getMessage() : "查询失败，请联系管理员");
            return result;
        }
    }

    private static int integer(String value, String name) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(name + "须提供有效整数", ex);
        }
    }
}
