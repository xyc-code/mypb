package avicit.pb.utils.event;

import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.CollectionUtils;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class PartyDYXJDH2RouteCondition implements RouteConditionInterface {
    /**
     *
     */
    //private static final long serialVersionUID = 1L;
    BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
    PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);

    @Override
    public boolean evaluate(OpenExecution execution) {
        //申请人所在党支部名包含（‘支部’） 则true;
        String loginUserId = (String) execution.getProcessInstance().getVariable("avicit_bpm_start_id");
        List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT party_name from party_organization \n" +
                "where id in \n" +
                "(select \n" +
                "      SUBSTR(p2.tree_path,INSTR(p2.tree_path,'/',1,1)+1,\n" +
                "\t\t\t      INSTR(p2.tree_path || '/','/',INSTR(p2.tree_path,'/',1,1)+1)-INSTR(p2.tree_path,'/',1,1)-1)as fValue\n" +
                "\t\t\t\n" +
                "from party_organ_member p1 left join party_organization p2 on p2.id=p1.party_id    where p1.user_id ='" + loginUserId + "' and INSTR(p2.tree_path,'/')>0)");
        if (CollectionUtils.isEmpty(list)) {
            return false;
        }
        for (Map<String, Object> map : list) {
            String partyName = map.get("party_name").toString();
            if (partyName.contains("支部")) {
                return true;
            }
        }
        return false;
    }

}
