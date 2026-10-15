package avicit.pb.ztdr.service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import avicit.pb.ztdr.dao.ZtdrAssessmentDAO;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Activity;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.MainRecord;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Organization;

@Service
public class ZtdrAssessmentService {
    @Autowired
    private ZtdrAssessmentDAO dao;

    public List<String> orgIdentities() { return dao.findOrgIdentities(); }

    public List<Integer> years(LocalDate today) {
        Set<Integer> years = new TreeSet<Integer>(Collections.reverseOrder());
        years.add(today.getYear());
        for (String year : dao.findYears()) years.add(ZtdrAssessmentCalculator.parseYear(year));
        return new ArrayList<Integer>(years);
    }

    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public ZtdrAssessmentDTO.Page page(int year, String partyName, int page, int rows, LocalDate today) {
        validateYear(year, today);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        String query = escapeLike(partyName);
        ZtdrAssessmentDTO.Page result = new ZtdrAssessmentDTO.Page();
        result.records = dao.countOrganizations(query);
        result.total = (int) ((result.records + rows - 1) / rows);
        result.page = Math.min(page, Math.max(1, result.total));
        long offset = (long) (result.page - 1) * rows;
        result.data = calculate(year, dao.findOrganizationPage(query, offset, offset + rows), today, null);
        return result;
    }

    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public ZtdrAssessmentDTO detail(int year, String partyId, LocalDate today) {
        validateYear(year, today);
        if (partyId == null || partyId.trim().isEmpty()) throw new IllegalArgumentException("请选择党组织");
        List<Organization> organizations = dao.findOrganizations(null, partyId.trim());
        if (organizations.isEmpty()) throw new IllegalArgumentException("党组织不存在或不在考核范围内");
        return calculate(year, organizations, today, null).get(0);
    }

    /** 调用方统一收集事务中只读取源表，每条结果只包含指定自然月。 */
    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public List<ZtdrAssessmentDTO> monthly(String orgIdentity, YearMonth month, LocalDate today) {
        if (orgIdentity == null || orgIdentity.trim().isEmpty()) throw new IllegalArgumentException("月度考核缺少组织域");
        if (month == null || today == null) throw new IllegalArgumentException("缺少月度考核时间");
        return calculate(month.getYear(), dao.findOrganizations(orgIdentity, null), today, month);
    }

    private List<ZtdrAssessmentDTO> calculate(int year, List<Organization> organizations,
            LocalDate today, YearMonth onlyMonth) {
        Source source = source(organizations, year);
        List<ZtdrAssessmentDTO> results = new ArrayList<ZtdrAssessmentDTO>();
        for (Organization organization : organizations) {
            List<MainRecord> records = source.mains.get(organization.id);
            if (records == null) records = Collections.emptyList();
            List<Activity> activities = new ArrayList<Activity>();
            for (MainRecord record : records) {
                List<Activity> children = source.activities.get(record.id);
                if (children != null) activities.addAll(children);
            }
            results.add(ZtdrAssessmentCalculator.calculate(year, today, organization, records, activities, onlyMonth));
        }
        return results;
    }

    private Source source(List<Organization> organizations, int year) {
        Source source = new Source();
        List<String> partyIds = new ArrayList<String>();
        for (Organization organization : organizations) partyIds.add(organization.id);
        List<String> mainIds = new ArrayList<String>();
        for (int start = 0; start < partyIds.size(); start += 500) {
            for (MainRecord record : dao.findMainRecords(
                    partyIds.subList(start, Math.min(start + 500, partyIds.size())), Integer.toString(year))) {
                List<MainRecord> group = source.mains.get(record.partyId);
                if (group == null) {
                    group = new ArrayList<MainRecord>();
                    source.mains.put(record.partyId, group);
                }
                group.add(record);
                mainIds.add(record.id);
            }
        }
        for (int start = 0; start < mainIds.size(); start += 500) {
            for (Activity activity : dao.findActivities(mainIds.subList(start, Math.min(start + 500, mainIds.size())))) {
                List<Activity> group = source.activities.get(activity.mainId);
                if (group == null) {
                    group = new ArrayList<Activity>();
                    source.activities.put(activity.mainId, group);
                }
                group.add(activity);
            }
        }
        return source;
    }

    private void validateYear(int year, LocalDate today) {
        if (year < 1 || year > 9999 || !years(today).contains(year)) {
            throw new IllegalArgumentException("请选择当前年份或已有主题党日记录的年份");
        }
    }

    private String escapeLike(String value) {
        if (value == null || value.trim().isEmpty()) return null;
        return value.trim().replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_");
    }

    private static class Source {
        final Map<String, List<MainRecord>> mains = new HashMap<String, List<MainRecord>>();
        final Map<String, List<Activity>> activities = new HashMap<String, List<Activity>>();
    }
}
