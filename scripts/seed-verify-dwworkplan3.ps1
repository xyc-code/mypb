param(
  [string]$Root = (Resolve-Path ".").Path,
  [string]$DbUrl = "jdbc:dm://127.0.0.1:5236",
  [string]$DbUser = "dj",
  [string]$DbPassword = $env:PB_DM_PASSWORD
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($DbPassword)) {
  throw "DbPassword is required. Pass -DbPassword or set PB_DM_PASSWORD."
}

$workDir = Join-Path $Root "target\dwworkplan3-business-test"
New-Item -ItemType Directory -Force -Path $workDir | Out-Null

$javaFile = Join-Path $workDir "DwWorkPlan3BusinessVerifier.java"
$javaSource = @'
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.pb.dwworkplan3.dto.DwWorkPlan3Constants;
import avicit.pb.dwworkplan3.service.DwWorkPlan3Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DwWorkPlan3BusinessVerifier {
    private static final String PARTY = "DW3_PARTY";
    private static final String DEPT = "DW3_DEPT";
    private static final String OFFICE = "DW3_OFFICE";
    private static final String STAFF = "DW3_STAFF";
    private static final String STAFF2 = "DW3_STAFF2";
    private static final String STRANGER = "DW3_STRANGER";

    public static void main(String[] args) throws Exception {
        if (args.length < 3) {
            throw new IllegalArgumentException("Usage: <jdbcUrl> <user> <password>");
        }
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("dm.jdbc.driver.DmDriver");
        dataSource.setUrl(args[0]);
        dataSource.setUsername(args[1]);
        dataSource.setPassword(args[2]);

        JdbcTemplate jdbc = new JdbcTemplate(dataSource);
        DwWorkPlan3Service service = new DwWorkPlan3Service();
        inject(service, "jdbcTemplate", jdbc);

        clean(jdbc);

        HttpServletRequest partyReq = request(PARTY, "DW3 Party");
        HttpServletRequest deptReq = request(DEPT, "DW3 Dept");
        HttpServletRequest officeReq = request(OFFICE, "DW3 Office");
        HttpServletRequest staffReq = request(STAFF, "DW3 Staff");
        HttpServletRequest staff2Req = request(STAFF2, "DW3 Staff2");

        String partyNode = id(service.savePerson(params(
                "nodeName", "DW3 Test Party",
                "userId", PARTY,
                "userName", "DW3 Party",
                "roleCode", DwWorkPlan3Constants.ROLE_PARTY,
                "sortNo", "1",
                "enabled", "Y"
        ), partyReq));
        String deptNode = id(service.savePerson(params(
                "parentId", partyNode,
                "nodeName", "DW3 Test Department",
                "userId", DEPT,
                "userName", "DW3 Dept",
                "roleCode", DwWorkPlan3Constants.ROLE_DEPT,
                "sortNo", "1",
                "enabled", "Y"
        ), partyReq));
        String officeNode = id(service.savePerson(params(
                "parentId", deptNode,
                "nodeName", "DW3 Test Office",
                "userId", OFFICE,
                "userName", "DW3 Office",
                "roleCode", DwWorkPlan3Constants.ROLE_OFFICE,
                "sortNo", "1",
                "enabled", "Y"
        ), partyReq));
        String staffNode = id(service.savePerson(params(
                "parentId", officeNode,
                "nodeName", "DW3 Test Staff",
                "userId", STAFF,
                "userName", "DW3 Staff",
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "1",
                "enabled", "Y"
        ), partyReq));
        String staff2Node = id(service.savePerson(params(
                "parentId", officeNode,
                "nodeName", "DW3 Test Staff2",
                "userId", STAFF2,
                "userName", "DW3 Staff2",
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "2",
                "enabled", "Y"
        ), partyReq));

        assertContainsNode(service.listPersonTree(), staffNode, "person/list after save");
        assertContainsNode(service.listReceivers(partyReq), deptNode, "person/receivers for party");

        Map<String, Object> unconfiguredUser = service.currentUser(request(STRANGER, "DW3 Stranger"));
        assertSuccess(unconfiguredUser, "unconfigured current user");
        List unconfiguredRoles = (List) unconfiguredUser.get("roles");
        if (unconfiguredRoles != null && !unconfiguredRoles.isEmpty()) {
            throw new IllegalStateException("Current user without a 3.0 node should not be auto-bootstrapped.");
        }
        Integer strangerNodes = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_PERSON_TREE where USER_ID=?", Integer.class, STRANGER);
        if (strangerNodes != null && strangerNodes > 0) {
            throw new IllegalStateException("Unconfigured user was written into DYN_DW_PLAN3_PERSON_TREE.");
        }

        String batchId = id(service.createBatch("2026", "Q3", partyReq));

        String rootId = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test completed task",
                "content", "Party creates a task and verifies dispatch, accept, feedback and confirm.",
                "planDeadline", "2026-09-30"
        ), partyReq));
        String deptTaskId = id(service.dispatchChild(params(
                "parentId", rootId,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test completed task - dept",
                "content", "Department accepts and dispatches to office.",
                "planDeadline", "2026-09-25"
        ), partyReq));
        assertSuccess(service.acceptTask(deptTaskId, deptReq), "dept accept");

        String officeTaskId = id(service.dispatchChild(params(
                "parentId", deptTaskId,
                "personNodeId", officeNode,
                "receiverId", OFFICE,
                "title", "DW3 test completed task - office",
                "content", "Office accepts and dispatches to staff.",
                "planDeadline", "2026-09-20"
        ), deptReq));
        assertFailure(service.dispatchChild(params(
                "parentId", deptTaskId,
                "personNodeId", officeNode,
                "receiverId", OFFICE,
                "title", "DW3 test department duplicate split should fail",
                "content", "Only office director can split a task into multiple child tasks.",
                "planDeadline", "2026-09-20"
        ), deptReq), "department duplicate split");
        assertSuccess(service.acceptTask(officeTaskId, officeReq), "office accept");

        String staffTaskId = id(service.dispatchChild(params(
                "parentId", officeTaskId,
                "personNodeId", staffNode,
                "receiverId", STAFF,
                "title", "DW3 test completed task - staff",
                "content", "Staff accepts and submits feedback.",
                "planDeadline", "2026-09-15"
        ), officeReq));
        assertFailure(service.dispatchChild(params(
                "parentId", officeTaskId,
                "personNodeId", staffNode,
                "receiverId", STAFF,
                "title", "DW3 test duplicate staff dispatch should fail",
                "content", "Same parent and same receiver must be rejected.",
                "planDeadline", "2026-09-15"
        ), officeReq), "duplicate dispatch to same person");
        assertFailure(service.dispatchChild(params(
                "parentId", officeTaskId,
                "personNodeId", staff2Node,
                "receiverId", STAFF2,
                "title", "DW3 test second staff dispatch should fail",
                "content", "A task can only be dispatched once.",
                "planDeadline", "2026-09-15"
        ), officeReq), "duplicate dispatch to another person");
        assertSuccess(service.acceptTask(staffTaskId, staffReq), "staff accept");

        String staffFeedback = id(service.submitFeedback(params(
                "taskId", staffTaskId,
                "content", "Staff feedback: completed."
        ), staffReq));
        assertSuccess(service.confirmFeedback(staffFeedback, officeReq), "staff feedback confirm");

        String officeFeedback = id(service.submitFeedback(params(
                "taskId", officeTaskId,
                "content", "Office feedback: child feedback confirmed."
        ), officeReq));
        assertSuccess(service.confirmFeedback(officeFeedback, deptReq), "office feedback confirm");

        String deptFeedback = id(service.submitFeedback(params(
                "taskId", deptTaskId,
                "content", "Department feedback: office feedback confirmed."
        ), deptReq));
        assertSuccess(service.confirmFeedback(deptFeedback, partyReq), "dept feedback confirm");
        List<Map<String, Object>> recursiveRows = service.listFeedback(rootId, partyReq);
        assertContainsFeedback(recursiveRows, staffFeedback, "recursive feedback/list contains staff feedback");
        assertContainsFeedback(recursiveRows, officeFeedback, "recursive feedback/list contains office feedback");
        assertContainsFeedback(recursiveRows, deptFeedback, "recursive feedback/list contains department feedback");

        String draftRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test draft task",
                "content", "Draft task for list display and delete permission.",
                "planDeadline", "2026-10-15"
        ), partyReq));

        String overdueRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test overdue todo task",
                "content", "Overdue task for real-time deadline calculation.",
                "planDeadline", "2026-01-05"
        ), partyReq));
        String overdueDeptTask = id(service.dispatchChild(params(
                "parentId", overdueRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test overdue todo task - dept",
                "content", "This task stays TODO for overdue list display.",
                "planDeadline", "2026-01-05"
        ), partyReq));

        String takeBackRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test take back task",
                "content", "Task for takeBack API.",
                "planDeadline", "2026-10-20"
        ), partyReq));
        String takeBackDeptTask = id(service.dispatchChild(params(
                "parentId", takeBackRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test take back task - dept",
                "content", "This task will be taken back before acceptance.",
                "planDeadline", "2026-10-18"
        ), partyReq));
        assertSuccess(service.takeBackTask(takeBackDeptTask, partyReq), "task takeBack");
        assertMissingTask(jdbc, takeBackDeptTask, "takeBack deleted child task");
        assertStatus(jdbc, takeBackRoot, "DRAFT");

        String deptTakeBackRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test department take back task",
                "content", "Accepted department task takes back an unaccepted office child.",
                "planDeadline", "2026-10-21"
        ), partyReq));
        String deptTakeBackTask = id(service.dispatchChild(params(
                "parentId", deptTakeBackRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test department take back task - dept",
                "content", "Department accepts then dispatches to office.",
                "planDeadline", "2026-10-19"
        ), partyReq));
        assertSuccess(service.acceptTask(deptTakeBackTask, deptReq), "dept takeBack flow accept");
        String officeTakeBackTask = id(service.dispatchChild(params(
                "parentId", deptTakeBackTask,
                "personNodeId", officeNode,
                "receiverId", OFFICE,
                "title", "DW3 test department take back task - office",
                "content", "This child will be taken back before office acceptance.",
                "planDeadline", "2026-10-17"
        ), deptReq));
        assertSuccess(service.takeBackTask(officeTakeBackTask, deptReq), "department child takeBack");
        assertMissingTask(jdbc, officeTakeBackTask, "department takeBack deleted office child task");
        assertStatus(jdbc, deptTakeBackTask, "DOING");

        String acceptedTakeBackRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test accepted take back task",
                "content", "Accepted child cannot be taken back.",
                "planDeadline", "2026-10-22"
        ), partyReq));
        String acceptedTakeBackTask = id(service.dispatchChild(params(
                "parentId", acceptedTakeBackRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test accepted take back task - dept",
                "content", "Accepted task should reject takeBack.",
                "planDeadline", "2026-10-20"
        ), partyReq));
        assertSuccess(service.acceptTask(acceptedTakeBackTask, deptReq), "accepted takeBack flow accept");
        assertFailure(service.takeBackTask(acceptedTakeBackTask, partyReq), "accepted task takeBack");

        String directDeptRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test direct department feedback task",
                "content", "Department completes without dispatching to office.",
                "planDeadline", "2026-10-23"
        ), partyReq));
        String directDeptTask = id(service.dispatchChild(params(
                "parentId", directDeptRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test direct department feedback task - dept",
                "content", "Department has no child task and can submit feedback directly.",
                "planDeadline", "2026-10-21"
        ), partyReq));
        assertSuccess(service.acceptTask(directDeptTask, deptReq), "direct department feedback accept");
        String directDeptFeedback = id(service.submitFeedback(params(
                "taskId", directDeptTask,
                "content", "Department direct feedback: completed without lower dispatch."
        ), deptReq));
        assertStatus(jdbc, directDeptTask, "PENDING_CONFIRM");
        assertSuccess(service.confirmFeedback(directDeptFeedback, partyReq), "direct department feedback confirm");

        String directOfficeRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test direct office feedback task",
                "content", "Office completes without dispatching to staff.",
                "planDeadline", "2026-10-24"
        ), partyReq));
        String directOfficeDeptTask = id(service.dispatchChild(params(
                "parentId", directOfficeRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test direct office feedback task - dept",
                "content", "Department dispatches to office.",
                "planDeadline", "2026-10-22"
        ), partyReq));
        assertSuccess(service.acceptTask(directOfficeDeptTask, deptReq), "direct office feedback dept accept");
        String directOfficeTask = id(service.dispatchChild(params(
                "parentId", directOfficeDeptTask,
                "personNodeId", officeNode,
                "receiverId", OFFICE,
                "title", "DW3 test direct office feedback task - office",
                "content", "Office has no staff child and can submit feedback directly.",
                "planDeadline", "2026-10-20"
        ), deptReq));
        assertSuccess(service.acceptTask(directOfficeTask, officeReq), "direct office feedback office accept");
        String directOfficeFeedback = id(service.submitFeedback(params(
                "taskId", directOfficeTask,
                "content", "Office direct feedback: completed without staff dispatch."
        ), officeReq));
        assertStatus(jdbc, directOfficeTask, "PENDING_CONFIRM");
        assertSuccess(service.confirmFeedback(directOfficeFeedback, deptReq), "direct office feedback confirm");

        String deleteRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test delete draft task",
                "content", "Task for delete API.",
                "planDeadline", "2026-10-25"
        ), partyReq));
        assertSuccess(service.deleteTask(deleteRoot, partyReq), "task delete draft");
        assertMissingTask(jdbc, deleteRoot, "delete removed draft task");

        String returnRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test return feedback task",
                "content", "Task for feedback return API.",
                "planDeadline", "2026-11-01"
        ), partyReq));
        String returnDeptTask = id(service.dispatchChild(params(
                "parentId", returnRoot,
                "personNodeId", deptNode,
                "receiverId", DEPT,
                "title", "DW3 test return feedback task - dept",
                "content", "Department feedback will be returned.",
                "planDeadline", "2026-10-30"
        ), partyReq));
        assertSuccess(service.acceptTask(returnDeptTask, deptReq), "return flow dept accept");
        String returnedFeedback = id(service.submitFeedback(params(
                "taskId", returnDeptTask,
                "content", "Department feedback to be returned."
        ), deptReq));
        assertContainsFeedback(service.listFeedback(returnDeptTask, partyReq), returnedFeedback, "feedback/list before return");
        assertSuccess(service.returnFeedback(returnedFeedback, "Need more detail.", partyReq), "feedback return");
        assertStatus(jdbc, returnDeptTask, "RETURNED");
        String resubmittedFeedback = id(service.submitFeedback(params(
                "taskId", returnDeptTask,
                "content", "Department feedback resubmitted after return."
        ), deptReq));
        if (returnedFeedback.equals(resubmittedFeedback)) {
            throw new IllegalStateException("Returned feedback was overwritten instead of preserving history.");
        }
        List<Map<String, Object>> returnedRows = service.listFeedback(returnDeptTask, partyReq);
        assertContainsFeedback(returnedRows, returnedFeedback, "feedback/list after resubmit keeps returned row");
        assertContainsFeedback(returnedRows, resubmittedFeedback, "feedback/list after resubmit contains new pending row");
        assertFeedbackFields(returnedRows);
        assertSuccess(service.confirmFeedback(resubmittedFeedback, partyReq), "resubmitted feedback confirm");

        List<Map<String, Object>> partyTasks = service.listTasks(partyReq, batchId, "");
        if (partyTasks.size() < 7) {
            throw new IllegalStateException("task/list did not return expected party-visible tasks.");
        }
        assertTaskListFields(partyTasks, false);
        assertTaskListFields(service.listTasks(deptReq, batchId, ""), true);
        assertPersonTreeScope(service.listPersonTree(deptReq), deptNode, partyNode, "department person tree scope");
        if (!service.listPersonTree(staffReq).isEmpty()) {
            throw new IllegalStateException("Staff should not see person tree maintenance data.");
        }
        assertSuccess(service.stats(partyReq, batchId), "stats");
        assertStatsScope(service.stats(deptReq, batchId), DwWorkPlan3Constants.LEVEL_PARTY);

        assertStatus(jdbc, rootId, "COMPLETED");
        assertStatus(jdbc, deptTaskId, "COMPLETED");
        assertStatus(jdbc, officeTaskId, "COMPLETED");
        assertStatus(jdbc, staffTaskId, "COMPLETED");
        assertStatus(jdbc, draftRoot, "DRAFT");
        assertStatus(jdbc, overdueRoot, "WAIT_CHILD");
        assertStatus(jdbc, overdueDeptTask, "TODO");

        int taskCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        int feedbackCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_FEEDBACK where CREATED_BY in (?,?,?,?,?) and CONFIRM_RESULT='CONFIRMED'", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        if (taskCount < 8 || feedbackCount < 4) {
            throw new IllegalStateException("Unexpected test data count, taskCount=" + taskCount + ", feedbackCount=" + feedbackCount);
        }

        System.out.println("DWWORKPLAN3_BUSINESS_OK");
        System.out.println("apiCoverage=currentUser,personSave,personList,personReceivers,batchCreate,taskSaveRoot,taskDispatch,taskAccept,taskTakeBack,taskDelete,taskList,feedbackSubmit,feedbackList,feedbackConfirm,feedbackReturn,stats");
        System.out.println("batchId=" + batchId);
        System.out.println("completedRootId=" + rootId);
        System.out.println("draftRootId=" + draftRoot);
        System.out.println("overdueDeptTaskId=" + overdueDeptTask);
        System.out.println("taskCount=" + taskCount);
        System.out.println("confirmedFeedbackCount=" + feedbackCount);
        clean(jdbc);
        assertNoDw3TestData(jdbc);
        System.out.println("testDataCleanup=OK");
    }

    private static void clean(JdbcTemplate jdbc) {
        jdbc.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%')", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_ATTACHMENT where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_BATCH where CREATED_BY=?", PARTY);
        jdbc.update("delete from DYN_DW_PLAN3_PERSON_TREE where CREATED_BY in (?,?) or USER_ID in (?,?,?,?,?,?) or NODE_NAME like 'DW3 Test%'", PARTY, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        try {
            jdbc.update("delete from SYS_MSG where RECV_USER in (?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2);
        } catch (Exception ignored) {
        }
    }

    private static void assertNoDw3TestData(JdbcTemplate jdbc) {
        int tasks = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%'", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        int feedback = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_FEEDBACK where CREATED_BY in (?,?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        int persons = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_PERSON_TREE where CREATED_BY in (?,?) or USER_ID in (?,?,?,?,?,?) or NODE_NAME like 'DW3 Test%'", Integer.class, PARTY, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        if (tasks != 0 || feedback != 0 || persons != 0) {
            throw new IllegalStateException("DW3 test cleanup failed, tasks=" + tasks + ", feedback=" + feedback + ", persons=" + persons);
        }
    }

    private static void assertStatus(JdbcTemplate jdbc, String id, String expected) {
        String actual = jdbc.queryForObject("select STATUS from DYN_DW_PLAN3_TASK where ID=?", String.class, id);
        if (!expected.equals(actual)) {
            throw new IllegalStateException("Unexpected task status, id=" + id + ", expected=" + expected + ", actual=" + actual);
        }
    }

    private static void assertMissingTask(JdbcTemplate jdbc, String id, String label) {
        Integer count = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where ID=?", Integer.class, id);
        if (count != null && count > 0) {
            throw new IllegalStateException(label + " failed, task still exists: " + id);
        }
    }

    private static void assertContainsNode(List<Map<String, Object>> rows, String id, String label) {
        for (Map<String, Object> row : rows) {
            if (id.equals(String.valueOf(row.get("ID")))) {
                return;
            }
        }
        throw new IllegalStateException(label + " did not contain node " + id);
    }

    private static void assertContainsFeedback(List<Map<String, Object>> rows, String id, String label) {
        for (Map<String, Object> row : rows) {
            if (id.equals(String.valueOf(row.get("ID")))) {
                return;
            }
        }
        throw new IllegalStateException(label + " did not contain feedback " + id);
    }

    private static void assertTaskListFields(List<Map<String, Object>> rows, boolean requireNotice) {
        boolean hasChildCount = false;
        boolean hasNotice = false;
        for (Map<String, Object> row : rows) {
            if (row.containsKey("PARENT_ID")
                    && row.containsKey("ROOT_ID")
                    && row.containsKey("TASK_LEVEL")
                    && row.containsKey("CHILD_COUNT")
                    && row.containsKey("CHILD_OPEN_COUNT")
                    && row.containsKey("OVERDUE")
                    && row.containsKey("NOTICE_FLAG")) {
                hasChildCount = true;
            }
            if ("Y".equals(String.valueOf(row.get("NOTICE_FLAG")))) {
                hasNotice = true;
            }
        }
        if (!hasChildCount) {
            throw new IllegalStateException("task/list is missing fields required by the tree table.");
        }
        if (requireNotice && !hasNotice) {
            throw new IllegalStateException("task/list did not mark any pending row with NOTICE_FLAG.");
        }
    }

    private static void assertFeedbackFields(List<Map<String, Object>> rows) {
        boolean hasReturnedReason = false;
        boolean hasPendingTime = false;
        for (Map<String, Object> row : rows) {
            if (!row.containsKey("FEEDBACK_TIME") || !row.containsKey("RETURN_REASON") || !row.containsKey("TASK_LEVEL")) {
                throw new IllegalStateException("feedback/list is missing fields required by the feedback chain.");
            }
            if ("RETURNED".equals(String.valueOf(row.get("CONFIRM_RESULT"))) && row.get("RETURN_REASON") != null) {
                hasReturnedReason = true;
            }
            if ("PENDING".equals(String.valueOf(row.get("CONFIRM_RESULT"))) && row.get("FEEDBACK_TIME") != null) {
                hasPendingTime = true;
            }
        }
        if (!hasReturnedReason) {
            throw new IllegalStateException("feedback/list did not keep returned reason.");
        }
        if (!hasPendingTime) {
            throw new IllegalStateException("feedback/list did not return feedback time for pending row.");
        }
    }

    private static void assertPersonTreeScope(List<Map<String, Object>> rows, String includedNode, String excludedNode, String label) {
        boolean included = false;
        for (Map<String, Object> row : rows) {
            String id = String.valueOf(row.get("ID"));
            if (includedNode.equals(id)) {
                included = true;
            }
            if (excludedNode.equals(id)) {
                throw new IllegalStateException(label + " leaked upper-level node " + excludedNode);
            }
        }
        if (!included) {
            throw new IllegalStateException(label + " did not include current node " + includedNode);
        }
    }

    private static void assertStatsScope(Map<String, Object> result, String forbiddenLevel) {
        assertSuccess(result, "stats scope");
        List<Map<String, Object>> byLevel = (List<Map<String, Object>>) result.get("byLevel");
        for (Map<String, Object> row : byLevel) {
            if (forbiddenLevel.equals(String.valueOf(row.get("TASK_LEVEL")))) {
                throw new IllegalStateException("stats leaked forbidden level " + forbiddenLevel);
            }
        }
    }

    private static void assertSuccess(Map<String, Object> result, String step) {
        if (!"success".equals(String.valueOf(result.get("flag")))) {
            throw new IllegalStateException(step + " failed: " + result.get("errorMsg"));
        }
    }

    private static void assertFailure(Map<String, Object> result, String step) {
        if (!"failure".equals(String.valueOf(result.get("flag")))) {
            throw new IllegalStateException(step + " should fail, actual: " + result);
        }
    }

    private static String id(Map<String, Object> result) {
        assertSuccess(result, "get id");
        Object id = result.get("id");
        if (id == null || String.valueOf(id).trim().length() == 0) {
            throw new IllegalStateException("API did not return id: " + result);
        }
        return String.valueOf(id);
    }

    private static Map<String, String> params(String... kv) {
        Map<String, String> map = new HashMap<String, String>();
        for (int i = 0; i + 1 < kv.length; i += 2) {
            map.put(kv[i], kv[i + 1]);
        }
        return map;
    }

    private static void inject(Object target, String fieldName, Object value) throws Exception {
        Field field = target.getClass().getDeclaredField(fieldName);
        field.setAccessible(true);
        field.set(target, value);
    }

    private static HttpServletRequest request(String userId, String userName) {
        final Map<String, Object> attrs = new HashMap<String, Object>();
        SysUser user = new SysUser();
        user.setId(userId);
        user.setName(userName);
        user.setLoginName(userId);
        attrs.put("CURRENT_LOGINUSER", user);
        attrs.put("CURRENT_ORG_IDENTITY", "ORG_ROOT");
        attrs.put("userId", userId);

        final HttpSession session = (HttpSession) Proxy.newProxyInstance(
                DwWorkPlan3BusinessVerifier.class.getClassLoader(),
                new Class[]{HttpSession.class},
                new InvocationHandler() {
                    public Object invoke(Object proxy, Method method, Object[] args) {
                        String name = method.getName();
                        if ("getAttribute".equals(name)) {
                            return attrs.get(String.valueOf(args[0]));
                        }
                        if ("setAttribute".equals(name)) {
                            attrs.put(String.valueOf(args[0]), args[1]);
                            return null;
                        }
                        if ("removeAttribute".equals(name)) {
                            attrs.remove(String.valueOf(args[0]));
                            return null;
                        }
                        if ("getId".equals(name)) {
                            return "DW3_TEST_SESSION_" + userId;
                        }
                        return defaultValue(method.getReturnType());
                    }
                });

        return (HttpServletRequest) Proxy.newProxyInstance(
                DwWorkPlan3BusinessVerifier.class.getClassLoader(),
                new Class[]{HttpServletRequest.class},
                new InvocationHandler() {
                    public Object invoke(Object proxy, Method method, Object[] args) {
                        String name = method.getName();
                        if ("getSession".equals(name)) {
                            return session;
                        }
                        if ("getRemoteAddr".equals(name)) {
                            return "127.0.0.1";
                        }
                        if ("getParameterMap".equals(name)) {
                            return new HashMap<String, String[]>();
                        }
                        if ("getHeader".equals(name)) {
                            return null;
                        }
                        return defaultValue(method.getReturnType());
                    }
                });
    }

    private static Object defaultValue(Class<?> type) {
        if (!type.isPrimitive()) {
            return null;
        }
        if (Boolean.TYPE.equals(type)) {
            return false;
        }
        if (Byte.TYPE.equals(type)) {
            return (byte) 0;
        }
        if (Short.TYPE.equals(type)) {
            return (short) 0;
        }
        if (Integer.TYPE.equals(type)) {
            return 0;
        }
        if (Long.TYPE.equals(type)) {
            return 0L;
        }
        if (Float.TYPE.equals(type)) {
            return 0f;
        }
        if (Double.TYPE.equals(type)) {
            return 0d;
        }
        if (Character.TYPE.equals(type)) {
            return (char) 0;
        }
        return null;
    }
}
'@

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($javaFile, $javaSource, $utf8NoBom)

$classpath = "$Root\WebRoot\WEB-INF\classes;$Root\WebRoot\WEB-INF\lib\*"
& "D:\jdk1.8\bin\javac.exe" -encoding UTF-8 -cp $classpath -d $workDir $javaFile
if ($LASTEXITCODE -ne 0) {
  throw "javac failed"
}

& "D:\jdk1.8\bin\java.exe" "-Dfile.encoding=UTF-8" -cp "$workDir;$classpath" DwWorkPlan3BusinessVerifier $DbUrl $DbUser $DbPassword
if ($LASTEXITCODE -ne 0) {
  throw "business verifier failed"
}
