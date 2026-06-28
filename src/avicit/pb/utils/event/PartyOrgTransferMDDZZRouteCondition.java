package avicit.pb.utils.event;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

public class PartyOrgTransferMDDZZRouteCondition implements RouteConditionInterface{
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	@Override
	public boolean evaluate(OpenExecution execution) {
		// TODO Auto-generated method stub
		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_PARTY_TRANSFER");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String transferType =  (String)data.get("P_TRANSFER_TYPE");
		String inPartyOrgId =  (String)data.get("P_IN_PARTY_ORG_ID");
		if(StringUtils.isNotEmpty(transferType) && StringUtils.equals(transferType, "0")){
			if(StringUtils.isNotEmpty(inPartyOrgId)){
				List<Map<String, Object>> list_tree_level = jdbcTemplate.queryForList(
						"select t.tree_level from PARTY_ORGANIZATION t where t.id = '" + inPartyOrgId + "' ");
				BigDecimal treeLevelBigDecimal;
				if (list_tree_level != null && list_tree_level.size() > 0) {
					Map<String, Object> mapList_tree_level = list_tree_level.get(0);
					treeLevelBigDecimal = (BigDecimal) mapList_tree_level.get("tree_level");
					if (treeLevelBigDecimal != null) {
						int treeLevel = treeLevelBigDecimal.intValue();
						if (treeLevel != 0 && treeLevel >= 3) {
							return true;	
						}
						
						//return true;
					}
				}
				
				
				
		
			}
			
			/*List<Map<String, Object>> list_in_party_org_id_ = jdbcTemplate
					.queryForList("select t.out_party_org_id from DYN_POT_MEMBER t where t.fk_sub_col_id = '" + id + "'");
			String outPartyOrgId = "";
			if (list_in_party_org_id_ != null && list_in_party_org_id_.size() > 0) {
				Map<String, Object> mapList_in_party_org_id = list_in_party_org_id_.get(0);
				outPartyOrgId = (String) mapList_in_party_org_id.get("out_party_org_id");
				if (StringUtils.isNotEmpty(outPartyOrgId)) {
					List<Map<String, Object>> list_tree_level = jdbcTemplate.queryForList(
							"select t.tree_level from PARTY_ORGANIZATION t where t.id = '" + outPartyOrgId + "' ");
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
			
		*/

		}

		// TableData tableData = new TableData();
		// tableData.setTableName("DYN_POT_MEMBER");
		// tableData.setPrimaryKeyValue(startFormId);
		// Map<String, Object> data = bpmsControlUtils.getData(tableData);

		return false;
	}


}
