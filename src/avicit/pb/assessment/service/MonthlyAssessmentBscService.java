package avicit.pb.assessment.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import avicit.pb.assessment.dao.MonthlyAssessmentDAO;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Department;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;

/** Aggregates saved monthly deductions for the balance scorecard endpoint. */
@Service
public class MonthlyAssessmentBscService {
    public static final String ORG_ROOT = "ORG_ROOT";
    private static final ObjectMapper JSON = new ObjectMapper();

    @Autowired
    private MonthlyAssessmentDAO dao;

    public List<Map<String, Object>> results(int year, int month) throws Exception {
        MonthlyAssessmentService.month(year, month);
        return aggregate(dao.findAllForBsc(ORG_ROOT, year, month));
    }

    static List<Map<String, Object>> aggregate(List<MonthlyAssessmentResult> source) throws Exception {
        if (source == null || source.isEmpty()) return Collections.emptyList();
        Map<String, Aggregate> aggregates = new LinkedHashMap<String, Aggregate>();
        for (MonthlyAssessmentResult result : source) {
            if (result == null) continue;
            List<Department> departments = result.departments == null
                    ? Collections.<Department>emptyList() : result.departments;
            if (departments.isEmpty()) {
                String departmentId = trimToNull(result.departmentId);
                String departmentName = trimToNull(result.departmentName);
                String key = departmentId == null
                        ? departmentName == null ? "RESULT:" + safe(result.id) : "NAME:" + departmentName
                        : "ID:" + departmentId;
            add(aggregates, result, departmentName, key);
            } else {
                for (Department department : departments) {
                    if (department == null) continue;
                    String id = trimToNull(department.id);
                    String name = trimToNull(department.name);
                    if (id == null && name == null) continue;
                    String key = id == null ? "NAME:" + name : "ID:" + id;
                    add(aggregates, result, name, key);
                }
            }
        }
        List<Map<String, Object>> response = new ArrayList<Map<String, Object>>();
        for (Aggregate aggregate : aggregates.values()) response.add(aggregate.toMap());
        return response;
    }

    private static void add(Map<String, Aggregate> aggregates, MonthlyAssessmentResult result,
            String departmentName, String key) throws Exception {
        Aggregate aggregate = aggregates.get(key);
        if (aggregate == null) {
            aggregate = new Aggregate(departmentName, result.year, result.month);
            aggregates.put(key, aggregate);
        } else if (aggregate.departmentName == null) {
            aggregate.departmentName = trimToNull(departmentName);
        }
        aggregate.totalScore = aggregate.totalScore.add(score(result));
        List<Reason> reasons = parseReasons(result.reasonDetail);
        for (Reason reason : reasons) {
            if (reason != null && trimToNull(reason.reason) != null) {
                aggregate.reasons.add(reason.reason.trim());
            }
        }
    }

    private static BigDecimal score(MonthlyAssessmentResult result) throws Exception {
        if (result.resultScore != null) return result.resultScore;
        BigDecimal total = BigDecimal.ZERO;
        for (Reason reason : parseReasons(result.reasonDetail)) {
            if (reason != null && reason.scoreChange != null) total = total.add(reason.scoreChange);
        }
        return total;
    }

    private static List<Reason> parseReasons(String detail) throws Exception {
        if (trimToNull(detail) == null) return Collections.emptyList();
        List<Reason> reasons = JSON.readValue(detail, new TypeReference<List<Reason>>() { });
        return reasons == null ? Collections.<Reason>emptyList() : reasons;
    }

    private static String safe(String value) {
        return value == null ? "" : value;
    }

    private static String trimToNull(String value) {
        return value == null || value.trim().isEmpty() ? null : value.trim();
    }

    private static final class Aggregate {
        private String departmentName;
        private final int year;
        private final int month;
        private BigDecimal totalScore = BigDecimal.ZERO;
        private final List<String> reasons = new ArrayList<String>();

        private Aggregate(String departmentName, int year, int month) {
            this.departmentName = trimToNull(departmentName);
            this.year = year;
            this.month = month;
        }

        private Map<String, Object> toMap() {
            Map<String, Object> row = new LinkedHashMap<String, Object>();
            row.put("deptName", departmentName);
            row.put("reason", joinReasons(reasons));
            row.put("month", String.valueOf(month));
            row.put("year", String.valueOf(year));
            row.put("totalScore", totalScore);
            return row;
        }

        private static String joinReasons(List<String> reasons) {
            StringBuilder value = new StringBuilder();
            for (String reason : reasons) {
                if (value.length() > 0) value.append('\n');
                value.append(reason);
            }
            return value.toString();
        }
    }
}
