package avicit.pb.assessment.integration;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Department;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;

/** Validates the external contract and converts it to the internal result model. */
public final class ExternalMonthlyAssessmentAdapter {
    private ExternalMonthlyAssessmentAdapter() { }

    public static List<MonthlyAssessmentResult> toResults(ExternalMonthlyAssessmentPayload payload,
            String expectedModuleCode, String expectedCategoryCode, String expectedOrgIdentity,
            YearMonth expectedMonth) {
        if (payload == null) throw new IllegalArgumentException("外部月度考核返回为空");
        requireText(payload.flag, "返回标识");
        if (!"success".equalsIgnoreCase(payload.flag)) {
            throw new IllegalStateException("外部月度考核返回失败：" + payload.flag);
        }
        requireEquals(expectedModuleCode, payload.moduleCode, "模块编码");
        requireEquals(expectedCategoryCode, payload.categoryCode, "板块编码");
        requireMonth(payload.year, payload.month, expectedMonth);
        requireText(payload.moduleName, "模块名称");
        if (payload.data == null) throw new IllegalArgumentException("结果数据不能为空");
        requireText(expectedOrgIdentity, "组织域");

        List<MonthlyAssessmentResult> results = new ArrayList<MonthlyAssessmentResult>();
        Set<String> seen = new HashSet<String>();
        for (ExternalMonthlyAssessmentPayload.Entry entry : payload.data) {
            if (entry == null) throw new IllegalArgumentException("结果数据包含空行");
            requireEquals(expectedOrgIdentity, entry.orgIdentity, "结果组织域");
            requireText(entry.assessmentOrgId, "被考核组织ID");
            if (!seen.add(entry.assessmentOrgId)) {
                throw new IllegalArgumentException("同一月份重复返回被考核组织：" + entry.assessmentOrgId);
            }
            requireText(entry.assessmentOrgName, "被考核组织名称");
            requireText(entry.resultKind, "结果类型");
            if (!("ADJUSTMENT".equals(entry.resultKind) || "SCORE".equals(entry.resultKind))) {
                throw new IllegalArgumentException("结果类型无效：" + entry.resultKind);
            }
            if (entry.resultScore == null) throw new IllegalArgumentException("结果分值不能为空");
            requireText(entry.ruleVersion, "规则版本");
            if (entry.reasons == null) throw new IllegalArgumentException("原因数组不能为空");

            MonthlyAssessmentResult result = new MonthlyAssessmentResult();
            result.orgIdentity = entry.orgIdentity;
            result.categoryCode = payload.categoryCode;
            result.moduleCode = payload.moduleCode;
            result.moduleName = payload.moduleName;
            result.ruleVersion = entry.ruleVersion;
            result.assessmentOrgId = entry.assessmentOrgId;
            result.assessmentOrgName = entry.assessmentOrgName;
            result.year = payload.year;
            result.month = payload.month;
            result.resultKind = entry.resultKind;
            result.resultScore = entry.resultScore;
            result.reasons = new ArrayList<Reason>();
            BigDecimal reasonTotal = BigDecimal.ZERO;
            for (ExternalMonthlyAssessmentPayload.Reason sourceReason : entry.reasons) {
                if (sourceReason == null) throw new IllegalArgumentException("原因数组包含空行");
                requireText(sourceReason.itemCode, "考核项编码");
                requireText(sourceReason.itemName, "考核项名称");
                if (sourceReason.scoreChange == null) throw new IllegalArgumentException("原因分值不能为空");
                requireText(sourceReason.reason, "原因说明");
                result.reasons.add(new Reason(sourceReason.itemCode, sourceReason.itemName,
                        sourceReason.scoreChange, sourceReason.reason));
                reasonTotal = reasonTotal.add(sourceReason.scoreChange);
            }
            if (reasonTotal.compareTo(entry.resultScore) != 0) {
                throw new IllegalArgumentException("原因分值合计与结果分值不一致：" + entry.assessmentOrgId);
            }

            result.departments = departments(entry.departments);
            if (result.departments.size() == 1) {
                result.departmentId = result.departments.get(0).id;
                result.departmentName = result.departments.get(0).name;
            }
            results.add(result);
        }
        return results;
    }

    private static List<Department> departments(List<ExternalMonthlyAssessmentPayload.Department> source) {
        List<Department> result = new ArrayList<Department>();
        Set<String> seen = new HashSet<String>();
        if (source == null) return result;
        for (ExternalMonthlyAssessmentPayload.Department department : source) {
            if (department == null) throw new IllegalArgumentException("部门数组包含空行");
            requireText(department.id, "部门ID");
            if (!seen.add(department.id)) continue;
            result.add(new Department(department.id, trimToNull(department.name)));
        }
        return result;
    }

    private static void requireMonth(int year, int month, YearMonth expected) {
        if (expected == null || year != expected.getYear() || month != expected.getMonthValue()) {
            throw new IllegalArgumentException("返回年月与查询年月不一致");
        }
    }

    private static void requireEquals(String expected, String actual, String name) {
        requireText(expected, name);
        if (!expected.equals(actual)) throw new IllegalArgumentException(name + "不一致：" + actual);
    }

    private static void requireText(String value, String name) {
        if (trimToNull(value) == null) throw new IllegalArgumentException(name + "不能为空");
    }

    private static String trimToNull(String value) {
        return value == null || value.trim().isEmpty() ? null : value.trim();
    }
}
