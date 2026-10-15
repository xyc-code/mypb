package avicit.pb.assessment.service;

import java.math.RoundingMode;
import java.time.YearMonth;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import avicit.pb.assessment.dao.MonthlyAssessmentDAO;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Department;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;
import avicit.pb.assessment.provider.MonthlyAssessmentProvider;

/** Called through its Spring proxy, once for each domain/module/month. */
@Service
public class MonthlyAssessmentWriter {
    private static final Logger LOGGER = LoggerFactory.getLogger(MonthlyAssessmentWriter.class);
    private static final ObjectMapper JSON = new ObjectMapper();
    @Autowired
    private MonthlyAssessmentDAO dao;

    @Transactional(value = "transactionManagerMybatis", propagation = Propagation.REQUIRES_NEW,
            rollbackFor = Exception.class)
    public int collect(MonthlyAssessmentProvider provider, String orgIdentity, YearMonth month) throws Exception {
        MonthlyAssessmentService.requireCompletedMonth(month);
        requireText(orgIdentity, "组织域");
        String moduleCode = provider.getModuleCode();
        requireText(moduleCode, "模块编码");
        Map<String, MonthlyAssessmentResult> oldResults = new HashMap<String, MonthlyAssessmentResult>();
        for (MonthlyAssessmentResult old : dao.lockResults(orgIdentity, moduleCode,
                month.getYear(), month.getMonthValue())) {
            oldResults.put(old.assessmentOrgId, old);
        }
        List<MonthlyAssessmentResult> results = provider.calculate(orgIdentity, month);
        if (results == null) throw new IllegalStateException("模块未返回计算结果：" + moduleCode);
        Set<String> seen = new HashSet<String>();
        Date calculatedAt = new Date();
        for (MonthlyAssessmentResult row : results) {
            if (row == null) throw new IllegalStateException("模块返回了空结果行：" + moduleCode);
            requireText(row.assessmentOrgId, "被考核组织ID");
            if (!seen.add(row.assessmentOrgId)) {
                throw new IllegalStateException("同一模块重复返回组织：" + row.assessmentOrgId);
            }
            requireText(row.categoryCode, "板块编码");
            requireText(row.moduleName, "模块名称");
            requireText(row.ruleVersion, "规则版本");
            if (!("ADJUSTMENT".equals(row.resultKind) || "SCORE".equals(row.resultKind))
                    || row.resultScore == null || row.reasons == null) {
                throw new IllegalStateException("模块结果类型、成绩或原因数组不完整：" + moduleCode);
            }
            row.resultScore = row.resultScore.setScale(4, RoundingMode.UNNECESSARY);
            for (Reason reason : row.reasons) {
                if (reason == null || reason.scoreChange == null) {
                    throw new IllegalStateException("加扣分原因缺少分值：" + moduleCode);
                }
                requireText(reason.itemCode, "考核项编码");
                requireText(reason.itemName, "考核项名称");
                requireText(reason.reason, "加扣分原因");
            }
            row.orgIdentity = orgIdentity;
            row.moduleCode = moduleCode;
            row.year = month.getYear();
            row.month = month.getMonthValue();
            row.calculatedAt = calculatedAt;
            row.reasonDetail = JSON.writeValueAsString(row.reasons);
            MonthlyAssessmentResult old = oldResults.remove(row.assessmentOrgId);
            boolean hasStoredDepartments = old != null && !old.departments.isEmpty();
            if (hasStoredDepartments) {
                row.departments = old.departments;
            } else {
                row.departments = MonthlyAssessmentResult.normalizeDepartments(row.departments);
                if (row.departments.isEmpty()) {
                    row.departments = MonthlyAssessmentResult.parseDepartments(row.departmentId, row.departmentName);
                }
            }
            row.departmentId = row.departments.size() == 1 ? row.departments.get(0).id : null;
            row.departmentName = row.departments.size() == 1 ? row.departments.get(0).name : null;
            if (row.departments.isEmpty()) {
                LOGGER.warn("月度考核组织未关联部门：domain={}, module={}, month={}, organization={}",
                        orgIdentity, moduleCode, month, row.assessmentOrgId);
            }
            if (old == null) {
                row.id = UUID.randomUUID().toString().replace("-", "");
                dao.insertResult(row);
            } else {
                row.id = old.id;
                row.version = old.version;
                if (dao.updateResult(row) != 1) {
                    throw new IllegalStateException("月度结果已被其他任务修改，请重新执行：" + row.id);
                }
            }
            if (!hasStoredDepartments) {
                for (Department department : row.departments) {
                    if (dao.insertDepartment(row, department, UUID.randomUUID().toString().replace("-", "")) != 1) {
                        throw new IllegalStateException("月度结果部门归属保存失败：" + row.id);
                    }
                }
            }
        }
        for (MonthlyAssessmentResult old : oldResults.values()) {
            LOGGER.warn("保留无法重新计算的历史组织结果：domain={}, module={}, month={}, organization={}",
                    orgIdentity, moduleCode, month, old.assessmentOrgId);
        }
        LOGGER.info("月度考核收集成功：domain={}, module={}, month={}, rows={}",
                orgIdentity, moduleCode, month, results.size());
        return results.size();
    }

    private static void requireText(String value, String name) {
        if (MonthlyAssessmentService.trimToNull(value) == null) {
            throw new IllegalArgumentException(name + "不能为空");
        }
    }
}
