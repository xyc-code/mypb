package avicit.pb.assessment.integration;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.time.YearMonth;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.ObjectMapper;
import avicit.pb.assessment.dao.TradeUnionAssessmentSourceDAO;

/** Calls the documented internal trade-union result endpoint. */
@Component
public class TradeUnionMonthlyAssessmentSource implements ExternalMonthlyAssessmentSource {
    private static final ObjectMapper JSON = new ObjectMapper();
    private static final String MODULE_CODE = "TRADE_UNION";
    private static final String CATEGORY_CODE = "UNION";

    @Autowired
    private TradeUnionAssessmentSourceDAO dao;

    @Value("${pb.monthly.assessment.trade-union.enabled:false}")
    private boolean enabled;

    @Value("${pb.monthly.assessment.trade-union.base-url:http://127.0.0.1:8080/pb}")
    private String baseUrl;

    @Value("${pb.monthly.assessment.trade-union.path:/integration/monthly-assessment/results}")
    private String path;

    @Value("${pb.monthly.assessment.trade-union.connect-timeout-ms:5000}")
    private int connectTimeoutMs;

    @Value("${pb.monthly.assessment.trade-union.read-timeout-ms:15000}")
    private int readTimeoutMs;

    @Override
    public String getModuleCode() {
        return MODULE_CODE;
    }

    @Override
    public String getCategoryCode() {
        return CATEGORY_CODE;
    }

    @Override
    public List<String> listOrgIdentities() {
        if (!enabled) return Collections.emptyList();
        List<String> result = dao.findOrgIdentities();
        return result == null ? Collections.<String>emptyList() : result;
    }

    @Override
    public ExternalMonthlyAssessmentPayload fetch(String orgIdentity, YearMonth month) {
        if (!enabled) throw new IllegalStateException("工会月度考核接口未启用");
        if (orgIdentity == null || orgIdentity.trim().isEmpty()) {
            throw new IllegalArgumentException("工会月度考核缺少组织域");
        }
        if (month == null) throw new IllegalArgumentException("工会月度考核缺少年月");
        HttpURLConnection connection = null;
        try {
            String requestUrl = url(orgIdentity, month);
            connection = (HttpURLConnection) new URL(requestUrl).openConnection();
            connection.setRequestMethod("GET");
            connection.setConnectTimeout(connectTimeoutMs);
            connection.setReadTimeout(readTimeoutMs);
            connection.setRequestProperty("Accept", "application/json");
            int status = connection.getResponseCode();
            InputStream stream = status >= 200 && status < 300
                    ? connection.getInputStream() : connection.getErrorStream();
            String body = read(stream);
            if (status < 200 || status >= 300) {
                throw new IllegalStateException("工会月度考核接口返回HTTP " + status + "：" + body);
            }
            return JSON.readValue(body, ExternalMonthlyAssessmentPayload.class);
        } catch (Exception ex) {
            if (ex instanceof IllegalArgumentException || ex instanceof IllegalStateException) {
                throw (RuntimeException) ex;
            }
            throw new IllegalStateException("调用工会月度考核接口失败", ex);
        } finally {
            if (connection != null) connection.disconnect();
        }
    }

    private String url(String orgIdentity, YearMonth month) throws Exception {
        String root = trimTrailingSlash(baseUrl);
        String endpoint = path == null || path.trim().isEmpty() ? "" : "/" + trimSlashes(path);
        return root + endpoint + "?moduleCode=" + encode(MODULE_CODE)
                + "&orgIdentity=" + encode(orgIdentity)
                + "&year=" + month.getYear() + "&month=" + month.getMonthValue();
    }

    private static String read(InputStream stream) throws Exception {
        if (stream == null) return "";
        StringBuilder text = new StringBuilder();
        Reader reader = new InputStreamReader(stream, "UTF-8");
        try {
            BufferedReader buffered = new BufferedReader(reader);
            String line;
            while ((line = buffered.readLine()) != null) text.append(line);
        } finally {
            reader.close();
        }
        return text.toString();
    }

    private static String encode(String value) throws Exception {
        return URLEncoder.encode(value, "UTF-8");
    }

    private static String trimTrailingSlash(String value) {
        String result = value == null ? "" : value.trim();
        while (result.endsWith("/")) result = result.substring(0, result.length() - 1);
        return result;
    }

    private static String trimSlashes(String value) {
        String result = value.trim();
        while (result.startsWith("/")) result = result.substring(1);
        while (result.endsWith("/")) result = result.substring(0, result.length() - 1);
        return result;
    }
}
