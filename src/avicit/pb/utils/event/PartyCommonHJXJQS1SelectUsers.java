package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.springframework.jdbc.core.JdbcTemplate;

public class PartyCommonHJXJQS1SelectUsers extends UserSelect implements LoaderConstant {
    BpmsControlUtils bpmsControlUtils;
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);

    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {

        return null;
    }
}
