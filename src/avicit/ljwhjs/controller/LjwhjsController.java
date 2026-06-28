package avicit.ljwhjs.controller;


import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/ljwhjs/ljwhjsController")
public class LjwhjsController {


    private static final Logger LOGGER = LoggerFactory.getLogger(LjwhjsController.class);


    /**
     * 列表页面分页查询
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/checkedD1AndD2")
    @ResponseBody
    public Map<String, Object> togetDaCareMedicineItemByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String,Object> map=new HashMap<>();
        String firstDate = ServletRequestUtils.getStringParameter(request, "firstDate", "");
        String lastDate = ServletRequestUtils.getStringParameter(request, "lastDate", "");
        String formId = ServletRequestUtils.getStringParameter(request, "formId", "");
        //字段查询条件
        try {
            JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
            StringBuffer sql=new StringBuffer();

            sql.append("select * from (select * from DYN_LJWHXJS");
            sql.append(" where ");
            sql.append(" SY_DATE_S >= to_date('"+firstDate+"', 'yyyy-MM-dd hh24:mi') ");
            sql.append(" and SY_DATE_S <= to_date('"+lastDate+"', 'yyyy-MM-dd hh24:mi')");
            sql.append(" or  ");
            sql.append(" (SY_DATE_E >= to_date('"+firstDate+"', 'yyyy-MM-dd hh24:mi')  ");
            sql.append(" and SY_DATE_E <= to_date('"+lastDate+"', 'yyyy-MM-dd hh24:mi'))");
            sql.append(" or  ");
            sql.append("  SY_DATE_S < to_date('"+firstDate+"', 'yyyy-MM-dd hh24:mi') ");
            sql.append(" and  SY_DATE_E > to_date('"+lastDate+"', 'yyyy-MM-dd hh24:mi'))");

            if(!"".equals(formId)){
                sql.append(" where id !='"+formId+"'");
            }


            List<Map<String, Object>> list= jdbcTemplate.queryForList(sql.toString());
            for(Map<String, Object> tempMap:list){
                String id=MapUtils.getString(tempMap,"ID");
            }
            LOGGER.info("{}",sql);
            map.put("num",list.size());

        }catch (Exception e){
            map.put("num","0");
            e.printStackTrace();
        }
        LOGGER.info("成功获取checkedD1AndD2数据");
        return map;
    }
}
