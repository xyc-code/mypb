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

import java.util.*;

/**
 * 20241118
 * 查询当前拟稿人所在党组织的党支部书记、党总支部书记、党委书记
 * 如果本级没有则继续往上级查询，直到查询到顶级
 */
public class PartyZBSJUserSelect extends UserSelect implements LoaderConstant {
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);

    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {

        Set<String> set = new HashSet<String>();
        set.add("avicit_bpm_start_id");
        Map<String, Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
        String avicit_bpm_start_id = (String) map.get("avicit_bpm_start_id");
        List actorlist = new ArrayList();
        if (StringUtils.isNotEmpty(avicit_bpm_start_id)) {
            String selectSelfSjSql = "select distinct t.user_id from PARTY_ORGAN_MEMBER t " +
                    "where t.party_id in (select distinct t1.party_id from PARTY_ORGAN_MEMBER t1 where t1.user_id = '" + avicit_bpm_start_id+ "') " +
                    "and (t.user_post = '0' or t.user_post = '1' or t.user_post = '2')";
            List<Map<String, Object>> selfList = jdbcTemplate.queryForList(selectSelfSjSql);
            if (selfList != null && selfList.size() > 0) {
                for (Map<String, Object> map1 : selfList) {
                    String userId = map1.get("user_id").toString();
                    Actor actor = new UserActor();
                    actor.setId(userId);// 用户ID
                    actor.setName(sysUserLoader.getSysUserNameById(userId));// 用户
                    actor.setType("user");// 类别
                    actorlist.add(actor);
                }
            }else{//未查到党组织领导，继续往上查，很少用到
                String querySql = "select distinct t.user_id from PARTY_ORGAN_MEMBER t " +
                        "where t.party_id in (select t.parent_id from party_organization t where t.id in(" +
                        "select distinct t1.party_id from PARTY_ORGAN_MEMBER t1 where t1.user_id = '" + avicit_bpm_start_id + "'))" +
                        "and (t.user_post = '0' or t.user_post = '1' or t.user_post = '2')";
                List<Map<String, Object>> list = jdbcTemplate.queryForList(selectSelfSjSql);
                if (list != null && list.size() > 0) {
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
