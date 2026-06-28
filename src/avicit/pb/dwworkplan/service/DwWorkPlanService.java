package avicit.pb.dwworkplan.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import avicit.pb.dwworkplan.dto.DwWorkPlanConstants;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DwWorkPlanService {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private SysUserAPI sysUserAPI;

    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    public Map<String, Object> currentUser(HttpServletRequest request) {
        ensureBootstrapRoot(request);
        String userId = loginUser(request);
        Map<String, Object> result = success();
        result.put("userId", userId);
        result.put("userName", userName(userId));
        result.put("roles", jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN_PERSON_TREE where USER_ID=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                userId));
        return result;
    }

    public List<Map<String, Object>> listPersonTree() {
        return jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN_PERSON_TREE where nvl(ENABLED,'Y')='Y' order by SORT_NO, CREATION_DATE");
    }

    public Map<String, Object> savePerson(Map<String, String> p, HttpServletRequest request) {
        String id = value(p, "id");
        String userId = value(p, "userId");
        String userName = value(p, "userName");
        if (StringUtils.isBlank(userName) && StringUtils.isNotBlank(userId)) {
            userName = userName(userId);
        }
        if (StringUtils.isBlank(id)) {
            id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN_PERSON_TREE(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                    emptyToNull(value(p, "parentId")), value(p, "nodeName"), emptyToNull(userId), emptyToNull(userName),
                    value(p, "roleCode"), number(value(p, "sortNo")), defaultValue(value(p, "enabled"), "Y"),
                    emptyToNull(value(p, "remark")));
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN_PERSON_TREE set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "PARENT_ID=?,NODE_NAME=?,USER_ID=?,USER_NAME=?,ROLE_CODE=?,SORT_NO=?,ENABLED=?,REMARK=? where ID=?",
                    loginUser(request), request.getRemoteAddr(), emptyToNull(value(p, "parentId")), value(p, "nodeName"),
                    emptyToNull(userId), emptyToNull(userName), value(p, "roleCode"), number(value(p, "sortNo")),
                    defaultValue(value(p, "enabled"), "Y"), emptyToNull(value(p, "remark")), id);
        }
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> disablePerson(String id, HttpServletRequest request) {
        jdbcTemplate.update("update DYN_DW_PLAN_PERSON_TREE set ENABLED='N',LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                loginUser(request), request.getRemoteAddr(), id);
        return success();
    }

    public Map<String, Object> createBatch(String year, String quarter, HttpServletRequest request) {
        if (!hasRole(loginUser(request), DwWorkPlanConstants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u7ef4\u62a4\u6279\u6b21");
        }
        if (StringUtils.isBlank(year) || StringUtils.isBlank(quarter)) {
            return failure("\u5e74\u5ea6\u548c\u5b63\u5ea6\u4e0d\u80fd\u4e3a\u7a7a");
        }
        List<Map<String, Object>> exists = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN_BATCH where PLAN_YEAR=? and QUARTER=?", number(year), quarter);
        if (!exists.isEmpty()) {
            Map<String, Object> result = success();
            result.put("id", exists.get(0).get("ID"));
            result.put("existing", true);
            return result;
        }
        String id = ComUtil.getId();
        String name = year + "/" + quarter.replaceAll("[^0-9]", "") + "\u5b63\u5ea6";
        jdbcTemplate.update("insert into DYN_DW_PLAN_BATCH(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "PLAN_YEAR,QUARTER,BATCH_NAME,STATUS,REMARK) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                number(year), quarter, name, "ACTIVE", null);
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public List<Map<String, Object>> listBatches() {
        return jdbcTemplate.queryForList("select * from DYN_DW_PLAN_BATCH order by PLAN_YEAR desc, QUARTER desc, CREATION_DATE desc");
    }

    public Map<String, Object> deleteBatch(String id, HttpServletRequest request) {
        if (!hasRole(loginUser(request), DwWorkPlanConstants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u7ef4\u62a4\u6279\u6b21");
        }
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u6279\u6b21");
        }
        List<Map<String, Object>> feedbackIds = jdbcTemplate.queryForList(
                "select f.ID,f.ATTACHMENT_ID from DYN_DW_PLAN_FEEDBACK f where f.TASK_ID in (select t.ID from DYN_DW_PLAN_TASK t where t.BATCH_ID=?)",
                id);
        List<Map<String, Object>> taskIds = jdbcTemplate.queryForList(
                "select ID,ATTACHMENT_ID from DYN_DW_PLAN_TASK where BATCH_ID=?", id);
        jdbcTemplate.update("delete from DYN_DW_PLAN_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN_TASK where BATCH_ID=?)", id);
        jdbcTemplate.update("delete from DYN_DW_PLAN_TASK where BATCH_ID=?", id);
        for (Map<String, Object> row : feedbackIds) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        for (Map<String, Object> row : taskIds) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        jdbcTemplate.update("delete from DYN_DW_PLAN_BATCH where ID=?", id);
        return success();
    }

    public Map<String, Object> saveRootTask(Map<String, String> p, HttpServletRequest request) {
        String id = value(p, "id");
        String attachmentId = emptyToNull(value(p, "attachmentId"));
        if (StringUtils.isBlank(id)) {
            id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN_TASK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "BATCH_ID,PARENT_ID,ROOT_ID,TASK_LEVEL,TITLE,CONTENT,TARGET_DESC,PLAN_DEADLINE,STATUS," +
                            "SENDER_ID,SENDER_NAME,RECEIVER_ID,RECEIVER_NAME,PERSON_NODE_ID,ATTACHMENT_ID,DISPATCH_TIME) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,sysdate)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                    value(p, "batchId"), null, id, DwWorkPlanConstants.LEVEL_PARTY, value(p, "title"),
                    emptyToNull(value(p, "content")), emptyToNull(value(p, "targetDesc")), date(value(p, "planDeadline")),
                    DwWorkPlanConstants.STATUS_TODO, loginUser(request), userName(loginUser(request)), loginUser(request),
                    userName(loginUser(request)), null, attachmentId);
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN_TASK set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "TITLE=?,CONTENT=?,TARGET_DESC=?,PLAN_DEADLINE=?,ATTACHMENT_ID=? where ID=? and TASK_LEVEL=?",
                    loginUser(request), request.getRemoteAddr(), value(p, "title"), emptyToNull(value(p, "content")),
                    emptyToNull(value(p, "targetDesc")), date(value(p, "planDeadline")), attachmentId,
                    id, DwWorkPlanConstants.LEVEL_PARTY);
        }
        bindAttachment(attachmentId, id, "ROOT_TASK", request);
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> dispatchChild(Map<String, String> p, HttpServletRequest request) {
        String userId = loginUser(request);
        String parentId = value(p, "parentId");
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", parentId);
        if (!userId.equals(string(parent.get("RECEIVER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u63a5\u6536\u4eba\u53ef\u4ee5\u7ee7\u7eed\u4e0b\u53d1\u8be5\u4efb\u52a1");
        }
        String parentLevel = string(parent.get("TASK_LEVEL"));
        String parentStatus = string(parent.get("STATUS"));
        boolean partyDispatch = DwWorkPlanConstants.LEVEL_PARTY.equals(parentLevel);
        if (!partyDispatch && !DwWorkPlanConstants.STATUS_DOING.equals(parentStatus) && !DwWorkPlanConstants.STATUS_RETURNED.equals(parentStatus)) {
            return failure("\u8bf7\u5148\u63a5\u6536\u4efb\u52a1\uff0c\u518d\u4e0b\u53d1");
        }
        Integer childCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN_TASK where PARENT_ID=?", Integer.class, parentId);
        if (childCount != null && childCount > 0) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u7ecf\u4e0b\u53d1\u8fc7\uff0c\u4e0d\u80fd\u91cd\u590d\u4e0b\u53d1");
        }
        String nextLevel = DwWorkPlanConstants.nextLevel(parentLevel);
        if (StringUtils.isBlank(nextLevel)) {
            return failure("\u79d1\u5458\u4efb\u52a1\u4e0d\u80fd\u7ee7\u7eed\u4e0b\u53d1\uff0c\u53ea\u80fd\u53cd\u9988");
        }
        String receiverId = value(p, "receiverId");
        String personNodeId = value(p, "personNodeId");
        Map<String, Object> receiverNode = validateDirectChildReceiver(userId, personNodeId, receiverId);
        String expectedRole = DwWorkPlanConstants.nextRole(string(receiverNode.get("PARENT_ROLE_CODE")));
        if (StringUtils.isNotBlank(expectedRole) && !expectedRole.equals(string(receiverNode.get("ROLE_CODE")))) {
            return failure("\u53ea\u80fd\u4e0b\u53d1\u7ed9\u5f53\u524d\u4eba\u5458\u6811\u8282\u70b9\u7684\u76f4\u5c5e\u4e0b\u4e00\u7ea7");
        }
        String attachmentId = emptyToNull(value(p, "attachmentId"));
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN_TASK(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "BATCH_ID,PARENT_ID,ROOT_ID,TASK_LEVEL,TITLE,CONTENT,TARGET_DESC,PLAN_DEADLINE,STATUS," +
                        "SENDER_ID,SENDER_NAME,RECEIVER_ID,RECEIVER_NAME,PERSON_NODE_ID,ATTACHMENT_ID,DISPATCH_TIME) " +
                        "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,sysdate)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                parent.get("BATCH_ID"), parentId, parent.get("ROOT_ID"), nextLevel,
                defaultValue(value(p, "title"), string(parent.get("TITLE"))),
                emptyToNull(defaultValue(value(p, "content"), string(parent.get("CONTENT")))),
                emptyToNull(defaultValue(value(p, "targetDesc"), string(parent.get("TARGET_DESC")))),
                date(defaultValue(value(p, "planDeadline"), dateString(parent.get("PLAN_DEADLINE")))),
                DwWorkPlanConstants.STATUS_TODO, loginUser(request), userName(loginUser(request)), receiverId,
                userName(receiverId), personNodeId, attachmentId);
        bindAttachment(attachmentId, id, "DISPATCH_TASK", request);
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate where ID=?",
                DwWorkPlanConstants.STATUS_WAIT_CHILD, loginUser(request), parentId);
        sendMessage(receiverId, "\u5de5\u4f5c\u8ba1\u5212\u65b0\u4efb\u52a1",
                "\u60a8\u6536\u5230\u65b0\u7684\u5de5\u4f5c\u8ba1\u5212\u4efb\u52a1\uff1a" + defaultValue(value(p, "title"), string(parent.get("TITLE"))));
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> takeBackTask(String id, HttpServletRequest request) {
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u8981\u62ff\u56de\u7684\u4efb\u52a1");
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", id);
        if (!loginUser(request).equals(string(task.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u62ff\u56de\u8be5\u4efb\u52a1");
        }
        if (!DwWorkPlanConstants.STATUS_TODO.equals(string(task.get("STATUS")))) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u88ab\u63a5\u6536\uff0c\u4e0d\u80fd\u62ff\u56de");
        }
        String parentId = string(task.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return failure("\u6839\u4efb\u52a1\u4e0d\u80fd\u62ff\u56de");
        }
        deleteAttachment(string(task.get("ATTACHMENT_ID")));
        jdbcTemplate.update("delete from DYN_DW_PLAN_TASK where ID=? and SENDER_ID=? and STATUS=?",
                id, loginUser(request), DwWorkPlanConstants.STATUS_TODO);
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.STATUS_DOING, loginUser(request), request.getRemoteAddr(), parentId);
        Map<String, Object> result = success();
        result.put("parentId", parentId);
        return result;
    }

    public Map<String, Object> acceptTask(String id, HttpServletRequest request) {
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u4efb\u52a1");
        }
        int updated = jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,ACCEPT_TIME=sysdate,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=? and RECEIVER_ID=? and STATUS=?",
                DwWorkPlanConstants.STATUS_DOING, loginUser(request), request.getRemoteAddr(), id, loginUser(request),
                DwWorkPlanConstants.STATUS_TODO);
        if (updated == 0) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u63a5\u6536\u6216\u5f53\u524d\u7528\u6237\u65e0\u6743\u63a5\u6536");
        }
        return success();
    }

    public Map<String, Object> submitFeedback(Map<String, String> p, HttpServletRequest request) {
        String taskId = value(p, "taskId");
        if (StringUtils.isBlank(taskId)) {
            return failure("\u8bf7\u9009\u62e9\u4efb\u52a1");
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", taskId);
        if (!loginUser(request).equals(string(task.get("RECEIVER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u63a5\u6536\u4eba\u53ef\u4ee5\u63d0\u4ea4\u53cd\u9988");
        }
        String status = string(task.get("STATUS"));
        if (DwWorkPlanConstants.STATUS_PENDING_CONFIRM.equals(status)) {
            return failure("\u53cd\u9988\u5df2\u63d0\u4ea4\uff0c\u8bf7\u7b49\u5f85\u4e0a\u7ea7\u786e\u8ba4");
        }
        if (DwWorkPlanConstants.STATUS_COMPLETED.equals(status)) {
            return failure("\u4efb\u52a1\u5df2\u5b8c\u6210\uff0c\u4e0d\u80fd\u91cd\u590d\u63d0\u4ea4\u53cd\u9988");
        }
        if (!allChildrenCompleted(taskId)) {
            return failure("\u4e0b\u7ea7\u4efb\u52a1\u5c1a\u672a\u5168\u90e8\u5b8c\u6210\uff0c\u6682\u4e0d\u80fd\u53cd\u9988");
        }
        Map<String, Object> draft = feedbackDraft(taskId);
        String id = draft == null ? ComUtil.getId() : string(draft.get("ID"));
        String feedbackContent = defaultValue(value(p, "content"), string(draft == null ? null : draft.get("FEEDBACK_CONTENT")));
        String attachmentId = emptyToNull(value(p, "attachmentId"));
        if (StringUtils.isBlank(attachmentId) && draft != null) {
            attachmentId = emptyToNull(string(draft.get("ATTACHMENT_ID")));
        }
        if (draft == null) {
            jdbcTemplate.update("insert into DYN_DW_PLAN_FEEDBACK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "TASK_ID,FEEDBACK_USER_ID,FEEDBACK_USER_NAME,FEEDBACK_CONTENT,FEEDBACK_TIME,ATTACHMENT_ID,CONFIRM_RESULT) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,sysdate,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request), taskId,
                    loginUser(request), userName(loginUser(request)), emptyToNull(feedbackContent),
                    attachmentId, DwWorkPlanConstants.FEEDBACK_PENDING);
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN_FEEDBACK set FEEDBACK_USER_ID=?,FEEDBACK_USER_NAME=?,FEEDBACK_CONTENT=?,FEEDBACK_TIME=sysdate,ATTACHMENT_ID=?,CONFIRM_RESULT=?," +
                            "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    loginUser(request), userName(loginUser(request)), emptyToNull(feedbackContent), attachmentId,
                    DwWorkPlanConstants.FEEDBACK_PENDING, loginUser(request), request.getRemoteAddr(), id);
        }
        bindAttachment(attachmentId, id, "FEEDBACK");
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.STATUS_PENDING_CONFIRM, loginUser(request), request.getRemoteAddr(), taskId);
        notifyParent(taskId, "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u5f85\u786e\u8ba4", "\u4e0b\u7ea7\u5df2\u63d0\u4ea4\u53cd\u9988\uff0c\u8bf7\u53ca\u65f6\u786e\u8ba4\u3002");
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> confirmFeedback(String feedbackId, HttpServletRequest request) {
        Map<String, Object> feedback = queryOne("select f.*,t.SENDER_ID,t.PARENT_ID,t.TITLE from DYN_DW_PLAN_FEEDBACK f join DYN_DW_PLAN_TASK t on f.TASK_ID=t.ID where f.ID=?", feedbackId);
        String taskId = string(feedback.get("TASK_ID"));
        if (!loginUser(request).equals(string(feedback.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u786e\u8ba4\u53cd\u9988");
        }
        if (!DwWorkPlanConstants.FEEDBACK_PENDING.equals(string(feedback.get("CONFIRM_RESULT")))) {
            return failure("\u8be5\u53cd\u9988\u5df2\u7ecf\u5904\u7406\uff0c\u4e0d\u80fd\u91cd\u590d\u786e\u8ba4");
        }
        String completeDetail = string(feedback.get("FEEDBACK_CONTENT"));
        jdbcTemplate.update("update DYN_DW_PLAN_FEEDBACK set CONFIRM_RESULT=?,CONFIRM_USER_ID=?,CONFIRM_USER_NAME=?,CONFIRM_TIME=sysdate," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.FEEDBACK_CONFIRMED, loginUser(request), userName(loginUser(request)), loginUser(request),
                request.getRemoteAddr(), feedbackId);
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,COMPLETE_TIME=sysdate,COMPLETE_DETAIL=?,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.STATUS_COMPLETED, emptyToNull(completeDetail), loginUser(request), request.getRemoteAddr(), taskId);
        syncParentAfterChildDone(taskId, emptyToNull(completeDetail), string(feedback.get("ATTACHMENT_ID")), request);
        return success();
    }

    public Map<String, Object> returnFeedback(String feedbackId, String reason, HttpServletRequest request) {
        Map<String, Object> feedback = queryOne("select f.*,t.SENDER_ID,t.PARENT_ID,t.TITLE from DYN_DW_PLAN_FEEDBACK f join DYN_DW_PLAN_TASK t on f.TASK_ID=t.ID where f.ID=?", feedbackId);
        String taskId = string(feedback.get("TASK_ID"));
        if (!loginUser(request).equals(string(feedback.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u9000\u56de\u53cd\u9988");
        }
        if (!DwWorkPlanConstants.FEEDBACK_PENDING.equals(string(feedback.get("CONFIRM_RESULT")))) {
            return failure("\u8be5\u53cd\u9988\u5df2\u7ecf\u5904\u7406\uff0c\u4e0d\u80fd\u91cd\u590d\u9000\u56de");
        }
        if (StringUtils.isBlank(reason)) {
            return failure("\u8bf7\u586b\u5199\u4e0d\u901a\u8fc7\u539f\u56e0");
        }
        jdbcTemplate.update("update DYN_DW_PLAN_FEEDBACK set CONFIRM_RESULT=?,RETURN_REASON=?,CONFIRM_USER_ID=?,CONFIRM_USER_NAME=?,CONFIRM_TIME=sysdate," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.FEEDBACK_RETURNED, emptyToNull(reason), loginUser(request), userName(loginUser(request)),
                loginUser(request), request.getRemoteAddr(), feedbackId);
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,RETURN_REASON=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.STATUS_RETURNED, emptyToNull(reason), loginUser(request), request.getRemoteAddr(), taskId);
        syncParentAfterChildReturned(taskId, request);
        sendMessage(string(feedback.get("FEEDBACK_USER_ID")), "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u672a\u901a\u8fc7",
                defaultValue(reason, "\u53cd\u9988\u672a\u901a\u8fc7\uff0c\u8bf7\u4fee\u6539\u540e\u91cd\u65b0\u63d0\u4ea4\u3002"));
        return success();
    }

    public List<Map<String, Object>> listTasks(HttpServletRequest request, String batchId, String status) {
        ensureBootstrapRoot(request);
        String userId = loginUser(request);
        StringBuilder sql = new StringBuilder("select t.*," +
                "(select dbms_lob.substr(f.FEEDBACK_CONTENT,4000,1) from DYN_DW_PLAN_FEEDBACK f where f.TASK_ID=t.ID and f.CONFIRM_RESULT=? and rownum=1) FEEDBACK_DRAFT_CONTENT," +
                "(select f.ATTACHMENT_ID from DYN_DW_PLAN_FEEDBACK f where f.TASK_ID=t.ID and f.CONFIRM_RESULT=? and rownum=1) FEEDBACK_DRAFT_ATTACHMENT_ID," +
                "(select count(1) from DYN_DW_PLAN_TASK c where c.PARENT_ID=t.ID) CHILD_COUNT," +
                "case when t.PLAN_DEADLINE<sysdate and t.STATUS<>? then 'Y' else 'N' end OVERDUE," +
                "case when t.RECEIVER_ID=? and t.STATUS in (?,?) then 'Y' when t.SENDER_ID=? and t.STATUS=? then 'Y' else 'N' end NOTICE_FLAG " +
                "from DYN_DW_PLAN_TASK t where 1=1");
        List<Object> args = new ArrayList<Object>();
        args.add(DwWorkPlanConstants.FEEDBACK_DRAFT);
        args.add(DwWorkPlanConstants.FEEDBACK_DRAFT);
        args.add(DwWorkPlanConstants.STATUS_COMPLETED);
        args.add(userId);
        args.add(DwWorkPlanConstants.STATUS_TODO);
        args.add(DwWorkPlanConstants.STATUS_RETURNED);
        args.add(userId);
        args.add(DwWorkPlanConstants.STATUS_PENDING_CONFIRM);
        if (StringUtils.isNotBlank(batchId)) {
            sql.append(" and t.BATCH_ID=?");
            args.add(batchId);
        }
        if (StringUtils.isNotBlank(status)) {
            sql.append(" and t.STATUS=?");
            args.add(status);
        }
        Map<String, Object> topNode = topUserNode(userId);
        if (topNode == null) {
            sql.append(" and 1=0");
        } else if (!DwWorkPlanConstants.ROLE_PARTY.equals(string(topNode.get("ROLE_CODE")))) {
            List<String> subtreeIds = subtreeNodeIds(string(topNode.get("ID")));
            if (subtreeIds.isEmpty()) {
                return Collections.emptyList();
            }
            sql.append(" and t.PERSON_NODE_ID in (");
            appendPlaceholders(sql, subtreeIds.size());
            sql.append(")");
            args.addAll(subtreeIds);
        }
        sql.append(" order by nvl((select r.CREATION_DATE from DYN_DW_PLAN_TASK r where r.ID=t.ROOT_ID),t.CREATION_DATE) desc," +
                " t.ROOT_ID," +
                " case t.TASK_LEVEL when ? then 1 when ? then 2 when ? then 3 when ? then 4 else 9 end," +
                " t.CREATION_DATE desc");
        args.add(DwWorkPlanConstants.LEVEL_PARTY);
        args.add(DwWorkPlanConstants.LEVEL_DEPT);
        args.add(DwWorkPlanConstants.LEVEL_OFFICE);
        args.add(DwWorkPlanConstants.LEVEL_STAFF);
        return jdbcTemplate.queryForList(sql.toString(), args.toArray());
    }

    public List<Map<String, Object>> listFeedback(String taskId, HttpServletRequest request) {
        if (StringUtils.isBlank(taskId)) {
            return Collections.emptyList();
        }
        return jdbcTemplate.queryForList(
                "select f.*,t.TITLE TASK_TITLE,t.SENDER_ID TASK_SENDER_ID,t.RECEIVER_ID TASK_RECEIVER_ID,t.COMPLETE_TIME TASK_COMPLETE_TIME," +
                        "case when t.SENDER_ID=? then 'Y' else 'N' end CAN_CONFIRM " +
                        "from DYN_DW_PLAN_FEEDBACK f join DYN_DW_PLAN_TASK t on f.TASK_ID=t.ID " +
                        "where (f.TASK_ID=? or f.TASK_ID in (select ID from DYN_DW_PLAN_TASK where PARENT_ID=?)) and nvl(f.CONFIRM_RESULT,'PENDING')<>? " +
                        "order by f.FEEDBACK_TIME desc",
                loginUser(request), taskId, taskId, DwWorkPlanConstants.FEEDBACK_DRAFT);
    }

    public Map<String, Object> uploadAttachment(MultipartFile file, String businessType, HttpServletRequest request) throws IOException {
        if (file == null || file.isEmpty()) {
            return failure("\u8bf7\u9009\u62e9\u9644\u4ef6");
        }
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN_ATTACHMENT(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "BUSINESS_ID,BUSINESS_TYPE,FILE_NAME,CONTENT_TYPE,FILE_SIZE,FILE_CONTENT) " +
                        "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                null, emptyToNull(businessType), file.getOriginalFilename(), file.getContentType(),
                file.getSize(), file.getBytes());
        Map<String, Object> result = success();
        result.put("id", id);
        result.put("fileName", file.getOriginalFilename());
        result.put("fileSize", file.getSize());
        return result;
    }

    public Map<String, Object> getAttachment(String id) {
        return queryOne("select * from DYN_DW_PLAN_ATTACHMENT where ID=?", id);
    }

    public List<Map<String, Object>> listReceivers(HttpServletRequest request) {
        String userId = loginUser(request);
        Map<String, Object> node = topUserNode(userId);
        if (node == null) {
            return Collections.emptyList();
        }
        String nextRole = DwWorkPlanConstants.nextRole(string(node.get("ROLE_CODE")));
        if (StringUtils.isBlank(nextRole)) {
            return Collections.emptyList();
        }
        return jdbcTemplate.queryForList("select * from DYN_DW_PLAN_PERSON_TREE where PARENT_ID=? and ROLE_CODE=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                node.get("ID"), nextRole);
    }

    public Map<String, Object> stats(HttpServletRequest request, String batchId) {
        Map<String, Object> result = success();
        StringBuilder where = new StringBuilder();
        List<Object> args = new ArrayList<Object>();
        String userId = loginUser(request);
        boolean party = hasRole(userId, DwWorkPlanConstants.ROLE_PARTY);
        if (StringUtils.isNotBlank(batchId)) {
            where.append(" where BATCH_ID=?");
            args.add(batchId);
        }
        if (!party) {
            where.append(where.length() == 0 ? " where " : " and ");
            where.append("(RECEIVER_ID=? or SENDER_ID=?)");
            args.add(userId);
            args.add(userId);
        }
        result.put("byStatus", jdbcTemplate.queryForList("select STATUS,count(1) CNT from DYN_DW_PLAN_TASK" + where + " group by STATUS", args.toArray()));
        result.put("byLevel", jdbcTemplate.queryForList("select TASK_LEVEL,STATUS,count(1) CNT from DYN_DW_PLAN_TASK" + where + " group by TASK_LEVEL,STATUS", args.toArray()));
        String overdueWhere = where.length() == 0 ? " where " : where + " and ";
        result.put("overdue", jdbcTemplate.queryForList("select TASK_LEVEL,count(1) CNT from DYN_DW_PLAN_TASK" + overdueWhere +
                "PLAN_DEADLINE<sysdate and STATUS<>'COMPLETED' group by TASK_LEVEL", args.toArray()));
        result.put("recent", listTasks(request, batchId, null));
        return result;
    }

    private void ensureBootstrapRoot(HttpServletRequest request) {
        Integer count = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN_PERSON_TREE", Integer.class);
        if (count != null && count == 0) {
            String id = ComUtil.getId();
            String userId = loginUser(request);
            jdbcTemplate.update("insert into DYN_DW_PLAN_PERSON_TREE(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) values(" +
                            "?,?,sysdate,?,sysdate,?,0,?,null,?,?,?,?,1,'Y',?)",
                    id, userId, userId, request.getRemoteAddr(), orgIdentity(request), "Party plan dispatcher", userId,
                    userName(userId), DwWorkPlanConstants.ROLE_PARTY, "Bootstrap root node");
        }
    }

    private boolean allChildrenCompleted(String taskId) {
        Integer total = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN_TASK where PARENT_ID=?", Integer.class, taskId);
        if (total == null || total == 0) {
            return true;
        }
        Integer open = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN_TASK where PARENT_ID=? and STATUS<>?", Integer.class,
                taskId, DwWorkPlanConstants.STATUS_COMPLETED);
        return open == null || open == 0;
    }

    private void syncParentAfterChildDone(String childTaskId, String feedbackContent, String feedbackAttachmentId, HttpServletRequest request) {
        Map<String, Object> child = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", childTaskId);
        String parentId = string(child.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", parentId);
        String draftContent = aggregateChildFeedbackContent(parentId);
        String parentAttachmentId = copyAttachment(feedbackAttachmentId, null, "FEEDBACK_DRAFT", request);
        upsertFeedbackDraft(parentId, defaultValue(draftContent, feedbackContent), parentAttachmentId, request);
        if (allChildrenCompleted(parentId)) {
            if (DwWorkPlanConstants.LEVEL_PARTY.equals(string(parent.get("TASK_LEVEL")))) {
                jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,COMPLETE_TIME=sysdate,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                        DwWorkPlanConstants.STATUS_COMPLETED, loginUser(request), request.getRemoteAddr(), parentId);
            } else {
                jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                        DwWorkPlanConstants.STATUS_DOING, loginUser(request), request.getRemoteAddr(), parentId);
                notifyTaskReceiver(parentId, "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u5df2\u901a\u8fc7",
                        "\u4e0b\u7ea7\u53cd\u9988\u5df2\u901a\u8fc7\uff0c\u8bf7\u53ca\u65f6\u5904\u7406\u4e0a\u7ea7\u53cd\u9988\u3002");
            }
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN_TASK set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    loginUser(request), request.getRemoteAddr(), parentId);
        }
    }

    private void syncParentAfterChildReturned(String childTaskId, HttpServletRequest request) {
        Map<String, Object> child = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", childTaskId);
        String parentId = string(child.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlanConstants.STATUS_WAIT_CHILD, loginUser(request), request.getRemoteAddr(), parentId);
    }

    private String aggregateChildFeedbackContent(String parentId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select t.TITLE,t.RECEIVER_NAME,f.FEEDBACK_CONTENT from DYN_DW_PLAN_TASK t join DYN_DW_PLAN_FEEDBACK f on f.TASK_ID=t.ID " +
                        "where t.PARENT_ID=? and t.STATUS=? and f.CONFIRM_RESULT=? order by f.CONFIRM_TIME, f.FEEDBACK_TIME",
                parentId, DwWorkPlanConstants.STATUS_COMPLETED, DwWorkPlanConstants.FEEDBACK_CONFIRMED);
        StringBuilder detail = new StringBuilder();
        for (Map<String, Object> row : rows) {
            String text = string(row.get("FEEDBACK_CONTENT"));
            if (StringUtils.isBlank(text)) {
                continue;
            }
            if (detail.length() > 0) {
                detail.append("\n\n");
            }
            detail.append("[").append(string(row.get("RECEIVER_NAME"))).append("] ")
                    .append(string(row.get("TITLE"))).append("\n").append(text);
        }
        return detail.toString();
    }

    private boolean hasRole(String userId, String role) {
        Integer count = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN_PERSON_TREE where USER_ID=? and ROLE_CODE=? and ENABLED='Y'",
                Integer.class, userId, role);
        return count != null && count > 0;
    }

    private Map<String, Object> topUserNode(String userId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN_PERSON_TREE where USER_ID=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                userId);
        if (rows.isEmpty()) {
            return null;
        }
        Map<String, Object> best = null;
        int bestDepth = Integer.MAX_VALUE;
        for (Map<String, Object> row : rows) {
            int depth = personNodeDepth(string(row.get("ID")));
            if (best == null || depth < bestDepth) {
                best = row;
                bestDepth = depth;
            }
        }
        return best;
    }

    private int personNodeDepth(String nodeId) {
        int depth = 0;
        String current = nodeId;
        while (StringUtils.isNotBlank(current)) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select PARENT_ID from DYN_DW_PLAN_PERSON_TREE where ID=? and ENABLED='Y'", current);
            if (rows.isEmpty()) {
                return depth;
            }
            String parentId = string(rows.get(0).get("PARENT_ID"));
            if (StringUtils.isBlank(parentId)) {
                return depth;
            }
            current = parentId;
            depth++;
        }
        return depth;
    }

    private List<String> subtreeNodeIds(String rootNodeId) {
        List<String> result = new ArrayList<String>();
        collectSubtreeNodeIds(rootNodeId, result);
        return result;
    }

    private void collectSubtreeNodeIds(String nodeId, List<String> result) {
        if (StringUtils.isBlank(nodeId) || result.contains(nodeId)) {
            return;
        }
        result.add(nodeId);
        List<Map<String, Object>> children = jdbcTemplate.queryForList(
                "select ID from DYN_DW_PLAN_PERSON_TREE where PARENT_ID=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                nodeId);
        for (Map<String, Object> child : children) {
            collectSubtreeNodeIds(string(child.get("ID")), result);
        }
    }

    private Map<String, Object> validateDirectChildReceiver(String userId, String personNodeId, String receiverId) {
        if (StringUtils.isBlank(personNodeId) || StringUtils.isBlank(receiverId)) {
            throw new IllegalArgumentException("\u8bf7\u9009\u62e9\u63a5\u6536\u4eba");
        }
        Map<String, Object> topNode = topUserNode(userId);
        if (topNode == null) {
            throw new IllegalArgumentException("\u5f53\u524d\u7528\u6237\u672a\u5728\u4eba\u5458\u6811\u4e2d\u914d\u7f6e");
        }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select c.*,p.ROLE_CODE PARENT_ROLE_CODE from DYN_DW_PLAN_PERSON_TREE c left join DYN_DW_PLAN_PERSON_TREE p on c.PARENT_ID=p.ID where c.ID=? and c.USER_ID=? and c.PARENT_ID=? and c.ENABLED='Y'",
                personNodeId, receiverId, topNode.get("ID"));
        if (rows.isEmpty()) {
            throw new IllegalArgumentException("\u53ea\u80fd\u4e0b\u53d1\u7ed9\u5f53\u524d\u8282\u70b9\u7684\u76f4\u5c5e\u4e0b\u4e00\u7ea7");
        }
        Map<String, Object> receiver = rows.get(0);
        String nextRole = DwWorkPlanConstants.nextRole(string(topNode.get("ROLE_CODE")));
        if (StringUtils.isBlank(nextRole) || !nextRole.equals(string(receiver.get("ROLE_CODE")))) {
            throw new IllegalArgumentException("\u63a5\u6536\u4eba\u5fc5\u987b\u662f\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u4e00\u7ea7");
        }
        return receiver;
    }

    private void appendPlaceholders(StringBuilder sql, int count) {
        for (int i = 0; i < count; i++) {
            if (i > 0) {
                sql.append(",");
            }
            sql.append("?");
        }
    }

    private void bindAttachment(String attachmentId, String businessId, String businessType, HttpServletRequest request) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN_ATTACHMENT set BUSINESS_ID=?,BUSINESS_TYPE=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                businessId, businessType, loginUser(request), request.getRemoteAddr(), attachmentId);
    }

    private void bindAttachment(String attachmentId, String businessId, String businessType) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN_ATTACHMENT set BUSINESS_ID=?,BUSINESS_TYPE=?,LAST_UPDATE_DATE=sysdate where ID=?",
                businessId, businessType, attachmentId);
    }

    private void deleteAttachment(String attachmentId) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("delete from DYN_DW_PLAN_ATTACHMENT where ID=?", attachmentId);
    }

    private String copyAttachment(String attachmentId, String businessId, String businessType, HttpServletRequest request) {
        if (StringUtils.isBlank(attachmentId)) {
            return null;
        }
        Map<String, Object> source = queryOne("select * from DYN_DW_PLAN_ATTACHMENT where ID=?", attachmentId);
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN_ATTACHMENT(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "BUSINESS_ID,BUSINESS_TYPE,FILE_NAME,CONTENT_TYPE,FILE_SIZE,FILE_CONTENT) " +
                        "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                businessId, businessType, source.get("FILE_NAME"), source.get("CONTENT_TYPE"),
                source.get("FILE_SIZE"), source.get("FILE_CONTENT"));
        return id;
    }

    private Map<String, Object> feedbackDraft(String taskId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN_FEEDBACK where TASK_ID=? and CONFIRM_RESULT=? order by LAST_UPDATE_DATE desc, CREATION_DATE desc",
                taskId, DwWorkPlanConstants.FEEDBACK_DRAFT);
        return rows.isEmpty() ? null : rows.get(0);
    }

    private void upsertFeedbackDraft(String taskId, String content, String attachmentId, HttpServletRequest request) {
        if (StringUtils.isBlank(taskId)) {
            return;
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", taskId);
        Map<String, Object> draft = feedbackDraft(taskId);
        String effectiveAttachment = emptyToNull(attachmentId);
        if (StringUtils.isBlank(effectiveAttachment) && draft != null) {
            effectiveAttachment = emptyToNull(string(draft.get("ATTACHMENT_ID")));
        }
        if (draft == null) {
            String id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN_FEEDBACK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "TASK_ID,FEEDBACK_USER_ID,FEEDBACK_USER_NAME,FEEDBACK_CONTENT,FEEDBACK_TIME,ATTACHMENT_ID,CONFIRM_RESULT) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,null,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request), taskId,
                    string(task.get("RECEIVER_ID")), string(task.get("RECEIVER_NAME")), emptyToNull(content),
                    effectiveAttachment, DwWorkPlanConstants.FEEDBACK_DRAFT);
            bindAttachment(effectiveAttachment, id, "FEEDBACK_DRAFT");
        } else {
            String id = string(draft.get("ID"));
            jdbcTemplate.update("update DYN_DW_PLAN_FEEDBACK set FEEDBACK_USER_ID=?,FEEDBACK_USER_NAME=?,FEEDBACK_CONTENT=?,ATTACHMENT_ID=?,CONFIRM_RESULT=?," +
                            "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    string(task.get("RECEIVER_ID")), string(task.get("RECEIVER_NAME")), emptyToNull(content),
                    effectiveAttachment, DwWorkPlanConstants.FEEDBACK_DRAFT, loginUser(request), request.getRemoteAddr(), id);
            bindAttachment(effectiveAttachment, id, "FEEDBACK_DRAFT");
        }
    }

    private void notifyTaskReceiver(String taskId, String title, String content) {
        if (StringUtils.isBlank(taskId)) {
            return;
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", taskId);
        sendMessage(string(task.get("RECEIVER_ID")), title, content);
    }

    private void notifyParent(String taskId, String title, String content) {
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", taskId);
        String parentId = string(task.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN_TASK where ID=?", parentId);
        sendMessage(string(parent.get("RECEIVER_ID")), title, content);
    }

    private void sendMessage(String recvUser, String title, String content) {
        if (StringUtils.isBlank(recvUser)) {
            return;
        }
        try {
            jdbcTemplate.update("insert into SYS_MSG(ID,TITLE,CONTENT,MSG_TYPE,SEND_USER,RECV_USER,SEND_DATE) values(?,?,?,?,?,?,sysdate)",
                    ComUtil.getId(), title, content, "0", "1", recvUser);
        } catch (Exception ignored) {
            // Notification tables vary between PB deployments. Never fail the task flow for that.
        }
    }

    private Map<String, Object> queryOne(String sql, Object... args) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, args);
        if (rows.isEmpty()) {
            throw new IllegalArgumentException("\u6570\u636e\u4e0d\u5b58\u5728");
        }
        return rows.get(0);
    }

    private Map<String, Object> success() {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("flag", "success");
        return map;
    }

    private Map<String, Object> failure(String message) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("flag", "failure");
        map.put("errorMsg", message);
        return map;
    }

    private String loginUser(HttpServletRequest request) {
        return SessionHelper.getLoginSysUserId(request);
    }

    private String orgIdentity(HttpServletRequest request) {
        String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);
        return StringUtils.isBlank(orgIdentity) ? "ORG_ROOT" : orgIdentity;
    }

    private String userName(String userId) {
        if (StringUtils.isBlank(userId)) {
            return "";
        }
        try {
            SysUser user = sysUserAPI.getSysUserById(userId);
            if (user != null && StringUtils.isNotBlank(user.getName())) {
                return user.getName();
            }
        } catch (Exception ignored) {
        }
        return userId;
    }

    private String value(Map<String, String> p, String key) {
        String value = p.get(key);
        return value == null ? "" : value.trim();
    }

    private String defaultValue(String value, String fallback) {
        return StringUtils.isBlank(value) ? fallback : value;
    }

    private String emptyToNull(String value) {
        return StringUtils.isBlank(value) ? null : value;
    }

    private Integer number(String value) {
        if (StringUtils.isBlank(value)) {
            return null;
        }
        return Integer.valueOf(value);
    }

    private Date date(String value) {
        if (StringUtils.isBlank(value)) {
            return null;
        }
        try {
            return DATE_FORMAT.parse(value);
        } catch (ParseException e) {
            throw new IllegalArgumentException("Invalid date: " + value);
        }
    }

    private String dateString(Object value) {
        if (value instanceof Date) {
            return DATE_FORMAT.format((Date) value);
        }
        return value == null ? "" : String.valueOf(value);
    }

    private String string(Object value) {
        return value == null ? "" : String.valueOf(value);
    }
}
