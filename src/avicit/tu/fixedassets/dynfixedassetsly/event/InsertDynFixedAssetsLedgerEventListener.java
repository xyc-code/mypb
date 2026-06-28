package avicit.tu.fixedassets.dynfixedassetsly.event;

import java.text.SimpleDateFormat;
import java.util.Calendar;
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
 * 	1、更新入账月份
 * 	2、将其新增到固定资产台账中
 */
public class InsertDynFixedAssetsLedgerEventListener implements EventListener{

	private static final long serialVersionUID = 1L;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		
		String formId = (String) eventListenerExecution.getVariable("id");

		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		DynFixedAssetsLedgerService dynFixedAssetsLedgerService = SpringFactory.getBean(DynFixedAssetsLedgerService.class);
		//更新折旧月份
		jdbcTemplate.execute("update dyn_fixed_assets_ly t set t.insert_date = sysdate where t.id = '" + formId + "'");
		//获取流程数据
		Map<String, Object> map = jdbcTemplate.queryForList("select * from dyn_fixed_assets_ly t where t.id = '" + formId + "'").get(0);
		String usedDept = map.get("APPLY_DEPT") != null ? map.get("APPLY_DEPT").toString() : "";
		String usedDeptId = map.get("CREATED_DEPT") != null ? map.get("CREATED_DEPT").toString() : "";
		String assetCode = map.get("ASSET_CODE") != null ? map.get("ASSET_CODE").toString() : "";
		String assetName = map.get("ASSET_NAEM") != null ? map.get("ASSET_NAEM").toString() : "";
		String assetBrand = map.get("ASSET_BRAND") != null ? map.get("ASSET_BRAND").toString() : "";
		String assetType = map.get("ASSET_TYPE") != null ? map.get("ASSET_TYPE").toString() : "";
		String assetDetails = map.get("ASSET_DETAILS") != null ? map.get("ASSET_DETAILS").toString() : "";
		String assetXhgg = map.get("ASSET_XHGG") != null ? map.get("ASSET_XHGG").toString() : "";
		String assetDw = map.get("ASSET_DW") != null ? map.get("ASSET_DW").toString() : "";
		String assetNum = map.get("ASSET_NUM") != null ? map.get("ASSET_NUM").toString() : "0";
		String originalValue = map.get("ORIGINAL_VALUE") != null ? map.get("ORIGINAL_VALUE").toString() : "0";
		String storagePlace = map.get("STORAGE_PLACE") != null ? map.get("STORAGE_PLACE").toString() : "";
		String depreDate = map.get("DEPRE_DATE") != null ? map.get("DEPRE_DATE").toString() : "";
		String applyUser = map.get("APPLY_USER") != null ? map.get("APPLY_USER").toString() : "";
		String applyUserId = map.get("CREATED_BY") != null ? map.get("CREATED_BY").toString() : "";
		String applyLyUserId = map.get("APPLY_LY_USER_ID") != null ? map.get("APPLY_LY_USER_ID").toString() : "";
		String guildId = map.get("GUILD_ID") != null ? map.get("GUILD_ID").toString() : "";
		String guildName = map.get("GUILD_NAME") != null ? map.get("GUILD_NAME").toString() : "";
		String isPcOrOffice = "N";
		if("计算机设备".equals(assetDetails)){
			isPcOrOffice = "PC";
		}
		if("办公自动化设备".equals(assetDetails)){
			isPcOrOffice = "OFFICE";
		}
		String tySbCode = map.get("TY_SB_CODE") != null ? map.get("TY_SB_CODE").toString() : "";
		String tySbType = map.get("TY_SB_TYPE") != null ? map.get("TY_SB_TYPE").toString() : "";
		String tySbName = map.get("TY_SB_NAME") != null ? map.get("TY_SB_NAME").toString() : "";
		String tySbBrand = map.get("TY_SB_BRAND") != null ? map.get("TY_SB_BRAND").toString() : "";
		String tySbXingh = map.get("TY_SB_XINGH") != null ? map.get("TY_SB_XINGH").toString() : "";
		String tySbCcCode = map.get("TY_SB_CC_CODE") != null ? map.get("TY_SB_CC_CODE").toString() : "";
		String tySbCcDate = map.get("TY_SB_CC_DATE") != null ? map.get("TY_SB_CC_DATE").toString() : "";
		String tySbNetType = map.get("TY_SB_NET_TYPE") != null ? map.get("TY_SB_NET_TYPE").toString() : "";
		String tySbYongt = map.get("TY_SB_YONGT") != null ? map.get("TY_SB_YONGT").toString() : "";
		String tySbSecretLevel = map.get("TY_SB_SECRET_LEVEL") != null ? map.get("TY_SB_SECRET_LEVEL").toString() : "";
		String tySbZrUser = map.get("TY_SB_ZE_USER") != null ? map.get("TY_SB_ZE_USER").toString() : "";
		String tySbDept = map.get("TY_SB_DEPT") != null ? map.get("TY_SB_DEPT").toString() : "";
		String tySbClass = map.get("TY_SB_CLASS") != null ? map.get("TY_SB_CLASS").toString() : "";
		String tySbQyDate = map.get("TY_SB_QY_DATE") != null ? map.get("TY_SB_QY_DATE").toString() : "";
		String tySbIp = map.get("TY_SB_IP") != null ? map.get("TY_SB_IP").toString() : "";
		String tySbAddress = map.get("TY_SB_ADDRESS") != null ? map.get("TY_SB_ADDRESS").toString() : "";
		String tySbRoom = map.get("TY_SB_ROOM") != null ? map.get("TY_SB_ROOM").toString() : "";
		String tySbStatus = map.get("TY_SB_STATUS") != null ? map.get("TY_SB_STATUS").toString() : "";
		String pcWindowsVersion = map.get("PC_WINDOWS_VERSION") != null ? map.get("PC_WINDOWS_VERSION").toString() : "";
		String pcInstallDate = map.get("PC_INSTALL_DATE") != null ? map.get("PC_INSTALL_DATE").toString() : "";
		String pcDiskNumber = map.get("PC_DISK_NUMBER") != null ? map.get("PC_DISK_NUMBER").toString() : "";
		String pcMacAddress = map.get("PC_MAC_ADDRESS") != null ? map.get("PC_MAC_ADDRESS").toString() : "";
		String officeUserCode = map.get("OFFICE_USER_CODE") != null ? map.get("OFFICE_USER_CODE").toString() : "";
		String officeMacAddress = map.get("OFFICE_MAC_ADDRESS") != null ? map.get("OFFICE_MAC_ADDRESS").toString() : "";
		String officeRegisNumber = map.get("OFFICE_REGIS_NUMBER") != null ? map.get("OFFICE_REGIS_NUMBER").toString() : "";
		String officeComputerNumber = map.get("OFFICE_COMPUTER_NUMBER") != null ? map.get("OFFICE_COMPUTER_NUMBER").toString() : "";
		
		//获取最大序号
		List<Map<String, Object>> xhList = jdbcTemplate.queryForList("select * from dyn_fixed_assets_ledger t order by t.xh desc");
		int xh = 1;
		if(xhList != null && xhList.size() > 0){
			xh = Integer.parseInt(xhList.get(0).get("XH").toString()) + 1;
		}
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		// 责任人：领用人， 数据状态：Y，新增类型：1在用，2闲置，3报废，所属年度：当前年
		DynFixedAssetsLedgerDTO dto = new DynFixedAssetsLedgerDTO();
		dto.setXh(new Long(xh));
		dto.setUsedDept(usedDept);
		dto.setUsedDeptId(usedDeptId);
		dto.setAssetNaem(assetName);
		dto.setAssetType(assetType);
		dto.setAssetDetails(assetDetails);
		dto.setAssetBrand(assetBrand);
		dto.setAssetXhgg(assetXhgg);
		dto.setAssetDw(assetDw);
		dto.setAssetNum(new Long(assetNum));
		dto.setInsertDate(new Date());
		dto.setDepreDate(simpleDateFormat.parse(depreDate));
		dto.setOriginalValue(new Double(originalValue));
		dto.setStoragePlace(storagePlace);
		//刚入账当月现值为原值
		dto.setCurrentValue(new Double(originalValue));
		dto.setAttribute06(new Date());
		dto.setIntoDate(new Date());
		dto.setAssetCode(assetCode);
		dto.setZrUser(applyLyUserId);
		dto.setApplyUser(applyUser);
		dto.setApplyUserId(applyUserId);
		dto.setApplyLyUserId(applyLyUserId);
		dto.setGuildId(guildId);
		dto.setGuildName(guildName);
		dto.setDataStatus("Y");
		dto.setInsertType("1");
		dto.setRemark(simpleDateFormat.format(new Date()) + "通过领用流程新增编码【" + assetCode + "】的固定资产。");
		
		Calendar calendar = Calendar.getInstance();
		dto.setYearToBelong(calendar.get(Calendar.YEAR) + "");
		
		if(!"N".equals(isPcOrOffice)){
			dto.setTySbCode(tySbCode);
			dto.setTySbType(tySbType);
			dto.setTySbName(tySbName);
			dto.setTySbBrand(tySbBrand);
			dto.setTySbXingh(tySbXingh);
			dto.setTySbCcCode(tySbCcCode);
			dto.setTySbCcDate(simpleDateFormat.parse(tySbCcDate));
			dto.setTySbNetType(tySbNetType);
			dto.setTySbYongt(tySbYongt);
			dto.setTySbSecretLevel(tySbSecretLevel);
			dto.setTySbZeUser(tySbZrUser);
			dto.setTySbDept(tySbDept);
			dto.setTySbClass(tySbClass);
			dto.setTySbQyDate(simpleDateFormat.parse(tySbQyDate));
			dto.setTySbIp(tySbIp);
			dto.setTySbAddress(tySbAddress);
			dto.setTySbRoom(tySbRoom);
			dto.setTySbStatus(tySbStatus);
			if("PC".equals(isPcOrOffice)){
				dto.setPcWindowsVersion(pcWindowsVersion);
				dto.setPcInstallDate(simpleDateFormat.parse(pcInstallDate));
				dto.setPcDiskNumber(pcDiskNumber);
				dto.setPcMacAddress(pcMacAddress);
			}
			if("OFFICE".equals(isPcOrOffice)){
				dto.setOfficeUserCode(officeUserCode);
				dto.setOfficeMacAddress(officeMacAddress);
				dto.setOfficeRegisNumber(officeRegisNumber);
				dto.setOfficeComputerNumber(officeComputerNumber);
			}
		}
		dynFixedAssetsLedgerService.insertDynFixedAssetsLedger(dto);
	}

}
