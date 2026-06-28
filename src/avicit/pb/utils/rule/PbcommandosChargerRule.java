package avicit.pb.utils.rule;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;


import avicit.platform6.core.spring.SpringFactory;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
public class PbcommandosChargerRule {
	public String getSql(Map<String, String> paramMap) {
		//SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		if(StringUtils.isNotEmpty(loginUserId)){
			String retSql  = " dbms_lob.substr(commandos_charger) = '"+loginUserId+"'";
			return retSql; // 返回的SQL，格式为：列 比较符 值
		}else{
			return null;
		}

		
	}

}
