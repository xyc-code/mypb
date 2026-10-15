package avicit.pb.dwshyk.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Meeting;
import avicit.pb.dwshyk.dto.DwshykAssessmentDTO.Organization;

@MyBatisRepository
public interface DwshykAssessmentDAO {
    List<Organization> findOrganizations(@Param("orgIdentity") String orgIdentity);
    List<Integer> findYears();
    List<Meeting> findMeetings(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
