package avicit.ims.oa.todo.service;

import avicit.platform6.commons.utils.ComUtil;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Service
public class PortalBusinessTodoService implements Serializable {
    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(PortalBusinessTodoService.class);

    public static final String STATUS_ACTIVE = "ACTIVE";
    public static final String STATUS_CLOSED = "CLOSED";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean isEnabled() {
        return tableExists("PB_PORTAL_BUSINESS_TODO");
    }

    /**
     * 新增或刷新门户待办。同一来源模块、业务主键、业务场景和接收人只保留一条记录。
     *
     * @param todo 门户待办参数，必填字段由 {@link Todo} 中的字段注释说明
     * @return 新增或刷新成功返回1；参数不完整、待办表未部署或写入失败返回0
     */
    public int addTodo(Todo todo) {
        if (!isEnabled() || todo == null || !todo.valid()) {
            return 0;
        }
        try {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select ID from PB_PORTAL_BUSINESS_TODO where SOURCE_MODULE=? and BUSINESS_ID=? and BUSINESS_SCENE=? and RECEIVER_ID=?",
                    todo.sourceModule, todo.businessId, todo.businessScene, todo.receiverId);
            String priority = StringUtils.defaultIfBlank(todo.priority, "0");
            if (rows.isEmpty()) {
                return jdbcTemplate.update("insert into PB_PORTAL_BUSINESS_TODO(" +
                                "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                                "SOURCE_MODULE,BUSINESS_ID,BUSINESS_SCENE,RECEIVER_ID,RECEIVER_NAME,TITLE,TASK_TYPE,TASK_DESC,TODO_STATUS," +
                                "PRIORITY,SEND_USER_ID,SEND_USER_NAME,SEND_TIME,TARGET_URL,CLOSE_TIME,CLOSE_REASON) " +
                                "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,nvl(?,systimestamp),?,null,null)",
                        ComUtil.getId(), todo.updatedBy, todo.updatedBy, todo.lastUpdateIp, todo.orgIdentity,
                        todo.sourceModule, todo.businessId, todo.businessScene, todo.receiverId, todo.receiverName,
                        todo.title, todo.taskType, todo.taskDesc, STATUS_ACTIVE, priority, todo.sendUserId,
                        todo.sendUserName, todo.sendTime, todo.targetUrl);
            }
            return jdbcTemplate.update("update PB_PORTAL_BUSINESS_TODO set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "ORG_IDENTITY=?,RECEIVER_NAME=?,TITLE=?,TASK_TYPE=?,TASK_DESC=?,TODO_STATUS=?,PRIORITY=?," +
                            "SEND_USER_ID=?,SEND_USER_NAME=?,SEND_TIME=nvl(?,systimestamp),TARGET_URL=?,CLOSE_TIME=null,CLOSE_REASON=null " +
                            "where ID=?",
                    todo.updatedBy, todo.lastUpdateIp, todo.orgIdentity, todo.receiverName, todo.title, todo.taskType,
                    todo.taskDesc, STATUS_ACTIVE, priority, todo.sendUserId, todo.sendUserName, todo.sendTime,
                    todo.targetUrl, String.valueOf(rows.get(0).get("ID")));
        } catch (Exception e) {
            LOGGER.warn("新增或刷新门户待办失败, sourceModule={}, businessId={}",
                    todo.sourceModule, todo.businessId, e);
            return 0;
        }
    }

    public void createOrUpdateTodo(Todo todo) {
        addTodo(todo);
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
        completeTodo(sourceModule, businessId, updatedBy, lastUpdateIp, closeReason);
    }

    /**
     * 办结指定业务下的全部有效门户待办。
     *
     * @param sourceModule 来源模块编码，必填，例如“DW_WORK_PLAN3”
     * @param businessId 业务数据主键，必填，例如任务ID
     * @param updatedBy 办结操作人ID，可传当前登录用户ID或定时任务账号
     * @param lastUpdateIp 办结操作来源IP，无请求上下文时可传空字符串
     * @param closeReason 办结原因，用于记录状态变更说明
     * @return 实际办结的待办数量；参数不完整、待办表未部署或更新失败返回0
     */
    public int completeTodo(String sourceModule, String businessId, String updatedBy,
                            String lastUpdateIp, String closeReason) {
        if (!isEnabled() || StringUtils.isBlank(sourceModule) || StringUtils.isBlank(businessId)) {
            return 0;
        }
        try {
            return jdbcTemplate.update("update PB_PORTAL_BUSINESS_TODO set TODO_STATUS=?,CLOSE_TIME=sysdate,CLOSE_REASON=?," +
                            "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? " +
                            "where SOURCE_MODULE=? and BUSINESS_ID=? and TODO_STATUS=?",
                    STATUS_CLOSED, closeReason, updatedBy, lastUpdateIp, sourceModule, businessId, STATUS_ACTIVE);
        } catch (Exception e) {
            LOGGER.warn("办结门户待办失败, sourceModule={}, businessId={}", sourceModule, businessId, e);
            return 0;
        }
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

    /** 门户待办参数对象。 */
    public static class Todo {
        /** 来源模块编码，必填，例如“DW_WORK_PLAN3”。 */
        private String sourceModule;
        /** 业务数据主键，必填，例如任务ID。 */
        private String businessId;
        /** 业务场景编码，必填，例如“HANDLE”或“CONFIRM”。 */
        private String businessScene;
        /** 待办接收人用户ID，必填。 */
        private String receiverId;
        /** 待办接收人姓名，选填，用于门户展示。 */
        private String receiverName;
        /** 待办标题，必填。 */
        private String title;
        /** 任务类型，选填，例如“党委计划3.0”。 */
        private String taskType;
        /** 待办说明，选填，用于描述处理要求。 */
        private String taskDesc;
        /** 优先级，选填，空值默认“0”表示普通。 */
        private String priority;
        /** 发送人用户ID，选填。 */
        private String sendUserId;
        /** 发送人姓名，选填。 */
        private String sendUserName;
        /** 发送时间，选填，支持JDBC可识别的日期时间对象；空值使用数据库当前时间。 */
        private Object sendTime;
        /** 门户点击待办后的业务跳转地址，选填。 */
        private String targetUrl;
        /** 数据创建或更新操作人ID，选填。 */
        private String updatedBy;
        /** 数据创建或更新来源IP，选填。 */
        private String lastUpdateIp;
        /** 组织身份编码，选填，例如当前登录组织的ORG_IDENTITY。 */
        private String orgIdentity;

        private boolean valid() {
            return StringUtils.isNotBlank(sourceModule) && StringUtils.isNotBlank(businessId)
                    && StringUtils.isNotBlank(businessScene) && StringUtils.isNotBlank(receiverId)
                    && StringUtils.isNotBlank(title);
        }

        /**
         * 设置来源模块编码。
         *
         * @param sourceModule 来源模块编码，必填，例如“DW_WORK_PLAN3”
         * @return 当前待办参数对象
         */
        public Todo sourceModule(String sourceModule) {
            this.sourceModule = sourceModule;
            return this;
        }

        /**
         * 设置业务数据主键。
         *
         * @param businessId 业务数据主键，必填，例如任务ID
         * @return 当前待办参数对象
         */
        public Todo businessId(String businessId) {
            this.businessId = businessId;
            return this;
        }

        /**
         * 设置业务场景编码。
         *
         * @param businessScene 业务场景编码，必填，例如“HANDLE”或“CONFIRM”
         * @return 当前待办参数对象
         */
        public Todo businessScene(String businessScene) {
            this.businessScene = businessScene;
            return this;
        }

        /**
         * 设置待办接收人。
         *
         * @param receiverId 接收人用户ID，必填
         * @param receiverName 接收人姓名，选填，用于门户展示
         * @return 当前待办参数对象
         */
        public Todo receiver(String receiverId, String receiverName) {
            this.receiverId = receiverId;
            this.receiverName = receiverName;
            return this;
        }

        /**
         * 设置待办标题。
         *
         * @param title 待办标题，必填
         * @return 当前待办参数对象
         */
        public Todo title(String title) {
            this.title = title;
            return this;
        }

        /**
         * 设置任务类型。
         *
         * @param taskType 任务类型，选填，例如“党委计划3.0”
         * @return 当前待办参数对象
         */
        public Todo taskType(String taskType) {
            this.taskType = taskType;
            return this;
        }

        /**
         * 设置待办说明。
         *
         * @param taskDesc 待办说明，选填，用于描述处理要求
         * @return 当前待办参数对象
         */
        public Todo taskDesc(String taskDesc) {
            this.taskDesc = taskDesc;
            return this;
        }

        /**
         * 设置优先级。
         *
         * @param priority 优先级，选填，空值默认“0”表示普通
         * @return 当前待办参数对象
         */
        public Todo priority(String priority) {
            this.priority = priority;
            return this;
        }

        /**
         * 设置发送人。
         *
         * @param sendUserId 发送人用户ID，选填
         * @param sendUserName 发送人姓名，选填
         * @return 当前待办参数对象
         */
        public Todo sender(String sendUserId, String sendUserName) {
            this.sendUserId = sendUserId;
            this.sendUserName = sendUserName;
            return this;
        }

        /**
         * 设置发送时间。
         *
         * @param sendTime JDBC可识别的日期时间对象，选填；空值使用数据库当前时间
         * @return 当前待办参数对象
         */
        public Todo sendTime(Object sendTime) {
            this.sendTime = sendTime;
            return this;
        }

        /**
         * 设置业务跳转地址。
         *
         * @param targetUrl 门户点击待办后的业务地址，选填
         * @return 当前待办参数对象
         */
        public Todo targetUrl(String targetUrl) {
            this.targetUrl = targetUrl;
            return this;
        }

        /**
         * 设置审计信息。
         *
         * @param updatedBy 数据创建或更新操作人ID，选填
         * @param lastUpdateIp 数据创建或更新来源IP，选填
         * @param orgIdentity 组织身份编码，选填
         * @return 当前待办参数对象
         */
        public Todo audit(String updatedBy, String lastUpdateIp, String orgIdentity) {
            this.updatedBy = updatedBy;
            this.lastUpdateIp = lastUpdateIp;
            this.orgIdentity = orgIdentity;
            return this;
        }
    }
}
