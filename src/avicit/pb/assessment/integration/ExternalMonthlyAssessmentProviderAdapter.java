package avicit.pb.assessment.integration;

import java.time.YearMonth;
import java.util.List;
import avicit.pb.assessment.dto.MonthlyAssessmentResult;
import avicit.pb.assessment.provider.MonthlyAssessmentProvider;

/** Turns one external result source into the common monthly provider contract. */
public final class ExternalMonthlyAssessmentProviderAdapter implements MonthlyAssessmentProvider {
    private final ExternalMonthlyAssessmentSource source;

    public ExternalMonthlyAssessmentProviderAdapter(ExternalMonthlyAssessmentSource source) {
        if (source == null) throw new IllegalArgumentException("外部月度考核数据源不能为空");
        this.source = source;
    }

    @Override
    public String getModuleCode() {
        return source.getModuleCode();
    }

    @Override
    public List<String> listOrgIdentities() {
        return source.listOrgIdentities();
    }

    @Override
    public List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month) {
        ExternalMonthlyAssessmentPayload payload = source.fetch(orgIdentity, month);
        return ExternalMonthlyAssessmentAdapter.toResults(payload, getModuleCode(), source.getCategoryCode(),
                orgIdentity, month);
    }
}
