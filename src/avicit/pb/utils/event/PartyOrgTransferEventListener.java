package avicit.pb.utils.event;

import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

import java.io.BufferedReader;
import java.io.Reader;
import java.sql.Clob;
import java.util.List;
import java.util.Map;

import org.antlr.grammar.v3.ANTLRv3Parser.throwsSpec_return;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysDeptAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysUserDeptPosition;
import avicit.platform6.api.sysuser.impl.SysUserDeptPositionAPImpl;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.cmd.ma;
import avicit.platform6.bpm.pvm.internal.cmd.advance.PrecessingInterface;
import avicit.platform6.bpm.pvm.internal.env.SpringContext;
import avicit.platform6.bpm.pvm.internal.model.ExecutionImpl;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.core.exception.ExceptionUtil;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserLoader;
import avicit.platform6.msystem.user.service.impl.UserService;

public class PartyOrgTransferEventListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	// PartyOrganMemberService partyOrganMemberService =
	// SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(PartyOrgTransferEventListener.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		// TODO Auto-generated method stub

		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_PARTY_TRANSFER");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String inPartyOrg = (String) data.get("P_IN_PARTY_ORG");
		String outDeptName = (String) data.get("OUT_DEPT_NAME");
		String inPartyOrgId = (String) data.get("P_IN_PARTY_ORG_ID");
		String inPartyGroupId = (String) data.get("P_PARTY_GROUP_ID");
		String inPartyDeptIds = (String) data.get("P_IN_DEPT_IDS");
		String pTransferType = (String) data.get("P_TRANSFER_TYPE");
		if (StringUtils.equals(pTransferType, "0")) {
			List<Map<String, Object>> list = jdbcTemplate
					.queryForList("select t.user_id from DYN_POT_MEMBER t where t.fk_sub_col_id = '" + id + "'");
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> mapList = list.get(i);
				String userId = (String) mapList.get("user_id");
				if (StringUtils.isNotEmpty(userId)) {
					if (StringUtils.isNotEmpty(inPartyOrgId) && StringUtils.isNotEmpty(inPartyGroupId)
							&& StringUtils.isNotEmpty(inPartyDeptIds)) {
						try {
							int retUpdatePartyMemberPartyOrgAndGroupByUserId = partyMemberService
									.updatePartyMemberPartyOrgAndGroupByUserId(userId, inPartyOrgId, inPartyGroupId);
							if (retUpdatePartyMemberPartyOrgAndGroupByUserId == 0) {
								logger.error("PartyOrgTransferEventListener更新失败");
							}

							SysUserDeptPosition sysUserDeptPosition = sysUserDeptPositionLoader
									.getChiefUDPRelationBySysUserId(userId);
							sysUserDeptPosition.setDeptId(inPartyDeptIds);
							sysUserDeptPositionLoader.updateSysUserDeptPosition(sysUserDeptPosition);
							int retUpdatePartyMemberDeptByUserId = jdbcTemplate
									.update("update PARTY_MEMBER t set t.dept_id = '" + inPartyDeptIds
											+ "'  where t.user_id = '" + userId + "'");
							if (retUpdatePartyMemberDeptByUserId == 0) {
								logger.error("UpdatePartyMemberDeptByUserId更新失败");
							}
							/*int retUpdatePartyMemberStatusByUserId = jdbcTemplate
									.update("update PARTY_MEMBER t set t.status = '0'  where t.user_id = '" + userId + "'");
							if (retUpdatePartyMemberStatusByUserId == 0) {
								logger.error("retUpdatePartyMemberStatusByUserId更新失败");
							}*/

							// ResponseMsg<Void> response =
							// RestClient.doPost("http://127.0.0.1:11001/api/platform6/sysorguser/SysUserDeptPosition/updateSysUserDeptPosition/v1",
							// sysUserDeptPosition ,new
							// GenericType<ResponseMsg<Void>>(){});
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
							logger.error("PartyOrgTransferEventListener更新失败");
							throw e;
						}
					}

				}

			}
		}else if(StringUtils.equals(pTransferType, "1")){
			List<Map<String, Object>> list = jdbcTemplate
					.queryForList("select t.user_id from DYN_POT_MEMBER t where t.fk_sub_col_id = '" + id + "'");
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> mapList = list.get(i);
				String userId = (String) mapList.get("user_id");
				if (StringUtils.isNotEmpty(userId)) {
					if (StringUtils.isNotEmpty(inPartyOrg) && StringUtils.isNotEmpty(outDeptName)) {
						try {
							int retUpdatePartyMemberPartyOrgAndGroupByUserId = partyMemberService
									.updatePartyMemberPartyOrgAndGroupByUserId(userId, inPartyOrg, "");
							if (retUpdatePartyMemberPartyOrgAndGroupByUserId == 0) {
								logger.error("PartyOrgTransferEventListener更新失败");
							}

							/*SysUserDeptPosition sysUserDeptPosition = sysUserDeptPositionLoader
									.getChiefUDPRelationBySysUserId(userId);
							sysUserDeptPosition.setDeptId(inPartyDeptIds);
							sysUserDeptPositionLoader.updateSysUserDeptPosition(sysUserDeptPosition);*/
							int retUpdatePartyMemberDeptByUserId = jdbcTemplate
									.update("update PARTY_MEMBER t set t.dept_id = '" + outDeptName
											+ "'  where t.user_id = '" + userId + "'");
							if (retUpdatePartyMemberDeptByUserId == 0) {
								logger.error("UpdatePartyMemberDeptByUserId更新失败");
							}
							int retUpdatePartyMemberStatusByUserId = jdbcTemplate.update("update PARTY_MEMBER t set t.status = '0'  where t.user_id = '" + userId + "'");
					        if (retUpdatePartyMemberStatusByUserId == 0) {
						       logger.error("retUpdatePartyMemberStatusByUserId更新失败");
					        }
					    	int retUpdateSysUserStatusByUserId = jdbcTemplate.update("update SYS_USER t set t.status = '3'  where t.id = '" + userId + "'");
					        if (retUpdateSysUserStatusByUserId == 0) {
						       logger.error("retUpdateSysUserStatusByUserId更新失败");
					        }
					        sysUserLoader.reLoad();
							/*int retUpdatePartyMemberStatusByUserId = jdbcTemplate
									.update("update PARTY_MEMBER t set t.status = '0'  where t.user_id = '" + userId + "'");
							if (retUpdatePartyMemberStatusByUserId == 0) {
								logger.error("retUpdatePartyMemberStatusByUserId更新失败");
							}*/

							// ResponseMsg<Void> response =
							// RestClient.doPost("http://127.0.0.1:11001/api/platform6/sysorguser/SysUserDeptPosition/updateSysUserDeptPosition/v1",
							// sysUserDeptPosition ,new
							// GenericType<ResponseMsg<Void>>(){});
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
							logger.error("PartyOrgTransferEventListener更新失败");
							throw e;
						}
					}

				}

			}
			
			
			
			
			
		}else{
			throw new Exception("PartyOrgTransferEventListener异常---------pTransferType：" + pTransferType);
		}

	}

	public String clobToString(Clob clob) throws Exception {
		String re = "";
		Reader is = null;
		BufferedReader br = null;
		try {
			// 得到流
			is = clob.getCharacterStream();
			br = new BufferedReader(is);
			String s = br.readLine();
			StringBuffer sb = new StringBuffer();
			// 执行循环将字符串全部取出付值给StringBuffer由StringBuffer转成STRING
			while (s != null) {
				sb.append(s);
				s = br.readLine();
			}
			re = sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (is != null) {
				is.close();
			}
			if (br != null) {
				br.close();
			}
		}
		return re;
	}

}
