package avicit.common.selectusers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.tu.tuorganization.dto.TradeUnionOrganizationDTO;
import avicit.tu.tuorganization.service.TradeUnionOrganizationService;
import org.apache.commons.collections.MapUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.StringUtils;

import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.api.thirdinterface.IsFinishTask;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.bpm.pvm.internal.util.StringUtil;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.UtilString;
import avicit.platform6.core.spring.SpringFactory;


/**
 * 工会慰问金职工所对应的工会主席自定义选人 20240328
 */
public class CareMedicineSelectUsers extends UserSelect implements
		LoaderConstant {

	@Override
	public Actors getActors(String processInstanceId, String executionId,
			String activityName, String startFormId, String loginUserId) {

		Actors actors = new Actors();

		try {

			BpmsControlUtils bpmsControlUtils=SpringFactory.getBean(BpmsControlUtils.class);

			TableData td=new TableData();
			td.setTableName("DYN_SALUTE_MONEY");//查询慰问金表
			td.setPrimaryKeyValue(startFormId);
			Map<String,Object> data=bpmsControlUtils.getData(td);
			String guildId=MapUtils.getString(data,"GUILD_ID");//工会id
			JdbcTemplate jdbcTemplate=SpringFactory.getBean(JdbcTemplate.class);

			if(StringUtils.isEmpty(guildId)){//如果工会id是空的
				String userId=MapUtils.getString(data,"DATA_1");//获取职工id
				//通过职工id 得到所在部门。然后通过部门id 得到部门跟工会的关联，从而拿到工会id
				SysUserDeptPositionAPI sysUserDeptPositionAPI=SpringFactory.getBean(SysUserDeptPositionAPI.class);
				SysDept sysDept=sysUserDeptPositionAPI.getChiefDeptBySysUserId(userId);
				if(sysDept!=null){
					String deptId=sysDept.getId();

					TradeUnionOrganizationService tradeUnionOrganizationService=	SpringFactory.getBean(TradeUnionOrganizationService.class);
					List<TradeUnionOrganizationDTO> traduUnionOrganizationList=tradeUnionOrganizationService.findLeagueOrganizationByAttribute02(deptId);

					if(traduUnionOrganizationList.size()>0){
						guildId=traduUnionOrganizationList.get(0).getId();//得到工会id
					}
				}

			}

			StringBuffer sb=new StringBuffer();
			sb.append("select ");
			sb.append(" t.league_name,");
			sb.append(" t2.user_id,");
			sb.append(" t2.user_post");
			sb.append(" from ");
			sb.append(" dyn_trade_union_organiza t");
			sb.append(" left join ");
			sb.append(" DYN_TU_ORGAN_MEMBER t2");
			sb.append(" on ");
			sb.append(" t.id=t2.league_id ");
			sb.append(" where");
			sb.append(" t.id='");
			sb.append(guildId);
			sb.append("'");
			sb.append(" and ");
			sb.append(" t2.user_post='0'");//工会主席

			java.util.List<java.util.Map<String, Object>> dataList=jdbcTemplate.queryForList(sb.toString());
			List<Actor> actorlist = new ArrayList<Actor>();

			if (dataList != null && dataList.size() > 0) {
				for (Map<String, Object> dataMap : dataList) {
					String userId=MapUtils.getString(dataMap,"USER_ID");
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
		} catch (Exception ex) {
			ex.printStackTrace();

		}
		return actors;

	}
	

}
