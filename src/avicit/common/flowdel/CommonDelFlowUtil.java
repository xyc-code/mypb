package avicit.common.flowdel;


import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;


/**
 * 删除流程通用类
 */

@Controller
@Scope("prototype")
@RequestMapping("avicit/common/flowdel/commonDelFlowUtil")
public class CommonDelFlowUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(CommonDelFlowUtil.class);

    @Autowired
    public JdbcTemplate jdbcTemplate;
    @Autowired
    public BpmOperateService bpmOperateService;


    /**
     * 通用删除流程实例方法
     * @param request
     * @return
     */
    @RequestMapping(value ="/toDelFlow",method = RequestMethod.POST)
    public ModelAndView toDelFlow(@RequestBody String[] ids, HttpServletRequest request) {
        ModelAndView mav=new ModelAndView();
        try {
            String   tableName = ServletRequestUtils.getStringParameter(request,"tableName");

            for(String formId:ids){
                jdbcTemplate.execute(String.format("delete %s where id='%s'",tableName,formId));

                //同时删除流程实例
                BpmOperateService bpmOperateService= SpringFactory.getBean(BpmOperateService.class);
                String flowInstanceId = bpmOperateService.getInstanceIdByFormid(formId);
                if(flowInstanceId != null && !"".equals(flowInstanceId)){
                    bpmOperateService.deleteProcessInstanceCascade(flowInstanceId);
                }
            }


            mav.addObject("flag", PlatformConstant.OpResult.success);
        } catch (Exception e) {
            LOGGER.error("通用类删除流程实例失败：{}",e.getMessage());
            mav.addObject("flag", PlatformConstant.OpResult.failure);

        }

        return mav;


    }


}
