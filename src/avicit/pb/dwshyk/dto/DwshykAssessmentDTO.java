package avicit.pb.dwshyk.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/** 党委三会一课只读考核结果。 */
public class DwshykAssessmentDTO {
    public String partyId;
    public String partyName;
    public String partyType;
    public String orgIdentity;
    public String departmentId;
    public String departmentName;
    public int year;
    public String cycleStart;
    public String cycleEnd;
    public String asOfDate;
    public BigDecimal monthlyDeduction;
    public BigDecimal quarterlyDeduction;
    public BigDecimal annualDeduction;
    public BigDecimal totalDeduction;
    public List<Period> periods;

    public static class Page {
        public List<DwshykAssessmentDTO> data;
        public int page;
        public int total;
        public long records;
    }

    public static class Organization {
        public String id;
        public String name;
        public String parentId;
        public String typeCode;
        public String orgIdentity;
        public String departmentId;
        public String departmentName;
    }

    public static class Meeting {
        public String id;
        public String partyIds;
        public String typeCode;
        public Date meetDate;
        public Date creationDate;
    }

    public static class Period {
        public String typeCode;
        public String type;
        public String frequency;
        public String startDate;
        public String endDate;
        public String assessmentDate;
        public int requiredCount;
        public int totalCount;
        public int onTimeCount;
        public int lateCount;
        public int missingCreationCount;
        public String status;
        public BigDecimal deduction;
        public String reason;
        public String itemCode;
        public String attributionMonth;
    }
}
