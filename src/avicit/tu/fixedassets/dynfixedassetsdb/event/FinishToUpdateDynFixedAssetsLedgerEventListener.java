package avicit.tu.fixedassets.dynfixedassetsdb.event;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;
import avicit.tu.fixedassets.dynfixedassetsledger.service.DynFixedAssetsLedgerService;

/**
 * 
 * 流程走完，更新资产信息
 * 新的经办人、领用人、责任人、资产使用单位、资产使用单位id、关联工会、关联工会id、数据状态、备注
 * APPLY_USER、APPLY_USER_ID、APPLY_LY_USER_ID、ZR_USER、USED_DEPT、USED_DEPT_ID、
 * GUILD_ID、GUILD_NAME、DATA_STATUS、REMARK
 *
 */
public class FinishToUpdateDynFixedAssetsLedgerEventListener implements EventListener{

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
			String applyUserId = list.get(0).get("APPLY_JB_USER").toString();
			String applyLyUserId = list.get(0).get("APPLY_USER").toString();
			String usedDept = list.get(0).get("INTO_DEPT_NAME").toString();
			String usedDeptId = list.get(0).get("INTO_DEPT").toString();
			String guildId = list.get(0).get("INTO_GUILD_ID").toString();
			String guildName = list.get(0).get("INTO_GUILD_NAME").toString();
			int dbNum = Integer.parseInt(list.get(0).get("DB_NUM").toString());
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			
			if(dto.getAssetNum() == dbNum){//全部调拨
				// 责任人:领用人
				dto.setApplyUserId(applyUserId);
				dto.setApplyLyUserId(applyLyUserId);
				dto.setZrUser(applyLyUserId);
				dto.setUsedDeptId(usedDeptId);
				dto.setUsedDept(usedDept);
				dto.setGuildId(guildId);
				dto.setGuildName(guildName);
				dto.setDataStatus("Y");
				dto.setOutDate(new Date());
				String remark = dto.getRemark();
				String temp = sdf.format(new Date()) + "通过调拨流程将编码【" + dto.getAssetCode() + "】的固定资产从【" 
						+ dto.getGuildName() + "】调拨到【" + guildName + "】。";
				if(remark != null){
					remark += temp;
				}else{
					remark = temp;
				}
				dto.setRemark(remark);
				dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dto);
			}else if(dto.getAssetNum() > dbNum){//部分调拨，新增资产
				DynFixedAssetsLedgerDTO newDto = new DynFixedAssetsLedgerDTO();
				PojoUtil.copyProperties(newDto, dto, true);
				//更新资产信息
				String remark = dto.getRemark();
				String temp = sdf.format(new Date()) + "通过调拨流程将编码【" + dto.getAssetCode() + "】的固定资产，从【" 
						+ dto.getGuildName() + "】调拨到【" + guildName + "】，调拨数量【" + dbNum + "】。";
				if(remark != null){
					remark += temp;
				}else{
					remark = temp;
				}
				dto.setRemark(remark);
				dto.setDataStatus("Y");
				dto.setOutDate(new Date());
				dto.setAssetNum(dto.getAssetNum() - dbNum);
				dto.setCurrentValue((dto.getCurrentValue() / dto.getAssetNum()) * (dto.getAssetNum() - dbNum));
				dto.setOriginalValue((dto.getOriginalValue() / dto.getAssetNum()) * (dto.getAssetNum() - dbNum));
				dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dto);
				//新增一条资产
				newDto.setApplyUserId(applyUserId);
				newDto.setApplyLyUserId(applyLyUserId);
				newDto.setZrUser(applyLyUserId);
				newDto.setUsedDeptId(usedDeptId);
				newDto.setUsedDept(usedDept);
				newDto.setGuildId(guildId);
				newDto.setGuildName(guildName);
				newDto.setDataStatus("Y");
				newDto.setIntoDate(new Date());
				newDto.setAssetNum(new Long(dbNum));
				newDto.setCurrentValue((dto.getCurrentValue() / dto.getAssetNum()) * dbNum);
				newDto.setOriginalValue((dto.getOriginalValue() / dto.getAssetNum()) * dbNum);
				newDto.setIntoDate(new Date());
				if(newDto.getRemark() != null){
					newDto.setRemark(newDto.getRemark() + temp);
				}else{
					newDto.setRemark(temp);
				}
				dynFixedAssetsLedgerService.insertDynFixedAssetsLedger(newDto);
			}
		}
	}

}
