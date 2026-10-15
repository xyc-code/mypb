package avicit.pb.zxgj.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/** 铸心共建项目及月度考核结果；扣分在模块内使用正数。 */
public class ZxgjAssessmentDTO {
    public String projectId;
    public String projectName;
    public String formNumber;
    public String partyId;
    public String partyName;
    public String orgIdentity;
    public String departmentId;
    public String departmentName;
    public int year;
    public int milestoneCount;
    public BigDecimal milestoneDeduction = BigDecimal.ZERO;
    public BigDecimal summaryDeduction = BigDecimal.ZERO;
    public BigDecimal totalDeduction = BigDecimal.ZERO;
    public List<Item> items = new ArrayList<Item>();

    public static class Page {
        public int page;
        public int total;
        public long records;
        public List<ZxgjAssessmentDTO> data = new ArrayList<ZxgjAssessmentDTO>();
    }

    public static class Item {
        public String itemCode;
        public String itemName;
        public String type;
        public String milestoneId;
        public String projectId;
        public String projectName;
        public String formNumber;
        public String plan;
        public String plannedDate;
        public String assessmentDate;
        public String assessmentMonth;
        public String status;
        public boolean evidenceProvided;
        public boolean penaltyMarked;
        public BigDecimal deduction = BigDecimal.ZERO;
        public String reason;
    }

    public static class MainRecord {
        public String id;
        public String projectName;
        public String formNumber;
        public String partyId;
        public String partyName;
        public String orgIdentity;
        public String departmentId;
        public String departmentName;
        public String penaltyFlag;
        public long attachmentCount;
    }

    public static class Milestone {
        public String id;
        public String mainId;
        public String plan;
        public String content;
        public String plannedDate;
        public String sequence;
        public String penaltyFlag;
        public long attachmentCount;
    }

    public static class Organization {
        public String id;
        public String name;
        public String orgIdentity;
        public String departmentId;
        public String departmentName;
    }

    public static class AttachmentCount {
        public String parentId;
        public long count;
    }

    public static class Calculation {
        public ZxgjAssessmentDTO result;
        public List<String> pendingMilestoneIds = new ArrayList<String>();
        public List<String> pendingSummaryIds = new ArrayList<String>();
    }
}
