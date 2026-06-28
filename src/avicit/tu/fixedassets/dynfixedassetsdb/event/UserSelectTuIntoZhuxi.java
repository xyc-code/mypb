package avicit.tu.fixedassets.dynfixedassetsdb.event;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;

/**
 * 
 * 根据当前流程的调入工会id查询该工会的主席
 */
public class UserSelectTuIntoZhuxi extends UserSelect{

	@Override
	public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,String loginUserId) {
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		SysUserAPI sysUserAPI = SpringHelper.getBean(SysUserAPI.class);
		List<Actor> actorlist = new ArrayList<>();
		String tableSql = "select * from bpm_hist_task_v t where t.TASK_B_ID_ = '" + startFormId + "'";
		List<Map<String, Object>> tableList = jdbcTemplate.queryForList(tableSql);
		if(tableList != null && tableList.size() > 0){
			String tableName = tableList.get(0).get("FORM_").toString();
			tableName = tableName.substring(tableName.indexOf("&tableName=") + 11, tableName.indexOf("&version="));
			String userPost = "0";//工会主席
			String sql = "select * from dyn_tu_organ_member t1 where t1.LEAGUE_ID = (select t.into_guild_id from DYN_FIXED_ASSETS_DB t where t.id = '"
					+ startFormId + "') and t1.user_post = '" + userPost + "'";
			List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
			if(list != null && list.size() > 0){
				for (Map<String, Object> map : list) {
					Actor actor = new UserActor();
					actor.setId((String) map.get("USER_ID"));
					actor.setName(sysUserAPI.getSysUserById((String) map.get("USER_ID")).getName());
					actor.setType("user");
					actorlist.add(actor);
				}
			}
		}
		Actors actors = new Actors();
		actors.setActorlist(actorlist);
		actors.setId(ComUtil.getId());
		return actors;
	}

}
