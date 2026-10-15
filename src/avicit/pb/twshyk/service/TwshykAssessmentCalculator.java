package avicit.pb.twshyk.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import avicit.pb.twshyk.dto.TwshykAssessment;
import avicit.pb.twshyk.dto.TwshykAssessment.MeetingCount;
import avicit.pb.twshyk.dto.TwshykAssessment.Organization;
import avicit.pb.twshyk.dto.TwshykAssessment.Period;

/** 日期由服务端提供；测试可固定日期，正式接口不接收考核日期。 */
public final class TwshykAssessmentCalculator {
    private static final BigDecimal ZERO = new BigDecimal("0.0");
    private static final BigDecimal PENALTY = new BigDecimal("0.2");

    private TwshykAssessmentCalculator() { }

    /** 自然月结果与年度页面共用周期判定，只考核支部委员会。 */
    public static Period calculateMonth(YearMonth month, LocalDate today,
            Organization organization, List<MeetingCount> meetings) {
        return period("支部委员会", month.atDay(1), month.plusMonths(1).atDay(1),
                today, organization.id, meetings);
    }

    public static TwshykAssessment calculate(int year, LocalDate today,
            Organization organization, List<MeetingCount> meetings) {
        if (year < 2 || year > 9998) {
            throw new IllegalArgumentException("考核年份超出范围");
        }
        TwshykAssessment result = new TwshykAssessment();
        result.leagueId = organization.id;
        result.leagueName = organization.name;
        result.periods = new ArrayList<Period>();
        result.monthlyDeduction = ZERO;
        result.quarterlyDeduction = ZERO;
        LocalDate start = LocalDate.of(year - 1, 11, 1);
        for (int i = 0; i < 12; i++) {
            Period period = period("支部委员会", start.plusMonths(i), start.plusMonths(i + 1),
                    today, organization.id, meetings);
            result.periods.add(period);
            result.monthlyDeduction = result.monthlyDeduction.add(period.deduction);
        }
        for (int i = 0; i < 4; i++) {
            Period period = period("团课", start.plusMonths(i * 3), start.plusMonths((i + 1) * 3),
                    today, organization.id, meetings);
            result.periods.add(period);
            result.quarterlyDeduction = result.quarterlyDeduction.add(period.deduction);
        }
        LocalDate annualEnd = start.plusYears(1);
        Period annual = period("支部大会", start, annualEnd,
                today, organization.id, meetings);
        result.periods.add(annual);
        result.annualDue = !today.isBefore(annualEnd);
        result.annualDeduction = annual.deduction;
        result.totalDeduction = result.monthlyDeduction.add(result.quarterlyDeduction).add(result.annualDeduction);
        return result;
    }

    private static Period period(String type, LocalDate start, LocalDate end,
            LocalDate today, String leagueId, List<MeetingCount> meetings) {
        Period result = new Period();
        result.type = type;
        result.startDate = start.toString();
        result.endDate = end.minusDays(1).toString();
        result.assessmentDate = end.toString();
        String startMonth = start.toString().substring(0, 7);
        String endMonth = end.toString().substring(0, 7);
        for (MeetingCount meeting : meetings) {
            if (leagueId.equals(meeting.leagueId) && type.equals(meeting.type)
                    && meeting.month.compareTo(startMonth) >= 0 && meeting.month.compareTo(endMonth) < 0) {
                result.actualCount += meeting.count;
            }
        }
        boolean due = !today.isBefore(end);
        result.status = !due ? "未到考核时间" : result.actualCount > 0 ? "已达标" : "缺会";
        result.deduction = due && result.actualCount == 0 ? PENALTY : ZERO;
        return result;
    }
}
