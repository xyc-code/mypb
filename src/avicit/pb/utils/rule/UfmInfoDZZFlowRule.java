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
public class UfmInfoDZZFlowRule {
	public String getSql(Map<String, String> paramMap) {
		//SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);
		PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
		PartyOrganizationService partyOrganizationService = SpringFactory.getBean(PartyOrganizationService.class);
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		
		String partySql = "";
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		List<Map<String, Object>> list = jdbcTemplate.queryForList(
"WITH PSUA AS (SELECT USER_ID,PARTY_ID FROM PARTY_ORGAN_MEMBER),PSUB AS (SELECT  USER_ID,PARTY_ID,PO.ID,PO.PARTY_CODE,PO.PARTY_NAME,PO.PARENT_ID  FROM PSUA LEFT JOIN PARTY_ORGANIZATION PO ON PO.ID=PSUA.PARTY_ID),PSUC AS (SELECT  USER_ID,PARTY_ID,PO.ID,PO.PARTY_CODE,PO.PARTY_NAME,PO.PARENT_ID  FROM PSUA LEFT JOIN PARTY_ORGANIZATION PO ON PO.PARENT_ID=PSUA.PARTY_ID)SELECT * FROM PSUC WHERE PSUC.USER_ID='"
		+loginUserId+"'");
 
		//判定是否总支书记
		PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
		List<Map<String, Object>> list2 = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '"+loginUserId+"'");
		String partyId = "";
		if(list2 != null && list2.size() > 0){
			Map<String, Object> mapList = list2.get(0);
			partyId = (String)mapList.get("party_id");
			if (StringUtils.isNotEmpty(partyId)) {
				String parentPartyId = "";
				List<Map<String, Object>> list_tree_parent_id = jdbcTemplate.queryForList(
						"select t.parent_id from PARTY_ORGANIZATION t where t.id = '"+partyId+"'");
				if(list_tree_parent_id != null && list_tree_parent_id.size() > 0){
					Map<String, Object> mapList_parent_id = list_tree_parent_id.get(0);
					parentPartyId = (String)mapList_parent_id.get("parent_id");
					try {
						List<PartyOrganMemberDTO> partyOrganMemberDTOList = partyOrganMemberService
								.queryPartyOrganMemberByPartyId(parentPartyId);
						for (PartyOrganMemberDTO partyOrganMemberDTO : partyOrganMemberDTOList) {
							Actor actor = new UserActor();
							String userId = partyOrganMemberDTO.getUserId();
							String post = partyOrganMemberDTO.getUserPost();
							
							if (StringUtils.isNotEmpty(userId) && StringUtils.isNotEmpty(post)) {
								if(StringUtils.equals(post, "1") || StringUtils.equals(post, "2")){//user_post    1 2  为总支、党委书记    0为支部书记
//									actor.setId(userId);// 用户ID
//									actor.setName(sysUserLoader.getSysUserNameById(userId));// 用户
//									actor.setType("user");// 类别
//									actorlist.add(actor);
									
									//总支书记id对比
									if(StringUtils.equals(userId, loginUserId)){
										if(list.size()>0){
											for(int i=0;i<list.size();i++){
												partySql +=   ",'" + list.get(i).get("PARTY_CODE") + "'";
											}
											partySql=partySql.substring(1, partySql.length());
											
										}
									}
	 	
								}
								
							}
						}

					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}	
			}
		}
	
	
		if(StringUtils.isNotEmpty(partySql)){
			String retSql  = " DATA_6 in ( " + partySql + " )";
			return retSql; // 返回的SQL，格式为：列 比较符 值
		}else{
			return "DEPT_NAME = '" + loginUserId+"'";
		}

		
	}

}
