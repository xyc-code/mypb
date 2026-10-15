package avicit.pb.assessment.provider;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Item;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Month;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Reason;
import avicit.pb.ztdr.service.ZtdrAssessmentService;

/** 主题党日：仅输出指定自然月的扣分，交由统一收集覆盖保存。 */
@Component
public class ZtdrMonthlyAssessmentProvider implements MonthlyAssessmentProvider {
    @Autowired
    private ZtdrAssessmentService service;

    @Override
    public String getModuleCode() { return "ZTDR"; }

    @Override
    public List<String> listOrgIdentities() { return service.orgIdentities(); }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        for (ZtdrAssessmentDTO assessment : service.monthly(orgIdentity, month,
                LocalDate.now(ZoneId.of("Asia/Shanghai")))) {
            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = orgIdentity;
            result.categoryCode = "PARTY";
            result.moduleCode = getModuleCode();
            result.moduleName = "主题党日";
            result.ruleVersion = "1";
            result.assessmentOrgId = assessment.partyId;
            result.assessmentOrgName = assessment.partyName;
            result.departments = MonthlyAssessmentResult.parseDepartments(
                    assessment.departmentId, assessment.departmentName);
            result.year = month.getYear();
            result.month = month.getMonthValue();
            result.resultKind = "ADJUSTMENT";
            result.resultScore = assessment.totalDeduction.negate();
            for (Month period : assessment.months) {
                for (Item item : period.items) {
                    for (Reason reason : item.reasons) {
                        result.reasons.add(new MonthlyAssessmentResult.Reason(reason.itemCode,
                                reason.itemName, reason.deduction.negate(), reason.reason));
                    }
                }
            }
            results.add(result);
        }
        return results;
    }
}
