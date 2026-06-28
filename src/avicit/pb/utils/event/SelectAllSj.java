package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.CollectionUtils;

import java.util.*;

public class SelectAllSj extends UserSelect implements LoaderConstant {
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);

    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {
        //查询各个组织书记
        List actorlist = new ArrayList();
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select s1.id as user_id  from party_organization p2 left join \n" +
                " party_organ_member p1 on p2.id=p1.party_id and p1.USER_POST in ('0','1') left join sys_user s1 on s1.id=p1.USER_ID \n" +
                "where tree_level ='2'");

            if(!CollectionUtils.isEmpty(list)){
                for (Map<String, Object> map1 : list) {
                    Object userObj = map1.get("user_id");
                    if(!Objects.isNull(userObj)){
                        String userId = map1.get("user_id").toString();
                        Actor actor = new UserActor();
                        actor.setId(userId);// 用户ID
                        actor.setName(sysUserLoader.getSysUserNameById(userId));// 用户
                        actor.setType("user");// 类别
                        actorlist.add(actor);
                    }
                }
            }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }
}
