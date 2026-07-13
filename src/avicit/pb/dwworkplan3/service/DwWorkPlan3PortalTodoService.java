package avicit.pb.dwworkplan3.service;

import avicit.ims.oa.todo.service.PortalBusinessTodoService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.api.session.SessionHelper;
import avicit.pb.dwworkplan3.dto.DwWorkPlan3Constants;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class DwWorkPlan3PortalTodoService {
    private static final Logger LOGGER = LoggerFactory.getLogger(DwWorkPlan3PortalTodoService.class);

    private static final String SOURCE_MODULE = "DW_WORK_PLAN3";
    private static final String SCENE_HANDLE = "HANDLE";
    private static final String SCENE_CONFIRM = "CONFIRM";
    private static final String TASK_TYPE = "党委计划3.0";

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private PortalBusinessTodoService portalBusinessTodoService;

    public void syncTaskTodo(String taskId, HttpServletRequest request) {
        if (StringUtils.isBlank(taskId)) {
            return;
        }
        try {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from DYN_DW_PLAN3_TASK where ID=?", taskId);
            if (rows.isEmpty()) {
                closeTaskTodo(taskId, request, "任务不存在");
                return;
            }
            Map<String, Object> task = rows.get(0);
            closeTaskTodo(taskId, request, "任务状态变更");
            String status = string(task.get("STATUS"));
            if (DwWorkPlan3Constants.STATUS_TODO.equals(status)
                    || DwWorkPlan3Constants.STATUS_DOING.equals(status)
                    || DwWorkPlan3Constants.STATUS_RETURNED.equals(status)) {
                createHandleTodo(task, request);
            } else if (DwWorkPlan3Constants.STATUS_PENDING_CONFIRM.equals(status)) {
                createConfirmTodo(task, request);
            }
        } catch (Exception e) {
            LOGGER.warn("同步党委计划3.0门户待办失败, taskId={}", taskId, e);
        }
    }

    public void closeTaskTodo(String taskId, HttpServletRequest request, String reason) {
        try {
            portalBusinessTodoService.closeByBusiness(SOURCE_MODULE, taskId, currentUser(request), remoteAddr(request), reason);
        } catch (Exception e) {
            LOGGER.warn("关闭党委计划3.0门户待办失败, taskId={}", taskId, e);
        }
    }

    public void closeTaskTodos(List<String> taskIds, HttpServletRequest request, String reason) {
        if (taskIds == null || taskIds.isEmpty()) {
            return;
        }
        for (String taskId : taskIds) {
            closeTaskTodo(taskId, request, reason);
        }
    }

    private void createHandleTodo(Map<String, Object> task, HttpServletRequest request) {
        String receiverId = string(task.get("RECEIVER_ID"));
        if (StringUtils.isBlank(receiverId)) {
            return;
        }
        portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request, targetPersonNodeId(task, SCENE_HANDLE))
                .businessScene(SCENE_HANDLE)
                .receiver(receiverId, string(task.get("RECEIVER_NAME")))
                .title("工作计划待处理：" + string(task.get("TITLE")))
                .taskDesc(handleDesc(string(task.get("STATUS")))));
    }

    private void createConfirmTodo(Map<String, Object> task, HttpServletRequest request) {
        if (isDepartmentConfirmationTask(task)) {
            createDepartmentConfirmTodos(task, request);
            return;
        }
        String senderId = string(task.get("SENDER_ID"));
        if (StringUtils.isBlank(senderId)) {
            return;
        }
        portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request, targetPersonNodeId(task, SCENE_CONFIRM))
                .businessScene(SCENE_CONFIRM)
                .receiver(senderId, string(task.get("SENDER_NAME")))
                .title("工作计划反馈待确认：" + string(task.get("TITLE")))
                .taskDesc("下级已提交反馈，请及时确认。"));
    }

    private void createDepartmentConfirmTodos(Map<String, Object> task, HttpServletRequest request) {
        ensureFeedbackTargetColumns();
        String officeNodeId = string(task.get("PERSON_NODE_ID"));
        if (StringUtils.isBlank(officeNodeId)) {
            return;
        }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select dept_node.ID,dept_node.USER_ID,dept_node.USER_NAME from DYN_DW_PLAN3_PERSON_TREE office_node " +
                        "join DYN_DW_PLAN3_PERSON_TREE dept_node on office_node.PARENT_ID=dept_node.ID " +
                        "where office_node.ID=? and dept_node.ROLE_CODE=? and dept_node.ENABLED='Y'",
                officeNodeId, DwWorkPlan3Constants.ROLE_DEPT);
        if (rows.isEmpty()) {
            return;
        }
        Map<String, Object> deptNode = rows.get(0);
        Map<String, Object> target = latestConfirmTarget(string(task.get("ID")));
        if (StringUtils.isNotBlank(string(target.get("TARGET_USER_ID")))) {
            String receiverId = string(target.get("TARGET_USER_ID"));
            String receiverName = defaultValue(string(target.get("TARGET_USER_NAME")), receiverId);
            String personNodeId = defaultValue(string(target.get("TARGET_PERSON_NODE_ID")), string(deptNode.get("ID")));
            portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request, personNodeId)
                    .businessScene(SCENE_CONFIRM)
                    .receiver(receiverId, receiverName)
                    .title("\u5de5\u4f5c\u8ba1\u5212\u90e8\u95e8\u786e\u8ba4\uff1a" + string(task.get("TITLE")))
                    .taskDesc("\u79d1\u5ba4\u5df2\u63d0\u4ea4\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\uff0c\u8bf7\u90e8\u957f\u786e\u8ba4\u95ed\u73af\u3002"));
            sendMessage(receiverId, "\u5de5\u4f5c\u8ba1\u5212\u90e8\u95e8\u786e\u8ba4\uff1a" + string(task.get("TITLE")),
                    "\u79d1\u5ba4\u5df2\u63d0\u4ea4\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\uff0c\u8bf7\u90e8\u957f\u53ca\u65f6\u786e\u8ba4\u95ed\u73af\u3002", request);
            return;
        }
        List<String> userIds = splitPersonList(string(deptNode.get("USER_ID")));
        List<String> userNames = splitPersonList(string(deptNode.get("USER_NAME")));
        for (int i = 0; i < userIds.size(); i++) {
            String receiverId = userIds.get(i);
            if (StringUtils.isBlank(receiverId)) {
                continue;
            }
            String receiverName = i < userNames.size() ? userNames.get(i) : receiverId;
            portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request, string(deptNode.get("ID")))
                    .businessScene(SCENE_CONFIRM)
                    .receiver(receiverId, receiverName)
                    .title("\u5de5\u4f5c\u8ba1\u5212\u90e8\u95e8\u786e\u8ba4\uff1a" + string(task.get("TITLE")))
                    .taskDesc("\u79d1\u5458\u5df2\u5b8c\u6210\u53cd\u9988\u5e76\u7531\u5ba4\u4e3b\u4efb\u786e\u8ba4\uff0c\u8bf7\u90e8\u957f\u786e\u8ba4\u95ed\u73af\u3002"));
            sendMessage(receiverId, "\u5de5\u4f5c\u8ba1\u5212\u90e8\u95e8\u786e\u8ba4\uff1a" + string(task.get("TITLE")),
                    "\u79d1\u5ba4\u5df2\u63d0\u4ea4\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\uff0c\u8bf7\u90e8\u957f\u53ca\u65f6\u786e\u8ba4\u95ed\u73af\u3002", request);
        }
    }

    private Map<String, Object> latestConfirmTarget(String taskId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select TARGET_USER_ID,TARGET_USER_NAME,TARGET_PERSON_NODE_ID from DYN_DW_PLAN3_FEEDBACK where TASK_ID=? and CONFIRM_RESULT=? order by FEEDBACK_TIME desc,CREATION_DATE desc",
                taskId, DwWorkPlan3Constants.FEEDBACK_PENDING);
        return rows.isEmpty() ? Collections.<String, Object>emptyMap() : rows.get(0);
    }

    private PortalBusinessTodoService.Todo baseTodo(Map<String, Object> task, HttpServletRequest request, String personNodeId) {
        return new PortalBusinessTodoService.Todo()
                .sourceModule(SOURCE_MODULE)
                .businessId(string(task.get("ID")))
                .taskType(TASK_TYPE)
                .priority("1")
                .sender(string(task.get("SENDER_ID")), string(task.get("SENDER_NAME")))
                .targetUrl(targetUrl(task, personNodeId))
                .audit(currentUser(request), remoteAddr(request), orgIdentity(request));
    }

    private String targetPersonNodeId(Map<String, Object> task, String scene) {
        if (SCENE_CONFIRM.equals(scene)) {
            String parentId = string(task.get("PARENT_ID"));
            if (StringUtils.isNotBlank(parentId)) {
                List<Map<String, Object>> rows = jdbcTemplate.queryForList("select PERSON_NODE_ID from DYN_DW_PLAN3_TASK where ID=?", parentId);
                if (!rows.isEmpty() && StringUtils.isNotBlank(string(rows.get(0).get("PERSON_NODE_ID")))) {
                    return string(rows.get(0).get("PERSON_NODE_ID"));
                }
            }
        }
        return string(task.get("PERSON_NODE_ID"));
    }

    private boolean isDepartmentConfirmationTask(Map<String, Object> task) {
        return StringUtils.isBlank(string(task.get("PARENT_ID")))
                && DwWorkPlan3Constants.LEVEL_OFFICE.equals(string(task.get("TASK_LEVEL")));
    }

    private List<String> splitPersonList(String value) {
        if (StringUtils.isBlank(value)) {
            return Collections.emptyList();
        }
        String[] parts = value.split("[,，;；]");
        List<String> result = new ArrayList<String>();
        for (String part : parts) {
            String item = StringUtils.trimToEmpty(part);
            if (StringUtils.isNotBlank(item) && !result.contains(item)) {
                result.add(item);
            }
        }
        return result;
    }

    private String targetUrl(Map<String, Object> task, String personNodeId) {
        String url = "platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex?taskId=" + string(task.get("ID"));
        if (StringUtils.isNotBlank(personNodeId)) {
            url += "&personNodeId=" + personNodeId;
        }
        return url;
    }

    private String handleDesc(String status) {
        if (DwWorkPlan3Constants.STATUS_TODO.equals(status)) {
            return "您收到新的工作计划任务，请接收处理。";
        }
        if (DwWorkPlan3Constants.STATUS_RETURNED.equals(status)) {
            return "工作计划反馈被退回，请重新处理。";
        }
        return "工作计划任务待处理，请及时反馈或继续下发。";
    }

    private String currentUser(HttpServletRequest request) {
        String userId = request == null ? "" : SessionHelper.getLoginSysUserId(request);
        return StringUtils.isBlank(userId) ? "system" : userId;
    }

    private String remoteAddr(HttpServletRequest request) {
        return request == null ? "" : request.getRemoteAddr();
    }

    private String orgIdentity(HttpServletRequest request) {
        String orgIdentity = request == null ? "" : SessionHelper.getCurrentOrgIdentity(request);
        return StringUtils.isBlank(orgIdentity) ? "ORG_ROOT" : orgIdentity;
    }

    private void ensureFeedbackTargetColumns() {
        ensureColumnExists("DYN_DW_PLAN3_FEEDBACK", "TARGET_USER_ID", "VARCHAR2(50)");
        ensureColumnExists("DYN_DW_PLAN3_FEEDBACK", "TARGET_USER_NAME", "VARCHAR2(100)");
        ensureColumnExists("DYN_DW_PLAN3_FEEDBACK", "TARGET_PERSON_NODE_ID", "VARCHAR2(50)");
    }

    private void ensureColumnExists(String tableName, String columnName, String declaration) {
        try {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select 1 from USER_TAB_COLUMNS where TABLE_NAME=? and COLUMN_NAME=?",
                    tableName, columnName);
            if (rows.isEmpty()) {
                jdbcTemplate.execute("ALTER TABLE " + tableName + " ADD " + columnName + " " + declaration);
            }
        } catch (Exception ignored) {
        }
    }

    private String defaultValue(String value, String fallback) {
        return StringUtils.isBlank(value) ? fallback : value;
    }

    private void sendMessage(String receiverId, String title, String content, HttpServletRequest request) {
        if (StringUtils.isBlank(receiverId)) {
            return;
        }
        try {
            jdbcTemplate.update("insert into SYS_MSG(" +
                            "ID,TITLE,CONTENT,SEND_USER,SEND_DATE,RECV_USER,IS_READED,LAST_UPDATE_DATE,LAST_UPDATED_BY," +
                            "CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,MSG_TYPE,RECV_OR_SEND) " +
                            "values(?,?,?,?,sysdate,?,'0',sysdate,?,sysdate,?,?,0,?,?,?)",
                    ComUtil.getId(), title, content, currentUser(request), receiverId, currentUser(request),
                    currentUser(request), remoteAddr(request), orgIdentity(request), "0", "0");
        } catch (Exception ignored) {
            // Portal todo is the primary channel. Message-table differences must not break task flow.
        }
    }

    private String string(Object value) {
        return value == null ? "" : String.valueOf(value);
    }
}
