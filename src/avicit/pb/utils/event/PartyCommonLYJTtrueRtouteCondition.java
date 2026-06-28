package avicit.pb.utils.event;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
//查询拟稿人是否是下属党支部 
public class PartyCommonLYJTtrueRtouteCondition implements RouteConditionInterface {
	/**
	 * 
	 */
	//private static final long serialVersionUID = 1L;
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	@Override
	public boolean evaluate(OpenExecution execution) {
		// TODO Auto-generated method stub
		String loginUserId = (String) execution.getProcessInstance().getVariable("avicit_bpm_start_id");
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from PARTY_ORGANIZATION where id = (select PARENT_ID from PARTY_ORGANIZATION where id = (select PARTY_ID from party_organ_member  where USER_ID = '"+loginUserId+"' ))");
		String partyId = "";
		if(list != null && list.size() > 0){
			Map<String, Object> mapList_tree_level = list.get(0);
			partyId = (String) mapList_tree_level.get("PARENT_ID");
			if("-1".equals(partyId)){
				return false;
			}																
		}
		
		return true;
	}



}
