package avicit.pb.utils.event;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.DeptLevelPositonActor;
import avicit.platform6.bpm.pvm.internal.task.actor.GroupActor;
import avicit.platform6.bpm.pvm.internal.task.actor.PositionActor;
import avicit.platform6.bpm.pvm.internal.task.actor.RoleActor;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.bpm.pvm.internal.util.JdbcUtil;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

public class PartyCommonUfmDZZSelectUsers extends UserSelect implements LoaderConstant {
	BpmsControlUtils bpmsControlUtils;
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
	
	//private BpmOperateService bpmOperateService = SpringHelper.getBean(BpmOperateService.class);; 
	@Override
	public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
			String loginUserId) {
		Set<String> set  = new HashSet<String>();
		set.add("avicit_bpm_start_id");
		Map<String,Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
		String avicit_bpm_start_id = (String)map.get("avicit_bpm_start_id");
		List actorlist = new ArrayList();
		if(StringUtils.isNotEmpty(avicit_bpm_start_id)){
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '"+loginUserId+"'");
		//TableData tableData = new TableData();
		//tableData.setTableName("DYN_POT_MEMBER");
		//tableData.setPrimaryKeyValue(startFormId);
		//Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String partyId = "";
		if(list != null && list.size() > 0){
			Map<String, Object> mapList = list.get(0);
			partyId = (String)mapList.get("party_id");
			if (StringUtils.isNotEmpty(partyId)) {
				String parentPartyId = "";
				List<Map<String, Object>> list_tree_parent_id = jdbcTemplate.queryForList(
						"select t.parent_id from PARTY_ORGANIZATION t where t.id = '"+partyId+"'");
				if(list_tree_parent_id != null && list_tree_parent_id.size() > 0){
					Map<String, Object> mapList_parent_id = list_tree_parent_id.get(0);
					parentPartyId = (String)mapList_parent_id.get("parent_id");
					try {
						List<PartyOrganMemberDTO> partyOrganMemberDTOList = partyOrganMemberService
								.queryPartyOrganMemberByPartyId(parentPartyId);
						for (PartyOrganMemberDTO partyOrganMemberDTO : partyOrganMemberDTOList) {
							Actor actor = new UserActor();
							String userId = partyOrganMemberDTO.getUserId();
							String post = partyOrganMemberDTO.getUserPost();
							
							if (StringUtils.isNotEmpty(userId) && StringUtils.isNotEmpty(post)) {
								if(StringUtils.equals(post, "1") || StringUtils.equals(post, "2")){
									actor.setId(userId);// 用户ID
									actor.setName(sysUserLoader.getSysUserNameById(userId));// 用户
									actor.setType("user");// 类别
									actorlist.add(actor);
								}
								
							}
						}

					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				

			}
		}
		
		

		}
		// 返回用户[石学远]

		/*
		 * //返回部门[研发中心] actor = new DeptLevelPositonActor();
		 * actor.setId("40288af5382c969e01382c9b830c000c");//部门ID
		 * actor.setName("研发中心");//部门 actor.setType("dept");//类别
		 * actorlist.add(actor);
		 * 
		 * //返回角色[系统管理员] actor = new RoleActor();
		 * actor.setId("40288a46384feb2101384fee0bd60004");//角色ID
		 * actor.setName("系统管理员");//角色 actor.setType("role");//类别
		 * actorlist.add(actor);
		 * 
		 * //返回群组[系统管理] actor = new GroupActor();
		 * actor.setId("40288afb38c276fb0138c2d3ffa30010");//群组ID
		 * actor.setName("系统管理");//群组 actor.setType("group");//类别
		 * actorlist.add(actor);
		 * 
		 * //返回岗位[普通员工a] actor = new PositionActor();
		 * actor.setId("40288af9386fe46a0138703716690006");//岗位ID
		 * actor.setName("普通员工a");//岗位 actor.setType("position");//类别
		 * actorlist.add(actor);
		 */

		Actors actors = new Actors();
		actors.setActorlist(actorlist);
		actors.setId(ComUtil.getId());
		return actors;

	}

}
