package avicit.tu.fixedassets.dynfixedassetsly.event;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;

/**
 * 更新入账日期
 */
public class UpdateDynFixedAssetsLyInsertDateEventListener implements EventListener{

	private static final long serialVersionUID = 1L;

	@Override
	public void notify(EventListenerExecution eventListenerExecution) throws Exception {
		String formId = (String) eventListenerExecution.getVariable("id");

		JdbcTemplate jdbcTemplate = SpringFactory.getBean(JdbcTemplate.class);
		//更新折旧月份
		jdbcTemplate.execute("update dyn_fixed_assets_ly t set t.depre_date = sysdate where t.id = '" + formId + "'");
	}

}
