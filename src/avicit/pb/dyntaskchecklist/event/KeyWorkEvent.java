package avicit.pb.dyntaskchecklist.event;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.jdbc.core.JdbcTemplate;

import com.alibaba.fastjson.JSONObject;

import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.pb.dyntaskchecklist.service.DynTaskChecklistService;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.api.sysuser.impl.SysUserAPImpl;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;



@SuppressWarnings("serial")
public class KeyWorkEvent extends UserSelect implements EventListener {
	/**
	 * 修改流程标题 更改为项目名称
	 */
	//获取常量
	String flag;
	@Override
	public void notify(EventListenerExecution arg0) throws Exception {		      
		//获取表单ID
        String id = (String)arg0.getVariable("id");
        DynTaskChecklistService serve = SpringFactory.getBean(DynTaskChecklistService.class);
        DynInspectionDTO dto = serve.findByIdDTO(id);
        DynTaskChecklistDTO dtos  = serve.queryDynTaskChecklistByPrimaryKey(dto.getAttribute03());
        LocalDateTime dateTime = LocalDateTime.now();
        HashMap<String, String> headers = new HashMap<>(3);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");  
        String url = "http://localhost:8080/V6R343/msystem/sysmsg/sysMsgController/operation/save";
        JSONObject jsonObj = new JSONObject();
//        jsonObj.put("id","");
//        jsonObj.put("sourceCode","personal");
//        jsonObj.put("title","巡查整改通知");
//        jsonObj.put("content","请前往待办填写当前进度");
//        jsonObj.put("msgType","0");
//        jsonObj.put("recvUser",dto.getInspectionPosen());
//        jsonObj.put("recvUsersAlias",serve.getUserName(dto.getInspectionPosen()));
//        jsonObj.put("sendDate",dateTime.format(formatter));
//        jsonObj.put("disappearDate",dtos.getManifestDateEnd());
        String jsonString = JSONObject.toJSONString(jsonObj);
        headers.put("content-type", "application/json");
        String data = serve.sendPostWithJson(url,jsonString,headers);	
        System.out.println(data);
	}
	//自定义选人 拟稿人的党组织书记
	ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
	SysUserAPI sysUserLoader = SpringHelper.getBean(SysUserAPI.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	@Override
	public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,String loginUserId) {
		List<Actor> actorlist = new ArrayList<>();
		Set<String> set  = new HashSet<String>();
		set.add("avicit_bpm_start_id");
		Map<String,Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
		String userId = (String)map.get("avicit_bpm_start_id");
		SysUser user = sysUserLoader.getSysUserById(userId);
		String userDeptId = user.getDeptId();
		int userPost =0;
		List<Map<String, Object>> list = jdbcTemplate
				.queryForList("select * from party_organ_member where party_id in (select id from PARTY_ORGANIZATION t start with t.attribute_02 like '"+userDeptId+"' connect by prior t.id = t.parent_id) and user_post = '"+userPost+"'");
		if(list!=null&&list.size()!=0){
			for(Map<String,Object> dto : list){
				Actor actor = new UserActor();
				actor.setId((String)dto.get("USER_ID"));
				actor.setName(sysUserLoader.getSysUserById((String)dto.get("USER_ID")).getName());
				actor.setType("user");
				actorlist.add(actor);
			}
		
		}
		Actors actors = new Actors();
		actors.setActorlist(actorlist);
		actors.setId(ComUtil.getId());
		return actors;
	}
}
