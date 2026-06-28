package avicit.jw.utils.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Scope("prototype")
@RequestMapping("avicit/jwutils/jwutilsController")
public class JwUtilsController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(JwUtilsController.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@RequestMapping(value = "getYearWorkStatus")
    @ResponseBody
    public Map<String, Object> getDyAchievements(HttpServletRequest request) {
		Map<String, Object> rs = new HashMap<String, Object>();
		String histId = ServletRequestUtils.getStringParameter(request, "histId", "");
		String currentYear = ServletRequestUtils.getStringParameter(request, "currentYear", "");
		Map<String, Map<String, String>> result = new HashMap<String, Map<String, String>>();
		if("".equals(currentYear)){
			Calendar calendar = Calendar.getInstance();
			currentYear = calendar.get(Calendar.YEAR) + "";
		}
		String sql = "SELECT T2.ID,T2.DATA_ORDER,T2.WORK_TYPE,T2.MAIN_CONTENT,T2.CONTENT_LIST,T2.REMARK,T.DATE_CHECK,T.WORK_STATUS,"
				+ "TV.LOOKUP_NAME,T.WORK_JD FROM DYN_LJWHJS_WORK_SUB T LEFT JOIN DYN_LJWHJS_WORK_HIST T2 ON T.HIST_ID = T2.ID "
				+ "LEFT JOIN SYS_LOOKUP_V TV ON T.WORK_STATUS = TV.LOOKUP_CODE AND TV.LOOKUP_TYPE = 'JW_FIISH_STSTUS' WHERE "
				+ "T.HIST_ID in (" + histId +") AND T.WORK_YEAR = '" + currentYear + "' ORDER BY T.CREATION_DATE ASC";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			for (Map<String, Object> maps : list) {
				Map<String, String> temp = new HashMap<String, String>();
				String id = maps.get("ID").toString();
				String quarter = maps.get("WORK_JD").toString();
				String dataCheck = maps.get("DATE_CHECK").toString().substring(0, 10);
				String workStatus = maps.get("WORK_STATUS").toString();
				String workStatusName = maps.get("LOOKUP_NAME").toString();
				if(!result.containsKey(id)){//新增
					temp.put("ID", id);
					temp.put("IN_YEAR", currentYear);
					temp.put("DATA_ORDER", maps.get("DATA_ORDER").toString());
					temp.put("WORK_TYPE", maps.get("WORK_TYPE").toString());
					temp.put("MAIN_CONTENT", maps.get("MAIN_CONTENT").toString());
					temp.put("CONTENT_LIST", maps.get("CONTENT_LIST").toString());
					temp.put("REMARK", maps.get("REMARK") == null ? "" : maps.get("REMARK").toString());
					temp.put("ONE_QUARTER_DATA", "");
					temp.put("ONE_QUARTER_STATUS", "");
					temp.put("ONE_QUARTER_STATUSName", "");
					temp.put("TWO_QUARTER_DATA", "");
					temp.put("TWO_QUARTER_STATUS", "");
					temp.put("TWO_QUARTER_STATUSName", "");
					temp.put("THREE_QUARTER_DATA", "");
					temp.put("THREE_QUARTER_STATUS", "");
					temp.put("THREE_QUARTER_STATUSName", "");
					temp.put("FOUR_QUARTER_DATA", "");
					temp.put("FOUR_QUARTER_STATUS", "");
					temp.put("FOUR_QUARTER_STATUSName", "");
					
					if("1".equals(quarter)){
						temp.put("ONE_QUARTER_DATA", dataCheck);
						temp.put("ONE_QUARTER_STATUS", workStatus);
						temp.put("ONE_QUARTER_STATUSName", workStatusName);
					}else if("2".equals(quarter)){
						temp.put("TWO_QUARTER_DATA", dataCheck);
						temp.put("TWO_QUARTER_STATUS", workStatus);
						temp.put("TWO_QUARTER_STATUSName", workStatusName);
					}else if("3".equals(quarter)){
						temp.put("THREE_QUARTER_DATA", dataCheck);
						temp.put("THREE_QUARTER_STATUS", workStatus);
						temp.put("THREE_QUARTER_STATUSName", workStatusName);
					}else if("4".equals(quarter)){
						temp.put("FOUR_QUARTER_DATA", dataCheck);
						temp.put("FOUR_QUARTER_STATUS", workStatus);
						temp.put("FOUR_QUARTER_STATUSName", workStatusName);
					}
				}else{
					temp = result.get(id);
					if("1".equals(quarter)){
						temp.put("ONE_QUARTER_DATA", dataCheck);
						temp.put("ONE_QUARTER_STATUS", workStatus);
						temp.put("ONE_QUARTER_STATUSName", workStatusName);
					}else if("2".equals(quarter)){
						temp.put("TWO_QUARTER_DATA", dataCheck);
						temp.put("TWO_QUARTER_STATUS", workStatus);
						temp.put("TWO_QUARTER_STATUSName", workStatusName);
					}else if("3".equals(quarter)){
						temp.put("THREE_QUARTER_DATA", dataCheck);
						temp.put("THREE_QUARTER_STATUS", workStatus);
						temp.put("THREE_QUARTER_STATUSName", workStatusName);
					}else if("4".equals(quarter)){
						temp.put("FOUR_QUARTER_DATA", dataCheck);
						temp.put("FOUR_QUARTER_STATUS", workStatus);
						temp.put("FOUR_QUARTER_STATUSName", workStatusName);
					}
				}
				result.put(id, temp);
			}
			List<Map<String, String>> ls = new ArrayList<Map<String, String>>();
			for (String r : result.keySet()) {
				ls.add(result.get(r));
			}
			rs.put("list", ls);
			LOGGER.info("success get data");
		}
		return rs;
	}

}
