package avicit.tu.utils.rule;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.core.spring.SpringFactory;
//import avicit.tu.dyntradeunionorganiza.service.DynTradeUnionOrganizaService;
//import avicit.tu.dyntuorganmember.service.DynTuOrganMemberService;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
public class TradeUnionOneRule {
	public String getSql(Map<String, String> paramMap) {
		
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		String tuoSql = "";
		String tuoId = "";
		List<Map<String, Object>> list_duties = jdbcTemplate
				.queryForList("select * from dyn_tu_organ_member");
		
		if(list_duties.size()>0){
			for(int i=0;i<list_duties.size();i++){
				if(list_duties.get(i).get("USER_ID").equals(loginUserId)){
					if(list_duties.get(i).get("USER_POST").equals("0")||list_duties.get(i).get("USER_POST").equals("2")){
						  tuoId="'"+list_duties.get(i).get("LEAGUE_ID").toString()+"'";
					}
				}
			}
		}

		
		if(StringUtils.isNotEmpty(tuoId)){
			String retSql  = " IN_TU_ORG_ID in (" + tuoId + ")";
			return retSql; // 返回的SQL，格式为：列 比较符 值
		}else{
			return null;
		}

		
	}

}
