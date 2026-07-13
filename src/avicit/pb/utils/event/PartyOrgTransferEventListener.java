package avicit.pb.utils.event;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUserDeptPosition;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

/**
 * 党组织关系转移流程结束事件。
 *
 * <p>流程办结后，根据转出类别同步党员、党组织人员和系统用户信息。</p>
 */
public class PartyOrgTransferEventListener implements EventListener, LoaderConstant {

	private static final Logger logger = LoggerFactory.getLogger(PartyOrgTransferEventListener.class);
	private static final String TRANSFER_TYPE_INTERNAL = "0";
	private static final String TRANSFER_TYPE_EXTERNAL = "1";
	private static final String MEMBER_INVALID_STATUS = "0";
	private static final String SYS_USER_INVALID_STATUS = "3";

	private final BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	private final JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	private final PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		String id = getFormId(execution);
		TableData tableData = new TableData();
		tableData.setTableName("DYN_PARTY_TRANSFER");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);

		String pTransferType = toString(data.get("P_TRANSFER_TYPE"));
		if (StringUtils.equals(pTransferType, TRANSFER_TYPE_INTERNAL)) {
			handleInternalTransfer(id, data);
		} else if (StringUtils.equals(pTransferType, TRANSFER_TYPE_EXTERNAL)) {
			handleExternalTransfer(id, data);
		} else {
			throw new Exception("PartyOrgTransferEventListener异常：未知转出类别 pTransferType=" + pTransferType);
		}
	}

	private void handleInternalTransfer(String id, Map<String, Object> data) throws Exception {
		String inPartyOrgId = toString(data.get("P_IN_PARTY_ORG_ID"));
		String inPartyGroupId = toString(data.get("P_PARTY_GROUP_ID"));
		String inPartyDeptIds = toString(data.get("P_IN_DEPT_IDS"));

		if (StringUtils.isBlank(inPartyOrgId) || StringUtils.isBlank(inPartyDeptIds)) {
			throw new Exception("内部调动缺少目的支部或目的部门，formId=" + id);
		}

		List<Map<String, Object>> members = queryTransferMembers(id);
		for (Map<String, Object> member : members) {
			String userId = toString(member.get("USER_ID"));
			String userPost = toString(member.get("USER_POST"));
			if (StringUtils.isBlank(userId)) {
				continue;
			}

			// 内部调动：党员基础信息同步到新的党组织、党小组和行政部门。
			int memberRet = partyMemberService.updatePartyMemberPartyOrgAndGroupByUserId(userId, inPartyOrgId,
					StringUtils.defaultString(inPartyGroupId));
			if (memberRet == 0) {
				logger.warn("内部调动未更新到党员党组织信息，userId={}, partyId={}", userId, inPartyOrgId);
			}

			int deptRet = jdbcTemplate.update("update PARTY_MEMBER t set t.DEPT_ID = ? where t.USER_ID = ?",
					inPartyDeptIds, userId);
			if (deptRet == 0) {
				logger.warn("内部调动未更新到党员部门，userId={}, deptId={}", userId, inPartyDeptIds);
			}

			updateSysUserMainDept(userId, inPartyDeptIds);

			// 内部调动：子表党内职务非空则同步党组织人员；为空表示调动后无党内职务，删除旧记录。
			syncPartyOrganMember(userId, inPartyOrgId, inPartyDeptIds, userPost);
		}
	}

	private void handleExternalTransfer(String id, Map<String, Object> data) throws Exception {
		String outPartyOrg = toString(data.get("P_IN_PARTY_ORG"));
		String outDeptName = toString(data.get("OUT_DEPT_NAME"));

		List<Map<String, Object>> members = queryTransferMembers(id);
		for (Map<String, Object> member : members) {
			String userId = toString(member.get("USER_ID"));
			if (StringUtils.isBlank(userId)) {
				continue;
			}

			// 外部转出：保留原有目的组织/部门写入逻辑，但不再用这些字段阻断置无效处理。
			if (StringUtils.isNotBlank(outPartyOrg)) {
				int orgRet = partyMemberService.updatePartyMemberPartyOrgAndGroupByUserId(userId, outPartyOrg, "");
				if (orgRet == 0) {
					logger.warn("外部转出未更新到党员目的组织，userId={}, partyOrg={}", userId, outPartyOrg);
				}
			}
			if (StringUtils.isNotBlank(outDeptName)) {
				int deptRet = jdbcTemplate.update("update PARTY_MEMBER t set t.DEPT_ID = ? where t.USER_ID = ?",
						outDeptName, userId);
				if (deptRet == 0) {
					logger.warn("外部转出未更新到党员外部部门，userId={}, deptName={}", userId, outDeptName);
				}
			}

			// 外部转出：党员置无效，删除党组织人员记录，系统用户置为无效用户。
			int memberStatusRet = jdbcTemplate.update("update PARTY_MEMBER t set t.STATUS = ? where t.USER_ID = ?",
					MEMBER_INVALID_STATUS, userId);
			if (memberStatusRet == 0) {
				logger.warn("外部转出未更新到党员状态，userId={}", userId);
			}

			deletePartyOrganMember(userId);

			int sysUserRet = jdbcTemplate.update("update SYS_USER t set t.STATUS = ? where t.ID = ?",
					SYS_USER_INVALID_STATUS, userId);
			if (sysUserRet == 0) {
				logger.warn("外部转出未更新到系统用户状态，userId={}", userId);
			}
			sysUserLoader.reLoad();
		}
	}

	private List<Map<String, Object>> queryTransferMembers(String id) {
		return jdbcTemplate.queryForList(
				"select t.USER_ID, t.USER_POST from DYN_POT_MEMBER t where t.FK_SUB_COL_ID = ?", id);
	}

	private void updateSysUserMainDept(String userId, String deptId) throws Exception {
		SysUserDeptPosition sysUserDeptPosition = sysUserDeptPositionLoader.getChiefUDPRelationBySysUserId(userId);
		if (sysUserDeptPosition == null) {
			logger.warn("未找到系统用户主部门关系，userId={}", userId);
			return;
		}
		sysUserDeptPosition.setDeptId(deptId);
		sysUserDeptPositionLoader.updateSysUserDeptPosition(sysUserDeptPosition);
	}

	private void syncPartyOrganMember(String userId, String partyId, String deptId, String userPost) {
		if (StringUtils.isBlank(userPost)) {
			deletePartyOrganMember(userId);
			return;
		}

		String deptName = querySingleValue("select DEPT_NAME from SYS_DEPT_V where ID = ?", deptId);
		String userName = querySingleValue("select NAME from SYS_USER where ID = ?", userId);
		int updateRet = jdbcTemplate.update(
				"update PARTY_ORGAN_MEMBER t set t.PARTY_ID = ?, t.DEPT_ID = ?, t.DEPT_NAME = ?, "
						+ "t.USER_POST = ?, t.LAST_UPDATE_DATE = sysdate where t.USER_ID = ?",
				partyId, deptId, deptName, userPost, userId);

		if (updateRet > 0) {
			return;
		}

		// 原来没有党组织人员记录时，按本次转移结果补建一条职务记录。
		jdbcTemplate.update(
				"insert into PARTY_ORGAN_MEMBER "
						+ "(ID, USER_ID, USER_NAME, DEPT_ID, DEPT_NAME, USER_POST, PARTY_ID, "
						+ "CREATION_DATE, LAST_UPDATE_DATE, VERSION, VALID_FLAG) "
						+ "values (?, ?, ?, ?, ?, ?, ?, sysdate, sysdate, 0, '1')",
				newId(), userId, userName, deptId, deptName, userPost, partyId);
	}

	private int deletePartyOrganMember(String userId) {
		return jdbcTemplate.update("delete from PARTY_ORGAN_MEMBER where USER_ID = ?", userId);
	}

	private String querySingleValue(String sql, Object param) {
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, param);
		if (rows.isEmpty() || rows.get(0).isEmpty()) {
			return "";
		}
		Object value = rows.get(0).values().iterator().next();
		return toString(value);
	}

	private String getFormId(EventListenerExecution execution) {
		String id = toString(execution.getVariable("id"));
		if (StringUtils.isBlank(id)) {
			id = toString(execution.getVariable("ID"));
		}
		return id;
	}

	private String toString(Object value) {
		return value == null ? "" : String.valueOf(value);
	}

	private String newId() {
		return UUID.randomUUID().toString().replace("-", "");
	}
}
