package avicit.platform6.rljcRest;

import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import avicit.pb.assessment.service.MonthlyAssessmentBscService;

/** Read-only monthly assessment aggregation for the balance scorecard. */
@RestController
@RequestMapping("/api/avicit/pb/member/partyMember/rest")
public class MonthlyAssessmentRest {
    private static final Logger LOGGER = LoggerFactory.getLogger(MonthlyAssessmentRest.class);

    @Autowired
    private MonthlyAssessmentBscService service;

    @GetMapping(value = "/monthAssessment/{year}/{month}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> monthAssessment(@PathVariable("year") String year,
            @PathVariable("month") String month, HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-store");
        try {
            return ResponseEntity.ok(service.results(parse(year, "year"), parse(month, "month")));
        } catch (IllegalArgumentException ex) {
            return error(HttpStatus.BAD_REQUEST, ex.getMessage());
        } catch (Exception ex) {
            LOGGER.error("平衡积分卡月度考核结果查询失败", ex);
            return error(HttpStatus.INTERNAL_SERVER_ERROR, "查询失败，请联系管理员");
        }
    }

    private static int parse(String value, String name) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(name + "须提供有效整数", ex);
        }
    }

    private static ResponseEntity<Map<String, Object>> error(HttpStatus status, String message) {
        Map<String, Object> body = new LinkedHashMap<String, Object>();
        body.put("flag", "failure");
        body.put("message", message == null ? "查询失败，请联系管理员" : message);
        return ResponseEntity.status(status).body(body);
    }
}
