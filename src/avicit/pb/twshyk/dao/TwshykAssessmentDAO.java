package avicit.pb.twshyk.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.twshyk.dto.TwshykAssessment.MeetingCount;
import avicit.pb.twshyk.dto.TwshykAssessment.Organization;

@MyBatisRepository
public interface TwshykAssessmentDAO {
    List<String> findOrgIdentities();
    List<Organization> findMonthlyOrganizations(@Param("orgIdentity") String orgIdentity);
    List<Integer> findYears(@Param("orgIdentity") String orgIdentity);
    long countOrganizations(@Param("orgIdentity") String orgIdentity);
    List<Organization> findOrganizationPage(@Param("orgIdentity") String orgIdentity,
            @Param("offset") long offset, @Param("limit") long limit);
    List<Organization> findOrganizations(@Param("orgIdentity") String orgIdentity,
            @Param("leagueId") String leagueId);
    List<MeetingCount> findCounts(@Param("orgIdentity") String orgIdentity,
            @Param("leagueId") String leagueId, @Param("startDate") String startDate,
            @Param("endDate") String endDate, @Param("leagueIds") List<String> leagueIds);
}
