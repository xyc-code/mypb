package avicit.pb.dwshyk.service;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Meeting;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Organization;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Period;

/** 页面和统一月度收集共用同一周期、组织归属及按时次数判定。 */
public final class DwshykAssessmentCalculator {
    private static final BigDecimal ZERO = new BigDecimal("0.0");
    private static final BigDecimal PENALTY = new BigDecimal("0.2");
    private static final ZoneId ZONE = ZoneId.of("Asia/Shanghai");

    private DwshykAssessmentCalculator() { }

    public static boolean eligible(Organization organization) {
        if ("-1".equals(organization.parentId) || isGroup(organization)) return false;
        return "2".equals(organization.typeCode) || ("1".equals(organization.typeCode)
                && (organization.name == null || !organization.name.contains("离休")));
    }

    public static String organizationType(Organization organization) {
        if ("1".equals(organization.typeCode)) return "党支部";
        return organization.name != null && organization.name.contains("党总支") ? "党总支" : "党委";
    }

    public static DwshykAssessmentDTO calculate(int year, LocalDate today, Organization organization,
            List<Organization> tree, List<Meeting> meetings) {
        if (year < 2 || year > 9998) throw new IllegalArgumentException("考核年份超出范围");
        DwshykAssessmentDTO result = new DwshykAssessmentDTO();
        result.partyId = organization.id;
        result.partyName = organization.name;
        result.partyType = organizationType(organization);
        result.orgIdentity = organization.orgIdentity;
        result.departmentId = organization.departmentId;
        result.departmentName = organization.departmentName;
        result.year = year;
        LocalDate start = LocalDate.of(year - 1, 10, 1);
        result.cycleStart = start.toString();
        result.cycleEnd = start.plusYears(1).minusDays(1).toString();
        result.asOfDate = today.toString();
        result.periods = new ArrayList<Period>();

        Set<String> groupIds = new HashSet<String>();
        Set<String> commissionIds = new HashSet<String>();
        Map<String, Organization> nodes = new HashMap<String, Organization>();
        for (Organization node : tree) nodes.put(node.id, node);
        for (Organization child : tree) {
            if (isGroup(child) && !"无党小组".equals(child.name)
                    && organization.id.equals(branchId(child, nodes))) groupIds.add(child.id);
            if (organization.id.equals(child.parentId) && "3".equals(child.typeCode)) commissionIds.add(child.id);
        }
        List<Meeting> ownMeetings = meetingsFor(organization.id, groupIds, commissionIds, meetings);
        boolean branch = "党支部".equals(result.partyType);
        String committeeType = branch ? "1" : "党总支".equals(result.partyType) ? "6" : "5";
        for (int i = 0; i < 12; i++) {
            LocalDate periodStart = start.plusMonths(i);
            result.periods.add(period(committeeType, "MONTH", periodStart, periodStart.plusMonths(1),
                    1, today, ownMeetings));
            if (branch && !groupIds.isEmpty()) {
                result.periods.add(period("2", "MONTH", periodStart, periodStart.plusMonths(1),
                        1, today, ownMeetings));
            }
        }
        for (int i = 0; i < 4; i++) {
            LocalDate periodStart = start.plusMonths(i * 3);
            if (branch) {
                result.periods.add(period("0", "QUARTER", periodStart, periodStart.plusMonths(3),
                        1, today, ownMeetings));
                result.periods.add(period("3", "QUARTER", periodStart, periodStart.plusMonths(3),
                        1, today, ownMeetings));
            } else if ("党委".equals(result.partyType) && !commissionIds.isEmpty()) {
                result.periods.add(period("4", "QUARTER", periodStart, periodStart.plusMonths(3),
                        1, today, ownMeetings));
            }
        }
        if (!branch) {
            result.periods.add(period("0", "YEAR", start, start.plusYears(1), 2, today, ownMeetings));
            result.periods.add(period("3", "YEAR", start, start.plusYears(1), 1, today, ownMeetings));
        }
        sum(result);
        return result;
    }

    /** 月度只保留周期结束落在该月、且已到期的项目，避免年度累计重复入账。 */
    public static DwshykAssessmentDTO calculateMonth(YearMonth month, LocalDate today,
            Organization organization, List<Organization> tree, List<Meeting> meetings) {
        int year = month.getMonthValue() >= 10 ? month.getYear() + 1 : month.getYear();
        DwshykAssessmentDTO result = calculate(year, today, organization, tree, meetings);
        List<Period> periods = new ArrayList<Period>();
        for (Period period : result.periods) {
            if (month.toString().equals(period.attributionMonth) && !"PENDING".equals(period.status)) {
                periods.add(period);
            }
        }
        result.periods = periods;
        sum(result);
        return result;
    }

    private static boolean isGroup(Organization organization) {
        return organization.name != null && organization.name.contains("党小组");
    }

    private static String branchId(Organization group, Map<String, Organization> nodes) {
        Set<String> visited = new HashSet<String>();
        String parentId = group.parentId;
        while (parentId != null && visited.add(parentId)) {
            Organization parent = nodes.get(parentId);
            if (parent == null) return null;
            if ("1".equals(parent.typeCode) && !isGroup(parent)) return parent.id;
            parentId = parent.parentId;
        }
        return null;
    }

    private static List<Meeting> meetingsFor(String partyId, Set<String> groupIds,
            Set<String> commissionIds, List<Meeting> meetings) {
        List<Meeting> result = new ArrayList<Meeting>();
        Set<String> seen = new HashSet<String>();
        for (Meeting meeting : meetings) {
            if (meeting.partyIds == null) continue;
            Set<String> ids = new LinkedHashSet<String>();
            for (String id : meeting.partyIds.split("[;,]")) if (!id.trim().isEmpty()) ids.add(id.trim());
            boolean belongs = ids.contains(partyId);
            if ("2".equals(meeting.typeCode)) {
                for (String id : groupIds) if (ids.contains(id)) belongs = true;
            } else if ("4".equals(meeting.typeCode)) {
                for (String id : commissionIds) if (ids.contains(id)) belongs = true;
            }
            if (belongs && (meeting.id == null || seen.add(meeting.id + ":" + meeting.typeCode))) {
                result.add(meeting);
            }
        }
        return result;
    }

    private static Period period(String typeCode, String frequency, LocalDate start, LocalDate end,
            int required, LocalDate today, List<Meeting> meetings) {
        Period result = new Period();
        result.typeCode = typeCode;
        result.type = meetingType(typeCode);
        result.frequency = frequency;
        result.startDate = start.toString();
        result.endDate = end.minusDays(1).toString();
        result.assessmentDate = end.toString();
        result.requiredCount = required;
        result.attributionMonth = YearMonth.from(end.minusDays(1)).toString();
        result.itemCode = frequency + "_" + typeCode + "_" + start;
        long cutoff = end.atStartOfDay(ZONE).toInstant().toEpochMilli();
        for (Meeting meeting : meetings) {
            if (!typeCode.equals(meeting.typeCode) || meeting.meetDate == null) continue;
            LocalDate meetingDate = localDate(meeting.meetDate);
            if (meetingDate.isBefore(start) || !meetingDate.isBefore(end)) continue;
            result.totalCount++;
            if (meeting.creationDate == null) result.missingCreationCount++;
            else if (meeting.creationDate.getTime() < cutoff) result.onTimeCount++;
            else result.lateCount++;
        }
        boolean due = !today.isBefore(end);
        int missing = Math.max(0, required - result.onTimeCount);
        result.status = !due ? "PENDING" : missing == 0 ? "PASS" : "DEDUCT";
        result.deduction = due ? PENALTY.multiply(BigDecimal.valueOf(missing)) : ZERO;
        result.reason = start + "至" + result.endDate + "，" + result.type + "应至少开展" + required
                + "次，记录总数" + result.totalCount + "次，按时" + result.onTimeCount + "次，补录"
                + result.lateCount + "次";
        if (result.missingCreationCount > 0) {
            result.reason += "，缺少创建时间" + result.missingCreationCount + "次（无法确认按时）";
        }
        result.reason += !due ? "，尚未到考核时间" : missing == 0 ? "，已达标"
                : "，按时缺" + missing + "次，扣" + result.deduction.toPlainString() + "分";
        return result;
    }

    private static LocalDate localDate(Date value) {
        return Instant.ofEpochMilli(value.getTime()).atZone(ZONE).toLocalDate();
    }

    private static String meetingType(String code) {
        switch (code) {
            case "0": return "党员大会";
            case "1": return "支部委员会";
            case "2": return "党小组会";
            case "3": return "党课";
            case "4": return "纪律检查委员会";
            case "5": return "党委会";
            case "6": return "总支委员会";
            default: throw new IllegalArgumentException("未知会议类型");
        }
    }

    private static void sum(DwshykAssessmentDTO result) {
        result.monthlyDeduction = ZERO;
        result.quarterlyDeduction = ZERO;
        result.annualDeduction = ZERO;
        for (Period period : result.periods) {
            if ("MONTH".equals(period.frequency)) result.monthlyDeduction = result.monthlyDeduction.add(period.deduction);
            else if ("QUARTER".equals(period.frequency)) result.quarterlyDeduction = result.quarterlyDeduction.add(period.deduction);
            else result.annualDeduction = result.annualDeduction.add(period.deduction);
        }
        result.totalDeduction = result.monthlyDeduction.add(result.quarterlyDeduction).add(result.annualDeduction);
    }
}
