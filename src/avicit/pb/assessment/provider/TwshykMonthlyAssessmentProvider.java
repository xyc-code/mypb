package avicit.pb.assessment.provider;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;
import avicit.pb.twshyk.dao.TwshykAssessmentDAO;
import avicit.pb.twshyk.dto.TwshykAssessment.MeetingCount;
import avicit.pb.twshyk.dto.TwshykAssessment.Organization;
import avicit.pb.twshyk.dto.TwshykAssessment.Period;
import avicit.pb.twshyk.service.TwshykAssessmentCalculator;

/** 团委三会一课接入：按自然月收集支部委员会净加扣分。 */
@Component
public class TwshykMonthlyAssessmentProvider implements MonthlyAssessmentProvider {
    @Autowired
    private TwshykAssessmentDAO dao;

    @Override
    public String getModuleCode() {
        return "TWSHYK";
    }

    @Override
    public List<String> listOrgIdentities() {
        return dao.findOrgIdentities();
    }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        List<Organization> organizations = dao.findMonthlyOrganizations(orgIdentity);
        List<MeetingCount> counts = dao.findCounts(orgIdentity, null,
                month.atDay(1).toString(), month.plusMonths(1).atDay(1).toString(), null);
        Map<String, List<MeetingCount>> byOrganization = new HashMap<String, List<MeetingCount>>();
        for (MeetingCount count : counts) {
            List<MeetingCount> group = byOrganization.get(count.leagueId);
            if (group == null) {
                group = new ArrayList<MeetingCount>();
                byOrganization.put(count.leagueId, group);
            }
            group.add(count);
        }

        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        for (Organization organization : organizations) {
            if (organization.id == null || organization.id.trim().isEmpty()) {
                throw new IllegalStateException("团组织缺少ID，不能生成月度考核结果");
            }
            List<MeetingCount> group = byOrganization.get(organization.id);
            if (group == null) group = Collections.emptyList();
            Period period = TwshykAssessmentCalculator.calculateMonth(month,
                    month.plusMonths(1).atDay(1), organization, group);
            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = orgIdentity;
            result.categoryCode = "LEAGUE";
            result.moduleCode = getModuleCode();
            result.moduleName = "团委三会一课";
            result.ruleVersion = "1";
            result.assessmentOrgId = organization.id;
            result.assessmentOrgName = organization.name;
            result.departments = MonthlyAssessmentResult.parseDepartments(
                    organization.departmentId, organization.departmentName);
            if (result.departments.size() == 1) {
                result.departmentId = result.departments.get(0).id;
                result.departmentName = result.departments.get(0).name;
            }
            result.year = month.getYear();
            result.month = month.getMonthValue();
            result.resultKind = "ADJUSTMENT";
            result.resultScore = period.deduction.negate();
            if (period.deduction.signum() > 0) {
                result.reasons.add(new Reason("BRANCH_COMMITTEE", period.type, result.resultScore,
                        month.getYear() + "年" + month.getMonthValue() + "月" + period.type
                        + "应至少开展" + period.requiredCount + "次，实际" + period.actualCount
                        + "次，扣" + period.deduction.toPlainString() + "分"));
            }
            results.add(result);
        }
        return results;
    }
}
