package avicit.pb.zxgj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.AttachmentCount;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.MainRecord;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Milestone;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Organization;

@MyBatisRepository
public interface ZxgjAssessmentDAO {
    List<String> findOrgIdentities();
    List<String> findYears();
    long countProjects(@Param("year") String year, @Param("partyName") String partyName);
    List<String> findProjectPage(@Param("year") String year, @Param("partyName") String partyName,
            @Param("offset") long offset, @Param("limit") long limit);
    List<String> findMonthlyProjectIds(@Param("orgIdentity") String orgIdentity);
    List<MainRecord> lockMainRecords(@Param("mainIds") List<String> mainIds);
    List<Milestone> lockMilestones(@Param("mainIds") List<String> mainIds);
    List<Organization> findOrganizations(@Param("partyIds") List<String> partyIds);
    List<AttachmentCount> countAttachments(@Param("parentIds") List<String> parentIds);
    int markMilestonePenalty(@Param("id") String id);
    int markSummaryPenalty(@Param("id") String id);
}
