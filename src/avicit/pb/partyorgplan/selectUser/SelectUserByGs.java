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

/**
 * 党组织工作计划，审批人，干事
 */
public class SelectUserByGs  extends UserSelect {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName,String startFormId,String loginUserId) {

        JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);

        BpmsControlUtils bpmsControlUtils=SpringMVCFactory.getBean(BpmsControlUtils.class);
        SysUserAPI sysUserAPI=SpringMVCFactory.getBean(SysUserAPI.class);
        List actorlist = new ArrayList();
        TableData td=new TableData();
        td.setTableName("DYN_SUB_DWGZJH_1");//党群工作部门承接表
        td.setPrimaryKeyValue(startFormId);
        Map<String,Object> mapData=bpmsControlUtils.getData(td);
        if(mapData!=null){
            String cjbm= MapUtils.getString(mapData,"ZRDW");

            List<Map<String,Object> > gxbList=jdbcTemplate.queryForList("select * from DYN_PARTY_PLAN_GXB t where t.DEPT_NAME='"+cjbm+"'");
            for(Map<String,Object> mapDTO:gxbList){//
                String userIdStr=MapUtils.getString(mapDTO,"GS");
                if(!StringUtils.isEmpty(userIdStr)){
                    String userids[]=userIdStr.split(",");
                    for(String userId:userids){
                        SysUser sysUser= sysUserAPI.getSysUserById(userId);
                        Actor actor = new UserActor();
                        actor.setId(userId);//用户ID
                        actor.setName(sysUser.getName());//用户
                        actor.setType("user");//类别
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
