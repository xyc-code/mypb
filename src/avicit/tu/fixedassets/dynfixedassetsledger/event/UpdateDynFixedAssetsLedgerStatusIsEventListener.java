package avicit.tu.fixedassets.dynfixedassetsledger.event;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;

/**
 * 更新资产状态
 *
 */
public class UpdateDynFixedAssetsLedgerStatusIsEventListener implements EventListener{

	private static final long serialVersionUID = 1L;
	
	private String tableName;
    private String status;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		String formId = (String) eventListenerExecution.getVariable("id");
		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		if(!"".equals(tableName) && !"".equals(status)){
			if("DB".equals(status)){//调拨分为全部调拨、部分调拨
				//查询对应的资产是否属于全部调拨，是则更新状态
				String selectSql = "select t1.* from dyn_fixed_assets_db t1 left join sys_bpm_hist_procinst t2 on t1.id = t2.formid_ "
						+ "where t1.asset_ledger_id = (select t.asset_ledger_id from dyn_fixed_assets_db t where t.id = '" 
						+ formId + "')and (t2.state_ = 'active' or t2.state_ = 'start')";
				List<Map<String, Object>> list = jdbcTemplate.queryForList(selectSql);
				if(list != null && list.size() > 0){
					int fixedAssetNum = Integer.parseInt(list.get(0).get("INSERT_NUM").toString());
					int dbNum = 0;
					for (Map<String, Object> map : list) {
						dbNum = dbNum + Integer.parseInt(map.get("DB_NUM").toString());
					}
					if(fixedAssetNum == dbNum){
						String sql = "update dyn_fixed_assets_ledger t set t.data_status = '" + status + "' where t.id "
								+ "= (select t1.asset_ledger_id from " + tableName + " t1 where t1.id = '" + formId + "')";
						jdbcTemplate.execute(sql);
					}
				}
			}else{
				String sql = "update dyn_fixed_assets_ledger t set t.data_status = '" + status + "' where t.id "
						+ "= (select t1.asset_ledger_id from " + tableName + " t1 where t1.id = '" + formId + "')";
				jdbcTemplate.execute(sql);
			}
		}
			
	}

}
