package avicit.pb.utils.event;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;
public class XjqsSjInser implements EventListener {
    @Override
    public void notify(EventListenerExecution execution) throws Exception {
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        String formId = (String) execution.getVariable("id");
        String activityName = execution.getActivityName();
        if("task12".equals(activityName)){
            LocalDate now = LocalDate.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String nowDate = now.format(formatter);
            String sql = " update  DYN_HUANJIE_QS set GSDWSPYJSJ=DATE '" + nowDate + "' where id='" + formId + "'";
            jdbcTemplate.execute(sql);

        }else{
            TableData td = new TableData();
            td.setTableName("DYN_HUANJIE_QS");//党组织工作计划
            td.setPrimaryKeyValue(formId);
            BpmsControlUtils bpmsControlUtils = SpringMVCFactory.getBean(BpmsControlUtils.class);
            Map<String, Object> workMap = bpmsControlUtils.getData(td);
            String partyId = MapUtils.getString(workMap, "PARTY_ID");
            String sqlOrg = "select attr3 from DYN_PARTY_ORG_INFO where PARTY_ID='" + partyId + "' and rownum=1 order by  attr3 desc";
            String beginTime = jdbcTemplate.queryForObject(sqlOrg, String.class);


            LocalDate now = LocalDate.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String nowDate = now.format(formatter);
            String sql = " update  DYN_HUANJIE_QS set QSSXSJ=DATE '" + nowDate + "',ZKDYDHSJ= DATE'" + beginTime + "' where id='" + formId + "'";
            jdbcTemplate.execute(sql);
        }
    }
}
