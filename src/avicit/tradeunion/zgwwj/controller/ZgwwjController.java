package avicit.tradeunion.zgwwj.controller;


import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;


/*
* */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tradeunion/zgwwj/zgwwjcontroller")
public class ZgwwjController {



    /**
     * 职工慰问金点击打印按钮后更新打印状态为已打印

     * @param request 请求
     * @return ModelAndView
     */
    @RequestMapping(value = "/operation/updatePrint", method = RequestMethod.POST)
    public ModelAndView toSaveDaCareMedicine(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        String formId = ServletRequestUtils.getStringParameter(request, "id", "");
        try {

            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            jdbcTemplate.execute("update DYN_SALUTE_MONEY set PRINT_STATUS='Y' where ID='"+formId+"'");

            mav.addObject("flag", PlatformConstant.OpResult.success);
        } catch (Exception ex) {
            mav.addObject("flag", PlatformConstant.OpResult.failure);
            return mav;
        }
        return mav;

    }




}
