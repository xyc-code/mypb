package avicit.tu.utils.event;

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

public class TuFlowTwoRouteCondition implements RouteConditionInterface {
	/**
	 * 
	 */
	//private static final long serialVersionUID = 1L;
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	@Override
	public boolean evaluate(OpenExecution execution) {
		String id = (String) execution.getVariable("id");
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * FROM DYN_TU_TRANSFER where id = '"+id+"'");
		if(list != null && list.size() > 0){
			for(int i=0;i<list.size();i++){
				String data1=(String)list.get(i).get("DATA_1");
				if(StringUtils.isNotEmpty(data1)){
					if(list.get(i).get("DATA_1").equals("N")){
						return true;
					}
				}
			}
		}
		return false;
	}

}
