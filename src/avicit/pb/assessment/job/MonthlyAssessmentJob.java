package avicit.pb.assessment.job;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import avicit.platform6.core.quartz.IBusinessJob;
import avicit.pb.assessment.service.MonthlyAssessmentService;

@Component("monthlyAssessmentJob")
public class MonthlyAssessmentJob implements IBusinessJob {
    @Autowired
    private MonthlyAssessmentService service;

    public void collectPreviousMonth() throws Exception {
        service.collectPreviousMonth();
    }

    public void collectPreviousMonth(Map<String, Object> parameters) throws Exception {
        if (parameters != null && !parameters.isEmpty()) {
            throw new IllegalArgumentException("月度自动收集任务不接受固定参数，请使用rebuildMonth补算");
        }
        collectPreviousMonth();
    }

    public void rebuildMonth(Map<String, Object> parameters) throws Exception {
        if (parameters == null) throw new IllegalArgumentException("补算需要moduleCode、year、month参数");
        service.rebuildMonth(text(parameters, "moduleCode"), number(parameters, "year"),
                number(parameters, "month"), text(parameters, "orgIdentity"));
    }

    private static String text(Map<String, Object> parameters, String name) {
        Object value = parameters.get(name);
        return value == null ? null : MonthlyAssessmentService.trimToNull(String.valueOf(value));
    }

    private static int number(Map<String, Object> parameters, String name) {
        try {
            return Integer.parseInt(text(parameters, name));
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(name + "须为整数", ex);
        }
    }
}
