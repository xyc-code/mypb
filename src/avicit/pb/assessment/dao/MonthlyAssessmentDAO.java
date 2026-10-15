package avicit.pb.assessment.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.dto.MonthlyAssessmentResult.Department;

@MyBatisRepository
public interface MonthlyAssessmentDAO {
    List<String> findStoredOrgIdentities(@Param("moduleCode") String moduleCode);
    List<MonthlyAssessmentResult> lockResults(@Param("orgIdentity") String orgIdentity,
            @Param("moduleCode") String moduleCode, @Param("year") int year, @Param("month") int month);
    int insertResult(MonthlyAssessmentResult result);
    int updateResult(MonthlyAssessmentResult result);
    List<Department> findDepartments(@Param("orgIdentity") String orgIdentity,
            @Param("resultId") String resultId);
    int insertDepartment(@Param("result") MonthlyAssessmentResult result,
            @Param("department") Department department, @Param("id") String id);
    List<MonthlyAssessmentResult> findModuleOptions(@Param("orgIdentity") String orgIdentity);
    List<MonthlyAssessmentResult> findDepartmentOptions(@Param("orgIdentity") String orgIdentity);
    long countResults(@Param("orgIdentity") String orgIdentity, @Param("year") int year,
            @Param("month") int month, @Param("departmentId") String departmentId,
            @Param("categoryCode") String categoryCode, @Param("moduleCode") String moduleCode);
    List<MonthlyAssessmentResult> findPage(@Param("orgIdentity") String orgIdentity,
            @Param("year") int year, @Param("month") int month,
            @Param("departmentId") String departmentId, @Param("categoryCode") String categoryCode,
            @Param("moduleCode") String moduleCode, @Param("offset") long offset, @Param("limit") long limit);
}
