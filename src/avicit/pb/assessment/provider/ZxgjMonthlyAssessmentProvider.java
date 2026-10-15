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
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Item;
import avicit.pb.zxgj.service.ZxgjAssessmentService;

/** 铸心共建：各项目按申请人党组织合并，每笔扣分仅收集到开始检查的月份。 */
@Component
public class ZxgjMonthlyAssessmentProvider implements MonthlyAssessmentProvider {
    @Autowired
    private ZxgjAssessmentService service;

    @Override public String getModuleCode() { return "ZXGJ"; }

    @Override public List<String> listOrgIdentities() { return service.orgIdentities(); }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        for (ZxgjAssessmentDTO assessment : service.monthly(orgIdentity, month,
                LocalDateTime.now(ZoneId.of("Asia/Shanghai")))) {
            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = orgIdentity;
            result.categoryCode = "PARTY";
            result.moduleCode = getModuleCode();
            result.moduleName = "铸心共建";
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
