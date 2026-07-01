package avicit.pb.dwworkplan3.service;

import avicit.ims.oa.todo.service.PortalBusinessTodoService;
import avicit.platform6.api.session.SessionHelper;
import avicit.pb.dwworkplan3.dto.DwWorkPlan3Constants;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
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
        portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request)
                .businessScene(SCENE_HANDLE)
                .receiver(receiverId, string(task.get("RECEIVER_NAME")))
                .title("工作计划待处理：" + string(task.get("TITLE")))
                .taskDesc(handleDesc(string(task.get("STATUS")))));
    }

    private void createConfirmTodo(Map<String, Object> task, HttpServletRequest request) {
        String senderId = string(task.get("SENDER_ID"));
        if (StringUtils.isBlank(senderId)) {
            return;
        }
        portalBusinessTodoService.createOrUpdateTodo(baseTodo(task, request)
                .businessScene(SCENE_CONFIRM)
                .receiver(senderId, string(task.get("SENDER_NAME")))
                .title("工作计划反馈待确认：" + string(task.get("TITLE")))
                .taskDesc("下级已提交反馈，请及时确认。"));
    }

    private PortalBusinessTodoService.Todo baseTodo(Map<String, Object> task, HttpServletRequest request) {
        return new PortalBusinessTodoService.Todo()
                .sourceModule(SOURCE_MODULE)
                .businessId(string(task.get("ID")))
                .taskType(TASK_TYPE)
                .priority("1")
                .sender(string(task.get("SENDER_ID")), string(task.get("SENDER_NAME")))
                .targetUrl("platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex?taskId=" + string(task.get("ID")))
                .audit(currentUser(request), remoteAddr(request), orgIdentity(request));
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

    private String string(Object value) {
        return value == null ? "" : String.valueOf(value);
    }
}
