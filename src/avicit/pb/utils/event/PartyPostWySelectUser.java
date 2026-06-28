package avicit.pb.utils.event;

import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.*;

public class PartyPostWySelectUser extends UserSelect implements LoaderConstant {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName,String startFormId,String loginUserId) {
        JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
        ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
        Set<String> set  = new HashSet<>();
        set.add("avicit_bpm_start_id");
        Map<String,Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
        String avicit_bpm_start_id = (String)map.get("avicit_bpm_start_id");
        List<Actor> actorlist = new ArrayList<>();
        String sq = "select party_id from party_organ_member t1 where t1.user_id = '" + avicit_bpm_start_id + "'";
        //获取拟稿人后先查是否为下属党支部或者有兼职党支部的情况
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sq);
        if(list!=null&&list.size()!=1){
            Actor actor = new UserActor();
            actor.setId(avicit_bpm_start_id);// 用户ID
            actor.setName(sysUserLoader.getSysUserNameById(avicit_bpm_start_id));// 用户
            actor.setType("user");// 类别
            actorlist.add(actor);
            Actors actors = new Actors();
            actors.setActorlist(actorlist);
            actors.setId(ComUtil.getId());
            return actors;
        }else if(list != null) {
            Map<String,Object> map1 = list.get(0);
            Map<String, Object> map2 = jdbcTemplate.queryForMap("select parent_id from party_organization t where t.id = '" + map1.get("party_id") + "'");
            if(!map2.get("PARENT_ID").equals("402811817e482ecb017e483065e4014e")){
                //如果是下属党支部就去查党委的组织委员
                List<Map<String, Object>> list1 = jdbcTemplate.queryForList("select user_id from party_organ_member t where t.party_id = '" + map2.get("PARENT_ID") + "' and user_post = '4'");
                return getActors(actorlist, list1);
            }else{
                List<Map<String, Object>> list1 = jdbcTemplate.queryForList("select user_id from party_organ_member t where t.party_id = '" + map1.get("party_id") + "' and user_post = '4'");
                return getActors(actorlist, list1);
            }
        }else{
            Actor actor = new UserActor();
            actor.setId(avicit_bpm_start_id);// 用户ID
            actor.setName(sysUserLoader.getSysUserNameById(avicit_bpm_start_id));// 用户
            actor.setType("user");// 类别
            actorlist.add(actor);
            Actors actors = new Actors();
            actors.setActorlist(actorlist);
            actors.setId(ComUtil.getId());
            return actors;
        }
    }

    private Actors getActors(List<Actor> actorlist, List<Map<String, Object>> list1) {
        for (Map<String, Object> stringObjectMap : list1) {
            Actor actor = new UserActor();
            String user = (String) stringObjectMap.get("USER_ID");
            actor.setId(user);// 用户ID
            actor.setName(sysUserLoader.getSysUserNameById(user));// 用户
            actor.setType("user");// 类别
            actorlist.add(actor);
        }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }
}
