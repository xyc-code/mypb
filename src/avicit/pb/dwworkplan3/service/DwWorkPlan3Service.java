package avicit.pb.dwworkplan3.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.pb.dwworkplan3.dto.DwWorkPlan3Constants;
import com.alibaba.fastjson.JSON;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DwWorkPlan3Service {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private SysUserAPI sysUserAPI;
    @Autowired
    private SwfUploadService swfUploadService;
    @Autowired
    private DwWorkPlan3PortalTodoService portalTodoService;

    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
    private static final String TASK_ATTACHMENT_ELEMENT_ID = "dwTaskAttachment";
    private static final String FEEDBACK_ATTACHMENT_ELEMENT_ID = "dwFeedbackAttachment";
    private static final String[] IMPORT_HEADERS = new String[]{"任务标题", "工作分类", "工作内容", "工作目标", "截止日期", "接收部门", "接收人姓名", "接收人登录名", "备注"};
    private static final String IMPORT_SHEET_NAME = "任务填写";
    private static final String RECEIVER_SHEET_NAME = "接收部门参考";
    private static final String LEADER_VIEW_ROLE_NAME = "党委一级管理员";

    public Map<String, Object> currentUser(HttpServletRequest request) {
        String userId = loginUser(request);
        List<Map<String, Object>> roles = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN3_PERSON_TREE where " + userMatchSql("USER_ID") + " and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                userId);
        boolean adminViewer = roles.isEmpty() && hasPlatformRole(userId, LEADER_VIEW_ROLE_NAME);
        Map<String, Object> result = success();
        result.put("userId", userId);
        result.put("userName", userName(userId));
        result.put("roles", roles);
        result.put("adminViewer", adminViewer);
        result.put("viewAll", adminViewer);
        return result;
    }

    public List<Map<String, Object>> listPersonTree(HttpServletRequest request) {
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        if (currentNode == null) {
            if (hasPlatformRole(userId, LEADER_VIEW_ROLE_NAME)) {
                return listPersonTree();
            }
            return Collections.emptyList();
        }
        if (DwWorkPlan3Constants.ROLE_STAFF.equals(string(currentNode.get("ROLE_CODE")))) {
            return Collections.emptyList();
        }
        if (DwWorkPlan3Constants.ROLE_PARTY.equals(string(currentNode.get("ROLE_CODE")))) {
            return jdbcTemplate.queryForList(
                    "select * from DYN_DW_PLAN3_PERSON_TREE where nvl(ENABLED,'Y')='Y' order by SORT_NO, CREATION_DATE");
        }
        List<String> subtreeIds = subtreeNodeIds(string(currentNode.get("ID")));
        if (subtreeIds.isEmpty()) {
            return Collections.emptyList();
        }
        StringBuilder sql = new StringBuilder("select * from DYN_DW_PLAN3_PERSON_TREE where nvl(ENABLED,'Y')='Y' and ID in (");
        appendPlaceholders(sql, subtreeIds.size());
        sql.append(") order by SORT_NO, CREATION_DATE");
        return jdbcTemplate.queryForList(sql.toString(), subtreeIds.toArray());
    }

    public List<Map<String, Object>> listPersonTree() {
        return jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN3_PERSON_TREE where nvl(ENABLED,'Y')='Y' order by SORT_NO, CREATION_DATE");
    }

    public Map<String, Object> savePerson(Map<String, String> p, HttpServletRequest request) {
        if (currentUserNode(request) == null) {
            return failure("\u5f53\u524d\u662f\u5168\u5c40\u67e5\u770b\u6a21\u5f0f\uff0c\u4e0d\u80fd\u7ef4\u62a4\u4eba\u5458\u6811");
        }
        ensurePersonUserColumnLength();
        String id = value(p, "id");
        String userId = normalizePersonList(value(p, "userId"));
        String userName = normalizePersonList(value(p, "userName"));
        String parentId = value(p, "parentId");
        String roleCode = value(p, "roleCode");
        String hierarchyError = validatePersonHierarchy(id, parentId, roleCode);
        if (StringUtils.isNotBlank(hierarchyError)) {
            return failure(hierarchyError);
        }
        if (!allowsMultiPerson(roleCode) && splitPersonList(userId).size() > 1) {
            return failure("\u515a\u59d4\u548c\u79d1\u5458\u8282\u70b9\u53ea\u80fd\u5173\u8054\u4e00\u4e2a\u7528\u6237\uff0c\u90e8\u95e8\u548c\u79d1\u5ba4\u8282\u70b9\u53ef\u4ee5\u5173\u8054\u591a\u4e2a\u7528\u6237");
        }
        if (StringUtils.isBlank(userName) && StringUtils.isNotBlank(userId)) {
            userName = userNamesForIds(userId);
        }
        String duplicateError = validateNoCrossLevelDuplicateUsers(id, roleCode, userId, userName);
        if (StringUtils.isNotBlank(duplicateError)) {
            return failure(duplicateError);
        }
        if (StringUtils.isBlank(id)) {
            id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN3_PERSON_TREE(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                    emptyToNull(parentId), value(p, "nodeName"), emptyToNull(userId), emptyToNull(userName),
                    roleCode, number(value(p, "sortNo")), defaultValue(value(p, "enabled"), "Y"),
                    emptyToNull(value(p, "remark")));
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN3_PERSON_TREE set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "PARENT_ID=?,NODE_NAME=?,USER_ID=?,USER_NAME=?,ROLE_CODE=?,SORT_NO=?,ENABLED=?,REMARK=? where ID=?",
                    loginUser(request), request.getRemoteAddr(), emptyToNull(parentId), value(p, "nodeName"),
                    emptyToNull(userId), emptyToNull(userName), roleCode, number(value(p, "sortNo")),
                    defaultValue(value(p, "enabled"), "Y"), emptyToNull(value(p, "remark")), id);
        }
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> disablePerson(String id, HttpServletRequest request) {
        if (currentUserNode(request) == null) {
            return failure("\u5f53\u524d\u662f\u5168\u5c40\u67e5\u770b\u6a21\u5f0f\uff0c\u4e0d\u80fd\u7ef4\u62a4\u4eba\u5458\u6811");
        }
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u8981\u5220\u9664\u7684\u8282\u70b9");
        }
        Integer childCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_PERSON_TREE where PARENT_ID=? and nvl(ENABLED,'Y')='Y'",
                Integer.class, id);
        if (childCount != null && childCount > 0) {
            return failure("\u8be5\u8282\u70b9\u4e0b\u8fd8\u6709\u5b50\u8282\u70b9\uff0c\u8bf7\u5148\u5220\u9664\u5b50\u8282\u70b9");
        }
        Integer taskCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PERSON_NODE_ID=? or DRAFT_DEPT_NODE_ID=?",
                Integer.class, id, id);
        if (taskCount != null && taskCount > 0) {
            return failure("\u8be5\u8282\u70b9\u5df2\u88ab\u4efb\u52a1\u5f15\u7528\uff0c\u4e0d\u80fd\u5220\u9664");
        }
        int deleted = jdbcTemplate.update("delete from DYN_DW_PLAN3_PERSON_TREE where ID=?", id);
        if (deleted == 0) {
            return failure("\u8282\u70b9\u5df2\u5220\u9664\u6216\u4e0d\u5b58\u5728\uff0c\u8bf7\u5237\u65b0\u5217\u8868");
        }
        return success();
    }

    public Map<String, Object> createBatch(String year, String quarter, HttpServletRequest request) {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u7ef4\u62a4\u6279\u6b21");
        }
        if (StringUtils.isBlank(year) || StringUtils.isBlank(quarter)) {
            return failure("\u5e74\u5ea6\u548c\u5b63\u5ea6\u4e0d\u80fd\u4e3a\u7a7a");
        }
        List<Map<String, Object>> exists = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN3_BATCH where PLAN_YEAR=? and QUARTER=?", number(year), quarter);
        if (!exists.isEmpty()) {
            Map<String, Object> result = success();
            result.put("id", exists.get(0).get("ID"));
            result.put("existing", true);
            return result;
        }
        String id = ComUtil.getId();
        String name = year + "/" + quarter.replaceAll("[^0-9]", "") + "\u5b63\u5ea6";
        jdbcTemplate.update("insert into DYN_DW_PLAN3_BATCH(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "PLAN_YEAR,QUARTER,BATCH_NAME,STATUS,REMARK) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                number(year), quarter, name, "ACTIVE", null);
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public List<Map<String, Object>> listBatches(HttpServletRequest request) {
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        boolean leaderViewer = currentNode == null && hasPlatformRole(userId, LEADER_VIEW_ROLE_NAME);
        StringBuilder countScope = new StringBuilder();
        List<Object> countArgs = new ArrayList<Object>();
        appendVisibleTaskScope(countScope, "t", currentNode, countArgs, leaderViewer);
        StringBuilder existsScope = new StringBuilder();
        List<Object> existsArgs = new ArrayList<Object>();
        appendVisibleTaskScope(existsScope, "t", currentNode, existsArgs, leaderViewer);
        String sql = "select b.*,(select count(1) from DYN_DW_PLAN3_TASK t where t.BATCH_ID=b.ID" + countScope +
                ") TASK_COUNT from DYN_DW_PLAN3_BATCH b where exists(select 1 from DYN_DW_PLAN3_TASK t where t.BATCH_ID=b.ID" + existsScope +
                ") order by b.PLAN_YEAR desc, b.QUARTER desc, b.CREATION_DATE desc";
        List<Object> args = new ArrayList<Object>();
        args.addAll(countArgs);
        args.addAll(existsArgs);
        return jdbcTemplate.queryForList(sql, args.toArray());
    }

    public Map<String, Object> deleteBatch(String id, HttpServletRequest request) {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u7ef4\u62a4\u6279\u6b21");
        }
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u6279\u6b21");
        }
        List<Map<String, Object>> feedbackIds = jdbcTemplate.queryForList(
                "select f.ID,f.ATTACHMENT_ID from DYN_DW_PLAN3_FEEDBACK f where f.TASK_ID in (select t.ID from DYN_DW_PLAN3_TASK t where t.BATCH_ID=?)",
                id);
        List<Map<String, Object>> taskIds = jdbcTemplate.queryForList(
                "select ID,ATTACHMENT_ID from DYN_DW_PLAN3_TASK where BATCH_ID=?", id);
        closePortalTodos(taskIdsFromRows(taskIds), request, "批次删除");
        jdbcTemplate.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where BATCH_ID=?)", id);
        jdbcTemplate.update("delete from DYN_DW_PLAN3_TASK where BATCH_ID=?", id);
        for (Map<String, Object> row : feedbackIds) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        for (Map<String, Object> row : taskIds) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        jdbcTemplate.update("delete from DYN_DW_PLAN3_BATCH where ID=?", id);
        return success();
    }

    public Map<String, Object> saveRootTask(Map<String, String> p, HttpServletRequest request) {
        ensureTaskWorkCategoryColumn();
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        if (currentNode == null) {
            return failure("\u5f53\u524d\u7528\u6237\u672a\u5728\u4eba\u5458\u6811\u4e2d\u914d\u7f6e\uff0c\u4e0d\u80fd\u65b0\u5efa\u4efb\u52a1");
        }
        String roleCode = string(currentNode.get("ROLE_CODE"));
        String taskLevel = taskLevelForRole(roleCode);
        if (StringUtils.isBlank(taskLevel)) {
            return failure("\u5f53\u524d\u4eba\u5458\u6811\u89d2\u8272\u4e0d\u80fd\u65b0\u5efa\u4efb\u52a1");
        }
        boolean staffTask = DwWorkPlan3Constants.ROLE_STAFF.equals(roleCode);
        String id = value(p, "id");
        String attachmentId = emptyToNull(value(p, "attachmentId"));
        Map<String, String> draftDept = staffTask ? emptyDraftReceiver() : draftDeptParams(p, request, currentNode);
        String nodeUserName = userNameFromPersonNode(currentNode, userId);
        String status = staffTask ? DwWorkPlan3Constants.STATUS_DOING : DwWorkPlan3Constants.STATUS_DRAFT;
        if (StringUtils.isBlank(id)) {
            id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN3_TASK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "BATCH_ID,PARENT_ID,ROOT_ID,TASK_LEVEL,TITLE,WORK_CATEGORY,CONTENT,TARGET_DESC,PLAN_DEADLINE,STATUS," +
                            "SENDER_ID,SENDER_NAME,RECEIVER_ID,RECEIVER_NAME,PERSON_NODE_ID,DRAFT_DEPT_NODE_ID,DRAFT_DEPT_USER_ID,DRAFT_DEPT_NAME,ATTACHMENT_ID,DISPATCH_TIME) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,sysdate)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                    value(p, "batchId"), null, id, taskLevel, value(p, "title"),
                    emptyToNull(value(p, "workCategory")), emptyToNull(value(p, "content")), emptyToNull(value(p, "targetDesc")), date(value(p, "planDeadline")),
                    status, userId, nodeUserName, userId, nodeUserName, string(currentNode.get("ID")),
                    draftDept.get("nodeId"), draftDept.get("userId"), draftDept.get("name"), attachmentId);
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN3_TASK set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?," +
                            "BATCH_ID=nvl(?,BATCH_ID),TITLE=?,WORK_CATEGORY=?,CONTENT=?,TARGET_DESC=?,PLAN_DEADLINE=?,DRAFT_DEPT_NODE_ID=?,DRAFT_DEPT_USER_ID=?,DRAFT_DEPT_NAME=?,ATTACHMENT_ID=? " +
                            "where ID=? and PARENT_ID is null and TASK_LEVEL=? and STATUS=? and RECEIVER_ID=? and (PERSON_NODE_ID=? or (PERSON_NODE_ID is null and TASK_LEVEL=?))",
                    userId, request.getRemoteAddr(), value(p, "batchId"), value(p, "title"), emptyToNull(value(p, "workCategory")), emptyToNull(value(p, "content")),
                    emptyToNull(value(p, "targetDesc")), date(value(p, "planDeadline")), draftDept.get("nodeId"), draftDept.get("userId"), draftDept.get("name"), attachmentId,
                    id, taskLevel, status, userId, string(currentNode.get("ID")), taskLevel);
        }
        bindAttachment(attachmentId, id, "ROOT_TASK", request);
        if (staffTask) {
            syncPortalTodo(id, request);
        }
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> directDispatchRoot(Map<String, String> p, HttpServletRequest request) {
        Map<String, Object> currentNode = currentUserNode(request);
        if (currentNode == null) {
            return failure("\u5f53\u524d\u7528\u6237\u672a\u5728\u4eba\u5458\u6811\u4e2d\u914d\u7f6e\uff0c\u4e0d\u80fd\u4e0b\u53d1\u4efb\u52a1");
        }
        if (DwWorkPlan3Constants.ROLE_STAFF.equals(string(currentNode.get("ROLE_CODE")))) {
            return failure("\u79d1\u5458\u81ea\u5efa\u4efb\u52a1\u9ed8\u8ba4\u7ed9\u81ea\u5df1\uff0c\u4e0d\u9700\u8981\u4e0b\u53d1");
        }
        if (StringUtils.isBlank(defaultValue(value(p, "draftDeptNodeId"), value(p, "personNodeId")))
                || StringUtils.isBlank(defaultValue(value(p, "draftDeptUserId"), value(p, "receiverId")))) {
            return failure("\u8bf7\u9009\u62e9\u63a5\u6536\u5bf9\u8c61");
        }
        Map<String, Object> saved = saveRootTask(p, request);
        if (!"success".equals(saved.get("flag"))) {
            return saved;
        }
        p.put("parentId", string(saved.get("id")));
        return dispatchChild(p, request);
    }

    @Transactional
    public Map<String, Object> batchDirectDispatch(String ids, HttpServletRequest request) {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u6279\u91cf\u4e0b\u53d1\u4efb\u52a1");
        }
        List<String> idList = splitPersonList(ids);
        if (idList.isEmpty()) {
            return failure("\u8bf7\u9009\u62e9\u8981\u4e0b\u53d1\u7684\u8349\u7a3f\u4efb\u52a1");
        }
        List<Map<String, Object>> tasks = new ArrayList<Map<String, Object>>();
        List<String> errors = new ArrayList<String>();
        for (String id : idList) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList("select * from DYN_DW_PLAN3_TASK where ID=?", id);
            if (rows.isEmpty()) {
                errors.add("\u4efb\u52a1" + id + "\u4e0d\u5b58\u5728");
                continue;
            }
            Map<String, Object> task = rows.get(0);
            String error = validateBatchDispatchTask(task, request);
            if (StringUtils.isNotBlank(error)) {
                errors.add("\u3010" + defaultValue(string(task.get("TITLE")), id) + "\u3011" + error);
                continue;
            }
            tasks.add(task);
        }
        if (!errors.isEmpty()) {
            Map<String, Object> result = failure("\u90e8\u5206\u4efb\u52a1\u4e0d\u80fd\u6279\u91cf\u4e0b\u53d1\uff1a" + limitedErrorText(errors));
            result.put("errors", errors);
            return result;
        }
        List<String> childIds = new ArrayList<String>();
        for (Map<String, Object> task : tasks) {
            Map<String, String> p = new HashMap<String, String>();
            p.put("parentId", string(task.get("ID")));
            p.put("personNodeId", string(task.get("DRAFT_DEPT_NODE_ID")));
            p.put("receiverId", string(task.get("DRAFT_DEPT_USER_ID")));
            Map<String, Object> dispatched = dispatchChild(p, request);
            if (!"success".equals(dispatched.get("flag"))) {
                throw new IllegalArgumentException("\u3010" + string(task.get("TITLE")) + "\u3011" + string(dispatched.get("errorMsg")));
            }
            childIds.add(string(dispatched.get("id")));
        }
        Map<String, Object> result = success();
        result.put("count", Integer.valueOf(childIds.size()));
        result.put("ids", childIds);
        return result;
    }

    public Map<String, Object> dispatchChild(Map<String, String> p, HttpServletRequest request) {
        ensureTaskWorkCategoryColumn();
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        if (currentNode == null) {
            return failure("\u8bf7\u5148\u5207\u6362\u5230\u4efb\u52a1\u5bf9\u5e94\u7684\u4eba\u5458\u6811\u8eab\u4efd");
        }
        String parentId = value(p, "parentId");
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", parentId);
        if (!userId.equals(string(parent.get("RECEIVER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u63a5\u6536\u4eba\u53ef\u4ee5\u7ee7\u7eed\u4e0b\u53d1\u8be5\u4efb\u52a1");
        }
        if (!taskMatchesCurrentNode(parent, currentNode)) {
            return failure("\u8bf7\u5207\u6362\u5230\u8be5\u4efb\u52a1\u5bf9\u5e94\u7684\u4eba\u5458\u6811\u8eab\u4efd\u540e\u518d\u64cd\u4f5c");
        }
        String parentLevel = string(parent.get("TASK_LEVEL"));
        String parentStatus = string(parent.get("STATUS"));
        boolean draftRootDispatch = StringUtils.isBlank(string(parent.get("PARENT_ID"))) && DwWorkPlan3Constants.STATUS_DRAFT.equals(parentStatus);
        if (!draftRootDispatch && !DwWorkPlan3Constants.STATUS_DOING.equals(parentStatus) && !DwWorkPlan3Constants.STATUS_RETURNED.equals(parentStatus)) {
            return failure("\u8bf7\u5148\u63a5\u6536\u4efb\u52a1\uff0c\u518d\u4e0b\u53d1");
        }
        Integer childCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=?", Integer.class, parentId);
        if (childCount != null && childCount > 0) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u7ecf\u4e0b\u53d1\u8fc7\uff0c\u4e0d\u80fd\u91cd\u590d\u4e0b\u53d1");
        }
        String nextLevel = DwWorkPlan3Constants.nextLevel(parentLevel);
        if (StringUtils.isBlank(nextLevel)) {
            return failure("\u79d1\u5458\u4efb\u52a1\u4e0d\u80fd\u7ee7\u7eed\u4e0b\u53d1\uff0c\u53ea\u80fd\u53cd\u9988");
        }
        String receiverId = value(p, "receiverId");
        String personNodeId = value(p, "personNodeId");
        Map<String, Object> receiverNode = validateDirectChildReceiver(currentNode, personNodeId, receiverId);
        Integer duplicateCount = jdbcTemplate.queryForObject(
                "select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=? and RECEIVER_ID=?",
                Integer.class, parentId, receiverId);
        if (duplicateCount != null && duplicateCount > 0) {
            return failure("\u540c\u4e00\u4efb\u52a1\u4e0d\u80fd\u91cd\u590d\u4e0b\u53d1\u7ed9\u540c\u4e00\u4e2a\u4eba");
        }
        String expectedRole = DwWorkPlan3Constants.nextRole(string(receiverNode.get("PARENT_ROLE_CODE")));
        if (StringUtils.isNotBlank(expectedRole) && !expectedRole.equals(string(receiverNode.get("ROLE_CODE")))) {
            return failure("\u53ea\u80fd\u4e0b\u53d1\u7ed9\u5f53\u524d\u4eba\u5458\u6811\u8282\u70b9\u7684\u76f4\u5c5e\u4e0b\u4e00\u7ea7");
        }
        String receiverName = userNameFromPersonNode(receiverNode, receiverId);
        String attachmentId = emptyToNull(value(p, "attachmentId"));
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN3_TASK(" +
                        "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                        "BATCH_ID,PARENT_ID,ROOT_ID,TASK_LEVEL,TITLE,WORK_CATEGORY,CONTENT,TARGET_DESC,PLAN_DEADLINE,STATUS," +
                        "SENDER_ID,SENDER_NAME,RECEIVER_ID,RECEIVER_NAME,PERSON_NODE_ID,ATTACHMENT_ID,DISPATCH_TIME) " +
                        "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,sysdate)",
                id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request),
                parent.get("BATCH_ID"), parentId, parent.get("ROOT_ID"), nextLevel,
                defaultValue(value(p, "title"), string(parent.get("TITLE"))),
                emptyToNull(defaultValue(value(p, "workCategory"), string(parent.get("WORK_CATEGORY")))),
                emptyToNull(defaultValue(value(p, "content"), string(parent.get("CONTENT")))),
                emptyToNull(defaultValue(value(p, "targetDesc"), string(parent.get("TARGET_DESC")))),
                date(defaultValue(value(p, "planDeadline"), dateString(parent.get("PLAN_DEADLINE")))),
                DwWorkPlan3Constants.STATUS_TODO, loginUser(request), userName(loginUser(request)), receiverId,
                receiverName, personNodeId, attachmentId);
        bindAttachment(attachmentId, id, "DISPATCH_TASK", request);
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate where ID=?",
                DwWorkPlan3Constants.STATUS_WAIT_CHILD, loginUser(request), parentId);
        sendMessage(receiverId, "\u5de5\u4f5c\u8ba1\u5212\u65b0\u4efb\u52a1",
                "\u60a8\u6536\u5230\u65b0\u7684\u5de5\u4f5c\u8ba1\u5212\u4efb\u52a1\uff1a" + defaultValue(value(p, "title"), string(parent.get("TITLE"))));
        syncPortalTodo(parentId, request);
        syncPortalTodo(id, request);
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> takeBackTask(String id, HttpServletRequest request) {
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u8981\u62ff\u56de\u7684\u4efb\u52a1");
        }
        List<Map<String, Object>> taskRows = jdbcTemplate.queryForList("select * from DYN_DW_PLAN3_TASK where ID=?", id);
        if (taskRows.isEmpty()) {
            return failure("\u4efb\u52a1\u5df2\u5220\u9664\u6216\u4e0d\u5b58\u5728\uff0c\u8bf7\u5237\u65b0\u5217\u8868");
        }
        Map<String, Object> task = taskRows.get(0);
        if (!loginUser(request).equals(string(task.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u62ff\u56de\u8be5\u4efb\u52a1");
        }
        if (!DwWorkPlan3Constants.STATUS_TODO.equals(string(task.get("STATUS")))) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u88ab\u63a5\u6536\uff0c\u4e0d\u80fd\u62ff\u56de");
        }
        String parentId = string(task.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return failure("\u6839\u4efb\u52a1\u4e0d\u80fd\u62ff\u56de");
        }
        deleteAttachment(string(task.get("ATTACHMENT_ID")));
        jdbcTemplate.update("delete from DYN_DW_PLAN3_TASK where ID=? and SENDER_ID=? and STATUS=?",
                id, loginUser(request), DwWorkPlan3Constants.STATUS_TODO);
        refreshParentStatusAfterChildRemoval(parentId, loginUser(request), request.getRemoteAddr());
        closePortalTodo(id, request, "任务拿回");
        syncPortalTodo(parentId, request);
        Map<String, Object> result = success();
        result.put("parentId", parentId);
        return result;
    }

    public Map<String, Object> deleteTask(String id, HttpServletRequest request) {
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u8981\u5220\u9664\u7684\u4efb\u52a1");
        }
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u5220\u9664\u4efb\u52a1");
        }
        List<Map<String, Object>> taskRows = jdbcTemplate.queryForList("select * from DYN_DW_PLAN3_TASK where ID=?", id);
        if (taskRows.isEmpty()) {
            return failure("\u4efb\u52a1\u5df2\u5220\u9664\u6216\u4e0d\u5b58\u5728\uff0c\u8bf7\u5237\u65b0\u5217\u8868");
        }
        Map<String, Object> task = taskRows.get(0);
        String userId = loginUser(request);
        List<String> taskIds = taskSubtreeIds(id);
        if (taskIds.isEmpty()) {
            return failure("\u4efb\u52a1\u5df2\u5220\u9664\u6216\u4e0d\u5b58\u5728\uff0c\u8bf7\u5237\u65b0\u5217\u8868");
        }
        StringBuilder placeholders = new StringBuilder();
        appendPlaceholders(placeholders, taskIds.size());
        List<Map<String, Object>> feedbackRows = jdbcTemplate.queryForList(
                "select ATTACHMENT_ID from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (" + placeholders + ")",
                taskIds.toArray());
        List<Map<String, Object>> taskAttachmentRows = jdbcTemplate.queryForList(
                "select ATTACHMENT_ID from DYN_DW_PLAN3_TASK where ID in (" + placeholders + ")",
                taskIds.toArray());
        jdbcTemplate.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (" + placeholders + ")", taskIds.toArray());
        jdbcTemplate.update("delete from DYN_DW_PLAN3_TASK where ID in (" + placeholders + ")", taskIds.toArray());
        closePortalTodos(taskIds, request, "任务删除");
        for (Map<String, Object> row : feedbackRows) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        for (Map<String, Object> row : taskAttachmentRows) {
            deleteAttachment(string(row.get("ATTACHMENT_ID")));
        }
        String parentId = string(task.get("PARENT_ID"));
        if (StringUtils.isNotBlank(parentId)) {
            refreshParentStatusAfterChildRemoval(parentId, userId, request.getRemoteAddr());
            syncPortalTodo(parentId, request);
        }
        return success();
    }

    public Map<String, Object> acceptTask(String id, HttpServletRequest request) {
        if (StringUtils.isBlank(id)) {
            return failure("\u8bf7\u9009\u62e9\u4efb\u52a1");
        }
        int updated = jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,ACCEPT_TIME=sysdate,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=? and RECEIVER_ID=? and STATUS=?",
                DwWorkPlan3Constants.STATUS_DOING, loginUser(request), request.getRemoteAddr(), id, loginUser(request),
                DwWorkPlan3Constants.STATUS_TODO);
        if (updated == 0) {
            return failure("\u8be5\u4efb\u52a1\u5df2\u63a5\u6536\u6216\u5f53\u524d\u7528\u6237\u65e0\u6743\u63a5\u6536");
        }
        syncPortalTodo(id, request);
        return success();
    }

    public Map<String, Object> submitFeedback(Map<String, String> p, HttpServletRequest request) {
        String taskId = value(p, "taskId");
        if (StringUtils.isBlank(taskId)) {
            return failure("\u8bf7\u9009\u62e9\u4efb\u52a1");
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", taskId);
        if (!loginUser(request).equals(string(task.get("RECEIVER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u63a5\u6536\u4eba\u53ef\u4ee5\u63d0\u4ea4\u53cd\u9988");
        }
        String status = string(task.get("STATUS"));
        if (DwWorkPlan3Constants.STATUS_PENDING_CONFIRM.equals(status)) {
            return failure("\u53cd\u9988\u5df2\u63d0\u4ea4\uff0c\u8bf7\u7b49\u5f85\u4e0a\u7ea7\u786e\u8ba4");
        }
        if (DwWorkPlan3Constants.STATUS_COMPLETED.equals(status)) {
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
        if (draft != null && !hasFeedbackHistory(taskId)) {
            jdbcTemplate.update("update DYN_DW_PLAN3_FEEDBACK set FEEDBACK_USER_ID=?,FEEDBACK_USER_NAME=?,FEEDBACK_CONTENT=?,FEEDBACK_TIME=sysdate,ATTACHMENT_ID=?,CONFIRM_RESULT=?," +
                            "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    loginUser(request), userName(loginUser(request)), emptyToNull(feedbackContent), attachmentId,
                    DwWorkPlan3Constants.FEEDBACK_PENDING, loginUser(request), request.getRemoteAddr(), id);
        } else {
            id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN3_FEEDBACK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "TASK_ID,FEEDBACK_USER_ID,FEEDBACK_USER_NAME,FEEDBACK_CONTENT,FEEDBACK_TIME,ATTACHMENT_ID,CONFIRM_RESULT) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,sysdate,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request), taskId,
                    loginUser(request), userName(loginUser(request)), emptyToNull(feedbackContent),
                    attachmentId, DwWorkPlan3Constants.FEEDBACK_PENDING);
        }
        bindAttachment(attachmentId, id, "FEEDBACK");
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.STATUS_PENDING_CONFIRM, loginUser(request), request.getRemoteAddr(), taskId);
        notifyParent(taskId, "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u5f85\u786e\u8ba4", "\u4e0b\u7ea7\u5df2\u63d0\u4ea4\u53cd\u9988\uff0c\u8bf7\u53ca\u65f6\u786e\u8ba4\u3002");
        syncPortalTodo(taskId, request);
        Map<String, Object> result = success();
        result.put("id", id);
        return result;
    }

    public Map<String, Object> confirmFeedback(String feedbackId, HttpServletRequest request) {
        Map<String, Object> feedback = queryOne("select f.*,t.SENDER_ID,t.PARENT_ID,t.TITLE from DYN_DW_PLAN3_FEEDBACK f join DYN_DW_PLAN3_TASK t on f.TASK_ID=t.ID where f.ID=?", feedbackId);
        String taskId = string(feedback.get("TASK_ID"));
        if (!loginUser(request).equals(string(feedback.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u786e\u8ba4\u53cd\u9988");
        }
        if (!DwWorkPlan3Constants.FEEDBACK_PENDING.equals(string(feedback.get("CONFIRM_RESULT")))) {
            return failure("\u8be5\u53cd\u9988\u5df2\u7ecf\u5904\u7406\uff0c\u4e0d\u80fd\u91cd\u590d\u786e\u8ba4");
        }
        String completeDetail = string(feedback.get("FEEDBACK_CONTENT"));
        jdbcTemplate.update("update DYN_DW_PLAN3_FEEDBACK set CONFIRM_RESULT=?,CONFIRM_USER_ID=?,CONFIRM_USER_NAME=?,CONFIRM_TIME=sysdate," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.FEEDBACK_CONFIRMED, loginUser(request), userName(loginUser(request)), loginUser(request),
                request.getRemoteAddr(), feedbackId);
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,COMPLETE_TIME=sysdate,COMPLETE_DETAIL=?,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.STATUS_COMPLETED, emptyToNull(completeDetail), loginUser(request), request.getRemoteAddr(), taskId);
        syncParentAfterChildDone(taskId, emptyToNull(completeDetail), string(feedback.get("ATTACHMENT_ID")), request);
        syncPortalTodo(taskId, request);
        syncPortalTodo(string(feedback.get("PARENT_ID")), request);
        return success();
    }

    public Map<String, Object> returnFeedback(String feedbackId, String reason, HttpServletRequest request) {
        Map<String, Object> feedback = queryOne("select f.*,t.SENDER_ID,t.PARENT_ID,t.TITLE from DYN_DW_PLAN3_FEEDBACK f join DYN_DW_PLAN3_TASK t on f.TASK_ID=t.ID where f.ID=?", feedbackId);
        String taskId = string(feedback.get("TASK_ID"));
        if (!loginUser(request).equals(string(feedback.get("SENDER_ID")))) {
            return failure("\u53ea\u6709\u4efb\u52a1\u4e0b\u53d1\u4eba\u53ef\u4ee5\u9000\u56de\u53cd\u9988");
        }
        if (!DwWorkPlan3Constants.FEEDBACK_PENDING.equals(string(feedback.get("CONFIRM_RESULT")))) {
            return failure("\u8be5\u53cd\u9988\u5df2\u7ecf\u5904\u7406\uff0c\u4e0d\u80fd\u91cd\u590d\u9000\u56de");
        }
        if (StringUtils.isBlank(reason)) {
            return failure("\u8bf7\u586b\u5199\u4e0d\u901a\u8fc7\u539f\u56e0");
        }
        jdbcTemplate.update("update DYN_DW_PLAN3_FEEDBACK set CONFIRM_RESULT=?,RETURN_REASON=?,CONFIRM_USER_ID=?,CONFIRM_USER_NAME=?,CONFIRM_TIME=sysdate," +
                        "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.FEEDBACK_RETURNED, emptyToNull(reason), loginUser(request), userName(loginUser(request)),
                loginUser(request), request.getRemoteAddr(), feedbackId);
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,RETURN_REASON=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.STATUS_RETURNED, emptyToNull(reason), loginUser(request), request.getRemoteAddr(), taskId);
        syncParentAfterChildReturned(taskId, request);
        sendMessage(string(feedback.get("FEEDBACK_USER_ID")), "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u672a\u901a\u8fc7",
                defaultValue(reason, "\u53cd\u9988\u672a\u901a\u8fc7\uff0c\u8bf7\u4fee\u6539\u540e\u91cd\u65b0\u63d0\u4ea4\u3002"));
        syncPortalTodo(taskId, request);
        syncPortalTodo(string(feedback.get("PARENT_ID")), request);
        return success();
    }

    public List<Map<String, Object>> listTasks(HttpServletRequest request, String batchId, String status) {
        return listTasks(request, batchId, null, null, status);
    }

    public List<Map<String, Object>> listTasks(HttpServletRequest request, String batchId, String year, String quarter, String status) {
        String userId = loginUser(request);
        StringBuilder sql = new StringBuilder("select t.*," +
                "(select dbms_lob.substr(f.FEEDBACK_CONTENT,4000,1) from DYN_DW_PLAN3_FEEDBACK f where f.TASK_ID=t.ID and f.CONFIRM_RESULT=? and rownum=1) FEEDBACK_DRAFT_CONTENT," +
                "(select f.ATTACHMENT_ID from DYN_DW_PLAN3_FEEDBACK f where f.TASK_ID=t.ID and f.CONFIRM_RESULT=? and rownum=1) FEEDBACK_DRAFT_ATTACHMENT_ID," +
                "(select p.ID from DYN_DW_PLAN3_TASK p where p.ID=t.PARENT_ID) PARENT_TASK_ID," +
                "(select p.ATTACHMENT_ID from DYN_DW_PLAN3_TASK p where p.ID=t.PARENT_ID) PARENT_ATTACHMENT_ID," +
                "case when exists(select 1 from DYN_DW_PLAN3_TASK p where p.ID=t.PARENT_ID and p.ATTACHMENT_ID is not null) then 'Y' else 'N' end HAS_PARENT_ATTACHMENT," +
                "(select count(1) from DYN_DW_PLAN3_TASK c where c.PARENT_ID=t.ID) CHILD_COUNT," +
                "(select count(1) from DYN_DW_PLAN3_TASK c where c.PARENT_ID=t.ID and c.STATUS<>?) CHILD_OPEN_COUNT," +
                "case when t.PLAN_DEADLINE<sysdate and t.STATUS<>? then 'Y' else 'N' end OVERDUE," +
                "case when t.RECEIVER_ID=? and t.STATUS in (?,?,?) then 'Y' when t.SENDER_ID=? and t.STATUS=? then 'Y' else 'N' end NOTICE_FLAG " +
                "from DYN_DW_PLAN3_TASK t where 1=1");
        List<Object> args = new ArrayList<Object>();
        args.add(DwWorkPlan3Constants.FEEDBACK_DRAFT);
        args.add(DwWorkPlan3Constants.FEEDBACK_DRAFT);
        args.add(DwWorkPlan3Constants.STATUS_COMPLETED);
        args.add(DwWorkPlan3Constants.STATUS_COMPLETED);
        args.add(userId);
        args.add(DwWorkPlan3Constants.STATUS_TODO);
        args.add(DwWorkPlan3Constants.STATUS_DOING);
        args.add(DwWorkPlan3Constants.STATUS_RETURNED);
        args.add(userId);
        args.add(DwWorkPlan3Constants.STATUS_PENDING_CONFIRM);
        if (StringUtils.isNotBlank(batchId)) {
            sql.append(" and t.BATCH_ID=?");
            args.add(batchId);
        } else if (StringUtils.isNotBlank(year) && StringUtils.isNotBlank(quarter)) {
            sql.append(" and t.BATCH_ID in (select b.ID from DYN_DW_PLAN3_BATCH b where b.PLAN_YEAR=? and b.QUARTER=?)");
            args.add(number(year));
            args.add(quarter);
        }
        if (StringUtils.isNotBlank(status)) {
            sql.append(" and t.STATUS=?");
            args.add(status);
        }
        Map<String, Object> currentNode = currentUserNode(request);
        boolean leaderViewer = currentNode == null && hasPlatformRole(userId, LEADER_VIEW_ROLE_NAME);
        if (currentNode == null && !leaderViewer) {
            sql.append(" and 1=0");
        } else if (currentNode != null && !DwWorkPlan3Constants.ROLE_PARTY.equals(string(currentNode.get("ROLE_CODE")))) {
            List<String> subtreeIds = subtreeNodeIds(string(currentNode.get("ID")));
            if (subtreeIds.isEmpty()) {
                return Collections.emptyList();
            }
            sql.append(" and t.PERSON_NODE_ID in (");
            appendPlaceholders(sql, subtreeIds.size());
            sql.append(")");
            args.addAll(subtreeIds);
        }
        sql.append(" order by nvl((select r.CREATION_DATE from DYN_DW_PLAN3_TASK r where r.ID=t.ROOT_ID),t.CREATION_DATE) desc," +
                " t.ROOT_ID," +
                " case t.TASK_LEVEL when ? then 1 when ? then 2 when ? then 3 when ? then 4 else 9 end," +
                " t.CREATION_DATE desc");
        args.add(DwWorkPlan3Constants.LEVEL_PARTY);
        args.add(DwWorkPlan3Constants.LEVEL_DEPT);
        args.add(DwWorkPlan3Constants.LEVEL_OFFICE);
        args.add(DwWorkPlan3Constants.LEVEL_STAFF);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql.toString(), args.toArray());
        enrichTaskAttachmentInfo(rows);
        return rows;
    }

    public List<Map<String, Object>> listFeedback(String taskId, HttpServletRequest request) {
        if (StringUtils.isBlank(taskId)) {
            return Collections.emptyList();
        }
        List<String> taskIds = taskSubtreeIds(taskId);
        if (taskIds.isEmpty()) {
            return Collections.emptyList();
        }
        StringBuilder placeholders = new StringBuilder();
        appendPlaceholders(placeholders, taskIds.size());
        List<Object> args = new ArrayList<Object>();
        args.add(loginUser(request));
        args.addAll(taskIds);
        args.add(DwWorkPlan3Constants.FEEDBACK_DRAFT);
        args.add(DwWorkPlan3Constants.LEVEL_PARTY);
        args.add(DwWorkPlan3Constants.LEVEL_DEPT);
        args.add(DwWorkPlan3Constants.LEVEL_OFFICE);
        args.add(DwWorkPlan3Constants.LEVEL_STAFF);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select f.*,t.TITLE TASK_TITLE,t.TASK_LEVEL TASK_LEVEL,t.SENDER_ID TASK_SENDER_ID,t.RECEIVER_ID TASK_RECEIVER_ID,t.COMPLETE_TIME TASK_COMPLETE_TIME," +
                        "case when t.SENDER_ID=? then 'Y' else 'N' end CAN_CONFIRM " +
                        "from DYN_DW_PLAN3_FEEDBACK f join DYN_DW_PLAN3_TASK t on f.TASK_ID=t.ID " +
                        "where f.TASK_ID in (" + placeholders + ") and nvl(f.CONFIRM_RESULT,'PENDING')<>? " +
                        "order by case t.TASK_LEVEL when ? then 1 when ? then 2 when ? then 3 when ? then 4 else 9 end, f.FEEDBACK_TIME, f.CREATION_DATE",
                args.toArray());
        enrichFeedbackAttachmentInfo(rows);
        return rows;
    }

    public Map<String, Object> uploadAttachment(MultipartFile file, String businessType, HttpServletRequest request) throws IOException {
        if (file == null || file.isEmpty()) {
            return failure("\u8bf7\u9009\u62e9\u9644\u4ef6");
        }
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN3_ATTACHMENT(" +
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
        return queryOne("select * from DYN_DW_PLAN3_ATTACHMENT where ID=?", id);
    }

    public List<Map<String, Object>> listReceivers(HttpServletRequest request) {
        Map<String, Object> node = currentUserNode(request);
        if (node == null) {
            return Collections.emptyList();
        }
        String nextRole = DwWorkPlan3Constants.nextRole(string(node.get("ROLE_CODE")));
        if (StringUtils.isBlank(nextRole)) {
            return Collections.emptyList();
        }
        return jdbcTemplate.queryForList("select * from DYN_DW_PLAN3_PERSON_TREE where PARENT_ID=? and ROLE_CODE=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                node.get("ID"), nextRole);
    }

    public void downloadImportTemplate(HttpServletResponse response, HttpServletRequest request) throws IOException {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            response.reset();
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.setContentType("text/plain;charset=UTF-8");
            response.getWriter().write("只有党委计划下发者可以下载批量导入模板");
            return;
        }
        XSSFWorkbook workbook = new XSSFWorkbook();
        Sheet taskSheet = workbook.createSheet(IMPORT_SHEET_NAME);
        Row header = taskSheet.createRow(0);
        for (int i = 0; i < IMPORT_HEADERS.length; i++) {
            header.createCell(i).setCellValue(IMPORT_HEADERS[i]);
            taskSheet.setColumnWidth(i, i == 0 ? 9000 : 5200);
        }
        CellStyle dateStyle = workbook.createCellStyle();
        DataFormat dataFormat = workbook.createDataFormat();
        dateStyle.setDataFormat(dataFormat.getFormat("yyyy-mm-dd"));
        taskSheet.setDefaultColumnStyle(4, dateStyle);

        Sheet receiverSheet = workbook.createSheet(RECEIVER_SHEET_NAME);
        Row receiverHeader = receiverSheet.createRow(0);
        String[] receiverHeaders = new String[]{"接收部门", "接收部门节点ID", "姓名", "登录名"};
        for (int i = 0; i < receiverHeaders.length; i++) {
            receiverHeader.createCell(i).setCellValue(receiverHeaders[i]);
            receiverSheet.setColumnWidth(i, i == 1 ? 9000 : 6800);
        }
        int rowIndex = 1;
        for (Map<String, Object> receiver : listReceivers(request)) {
            List<String> userIds = splitPersonList(string(receiver.get("USER_ID")));
            List<String> userNames = splitPersonList(string(receiver.get("USER_NAME")));
            if (userIds.isEmpty()) {
                Row row = receiverSheet.createRow(rowIndex++);
                row.createCell(0).setCellValue(string(receiver.get("NODE_NAME")));
                row.createCell(1).setCellValue(string(receiver.get("ID")));
                continue;
            }
            for (int i = 0; i < userIds.size(); i++) {
                String userId = userIds.get(i);
                Row row = receiverSheet.createRow(rowIndex++);
                row.createCell(0).setCellValue(string(receiver.get("NODE_NAME")));
                row.createCell(1).setCellValue(string(receiver.get("ID")));
                row.createCell(2).setCellValue(i < userNames.size() && StringUtils.isNotBlank(userNames.get(i)) ? userNames.get(i) : userName(userId));
                row.createCell(3).setCellValue(userLoginName(userId));
            }
        }

        String fileName = URLEncoder.encode("党委计划3.0导入模板.xlsx", "UTF-8").replace("+", "%20");
        response.reset();
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"; filename*=UTF-8''" + fileName);
        OutputStream out = response.getOutputStream();
        workbook.write(out);
        out.flush();
    }

    public Map<String, Object> previewImport(MultipartFile file, String year, String quarter, HttpServletRequest request) throws Exception {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("只有党委计划下发者可以使用批量导入");
        }
        String periodError = validateImportPeriod(year, quarter);
        if (StringUtils.isNotBlank(periodError)) {
            return failure(periodError);
        }
        if (file == null || file.isEmpty()) {
            return failure("请选择要导入的 Excel 文件");
        }
        InputStream in = file.getInputStream();
        try {
            Workbook workbook = WorkbookFactory.create(in);
            Sheet sheet = workbook.getNumberOfSheets() == 0 ? null : workbook.getSheetAt(0);
            if (sheet == null) {
                return failure("Excel 文件没有可读取的工作表");
            }
            String headerError = validateImportHeaders(sheet.getRow(0));
            if (StringUtils.isNotBlank(headerError)) {
                return failure(headerError);
            }
            List<Map<String, String>> rows = readImportRows(sheet);
            Map<String, Object> result = validateImportRows(rows, request);
            result.put("year", year);
            result.put("quarter", quarter);
            return result;
        } finally {
            in.close();
        }
    }

    @Transactional
    public Map<String, Object> saveImportDrafts(String rowsJson, String year, String quarter, HttpServletRequest request) {
        return persistImportRows(rowsJson, year, quarter, request, false);
    }

    @Transactional
    public Map<String, Object> directDispatchImport(String rowsJson, String year, String quarter, HttpServletRequest request) {
        return persistImportRows(rowsJson, year, quarter, request, true);
    }

    private Map<String, Object> persistImportRows(String rowsJson, String year, String quarter, HttpServletRequest request, boolean directDispatch) {
        if (!hasRole(loginUser(request), DwWorkPlan3Constants.ROLE_PARTY)) {
            return failure("只有党委计划下发者可以使用批量导入");
        }
        String periodError = validateImportPeriod(year, quarter);
        if (StringUtils.isNotBlank(periodError)) {
            return failure(periodError);
        }
        List<Map<String, String>> rows = parseImportRows(rowsJson);
        if (rows.isEmpty()) {
            return failure("没有可保存的导入行");
        }
        Map<String, Object> checked = validateImportRows(rows, request);
        Integer errorCount = (Integer) checked.get("errorCount");
        if (errorCount != null && errorCount > 0) {
            checked.put("flag", "failure");
            checked.put("errorMsg", "导入数据未通过校验，请重新预览后再操作");
            return checked;
        }
        Map<String, Object> batch = createBatch(year, quarter, request);
        if (!"success".equals(batch.get("flag"))) {
            return batch;
        }
        String batchId = string(batch.get("id"));
        List<Map<String, Object>> checkedRows = (List<Map<String, Object>>) checked.get("rows");
        List<String> createdIds = new ArrayList<String>();
        for (Map<String, Object> row : checkedRows) {
            Map<String, String> taskParams = importTaskParams(row, batchId);
            Map<String, Object> saved = directDispatch ? directDispatchRoot(taskParams, request) : saveRootTask(taskParams, request);
            if (!"success".equals(saved.get("flag"))) {
                throw new IllegalArgumentException("第" + string(row.get("rowNumber")) + "行处理失败：" + string(saved.get("errorMsg")));
            }
            createdIds.add(string(saved.get("id")));
        }
        Map<String, Object> result = success();
        result.put("count", Integer.valueOf(createdIds.size()));
        result.put("ids", createdIds);
        result.put("batchId", batchId);
        return result;
    }

    private String validateImportPeriod(String year, String quarter) {
        if (StringUtils.isBlank(year) || StringUtils.isBlank(quarter)) {
            return "请选择导入年度和季度";
        }
        try {
            Integer.valueOf(year);
        } catch (Exception ex) {
            return "导入年度必须是有效数字";
        }
        if (!"Q1".equals(quarter) && !"Q2".equals(quarter) && !"Q3".equals(quarter) && !"Q4".equals(quarter)) {
            return "导入季度不正确";
        }
        return "";
    }

    private String validateImportHeaders(Row header) {
        if (header == null) {
            return "Excel 第一行必须是导入模板表头";
        }
        for (int i = 0; i < IMPORT_HEADERS.length; i++) {
            if (!IMPORT_HEADERS[i].equals(cellText(header.getCell(i)))) {
                return "Excel 表头不正确，请使用下载的导入模板";
            }
        }
        return "";
    }

    private List<Map<String, String>> readImportRows(Sheet sheet) {
        List<Map<String, String>> rows = new ArrayList<Map<String, String>>();
        int last = sheet.getLastRowNum();
        for (int i = 1; i <= last; i++) {
            Row excelRow = sheet.getRow(i);
            if (excelRow == null || importRowBlank(excelRow)) {
                continue;
            }
            Map<String, String> row = new HashMap<String, String>();
            row.put("rowNumber", String.valueOf(i + 1));
            row.put("title", cellText(excelRow.getCell(0)));
            row.put("workCategory", cellText(excelRow.getCell(1)));
            row.put("content", cellText(excelRow.getCell(2)));
            row.put("targetDesc", cellText(excelRow.getCell(3)));
            row.put("planDeadline", cellDateText(excelRow.getCell(4)));
            row.put("deptName", cellText(excelRow.getCell(5)));
            row.put("receiverName", cellText(excelRow.getCell(6)));
            row.put("receiverLogin", cellText(excelRow.getCell(7)));
            row.put("remark", cellText(excelRow.getCell(8)));
            rows.add(row);
        }
        return rows;
    }

    private boolean importRowBlank(Row row) {
        for (int i = 0; i < IMPORT_HEADERS.length; i++) {
            if (StringUtils.isNotBlank(cellText(row.getCell(i)))) {
                return false;
            }
        }
        return true;
    }

    private Map<String, Object> validateImportRows(List<Map<String, String>> sourceRows, HttpServletRequest request) {
        Map<String, Object> result = success();
        List<Map<String, String>> receivers = receiverChoices(listReceivers(request));
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        int errorCount = 0;
        int warningCount = 0;
        for (Map<String, String> source : sourceRows) {
            Map<String, Object> row = new HashMap<String, Object>();
            List<String> errors = new ArrayList<String>();
            List<String> warnings = new ArrayList<String>();
            String title = value(source, "title");
            String workCategory = value(source, "workCategory");
            String content = value(source, "content");
            String targetDesc = value(source, "targetDesc");
            String planDeadline = normalizeImportDate(value(source, "planDeadline"));
            String deptInput = defaultValue(value(source, "deptNodeId"), value(source, "deptName"));
            String receiverName = value(source, "receiverName");
            String receiverLogin = value(source, "receiverLogin");
            String remark = value(source, "remark");

            row.put("rowNumber", defaultValue(value(source, "rowNumber"), String.valueOf(rows.size() + 2)));
            row.put("title", title);
            row.put("workCategory", workCategory);
            row.put("content", content);
            row.put("targetDesc", targetDesc);
            row.put("planDeadline", planDeadline);
            row.put("deptName", value(source, "deptName"));
            row.put("deptNodeId", value(source, "deptNodeId"));
            row.put("receiverName", receiverName);
            row.put("receiverLogin", receiverLogin);
            row.put("remark", remark);

            if (StringUtils.isBlank(title)) {
                errors.add("任务标题不能为空");
            }
            if (StringUtils.isBlank(value(source, "planDeadline"))) {
                errors.add("截止日期不能为空");
            } else if (StringUtils.isBlank(planDeadline)) {
                errors.add("截止日期必须是有效日期");
            }
            if (StringUtils.isBlank(deptInput)) {
                errors.add("接收部门不能为空");
            } else {
                fillImportReceiver(row, receivers, deptInput, receiverLogin, errors, warnings);
            }

            if (errors.isEmpty()) {
                row.put("status", warnings.isEmpty() ? "OK" : "WARN");
                row.put("importable", "Y");
                if (!warnings.isEmpty()) {
                    warningCount++;
                }
            } else {
                row.put("status", "ERROR");
                row.put("importable", "N");
                errorCount++;
            }
            row.put("messages", errors);
            row.put("warnings", warnings);
            rows.add(row);
        }
        result.put("rows", rows);
        result.put("total", Integer.valueOf(rows.size()));
        result.put("validCount", Integer.valueOf(rows.size() - errorCount));
        result.put("importableCount", Integer.valueOf(rows.size() - errorCount));
        result.put("errorCount", Integer.valueOf(errorCount));
        result.put("warningCount", Integer.valueOf(warningCount));
        result.put("blockedCount", Integer.valueOf(errorCount));
        return result;
    }

    private void fillImportReceiver(Map<String, Object> row, List<Map<String, String>> receivers, String deptInput,
                                    String receiverLogin, List<String> errors, List<String> warnings) {
        List<String> nodeIds = new ArrayList<String>();
        for (Map<String, String> receiver : receivers) {
            String nodeId = receiver.get("nodeId");
            String nodeName = receiver.get("nodeName");
            if ((deptInput.equals(nodeId) || deptInput.equals(nodeName)) && !nodeIds.contains(nodeId)) {
                nodeIds.add(nodeId);
            }
        }
        if (nodeIds.isEmpty()) {
            errors.add("接收部门不在当前党委直属部门中");
            return;
        }
        if (nodeIds.size() > 1) {
            errors.add("接收部门名称重复，请填写接收部门参考页中的节点ID");
            return;
        }
        List<Map<String, String>> nodeUsers = new ArrayList<Map<String, String>>();
        for (Map<String, String> receiver : receivers) {
            if (nodeIds.get(0).equals(receiver.get("nodeId"))) {
                nodeUsers.add(receiver);
            }
        }
        if (nodeUsers.isEmpty() || StringUtils.isBlank(nodeUsers.get(0).get("userId"))) {
            errors.add("接收部门没有绑定平台用户");
            return;
        }
        Map<String, String> matched = null;
        if (StringUtils.isBlank(receiverLogin)) {
            if (nodeUsers.size() == 1) {
                matched = nodeUsers.get(0);
                warnings.add("已按单用户部门自动匹配接收人：" + matched.get("userName"));
            } else {
                errors.add("该接收部门绑定多个用户，必须填写接收人登录名");
                return;
            }
        } else {
            for (Map<String, String> user : nodeUsers) {
                if (receiverLogin.equalsIgnoreCase(user.get("loginName"))) {
                    matched = user;
                    break;
                }
            }
            if (matched == null) {
                errors.add("接收人登录名不属于该接收部门");
                return;
            }
        }
        row.put("deptName", matched.get("nodeName"));
        row.put("deptNodeId", matched.get("nodeId"));
        row.put("personNodeId", matched.get("nodeId"));
        row.put("receiverId", matched.get("userId"));
        row.put("receiverName", matched.get("userName"));
        row.put("receiverLogin", matched.get("loginName"));
    }

    private List<Map<String, String>> receiverChoices(List<Map<String, Object>> receivers) {
        List<Map<String, String>> result = new ArrayList<Map<String, String>>();
        for (Map<String, Object> receiver : receivers) {
            List<String> userIds = splitPersonList(string(receiver.get("USER_ID")));
            List<String> userNames = splitPersonList(string(receiver.get("USER_NAME")));
            if (userIds.isEmpty()) {
                Map<String, String> item = new HashMap<String, String>();
                item.put("nodeId", string(receiver.get("ID")));
                item.put("nodeName", string(receiver.get("NODE_NAME")));
                item.put("userId", "");
                item.put("userName", "");
                item.put("loginName", "");
                result.add(item);
                continue;
            }
            for (int i = 0; i < userIds.size(); i++) {
                String userId = userIds.get(i);
                Map<String, String> item = new HashMap<String, String>();
                item.put("nodeId", string(receiver.get("ID")));
                item.put("nodeName", string(receiver.get("NODE_NAME")));
                item.put("userId", userId);
                item.put("userName", i < userNames.size() && StringUtils.isNotBlank(userNames.get(i)) ? userNames.get(i) : userName(userId));
                item.put("loginName", userLoginName(userId));
                result.add(item);
            }
        }
        return result;
    }

    private List<Map<String, String>> parseImportRows(String rowsJson) {
        List<Map<String, String>> rows = new ArrayList<Map<String, String>>();
        if (StringUtils.isBlank(rowsJson)) {
            return rows;
        }
        List<Map> rawRows = JSON.parseArray(rowsJson, Map.class);
        if (rawRows == null) {
            return rows;
        }
        for (Map raw : rawRows) {
            Map<String, String> row = new HashMap<String, String>();
            row.put("rowNumber", string(raw.get("rowNumber")));
            row.put("title", string(raw.get("title")));
            row.put("workCategory", string(raw.get("workCategory")));
            row.put("content", string(raw.get("content")));
            row.put("targetDesc", string(raw.get("targetDesc")));
            row.put("planDeadline", string(raw.get("planDeadline")));
            row.put("deptName", string(raw.get("deptName")));
            row.put("deptNodeId", string(raw.get("deptNodeId")));
            row.put("receiverName", string(raw.get("receiverName")));
            row.put("receiverLogin", string(raw.get("receiverLogin")));
            row.put("remark", string(raw.get("remark")));
            rows.add(row);
        }
        return rows;
    }

    private Map<String, String> importTaskParams(Map<String, Object> row, String batchId) {
        Map<String, String> p = new HashMap<String, String>();
        p.put("batchId", batchId);
        p.put("title", string(row.get("title")));
        p.put("workCategory", string(row.get("workCategory")));
        p.put("content", importContent(row));
        p.put("targetDesc", string(row.get("targetDesc")));
        p.put("planDeadline", string(row.get("planDeadline")));
        p.put("personNodeId", string(row.get("personNodeId")));
        p.put("receiverId", string(row.get("receiverId")));
        p.put("draftDeptNodeId", string(row.get("personNodeId")));
        p.put("draftDeptUserId", string(row.get("receiverId")));
        p.put("draftDeptName", string(row.get("deptName")));
        return p;
    }

    private String importContent(Map<String, Object> row) {
        String content = string(row.get("content"));
        String remark = string(row.get("remark"));
        if (StringUtils.isBlank(remark)) {
            return content;
        }
        if (StringUtils.isBlank(content)) {
            return "备注：" + remark;
        }
        return content + "\n\n备注：" + remark;
    }

    private String cellText(Cell cell) {
        if (cell == null) {
            return "";
        }
        try {
            if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
                return cell.getStringCellValue() == null ? "" : cell.getStringCellValue().trim();
            }
            if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
                if (org.apache.poi.ss.usermodel.DateUtil.isCellDateFormatted(cell)) {
                    return DATE_FORMAT.format(cell.getDateCellValue());
                }
                double value = cell.getNumericCellValue();
                long rounded = Math.round(value);
                if (Math.abs(value - rounded) < 0.000001) {
                    return String.valueOf(rounded);
                }
                return String.valueOf(value);
            }
            if (cell.getCellType() == Cell.CELL_TYPE_BOOLEAN) {
                return cell.getBooleanCellValue() ? "true" : "false";
            }
            if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
                try {
                    return cell.getStringCellValue() == null ? "" : cell.getStringCellValue().trim();
                } catch (Exception ex) {
                    double value = cell.getNumericCellValue();
                    long rounded = Math.round(value);
                    return Math.abs(value - rounded) < 0.000001 ? String.valueOf(rounded) : String.valueOf(value);
                }
            }
        } catch (Exception ignored) {
        }
        return "";
    }

    private String cellDateText(Cell cell) {
        if (cell == null) {
            return "";
        }
        if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC && org.apache.poi.ss.usermodel.DateUtil.isCellDateFormatted(cell)) {
            return DATE_FORMAT.format(cell.getDateCellValue());
        }
        return cellText(cell);
    }

    private String normalizeImportDate(String value) {
        if (StringUtils.isBlank(value)) {
            return "";
        }
        String text = value.trim();
        if (text.length() > 10 && (text.charAt(10) == ' ' || text.charAt(10) == 'T')) {
            text = text.substring(0, 10);
        }
        String[] patterns = new String[]{"yyyy-MM-dd", "yyyy/M/d", "yyyy/MM/dd", "yyyy.M.d", "yyyy.MM.dd", "yyyyMMdd"};
        for (int i = 0; i < patterns.length; i++) {
            try {
                SimpleDateFormat format = new SimpleDateFormat(patterns[i]);
                format.setLenient(false);
                return DATE_FORMAT.format(format.parse(text));
            } catch (Exception ignored) {
            }
        }
        return "";
    }

    public Map<String, Object> stats(HttpServletRequest request, String batchId) {
        Map<String, Object> result = success();
        StringBuilder where = new StringBuilder();
        List<Object> args = new ArrayList<Object>();
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        boolean leaderViewer = currentNode == null && hasPlatformRole(userId, LEADER_VIEW_ROLE_NAME);
        boolean party = currentNode != null && DwWorkPlan3Constants.ROLE_PARTY.equals(string(currentNode.get("ROLE_CODE")));
        if (StringUtils.isNotBlank(batchId)) {
            where.append(" where BATCH_ID=?");
            args.add(batchId);
        }
        if (currentNode == null && !leaderViewer) {
            where.append(where.length() == 0 ? " where " : " and ");
            where.append("1=0");
        } else if (currentNode != null && !party) {
            List<String> subtreeIds = subtreeNodeIds(string(currentNode.get("ID")));
            where.append(where.length() == 0 ? " where " : " and ");
            if (subtreeIds.isEmpty()) {
                where.append("1=0");
            } else {
                where.append("PERSON_NODE_ID in (");
                appendPlaceholders(where, subtreeIds.size());
                where.append(")");
                args.addAll(subtreeIds);
            }
        }
        result.put("byStatus", jdbcTemplate.queryForList("select STATUS,count(1) CNT from DYN_DW_PLAN3_TASK" + where + " group by STATUS", args.toArray()));
        result.put("byLevel", jdbcTemplate.queryForList("select TASK_LEVEL,STATUS,count(1) CNT from DYN_DW_PLAN3_TASK" + where + " group by TASK_LEVEL,STATUS", args.toArray()));
        String overdueWhere = where.length() == 0 ? " where " : where + " and ";
        result.put("overdue", jdbcTemplate.queryForList("select TASK_LEVEL,count(1) CNT from DYN_DW_PLAN3_TASK" + overdueWhere +
                "PLAN_DEADLINE<sysdate and STATUS<>'COMPLETED' group by TASK_LEVEL", args.toArray()));
        result.put("recent", listTasks(request, batchId, null));
        return result;
    }

    private boolean allChildrenCompleted(String taskId) {
        Integer total = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=?", Integer.class, taskId);
        if (total == null || total == 0) {
            return true;
        }
        Integer open = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=? and STATUS<>?", Integer.class,
                taskId, DwWorkPlan3Constants.STATUS_COMPLETED);
        return open == null || open == 0;
    }

    private void syncParentAfterChildDone(String childTaskId, String feedbackContent, String feedbackAttachmentId, HttpServletRequest request) {
        Map<String, Object> child = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", childTaskId);
        String parentId = string(child.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", parentId);
        String draftContent = aggregateChildFeedbackContent(parentId);
        String parentAttachmentId = copyAttachment(feedbackAttachmentId, null, "FEEDBACK_DRAFT", request);
        upsertFeedbackDraft(parentId, defaultValue(draftContent, feedbackContent), parentAttachmentId, request);
        if (allChildrenCompleted(parentId)) {
            if (DwWorkPlan3Constants.LEVEL_PARTY.equals(string(parent.get("TASK_LEVEL")))) {
                jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,COMPLETE_TIME=sysdate,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                        DwWorkPlan3Constants.STATUS_COMPLETED, loginUser(request), request.getRemoteAddr(), parentId);
            } else {
                jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,RETURN_REASON=null,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                        DwWorkPlan3Constants.STATUS_DOING, loginUser(request), request.getRemoteAddr(), parentId);
                notifyTaskReceiver(parentId, "\u5de5\u4f5c\u8ba1\u5212\u53cd\u9988\u5df2\u901a\u8fc7",
                        "\u4e0b\u7ea7\u53cd\u9988\u5df2\u901a\u8fc7\uff0c\u8bf7\u53ca\u65f6\u5904\u7406\u4e0a\u7ea7\u53cd\u9988\u3002");
            }
        } else {
            jdbcTemplate.update("update DYN_DW_PLAN3_TASK set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    loginUser(request), request.getRemoteAddr(), parentId);
        }
    }

    private void syncParentAfterChildReturned(String childTaskId, HttpServletRequest request) {
        Map<String, Object> child = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", childTaskId);
        String parentId = string(child.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                DwWorkPlan3Constants.STATUS_WAIT_CHILD, loginUser(request), request.getRemoteAddr(), parentId);
    }

    private void refreshParentStatusAfterChildRemoval(String parentId, String userId, String remoteAddr) {
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        Map<String, Object> parent = queryOne("select TASK_LEVEL from DYN_DW_PLAN3_TASK where ID=?", parentId);
        Integer childCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=?", Integer.class, parentId);
        String nextStatus;
        if (childCount != null && childCount > 0) {
            nextStatus = DwWorkPlan3Constants.STATUS_WAIT_CHILD;
        } else if (DwWorkPlan3Constants.LEVEL_PARTY.equals(string(parent.get("TASK_LEVEL")))) {
            nextStatus = DwWorkPlan3Constants.STATUS_DRAFT;
        } else {
            nextStatus = DwWorkPlan3Constants.STATUS_DOING;
        }
        jdbcTemplate.update("update DYN_DW_PLAN3_TASK set STATUS=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=? and STATUS=?",
                nextStatus, userId, remoteAddr, parentId, DwWorkPlan3Constants.STATUS_WAIT_CHILD);
    }

    private String aggregateChildFeedbackContent(String parentId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select t.TITLE,t.RECEIVER_NAME,f.FEEDBACK_CONTENT from DYN_DW_PLAN3_TASK t join DYN_DW_PLAN3_FEEDBACK f on f.TASK_ID=t.ID " +
                        "where t.PARENT_ID=? and t.STATUS=? and f.CONFIRM_RESULT=? order by f.CONFIRM_TIME, f.FEEDBACK_TIME",
                parentId, DwWorkPlan3Constants.STATUS_COMPLETED, DwWorkPlan3Constants.FEEDBACK_CONFIRMED);
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

    private String validatePersonHierarchy(String id, String parentId, String roleCode) {
        if (StringUtils.isBlank(roleCode)) {
            return "\u8bf7\u9009\u62e9\u4eba\u5458\u89d2\u8272";
        }
        if (DwWorkPlan3Constants.ROLE_PARTY.equals(roleCode)) {
            if (StringUtils.isNotBlank(parentId)) {
                return "\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u5fc5\u987b\u662f\u6839\u8282\u70b9";
            }
            StringBuilder sql = new StringBuilder("select count(1) from DYN_DW_PLAN3_PERSON_TREE where ROLE_CODE=? and nvl(ENABLED,'Y')='Y'");
            List<Object> args = new ArrayList<Object>();
            args.add(DwWorkPlan3Constants.ROLE_PARTY);
            if (StringUtils.isNotBlank(id)) {
                sql.append(" and ID<>?");
                args.add(id);
            }
            Integer count = jdbcTemplate.queryForObject(sql.toString(), Integer.class, args.toArray());
            return count != null && count > 0 ? "\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u6839\u8282\u70b9\u53ea\u80fd\u6709\u4e00\u4e2a" : "";
        }
        if (StringUtils.isBlank(parentId)) {
            return "\u8bf7\u9009\u62e9\u4e0a\u7ea7\u8282\u70b9";
        }
        if (StringUtils.isNotBlank(id) && id.equals(parentId)) {
            return "\u4e0a\u7ea7\u8282\u70b9\u4e0d\u80fd\u662f\u81ea\u8eab";
        }
        if (StringUtils.isNotBlank(id) && subtreeNodeIds(id).contains(parentId)) {
            return "\u4e0a\u7ea7\u8282\u70b9\u4e0d\u80fd\u662f\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u7ea7";
        }
        List<Map<String, Object>> parents = jdbcTemplate.queryForList(
                "select ROLE_CODE from DYN_DW_PLAN3_PERSON_TREE where ID=? and ENABLED='Y'", parentId);
        if (parents.isEmpty()) {
            return "\u4e0a\u7ea7\u8282\u70b9\u4e0d\u5b58\u5728\u6216\u5df2\u7981\u7528";
        }
        String expectedParentRole = expectedParentRole(roleCode);
        if (StringUtils.isBlank(expectedParentRole) || !expectedParentRole.equals(string(parents.get(0).get("ROLE_CODE")))) {
            return "\u4eba\u5458\u8282\u70b9\u5fc5\u987b\u6309\u201c\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005-\u90e8\u957f-\u5ba4\u4e3b\u4efb-\u79d1\u5458\u201d\u7684\u5c42\u7ea7\u7ef4\u62a4";
        }
        return "";
    }

    private Map<String, String> emptyDraftReceiver() {
        Map<String, String> result = new HashMap<String, String>();
        result.put("nodeId", null);
        result.put("userId", null);
        result.put("name", null);
        return result;
    }

    private Map<String, String> draftDeptParams(Map<String, String> p, HttpServletRequest request, Map<String, Object> currentNode) {
        Map<String, String> result = new HashMap<String, String>();
        String nodeId = defaultValue(value(p, "draftDeptNodeId"), value(p, "personNodeId"));
        String userId = defaultValue(value(p, "draftDeptUserId"), value(p, "receiverId"));
        if (StringUtils.isBlank(nodeId) && StringUtils.isBlank(userId)) {
            return emptyDraftReceiver();
        }
        Map<String, Object> receiverNode = validateDirectChildReceiver(currentNode, nodeId, userId);
        result.put("nodeId", string(receiverNode.get("ID")));
        result.put("userId", userId);
        result.put("name", defaultValue(value(p, "draftDeptName"), string(receiverNode.get("NODE_NAME"))));
        return result;
    }

    private String validateBatchDispatchTask(Map<String, Object> task, HttpServletRequest request) {
        String userId = loginUser(request);
        Map<String, Object> currentNode = currentUserNode(request);
        if (currentNode == null || !DwWorkPlan3Constants.ROLE_PARTY.equals(string(currentNode.get("ROLE_CODE")))) {
            return "\u8bf7\u5207\u6362\u5230\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u8eab\u4efd";
        }
        if (!userId.equals(string(task.get("RECEIVER_ID")))) {
            return "\u4e0d\u662f\u5f53\u524d\u7528\u6237\u7684\u8349\u7a3f\u4efb\u52a1";
        }
        if (!taskMatchesCurrentNode(task, currentNode)) {
            return "\u4e0d\u662f\u5f53\u524d\u8eab\u4efd\u4e0b\u7684\u8349\u7a3f\u4efb\u52a1";
        }
        if (!DwWorkPlan3Constants.LEVEL_PARTY.equals(string(task.get("TASK_LEVEL")))) {
            return "\u53ea\u80fd\u6279\u91cf\u4e0b\u53d1\u515a\u59d4\u6839\u4efb\u52a1";
        }
        if (!DwWorkPlan3Constants.STATUS_DRAFT.equals(string(task.get("STATUS")))) {
            return "\u53ea\u80fd\u6279\u91cf\u4e0b\u53d1\u8349\u7a3f\u72b6\u6001\u4efb\u52a1";
        }
        Integer childCount = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=?",
                Integer.class, task.get("ID"));
        if (childCount != null && childCount > 0) {
            return "\u5df2\u7ecf\u4e0b\u53d1\u8fc7\uff0c\u4e0d\u80fd\u91cd\u590d\u4e0b\u53d1";
        }
        String nodeId = string(task.get("DRAFT_DEPT_NODE_ID"));
        String receiverId = string(task.get("DRAFT_DEPT_USER_ID"));
        if (StringUtils.isBlank(nodeId) || StringUtils.isBlank(receiverId)) {
            return "\u7f3a\u5c11\u8349\u7a3f\u63a5\u6536\u90e8\u95e8\u6216\u63a5\u6536\u4eba";
        }
        try {
            Map<String, Object> receiverNode = validateDirectChildReceiver(currentNode, nodeId, receiverId);
            if (!DwWorkPlan3Constants.ROLE_DEPT.equals(string(receiverNode.get("ROLE_CODE")))) {
                return "\u515a\u59d4\u6839\u4efb\u52a1\u53ea\u80fd\u4e0b\u53d1\u7ed9\u90e8\u95e8";
            }
        } catch (Exception ex) {
            return defaultValue(ex.getMessage(), "\u63a5\u6536\u90e8\u95e8\u6216\u63a5\u6536\u4eba\u4e0d\u6b63\u786e");
        }
        return "";
    }

    private String expectedParentRole(String roleCode) {
        if (DwWorkPlan3Constants.ROLE_DEPT.equals(roleCode)) {
            return DwWorkPlan3Constants.ROLE_PARTY;
        }
        if (DwWorkPlan3Constants.ROLE_OFFICE.equals(roleCode)) {
            return DwWorkPlan3Constants.ROLE_DEPT;
        }
        if (DwWorkPlan3Constants.ROLE_STAFF.equals(roleCode)) {
            return DwWorkPlan3Constants.ROLE_OFFICE;
        }
        return "";
    }

    private String limitedErrorText(List<String> errors) {
        int max = Math.min(errors.size(), 5);
        List<String> visible = errors.subList(0, max);
        String text = StringUtils.join(visible, "\uff1b");
        if (errors.size() > max) {
            text += "\uff1b\u7b49" + errors.size() + "\u9879";
        }
        return text;
    }

    private boolean hasRole(String userId, String role) {
        Integer count = jdbcTemplate.queryForObject("select count(1) from DYN_DW_PLAN3_PERSON_TREE where " + userMatchSql("USER_ID") + " and ROLE_CODE=? and ENABLED='Y'",
                Integer.class, userId, role);
        return count != null && count > 0;
    }

    private boolean hasPlatformRole(String userId, String roleName) {
        if (StringUtils.isBlank(userId) || StringUtils.isBlank(roleName)) {
            return false;
        }
        Integer count = jdbcTemplate.queryForObject(
                "select count(1) from sys_user_role ur join sys_role r on r.id=ur.sys_role_id " +
                        "where ur.sys_user_id=? and r.role_name=? and nvl(r.valid_flag,'1')='1'",
                Integer.class, userId, roleName);
        return count != null && count > 0;
    }

    private Map<String, Object> topUserNode(String userId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select * from DYN_DW_PLAN3_PERSON_TREE where " + userMatchSql("USER_ID") + " and ENABLED='Y' order by SORT_NO, CREATION_DATE",
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

    private Map<String, Object> currentUserNode(HttpServletRequest request) {
        return currentUserNode(loginUser(request), request == null ? "" : request.getParameter("currentNodeId"));
    }

    private Map<String, Object> currentUserNode(String userId, String nodeId) {
        if (StringUtils.isNotBlank(nodeId)) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select * from DYN_DW_PLAN3_PERSON_TREE where ID=? and ENABLED='Y' and " + userMatchSql("USER_ID"),
                    nodeId, userId);
            if (!rows.isEmpty()) {
                return rows.get(0);
            }
        }
        return topUserNode(userId);
    }

    private String taskLevelForRole(String roleCode) {
        if (DwWorkPlan3Constants.ROLE_PARTY.equals(roleCode)) {
            return DwWorkPlan3Constants.LEVEL_PARTY;
        }
        if (DwWorkPlan3Constants.ROLE_DEPT.equals(roleCode)) {
            return DwWorkPlan3Constants.LEVEL_DEPT;
        }
        if (DwWorkPlan3Constants.ROLE_OFFICE.equals(roleCode)) {
            return DwWorkPlan3Constants.LEVEL_OFFICE;
        }
        if (DwWorkPlan3Constants.ROLE_STAFF.equals(roleCode)) {
            return DwWorkPlan3Constants.LEVEL_STAFF;
        }
        return "";
    }

    private boolean taskMatchesCurrentNode(Map<String, Object> task, Map<String, Object> currentNode) {
        if (task == null || currentNode == null) {
            return false;
        }
        String nodeId = string(currentNode.get("ID"));
        String taskNodeId = string(task.get("PERSON_NODE_ID"));
        if (nodeId.equals(taskNodeId)) {
            return true;
        }
        return StringUtils.isBlank(taskNodeId)
                && DwWorkPlan3Constants.ROLE_PARTY.equals(string(currentNode.get("ROLE_CODE")))
                && DwWorkPlan3Constants.LEVEL_PARTY.equals(string(task.get("TASK_LEVEL")));
    }

    private int personNodeDepth(String nodeId) {
        int depth = 0;
        String current = nodeId;
        while (StringUtils.isNotBlank(current)) {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select PARENT_ID from DYN_DW_PLAN3_PERSON_TREE where ID=? and ENABLED='Y'", current);
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

    private List<String> taskSubtreeIds(String rootTaskId) {
        List<String> result = new ArrayList<String>();
        collectTaskSubtreeIds(rootTaskId, result);
        return result;
    }

    private void collectTaskSubtreeIds(String taskId, List<String> result) {
        if (StringUtils.isBlank(taskId) || result.contains(taskId)) {
            return;
        }
        List<Map<String, Object>> exists = jdbcTemplate.queryForList("select ID from DYN_DW_PLAN3_TASK where ID=?", taskId);
        if (exists.isEmpty()) {
            return;
        }
        result.add(taskId);
        List<Map<String, Object>> children = jdbcTemplate.queryForList(
                "select ID from DYN_DW_PLAN3_TASK where PARENT_ID=? order by CREATION_DATE",
                taskId);
        for (Map<String, Object> child : children) {
            collectTaskSubtreeIds(string(child.get("ID")), result);
        }
    }

    private void collectSubtreeNodeIds(String nodeId, List<String> result) {
        if (StringUtils.isBlank(nodeId) || result.contains(nodeId)) {
            return;
        }
        result.add(nodeId);
        List<Map<String, Object>> children = jdbcTemplate.queryForList(
                "select ID from DYN_DW_PLAN3_PERSON_TREE where PARENT_ID=? and ENABLED='Y' order by SORT_NO, CREATION_DATE",
                nodeId);
        for (Map<String, Object> child : children) {
            collectSubtreeNodeIds(string(child.get("ID")), result);
        }
    }

    private void appendVisibleTaskScope(StringBuilder sql, String alias, Map<String, Object> topNode, List<Object> args, boolean allowAllWithoutNode) {
        if (topNode == null) {
            if (allowAllWithoutNode) {
                return;
            }
            sql.append(" and 1=0");
            return;
        }
        if (DwWorkPlan3Constants.ROLE_PARTY.equals(string(topNode.get("ROLE_CODE")))) {
            return;
        }
        List<String> subtreeIds = subtreeNodeIds(string(topNode.get("ID")));
        if (subtreeIds.isEmpty()) {
            sql.append(" and 1=0");
            return;
        }
        sql.append(" and ").append(alias).append(".PERSON_NODE_ID in (");
        appendPlaceholders(sql, subtreeIds.size());
        sql.append(")");
        args.addAll(subtreeIds);
    }

    private Map<String, Object> validateDirectChildReceiver(Map<String, Object> currentNode, String personNodeId, String receiverId) {
        if (StringUtils.isBlank(personNodeId) || StringUtils.isBlank(receiverId)) {
            throw new IllegalArgumentException("\u8bf7\u9009\u62e9\u63a5\u6536\u4eba");
        }
        if (currentNode == null) {
            throw new IllegalArgumentException("\u5f53\u524d\u7528\u6237\u672a\u5728\u4eba\u5458\u6811\u4e2d\u914d\u7f6e");
        }
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select c.*,p.ROLE_CODE PARENT_ROLE_CODE from DYN_DW_PLAN3_PERSON_TREE c left join DYN_DW_PLAN3_PERSON_TREE p on c.PARENT_ID=p.ID where c.ID=? and c.PARENT_ID=? and c.ENABLED='Y' and " + userMatchSql("c.USER_ID"),
                personNodeId, currentNode.get("ID"), receiverId);
        if (rows.isEmpty()) {
            throw new IllegalArgumentException("\u53ea\u80fd\u4e0b\u53d1\u7ed9\u5f53\u524d\u8282\u70b9\u7684\u76f4\u5c5e\u4e0b\u4e00\u7ea7");
        }
        Map<String, Object> receiver = rows.get(0);
        String nextRole = DwWorkPlan3Constants.nextRole(string(currentNode.get("ROLE_CODE")));
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

    private void enrichTaskAttachmentInfo(List<Map<String, Object>> rows) {
        for (Map<String, Object> row : rows) {
            int taskAttachmentCount = attachmentCount(string(row.get("ID")), TASK_ATTACHMENT_ELEMENT_ID, row.get("ATTACHMENT_ID"));
            int parentAttachmentCount = attachmentCount(string(row.get("PARENT_TASK_ID")), TASK_ATTACHMENT_ELEMENT_ID, row.get("PARENT_ATTACHMENT_ID"));
            row.put("TASK_ATTACHMENT_COUNT", Integer.valueOf(taskAttachmentCount));
            row.put("PARENT_ATTACHMENT_COUNT", Integer.valueOf(parentAttachmentCount));
            row.put("HAS_PARENT_ATTACHMENT", parentAttachmentCount > 0 ? "Y" : "N");
        }
    }

    private void enrichFeedbackAttachmentInfo(List<Map<String, Object>> rows) {
        for (Map<String, Object> row : rows) {
            int feedbackAttachmentCount = attachmentCount(string(row.get("ID")), FEEDBACK_ATTACHMENT_ELEMENT_ID, row.get("ATTACHMENT_ID"));
            row.put("FEEDBACK_ATTACHMENT_COUNT", Integer.valueOf(feedbackAttachmentCount));
            row.put("HAS_ATTACHMENT", feedbackAttachmentCount > 0 ? "Y" : "N");
        }
    }

    private int attachmentCount(String businessId, String elementId, Object legacyAttachmentId) {
        int count = StringUtils.isBlank(string(legacyAttachmentId)) ? 0 : 1;
        if (StringUtils.isBlank(businessId) || swfUploadService == null) {
            return count;
        }
        try {
            List<?> files = swfUploadService.getFileListByFormId(businessId, elementId);
            if (files != null) {
                count += files.size();
            }
        } catch (Exception ignored) {
        }
        return count;
    }

    private void bindAttachment(String attachmentId, String businessId, String businessType, HttpServletRequest request) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN3_ATTACHMENT set BUSINESS_ID=?,BUSINESS_TYPE=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                businessId, businessType, loginUser(request), request.getRemoteAddr(), attachmentId);
    }

    private void bindAttachment(String attachmentId, String businessId, String businessType) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("update DYN_DW_PLAN3_ATTACHMENT set BUSINESS_ID=?,BUSINESS_TYPE=?,LAST_UPDATE_DATE=sysdate where ID=?",
                businessId, businessType, attachmentId);
    }

    private void deleteAttachment(String attachmentId) {
        if (StringUtils.isBlank(attachmentId)) {
            return;
        }
        jdbcTemplate.update("delete from DYN_DW_PLAN3_ATTACHMENT where ID=?", attachmentId);
    }

    private String copyAttachment(String attachmentId, String businessId, String businessType, HttpServletRequest request) {
        if (StringUtils.isBlank(attachmentId)) {
            return null;
        }
        Map<String, Object> source = queryOne("select * from DYN_DW_PLAN3_ATTACHMENT where ID=?", attachmentId);
        String id = ComUtil.getId();
        jdbcTemplate.update("insert into DYN_DW_PLAN3_ATTACHMENT(" +
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
                "select * from DYN_DW_PLAN3_FEEDBACK where TASK_ID=? and CONFIRM_RESULT=? order by LAST_UPDATE_DATE desc, CREATION_DATE desc",
                taskId, DwWorkPlan3Constants.FEEDBACK_DRAFT);
        return rows.isEmpty() ? null : rows.get(0);
    }

    private boolean hasFeedbackHistory(String taskId) {
        Integer count = jdbcTemplate.queryForObject(
                "select count(1) from DYN_DW_PLAN3_FEEDBACK where TASK_ID=? and nvl(CONFIRM_RESULT,?)<>?",
                Integer.class, taskId, DwWorkPlan3Constants.FEEDBACK_PENDING, DwWorkPlan3Constants.FEEDBACK_DRAFT);
        return count != null && count > 0;
    }

    private void upsertFeedbackDraft(String taskId, String content, String attachmentId, HttpServletRequest request) {
        if (StringUtils.isBlank(taskId)) {
            return;
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", taskId);
        Map<String, Object> draft = feedbackDraft(taskId);
        String effectiveAttachment = emptyToNull(attachmentId);
        if (StringUtils.isBlank(effectiveAttachment) && draft != null) {
            effectiveAttachment = emptyToNull(string(draft.get("ATTACHMENT_ID")));
        }
        if (draft == null) {
            String id = ComUtil.getId();
            jdbcTemplate.update("insert into DYN_DW_PLAN3_FEEDBACK(" +
                            "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY," +
                            "TASK_ID,FEEDBACK_USER_ID,FEEDBACK_USER_NAME,FEEDBACK_CONTENT,FEEDBACK_TIME,ATTACHMENT_ID,CONFIRM_RESULT) " +
                            "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,null,?,?)",
                    id, loginUser(request), loginUser(request), request.getRemoteAddr(), orgIdentity(request), taskId,
                    string(task.get("RECEIVER_ID")), string(task.get("RECEIVER_NAME")), emptyToNull(content),
                    effectiveAttachment, DwWorkPlan3Constants.FEEDBACK_DRAFT);
            bindAttachment(effectiveAttachment, id, "FEEDBACK_DRAFT");
        } else {
            String id = string(draft.get("ID"));
            jdbcTemplate.update("update DYN_DW_PLAN3_FEEDBACK set FEEDBACK_USER_ID=?,FEEDBACK_USER_NAME=?,FEEDBACK_CONTENT=?,ATTACHMENT_ID=?,CONFIRM_RESULT=?," +
                            "LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=? where ID=?",
                    string(task.get("RECEIVER_ID")), string(task.get("RECEIVER_NAME")), emptyToNull(content),
                    effectiveAttachment, DwWorkPlan3Constants.FEEDBACK_DRAFT, loginUser(request), request.getRemoteAddr(), id);
            bindAttachment(effectiveAttachment, id, "FEEDBACK_DRAFT");
        }
    }

    private void notifyTaskReceiver(String taskId, String title, String content) {
        if (StringUtils.isBlank(taskId)) {
            return;
        }
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", taskId);
        sendMessage(string(task.get("RECEIVER_ID")), title, content);
    }

    private void notifyParent(String taskId, String title, String content) {
        Map<String, Object> task = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", taskId);
        String parentId = string(task.get("PARENT_ID"));
        if (StringUtils.isBlank(parentId)) {
            return;
        }
        Map<String, Object> parent = queryOne("select * from DYN_DW_PLAN3_TASK where ID=?", parentId);
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

    private void syncPortalTodo(String taskId, HttpServletRequest request) {
        if (portalTodoService != null) {
            portalTodoService.syncTaskTodo(taskId, request);
        }
    }

    private void closePortalTodo(String taskId, HttpServletRequest request, String reason) {
        if (portalTodoService != null) {
            portalTodoService.closeTaskTodo(taskId, request, reason);
        }
    }

    private void closePortalTodos(List<String> taskIds, HttpServletRequest request, String reason) {
        if (portalTodoService != null) {
            portalTodoService.closeTaskTodos(taskIds, request, reason);
        }
    }

    private List<String> taskIdsFromRows(List<Map<String, Object>> rows) {
        List<String> ids = new ArrayList<String>();
        if (rows == null) {
            return ids;
        }
        for (Map<String, Object> row : rows) {
            String id = string(row.get("ID"));
            if (StringUtils.isNotBlank(id)) {
                ids.add(id);
            }
        }
        return ids;
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

    private String userNamesForIds(String userIds) {
        List<String> ids = splitPersonList(userIds);
        List<String> names = new ArrayList<String>();
        for (String id : ids) {
            names.add(userName(id));
        }
        return joinPersonList(names);
    }

    private String userLoginNamesForIds(String userIds) {
        List<String> ids = splitPersonList(userIds);
        List<String> names = new ArrayList<String>();
        for (String id : ids) {
            names.add(userLoginName(id));
        }
        return joinPersonList(names);
    }

    private String userLoginName(String userId) {
        if (StringUtils.isBlank(userId)) {
            return "";
        }
        try {
            SysUser user = sysUserAPI.getSysUserById(userId);
            if (user != null && StringUtils.isNotBlank(user.getLoginName())) {
                return user.getLoginName();
            }
        } catch (Exception ignored) {
        }
        return userId;
    }

    private String userNameFromPersonNode(Map<String, Object> node, String userId) {
        List<String> ids = splitPersonList(string(node.get("USER_ID")));
        List<String> names = splitPersonList(string(node.get("USER_NAME")));
        for (int i = 0; i < ids.size(); i++) {
            if (userId.equals(ids.get(i))) {
                if (i < names.size() && StringUtils.isNotBlank(names.get(i))) {
                    return names.get(i);
                }
                return userName(userId);
            }
        }
        return userName(userId);
    }

    private boolean allowsMultiPerson(String roleCode) {
        return DwWorkPlan3Constants.ROLE_DEPT.equals(roleCode) || DwWorkPlan3Constants.ROLE_OFFICE.equals(roleCode);
    }

    private String validateNoCrossLevelDuplicateUsers(String currentId, String currentRoleCode, String userIds, String userNames) {
        return "";
    }

    private String roleLevelLabel(String roleCode) {
        if (DwWorkPlan3Constants.ROLE_PARTY.equals(roleCode)) {
            return "\u515a\u59d4";
        }
        if (DwWorkPlan3Constants.ROLE_DEPT.equals(roleCode)) {
            return "\u90e8\u95e8";
        }
        if (DwWorkPlan3Constants.ROLE_OFFICE.equals(roleCode)) {
            return "\u79d1\u5ba4";
        }
        if (DwWorkPlan3Constants.ROLE_STAFF.equals(roleCode)) {
            return "\u79d1\u5458";
        }
        return roleCode;
    }

    private String normalizePersonList(String value) {
        return joinPersonList(splitPersonList(value));
    }

    private List<String> splitPersonList(String value) {
        List<String> result = new ArrayList<String>();
        if (StringUtils.isBlank(value)) {
            return result;
        }
        String[] parts = value.split("[,，;；]");
        for (String part : parts) {
            String item = part == null ? "" : part.trim();
            if (StringUtils.isNotBlank(item) && !result.contains(item)) {
                result.add(item);
            }
        }
        return result;
    }

    private String joinPersonList(List<String> values) {
        StringBuilder result = new StringBuilder();
        for (String value : values) {
            if (StringUtils.isBlank(value)) {
                continue;
            }
            if (result.length() > 0) {
                result.append(",");
            }
            result.append(value.trim());
        }
        return result.toString();
    }

    private String userMatchSql(String column) {
        return "instr(','||replace(replace(replace(replace(nvl(" + column + ",''),' ',''),'\uff0c',','),'\uff1b',','),';',',')||',', ','||?||',')>0";
    }

    private void ensurePersonUserColumnLength() {
        ensureColumnLength("DYN_DW_PLAN3_PERSON_TREE", "USER_ID", 1000);
        ensureColumnLength("DYN_DW_PLAN3_PERSON_TREE", "USER_NAME", 1000);
    }

    private void ensureTaskWorkCategoryColumn() {
        try {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select DATA_LENGTH from USER_TAB_COLUMNS where TABLE_NAME=? and COLUMN_NAME=?",
                    "DYN_DW_PLAN3_TASK", "WORK_CATEGORY");
            if (rows.isEmpty()) {
                jdbcTemplate.execute("ALTER TABLE DYN_DW_PLAN3_TASK ADD WORK_CATEGORY VARCHAR2(100)");
                return;
            }
            int length = Integer.parseInt(string(rows.get(0).get("DATA_LENGTH")));
            if (length < 100) {
                jdbcTemplate.execute("ALTER TABLE DYN_DW_PLAN3_TASK MODIFY WORK_CATEGORY VARCHAR2(100)");
            }
        } catch (Exception ignored) {
        }
    }

    private void ensureColumnLength(String tableName, String columnName, int minLength) {
        try {
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                    "select DATA_LENGTH from USER_TAB_COLUMNS where TABLE_NAME=? and COLUMN_NAME=?",
                    tableName, columnName);
            if (rows.isEmpty()) {
                return;
            }
            int length = Integer.parseInt(string(rows.get(0).get("DATA_LENGTH")));
            if (length < minLength) {
                jdbcTemplate.execute("ALTER TABLE " + tableName + " MODIFY " + columnName + " VARCHAR2(" + minLength + ")");
            }
        } catch (Exception ignored) {
        }
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


