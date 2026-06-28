package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
 // 通过拟稿人查询各基层组织委员
public class PartyDnyXfgFqWy extends UserSelect implements LoaderConstant {
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

	@Override
	public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
			String loginUserId) {
		JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
		SysUserAPI bean1 = SpringFactory.getBean(SysUserAPI.class);
		List actorlist = new ArrayList();
		Map<String, Object> map1 = bean.queryForMap("select * from party_organ_member where USER_ID = '"+loginUserId+"' and user_post in ('0','1','2') and rownum = 1");
		// 查询  4是组织委员
		List<Map<String, Object>> list = bean.queryForList("select * from party_organ_member where user_post = '4' and party_id = '"+map1.get("PARTY_ID")+"'");
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
