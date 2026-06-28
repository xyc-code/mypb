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

public class PartyReminderGeneralElectionToDZBRouteCondition implements RouteConditionInterface {
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
		String partyId = (String) execution.getProcessInstance().getVariable("PARTY_ID");
		//List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '"+loginUserId+"'");
		//TableData tableData = new TableData();
		//tableData.setTableName("DYN_POT_MEMBER");
		//tableData.setPrimaryKeyValue(startFormId);
		//Map<String, Object> data = bpmsControlUtils.getData(tableData);
		//String partyId = "";

			if (StringUtils.isNotEmpty(partyId)) {
				List<Map<String, Object>> list_yn_zz = jdbcTemplate.queryForList(
						"select t.attribute_01 from PARTY_ORGANIZATION t where t.id = '" + partyId + "' ");
				String yn_zz;
				if (list_yn_zz != null && list_yn_zz.size() > 0) {
					Map<String, Object> mapList_yn_zz = list_yn_zz.get(0);
					yn_zz = (String) mapList_yn_zz.get("attribute_01");
					if (StringUtils.isNotEmpty(yn_zz)) {
				
						 if(StringUtils.equals(yn_zz, "1")){
							 if(getYNDZZByPartyId(partyId) == false){
									return true;
								}else{
									return false;
								}
						}else{
							return false;
						}
						
						//return true;
					}
				}
				

			}
		
		

		return false;
	}
	  private  Boolean getYNDZZByPartyId(String partyId){
			List<Map<String, Object>> list_parent_id = jdbcTemplate.queryForList(
					"select t.parent_id,t.attribute_01 from PARTY_ORGANIZATION t where t.id = '" + partyId + "' ");
			if (list_parent_id != null && list_parent_id.size() > 0) {
				
				Map<String, Object> maplist_parent_id = list_parent_id.get(0);
				String parent_id = (String) maplist_parent_id.get("parent_id");
				String attribute_01 = (String) maplist_parent_id.get("attribute_01");
				if (StringUtils.isNotEmpty(parent_id) && StringUtils.isNotEmpty(attribute_01)) {
					if(StringUtils.equals(parent_id, "-1")) {
							return false;
					
					}else{
						if(StringUtils.equals(attribute_01, "2")){
							return true;
						}else{
							return getYNDZZByPartyId(parent_id);
						}
				
					}
					
				}
			}
		
		return false;
		  
	  }

}
