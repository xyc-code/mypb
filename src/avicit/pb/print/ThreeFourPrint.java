package avicit.pb.print;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import avicit.platform6.core.spring.SpringFactory;

@Controller
@RequestMapping("avicit/pb/print/ThreeFourPrint")
public class ThreeFourPrint {
	//进页面查询主表数数据
		@RequestMapping("/view")
		public ModelAndView returnView(String id) {
			ModelAndView mvc = new ModelAndView();
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
			Map<String, Object>  dto = jdbc.queryForMap("select * from dyn_three_four where id = '"+id+"'");
			if(dto.get("MEET_DATE")!=null){
				dto.put("MEET_DATE", dateFormat.format(dto.get("MEET_DATE")));
			}		
			mvc.addObject("id",id);
			mvc.addObject("map",dto);
			mvc.setViewName("avicit/pb/print/threeFourPrint/threeFourPrint");
			return mvc;
		}
}
