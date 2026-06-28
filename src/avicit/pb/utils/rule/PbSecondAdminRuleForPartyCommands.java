package avicit.pb.utils.rule;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;


import avicit.platform6.core.spring.SpringFactory;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
public class PbSecondAdminRuleForPartyCommands {
	public String getSql(Map<String, String> paramMap) {
		//SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);
		PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
		PartyOrganizationService partyOrganizationService = SpringFactory.getBean(PartyOrganizationService.class);
		
		String partyId = "";
		//String partyName = "";
		
		//String loginDeptId = paramMap.get("loginDeptId"); // 登录人部门ID
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		Map<String,String> mapPartyMemberPartyOrg = partyMemberService.getPartyMemberOrganizationByUserId(loginUserId);
		//String topDeptId = sysDeptAPI.getTopSysDeptIdBySysDeptId(loginDeptId);
		//List<SysDept> list = sysDeptAPI.getAllSubSysDeptListBySysDeptId(topDeptId);
		String partySql = "";
		/*String deptSql = "'" + topDeptId + "'";
		for (SysDept sysDept : list) {
			deptSql += ",'" + sysDept.getId() + "'";
		}*/
		if(!mapPartyMemberPartyOrg.isEmpty()){
			for(Map.Entry<String, String> entry : mapPartyMemberPartyOrg.entrySet()){
				//partyName = entry.getKey();
				partyId = entry.getValue();
			}
			partySql += "'" + partyId + "'" ;
		}
		
		if(StringUtils.isNotEmpty(partyId)){
			List<PartyOrganizationDTO> listPartyOrganizationDTO =  partyOrganizationService.findChildrenPartyOrganizationById(partyId);
			for(PartyOrganizationDTO partyOrganizationDTO: listPartyOrganizationDTO){
				String partyOrganizationDTOId = partyOrganizationDTO.getId();
				if(!partyOrganizationDTOId.isEmpty()){
					partySql +=   ",'" + partyOrganizationDTOId + "'";
				}
			
			}
			
		}
		if(StringUtils.isNotEmpty(partySql)){
			String retSql  = " ATTRIBUTE_07 in ( " + partySql + " )";
			return retSql; // 返回的SQL，格式为：列 比较符 值
		}else{
			return null;
		}

		
	}

}
