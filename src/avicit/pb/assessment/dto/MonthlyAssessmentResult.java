package avicit.pb.assessment.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** One organization's result for one module and natural month. */
public class MonthlyAssessmentResult {
    public String id;
    public String orgIdentity;
    public String categoryCode;
    public String moduleCode;
    public String moduleName;
    public String ruleVersion;
    public String assessmentOrgId;
    public String assessmentOrgName;
    public String departmentId;
    public String departmentName;
    public List<Department> departments = new ArrayList<Department>();
    public int year;
    public int month;
    public String resultKind;
    public BigDecimal resultScore;
    public List<Reason> reasons = new ArrayList<Reason>();

    // Persistence fields; the query service explicitly projects the public response.
    public String reasonDetail;
    public Date calculatedAt;
    public long version;

    /** Department selectors use semicolons; older saved selections may use commas. */
    public static List<Department> parseDepartments(String ids, String names) {
        List<Department> result = new ArrayList<Department>();
        if (ids == null) return result;
        String[] idValues = ids.split("[;,]", -1);
        String nameSeparator = ids.indexOf(';') >= 0 ? ";" : ids.indexOf(',') >= 0 ? "," : null;
        String[] nameValues = names == null ? new String[0] : nameSeparator == null
                ? new String[] { names } : names.split(nameSeparator, -1);
        for (int i = 0; i < idValues.length; i++) {
            result.add(new Department(idValues[i], i < nameValues.length ? nameValues[i] : null));
        }
        return normalizeDepartments(result);
    }

    public static List<Department> normalizeDepartments(List<Department> departments) {
        Map<String, Department> result = new LinkedHashMap<String, Department>();
        if (departments != null) {
            for (Department department : departments) {
                if (department == null || department.id == null || department.id.trim().isEmpty()) continue;
                String id = department.id.trim();
                String name = department.name == null || department.name.trim().isEmpty()
                        ? null : department.name.trim();
                if (!result.containsKey(id)) result.put(id, new Department(id, name));
                else if (result.get(id).name == null) result.get(id).name = name;
            }
        }
        return new ArrayList<Department>(result.values());
    }

    public static class Department {
        public String id;
        public String name;

        public Department() { }

        public Department(String id, String name) {
            this.id = id;
            this.name = name;
        }
    }

    public static class Reason {
        public String itemCode;
        public String itemName;
        public BigDecimal scoreChange;
        public String reason;

        public Reason() { }

        public Reason(String itemCode, String itemName, BigDecimal scoreChange, String reason) {
            this.itemCode = itemCode;
            this.itemName = itemName;
            this.scoreChange = scoreChange;
            this.reason = reason;
        }
    }
}
