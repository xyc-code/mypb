package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.springframework.jdbc.core.JdbcTemplate;

//增补选，路有条件总支判断
public  class PartyCommonZBXZZRouteCondition implements RouteConditionInterface {
    /**
     *
     */
    //private static final long serialVersionUID = 1L;
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    @Override
    public boolean evaluate(OpenExecution execution) {

        return false;
    }
}
