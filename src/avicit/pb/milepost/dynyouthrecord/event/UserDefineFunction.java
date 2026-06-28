package avicit.pb.milepost.dynyouthrecord.event;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.*;

/**
 * 类说明：节点选人关系中的自定义函数
 */
public class UserDefineFunction extends UserSelect implements LoaderConstant, RouteConditionInterface {
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

    // activityName 逻辑节点
    // startFormId 表单id
    // loginUserId 登录人
    // 自定义选人
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {
        //DynYouthRecordService sysApplicationService = SpringFactory.getBean(DynYouthRecordService.class);
        List<Actor> actorlist = new ArrayList<Actor>();
        try {
//			DynYouthRecordDTO dtos = sysApplicationService.queryDynYouthRecordByPrimaryKey(startFormId);
//			String userId = dtos.getCurrUserId();
            Set<String> set = new HashSet<String>();
            set.add("avicit_bpm_start_id");
            Map<String, Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
            String userId = (String) map.get("avicit_bpm_start_id");
            SysUser user = sysUserLoader.getSysUserById(userId);
            String userDeptId = user.getDeptId();
            if ("task2".equals(activityName)) {
                //List<LeagueOrganMemberDTO> dto = sysApplicationService.getLeagueOrganizationDTO(userDeptId, "0");
                List<Map<String, Object>> dto = jdbcTemplate.queryForList("select * from  LEAGUE_ORGAN_MEMBER where league_id in (select id from LEAGUE_ORGANIZATION where   attribute_02 like '%" + userDeptId + "%')  and user_post = '0'");
                if (dto != null) {
                    for (int i = 0; i < dto.size(); i++) {
                        Actor actor = new UserActor();
                        actor.setId((String) dto.get(i).get("USER_ID"));// 用户ID
                        actor.setName(sysUserLoader.getSysUserById((String) dto.get(i).get("USER_ID")).getName());// 用户
                        actor.setType("user");// 类别
                        actorlist.add(actor);
                    }

                }
            } else if ("task6".equals(activityName)) {//党支部  1


                PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
                Map<String, String> partyDTO = partyMemberService.getPartyMemberOrganizationByUserId(userId);//拟稿人所在党支部
                if (partyDTO != null) {//是党员的情况，表示存在党支部信息
                    String partyId = MapUtils.getString(partyDTO, "PARTY_ID");
                    List<Map<String, Object>> partyOrglist = jdbcTemplate.queryForList("select * from party_organ_member where party_id ='" + partyId + "' and user_post='0'");
                    for (Map<String, Object> pary : partyOrglist) {
                        Actor actor = new UserActor();
                        actor.setId(MapUtils.getString(pary, "USER_ID"));
                        actor.setName(sysUserLoader.getSysUserById(MapUtils.getString(pary, "USER_ID")).getName());
                        actor.setType("user");
                        actorlist.add(actor);

                    }


                } else {//不是党员的情况
                    int userPost = 0;
                    List<Map<String, Object>> partyOrgslist = jdbcTemplate.queryForList("select id from PARTY_ORGANIZATION  where attribute_02 like '" + userDeptId + "' and attribute_01='1'");

                    if (partyOrgslist.size() > 0) {

                        for (Map<String, Object> partyMap : partyOrgslist) {
                            String partyId = MapUtils.getString(partyMap, "ID");//党组织id
                            List<Map<String, Object>> partyOrglist = jdbcTemplate.queryForList("select * from party_organ_member where party_id ='" + partyId + "' and user_post='0'");
                            for (Map<String, Object> pary : partyOrglist) {
                                Actor actor = new UserActor();
                                actor.setId(MapUtils.getString(pary, "USER_ID"));
                                actor.setName(sysUserLoader.getSysUserById(MapUtils.getString(pary, "USER_ID")).getName());
                                actor.setType("user");
                                actorlist.add(actor);

                            }


                        }


                    }
                }



				/*
					List<Map<String, Object>> list = jdbcTemplate
						.queryForList("select * from party_organ_member where party_id = (select id from PARTY_ORGANIZATION where attribute_02 like '"+userDeptId+"') and user_post = '"+userPost+"'");
				if(list!=null&&list.size()!=0){
					for(Map<String,Object> dto : list){
						Actor actor = new UserActor();
						actor.setId((String)dto.get("USER_ID"));
						actor.setName(sysUserLoader.getSysUserById((String)dto.get("USER_ID")).getName());
						actor.setType("user");
						actorlist.add(actor);
					}

				}*/
            } else if ("task3".equals(activityName)) {// 2 党总支


                PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
                Map<String, String> partyDTO = partyMemberService.getPartyMemberOrganizationByUserId(userId);//拟稿人所在党支部
                if (partyDTO != null) {//是党员的情况，表示存在党支部信息
                    String partyId = MapUtils.getString(partyDTO, "PARTY_ID");
                    //需要查询党总支
                    PartyOrganizationService partyOrganizationService = SpringFactory.getBean(PartyOrganizationService.class);
                    PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.findParentPartyOrganizationById(partyId);
                    if (partyOrganizationDTO != null) {//说明存在 党总支
                        partyId = partyOrganizationDTO.getId();
                        List<Map<String, Object>> partyOrglist = jdbcTemplate.queryForList("select * from party_organ_member where party_id ='" + partyId + "' and user_post='0'");
                        for (Map<String, Object> pary : partyOrglist) {
                            Actor actor = new UserActor();
                            actor.setId(MapUtils.getString(pary, "USER_ID"));
                            actor.setName(sysUserLoader.getSysUserById(MapUtils.getString(pary, "USER_ID")).getName());
                            actor.setType("user");
                            actorlist.add(actor);

                        }
                    }
                } else {//不是党员的情况
                    int userPost = 0;
                    List<Map<String, Object>> partyOrgslist = jdbcTemplate.queryForList("select id from PARTY_ORGANIZATION  where attribute_02 like '" + userDeptId + "' and attribute_01='2'");

                    if (partyOrgslist.size() > 0) {

                        for (Map<String, Object> partyMap : partyOrgslist) {
                            String partyId = MapUtils.getString(partyMap, "ID");//党组织id
                            List<Map<String, Object>> partyOrglist = jdbcTemplate.queryForList("select * from party_organ_member where party_id ='" + partyId + "' and user_post='0'");
                            for (Map<String, Object> pary : partyOrglist) {
                                Actor actor = new UserActor();
                                actor.setId(MapUtils.getString(pary, "USER_ID"));
                                actor.setName(sysUserLoader.getSysUserById(MapUtils.getString(pary, "USER_ID")).getName());
                                actor.setType("user");
                                actorlist.add(actor);

                            }


                        }


                    }
                }


			/*
				String sql =" select * from party_organ_member where party_id =(select id from PARTY_ORGANIZATION where id =(select parent_id from PARTY_ORGANIZATION where attribute_02 like '"+userDeptId+"')) and user_post = '0'";
						List<Map<String, Object>> list = jdbcTemplate
						.queryForList(sql);
				if(list!=null&&list.size()!=0){
							for(Map<String,Object> dto : list){
								Actor actor = new UserActor();
								actor.setId((String)dto.get("USER_ID"));
								actor.setName(sysUserLoader.getSysUserById((String)dto.get("USER_ID")).getName());
								actor.setType("user");
								actorlist.add(actor);
							}

						}
					*/
            }

        } catch (Exception ex) {
            ex.getMessage();
        }
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;
    }

    ///路由条件
    @Override
    public boolean evaluate(OpenExecution arg0) {
        String loginUserId = (String) arg0.getProcessInstance().getVariable("avicit_bpm_start_id");
        SysUser user = sysUserLoader.getSysUserById(loginUserId);
        String userDeptId = user.getDeptId();
        boolean flag = false;//默认不可达
        PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
        Map<String, String> partyDTO = partyMemberService.getPartyMemberOrganizationByUserId(user.getId());//拟稿人所在党支部
        if (partyDTO != null) {//是党员的情况，表示存在党支部信息
            String partyId = MapUtils.getString(partyDTO, "PARTY_ID");
            //需要查询党总支
            PartyOrganizationService partyOrganizationService = SpringFactory.getBean(PartyOrganizationService.class);
            PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.findParentPartyOrganizationById(partyId);
            if (partyOrganizationDTO != null) {//说明存在 党总支
                flag = true;
            }
        } else {//不是党员的情况

            List<Map<String, Object>> partyOrgslist = jdbcTemplate.queryForList("select id from PARTY_ORGANIZATION  where attribute_02 like '" + userDeptId + "' and attribute_01='2' ");

            if (partyOrgslist.size() > 0) {

                flag = true;

            }
        }
        return flag;

    }

    //行数据维护
    public String getSql(Map<String, String> paramMap) {
        String tableName = paramMap.get("tableName"); // 配置的表名
        String loginUserId = paramMap.get("loginUserId"); // 登录人ID
//		String loginOrgId = paramMap.get("loginOrgId"); // 登录组织ID
//		String loginDeptId = paramMap.get("loginDeptId"); // 登录人部门ID
        //党支部权限查询
        String paListId = "";
        //查找用户是否存在于组织结构表的子表中
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_ORGAN_MEMBER t where t.user_id = '" + loginUserId + "'");
        if (list != null && list.size() != 0) {
            paListId = "PARTY_ID in (";
            //如果存在则去组织结构表寻找他所关联的组织
            for (int i = 0; i < list.size(); i++) {
                Map<String, Object> mapList = list.get(i);
                String partyId = (String) mapList.get("party_id");
                if (i != 0) {
                    //如果i不等于0则已经走过一次循环了 需要增加一个，
                    paListId += ",";
                }
                paListId += "'";
                paListId += partyId;
                paListId += "'";
                paListId = sqlFunction(partyId, paListId);
            }
        } else {
            //如果表名为党员表 则将查询字段改为attribute01
            if (tableName.equals("PARTY_MEMBER")) {
                paListId = "attribute_01 in (";
            } else if (tableName.equals("PARTY_ACTIVIST")) {
                //如果表名为积极分子 则将查询字段改为attribute08
                paListId = "attribute_08 in (";
            } else {
                List<Map<String, Object>> list3 = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER t where t.user_id = '" + loginUserId + "'");
                //20241113 modby wenc 添加管理员过滤条件，展示所有数据
                if(list3 != null && list3.size() != 0){
                    //非党员与积极分子功能查询通过PARTY_ID查询
                    paListId = "PARTY_ID in (";
                    for (int i = 0; i < list3.size(); i++) {
                        Map<String, Object> mapList = list3.get(i);
                        String partyId = (String) mapList.get("party_id");
                        if (i != 0) {
                            //如果i不等于0则已经走过一次循环了 需要增加一个，
                            paListId += ",";
                        }
                        paListId += "'";
                        //这里放开的话 会导致能看见当前支部所有信息
                        //paListId += partyId;
                        paListId += "'";
                        paListId = sqlFunction(partyId, paListId);
                    }
                    paListId += ")";
                }else{
                    if("1".equals(loginUserId) || "8a58a6b44c275dce014c275dced90000".equals(loginUserId)
                            || "8a58ab4d4c25bd67014c25bdc1980001".equals(loginUserId)
                            || "8a58ab4d4c25bd67014c25beb8780002".equals(loginUserId)){
                        paListId = " ( 1 =1 )";
                    }
                }
                //20241113 endby wenc 添加管理员过滤条件，展示所有数据
                return paListId;
            }
            //如果不存在就去党员表查询 当来到党员表去查询时说明党组织结构里并没有维护这个党员 而只有小组才不会维护 所以认定为要查询该党员小组下的党员
            List<Map<String, Object>> list2 = jdbcTemplate.queryForList("select t.attribute_01,t.attribute_06 from PARTY_MEMBER t where t.user_id = '" + loginUserId + "'");
            if (list2 != null && list2.size() != 0) {
                if ("0".equals(list2.get(0).get("ATTRIBUTE_06"))) {
                    //判断党员是否为党小组长  如果是成员则不能查看全小组数据
                    paListId += "''";
                } else {
                    paListId += "'";
                    paListId += list2.get(0).get("ATTRIBUTE_01");
                    paListId += "'";
                }
            } else {
                paListId += ")";
            }

        }
        paListId += ")";


        return paListId;
    }

    //行数据维护New
    public String getSqlNew(Map<String, String> paramMap) {
        String tableName = paramMap.get("tableName"); // 配置的表名
        String loginUserId = paramMap.get("loginUserId"); // 登录人ID
//		String loginOrgId = paramMap.get("loginOrgId"); // 登录组织ID
//		String loginDeptId = paramMap.get("loginDeptId"); // 登录人部门ID
        //党支部权限查询
        String paListId = "";
        //查找用户是否存在于组织结构表的子表中
        List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT id from party_organization \n" +
                "where id in \n" +
                "(select \n" +
                "      SUBSTR(p2.tree_path,INSTR(p2.tree_path,'/',1,1)+1,\n" +
                "\t\t\t      INSTR(p2.tree_path || '/','/',INSTR(p2.tree_path,'/',1,1)+1)-INSTR(p2.tree_path,'/',1,1)-1)as fValue\n" +
                "\t\t\t\n" +
                "from party_organ_member p1 left join party_organization p2 on p2.id=p1.party_id    where p1.user_id ='" + loginUserId + "' and INSTR(p2.tree_path,'/')>0)");
        if (list != null && list.size() != 0) {
            paListId = "PARTY_ID in (";
            //如果存在则去组织结构表寻找他所关联的组织
            for (int i = 0; i < list.size(); i++) {
                Map<String, Object> mapList = list.get(i);
                String partyId = (String) mapList.get("id");
                if (i != 0) {
                    //如果i不等于0则已经走过一次循环了 需要增加一个，
                    paListId += ",";
                }
                paListId += "'";
                paListId += partyId;
                paListId += "'";
                paListId = sqlFunction(partyId, paListId);
            }
        } else {
            //如果表名为党员表 则将查询字段改为attribute01
            if (tableName.equals("PARTY_MEMBER")) {
                paListId = "attribute_01 in (";
            } else if (tableName.equals("PARTY_ACTIVIST")) {
                //如果表名为积极分子 则将查询字段改为attribute08
                paListId = "attribute_08 in (";
            } else {
                //非党员与积极分子功能查询通过PARTY_ID查询
                paListId = "PARTY_ID in (";
                List<Map<String, Object>> list3 = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER t where t.user_id = '" + loginUserId + "'");
                for (int i = 0; i < list3.size(); i++) {
                    Map<String, Object> mapList = list3.get(i);
                    String partyId = (String) mapList.get("party_id");
                    if (i != 0) {
                        //如果i不等于0则已经走过一次循环了 需要增加一个，
                        paListId += ",";
                    }
                    paListId += "'";
                    //这里放开的话 会导致能看见当前支部所有信息
                    //paListId += partyId;
                    paListId += "'";
                    paListId = sqlFunction(partyId, paListId);
                }
                paListId += ")";
                return paListId;
            }
            //如果不存在就去党员表查询 当来到党员表去查询时说明党组织结构里并没有维护这个党员 而只有小组才不会维护 所以认定为要查询该党员小组下的党员
            List<Map<String, Object>> list2 = jdbcTemplate.queryForList("select t.attribute_01,t.attribute_06 from PARTY_MEMBER t where t.user_id = '" + loginUserId + "'");
            if (list2 != null && list2.size() != 0) {
                if ("0".equals(list2.get(0).get("ATTRIBUTE_06"))) {
                    //判断党员是否为党小组长  如果是成员则不能查看全小组数据
                    paListId += "''";
                } else {
                    paListId += "'";
                    paListId += list2.get(0).get("ATTRIBUTE_01");
                    paListId += "'";
                }
            } else {
                paListId += ")";
            }

        }
        paListId += ")";


        return paListId;
    }

    public String sqlFunction(String partyId, String paListId) {
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.id from PARTY_ORGANIZATION t where t.parent_id = '" + partyId + "'");
        if (list != null && list.size() != 0) {
            for (int i = 0; i < list.size(); i++) {
                Map<String, Object> mapList = list.get(i);
                String id = (String) mapList.get("ID");
                paListId += ",'" + id + "'";
                sqlFunction(id, paListId);
            }
        }
        return paListId;
    }
}
