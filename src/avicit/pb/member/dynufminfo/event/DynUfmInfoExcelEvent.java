package avicit.pb.member.dynufminfo.event;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import avicit.pb.member.dynufminfo.dao.DynUfmInfoDAO;
import avicit.pb.member.dynufminfo.dto.DynUfmInfoDTO;
import avicit.pb.member.dynufminfo.service.DynUfmInfoService;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;

public class DynUfmInfoExcelEvent implements SysExcelImpWithExcelHandle{

	/**
	 * 自定义行数据校验
	 * @param sheetName sheet页名称
	 * @param rowdata   行数据
	 * @param rowNum    行号
	 * @return
	 */
	@Override
	public boolean validateRow(String sheetName, Map<String, Object> rowdata, long rowNum) {
		String psu1="";
		String psu2="";
		
		//return false;
		return true;
	}

	/**
	 * sheet页数据插入前处理
	 * @param sheetName sheet名
	 * @param data      sheet页数据
	 *                  K:"INSERT", V:插入数据结果集
	 *                  K:"UPDATE", V:更新数据结果集
	 */
	@Override
	public void saveSheetBefore(String sheetName, Map<String, List<Map<String, Object>>> data) {
		String psu3="";
		String psu4="";
		
		
		
	
		
		
		
		
		
	}

	/**
	 * sheet页数据插入后处理
	 * @param sheetName sheet名
	 * @param data      sheet页数据
	 *                  K:"INSERT", V:插入数据结果集
	 *                  K:"UPDATE", V:更新数据结果集
	 */
	@Override
	public void saveSheetAfter(String sheetName, Map<String, List<Map<String, Object>>> data) {
		String psu5="";
		String psu6="";

		
		DynUfmInfoDAO orgcode = SpringFactory.getBean(DynUfmInfoDAO.class);
		DynUfmInfoService dynUfmInfoService = SpringFactory.getBean(DynUfmInfoService.class);
		DynUfmInfoDTO dto = new DynUfmInfoDTO();
		
		
		Iterator<Map.Entry<String,List<Map<String, Object>>>> iterator  =  data.entrySet().iterator();
		while(iterator.hasNext()){
			Map.Entry<String,List<Map<String, Object>>> entry = iterator.next();
			List<Map<String, Object>> value = entry.getValue();
			if(value!=null){
				for(int i=0;i<value.size();i++){
					Map<String, Object> map = value.get(i);
					Iterator<Map.Entry<String,Object>> iterator1 = map.entrySet().iterator();
					String dbid="";
					String dbponame="";
					String dbpocode="";
					while(iterator1.hasNext()){
						Map.Entry<String, Object> entrys = iterator1.next();
						String key1 = entrys.getKey();
						Object value1 = entrys.getValue();

						if("ID".equals(key1)){
							 dbid=value1.toString();
						}
						if("PO_NAME".equals(key1)){
							 dbponame=value1.toString();
						}

					}
					
					if(dbponame!=""){
						dbpocode=orgcode.poOrgNameDao(dbponame).get("PARTY_CODE").toString();
					}
					try {
						if(dbid!=""&&dbponame!=""){
							dto.setId(dbid);
							dto.setData6(dbpocode);
							dynUfmInfoService.updateDynUfmInfoSensitive(dto);
						}
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					
					
				}
			}
		}
	
		
		
	}
}