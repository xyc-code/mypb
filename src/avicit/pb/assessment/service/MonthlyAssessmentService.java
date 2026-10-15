package avicit.pb.assessment.service;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import avicit.pb.assessment.dao.MonthlyAssessmentDAO;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Department;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Reason;
import avicit.pb.assessment.integration.ExternalMonthlyAssessmentProviderAdapter;
import avicit.pb.assessment.integration.ExternalMonthlyAssessmentSource;
import avicit.pb.assessment.provider.MonthlyAssessmentProvider;

@Service
public class MonthlyAssessmentService {
    public static final ZoneId ZONE = ZoneId.of("Asia/Shanghai");
    private static final Logger LOGGER = LoggerFactory.getLogger(MonthlyAssessmentService.class);
    private static final ObjectMapper JSON = new ObjectMapper();
    @Autowired
    private List<MonthlyAssessmentProvider> providers;
    @Autowired(required = false)
    private List<ExternalMonthlyAssessmentSource> externalSources;
    @Autowired
    private MonthlyAssessmentWriter writer;
    @Autowired
    private MonthlyAssessmentDAO dao;

    public void collectPreviousMonth() throws Exception {
        collect(providerMap(), previousMonth(LocalDate.now(ZONE)), null);
    }

    public void rebuildMonth(String moduleCode, int year, int month, String orgIdentity) throws Exception {
        Map<String, MonthlyAssessmentProvider> registered = providerMap();
        String code = trimToNull(moduleCode);
        MonthlyAssessmentProvider provider = registered.get(code);
        if (provider == null) throw new IllegalArgumentException("未接入的考核模块：" + moduleCode);
        Map<String, MonthlyAssessmentProvider> selected = new LinkedHashMap<String, MonthlyAssessmentProvider>();
        selected.put(code, provider);
        collect(selected, month(year, month), trimToNull(orgIdentity));
    }

    private Map<String, MonthlyAssessmentProvider> providerMap() {
        Map<String, MonthlyAssessmentProvider> result = new LinkedHashMap<String, MonthlyAssessmentProvider>();
        for (MonthlyAssessmentProvider provider : providers) {
            String code = trimToNull(provider.getModuleCode());
            if (code == null || result.put(code, provider) != null) {
                throw new IllegalStateException("考核模块编码为空或重复：" + code);
            }
        }
        if (externalSources != null) {
            for (ExternalMonthlyAssessmentSource source : externalSources) {
                MonthlyAssessmentProvider provider = new ExternalMonthlyAssessmentProviderAdapter(source);
                String code = trimToNull(provider.getModuleCode());
                if (code == null || result.put(code, provider) != null) {
                    throw new IllegalStateException("外部考核模块编码为空或重复：" + code);
                }
            }
        }
        return result;
    }

    private void collect(Map<String, MonthlyAssessmentProvider> selected, YearMonth month,
            String onlyDomain) throws Exception {
        requireCompletedMonth(month);
        List<String> failures = new ArrayList<String>();
        Exception firstFailure = null;
        for (MonthlyAssessmentProvider provider : selected.values()) {
            try {
                Set<String> domains = new LinkedHashSet<String>();
                if (onlyDomain != null) {
                    domains.add(onlyDomain);
                } else {
                    domains.addAll(provider.listOrgIdentities());
                    domains.addAll(dao.findStoredOrgIdentities(provider.getModuleCode()));
                }
                for (String domain : domains) {
                    try {
                        writer.collect(provider, domain, month);
                    } catch (Exception ex) {
                        String scope = provider.getModuleCode() + "/" + domain + "/" + month;
                        failures.add(scope);
                        if (firstFailure == null) firstFailure = ex;
                        LOGGER.error("月度考核收集失败：" + scope, ex);
                    }
                }
            } catch (Exception ex) {
                failures.add(provider.getModuleCode() + "/" + month);
                if (firstFailure == null) firstFailure = ex;
                LOGGER.error("月度考核组织域读取失败：" + provider.getModuleCode(), ex);
            }
        }
        if (!failures.isEmpty()) {
            throw new IllegalStateException("月度考核收集失败，可按年月补算：" + failures, firstFailure);
        }
    }

    public Map<String, Object> options(String orgIdentity) {
        if (trimToNull(orgIdentity) == null) throw new IllegalArgumentException("未获取到当前组织域，请重新登录");
        Map<String, Map<String, String>> categories = new LinkedHashMap<String, Map<String, String>>();
        List<Map<String, String>> modules = new ArrayList<Map<String, String>>();
        for (MonthlyAssessmentResult row : dao.findModuleOptions(orgIdentity)) {
            Map<String, String> module = new LinkedHashMap<String, String>();
            module.put("code", row.moduleCode);
            module.put("name", trimToNull(row.moduleName) == null ? row.moduleCode : row.moduleName);
            module.put("categoryCode", row.categoryCode);
            modules.add(module);
            if (!categories.containsKey(row.categoryCode)) {
                Map<String, String> category = new LinkedHashMap<String, String>();
                category.put("code", row.categoryCode);
                String name = "PARTY".equals(row.categoryCode) ? "党" : "UNION".equals(row.categoryCode) ? "工会"
                        : "LEAGUE".equals(row.categoryCode) ? "团委" : row.categoryCode;
                category.put("name", name);
                categories.put(row.categoryCode, category);
            }
        }
        List<Map<String, String>> departments = new ArrayList<Map<String, String>>();
        for (MonthlyAssessmentResult row : dao.findDepartmentOptions(orgIdentity)) {
            Map<String, String> department = new LinkedHashMap<String, String>();
            department.put("id", row.departmentId);
            department.put("name", trimToNull(row.departmentName) == null ? row.departmentId : row.departmentName);
            departments.add(department);
        }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "success");
        result.put("categories", new ArrayList<Map<String, String>>(categories.values()));
        result.put("modules", modules);
        result.put("departments", departments);
        return result;
    }

    public Map<String, Object> page(String orgIdentity, int year, int month,
            String departmentId, String categoryCode, String moduleCode, int page, int pageSize) throws Exception {
        if (trimToNull(orgIdentity) == null) throw new IllegalArgumentException("未获取到当前组织域，请重新登录");
        month(year, month);
        if (page < 1 || pageSize < 1 || pageSize > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        departmentId = trimToNull(departmentId);
        categoryCode = trimToNull(categoryCode);
        moduleCode = trimToNull(moduleCode);
        long total = dao.countResults(orgIdentity, year, month, departmentId, categoryCode, moduleCode);
        long offset = ((long) page - 1) * pageSize;
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        for (MonthlyAssessmentResult result : dao.findPage(orgIdentity, year, month,
                departmentId, categoryCode, moduleCode, offset, offset + pageSize)) {
            Map<String, Object> row = new LinkedHashMap<String, Object>();
            row.put("id", result.id);
            row.put("orgIdentity", result.orgIdentity);
            row.put("year", result.year);
            row.put("month", result.month);
            row.put("categoryCode", result.categoryCode);
            row.put("moduleCode", result.moduleCode);
            row.put("moduleName", result.moduleName);
            row.put("assessmentOrgId", result.assessmentOrgId);
            row.put("assessmentOrgName", result.assessmentOrgName);
            Department selectedDepartment = result.departments.size() == 1 ? result.departments.get(0) : null;
            if (departmentId != null) {
                for (Department department : result.departments) {
                    if (departmentId.equals(department.id)) selectedDepartment = department;
                }
            }
            row.put("departmentId", selectedDepartment == null ? null : selectedDepartment.id);
            row.put("departmentName", selectedDepartment == null ? null : selectedDepartment.name);
            row.put("departments", result.departments);
            row.put("departmentLinked", !result.departments.isEmpty());
            row.put("resultKind", result.resultKind);
            row.put("resultScore", result.resultScore);
            row.put("ruleVersion", result.ruleVersion);
            row.put("reasons", JSON.readValue(result.reasonDetail, new TypeReference<List<Reason>>() { }));
            row.put("calculatedAt", result.calculatedAt.toInstant().atZone(ZONE)
                    .format(DateTimeFormatter.ISO_OFFSET_DATE_TIME));
            rows.add(row);
        }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("flag", "success");
        result.put("rows", rows);
        result.put("total", total);
        result.put("page", page);
        result.put("pageSize", pageSize);
        return result;
    }

    public static YearMonth previousMonth(LocalDate today) {
        return YearMonth.from(today).minusMonths(1);
    }

    public static YearMonth month(int year, int month) {
        if (year < 1 || year > 9998) throw new IllegalArgumentException("年份须在1至9998之间");
        try {
            return YearMonth.of(year, month);
        } catch (DateTimeException ex) {
            throw new IllegalArgumentException("月份须在1至12之间", ex);
        }
    }

    public static void requireCompletedMonth(YearMonth month) {
        if (month == null || !month.isBefore(YearMonth.from(LocalDate.now(ZONE)))) {
            throw new IllegalArgumentException("只能生成已经结束的自然月");
        }
        month(month.getYear(), month.getMonthValue());
    }

    public static String trimToNull(String value) {
        return value == null || value.trim().isEmpty() ? null : value.trim();
    }
}
