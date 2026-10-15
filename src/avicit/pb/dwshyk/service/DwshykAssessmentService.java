package avicit.pb.dwshyk.service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import avicit.pb.dwshyk.dao.DwshykAssessmentDAO;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Meeting;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Organization;

@Service
public class DwshykAssessmentService {
    @Autowired
    private DwshykAssessmentDAO dao;

    public List<Integer> years(LocalDate today) {
        Set<Integer> years = new TreeSet<Integer>(Collections.reverseOrder());
        years.add(today.getYear());
        for (Integer year : dao.findYears()) if (year != null && year >= 2 && year <= 9998) years.add(year);
        return new ArrayList<Integer>(years);
    }

    public List<String> orgIdentities() {
        Set<String> identities = new TreeSet<String>();
        for (Organization organization : dao.findOrganizations(null)) {
            if (DwshykAssessmentCalculator.eligible(organization) && organization.orgIdentity != null
                    && !organization.orgIdentity.trim().isEmpty()) identities.add(organization.orgIdentity);
        }
        return new ArrayList<String>(identities);
    }

    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public DwshykAssessmentDTO.Page page(int year, int page, int rows, LocalDate today) {
        validateYear(year);
        if (page < 1 || rows < 1 || rows > 100) {
            throw new IllegalArgumentException("页码须大于0，每页条数须在1至100之间");
        }
        List<Organization> tree = dao.findOrganizations(null);
        List<Organization> organizations = eligible(tree);
        DwshykAssessmentDTO.Page result = new DwshykAssessmentDTO.Page();
        result.records = organizations.size();
        result.total = (organizations.size() + rows - 1) / rows;
        result.page = Math.min(page, Math.max(1, result.total));
        int offset = (result.page - 1) * rows;
        result.data = calculate(year, organizations.subList(offset, Math.min(offset + rows, organizations.size())),
                tree, today, null);
        return result;
    }

    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public DwshykAssessmentDTO detail(int year, String partyId, LocalDate today) {
        validateYear(year);
        if (partyId == null || partyId.trim().isEmpty()) throw new IllegalArgumentException("请选择党组织");
        List<Organization> tree = dao.findOrganizations(null);
        for (Organization organization : tree) {
            if (partyId.trim().equals(organization.id) && DwshykAssessmentCalculator.eligible(organization)) {
                return calculate(year, Collections.singletonList(organization), tree, today, null).get(0);
            }
        }
        throw new IllegalArgumentException("党组织不存在或不在考核范围内");
    }

    /** 仅输出指定自然月到期的月、季、年考核项目，持久化交给现有统一收集器。 */
    @Transactional(value = "transactionManagerMybatis", readOnly = true)
    public List<DwshykAssessmentDTO> monthly(String orgIdentity, YearMonth month, LocalDate today) {
        if (orgIdentity == null || orgIdentity.trim().isEmpty()) throw new IllegalArgumentException("月度考核缺少组织域");
        if (month == null || today == null) throw new IllegalArgumentException("缺少月度考核时间");
        int year = month.getMonthValue() >= 10 ? month.getYear() + 1 : month.getYear();
        validateYear(year);
        List<Organization> tree = dao.findOrganizations(null);
        List<Organization> organizations = new ArrayList<Organization>();
        for (Organization organization : eligible(tree)) {
            if (orgIdentity.equals(organization.orgIdentity)) organizations.add(organization);
        }
        return calculate(year, organizations, tree, today, month);
    }

    private List<DwshykAssessmentDTO> calculate(int year, List<Organization> organizations,
            List<Organization> tree, LocalDate today, YearMonth month) {
        List<DwshykAssessmentDTO> results = new ArrayList<DwshykAssessmentDTO>();
        if (organizations.isEmpty()) return results;
        List<Meeting> meetings = dao.findMeetings(LocalDate.of(year - 1, 10, 1).toString(),
                LocalDate.of(year, 10, 1).toString());
        for (Organization organization : organizations) {
            results.add(month == null
                    ? DwshykAssessmentCalculator.calculate(year, today, organization, tree, meetings)
                    : DwshykAssessmentCalculator.calculateMonth(month, today, organization, tree, meetings));
        }
        return results;
    }

    private List<Organization> eligible(List<Organization> tree) {
        List<Organization> result = new ArrayList<Organization>();
        for (Organization organization : tree) {
            if (DwshykAssessmentCalculator.eligible(organization)) result.add(organization);
        }
        return result;
    }

    private void validateYear(int year) {
        if (year < 2 || year > 9998) throw new IllegalArgumentException("考核年份须在2至9998之间");
    }
}
