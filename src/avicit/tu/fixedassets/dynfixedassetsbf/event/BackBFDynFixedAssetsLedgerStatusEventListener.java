package avicit.tu.fixedassets.dynfixedassetsbf.event;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;

/**
 * 
 * 流程退回时更新资产id数据状态为正常状态
 *
 */
public class BackBFDynFixedAssetsLedgerStatusEventListener implements EventListener{

	private static final long serialVersionUID = 1L;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		String formId = (String) eventListenerExecution.getVariable("id");

		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		String sql = "update dyn_fixed_assets_ledger t set t.data_status = 'Y' where t.id "
				+ "= (select t1.asset_ledger_id from dyn_fixed_assets_bf t1 where t1.id = '" + formId + "')";
		jdbcTemplate.execute(sql);		
	}

}
