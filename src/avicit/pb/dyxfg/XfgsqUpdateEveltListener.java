package avicit.pb.dyxfg;

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;


/**
 * 先锋岗申请流程 将先锋岗发起id 存入子表中，为统计做铺垫,同时存入党组织id，党组织排序字段
 */
public class XfgsqUpdateEveltListener  implements EventListener {
    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {
        String formId=(String)eventListenerExecution.getVariable("ID");

        if(StringUtils.isEmpty(formId)){
            formId=(String)eventListenerExecution.getVariable("id");
        }

        BpmsControlUtils bpmsControlUtils= SpringFactory.getBean(BpmsControlUtils.class);

        TableData td=new TableData();
        td.setTableName("DYN_PARTY_XFG");
        td.setPrimaryKeyValue(formId);
        Map<String,Object> map=bpmsControlUtils.getData(td);
        if(map!=null){
            String fqId=MapUtils.getString(map,"FK_SUB_QF_ID");//先锋岗发起id
            String partyId=MapUtils.getString(map,"PARTY_ID");//党组织id
            String sqId=MapUtils.getString(map,"ID");//先锋岗申请id

            PartyOrganizationService  partyOrganizationService = SpringMVCFactory.getBean(PartyOrganizationService.class);
            PartyOrganizationDTO partyOrganizationDTOpart=partyOrganizationService.queryPartyOrganizationByPrimaryKey(partyId);
            if(partyOrganizationDTOpart!=null){
                Long sort=partyOrganizationDTOpart.getTreeSort();//得到党组织排序字段
                JdbcTemplate jdbcTemplate =SpringFactory.getBean(JdbcTemplate.class);
                List<Map<String,Object>> list=jdbcTemplate.queryForList("select * from DYN_XFG_CHIRD t  where t.FK_SUB_ID ='"+sqId+"'");

                for(Map<String,Object> dto:list){
                    String subPkId=MapUtils.getString(dto,"ID");

                    jdbcTemplate.execute("update DYN_XFG_CHIRD t set t.ATTR3='"+fqId+"' , t.ATTR4='"+sort+"', t.DATA_1='"+partyId+"'  where t.id='"+subPkId+"'");

                }
            }

        }



    }
}
