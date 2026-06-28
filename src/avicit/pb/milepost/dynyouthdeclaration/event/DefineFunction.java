package avicit.pb.milepost.dynyouthdeclaration.event;

import java.util.List;
import java.util.Map;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import org.apache.commons.collections.MapUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

/**
 * 类说明：节点选人关系中的自定义函数
 */
public class DefineFunction implements LoaderConstant, RouteConditionInterface {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

	@Override
	public boolean evaluate(OpenExecution arg0) {
		String loginUserId = (String) arg0.getProcessInstance().getVariable("avicit_bpm_start_id");
		SysUser user = sysUserLoader.getSysUserById(loginUserId);
		String userDeptId = user.getDeptId();

		boolean flag =true;//默认可达
		PartyMemberService partyMemberService=SpringFactory.getBean(PartyMemberService.class);
		Map<String, String> partyDTO=partyMemberService.getPartyMemberOrganizationByUserId(user.getId());//拟稿人所在党支部
		if(partyDTO!=null){//是党员的情况，表示存在党支部信息
			String partyId= MapUtils.getString(partyDTO,"PARTY_ID");
			//需要查询党总支
			PartyOrganizationService partyOrganizationService=SpringFactory.getBean(PartyOrganizationService.class);
			PartyOrganizationDTO partyOrganizationDTO=partyOrganizationService.findParentPartyOrganizationById(partyId);
			if(partyOrganizationDTO!=null){//说明存在 党总支
				flag=false;
			}
		}else{//不是党员的情况

			List<Map<String, Object>> partyOrgslist = jdbcTemplate.queryForList("select id from PARTY_ORGANIZATION  where attribute_02 like '"+userDeptId+"' and attribute_01='2'");

			if(partyOrgslist.size()>0){

				flag=false;

			}
		}
		return flag;
	}
}
