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
    private static final String OTHER_OFFICE = "DW3_OTHER_OFFICE";
    private static final String STAFF = "DW3_STAFF";
    private static final String STAFF2 = "DW3_STAFF2";
    private static final String OTHER_STAFF = "DW3_OTHER_STAFF";
    private static final String STRANGER = "DW3_STRANGER";
    private static final String PARTY_NODE = "DW3_NODE_PARTY";

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

        seedPartyRoot(jdbc);
        String partyNode = PARTY_NODE;
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
        String otherOfficeNode = id(service.savePerson(params(
                "parentId", deptNode,
                "nodeName", "DW3 Test Other Office",
                "userId", OTHER_OFFICE,
                "userName", "DW3 Other Office",
                "roleCode", DwWorkPlan3Constants.ROLE_OFFICE,
                "sortNo", "2",
                "enabled", "Y"
        ), partyReq));
        String otherStaffNode = id(service.savePerson(params(
                "parentId", otherOfficeNode,
                "nodeName", "DW3 Test Other Staff",
                "userId", OTHER_STAFF,
                "userName", "DW3 Other Staff",
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "1",
                "enabled", "Y"
        ), partyReq));

        assertContainsNode(service.listPersonTree(), staffNode, "person/list after save");
        assertContainsNode(service.listReceivers(officeReq), staffNode, "person/receivers for office");
        if (!service.listReceivers(partyReq).isEmpty()) {
            throw new IllegalStateException("Party sender should not get dispatch receivers in office-start mode.");
        }

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

        assertFailure(service.createBatch("2026", "Q3", partyReq), "party batch create should be read-only");
        assertFailure(service.saveRootTask(params(
                "title", "DW3 test party should not create",
                "content", "Party is read-only in office-start mode.",
                "planDeadline", "2026-09-30"
        ), partyReq), "party root create should be read-only");
        assertFailure(service.saveRootTask(params(
                "title", "DW3 test dept should not create",
                "content", "Department minister confirms only.",
                "planDeadline", "2026-09-30"
        ), deptReq), "department root create should be read-only");

        String batchId = id(service.createBatch("2026", "Q3", officeReq));
        String rootId = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test office root task",
                "workCategory", "DW3 category",
                "targetDesc", "Office starts, staff executes, department confirms.",
                "content", "Office creates a task and dispatches directly to staff.",
                "planDeadline", "2026-09-30",
                "personNodeId", staffNode,
                "receiverId", STAFF
        ), officeReq));
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_DRAFT);
        assertFailure(service.directDispatchRoot(params(
                "id", rootId,
                "batchId", batchId,
                "title", "DW3 test office root task",
                "content", "Party must not direct dispatch.",
                "planDeadline", "2026-09-30",
                "personNodeId", staffNode,
                "receiverId", STAFF
        ), partyReq), "party direct dispatch should be read-only");

        String staffTaskId = id(service.directDispatchRoot(params(
                "id", rootId,
                "batchId", batchId,
                "title", "DW3 test office root task",
                "workCategory", "DW3 category",
                "targetDesc", "Office starts, staff executes, department confirms.",
                "content", "Office creates a task and dispatches directly to staff.",
                "planDeadline", "2026-09-30",
                "personNodeId", staffNode,
                "receiverId", STAFF
        ), officeReq));
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_WAIT_CHILD);
        String actualStaffTaskId = jdbc.queryForObject("select ID from DYN_DW_PLAN3_TASK where PARENT_ID=? and RECEIVER_ID=?", String.class, rootId, STAFF);
        if (!staffTaskId.equals(actualStaffTaskId)) {
            throw new IllegalStateException("directDispatchRoot should return the created staff child task id.");
        }
        assertStatus(jdbc, staffTaskId, DwWorkPlan3Constants.STATUS_TODO);
        assertFailure(service.dispatchChild(params(
                "parentId", rootId,
                "personNodeId", staff2Node,
                "receiverId", STAFF2,
                "title", "DW3 test second staff dispatch should fail",
                "content", "Office root can only dispatch once.",
                "planDeadline", "2026-09-15"
        ), officeReq), "duplicate dispatch to another staff");

        assertSuccess(service.acceptTask(staffTaskId, staffReq), "staff accept");
        String staffFeedback = id(service.submitFeedback(params(
                "taskId", staffTaskId,
                "content", "Staff feedback: completed."
        ), staffReq));
        assertStatus(jdbc, staffTaskId, DwWorkPlan3Constants.STATUS_PENDING_CONFIRM);
        assertSuccess(service.confirmFeedback(staffFeedback, officeReq), "office confirms staff feedback");
        assertStatus(jdbc, staffTaskId, DwWorkPlan3Constants.STATUS_COMPLETED);
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_DOING);
        String officeFeedback = id(service.submitFeedback(params(
                "taskId", rootId,
                "content", "Office feedback: all staff feedback confirmed."
        ), officeReq));
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_PENDING_CONFIRM);
        List<Map<String, Object>> rootFeedbackRows = service.listFeedback(rootId, deptReq);
        if (rootFeedbackRows.isEmpty()) {
            throw new IllegalStateException("Office upward feedback should create department confirmation feedback.");
        }
        assertContainsFeedback(rootFeedbackRows, officeFeedback, "department list contains office upward feedback");
        assertSuccess(service.confirmFeedback(officeFeedback, deptReq), "department final confirm");
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_COMPLETED);
        List<Map<String, Object>> recursiveRows = service.listFeedback(rootId, partyReq);
        assertContainsFeedback(recursiveRows, staffFeedback, "party feedback chain contains staff feedback");
        assertContainsFeedback(recursiveRows, officeFeedback, "party feedback chain contains office upward feedback");
        assertFeedbackTimelineOrder(recursiveRows, staffFeedback, officeFeedback);
        assertFeedbackReviewerFields(recursiveRows, staffFeedback, officeFeedback);

        String draftRoot = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test office draft task",
                "content", "Draft task for list and delete checks.",
                "planDeadline", "2026-10-15",
                "personNodeId", staffNode,
                "receiverId", STAFF
        ), officeReq));
        assertFailure(service.deleteTask(draftRoot, partyReq), "party delete should be read-only");
        assertFailure(service.deleteTask(draftRoot, deptReq), "department delete should be read-only");
        assertSuccess(service.deleteTask(draftRoot, officeReq), "office deletes own draft");
        assertMissingTask(jdbc, draftRoot, "office delete removed draft task");

        String staffBatchId = id(service.createBatch("2026", "Q3", staffReq));
        String staffRoot = id(service.saveRootTask(params(
                "batchId", staffBatchId,
                "title", "DW3 test staff self task",
                "content", "Staff self-created task completes directly.",
                "planDeadline", "2026-10-20"
        ), staffReq));
        assertStatus(jdbc, staffRoot, DwWorkPlan3Constants.STATUS_DOING);
        assertSuccess(service.completeSelfTask(params(
                "id", staffRoot,
                "content", "Staff completed self task."
        ), staffReq), "staff direct complete");
        assertStatus(jdbc, staffRoot, DwWorkPlan3Constants.STATUS_COMPLETED);

        String externalImportRow = jsonRows(params(
                "rowNumber", "2",
                "title", "DW3 test external import should fail",
                "workCategory", "DW3 import",
                "targetDesc", "External staff must be blocked.",
                "content", "This row points outside the current office.",
                "planDeadline", "2026-11-01",
                "deptName", "DW3 Test Other Staff"
        ));
        assertFailure(service.saveImportDrafts(externalImportRow, "2026", "Q3", officeReq), "import draft should reject staff outside current office");
        assertFailure(service.directDispatchImport(externalImportRow, "2026", "Q3", officeReq), "import direct dispatch should reject staff outside current office");

        String validImportRow = jsonRows(params(
                "rowNumber", "2",
                "title", "DW3 test valid import",
                "workCategory", "DW3 import",
                "targetDesc", "Current office staff can be imported.",
                "content", "This row points to current office staff.",
                "planDeadline", "2026-11-05",
                "deptName", "DW3 Test Staff2",
                "receiverLogin", "OLD_LOGIN_COLUMN_MUST_BE_IGNORED"
        ));
        assertSuccessCount(service.saveImportDrafts(validImportRow, "2026", "Q3", officeReq), "valid import draft", 1);
        assertSuccessCount(service.directDispatchImport(validImportRow, "2026", "Q3", officeReq), "valid import direct dispatch", 1);

        List<Map<String, Object>> partyTasks = service.listTasks(partyReq, batchId, "");
        if (partyTasks.isEmpty()) {
            throw new IllegalStateException("party read-only list should see office tasks.");
        }
        assertTaskListFields(partyTasks, false);
        assertTaskListFields(service.listTasks(officeReq, batchId, ""), false);
        assertPersonTreeScope(service.listPersonTree(deptReq), deptNode, partyNode, "department person tree scope");
        if (!service.listPersonTree(staffReq).isEmpty()) {
            throw new IllegalStateException("Staff should not see person tree maintenance data.");
        }
        assertSuccess(service.stats(partyReq, batchId), "party stats");
        assertSuccess(service.stats(deptReq, batchId), "department stats");

        int taskCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        int feedbackCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_FEEDBACK where CREATED_BY in (?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        if (taskCount < 3 || feedbackCount < 2) {
            throw new IllegalStateException("Unexpected test data count, taskCount=" + taskCount + ", feedbackCount=" + feedbackCount);
        }

        System.out.println("DWWORKPLAN3_BUSINESS_OK");
        System.out.println("apiCoverage=currentUser,personSave,personList,personReceivers,batchCreate,taskSaveRoot,directDispatch,taskAccept,taskDelete,taskComplete,taskList,feedbackSubmit,feedbackList,feedbackConfirm,importSaveDrafts,importDirectDispatch,stats");
        System.out.println("batchId=" + batchId);
        System.out.println("completedRootId=" + rootId);
        System.out.println("staffSelfRootId=" + staffRoot);
        System.out.println("taskCount=" + taskCount);
        System.out.println("feedbackCount=" + feedbackCount);
        clean(jdbc);
        assertNoDw3TestData(jdbc);
        System.out.println("testDataCleanup=OK");
    }

    private static void clean(JdbcTemplate jdbc) {
        jdbc.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%')", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_ATTACHMENT where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_BATCH where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_PERSON_TREE where CREATED_BY in (?,?) or USER_ID in (?,?,?,?,?,?) or NODE_NAME like 'DW3 Test%'", PARTY, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        try {
            jdbc.update("delete from SYS_MSG where RECV_USER in (?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2);
        } catch (Exception ignored) {
        }
    }

    private static void seedPartyRoot(JdbcTemplate jdbc) {
        jdbc.update("insert into DYN_DW_PLAN3_PERSON_TREE(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?)",
                PARTY_NODE, PARTY, PARTY, "127.0.0.1", "ORG_ROOT", null, "DW3 Test Party", PARTY, "DW3 Party", DwWorkPlan3Constants.ROLE_PARTY, 1, "Y", "DW3 test seeded root");
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

    private static void assertFeedbackTimelineOrder(List<Map<String, Object>> rows, String earlierFeedbackId, String laterFeedbackId) {
        int earlier = feedbackIndex(rows, earlierFeedbackId);
        int later = feedbackIndex(rows, laterFeedbackId);
        if (earlier < 0 || later < 0) {
            throw new IllegalStateException("feedback/list did not include both rows required for timeline order check.");
        }
        if (earlier >= later) {
            throw new IllegalStateException("feedback/list must be ordered by feedback time from earliest to latest.");
        }
    }

    private static void assertFeedbackReviewerFields(List<Map<String, Object>> rows, String... feedbackIds) {
        for (String feedbackId : feedbackIds) {
            Map<String, Object> row = feedbackRow(rows, feedbackId);
            if (row == null) {
                throw new IllegalStateException("feedback/list missing row for reviewer check: " + feedbackId);
            }
            if (blank(row.get("CONFIRM_USER_NAME")) || row.get("CONFIRM_TIME") == null) {
                throw new IllegalStateException("feedback/list must include reviewer name and review time for processed feedback: " + feedbackId);
            }
        }
    }

    private static int feedbackIndex(List<Map<String, Object>> rows, String feedbackId) {
        for (int i = 0; i < rows.size(); i++) {
            if (feedbackId.equals(String.valueOf(rows.get(i).get("ID")))) {
                return i;
            }
        }
        return -1;
    }

    private static Map<String, Object> feedbackRow(List<Map<String, Object>> rows, String feedbackId) {
        for (Map<String, Object> row : rows) {
            if (feedbackId.equals(String.valueOf(row.get("ID")))) {
                return row;
            }
        }
        return null;
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

    private static void assertSuccessCount(Map<String, Object> result, String step, int expectedCount) {
        assertSuccess(result, step);
        int actual = Integer.parseInt(String.valueOf(result.get("count")));
        if (actual != expectedCount) {
            throw new IllegalStateException(step + " expected count " + expectedCount + ", actual: " + result);
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

    private static boolean blank(Object value) {
        return value == null || String.valueOf(value).trim().length() == 0;
    }

    private static Map<String, String> params(String... kv) {
        Map<String, String> map = new HashMap<String, String>();
        for (int i = 0; i + 1 < kv.length; i += 2) {
            map.put(kv[i], kv[i + 1]);
        }
        return map;
    }

    private static String jsonRows(Map<String, String>... rows) {
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < rows.length; i++) {
            if (i > 0) {
                json.append(",");
            }
            json.append("{");
            int index = 0;
            for (Map.Entry<String, String> entry : rows[i].entrySet()) {
                if (index++ > 0) {
                    json.append(",");
                }
                json.append("\"").append(jsonEscape(entry.getKey())).append("\":");
                json.append("\"").append(jsonEscape(entry.getValue())).append("\"");
            }
            json.append("}");
        }
        json.append("]");
        return json.toString();
    }

    private static String jsonEscape(String value) {
        if (value == null) {
            return "";
        }
        return value.replace("\\", "\\\\").replace("\"", "\\\"");
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
