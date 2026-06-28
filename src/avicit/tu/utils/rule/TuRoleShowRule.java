package avicit.tu.utils.rule;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;

/**
 * 根据登录人查询其所在工会的数据
 * @author tanglimin2
 *
 */
public class TuRoleShowRule {
	public String getSql(Map<String, String> paramMap) {
		
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		String loginUserId = paramMap.get("loginUserId");// 登录人ID
		String tuId = "";
		//查询当前登录人是否有工会
		List<Map<String, Object>> userList = jdbcTemplate.queryForList("select t.attribute_03 from DYN_TRADE_UNION_MB t where t.user_id = '" + loginUserId + "'");
		if(userList != null && userList.size() > 0){
			//查询要展示工会ID
			String sql = "select T.LEAGUE_NAME from DYN_TRADE_UNION_ORGANIZA t where t.tree_path like concat (concat('%', "
					+ "(select t1.id from DYN_TRADE_UNION_ORGANIZA t1 where t1.league_name = '" + userList.get(0).get("ATTRIBUTE_03").toString() + "')),'%')";
			List<Map<String, Object>> tuList = jdbcTemplate.queryForList(sql);
			if(tuList != null && tuList.size() > 0){
				for (int i = 0; i < tuList.size(); i++) {
					tuId += "'" + tuList.get(i).get("LEAGUE_NAME").toString() + "',";
				}
				tuId = tuId.substring(0, tuId.length()-1);
			}
		}
		
		if(StringUtils.isNotEmpty(tuId)){
			String retSql  = " attribute_03 in (" + tuId + ")";
			return retSql; // 返回的SQL，格式为：列 比较符 值
		}else{
			return null;
		}
		
	}

}
