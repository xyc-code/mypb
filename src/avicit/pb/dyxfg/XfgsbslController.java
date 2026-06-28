package avicit.pb.dyxfg;

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.pvm.internal.cmd.S;
import avicit.platform6.core.spring.SpringMVCFactory;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;


/**
 * 统计先锋岗上报数量
 */
@Controller
@Scope("prototype")
@RequestMapping("/avicit/pb/dyxfg/xfgsbslController")
public class XfgsbslController implements LoaderConstant{
    private static final Logger LOGGER = LoggerFactory.getLogger(XfgsbslController.class);


    /**
     *
     * @param request
     * @param reponse
     * @return
     */
    @RequestMapping(value = "/getxfgsbsl")
    public ModelAndView gettodata(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String partyId=ServletRequestUtils.getStringParameter(request,"partyId","");

        PartyOrganizationService partyOrganizationService=SpringMVCFactory.getBean(PartyOrganizationService.class);
        List<PartyOrganizationDTO>  childList=partyOrganizationService.findChildrenPartyOrganizationById(partyId);//获取下属信息

        StringBuffer partyIds=new StringBuffer();
        partyIds.append("'").append(partyId).append("'").append(",");
        for(PartyOrganizationDTO dto:childList){
            partyIds.append("'").append(dto.getId()).append("'").append(",");
        }
        partyIds.delete(partyIds.length()-1,partyIds.length());
        String year=ServletRequestUtils.getStringParameter(request,"year","");

        JdbcTemplate jdbcTemplate=SpringMVCFactory.getBean(JdbcTemplate.class);
        List<Map<String,Object>> fqlist=jdbcTemplate.queryForList("select * from dyn_xfg_fq t where t.fq_pxsj='"+year+"'");

        for(Map<String,Object> map:fqlist){
            String id=MapUtils.getString(map,"ID");
            List<Map<String,Object>> sqSublist=jdbcTemplate.queryForList("select * from dyn_xfg_chird t  where t.attr3='"+id+"' and t.DATA_1 in ("+partyIds+") and t.GW_NAME <>'8' ");
            mav.addObject("num",sqSublist.size());
        }


        return mav;
    }

    }
