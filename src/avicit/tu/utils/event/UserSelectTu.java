package avicit.tu.utils.event;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;

public class UserSelectTu extends UserSelect {
	//自定义选人 拟稿人组织所在的工会主席
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
			int userPost =0;
			List<Map<String, Object>> list = jdbcTemplate
					.queryForList("select * from dyn_tu_organ_member where LEAGUE_ID = (select id from Dyn_Trade_Union_Organiza where league_name = (select attribute_03 from dyn_trade_union_mb where user_id = '"+userId+"') ) and user_post = '"+userPost+"'");
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
