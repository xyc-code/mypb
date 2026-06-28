package avicit.pb.utils.rule;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.core.spring.SpringFactory;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
public class UfmInfoDeptRule {
	public String getSql(Map<String, String> paramMap) {
		//SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);
		PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
		PartyOrganizationService partyOrganizationService = SpringFactory.getBean(PartyOrganizationService.class);
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		
		String partySql = "";
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		List<Map<String, Object>> list = jdbcTemplate.queryForList(
"select su.*, sudp.dept_id as DEPT_ID from sys_user su left join sys_user_dept_position sudp on sudp.user_id = su.id where su.TYPE = '0' and su.STATUS = '1' and su.id='"
		+loginUserId+"'");
			
		if(list.size()>0){
			for(int i=0;i<list.size();i++){
				partySql = "'"+list.get(i).get("DEPT_ID") + "'";
			}

			
		}

		
	
		if(StringUtils.isNotEmpty(partySql)){
			String retSql  = " DEPT_NAME in (" + partySql + ")";
			return retSql; 
		}else{
			return null;
		}

		
	}

}
