package avicit.pb.utils.event;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUserDeptPosition;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.cmd.ma;
import avicit.platform6.bpm.pvm.internal.cmd.advance.PrecessingInterface;
import avicit.platform6.bpm.pvm.internal.model.ExecutionImpl;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

public class PartyActivistOrgTransferEventListener implements EventListener, LoaderConstant{
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyActivistService partyActivistService = SpringHelper.getBean(PartyActivistService.class);
	private static final Logger logger = LoggerFactory.getLogger(PartyActivistOrgTransferEventListener.class);
	
	@Override
	public void notify(EventListenerExecution execution) throws Exception{
		// TODO Auto-generated method stub
		
		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_ACT_TRANSFER");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String inPartyOrgId =  (String)data.get("P_IN_PARTY_ORG_ID");
		String pTransferType =  (String)data.get("P_TRANSFER_TYPE");
		String inPartyDeptIds=  (String)data.get("P_IN_DEPT_IDS");
		String outDeptName = (String) data.get("OUT_DEPT_NAME");
		if(StringUtils.equals(pTransferType, "0")){
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.user_id from DYN_AOT_MEMBER t where t.fk_sub_col_id = '"+id+"'");
			for(int i = 0;i < list.size();i++){
				Map<String, Object> mapList = list.get(i);
				String userId = (String)mapList.get("user_id");
				if(StringUtils.isNotEmpty(userId)){
					if(StringUtils.isNotEmpty(inPartyOrgId) && StringUtils.isNotEmpty(inPartyDeptIds)){
						try {
							int ret = partyActivistService.updatePartyActivistMemberPartyOrgByUserId(userId,inPartyOrgId);
							if(ret == 0){
								logger.warn("更新失败，partyActivistService中,userId:" + userId + ",inPartyOrgId:" + inPartyOrgId);
							}
							SysUserDeptPosition sysUserDeptPosition = sysUserDeptPositionLoader.getChiefUDPRelationBySysUserId(userId);
							sysUserDeptPosition.setDeptId(inPartyDeptIds);
							sysUserDeptPositionLoader.updateSysUserDeptPosition(sysUserDeptPosition);
							int retUpdatePartyActivistDeptByUserId = jdbcTemplate.update("update PARTY_ACTIVIST t set t.dept_id = '"+ inPartyDeptIds +"'  where t.user_id = '"+userId+"'");
							if(retUpdatePartyActivistDeptByUserId == 0){
								logger.error("UpdatePartyActivistDeptByUserId更新失败");
							}
							
					
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
							throw e;
						}
					}
					
				}
				
				
				
			}
		}else if(StringUtils.equals(pTransferType, "1")){
			inPartyOrgId = 	(String)data.get("P_IN_PARTY_ORG");
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.user_id from DYN_AOT_MEMBER t where t.fk_sub_col_id = '"+id+"'");
			for(int i = 0;i < list.size();i++){
				Map<String, Object> mapList = list.get(i);
				String userId = (String)mapList.get("user_id");
				if(StringUtils.isNotEmpty(userId)){
					if(StringUtils.isNotEmpty(inPartyOrgId) && StringUtils.isNotEmpty(outDeptName)){
						try {
							int ret = partyActivistService.updatePartyActivistMemberPartyOrgByUserId(userId,inPartyOrgId);
							if(ret == 0){
								logger.warn("更新失败，partyActivistService中,userId:" + userId + ",inPartyOrgId:" + inPartyOrgId);
							}
							//SysUserDeptPosition sysUserDeptPosition = sysUserDeptPositionLoader.getChiefUDPRelationBySysUserId(userId);
							//sysUserDeptPosition.setDeptId(inPartyDeptIds);
							//sysUserDeptPositionLoader.updateSysUserDeptPosition(sysUserDeptPosition);
							int retUpdatePartyMemberDeptByUserId = jdbcTemplate.update("update PARTY_ACTIVIST t set t.dept_id = '"+ outDeptName +"'  where t.user_id = '"+userId+"'");
							if(retUpdatePartyMemberDeptByUserId == 0){
								logger.error("UpdatePartyACTIVISTDeptByUserId更新失败");
							}
							int retUpdatePartyActivistStatusByUserId = jdbcTemplate.update("update PARTY_ACTIVIST t set t.status = '0'  where t.user_id = '" + userId + "'");
					        if (retUpdatePartyActivistStatusByUserId == 0) {
						       logger.error("UpdatePartyActivistDeptByUserId更新失败");
					        }
					        int retUpdateSysUserStatusByUserId = jdbcTemplate.update("update SYS_USER t set t.status = '3'  where t.id = '" + userId + "'");
					        if (retUpdateSysUserStatusByUserId == 0) {
						       logger.error("retUpdateSysUserStatusByUserId更新失败");
					        }
					        sysUserLoader.reLoad();
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
							throw e;
						}
					}
					
				}
				
				
				
			}
			
			
			
		}else{
			throw new Exception("PartyActivistOrgTransferEventListener异常---------pTransferType：" + pTransferType);
		}
		
			
			
			
			
			
			
	
				
		
		
		
	}

}
