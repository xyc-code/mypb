package avicit.pb.assessment.provider;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Item;
import avicit.pb.yzbyts.service.YzbytsAssessmentService;

/** 一支部一特色：只收集归属当月的扣分，不重复保存年度累计扣分。 */
@Component
public class YzbytsMonthlyAssessmentProvider implements MonthlyAssessmentProvider {
    @Autowired
    private YzbytsAssessmentService service;

    @Override
    public String getModuleCode() {
        return "YZBYTS";
    }

    @Override
    public List<String> listOrgIdentities() {
        return service.orgIdentities();
    }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        for (YzbytsAssessmentDTO assessment : service.monthly(orgIdentity, month,
                LocalDateTime.now(ZoneId.of("Asia/Shanghai")))) {
            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = orgIdentity;
            result.categoryCode = "PARTY";
            result.moduleCode = getModuleCode();
            result.moduleName = "一支部一特色";
            result.ruleVersion = "1";
            result.assessmentOrgId = assessment.partyId;
            result.assessmentOrgName = assessment.partyName;
            result.departments = MonthlyAssessmentResult.parseDepartments(
                    assessment.departmentId, assessment.departmentName);
            result.year = month.getYear();
            result.month = month.getMonthValue();
            result.resultKind = "ADJUSTMENT";
            result.resultScore = assessment.totalDeduction.negate();
            for (Item item : assessment.items) {
                if (item.deduction.signum() > 0) {
                    result.reasons.add(new Reason(item.itemCode, item.itemName,
                            item.deduction.negate(), item.reason));
                }
            }
            results.add(result);
        }
        return results;
    }
}
