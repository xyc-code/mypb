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

public class PartyCommonUfmDZBRouteCondition implements RouteConditionInterface {
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
				List<Map<String, Object>> list_tree_level = jdbcTemplate.queryForList(
						"select t.tree_level from PARTY_ORGANIZATION t where t.id = '" + partyId + "' ");
				BigDecimal treeLevelBigDecimal;
				if (list_tree_level != null && list_tree_level.size() > 0) {
					Map<String, Object> mapList_tree_level = list_tree_level.get(0);
					treeLevelBigDecimal = (BigDecimal) mapList_tree_level.get("tree_level");
					if (treeLevelBigDecimal != null) {
						int treeLevel = treeLevelBigDecimal.intValue();
						if (treeLevel != 0 && treeLevel < 3) {
							return true;	
						}
						
						//return true;
					}
				}
				

			}
		}
		

		return false;
	}

}
