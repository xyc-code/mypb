package avicit.pb.assessment.provider;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Period;
import avicit.pb.dwshyk.service.DwshykAssessmentService;

/** 党委三会一课：周期结束月份一次收集全部到期月、季、年扣分。 */
@Component
public class DwshykMonthlyAssessmentProvider implements MonthlyAssessmentProvider {
    @Autowired
    private DwshykAssessmentService service;

    @Override
    public String getModuleCode() { return "DWSHYK"; }

    @Override
    public List<String> listOrgIdentities() { return service.orgIdentities(); }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        for (DwshykAssessmentDTO assessment : service.monthly(orgIdentity, month,
                LocalDate.now(ZoneId.of("Asia/Shanghai")))) {
            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = orgIdentity;
            result.categoryCode = "PARTY";
            result.moduleCode = getModuleCode();
            result.moduleName = "党委三会一课";
            result.ruleVersion = "1";
            result.assessmentOrgId = assessment.partyId;
            result.assessmentOrgName = assessment.partyName;
            result.departments = MonthlyAssessmentResult.parseDepartments(assessment.departmentId, assessment.departmentName);
            if (result.departments.size() == 1) {
                result.departmentId = result.departments.get(0).id;
                result.departmentName = result.departments.get(0).name;
            }
            result.year = month.getYear();
            result.month = month.getMonthValue();
            result.resultKind = "ADJUSTMENT";
            result.resultScore = assessment.totalDeduction.negate();
            for (Period period : assessment.periods) {
                if (period.deduction.signum() > 0) {
                    result.reasons.add(new MonthlyAssessmentResult.Reason(period.itemCode, period.type,
                            period.deduction.negate(), period.reason));
                }
            }
            results.add(result);
        }
        return results;
    }
}
