package avicit.pb.utils.event;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
//选择拟稿人党组织的副书记
public class PartyCommonDZBRtrueSelectUsers extends UserSelect implements LoaderConstant {
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
	@Override
	public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId, String loginUserId) {
		Set<String> set  = new HashSet<String>();
		set.add("avicit_bpm_start_id");
		Map<String,Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
		String avicit_bpm_start_id = (String)map.get("avicit_bpm_start_id");
		List actorlist = new ArrayList();
		if(StringUtils.isNotEmpty(avicit_bpm_start_id)){
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select USER_ID from party_organ_member where PARTY_ID = (select PARTY_ID from party_organ_member  where USER_ID = '"+avicit_bpm_start_id+"') and USER_POST = '3'");			
			for (int i = 0; i < list.size(); i++) {
				Map<String,Object> mav = list.get(i);
				String userid = (String)mav.get("USER_ID");
				Actor actor = new UserActor();
				actor.setId(userid);// 用户ID
				actor.setName(sysUserLoader.getSysUserById(userid).getName());// 用户
				actor.setType("user");// 类别
				actorlist.add(actor);
			}
		}
		Actors actors = new Actors();
		actors.setActorlist(actorlist);
		actors.setId(ComUtil.getId());
		return actors;
	}
	

}
