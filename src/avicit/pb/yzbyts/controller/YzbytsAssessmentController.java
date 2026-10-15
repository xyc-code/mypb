package avicit.pb.yzbyts.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
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
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO;
import avicit.pb.yzbyts.service.YzbytsAssessmentCalculator;
import avicit.pb.yzbyts.service.YzbytsAssessmentService;

@Controller
@RequestMapping("avicit/pb/yzbyts/assessment")
public class YzbytsAssessmentController {
    private static final Logger LOGGER = LoggerFactory.getLogger(YzbytsAssessmentController.class);
    private static final ZoneId TIME_ZONE = ZoneId.of("Asia/Shanghai");
    @Autowired
    private YzbytsAssessmentService service;

    @RequestMapping(value = "toManage", method = RequestMethod.GET)
    public ModelAndView toManage() {
        return new ModelAndView("avicit/pb/yzbyts/YzbytsAssessmentManage");
    }

    @RequestMapping(value = "years", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> years(HttpServletResponse response) {
        try {
            LocalDateTime now = LocalDateTime.now(TIME_ZONE);
            List<Integer> years = service.years(now);
            Map<String, Object> result = success(years, now, response);
            result.put("defaultYear", now.getYear());
            result.put("assessmentStart", service.assessmentStart(now.getYear()));
            return result;
        } catch (Exception ex) { return failure(ex, response); }
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> list(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "partyName", required = false) String partyName,
            @RequestParam(value = "page", defaultValue = "1") String page,
            @RequestParam(value = "rows", defaultValue = "20") String rows, HttpServletResponse response) {
        try {
            LocalDateTime now = LocalDateTime.now(TIME_ZONE);
            int selectedYear = integer(year, "year");
            YzbytsAssessmentDTO.Page data = service.page(selectedYear, partyName,
                    integer(page, "page"), integer(rows, "rows"), now);
            Map<String, Object> result = success(data.data, now, response);
            result.put("page", data.page);
            result.put("total", data.total);
            result.put("records", data.records);
            result.put("year", selectedYear);
            result.put("assessmentStart", data.assessmentStart);
            return result;
        } catch (Exception ex) { return failure(ex, response); }
    }

    @RequestMapping(value = "detail", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> detail(@RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "partyId", required = false) String partyId, HttpServletResponse response) {
        try {
            LocalDateTime now = LocalDateTime.now(TIME_ZONE);
            int selectedYear = integer(year, "year");
            YzbytsAssessmentDTO data = service.detail(selectedYear, partyId, now);
            Map<String, Object> result = success(data, now, response);
            result.put("year", selectedYear);
            result.put("assessmentStart", data.assessmentStart);
            return result;
        } catch (Exception ex) { return failure(ex, response); }
    }

    private Map<String, Object> success(Object data, LocalDateTime now, HttpServletResponse response) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "success");
        result.put("data", data);
        result.put("asOfDate", YzbytsAssessmentCalculator.DATE_TIME.format(now));
        response.setHeader("Cache-Control", "no-store");
        return result;
    }

    private Map<String, Object> failure(Exception ex, HttpServletResponse response) {
        LOGGER.error("一支部一特色考核失败", ex);
        response.setStatus(ex instanceof IllegalArgumentException ? 400 : 500);
        response.setHeader("Cache-Control", "no-store");
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "failure");
        result.put("message", ex instanceof IllegalArgumentException ? ex.getMessage() : "考核失败，请联系管理员");
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
