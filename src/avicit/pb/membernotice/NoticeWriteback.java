package avicit.pb.membernotice;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import java.time.LocalDate;
import java.util.*;
import static avicit.pb.membernotice.NoticeRules.*;

/** Only attached to the normal end node's start event, never to process termination. */
public class NoticeWriteback implements EventListener {
    @Override
    public void notify(EventListenerExecution execution) throws Exception {
        require("end1".equals(execution.getActivity().getName()), "党员阅知回写仅可在正常结束节点执行");
        require(TransactionSynchronizationManager.isActualTransactionActive(), "党员阅知回写需要流程事务");
        JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
        String id = text(execution.getVariable("id"));
        List<Map<String, Object>> rows = jdbc.queryForList("select * from DYN_DYFSYZ where ID=? for update", id);
        require(rows.size() == 1, "阅知通知不存在，未更新党员库");
        Map<String, Object> row = rows.get(0);
        require(execution.getProcessInstanceId().equals(text(row.get("PROCESS_INSTANCE_ID"))), "通知与流程实例不匹配");
        if (row.get("APPLIED_DATE") != null) return;
        String member = text(row.get("MEMBER_ID")), updater = text(row.get("SECRETARY_ID"));
        int updated;
        if (formal(text(row.get("PARTY_TYPE_NAME")))) {
            require(row.get("REGULAR_DATE") != null, "正式党员缺少转正日期，未更新党员库");
            java.sql.Date regular = new java.sql.Date(((Date) row.get("REGULAR_DATE")).getTime());
            int years = partyYears(regular.toLocalDate(), LocalDate.now());
            updated = jdbc.update("update PARTY_MEMBER set PARTY_TYPE=?,REGULAR_DATE=?,ATTRIBUTE_05=?,LAST_UPDATED_BY=?,"
                    + "LAST_UPDATE_DATE=sysdate,VERSION=nvl(VERSION,0)+1 where ID=?", row.get("PARTY_TYPE"), regular,
                    Integer.toString(years), updater, member);
        } else {
            require("预备党员".equals(text(row.get("PARTY_TYPE_NAME"))), "通知党员类别不正确");
            updated = jdbc.update("update PARTY_MEMBER set PARTY_TYPE=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,"
                    + "VERSION=nvl(VERSION,0)+1 where ID=?", row.get("PARTY_TYPE"), updater, member);
        }
        require(updated == 1, "党员记录不存在，阅知未完成，请核对党员库后重试");
        jdbc.update("update DYN_DYFSYZ set NOTICE_STATE='ended',APPLIED_DATE=sysdate,LAST_UPDATED_BY=?,"
                + "LAST_UPDATE_DATE=sysdate,VERSION=VERSION+1 where ID=?", updater, id);
    }
}
