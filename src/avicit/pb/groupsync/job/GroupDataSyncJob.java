package avicit.pb.groupsync.job;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import avicit.pb.groupsync.service.GroupFormalDataSyncService;
import avicit.platform6.core.quartz.IBusinessJob;

/**
 * Quartz 任务类。平台管理员将 Bean 配置为每天 02:00 执行，具体调度记录由平台 Quartz 管理。
 */
@Component
public class GroupDataSyncJob implements IBusinessJob {
    private static final Logger LOGGER = LoggerFactory.getLogger(GroupDataSyncJob.class);

    @Autowired
    private GroupFormalDataSyncService formalService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void task() throws Exception {
        List<Map<String, Object>> identities = jdbcTemplate.queryForList(
                "select distinct ORG_IDENTITY from PARTY_ORGANIZATION where ORG_IDENTITY is not null");
        for (Map<String, Object> identity : identities) {
            Object value = identity.get("ORG_IDENTITY");
            if (value == null) {
                continue;
            }
            try {
                formalService.sync(String.valueOf(value), "GROUP_SYNC_JOB", "SCHEDULED", null, "127.0.0.1");
            } catch (Exception ex) {
                LOGGER.error("集团数据同步任务执行失败，ORG_IDENTITY=" + value, ex);
            }
        }
    }
}
