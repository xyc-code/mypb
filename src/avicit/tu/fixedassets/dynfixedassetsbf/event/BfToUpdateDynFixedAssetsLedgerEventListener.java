package avicit.tu.fixedassets.dynfixedassetsbf.event;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;
import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;
import avicit.tu.fixedassets.dynfixedassetsledger.service.DynFixedAssetsLedgerService;

/**
 * 
 * 流程走完，更新资产状态
 *
 */
public class BfToUpdateDynFixedAssetsLedgerEventListener implements EventListener{

	private static final long serialVersionUID = 1L;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		String formId = (String) eventListenerExecution.getVariable("id");

		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		DynFixedAssetsLedgerService dynFixedAssetsLedgerService = SpringFactory.getBean(DynFixedAssetsLedgerService.class);
		
		String sql = "select * from dyn_fixed_assets_db t1 where t1.id = '" + formId + "'";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			String assetsLedgerId = list.get(0).get("ASSET_LEDGER_ID").toString();
			DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerService.queryDynFixedAssetsLedgerByPrimaryKey(assetsLedgerId);

			String remark = dto.getRemark();
			if(remark != null && !"".equals(remark)){
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				String temp = sdf.format(new Date()) + "通过报废流程将编码【" + dto.getAssetCode() + "】的固定资产状态更改为报废。";
				remark += temp;
				dto.setRemark(remark);
			}
			dto.setInsertType("3");
			dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dto);
		}
	}

}
