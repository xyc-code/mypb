package avicit.pb.ztdr.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Activity;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.MainRecord;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Organization;

@MyBatisRepository
public interface ZtdrAssessmentDAO {
    List<String> findOrgIdentities();
    List<String> findYears();
    long countOrganizations(@Param("partyName") String partyName);
    List<Organization> findOrganizationPage(@Param("partyName") String partyName,
            @Param("offset") long offset, @Param("limit") long limit);
    List<Organization> findOrganizations(@Param("orgIdentity") String orgIdentity,
            @Param("partyId") String partyId);
    List<MainRecord> findMainRecords(@Param("partyIds") List<String> partyIds, @Param("year") String year);
    List<Activity> findActivities(@Param("mainIds") List<String> mainIds);
}
