package avicit.tradeunion.dacaremedicine.event;

import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.tu.tuorganization.dto.TradeUnionOrganizationDTO;
import avicit.tu.tuorganization.service.TradeUnionOrganizationService;
import org.apache.commons.collections.MapUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * 工会爱心医疗，根据患者查询所在工会，然后根据工会名称查询工会主席 自定义选人 20240328
 */
public class DaCaremedicineSelectUsers extends UserSelect implements
		LoaderConstant {

	@Override
	public Actors getActors(String processInstanceId, String executionId,
			String activityName, String startFormId, String loginUserId) {

		Actors actors = new Actors();

		String guildid="";
		try {

			List<Actor> actorlist = new ArrayList<Actor>();
			JdbcTemplate jdbcTemplate=SpringFactory.getBean(JdbcTemplate.class);

			//先通过表单id获取患者用户id
			StringBuffer sb=new StringBuffer();
			sb.append("select PATIENTER_ID from DA_CARE_MEDICINE t  where t.ID='");
			sb.append(startFormId);
			sb.append("'");
			List<Map<String, Object>> dataList=jdbcTemplate.queryForList(sb.toString());
			for(Map<String, Object> dataMap : dataList){
				String patienterId=MapUtils.getString(dataMap,"PATIENTER_ID");//患者id
				//然后通过患者id查询在哪个工会
				StringBuffer hysql=new StringBuffer();
				hysql.append(" select t.attribute_02 from DYN_TU_ORGAN_MEMBER t where t.user_id='");//得到患者所在工会名称
				hysql.append(patienterId);
				hysql.append("'");
				List<Map<String, Object>> hyList=jdbcTemplate.queryForList(hysql.toString());
				for(Map<String, Object> hyMap : hyList){
					 guildid=MapUtils.getString(hyMap,"ATTRIBUTE_02");//工会id

				}

					if(StringUtils.isEmpty(guildid)){//如果工会id是空的

						//通过职工id 得到所在部门。然后通过部门id 得到部门跟工会的关联，从而拿到工会id
						SysUserDeptPositionAPI sysUserDeptPositionAPI=SpringFactory.getBean(SysUserDeptPositionAPI.class);
						SysDept sysDept=sysUserDeptPositionAPI.getChiefDeptBySysUserId(patienterId);
						if(sysDept!=null){
							String deptId=sysDept.getId();

							TradeUnionOrganizationService tradeUnionOrganizationService=	SpringFactory.getBean(TradeUnionOrganizationService.class);
							List<TradeUnionOrganizationDTO> traduUnionOrganizationList=tradeUnionOrganizationService.findLeagueOrganizationByAttribute02(deptId);

							if(traduUnionOrganizationList.size()>0){
								guildid=traduUnionOrganizationList.get(0).getId();//得到工会id
							}
						}

					}

					//通过工会名称查询工会下面的工会主席
					StringBuffer ghzx=new StringBuffer();
					ghzx.append("select ");
					ghzx.append(" t.league_name,");
					ghzx.append(" t2.user_id,");
					ghzx.append(" t2.user_post");
					ghzx.append(" from ");
					ghzx.append(" dyn_trade_union_organiza t");
					ghzx.append(" left join ");
					ghzx.append(" DYN_TU_ORGAN_MEMBER t2");
					ghzx.append(" on ");
					ghzx.append(" t.id=t2.league_id ");
					ghzx.append(" where");
					ghzx.append(" t.id='");
					ghzx.append(guildid);
					ghzx.append("'");
					ghzx.append(" and ");
					ghzx.append(" t2.user_post='0'");//工会主席

					java.util.List<java.util.Map<String, Object>> ghzxList=jdbcTemplate.queryForList(ghzx.toString());

					if (ghzxList != null && ghzxList.size() > 0) {
						for (Map<String, Object> ghzxMap : ghzxList) {
							String userId=MapUtils.getString(ghzxMap,"USER_ID");
							SysUser user = sysUserLoader.getSysUserById(userId);
							Actor actor = new UserActor();
							actor.setId(userId);// 用户ID
							actor.setName(user.getName());// 用户
							actor.setType("user");// 类别
							actorlist.add(actor);
						}

						actors.setActorlist(actorlist);
						actors.setId(ComUtil.getId());


					}




			}


		} catch (Exception ex) {
			ex.printStackTrace();

		}
		return actors;

	}
	

}
