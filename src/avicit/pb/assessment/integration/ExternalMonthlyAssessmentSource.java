package avicit.pb.assessment.integration;

import java.time.YearMonth;
import java.util.List;

/** Source contract shared by HTTP, file and same-database adapters. */
public interface ExternalMonthlyAssessmentSource {
    String getModuleCode();

    String getCategoryCode();

    List<String> listOrgIdentities();

    ExternalMonthlyAssessmentPayload fetch(String orgIdentity, YearMonth month);
}
