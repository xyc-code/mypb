package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
//-----------------------------------------------------------------------
public class PartyXFGSQRouteCondition implements RouteConditionInterface{

    /**
     *
     */
    //private static final long serialVersionUID = 1L;
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

    @Override
    public boolean evaluate(OpenExecution execution) {//去往总支路由条件
        String loginUserId = (String) execution.getProcessInstance().getVariable("avicit_bpm_start_id");
        String userId = jdbcTemplate.queryForObject("select user_id from Party_Organ_Member where party_id=(select t.party_id from PARTY_MEMBER  t where t.user_id = '"+loginUserId+"') and user_post='0' and rownum=1", String.class);
        List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER  t where t.user_id = '" + userId + "'");
        String partyId = "";
        if (list != null && list.size() > 0) {
            Map<String, Object> mapList = list.get(0);
            partyId = (String) mapList.get("party_id");

            if (StringUtils.isNotEmpty(partyId)) {
                List<Map<String, Object>> list_tree_level = jdbcTemplate.queryForList(
                        "select t.tree_level from PARTY_ORGANIZATION t where t.id = '" + partyId + "' ");
                BigDecimal treeLevelBigDecimal;
                if (list_tree_level != null && list_tree_level.size() > 0) {
                    Map<String, Object> mapList_tree_level = list_tree_level.get(0);
                    treeLevelBigDecimal = (BigDecimal) mapList_tree_level.get("tree_level");
                    if (treeLevelBigDecimal != null) {
                        int treeLevel = treeLevelBigDecimal.intValue();
                        //大于等于三，有总支，送给总支的人审批
                        return treeLevel >= 3;
                    }
                }


            }
        }


        return false;
    }
}
