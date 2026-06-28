package avicit.pb.utils.event;

import java.util.Map;

import org.apache.commons.lang.StringUtils;

import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

public class PartyOrgTransferJSRouteCondition implements RouteConditionInterface{
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	@Override
	public boolean evaluate(OpenExecution execution) {
		// TODO Auto-generated method stub
		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_PARTY_TRANSFER");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String transferType =  (String)data.get("P_TRANSFER_TYPE");
		if(StringUtils.isNotEmpty(transferType) && StringUtils.equals(transferType, "1")){
			return true;
		}
		return false;
	}

}
