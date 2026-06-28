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

public class PartyPostAllwySelectUser extends UserSelect implements LoaderConstant {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId, String loginUserId) {
        JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
        ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
        Set<String> set  = new HashSet<>();
        set.add("avicit_bpm_start_id");
        Map<String,Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
        String avicit_bpm_start_id = (String)map.get("avicit_bpm_start_id");
        List<Actor> actorlist = new ArrayList<>();
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select party_id from party_organ_member t1 where t1.user_id = '" + avicit_bpm_start_id + "'");
        if(list!=null&&list.size()!=1){
            for (Map<String, Object> map1 : list) {
                Map<String, Object> map2 = jdbcTemplate.queryForMap("select id,parent_ID from party_organization t where t.id = '" + map1.get("PARTY_ID") + "'");
                if (map2.get("PARENT_ID").equals("402811817e482ecb017e483065e4014e")) {
                    String sql = "select  * from party_organ_member t1 left join sys_lookup_v v on t1.USER_POST  = v.lookup_code where party_id =  '" + map2.get("ID") + "'  and v.lookup_type = 'PARTY_POST' and lookup_name like '%委员%' ";
                    List<Map<String, Object>> list1 = jdbcTemplate.queryForList(sql);
                    for (Map<String, Object> map3 : list1) {
                        Actor actor = new UserActor();
                        String user_id = (String) map3.get("USER_ID");
                        actor.setId(user_id);// 用户ID
                        actor.setName(sysUserLoader.getSysUserNameById(user_id));// 用户
                        actor.setType("user");// 类别
                        actorlist.add(actor);
                    }
                }
            }
            Actors actors = new Actors();
            actors.setActorlist(actorlist);
            actors.setId(ComUtil.getId());
            return actors;
        }else if(list!=null){
            Map<String,Object> map1 = list.get(0);
            List<Map<String, Object>> list1 = jdbcTemplate.queryForList("select  * from party_organ_member t1 left join sys_lookup_v v on t1.USER_POST  = v.lookup_code where party_id =  '" + map1.get("PARTY_ID") + "'  and v.lookup_type = 'PARTY_POST' and lookup_name like '%委员%'");
            for (Map<String, Object> map3 : list1) {
                Actor actor = new UserActor();
                String user_id = (String) map3.get("USER_ID");
                actor.setId(user_id);// 用户ID
                actor.setName(sysUserLoader.getSysUserNameById(user_id));// 用户
                actor.setType("user");// 类别
                actorlist.add(actor);
            }
            Actors actors = new Actors();
            actors.setActorlist(actorlist);
            actors.setId(ComUtil.getId());
            return actors;
        }else{
            Actors actors = new Actors();
            actors.setActorlist(actorlist);
            actors.setId(ComUtil.getId());
            return actors;
        }
    }
}
