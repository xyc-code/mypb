package avicit.ims.oa.todo.service;

import avicit.platform6.commons.utils.ComUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Service
public class PortalBusinessTodoService implements Serializable {
    private static final long serialVersionUID = 1L;

    public static final String STATUS_ACTIVE = "ACTIVE";
    public static final String STATUS_CLOSED = "CLOSED";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean isEnabled() {
        return tableExists("PB_PORTAL_BUSINESS_TODO");
    }

    public void createOrUpdateTodo(Todo todo) {
        if (!isEnabled() || todo == null || !todo.valid()) {
            return;
        }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select ID from PB_PORTAL_BUSINESS_TODO where SOURCE_MODULE=? and BUSINESS_ID=? and BUSINESS_SCENE=? and RECEIVER_ID=?",
                todo.sourceModule, todo.businessId, todo.businessScene, todo.receiverId);
        if (rows.isEmpty()) {
            jdbcTemplate.update("insert into PB_PORTAL_BUSINESS_TODO(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "SOURCE_MODULE,BUSINESS_ID,BUSINESS_SCENE,RECEIVER_ID,RECEIVER_NAME,TITLE,TASK_TYPE,TASK_DESC,TODO_STATUS," +
                            "PRIORITY,SEND_USER_ID,SEND_USER_NAME,SEND_TIME,TARGET_URL,CLOSE_TIME,CLOSE_REASON) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,nvl(?,systimestamp),?,null,null)",
                    ComUtil.getId(), todo.updatedBy, todo.updatedBy, todo.lastUpdateIp, todo.orgIdentity,
                    todo.sourceModule, todo.businessId, todo.businessScene, todo.receiverId, todo.receiverName,
                    todo.title, todo.taskType, todo.taskDesc, STATUS_ACTIVE, todo.priority, todo.sendUserId,
                    todo.sendUserName, todo.sendTime, todo.targetUrl);
        } else {
            jdbcTemplate.update("update PB_PORTAL_BUSINESS_TODO set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "ORG_IDENTITY=?,RECEIVER_NAME=?,TITLE=?,TASK_TYPE=?,TASK_DESC=?,TODO_STATUS=?,PRIORITY=?," +
                            "SEND_USER_ID=?,SEND_USER_NAME=?,SEND_TIME=nvl(?,systimestamp),TARGET_URL=?,CLOSE_TIME=null,CLOSE_REASON=null " +
                            "where ID=?",
                    todo.updatedBy, todo.lastUpdateIp, todo.orgIdentity, todo.receiverName, todo.title, todo.taskType,
                    todo.taskDesc, STATUS_ACTIVE, todo.priority, todo.sendUserId, todo.sendUserName, todo.sendTime,
                    todo.targetUrl, String.valueOf(rows.get(0).get("ID")));
        }
    }

    public void closeTodo(String sourceModule, String businessId, String businessScene, String receiverId,
                          String updatedBy, String lastUpdateIp, String closeReason) {
        if (!isEnabled() || StringUtils.isBlank(sourceModule) || StringUtils.isBlank(businessId)
                || StringUtils.isBlank(businessScene) || StringUtils.isBlank(receiverId)) {
            return;
        }
        jdbcTemplate.update("update PB_PORTAL_BUSINESS_TODO set TODO_STATUS=?,CLOSE_TIME=sysdate,CLOSE_REASON=?," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? " +
                        "where SOURCE_MODULE=? and BUSINESS_ID=? and BUSINESS_SCENE=? and RECEIVER_ID=? and TODO_STATUS=?",
                STATUS_CLOSED, closeReason, updatedBy, lastUpdateIp, sourceModule, businessId, businessScene, receiverId, STATUS_ACTIVE);
    }

    public void closeByBusiness(String sourceModule, String businessId, String updatedBy, String lastUpdateIp, String closeReason) {
        if (!isEnabled() || StringUtils.isBlank(sourceModule) || StringUtils.isBlank(businessId)) {
            return;
        }
        jdbcTemplate.update("update PB_PORTAL_BUSINESS_TODO set TODO_STATUS=?,CLOSE_TIME=sysdate,CLOSE_REASON=?," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? " +
                        "where SOURCE_MODULE=? and BUSINESS_ID=? and TODO_STATUS=?",
                STATUS_CLOSED, closeReason, updatedBy, lastUpdateIp, sourceModule, businessId, STATUS_ACTIVE);
    }

    private boolean tableExists(String tableName) {
        try {
            Integer count = jdbcTemplate.queryForObject(
                    "select count(1) from USER_TABLES where TABLE_NAME=?",
                    Integer.class, tableName);
            return count != null && count > 0;
        } catch (Exception ignored) {
            return false;
        }
    }

    public static class Todo {
        private String sourceModule;
        private String businessId;
        private String businessScene;
        private String receiverId;
        private String receiverName;
        private String title;
        private String taskType;
        private String taskDesc;
        private String priority;
        private String sendUserId;
        private String sendUserName;
        private Object sendTime;
        private String targetUrl;
        private String updatedBy;
        private String lastUpdateIp;
        private String orgIdentity;

        private boolean valid() {
            return StringUtils.isNotBlank(sourceModule) && StringUtils.isNotBlank(businessId)
                    && StringUtils.isNotBlank(businessScene) && StringUtils.isNotBlank(receiverId)
                    && StringUtils.isNotBlank(title);
        }

        public Todo sourceModule(String sourceModule) {
            this.sourceModule = sourceModule;
            return this;
        }

        public Todo businessId(String businessId) {
            this.businessId = businessId;
            return this;
        }

        public Todo businessScene(String businessScene) {
            this.businessScene = businessScene;
            return this;
        }

        public Todo receiver(String receiverId, String receiverName) {
            this.receiverId = receiverId;
            this.receiverName = receiverName;
            return this;
        }

        public Todo title(String title) {
            this.title = title;
            return this;
        }

        public Todo taskType(String taskType) {
            this.taskType = taskType;
            return this;
        }

        public Todo taskDesc(String taskDesc) {
            this.taskDesc = taskDesc;
            return this;
        }

        public Todo priority(String priority) {
            this.priority = priority;
            return this;
        }

        public Todo sender(String sendUserId, String sendUserName) {
            this.sendUserId = sendUserId;
            this.sendUserName = sendUserName;
            return this;
        }

        public Todo sendTime(Object sendTime) {
            this.sendTime = sendTime;
            return this;
        }

        public Todo targetUrl(String targetUrl) {
            this.targetUrl = targetUrl;
            return this;
        }

        public Todo audit(String updatedBy, String lastUpdateIp, String orgIdentity) {
            this.updatedBy = updatedBy;
            this.lastUpdateIp = lastUpdateIp;
            this.orgIdentity = orgIdentity;
            return this;
        }
    }
}
