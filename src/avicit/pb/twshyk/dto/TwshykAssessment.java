package avicit.pb.twshyk.dto;

import java.math.BigDecimal;
import java.util.List;

/** 团委三会一课考核只读结果。 */
public class TwshykAssessment {
    public String leagueId;
    public String leagueName;
    public BigDecimal monthlyDeduction;
    public BigDecimal quarterlyDeduction;
    public BigDecimal annualDeduction;
    public BigDecimal totalDeduction;
    public boolean annualDue;
    public List<Period> periods;

    public static class Page {
        public int page;
        public int total;
        public long records;
        public List<TwshykAssessment> data;
    }

    public static class Organization {
        public String id;
        public String name;
        public String departmentId;
        public String departmentName;
    }

    public static class MeetingCount {
        public String leagueId;
        public String type;
        public String month;
        public int count;
    }

    public static class Period {
        public String type;
        public String startDate;
        public String endDate;
        public String assessmentDate;
        public int requiredCount = 1;
        public int actualCount;
        public String status;
        public BigDecimal deduction;
    }
}
