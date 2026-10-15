package avicit.pb.yzbyts.service;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import avicit.pb.yzbyts.dao.YzbytsAssessmentDAO;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Calculation;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Configuration;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.MainRecord;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Milestone;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Organization;

@Service
public class YzbytsAssessmentService {
    @Autowired
    private YzbytsAssessmentDAO dao;

    public List<String> orgIdentities() { return dao.findOrgIdentities(); }

    public List<Integer> years(LocalDateTime now) {
        Set<Integer> years = new TreeSet<Integer>(Collections.reverseOrder());
        years.add(now.getYear());
        for (String year : dao.findYears()) years.add(YzbytsAssessmentCalculator.parseYear(year));
        return new ArrayList<Integer>(years);
    }

    public String assessmentStart(int year) {
        return YzbytsAssessmentCalculator.DATE_TIME.format(
                YzbytsAssessmentCalculator.assessmentStart(year, configuration()));
    }

    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public YzbytsAssessmentDTO.Page page(int year, String partyName, int page, int rows, LocalDateTime now) {
        validateYear(year, now);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        Configuration config = configuration();
        String query = escapeLike(partyName);
        YzbytsAssessmentDTO.Page result = new YzbytsAssessmentDTO.Page();
        result.assessmentStart = YzbytsAssessmentCalculator.DATE_TIME.format(
                YzbytsAssessmentCalculator.assessmentStart(year, config));
        result.records = dao.countOrganizations(query);
        result.total = (int) ((result.records + rows - 1) / rows);
        result.page = Math.min(page, Math.max(1, result.total));
        long offset = (long) (result.page - 1) * rows;
        result.data = annual(year, dao.findOrganizationPage(query, offset, offset + rows), config, now);
        return result;
    }

    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public YzbytsAssessmentDTO detail(int year, String partyId, LocalDateTime now) {
        validateYear(year, now);
        if (partyId == null || partyId.trim().isEmpty()) throw new IllegalArgumentException("请选择党组织");
        List<Organization> organizations = dao.findOrganizations(null, partyId);
        if (organizations.isEmpty()) throw new IllegalArgumentException("党组织不存在或不在考核范围内");
        return annual(year, organizations, configuration(), now).get(0);
    }

    /** 加入统一收集事务；按当前实际材料计算，月份仅筛选考核项归属。 */
    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public List<YzbytsAssessmentDTO> monthly(String orgIdentity, YearMonth month, LocalDateTime now) {
        if (orgIdentity == null || orgIdentity.trim().isEmpty()) {
            throw new IllegalArgumentException("月度考核缺少组织域");
        }
        if (month == null || now == null) throw new IllegalArgumentException("缺少月度考核时间");
        Configuration config = configuration();
        List<Organization> organizations = dao.findOrganizations(orgIdentity, null);
        Source source = source(organizations, null);
        List<YzbytsAssessmentDTO> results = new ArrayList<YzbytsAssessmentDTO>();
        Set<String> pending = new LinkedHashSet<String>();
        for (Organization organization : organizations) {
            List<MainRecord> records = records(source, organization.id);
            Set<Integer> businessYears = new TreeSet<Integer>();
            businessYears.add(month.getYear());
            for (MainRecord record : records) {
                int year = YzbytsAssessmentCalculator.parseYear(record.year);
                if (year <= month.getYear()) businessYears.add(year);
            }
            YzbytsAssessmentDTO aggregate = YzbytsAssessmentCalculator.organizationResult(organization,
                    month.getYear(), YzbytsAssessmentCalculator.assessmentStart(month.getYear(), config), now);
            for (int year : businessYears) {
                Calculation calculation = YzbytsAssessmentCalculator.calculate(year, now, organization,
                        records, source.milestones, config, month);
                YzbytsAssessmentDTO part = calculation.result;
                aggregate.items.addAll(part.items);
                aggregate.submissionDeduction = aggregate.submissionDeduction.add(part.submissionDeduction);
                aggregate.missingDeduction = aggregate.missingDeduction.add(part.missingDeduction);
                aggregate.milestoneDeduction = aggregate.milestoneDeduction.add(part.milestoneDeduction);
                aggregate.totalDeduction = aggregate.totalDeduction.add(part.totalDeduction);
                if (year == month.getYear()) {
                    aggregate.submitted = part.submitted;
                    aggregate.milestoneCount = part.milestoneCount;
                    aggregate.missingMilestoneCount = part.missingMilestoneCount;
                }
                pending.addAll(calculation.pendingPenaltyIds);
            }
            results.add(aggregate);
        }
        markPenalties(pending);
        return results;
    }

    private List<YzbytsAssessmentDTO> annual(int year, List<Organization> organizations,
            Configuration config, LocalDateTime now) {
        Source source = source(organizations, Integer.toString(year));
        List<YzbytsAssessmentDTO> results = new ArrayList<YzbytsAssessmentDTO>();
        Set<String> pending = new LinkedHashSet<String>();
        for (Organization organization : organizations) {
            Calculation calculation = YzbytsAssessmentCalculator.calculate(year, now, organization,
                    records(source, organization.id), source.milestones, config, null);
            results.add(calculation.result);
            pending.addAll(calculation.pendingPenaltyIds);
        }
        markPenalties(pending);
        return results;
    }

    private Source source(List<Organization> organizations, String year) {
        Source source = new Source();
        List<String> partyIds = new ArrayList<String>();
        for (Organization organization : organizations) partyIds.add(organization.id);
        Collections.sort(partyIds);
        List<String> mainIds = new ArrayList<String>();
        for (int start = 0; start < partyIds.size(); start += 500) {
            for (MainRecord record : dao.lockMainRecords(
                    partyIds.subList(start, Math.min(start + 500, partyIds.size())), year)) {
                List<MainRecord> group = source.mains.get(record.partyId);
                if (group == null) {
                    group = new ArrayList<MainRecord>();
                    source.mains.put(record.partyId, group);
                }
                group.add(record);
                mainIds.add(record.id);
            }
        }
        Collections.sort(mainIds);
        for (int start = 0; start < mainIds.size(); start += 500) {
            source.milestones.addAll(dao.lockMilestones(
                    mainIds.subList(start, Math.min(start + 500, mainIds.size()))));
        }
        return source;
    }

    private List<MainRecord> records(Source source, String partyId) {
        List<MainRecord> result = source.mains.get(partyId);
        return result == null ? Collections.<MainRecord>emptyList() : result;
    }

    private void markPenalties(Set<String> ids) {
        for (String id : ids) {
            if (dao.markPenalty(id) != 1) {
                throw new IllegalStateException("里程碑数据已变化，请刷新后重新考核：" + id);
            }
        }
    }

    private Configuration configuration() {
        List<Configuration> configurations = dao.findConfigurations();
        if (configurations == null || configurations.isEmpty()) {
            throw new IllegalArgumentException("未配置一支部一特色考核开始日期，请检查DYN_YZBYTSKHRQ");
        }
        Configuration first = configurations.get(0);
        LocalDateTime firstDate = YzbytsAssessmentCalculator.assessmentStart(2000, first);
        for (Configuration config : configurations) {
            if (!firstDate.equals(YzbytsAssessmentCalculator.assessmentStart(2000, config))) {
                throw new IllegalArgumentException("一支部一特色考核开始日期存在多条冲突配置，请核对DYN_YZBYTSKHRQ");
            }
        }
        return first;
    }

    private void validateYear(int year, LocalDateTime now) {
        if (year < 1 || year > 9998 || !years(now).contains(year)) {
            throw new IllegalArgumentException("请选择当前年份或已有一支部一特色记录的年份");
        }
    }

    private String escapeLike(String value) {
        if (value == null || value.trim().isEmpty()) return null;
        return value.trim().replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_");
    }

    private static class Source {
        final Map<String, List<MainRecord>> mains = new HashMap<String, List<MainRecord>>();
        final List<Milestone> milestones = new ArrayList<Milestone>();
    }
}
