package avicit.pb.milepost.dynyouthdeclaration.event;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import avicit.pb.milepost.dynyouthdeclaration.dao.DynYouthDeclarationDAO;
import avicit.pb.milepost.dynyouthdeclaration.dto.DynYouthDeclarationDTO;
import avicit.pb.milepost.dynyouthdeclaration.service.DynYouthDeclarationService;
import avicit.platform6.core.excel.imp.inf.Validate;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;

public class DynYouthEvent implements SysExcelImpWithExcelHandle{

	@Override
	public void saveSheetAfter(String arg0, Map<String, List<Map<String, Object>>> arg1) {
		// TODO Auto-generated method stub
		DynYouthDeclarationDAO ser = SpringFactory.getBean(DynYouthDeclarationDAO.class);
		Iterator<Map.Entry<String,List<Map<String, Object>>>> iterator  =  arg1.entrySet().iterator();
		while(iterator.hasNext()){
			Map.Entry<String,List<Map<String, Object>>> entry = iterator.next();
			List<Map<String, Object>> value = entry.getValue();
			if(value!=null){
				for(int i=0;i<value.size();i++){
					Map<String, Object> map = value.get(i);
					Iterator<Map.Entry<String,Object>> iterator1 = map.entrySet().iterator();
					while(iterator1.hasNext()){
						Map.Entry<String, Object> entrys = iterator1.next();
						String key1 = entrys.getKey();
						Object value1 = entrys.getValue();
						if("ID".equals(key1)){
								ser.deleteDynYouthDeclarationById((String)value1);
						}
					}
				}
			}
		}
		
	}

	@Override
	public void saveSheetBefore(String arg0, Map<String, List<Map<String, Object>>> arg1) {
		// TODO Auto-generated method stub
		Iterator<Map.Entry<String,List<Map<String, Object>>>> iterator  =  arg1.entrySet().iterator();
		DynYouthDeclarationDAO sysApplicationService = SpringFactory.getBean(DynYouthDeclarationDAO.class);
		DynYouthDeclarationService DynYouthDeclarationService = SpringFactory.getBean(DynYouthDeclarationService.class);
		while(iterator.hasNext()){
			Map.Entry<String,List<Map<String, Object>>> entry = iterator.next();
			String key = entry.getKey();
			List<Map<String, Object>> value = entry.getValue();
			if(value != null) {
				for(int i=0;i<value.size();i++){
					Map<String, Object> map =	value.get(i);
					Iterator<Map.Entry<String,Object>> iterator1 = map.entrySet().iterator();
					DynYouthDeclarationDTO dto = new DynYouthDeclarationDTO();
					while(iterator1.hasNext()){
						Map.Entry<String, Object> entrys = iterator1.next();
						String key1 = entrys.getKey();
						Object value1 = entrys.getValue();					
						if("CREATED_BY".equals(key1)){
							dto.setCreatedBy((String) value1);
						}else
						if("LAST_UPDATED_BY".equals(key1)){
							dto.setLastUpdatedBy((String) value1);
						}else
						if("EXPECTED_INCOME".equals(key1)){
							dto.setExpectedIncome((String)value1);
						}else
						if("COMMANDOES_DATE".equals(key1)){
							dto.setCommandoesDate((Date) value1);
						}else
						if("CREATION_DATE".equals(key1)){
							dto.setCreationDate((Date)value1);
						}else
						if("COMMANDOES_CONTENT".equals(key1)){
							dto.setCommandoesContent((String)value1);
						}else
						if("VERSION".equals(key1)){
							dto.setVersion((long)value1);
						}else
						if("COMMANDOES_NAME".equals(key1)){
							dto.setCommandoesName((String)value1);
						}else
						if("ATTR2".equals(key1)){
							dto.setId((String)value1);
						}else
						if("ORG_IDENTITY".equals(key1)){
							dto.setOrgIdentity((String)value1);
						}else
						if("CREATED_DEPT".equals(key1)){
							dto.setCreatedDept((String)value1);
						}else
						if("LAST_UPDATE_IP".equals(key1)){
							dto.setLastUpdateIp((String)value1);
						}else if("COMMANDOES_PXQK".equals(key1)){
							dto.setCommandoesPxqk((String) value1);
						}
					}
					try {
						DynYouthDeclarationDTO dtos = DynYouthDeclarationService.queryDynYouthDeclarationByPrimaryKey(dto.getId());
						dto.setVersion(dtos.getVersion());
						sysApplicationService.updateDynYouthDeclarationSensitive(dto);			
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
							
				}
			}
		}
	}

	@Override
	public boolean validateRow(String arg0, Map<String, Object> arg1, long arg2) {
		// TODO Auto-generated method stub		
		try{
		Iterator<Map.Entry<String,Object>> iterator  =  arg1.entrySet().iterator();
		final DynYouthDeclarationService sysApplicationService = SpringFactory.getBean(DynYouthDeclarationService.class);
		while(iterator.hasNext()){
			Map.Entry<String,Object> entry = iterator.next();
			String key = entry.getKey();
			 Object value = entry.getValue();
			if("ATTR2".equals(key)){
					Validate vilidate = new Validate() {						
						@Override
						public boolean validate(Object arg0) {
							if(arg0==null){
								return false;
							}
							DynYouthDeclarationDTO dto;
							try {
								dto = sysApplicationService.queryDynYouthDeclarationByPrimaryKey((String)arg0);
								if(dto == null){
									return false;
								}
							} catch (Exception e) {
								e.printStackTrace();
								return false;
							}
							
						return true;
						}
						
						@Override
						public String getField() {
							// TODO Auto-generated method stub
							return "ID";
						}
						
						@Override
						public String getErrorMag() {
							// TODO Auto-generated method stub
							return "id为空或id查询不到";
						}
					};
					if(value == null){
						vilidate.getErrorMag();
						return false;
					}
					DynYouthDeclarationDTO dto;
					try {
						dto = sysApplicationService.queryDynYouthDeclarationByPrimaryKey((String)value);
						if(dto == null){
							vilidate.getErrorMag();
							return false;
						}
					} catch (Exception e) {
						e.printStackTrace();
						return false;
					}
					
				
			}
			
		}		
		
		}catch(Exception ex){
			return false;
		}
		return true;
	}
	
	
	
	
}