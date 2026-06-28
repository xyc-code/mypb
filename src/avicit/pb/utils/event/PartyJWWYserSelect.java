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

public class PartyJWWYserSelect extends UserSelect implements LoaderConstant {
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);

    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {
        //查询拟稿人纪委委员
        Set<String> set = new HashSet<String>();
        set.add("avicit_bpm_start_id");
        Map<String, Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
        String avicit_bpm_start_id = (String) map.get("avicit_bpm_start_id");
        List actorlist = new ArrayList();
        if (StringUtils.isNotEmpty(avicit_bpm_start_id)) {
            String firstLevel = jdbcTemplate.queryForObject("select SUBSTR(tree_path,INSTR(tree_path,'/',1,1)+1,\n" +
                    "         INSTR(tree_path,'/',INSTR(tree_path,'/',1,1)+1)-INSTR(tree_path,'/',1,1)-1)as value\n" +
                    "from (select tree_path from party_organization\n" +
                    "where id=(select t.party_id from PARTY_MEMBER  t where t.user_id = '" + avicit_bpm_start_id + "' and rownum =1)\n" +
                    ")a", String.class);
            if(!StringUtils.isEmpty(firstLevel)){
                List<Map<String, Object>> list = jdbcTemplate.queryForList("select user_id from PARTY_ORGAN_MEMBER where party_id=(select id from (select id,party_name from party_organization where tree_path like '%" + firstLevel + "%')a\n" +
                        "where a.party_name like '%纪委%' and rownum =1) and user_post='5' and rownum=1");

                if(!CollectionUtils.isEmpty(list)){
                    for (Map<String, Object> map1 : list) {
                        String userId = map1.get("user_id").toString();
                        Actor actor = new UserActor();
                        actor.setId(userId);// 用户ID
                        actor.setName(sysUserLoader.getSysUserNameById(userId));// 用户
                        actor.setType("user");// 类别
                        actorlist.add(actor);
                    }
                }
            }
        }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;

    }
}
