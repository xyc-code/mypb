package avicit.tu.fixedassets.dynfixedassetsledger.excel;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;


import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;
import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;
import avicit.tu.fixedassets.dynfixedassetsledger.service.DynFixedAssetsLedgerService;

/**
 * 
 * 台账导入更新
 *
 */
public class FixedExcel implements SysExcelImpWithExcelHandle{

	@Override
	public void saveSheetAfter(String arg0, Map<String, List<Map<String, Object>>> data) {
		
	}

	@Override
	public void saveSheetBefore(String arg0, Map<String, List<Map<String, Object>>> data) {
		List<Map<String, Object>> list = data.get("insert");
        JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
        SysAutoCodeAPI sysAutoCodeAPI = SpringFactory.getBean(SysAutoCodeAPI.class);
        DynFixedAssetsLedgerService service = SpringFactory.getBean(DynFixedAssetsLedgerService.class);
        List<Map<String, Object>> newList = new ArrayList<Map<String, Object>>();
        for (Map<String, Object> item : list) {
        	try {
	        	//查询该数据是否存在      
	        	//根据编码、所属工会、所属年份进行确认
	        	String assetCode = item.get("ASSET_CODE").toString();
	        	String guildName = item.get("GUILD_NAME").toString();
	        	String belongYear = item.get("YEAR_TO_BELONG").toString();
	        	String assetType = item.get("ASSET_TYPE").toString();
	        	
	        	DynFixedAssetsLedgerDTO searchParam = new DynFixedAssetsLedgerDTO();
	        	searchParam.setAssetCode(assetCode);
	        	searchParam.setGuildName(guildName);
	        	searchParam.setYearToBelong(belongYear);
	        	List<DynFixedAssetsLedgerDTO> dtoList = service.searchDynFixedAssetsLedger(searchParam, "", "");
	        	if(dtoList != null && dtoList.size() > 0){//查到数据则更新
	        		DynFixedAssetsLedgerDTO dto = dtoList.get(0);
	        		dto.setXh((long) Integer.parseInt(item.get("XH").toString()));
	        		
	        	}else {//新增，重新组装数据
	        		String id = ComUtil.getId();
	        		item.put("ID", id);
	        		String newCode = "";
	        		//查询当前编码最大使用
	        		List<Map<String, Object>> searchMaxCodeList = jdbcTemplate.queryForList("select * from sys_auto_code_max_value t where t.AUTO_CODE = '$$" + assetType + "$$'");
	        		if(searchMaxCodeList != null && searchMaxCodeList.size() > 0){
	        			int maxNum = Integer.parseInt(searchMaxCodeList.get(0).get("MAX_INCREASE_VALUE").toString()) + 1;
	        			newCode = String.format("%05d", maxNum);
	        			newCode = "$$" + assetType + "$$-$$" + newCode + "$$";
	        		}else{
	        			newCode = "$$" + assetType + "$$-$$00001$$";
	        		}
	        		Map<String,String> codeMaps = sysAutoCodeAPI.generateAutoCodeValue("", "GUILD_FIXED_CODE", newCode, id, true);
					if(codeMaps.get("result").equals("success")){
						newCode  = codeMaps.get("autoCodeValue");
					}
					item.put("ASSET_CODE", newCode);
	        		//查询工会ID
					List<Map<String, Object>> searchTradeUnionList = jdbcTemplate.queryForList("select * from dyn_trade_union_organiza t where t.LEAGUE_NAME = '" + guildName + "'");
					if(searchTradeUnionList != null && searchTradeUnionList.size() > 0){
						item.put("GUILD_ID", searchTradeUnionList.get(0).get("ID"));
					}
					//查询部门ID
					String usedDept = item.get("USED_DEPT").toString();
					List<Map<String, Object>> searchDeptList = jdbcTemplate.queryForList("SELECT * FROM SYS_DEPT_V T WHERE T.DEPT_NAME = '" + usedDept + "'");
					if(searchDeptList != null && searchDeptList.size() > 0){
						item.put("USED_DEPT_ID", searchDeptList.get(0).get("ID"));
					}
					item.put("DATA_STATUS", "Y");
					item.put("ATTRIBUTE_06", new Date());
					newList.add(item);
				}
        	
			} catch (Exception e) {
				e.printStackTrace();
			}
        }
        //将新数据装入data
        data.put("insert", newList);
	}

	@Override
	public boolean validateRow(String arg0, Map<String, Object> data, long arg2) {
		return true;
	}

}
