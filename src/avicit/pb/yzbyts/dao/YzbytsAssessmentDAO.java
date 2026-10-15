package avicit.pb.yzbyts.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Configuration;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.MainRecord;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Milestone;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Organization;

@MyBatisRepository
public interface YzbytsAssessmentDAO {
    List<String> findOrgIdentities();
    List<String> findYears();
    List<Configuration> findConfigurations();
    long countOrganizations(@Param("partyName") String partyName);
    List<Organization> findOrganizationPage(@Param("partyName") String partyName,
            @Param("offset") long offset, @Param("limit") long limit);
    List<Organization> findOrganizations(@Param("orgIdentity") String orgIdentity,
            @Param("partyId") String partyId);
    List<MainRecord> lockMainRecords(@Param("partyIds") List<String> partyIds,
            @Param("year") String year);
    List<Milestone> lockMilestones(@Param("mainIds") List<String> mainIds);
    int markPenalty(@Param("id") String id);
}
