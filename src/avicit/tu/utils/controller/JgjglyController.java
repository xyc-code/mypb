package avicit.tu.utils.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Scope("prototype")
@RequestMapping("avicit/tuutils/jgjglyController")
public class JgjglyController {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	
	/**
     * 查询当前人员上年度绩效考核信息是否是B+及以上
     * @return Map
     * 	N：不符合，O：没查到
     */
    @RequestMapping(value = "queryUserKipLevel")
    @ResponseBody
    public Map<String,Object> toQueryUserKipLevel(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String loginName = ServletRequestUtils.getStringParameter(request, "loginName", "");
        String currentYear = ServletRequestUtils.getStringParameter(request, "currentYear", "");
        String kipLevel = ServletRequestUtils.getStringParameter(request, "kipLevel", "");
        String sql = "SELECT T.ACHIEVEMENTS_LEVEL FROM DYN_ACHIEVEMENTS T LEFT JOIN SYS_USER T1 ON T.DJ_USER_ID = T1.ID "
    			+ "WHERE T1.LOGIN_NAME = '" + loginName + "' AND T.ACHIEVEMENTS_PERIOD LIKE '%" + currentYear + "%'";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
        	String userKpiLevel = list.get(0).get("ACHIEVEMENTS_LEVEL") == null ? "" : list.get(0).get("ACHIEVEMENTS_LEVEL").toString();
        	if(kipLevel.contains(userKpiLevel)){
        		map.put("kipLevel", userKpiLevel);
        	}else{
        		map.put("kipLevel", "N");
        	}
        }else{
            map.put("kipLevel", "O");
        }
        return map;
    }

}
