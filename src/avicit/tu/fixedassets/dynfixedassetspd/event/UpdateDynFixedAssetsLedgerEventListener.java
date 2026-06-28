package avicit.tu.fixedassets.dynfixedassetspd.event;

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
 * 流程走完
 * 	1、更新资产数量、资产状态
 * 	2、是否需要在数量不对时更新资产原值、现值
 * 	3、是否需要进行新增、删除资产操作
 *
 */
public class UpdateDynFixedAssetsLedgerEventListener implements EventListener{

	private static final long serialVersionUID = 1L;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		String formId = (String) eventListenerExecution.getVariable("id");

		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		DynFixedAssetsLedgerService dynFixedAssetsLedgerService = SpringFactory.getBean(DynFixedAssetsLedgerService.class);
		
		//获取盘点子表数据
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from dyn_fixed_assets_pd_sub t where t.fk_id = '" + formId + "'");
		if(list != null && list.size() > 0){
			for (Map<String, Object> map : list) {
				int checkNum = Integer.parseInt(map.get("CHECK_NUM").toString());
				String checkType = map.get("NEW_INSERT_TYPE").toString();
				DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerService.queryDynFixedAssetsLedgerByPrimaryKey(map.get("ASSET_ID").toString());
				boolean isUpdate = false;
				SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
				String remark = simpleDateFormat.format(new Date()) + "通过盘点流程流程将";
				if(dto.getAssetNum() != checkNum){
					remark += "【资产数量从" + dto.getAssetNum() + "-->" + checkNum +"】。";
					dto.setAssetNum(new Long(checkNum));
					isUpdate = true;
				}
				if(!dto.getInsertType().equals(checkType)){
					String tempType = "";
					if("1".equals(dto.getInsertType())){
						tempType = "在用";
					}else if("2".equals(dto.getInsertType())){
						tempType = "闲置";
					}else if("3".equals(dto.getInsertType())){
						tempType = "报废";
					}
					if("1".equals(checkType)){
						checkType = "在用";
					}else if("2".equals(checkType)){
						checkType = "闲置";
					}else if("3".equals(checkType)){
						checkType = "报废";
					}
					remark += "【资产状态从" + tempType + "-->" + checkType +"】。";
					dto.setInsertType(checkType);
					isUpdate = true;
				}
				if(isUpdate){
					if(dto.getRemark() != null){
						dto.setRemark(dto.getRemark() + remark);
					}else{
						dto.setRemark(remark);
					}
					dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dto);
				}
			}
		}
	}

}
