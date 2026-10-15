package avicit.pb.assessment.integration;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/** Canonical payload returned by an external monthly assessment module. */
public class ExternalMonthlyAssessmentPayload {
    public String flag;
    public String moduleCode;
    public String moduleName;
    public String categoryCode;
    public int year;
    public int month;
    public List<Entry> data = new ArrayList<Entry>();

    public static class Entry {
        public String orgIdentity;
        public String assessmentOrgId;
        public String assessmentOrgName;
        public List<Department> departments = new ArrayList<Department>();
        public String resultKind;
        public BigDecimal resultScore;
        public String ruleVersion;
        public List<Reason> reasons = new ArrayList<Reason>();
    }

    public static class Department {
        public String id;
        public String name;
    }

    public static class Reason {
        public String itemCode;
        public String itemName;
        public BigDecimal scoreChange;
        public String reason;
    }
}
