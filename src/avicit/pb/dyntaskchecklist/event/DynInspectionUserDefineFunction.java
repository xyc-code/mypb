package avicit.pb.dyntaskchecklist.event;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * 巡查整改，自定义选人类，获取表单责任人
 */
public class DynInspectionUserDefineFunction extends UserSelect {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName,String startFormId,String loginUserId) {


        List actorlist = new ArrayList();


        BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);
        TableData td=new TableData();
        td.setPrimaryKeyValue(startFormId);
        td.setTableName("DYN_INSPECTION");

        Map<String,Object> dataMap=bpmsControlUtils.getData(td);
        if(dataMap.size()>0){
            //返回用户[石学远]
            Actor actor = new UserActor();
            String userId=MapUtils.getString(dataMap,"INSPECTION_POSEN");//责任人
            if(!"".equals(userId)){
                SysUserAPI sysUserAPI= SpringMVCFactory.getBean(SysUserAPI.class);
                String userName=sysUserAPI.getSysUserNameById(userId);
                actor.setId(userId);//用户ID
                actor.setName(userName);//用户
            }
            actor.setType("user");//类别
            actorlist.add(actor);
        }

        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }
}
