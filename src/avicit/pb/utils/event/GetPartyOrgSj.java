package avicit.pb.utils.event;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

//获取所有党支部书记选人事件
public class GetPartyOrgSj extends UserSelect {


    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId, String loginUserId) {
        JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
        SysUserAPI bean1 = SpringFactory.getBean(SysUserAPI.class);
        System.out.println("aaaa");
        List actorlist = new ArrayList();
        List<Map<String, Object>> list = bean.queryForList("select * from party_organ_member where party_id in( select id from party_organization t where t.tree_level not in ('1') and t.attribute_01 not in ('0','3') and t.party_name != '离休干部党支部'  ) and user_post in ('0','1','2','3')");
        for (Map<String, Object> map : list) {
            Actor actor = new UserActor();
            SysUser user_id = bean1.getSysUserById(map.get("USER_ID").toString());
            actor.setId(map.get("USER_ID").toString());//用户ID
            actor.setName(user_id.getName());//用户
            actor.setType("user");//类别
            actorlist.add(actor);
        }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }
}
