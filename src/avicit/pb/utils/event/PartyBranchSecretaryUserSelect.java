package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.*;

// 百团大战-党支部书记
public class PartyBranchSecretaryUserSelect extends UserSelect implements LoaderConstant {
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    ProcessEngine processEngine = SpringHelper.getBean(ProcessEngine.class);

    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {
        Set<String> set = new HashSet<String>();
        set.add("avicit_bpm_start_id");
        Map<String, Object> map = processEngine.getExecutionService().getVariables(executionId, set, processInstanceId);
        String userId = (String) map.get("avicit_bpm_start_id");
        SysUser user = sysUserLoader.getSysUserById(userId);
        String userDeptId = user.getDeptId();
        List actorlist = new ArrayList();
        if (StringUtils.isNotEmpty(userId)) {
            List<Map<String, Object>> partyOrgslist = jdbcTemplate.queryForList("select id from PARTY_ORGANIZATION  where attribute_02 like '" + userDeptId + "' and attribute_01 in ('1','2')");
            if (partyOrgslist.size() > 0) {
                for (Map<String, Object> partyMap : partyOrgslist) {
                    String partyId = MapUtils.getString(partyMap, "ID");//党组织id
                    List<Map<String, Object>> partyOrglist = jdbcTemplate.queryForList("select * from party_organ_member where party_id ='" + partyId + "' and user_post in ('0','1','2')");
                    List<Map<String, Object>> list = jdbcTemplate.queryForList("select USER_ID from party_organ_member where PARTY_ID in (select PARTY_ID from party_organ_member  where USER_ID = '" + partyOrglist.get(0).get("USER_ID") + "') and (USER_POST = '1'or USER_POST = '3' )");
                    if (list.size() > 0) {
                        // 有总支
                        Map<String, Object> map1 = new HashMap<>();
                        map1 = list.get(0);
                        partyOrglist.add(map1);
                    }
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
        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;

    }


}
