package avicit.weekly.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import avicit.platform6.core.spring.SpringFactory;
import avicit.weekly.dao.WeeklyDao;
import avicit.weekly.dto.WeeklyDTO;
@Controller
@Scope("prototype")
@RequestMapping("avicit/weekly/weeklyXController")
public class WeeklyXController {
	@Autowired
	private WeeklyDao weeklyDao;
	private SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 设置日期格式
	@RequestMapping("/weeklyRelordPage")
	public ModelAndView weeklyRelordPage(String xian, HttpServletRequest request){
		ModelAndView mvc = new ModelAndView();
		JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
		try {
			List<Map<String,Object>> dynMeekly =  jdbc.queryForList("select creation_date as cd from dyn_meekly where is_son = '1' order by creation_date desc ");
			String newDate = df.format(new Date());
			String ldb = df.format(dynMeekly.get(0).get("CD"));
			List<Map<String,Object>> list = jdbc.queryForList("SELECT DISTINCT (id), WORK_CLASS， DATE_EVOLVE, TOP_DATE_EVOLVE, COMPLETION_NODE, IS_KEYNO, WORK_TASKS, PERSON_LIABLE, IS_COMPLETION, CREATION_DATE, CONTENT FROM DYN_SON_WEEKLY where CREATION_DATE >= TO_DATE('"+ldb+"', 'yyyy-MM-dd HH24:mi:ss') and CREATION_DATE <=TO_DATE('"+newDate+"', 'yyyy-MM-dd HH24:mi:ss') order by WORK_CLASS ");
			
			for (int i = 0; i < list.size(); i++) {

				Map<String,Object> ww = list.get(i);
				if (list.get(i).get("PERSON_LIABLE") != null) {
					String[] ss = ((String)ww.get("PERSON_LIABLE")).split(";");
					String ee = "";
					for (int j = 0; j < ss.length; j++) {
						ee += weeklyDao.getname(ss[j]);
						ee += ",";
					}
					ww.put("PERSON_LIABLEName",ee);
				}
			}
			mvc.addObject("row", list);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}
}
