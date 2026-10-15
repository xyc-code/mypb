package avicit.pb.ztdr.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/** 主题党日年度及月度考核结果；扣分以正数表示。 */
public class ZtdrAssessmentDTO {
    public String partyId;
    public String partyName;
    public String orgIdentity;
    public String departmentId;
    public String departmentName;
    public String createdDate;
    public String asOfDate;
    public int year;
    public BigDecimal totalDeduction = BigDecimal.ZERO;
    public List<Month> months = new ArrayList<Month>();

    public static class Page {
        public int page;
        public int total;
        public long records;
        public List<ZtdrAssessmentDTO> data;
    }

    public static class Month {
        public int month;
        public String status;
        public BigDecimal deduction = BigDecimal.ZERO;
        public int activityCount;
        public List<Item> items = new ArrayList<Item>();
    }

    public static class Item {
        public String activityId;
        public String plan;
        public String plannedDate;
        public String actualDate;
        public String completionStatus;
        public String participants;
        public BigDecimal deduction = BigDecimal.ZERO;
        public List<Reason> reasons = new ArrayList<Reason>();
    }

    public static class Reason {
        public String itemCode;
        public String itemName;
        public String reason;
        public BigDecimal deduction;
    }

    public static class Organization {
        public String id;
        public String name;
        public String orgIdentity;
        public String departmentId;
        public String departmentName;
        public String creationDate;
    }

    public static class MainRecord {
        public String id;
        public String partyId;
        public String year;
    }

    public static class Activity {
        public String id;
        public String mainId;
        public String plan;
        public String plannedDate;
        public String actualDate;
        public String adjustmentReason;
        public String participants;
        public String completionStatus;
        public Integer sequence;
    }
}
