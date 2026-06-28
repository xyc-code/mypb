package avicit.pb.print;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("avicit/pb/print/TradeUnionMoneyPrint")
public class TradeUnionMoneyPrint {
    //进页面查询主表数数据
    @RequestMapping("/view")
    public ModelAndView returnView(String id, String entryid) {
        ModelAndView mvc = new ModelAndView();
        JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
        List<Map<String, Object>> map = jdbc.queryForList("select * from DYN_GUILD_ACTIVITY where id = '" + id + "'");
        if (map.size() != 0) {
            String[] types = ((String) map.get(0).get("SEL_TYPE")).split(",");
            String type = "";
            for (String item : types) {
                switch (item) {
                    case "1":
                        type += "文体活动支出;";
                        break;
                    case "2":
                        type += "职工慰问支出;";
                        break;
                    case "3":
                        type += "劳模工作室建设支出;";
                        break;
                    case "4":
                        type += "劳动竞赛支出;";
                        break;
                    case "5":
                        type += "春、秋游活动支出;";
                        break;
                    case "6":
                        type += "观影活动支出;";
                        break;
                    case "7":
                        type += "职工小家建设支出;";
                        break;
                    case "8":
                        type += "其他支出;";
                        break;
                }
            }
            map.get(0).put("SEL_TYPE",type);
            mvc.addObject("dto", map.get(0));
        }
        mvc.addObject("id",id);
        mvc.addObject("entryid",entryid);
        mvc.setViewName("avicit/pb/print/TradeUnionMoney");
        return mvc;
    }

    //	查询多个子表以及流程意见
    @RequestMapping("/list")
    @ResponseBody
    public ModelAndView getList(String id, String entryid) {
        ModelAndView mvc = new ModelAndView();
        JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);
        List<Map<String, Object>> DYN_GUILD_XXZL = jdbc.queryForList("select * from DYN_GUILD_XXZL where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_ZGWW2 = jdbc.queryForList("select * from DYN_ZGWW2 where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_GB = jdbc.queryForList("select * from DYN_GUILD_GB where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_SB = jdbc.queryForList("select * from DYN_GUILD_SB where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_DHDQ = jdbc.queryForList("select * from DYN_GUILD_DHDQ where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_MPJJ = jdbc.queryForList("select * from DYN_GUILD_MPJJ where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_KNDY = jdbc.queryForList("select * from DYN_GUILD_KNDY where  fk_sub_col_id = '" + id + "'");
        List<Map<String, Object>> DYN_GUILD_BZ = jdbc.queryForList("select * from DYN_GUILD_BZ where  fk_sub_col_id = '" + id + "'");
        int Hash = ComUtil.getHashInt(entryid, 8);
        String HashId = "bpm_track_ext" + Hash;
        List<Map<String, Object>> task1 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task1'");
        List<Map<String, Object>> task2 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task2'");
        List<Map<String, Object>> task3 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task3'");
        List<Map<String, Object>> task4 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task4'");
        List<Map<String, Object>> task5 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task5'");
        List<Map<String, Object>> task7 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task7'");
        List<Map<String, Object>> task6 = jdbc.queryForList(" select tt.end_,tt.OP_UNAME_,tt.MESSAGE_ from " + HashId + " tt where  tt.hproci_ = '" + entryid + "' and tt.current_acti_name_ = 'task6'");
        mvc.addObject("task3", task3);
        mvc.addObject("task4", task4);
        mvc.addObject("task5", task5);
        mvc.addObject("task2", task2);
        mvc.addObject("task1", task1);
        mvc.addObject("task6", task6);
        mvc.addObject("task7", task7);
        mvc.addObject("DYN_GUILD_XXZL", DYN_GUILD_XXZL);
        mvc.addObject("DYN_ZGWW2", DYN_ZGWW2);
        mvc.addObject("DYN_GUILD_GB", DYN_GUILD_GB);
        mvc.addObject("DYN_GUILD_SB", DYN_GUILD_SB);
        mvc.addObject("DYN_GUILD_DHDQ", DYN_GUILD_DHDQ);
        mvc.addObject("DYN_GUILD_MPJJ", DYN_GUILD_MPJJ);
        mvc.addObject("DYN_GUILD_KNDY", DYN_GUILD_KNDY);
        mvc.addObject("DYN_GUILD_BZ", DYN_GUILD_BZ);
        return mvc;
    }
}
