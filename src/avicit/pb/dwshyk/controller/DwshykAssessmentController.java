package avicit.pb.dwshyk.controller;

import java.time.LocalDate;
import java.time.ZoneId;
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
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO;
import avicit.pb.dwshyk.service.DwshykAssessmentService;

@Controller
@RequestMapping("avicit/pb/dwshyk/assessment")
public class DwshykAssessmentController {
    private static final Logger LOGGER = LoggerFactory.getLogger(DwshykAssessmentController.class);
    private static final ZoneId ZONE = ZoneId.of("Asia/Shanghai");
    @Autowired
    private DwshykAssessmentService service;

    @RequestMapping(value = "toManage", method = RequestMethod.GET)
    public ModelAndView toManage() {
        ModelAndView view = new ModelAndView("avicit/pb/dwshyk/DwshykAssessmentManage");
        view.addObject("defaultYear", LocalDate.now(ZONE).getYear());
        return view;
    }

    @RequestMapping(value = "years", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> years(HttpServletResponse response) {
        try {
            LocalDate today = LocalDate.now(ZONE);
            Map<String, Object> result = success(service.years(today), today.getYear(), today, response);
            result.put("defaultYear", today.getYear());
            return result;
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> list(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "page", defaultValue = "1") String page,
            @RequestParam(value = "rows", defaultValue = "20") String rows, HttpServletResponse response) {
        try {
            int selectedYear = integer(year, "year");
            LocalDate today = LocalDate.now(ZONE);
            DwshykAssessmentDTO.Page data = service.page(selectedYear, integer(page, "page"), integer(rows, "rows"), today);
            Map<String, Object> result = success(data.data, selectedYear, today, response);
            result.put("page", data.page);
            result.put("total", data.total);
            result.put("records", data.records);
            return result;
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    @RequestMapping(value = "detail", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> detail(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "partyId", required = false) String partyId, HttpServletResponse response) {
        try {
            int selectedYear = integer(year, "year");
            LocalDate today = LocalDate.now(ZONE);
            return success(service.detail(selectedYear, partyId, today), selectedYear, today, response);
        } catch (Exception ex) {
            return failure(ex, response);
        }
    }

    private Map<String, Object> success(Object data, int year, LocalDate today, HttpServletResponse response) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "success");
        result.put("data", data);
        result.put("year", year);
        result.put("asOfDate", today.toString());
        result.put("cycleStart", LocalDate.of(year - 1, 10, 1).toString());
        result.put("cycleEnd", LocalDate.of(year, 9, 30).toString());
        response.setHeader("Cache-Control", "no-store");
        return result;
    }

    private Map<String, Object> failure(Exception ex, HttpServletResponse response) {
        LOGGER.error("党委三会一课考核查询失败", ex);
        response.setStatus(ex instanceof IllegalArgumentException ? 400 : 500);
        response.setHeader("Cache-Control", "no-store");
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
