package avicit.pb.twshyk.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import avicit.pb.twshyk.dao.TwshykAssessmentDAO;
import avicit.pb.twshyk.dto.TwshykAssessment;
import avicit.pb.twshyk.dto.TwshykAssessment.MeetingCount;
import avicit.pb.twshyk.dto.TwshykAssessment.Organization;

@Service
public class TwshykAssessmentService {
    @Autowired
    private TwshykAssessmentDAO dao;

    public List<Integer> years(String orgIdentity) {
        requireDomain(orgIdentity);
        return dao.findYears(orgIdentity);
    }

    public List<TwshykAssessment> assess(int year, String orgIdentity, String leagueId, LocalDate today) {
        validateYear(year, orgIdentity);
        List<Organization> organizations = dao.findOrganizations(orgIdentity, leagueId);
        if (leagueId != null && organizations.isEmpty()) {
            throw new IllegalArgumentException("团组织不存在或不在当前考核范围内");
        }
        return calculate(year, orgIdentity, organizations, today, leagueId != null);
    }

    public TwshykAssessment.Page page(int year, String orgIdentity, int page, int rows, LocalDate today) {
        validateYear(year, orgIdentity);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        TwshykAssessment.Page result = new TwshykAssessment.Page();
        result.records = dao.countOrganizations(orgIdentity);
        result.total = (int) ((result.records + rows - 1) / rows);
        result.page = Math.min(page, Math.max(1, result.total));
        long offset = (long) (result.page - 1) * rows;
        result.data = calculate(year, orgIdentity,
                dao.findOrganizationPage(orgIdentity, offset, offset + rows), today, false);
        return result;
    }

    private void validateYear(int year, String orgIdentity) {
        if (year < 2 || year > 9998 || !years(orgIdentity).contains(year)) {
            throw new IllegalArgumentException("请选择会议记录中存在的年份");
        }
    }

    private List<TwshykAssessment> calculate(int year, String orgIdentity,
            List<Organization> organizations, LocalDate today, boolean detail) {
        List<TwshykAssessment> results = new ArrayList<TwshykAssessment>();
        if (organizations.isEmpty()) return results;
        List<String> ids = new ArrayList<String>();
        for (Organization organization : organizations) ids.add(organization.id);
        List<MeetingCount> counts = dao.findCounts(orgIdentity, null,
                LocalDate.of(year - 1, 11, 1).toString(), LocalDate.of(year, 11, 1).toString(), ids);
        Map<String, List<MeetingCount>> byOrganization = new HashMap<String, List<MeetingCount>>();
        for (MeetingCount count : counts) {
            List<MeetingCount> group = byOrganization.get(count.leagueId);
            if (group == null) {
                group = new ArrayList<MeetingCount>();
                byOrganization.put(count.leagueId, group);
            }
            group.add(count);
        }
        for (Organization organization : organizations) {
            List<MeetingCount> group = byOrganization.get(organization.id);
            if (group == null) group = new ArrayList<MeetingCount>();
            TwshykAssessment result = TwshykAssessmentCalculator.calculate(year, today, organization, group);
            if (!detail) result.periods = null;
            results.add(result);
        }
        return results;
    }

    private void requireDomain(String orgIdentity) {
        if (orgIdentity == null || orgIdentity.trim().isEmpty()) {
            throw new IllegalArgumentException("未获取到当前组织域，请重新登录");
        }
    }
}
