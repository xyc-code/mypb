package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;

// 增补选党支部审批
// 判断是否有党支部书记，没有请走党委（总支）委会讨论确定节点
public class PartyCommonDZBRouteCondition implements RouteConditionInterface {
    /**
     *
     */
    //private static final long serialVersionUID = 1L;
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

    @Override
    public boolean evaluate(OpenExecution execution) {
        //这块正常是判断，当前发起人所在的党支部，是否有党组织书记，如果有，则true(支部书记审批)
        // TODO Auto-generated method stub
        String loginUserId = (String) execution.getProcessInstance().getVariable("avicit_bpm_start_id");
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '" + loginUserId + "'");
        String partyId = "";
        if (list != null && list.size() > 0) {
            Map<String, Object> mapList = list.get(0);
            partyId = (String) mapList.get("party_id");
            if (StringUtils.isNotEmpty(partyId)) {
                //判断是否有党组织书书记，如果有，false，没有 true
                List<Map<String, Object>> partyOrganMemberList = jdbcTemplate.queryForList(
                        "select user_post from PARTY_ORGAN_MEMBER where PARTY_ID= '" + partyId + "' ");
                if (!CollectionUtils.isEmpty(partyOrganMemberList)) {

                    for (Map<String, Object> map : partyOrganMemberList) {
                        String userPost = map.get("user_post").toString();
                        if (userPost.equals("0")) {
                            return true;
                        }
                    }
                    return false;
                }


            }
        }
        return false;
    } /*{
		//这块正常是判断，当前发起人所在的党支部，是否有党组织书记，如果有，则true(支部书记审批)
		// TODO Auto-generated method stub
		String loginUserId = (String) execution.getProcessInstance().getVariable("avicit_bpm_start_id");
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '"+loginUserId+"'");
		String partyId = "";
		if(list != null && list.size() > 0){
			Map<String, Object> mapList = list.get(0);
			partyId = (String)mapList.get("party_id");
			if (StringUtils.isNotEmpty(partyId)) {
				List<Map<String, Object>> list_tree_level = jdbcTemplate.queryForList(
						"select t.tree_level from PARTY_ORGANIZATION t where t.id = '" + partyId + "' ");
				try {
					List<PartyOrganMemberDTO> partyOrganMemberDTOList = partyOrganMemberService
							.queryPartyOrganMemberByPartyId((String)mapList.get("party_id"));
					boolean b = partyOrganMemberDTOList.stream().anyMatch(str -> str.getUserPost().equals("0"));
					BigDecimal treeLevelBigDecimal;
					if (list_tree_level != null && list_tree_level.size() > 0) {
						Map<String, Object> mapList_tree_level = list_tree_level.get(0);
						treeLevelBigDecimal = (BigDecimal) mapList_tree_level.get("tree_level");
						if (treeLevelBigDecimal != null) {
							int treeLevel = treeLevelBigDecimal.intValue();
							if (treeLevel != 0 && treeLevel < 3 && b) {
								return true;
							}
							//return true;
						}
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		

		return false;
	}*/

}
