package avicit.pb.zxgj.service;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import avicit.pb.zxgj.dao.ZxgjAssessmentDAO;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.AttachmentCount;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Calculation;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.MainRecord;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Milestone;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Organization;

@Service
public class ZxgjAssessmentService {
    @Autowired
    private ZxgjAssessmentDAO dao;

    public List<String> orgIdentities() { return dao.findOrgIdentities(); }

    public List<Integer> years(LocalDateTime now) {
        Set<Integer> years = new TreeSet<Integer>(Collections.reverseOrder());
        years.add(now.getYear());
        for (String value : dao.findYears()) {
            try { years.add(ZxgjAssessmentCalculator.parseYear(value)); }
            catch (IllegalArgumentException ignored) { /* 无效编号不生成年度选项。 */ }
        }
        return new ArrayList<Integer>(years);
    }

    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public ZxgjAssessmentDTO.Page page(int year, String partyName, int page, int rows, LocalDateTime now) {
        validateYear(year);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        String query = escapeLike(partyName);
        String yearText = String.format("%04d", year);
        ZxgjAssessmentDTO.Page result = new ZxgjAssessmentDTO.Page();
        result.records = dao.countProjects(yearText, query);
        result.total = (int) ((result.records + rows - 1) / rows);
        result.page = Math.min(page, Math.max(1, result.total));
        long offset = (long) (result.page - 1) * rows;
        List<String> ids = dao.findProjectPage(yearText, query, offset, offset + rows);
        Source source = source(ids);
        List<Calculation> calculations = new ArrayList<Calculation>();
        for (String id : ids) {
            MainRecord main = source.mains.get(id);
            if (main == null) continue;
            Calculation calculation = ZxgjAssessmentCalculator.calculate(main, source.milestones, now, null);
            requireYear(calculation.result, year);
            calculations.add(calculation);
            result.data.add(calculation.result);
        }
        markPenalties(calculations);
        return result;
    }

    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public ZxgjAssessmentDTO detail(int year, String projectId, LocalDateTime now) {
        validateYear(year);
        if (projectId == null || projectId.trim().isEmpty()) {
            throw new IllegalArgumentException("请选择共建项目");
        }
        Source source = source(Collections.singletonList(projectId.trim()));
        MainRecord main = source.mains.get(projectId.trim());
        if (main == null) throw new IllegalArgumentException("共建项目不存在：" + projectId);
        Calculation calculation = ZxgjAssessmentCalculator.calculate(main, source.milestones, now, null);
        requireYear(calculation.result, year);
        markPenalties(Collections.singletonList(calculation));
        return calculation.result;
    }

    /** 参与统一Writer事务；只认定目标归属月，不附带修改其他月份的扣分标记。 */
    @Transactional(value = "transactionManagerMybatis", rollbackFor = Exception.class)
    public List<ZxgjAssessmentDTO> monthly(String domain, YearMonth month, LocalDateTime now) {
        if (domain == null || domain.trim().isEmpty()) throw new IllegalArgumentException("月度考核缺少组织域");
        if (month == null || now == null) throw new IllegalArgumentException("缺少月度考核时间");
        Source source = source(dao.findMonthlyProjectIds(domain));
        Map<String, ZxgjAssessmentDTO> organizations = new LinkedHashMap<String, ZxgjAssessmentDTO>();
        List<Calculation> calculations = new ArrayList<Calculation>();
        for (MainRecord main : source.mains.values()) {
            Organization organization = source.organizations.get(main.partyId);
            if (organization == null || !domain.equals(organization.orgIdentity)) continue;
            Calculation calculation = ZxgjAssessmentCalculator.calculate(main, source.milestones, now, month);
            calculations.add(calculation);
            ZxgjAssessmentDTO aggregate = organizations.get(main.partyId);
            if (aggregate == null) {
                aggregate = new ZxgjAssessmentDTO();
                aggregate.partyId = organization.id;
                aggregate.partyName = organization.name;
                aggregate.orgIdentity = organization.orgIdentity;
                aggregate.departmentId = organization.departmentId;
                aggregate.departmentName = organization.departmentName;
                aggregate.year = month.getYear();
                organizations.put(main.partyId, aggregate);
            }
            ZxgjAssessmentDTO part = calculation.result;
            aggregate.items.addAll(part.items);
            aggregate.milestoneCount += part.milestoneCount;
            aggregate.milestoneDeduction = aggregate.milestoneDeduction.add(part.milestoneDeduction);
            aggregate.summaryDeduction = aggregate.summaryDeduction.add(part.summaryDeduction);
            aggregate.totalDeduction = aggregate.totalDeduction.add(part.totalDeduction);
        }
        markPenalties(calculations);
        return new ArrayList<ZxgjAssessmentDTO>(organizations.values());
    }

    private Source source(List<String> ids) {
        Source source = new Source();
        List<String> mainIds = new ArrayList<String>(new TreeSet<String>(ids));
        Set<String> partyIds = new TreeSet<String>();
        Set<String> parentIds = new TreeSet<String>();
        for (int start = 0; start < mainIds.size(); start += 500) {
            for (MainRecord main : dao.lockMainRecords(mainIds.subList(start, Math.min(start + 500, mainIds.size())))) {
                source.mains.put(main.id, main);
                if (main.partyId != null) partyIds.add(main.partyId);
                parentIds.add(main.id);
            }
        }
        mainIds = new ArrayList<String>(source.mains.keySet());
        for (int start = 0; start < mainIds.size(); start += 500) {
            source.milestones.addAll(dao.lockMilestones(mainIds.subList(start, Math.min(start + 500, mainIds.size()))));
        }
        for (Milestone milestone : source.milestones) parentIds.add(milestone.id);
        List<String> parties = new ArrayList<String>(partyIds);
        for (int start = 0; start < parties.size(); start += 500) {
            for (Organization organization : dao.findOrganizations(parties.subList(start, Math.min(start + 500, parties.size())))) {
                source.organizations.put(organization.id, organization);
            }
        }
        Map<String, Long> attachments = new HashMap<String, Long>();
        List<String> parents = new ArrayList<String>(parentIds);
        for (int start = 0; start < parents.size(); start += 500) {
            for (AttachmentCount count : dao.countAttachments(parents.subList(start, Math.min(start + 500, parents.size())))) {
                attachments.put(count.parentId, count.count);
            }
        }
        for (MainRecord main : source.mains.values()) {
            Organization organization = source.organizations.get(main.partyId);
            if (organization != null) {
                main.partyName = organization.name;
                main.orgIdentity = organization.orgIdentity;
                main.departmentId = organization.departmentId;
                main.departmentName = organization.departmentName;
            }
            main.attachmentCount = attachments.containsKey(main.id) ? attachments.get(main.id) : 0;
        }
        for (Milestone milestone : source.milestones) {
            milestone.attachmentCount = attachments.containsKey(milestone.id) ? attachments.get(milestone.id) : 0;
        }
        return source;
    }

    private void markPenalties(List<Calculation> calculations) {
        Set<String> milestones = new LinkedHashSet<String>();
        Set<String> summaries = new LinkedHashSet<String>();
        for (Calculation calculation : calculations) {
            milestones.addAll(calculation.pendingMilestoneIds);
            summaries.addAll(calculation.pendingSummaryIds);
        }
        for (String id : milestones) {
            if (dao.markMilestonePenalty(id) != 1) {
                throw new IllegalStateException("里程碑数据已变化，请重新考核：" + id);
            }
        }
        for (String id : summaries) {
            if (dao.markSummaryPenalty(id) != 1) {
                throw new IllegalStateException("年度总结数据已变化，请重新考核：" + id);
            }
        }
    }

    private void requireYear(ZxgjAssessmentDTO result, int year) {
        if (result.year != year) throw new IllegalArgumentException("共建项目不属于所选年度：" + result.projectId);
    }

    private void validateYear(int year) {
        if (year < 1 || year > 9999) throw new IllegalArgumentException("考核年度须为有效的4位年份");
    }

    private String escapeLike(String value) {
        if (value == null || value.trim().isEmpty()) return null;
        return value.trim().replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_");
    }

    private static class Source {
        final Map<String, MainRecord> mains = new LinkedHashMap<String, MainRecord>();
        final Map<String, Organization> organizations = new HashMap<String, Organization>();
        final List<Milestone> milestones = new ArrayList<Milestone>();
    }
}
