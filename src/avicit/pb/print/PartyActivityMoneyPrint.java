package avicit.pb.print;

import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;

@Controller
@RequestMapping("avicit/pb/print/PartyActivityMoneyPrint")
public class PartyActivityMoneyPrint {
	//进页面查询主表数数据
	@RequestMapping("/view")
	public ModelAndView returnView(String id, String entryid) {
		ModelAndView mvc = new ModelAndView();
		JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
		List<Map<String, Object>> map = jdbc.queryForList("select * from DYN_PARTY_ACTIVITY where id = '" + id + "'");
		if (map.size() != 0) {
			String[] types = ((String) map.get(0).get("SEL_TYPE")).split(",");
			String type = "";
			for (String item : types) {
				switch (item) {
				case "1":
					type += "学习资料;";
					break;
				case "2":
					type += "场地费;";
					break;
				case "3":
					type += "工本费;";
					break;
				case "4":
					type += "设备费用;";
					break;
				case "5":
					type += "党徽、党旗;";
					break;
				case "6":
					type += "门票、讲解;";
					break;
				case "7":
					type += "困难党员;";
					break;
				case "8":
					type += "表彰;";
					break;
				}
			}
			map.get(0).put("SEL_TYPE",type);
			mvc.addObject("dto", map.get(0));
		}
		mvc.addObject("id",id);
		mvc.addObject("entryid",entryid);
		mvc.setViewName("avicit/pb/print/PartyActivityMoneyPrint");
		return mvc;
	}
//	查询多个子表以及流程意见
	@RequestMapping("/list")
	@ResponseBody
	public ModelAndView getList(String id, String entryid){
		ModelAndView mvc = new ModelAndView();
		JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
		List<Map<String, Object>> DYN_PA_XXZL1 = jdbc.queryForList("select * from DYN_PA_XXZL1 where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_CD = jdbc.queryForList("select * from DYN_PA_CD where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_GB = jdbc.queryForList("select * from DYN_PA_GB where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_SB = jdbc.queryForList("select * from DYN_PA_SB where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_DHDQ = jdbc.queryForList("select * from DYN_PA_DHDQ where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_MPJJ = jdbc.queryForList("select * from DYN_PA_MPJJ where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_KNDY = jdbc.queryForList("select * from DYN_PA_KNDY where  fk_sub_col_id = '" + id + "'");
		List<Map<String, Object>> DYN_PA_BZ = jdbc.queryForList("select * from DYN_PA_BZ where  fk_sub_col_id = '" + id + "'");
		int Hash = ComUtil.getHashInt(entryid, 8);
		String  HashId = "bpm_track_ext"+Hash;
		List<Map<String, Object>> task3 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task3'");
		List<Map<String, Object>> task4 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task4'");
		List<Map<String, Object>> task5 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task5'");
		List<Map<String, Object>> task2 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task2'");
		List<Map<String, Object>> task6 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task6'");
		List<Map<String, Object>> task7 =jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from "+HashId+" tt where  tt.hproci_ = '"+entryid+"' and tt.current_acti_name_ = 'task7'");
		mvc.addObject("task3",task3);
		mvc.addObject("task4",task4);
		mvc.addObject("task5",task5);
		mvc.addObject("task2",task2);
		mvc.addObject("task6",task6);
		mvc.addObject("task7",task7);
		mvc.addObject("DYN_PA_XXZL1",DYN_PA_XXZL1);
		mvc.addObject("DYN_PA_CD",DYN_PA_CD);
		mvc.addObject("DYN_PA_GB",DYN_PA_GB);
		mvc.addObject("DYN_PA_SB",DYN_PA_SB);
		mvc.addObject("DYN_PA_DHDQ",DYN_PA_DHDQ);
		mvc.addObject("DYN_PA_MPJJ",DYN_PA_MPJJ);
		mvc.addObject("DYN_PA_KNDY",DYN_PA_KNDY);
		mvc.addObject("DYN_PA_BZ",DYN_PA_BZ);
		return mvc;
	}


}
