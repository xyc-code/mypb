package avicit.pb.utils.event;


import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.sysmsg.dto.SysMsgDTO;
import avicit.platform6.msystem.sysmsg.service.SysMsgService;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Calendar;
import java.util.List;
import java.util.Map;


@SuppressWarnings("serial")
public class KeyWorkEvent implements EventListener {
    SysMsgService sysMsgServie = SpringFactory.getBean(SysMsgService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

    @Override
    public void notify(EventListenerExecution arg0) throws Exception {
        String userid = null;
        String id = (String) arg0.getVariable("id");
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select t2.userid_ from dyn_democracy t1 left join BPM_HIST_PROCINST t2 on t1.id = t2.FORMID_ where t1.id = '" + id + "'");
        userid = (String) list.get(0).get("USERID_");
        Calendar c = Calendar.getInstance();
        SysMsgDTO sysMsgdto = new SysMsgDTO();
        sysMsgdto.setTitle("民主生活会");
        sysMsgdto.setContent("民主生活会已通过审批，请开展工作后上报流程");
        sysMsgdto.setMsgType("0");
        sysMsgdto.setSendUser("1");
        sysMsgdto.setSendUserAlias("系统消息");
        sysMsgdto.setRecvUser(userid);
        sysMsgdto.setRecvUserAlias("信息消息");
        c.add(Calendar.DAY_OF_MONTH, 14);
        sysMsgdto.setSendDate(c.getTime());
        c.add(Calendar.DAY_OF_MONTH, 15);
        sysMsgdto.setDisappearDate(c.getTime());
        boolean bol = sysMsgServie.insertMsg(sysMsgdto);
    }
}
