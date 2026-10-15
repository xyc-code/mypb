package avicit.pb.twshyk.controller;

import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.List;
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
import avicit.pb.twshyk.service.TwshykAssessmentService;
import avicit.pb.twshyk.dto.TwshykAssessment;

@Controller
@RequestMapping("avicit/pb/twshyk/assessment")
public class TwshykAssessmentController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TwshykAssessmentController.class);
    @Autowired
    private TwshykAssessmentService service;

    @RequestMapping(value = "toManage", method = RequestMethod.GET)
    public ModelAndView toManage() {
        return new ModelAndView("avicit/pb/twshyk/TwshykAssessmentManage");
    }

    @RequestMapping(value = "years", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> years(HttpServletResponse response) {
        try {
            LocalDate today = LocalDate.now();
            List<Integer> years = service.years(SessionHelper.getCurrentOrgIdentity());
            Map<String, Object> result = success(years, today);
            Integer defaultYear = years.isEmpty() ? null : years.get(0);
            if (years.contains(today.getYear())) defaultYear = today.getYear();
            result.put("defaultYear", defaultYear);
            response.setHeader("Cache-Control", "no-store");
            return result;
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    @RequestMapping(value = "list", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> list(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "page", defaultValue = "1") String page,
            @RequestParam(value = "rows", defaultValue = "20") String rows, HttpServletResponse response) {
        try {
            return assess(integer(year, "year"), null, integer(page, "page"), integer(rows, "rows"), response);
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    @RequestMapping(value = "detail", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> detail(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "leagueId", required = false) String leagueId, HttpServletResponse response) {
        try {
            if (leagueId == null || leagueId.trim().isEmpty()) throw new IllegalArgumentException("请选择团组织");
            return assess(integer(year, "year"), leagueId, 1, 20, response);
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    private Map<String, Object> assess(int year, String leagueId, int page, int rows, HttpServletResponse response) {
        try {
            LocalDate today = LocalDate.now();
            Map<String, Object> result;
            if (leagueId == null) {
                TwshykAssessment.Page paged = service.page(year, SessionHelper.getCurrentOrgIdentity(), page, rows, today);
                result = success(paged.data, today);
                result.put("page", paged.page);
                result.put("total", paged.total);
                result.put("records", paged.records);
            } else {
                result = success(service.assess(year, SessionHelper.getCurrentOrgIdentity(), leagueId, today), today);
            }
            result.put("year", year);
            result.put("cycleStart", LocalDate.of(year - 1, 11, 1).toString());
            result.put("cycleEnd", LocalDate.of(year, 10, 31).toString());
            result.put("annualStart", result.get("cycleStart"));
            result.put("annualEnd", result.get("cycleEnd"));
            response.setHeader("Cache-Control", "no-store");
            return result;
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    private Map<String, Object> success(Object data, LocalDate today) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "success");
        result.put("data", data);
        result.put("asOfDate", today.toString());
        return result;
    }

    private Map<String, Object> failure(Exception ex, HttpServletResponse response) {
        LOGGER.error("团委三会一课考核查询失败", ex);
        response.setStatus(ex instanceof IllegalArgumentException ? 400 : 500);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "failure");
        result.put("message", ex instanceof IllegalArgumentException ? ex.getMessage() : "考核查询失败，请联系管理员");
        return result;
    }

    private static int integer(String value, String name) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(name + "须提供有效整数", ex);
        }
    }
}
