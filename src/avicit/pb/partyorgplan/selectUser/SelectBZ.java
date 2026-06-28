package avicit.pb.partyorgplan.selectUser;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

//公司工作计划,查当前节点部长（根据工作计划审批关系维护表查）
public class SelectBZ extends UserSelect {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId, String loginUserId) {

        System.out.println("loginUser:" + loginUserId);
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        SysUserAPI sysUserAPI = SpringMVCFactory.getBean(SysUserAPI.class);
        List actorlist = new ArrayList();
            List<Map<String, Object>> list = jdbcTemplate.queryForList("select BZ from DYN_PARTY_PLAN_GXB where SZR like '%"+loginUserId+"%'");
            for (Map<String, Object> mapDTO : list) {
                String userId = MapUtils.getString(mapDTO, "BZ");
                SysUser sysUser = sysUserAPI.getSysUserById(userId);
                Actor actor = new UserActor();
                actor.setId(userId);//用户ID
                actor.setName(sysUser.getName());//用户
                actor.setType("user");//类别
                actorlist.add(actor);
            }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }
}
