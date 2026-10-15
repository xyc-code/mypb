package avicit.pb.assessment.provider;

import java.time.YearMonth;
import java.util.List;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;

/** Providers calculate results; the common writer owns snapshots and transactions. */
public interface MonthlyAssessmentProvider {
    String getModuleCode();
    List<String> listOrgIdentities();
    List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month);
}
