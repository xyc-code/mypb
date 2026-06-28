package avicit.pb.whzt.controller;


import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringMVCFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


@Controller
@Scope("prototype")
@RequestMapping("/avicit/pb/whzt/whztController")
public class WhztController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WhztController.class);




    @RequestMapping(value = "/operation/getPid3D", method = RequestMethod.POST)
    public ModelAndView togetPid3D(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        try {


            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            //基层单位文化载体 分组
            List<Map<String, Object>> resultList=jdbcTemplate.queryForList("select t.jcdw_zt_type as key,count(1) as value from DYN_WHZTXX t group by t.jcdw_zt_type");//

            mav.addObject("resultList", resultList);
            mav.addObject("flag", PlatformConstant.OpResult.success);
        } catch (Exception ex) {
            mav.addObject("flag", PlatformConstant.OpResult.failure);
            return mav;
        }
        return mav;
    }



}
