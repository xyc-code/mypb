package avicit.pb.yzbyts.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/** 一支部一特色年度及月度考核结果；扣分为正数。 */
public class YzbytsAssessmentDTO {
    public String partyId;
    public String partyName;
    public String orgIdentity;
    public String departmentId;
    public String departmentName;
    public int year;
    public String assessmentStart;
    public boolean due;
    public boolean submitted;
    public int milestoneCount;
    public int missingMilestoneCount;
    public BigDecimal submissionDeduction = BigDecimal.ZERO;
    public BigDecimal missingDeduction = BigDecimal.ZERO;
    public BigDecimal milestoneDeduction = BigDecimal.ZERO;
    public BigDecimal totalDeduction = BigDecimal.ZERO;
    public List<Item> items = new ArrayList<Item>();

    public static class Page {
        public int page;
        public int total;
        public long records;
        public String assessmentStart;
        public List<YzbytsAssessmentDTO> data;
    }

    public static class Item {
        public String itemCode;
        public String itemName;
        public String milestoneId;
        public String plan;
        public String plannedDate;
        public String assessmentDate;
        public String assessmentMonth;
        public String status;
        public String sourceStatus;
        public boolean evidenceProvided;
        public boolean penaltyMarked;
        public BigDecimal deduction = BigDecimal.ZERO;
        public String reason;
    }

    public static class Organization {
        public String id;
        public String name;
        public String orgIdentity;
        public String departmentId;
        public String departmentName;
    }

    public static class MainRecord {
        public String id;
        public String partyId;
        public String year;
        public String orgIdentity;
    }

    public static class Milestone {
        public String id;
        public String mainId;
        public String plan;
        public String plannedDate;
        public String sourceStatus;
        public String evidence;
        public String sequence;
        public String penaltyFlag;
    }

    public static class Configuration {
        public String month;
        public String day;
    }

    public static class Calculation {
        public YzbytsAssessmentDTO result;
        public List<String> pendingPenaltyIds = new ArrayList<String>();
    }
}
