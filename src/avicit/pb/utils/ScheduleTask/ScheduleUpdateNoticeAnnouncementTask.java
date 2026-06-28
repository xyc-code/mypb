package avicit.pb.utils.ScheduleTask;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import avicit.pb.activist.activistachievement.service.ActivistAchievementService;
import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.quartz.IBusinessJob;

@Component
public class ScheduleUpdateNoticeAnnouncementTask implements IBusinessJob {

	@Autowired
	PartyMemberService partyMemberService;
	@Autowired
	PartyActivistService partyActivistService;

	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	private static final Logger logger = LoggerFactory.getLogger(ScheduleUpdateNoticeAnnouncementTask.class);

	public void task() throws Exception {
		try {
			
			Date today = DateUtil.getToday();
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(today);
			String todayYear = String.valueOf(calendar.get(Calendar.YEAR));
			String todayMonth = calendar.get(Calendar.MONTH) + 1 / 10 < 1 ?  "0" + calendar.get(Calendar.MONTH) + 1 : calendar.get(Calendar.MONTH) + 1 + "";
			String todayDay = (calendar.get(Calendar.DATE) - 1) / 10 < 1 ?  "0" + (calendar.get(Calendar.DATE) -1) : calendar.get(Calendar.DATE) -1  + "";
			today = DateUtil.parseDate(todayYear + "-" + todayMonth + "-" + todayDay + " 23:59:59" ,"yyyy-MM-dd HH:mm:ss");
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.id,t.release_date from DYN_PB_NOTICE t where t.is_yn_issue = '0' and t.overtime_yn = '0'");
			if (list != null && list.size() > 0) {
				for (Map<String, Object> map : list) {
					String id = (String) map.get("id");
					Date release_date = (Date) map.get("release_date");
					if (StringUtils.isNotEmpty(id) && release_date != null) {
						if (release_date.before(today)) {
							jdbcTemplate.update("update DYN_PB_NOTICE t set t.overtime_yn = '1' where  t.id = '" + id + "'");

						}
					}
				}
			}
		} catch (Exception e) {
			logger.error("ScheduleUpdateNoticeAnnouncementTask出错：", e);
			//throw new DaoException(e.getMessage(), e);
		}
	}

}
