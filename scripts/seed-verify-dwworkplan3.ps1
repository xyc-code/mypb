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
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
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
    private static final String LEADER_ADMIN = "DW3_LEADER_ADMIN";
    private static final String PLATFORM_ADMIN = "DW3_PLATFORM_ADMIN";
    private static final String LEADER_ADMIN_ROLE = "DW3_ROLE_LEADER_ADMIN";
    private static final String PLATFORM_ADMIN_ROLE = "DW3_ROLE_PLATFORM_ADMIN";
    private static final String PARTY_NODE = "DW3_NODE_PARTY";
    private static final String GRASSROOT_BIZ = "DW3_GRASS_BIZ";
    private static final String GRASSROOT_FREE_BIZ = "DW3_GRASS_FREE_BIZ";
    private static final String GRASSROOT_INVALID_BIZ = "DW3_GRASS_INVALID_BIZ";
    private static final String GRASSROOT_ORG = "DW3_GRASS_ORG";
    private static final String GRASSROOT_ORG_MISSING = "DW3_GRASS_ORG_MISSING";
    private static final String GRASSROOT_INVALID_ORG = "DW3_GRASS_INVALID_ORG";
    private static final String GRASSROOT_FZR = "DW3_GRASS_FZR";
    private static final String GRASSROOT_JSR = "DW3_GRASS_JSR";
    private static final String GRASSROOT_UNION_ORG = "DW3_GRASS_UNION_ORG";
    private static final String GRASSROOT_UNION_FZR = "DW3_GRASS_UNION_FZR";
    private static final String GRASSROOT_UNION_JSR = "DW3_GRASS_UNION_JSR";
    private static final String GRASSROOT_YOUTH_ORG = "DW3_GRASS_YOUTH_ORG";
    private static final String GRASSROOT_YOUTH_FZR = "DW3_GRASS_YOUTH_FZR";

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

        ensureGrassrootExternalTables(jdbc);
        clean(jdbc);

        HttpServletRequest partyReq = request(PARTY, "DW3 Party");
        HttpServletRequest deptReq = request(DEPT, "DW3 Dept");
        HttpServletRequest officeReq = request(OFFICE, "DW3 Office");
        HttpServletRequest otherOfficeReq = request(OTHER_OFFICE, "DW3 Other Office");
        HttpServletRequest staffReq = request(STAFF, "DW3 Staff");
        HttpServletRequest staff2Req = request(STAFF2, "DW3 Staff2");
        HttpServletRequest leaderAdminReq = request(LEADER_ADMIN, "DW3 Leader Admin");
        HttpServletRequest platformAdminReq = request(PLATFORM_ADMIN, "DW3 Platform Admin");

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
                "userName", "DW3 Office(" + OFFICE + ")",
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
                "userName", "DW3 Staff2(" + STAFF2 + ")",
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

        seedPersonTreeAdminRoles(jdbc);
        assertPersonTreeAdmin(service, jdbc, leaderAdminReq, officeNode, "LEADER");
        assertPersonTreeAdmin(service, jdbc, platformAdminReq, officeNode, "PLATFORM");
        assertFailure(service.savePerson(params(
                "parentId", officeNode,
                "nodeName", "DW3 Test Staff Unauthorized",
                "userId", "DW3_UNAUTHORIZED",
                "userName", "DW3 Unauthorized",
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "99",
                "enabled", "Y"
        ), staffReq), "staff cannot maintain person tree through backend");

        assertContainsNode(service.listPersonTree(), staffNode, "person/list after save");
        assertContainsNode(service.listReceivers(officeReq), staffNode, "person/receivers for office");
        assertContainsNode(service.listReceivers(partyReq), deptNode, "person/receivers for party");
        assertImportTemplate(service, officeReq);

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
        String partyRootId = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test party root task",
                "content", "Party creates a root task and dispatches it to a direct department child.",
                "planDeadline", "2026-09-30",
                "personNodeId", deptNode,
                "receiverId", DEPT
        ), partyReq));
        Map<String, Object> partyRoot = jdbc.queryForMap("select TASK_LEVEL,STATUS from DYN_DW_PLAN3_TASK where ID=?", partyRootId);
        assertEquals(DwWorkPlan3Constants.LEVEL_PARTY, partyRoot.get("TASK_LEVEL"), "party root task level");
        assertEquals(DwWorkPlan3Constants.STATUS_DRAFT, partyRoot.get("STATUS"), "party root draft status");
        boolean partyCrossLevelRejected = false;
        try {
            Map<String, Object> crossLevelResult = service.dispatchChild(params(
                    "parentId", partyRootId,
                    "personNodeId", officeNode,
                    "receiverId", OFFICE,
                    "title", "DW3 test party cross-level dispatch",
                    "content", "Party must not skip the department level.",
                    "planDeadline", "2026-09-30"
            ), partyReq);
            partyCrossLevelRejected = "failure".equals(String.valueOf(crossLevelResult.get("flag")));
        } catch (IllegalArgumentException expected) {
            partyCrossLevelRejected = true;
        }
        if (!partyCrossLevelRejected) {
            throw new IllegalStateException("party cannot dispatch across levels should fail");
        }
        String deptTaskId = id(service.directDispatchRoot(params(
                "id", partyRootId,
                "batchId", batchId,
                "title", "DW3 test party root task",
                "content", "Party creates a root task and dispatches it to a direct department child.",
                "planDeadline", "2026-09-30",
                "personNodeId", deptNode,
                "receiverId", DEPT
        ), partyReq));
        Map<String, Object> deptTask = jdbc.queryForMap(
                "select PARENT_ID,TASK_LEVEL,RECEIVER_ID,STATUS from DYN_DW_PLAN3_TASK where ID=?", deptTaskId);
        assertEquals(partyRootId, deptTask.get("PARENT_ID"), "party dispatch child parent");
        assertEquals(DwWorkPlan3Constants.LEVEL_DEPT, deptTask.get("TASK_LEVEL"), "party dispatch child level");
        assertEquals(DEPT, deptTask.get("RECEIVER_ID"), "party dispatch receiver");
        assertEquals(DwWorkPlan3Constants.STATUS_TODO, deptTask.get("STATUS"), "party dispatch child status");
        assertContainsNode(service.listReceivers(deptReq), officeNode, "person/receivers for department minister");
        assertSuccess(service.acceptTask(deptTaskId, deptReq), "department minister accepts party task");
        String officeTaskFromDeptId = id(service.dispatchChild(params(
                "parentId", deptTaskId,
                "personNodeId", officeNode,
                "receiverId", OFFICE,
                "title", "DW3 test department dispatch",
                "content", "Department minister dispatches an accepted task to a direct office director.",
                "planDeadline", "2026-09-30"
        ), deptReq));
        Map<String, Object> officeTaskFromDept = jdbc.queryForMap(
                "select PARENT_ID,TASK_LEVEL,RECEIVER_ID,STATUS from DYN_DW_PLAN3_TASK where ID=?", officeTaskFromDeptId);
        assertEquals(deptTaskId, officeTaskFromDept.get("PARENT_ID"), "department dispatch child parent");
        assertEquals(DwWorkPlan3Constants.LEVEL_OFFICE, officeTaskFromDept.get("TASK_LEVEL"), "department dispatch child level");
        assertEquals(OFFICE, officeTaskFromDept.get("RECEIVER_ID"), "department dispatch receiver");
        assertEquals(DwWorkPlan3Constants.STATUS_TODO, officeTaskFromDept.get("STATUS"), "department dispatch child status");
        assertSuccess(service.acceptTask(officeTaskFromDeptId, officeReq), "office accepts department task");
        String ordinaryStaffTaskId = id(service.dispatchChild(params(
                "parentId", officeTaskFromDeptId,
                "personNodeId", staffNode,
                "receiverId", STAFF,
                "title", "DW3 test ordinary feedback review",
                "content", "Ordinary staff feedback review under a non-root office task.",
                "planDeadline", "2026-09-30"
        ), officeReq));
        assertSuccess(service.acceptTask(ordinaryStaffTaskId, staffReq), "staff accepts ordinary review task");
        String returnedFeedback = id(service.submitFeedback(params(
                "taskId", ordinaryStaffTaskId,
                "content", "Original content must survive a return."
        ), staffReq));
        assertSuccess(service.returnFeedback(returnedFeedback, "Return without saving reviewer draft.", officeReq), "office returns staff feedback");
        assertEquals("Original content must survive a return.", jdbc.queryForObject(
                "select FEEDBACK_CONTENT from DYN_DW_PLAN3_FEEDBACK where ID=?", String.class, returnedFeedback),
                "return keeps original staff feedback content");
        String retriedFeedback = id(service.submitFeedback(params(
                "taskId", ordinaryStaffTaskId,
                "content", "Staff retry before office correction."
        ), staffReq));
        String ordinaryEditedContent = "Staff retry corrected by direct office director.";
        assertSuccess(service.confirmFeedback(retriedFeedback, ordinaryEditedContent, officeReq), "ordinary confirm saves reviewed content");
        assertEquals(ordinaryEditedContent, jdbc.queryForObject(
                "select FEEDBACK_CONTENT from DYN_DW_PLAN3_FEEDBACK where ID=?", String.class, retriedFeedback),
                "ordinary confirm persisted reviewed content");
        String partyImportRow = jsonRows(params(
                "rowNumber", "2",
                "title", "DW3 test party import",
                "targetDesc", "Party import targets a direct department minister.",
                "content", "Party imports a task for its direct department child.",
                "planDeadline", "2026-11-05",
                "deptName", "DW3 Dept"
        ));
        assertSuccessCount(service.saveImportDrafts(partyImportRow, "2026", "Q3", partyReq), "party import draft", 1);
        Map<String, Object> partyImportDispatch = service.directDispatchImport(partyImportRow, "2026", "Q3", partyReq);
        assertSuccessCount(partyImportDispatch, "party import direct dispatch", 1);
        String importedDeptTaskId = String.valueOf(((List) partyImportDispatch.get("ids")).get(0));
        Map<String, Object> importedDeptTask = jdbc.queryForMap(
                "select TASK_LEVEL,RECEIVER_ID,STATUS from DYN_DW_PLAN3_TASK where ID=?", importedDeptTaskId);
        assertEquals(DwWorkPlan3Constants.LEVEL_DEPT, importedDeptTask.get("TASK_LEVEL"), "party import child level");
        assertEquals(DEPT, importedDeptTask.get("RECEIVER_ID"), "party import receiver");
        assertEquals(DwWorkPlan3Constants.STATUS_TODO, importedDeptTask.get("STATUS"), "party import child status");
        assertSuccess(service.deleteTask(partyRootId, partyReq), "party deletes own root task subtree");
        assertMissingTask(jdbc, partyRootId, "party delete removed root task");
        assertMissingTask(jdbc, deptTaskId, "party delete removed department child task");
        assertMissingTask(jdbc, officeTaskFromDeptId, "party delete removed office child task");
        assertMissingTask(jdbc, ordinaryStaffTaskId, "party delete removed staff child task");
        assertFailure(service.saveRootTask(params(
                "title", "DW3 test dept should not create",
                "content", "Department minister confirms only.",
                "planDeadline", "2026-09-30"
        ), deptReq), "department root create should be read-only");

        String rootId = id(service.saveRootTask(params(
                "batchId", batchId,
                "title", "DW3 test office root task",
                "targetDesc", "Office starts, staff executes, department confirms.",
                "content", "Office creates a task and dispatches directly to staff.",
                "planDeadline", "2026-09-30",
                "personNodeId", staffNode,
                "receiverId", STAFF
        ), officeReq));
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_DRAFT);

        String staffTaskId = id(service.directDispatchRoot(params(
                "id", rootId,
                "batchId", batchId,
                "title", "DW3 test office root task",
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
        assertFailure(service.confirmFeedback(staffFeedback, "Unauthorized department edit.", deptReq), "department cannot edit staff feedback");
        assertFailure(service.confirmFeedback(staffFeedback, "Unauthorized party edit.", partyReq), "party cannot edit staff feedback");
        assertFailure(service.confirmFeedback(staffFeedback, "Unauthorized other-office edit.", otherOfficeReq), "other office cannot edit staff feedback");
        assertFailure(service.confirmAndForwardFeedback(staffFeedback, "Invalid target must roll back.", STRANGER, officeReq), "invalid department target is rejected");
        assertStatus(jdbc, staffTaskId, DwWorkPlan3Constants.STATUS_PENDING_CONFIRM);
        assertEquals("Staff feedback: completed.", jdbc.queryForObject(
                "select FEEDBACK_CONTENT from DYN_DW_PLAN3_FEEDBACK where ID=?", String.class, staffFeedback),
                "invalid combined review leaves staff feedback unchanged");
        String editedStaffFeedback = "Staff feedback: typo corrected by office director.";
        Map<String, Object> combinedFeedback = service.confirmAndForwardFeedback(staffFeedback, editedStaffFeedback, DEPT, officeReq);
        assertSuccess(combinedFeedback, "office confirms and forwards staff feedback");
        assertEquals("Y", combinedFeedback.get("forwarded"), "combined feedback forwarded flag");
        assertStatus(jdbc, staffTaskId, DwWorkPlan3Constants.STATUS_COMPLETED);
        assertStatus(jdbc, rootId, DwWorkPlan3Constants.STATUS_PENDING_CONFIRM);
        assertEquals(editedStaffFeedback, jdbc.queryForObject(
                "select FEEDBACK_CONTENT from DYN_DW_PLAN3_FEEDBACK where ID=?", String.class, staffFeedback),
                "office-edited staff feedback content");
        String officeFeedback = String.valueOf(combinedFeedback.get("feedbackId"));
        assertEquals(editedStaffFeedback, jdbc.queryForObject(
                "select FEEDBACK_CONTENT from DYN_DW_PLAN3_FEEDBACK where ID=?", String.class, officeFeedback),
                "forwarded department feedback content");
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
        assertFailure(service.deleteTask(draftRoot, partyReq), "party cannot delete office root task");
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

        seedGrassrootExternalData(jdbc);
        List<Map<String, Object>> grassrootBusinesses = service.listGrassrootBusinessTree(staffReq);
        assertContainsExternalRow(grassrootBusinesses, GRASSROOT_BIZ, "grassroot business tree");
        assertContainsExternalRow(grassrootBusinesses, GRASSROOT_INVALID_BIZ, "all named businesses include nonstandard completion type");
        List<Map<String, Object>> grassrootOrganizations = service.listGrassrootPartyOrgTree(staffReq);
        assertContainsExternalRow(grassrootOrganizations, GRASSROOT_ORG, "grassroot party organization tree");
        assertContainsExternalRow(grassrootOrganizations, GRASSROOT_UNION_ORG, "grassroot union organization tree");
        assertContainsExternalRow(grassrootOrganizations, GRASSROOT_YOUTH_ORG, "grassroot youth organization tree");
        assertMissingExternalRow(grassrootOrganizations, GRASSROOT_INVALID_ORG, "organization without a display name");
        assertFailure(service.saveGrassrootDispatch(params(
                "taskId", staffRoot,
                "businessTreeId", GRASSROOT_BIZ,
                "partyOrgIds", GRASSROOT_ORG,
                "deadline", "2026-11-20"
        ), staffReq), "completed staff task cannot dispatch to grassroot");

        String staffGrassrootRoot = id(service.saveRootTask(params(
                "batchId", staffBatchId,
                "title", "DW3 test staff grassroot task",
                "content", "Staff task dispatched to grassroot organizations.",
                "planDeadline", "2026-11-20"
        ), staffReq));
        assertStatus(jdbc, staffGrassrootRoot, DwWorkPlan3Constants.STATUS_DOING);
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffGrassrootRoot,
                "businessTreeId", GRASSROOT_BIZ,
                "partyOrgIds", GRASSROOT_ORG,
                "tradeUnionOrgIds", GRASSROOT_UNION_ORG,
                "leagueOrgIds", GRASSROOT_YOUTH_ORG,
                "year", "2026",
                "month", "07",
                "quarter", "Q3",
                "deadline", "2026-11-20",
                "remark", "DW3 grassroot dispatch remark"
        ), staffReq), "save grassroot dispatch", 3);
        Map<String, Object> grassrootList = service.listGrassrootDispatch(staffGrassrootRoot, staffReq);
        assertSuccess(grassrootList, "list grassroot dispatch");
        assertGrassrootSummary(grassrootList, 3, 0, 3, 0, 3, 0);
        assertGrassrootList((List<Map<String, Object>>) grassrootList.get("rows"), GRASSROOT_BIZ, "d", GRASSROOT_ORG, "DRAFT");
        assertGrassrootList((List<Map<String, Object>>) grassrootList.get("rows"), GRASSROOT_BIZ, "g", GRASSROOT_UNION_ORG, "DRAFT");
        assertGrassrootList((List<Map<String, Object>>) grassrootList.get("rows"), GRASSROOT_BIZ, "t", GRASSROOT_YOUTH_ORG, "DRAFT");
        assertSuccessCount(service.dispatchGrassroot(staffGrassrootRoot, "", staffReq), "dispatch grassroot task", 3);
        Map<String, Object> grassrootAfterDispatch = service.listGrassrootDispatch(staffGrassrootRoot, staffReq);
        assertGrassrootSummary(grassrootAfterDispatch, 3, 3, 0, 0, 3, 0);
        List<Map<String, Object>> grassrootDispatchedRows = (List<Map<String, Object>>) grassrootAfterDispatch.get("rows");
        String grassrootsTaskId = assertGrassrootDispatched(grassrootDispatchedRows, GRASSROOT_BIZ, "d", GRASSROOT_ORG);
        String grassrootsUnionTaskId = assertGrassrootDispatched(grassrootDispatchedRows, GRASSROOT_BIZ, "g", GRASSROOT_UNION_ORG);
        String grassrootsYouthTaskId = assertGrassrootDispatched(grassrootDispatchedRows, GRASSROOT_BIZ, "t", GRASSROOT_YOUTH_ORG);
        assertGrassrootReceiveTask(jdbc, grassrootsTaskId, GRASSROOT_ORG, "DW3 Grassroot Party Org", GRASSROOT_FZR, GRASSROOT_JSR);
        assertGrassrootReceiveTask(jdbc, grassrootsUnionTaskId, GRASSROOT_UNION_ORG, "DW3 Grassroot Union Org", GRASSROOT_UNION_FZR, GRASSROOT_UNION_JSR);
        assertGrassrootReceiveTask(jdbc, grassrootsYouthTaskId, GRASSROOT_YOUTH_ORG, "DW3 Grassroot Youth Org", GRASSROOT_YOUTH_FZR, GRASSROOT_YOUTH_FZR);
        assertFailure(service.dispatchGrassroot(staffGrassrootRoot, "", staffReq), "duplicate grassroot dispatch should have no pending rows");
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffGrassrootRoot,
                "businessTreeId", GRASSROOT_BIZ,
                "partyOrgIds", GRASSROOT_ORG_MISSING,
                "year", "2026",
                "month", "07",
                "quarter", "Q3",
                "deadline", "2026-11-21",
                "remark", "DW3 grassroot missing member"
        ), staffReq), "save grassroot dispatch with missing receiver", 1);
        assertFailure(service.dispatchGrassroot(staffGrassrootRoot, "", staffReq), "grassroot dispatch should fail when party member receiver is missing");
        assertGrassrootFailed(jdbc, staffGrassrootRoot, GRASSROOT_ORG_MISSING);
        assertFailure(service.completeSelfTask(params(
                "id", staffGrassrootRoot,
                "content", "Must not complete while required grassroot tasks are open."
        ), staffReq), "required grassroot tasks block staff completion");
        String failedGrassrootId = jdbc.queryForObject(
                "select ID from DYN_DW_PLAN3_GRASSROOT_DISPATCH where TASK_ID=? and PARTY_ORG_ID=?",
                String.class, staffGrassrootRoot, GRASSROOT_ORG_MISSING);
        assertSuccess(service.deleteGrassrootDispatch(failedGrassrootId, staffReq), "delete failed grassroot row before completion");
        jdbc.update("update DYN_ZBRWB set RWZT='\u5df2\u5b8c\u6210' where ID in (?,?,?)", grassrootsTaskId, grassrootsUnionTaskId, grassrootsYouthTaskId);
        Map<String, Object> completedGrassrootProgress = service.listGrassrootDispatch(staffGrassrootRoot, staffReq);
        assertGrassrootSummary(completedGrassrootProgress, 3, 3, 0, 0, 3, 3);
        Map<String, Object> staffGrassrootTask = rowById(service.listTasks(staffReq, staffBatchId, ""), staffGrassrootRoot);
        assertEquals("3", staffGrassrootTask.get("GRASSROOT_TOTAL_COUNT"), "task list grassroot total");
        assertEquals("3", staffGrassrootTask.get("GRASSROOT_COMPLETED_COUNT"), "task list grassroot completed");
        assertSuccess(service.completeSelfTask(params(
                "id", staffGrassrootRoot,
                "content", "Required grassroot tasks completed."
        ), staffReq), "staff completes after required grassroot tasks");
        assertStatus(jdbc, staffGrassrootRoot, DwWorkPlan3Constants.STATUS_COMPLETED);
        assertSuccess(service.listGrassrootDispatch(staffGrassrootRoot, staffReq), "completed staff task can still view grassroot progress");

        String staffFreeRoot = id(service.saveRootTask(params(
                "batchId", staffBatchId,
                "title", "DW3 test staff free grassroot task",
                "content", "Free grassroot work must not block completion.",
                "planDeadline", "2026-11-22"
        ), staffReq));
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffFreeRoot,
                "businessTreeId", GRASSROOT_FREE_BIZ,
                "partyOrgIds", GRASSROOT_ORG,
                "deadline", "2026-11-22"
        ), staffReq), "save free grassroot row", 1);
        assertSuccess(service.completeSelfTask(params(
                "id", staffFreeRoot,
                "content", "Free grassroot work does not block."
        ), staffReq), "free grassroot task does not block staff completion");
        assertStatus(jdbc, staffFreeRoot, DwWorkPlan3Constants.STATUS_COMPLETED);
        assertSuccess(service.listGrassrootDispatch(staffFreeRoot, staffReq), "completed free task can view grassroot progress");

        String staffNonstandardRoot = id(service.saveRootTask(params(
                "batchId", staffBatchId,
                "title", "DW3 test staff nonstandard grassroot task",
                "content", "Nonstandard completion type remains selectable and nonblocking.",
                "planDeadline", "2026-11-23"
        ), staffReq));
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffNonstandardRoot,
                "businessTreeId", GRASSROOT_INVALID_BIZ,
                "partyOrgIds", GRASSROOT_ORG,
                "deadline", "2026-11-23"
        ), staffReq), "save nonstandard grassroot business", 1);
        assertSuccessCount(service.dispatchGrassroot(staffNonstandardRoot, "", staffReq), "dispatch nonstandard grassroot business", 1);
        Map<String, Object> nonstandardList = service.listGrassrootDispatch(staffNonstandardRoot, staffReq);
        String nonstandardTaskId = assertGrassrootDispatched((List<Map<String, Object>>) nonstandardList.get("rows"), GRASSROOT_INVALID_BIZ, "d", GRASSROOT_ORG);
        Map<String, Object> nonstandardReceiveTask = jdbc.queryForMap("select FK_COL_ID,WCLX,YWSJ_ID from DYN_ZBRWB where ID=?", nonstandardTaskId);
        assertEquals(GRASSROOT_INVALID_BIZ, nonstandardReceiveTask.get("FK_COL_ID"), "nonstandard business FK mapping");
        assertEquals("\u6708\u5ea6", nonstandardReceiveTask.get("WCLX"), "nonstandard completion type preserved");
        if (!blank(nonstandardReceiveTask.get("YWSJ_ID"))) {
            throw new IllegalStateException("DYN_ZBRWB.YWSJ_ID must stay empty for 3.0 grassroot dispatch.");
        }
        assertSuccess(service.completeSelfTask(params(
                "id", staffNonstandardRoot,
                "content", "Nonstandard grassroot work does not block."
        ), staffReq), "nonstandard grassroot task does not block staff completion");

        String externalImportRow = jsonRows(params(
                "rowNumber", "2",
                "title", "DW3 test external import should fail",
                "targetDesc", "External staff must be blocked.",
                "content", "This row points outside the current office.",
                "planDeadline", "2026-11-01",
                "deptName", "DW3 Other Staff"
        ));
        assertFailure(service.saveImportDrafts(externalImportRow, "2026", "Q3", officeReq), "import draft should reject staff outside current office");
        assertFailure(service.directDispatchImport(externalImportRow, "2026", "Q3", officeReq), "import direct dispatch should reject staff outside current office");

        String validImportRow = jsonRows(params(
                "rowNumber", "2",
                "title", "DW3 test valid import",
                "targetDesc", "Current office staff can be imported.",
                "content", "This row points to current office staff.",
                "planDeadline", "2026-11-05",
                "deptName", "DW3 Staff2",
                "deptNodeId", staff2Node,
                "receiverLogin", "OLD_LOGIN_COLUMN_MUST_BE_IGNORED"
        ));
        Map<String, Object> validImportDraft = service.saveImportDrafts(validImportRow, "2026", "Q3", officeReq);
        assertSuccessCount(validImportDraft, "valid import draft", 1);
        Map<String, Object> validImportDispatch = service.directDispatchImport(validImportRow, "2026", "Q3", officeReq);
        assertSuccessCount(validImportDispatch, "valid import direct dispatch", 1);
        String importedStaffTaskId = String.valueOf(((List) validImportDispatch.get("ids")).get(0));
        String importedReceiverName = jdbc.queryForObject(
                "select RECEIVER_NAME from DYN_DW_PLAN3_TASK where ID=?", String.class, importedStaffTaskId);
        if (!"DW3 Staff2".equals(importedReceiverName)) {
            throw new IllegalStateException("imported staff task receiver name must match the pure Excel name: " + importedReceiverName);
        }

        String nodeNameImportRow = jsonRows(params(
                "rowNumber", "3",
                "title", "DW3 test node name import should fail",
                "planDeadline", "2026-11-06",
                "deptName", "DW3 Test Staff2"
        ));
        assertFailure(service.directDispatchImport(nodeNameImportRow, "2026", "Q3", officeReq), "import must not match personnel node name");

        String selfImportRow = jsonRows(params(
                "rowNumber", "4",
                "title", "DW3 test office self import",
                "content", "Office director sends the imported task to themself.",
                "planDeadline", "2026-11-07",
                "deptName", "DW3 Office"
        ));
        Map<String, Object> selfImportResult = service.directDispatchImport(selfImportRow, "2026", "Q3", officeReq);
        assertSuccessCount(selfImportResult, "office self import direct send", 1);
        List selfImportIds = (List) selfImportResult.get("ids");
        String selfImportTaskId = String.valueOf(selfImportIds.get(0));
        Map<String, Object> selfImportTask = jdbc.queryForMap("select * from DYN_DW_PLAN3_TASK where ID=?", selfImportTaskId);
        assertEquals(DwWorkPlan3Constants.STATUS_DOING, selfImportTask.get("STATUS"), "office self import status");
        assertEquals(OFFICE, selfImportTask.get("RECEIVER_ID"), "office self import receiver");
        assertEquals(officeNode, selfImportTask.get("PERSON_NODE_ID"), "office self import personnel node");
        Integer selfImportChildren = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where PARENT_ID=?", Integer.class, selfImportTaskId);
        assertEquals("0", selfImportChildren, "office self import must not create a child task");

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
        Map<String, Object> partyStats = service.stats(partyReq, batchId);
        assertStatsContract(partyStats, jdbc, batchId, deptNode);
        Map<String, Object> departmentStats = service.stats(deptReq, batchId);
        assertSuccess(departmentStats, "department stats");

        int taskCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        int feedbackCount = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_FEEDBACK where CREATED_BY in (?,?,?,?,?)", Integer.class, PARTY, DEPT, OFFICE, STAFF, STAFF2);
        if (taskCount < 3 || feedbackCount < 2) {
            throw new IllegalStateException("Unexpected test data count, taskCount=" + taskCount + ", feedbackCount=" + feedbackCount);
        }

        System.out.println("DWWORKPLAN3_BUSINESS_OK");
        System.out.println("apiCoverage=currentUser,personSave,personList,personReceivers,batchCreate,taskSaveRoot,directDispatch,taskAccept,taskDelete,taskComplete,taskList,feedbackSubmit,feedbackList,feedbackConfirm,grassrootBusinessTree,grassrootPartyOrgTree,grassrootSave,grassrootList,grassrootDispatch,importSaveDrafts,importDirectDispatch,stats");
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
        jdbc.update("delete from DYN_ZBRWB where ID in (select GRASSROOT_TASK_ID from DYN_DW_PLAN3_GRASSROOT_DISPATCH where GRASSROOT_TASK_ID is not null and (CREATED_BY in (?,?,?,?,?,?) or TASK_ID in (select ID from DYN_DW_PLAN3_TASK where TITLE like 'DW3 test%'))) or ID like 'DW3_GRASSROOT_TASK%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_GRASSROOT_DISPATCH where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%') or CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%')", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_ATTACHMENT where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_BATCH where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_PERSON_TREE where CREATED_BY in (?,?) or USER_ID in (?,?,?,?,?,?) or NODE_NAME like 'DW3 Test%'", PARTY, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from PARTY_ORGAN_MEMBER where PARTY_ID in (?,?) or USER_ID in (?,?)", GRASSROOT_ORG, GRASSROOT_ORG_MISSING, GRASSROOT_FZR, GRASSROOT_JSR);
        jdbc.update("delete from DYN_TU_ORGAN_MEMBER where LEAGUE_ID=? or USER_ID in (?,?)", GRASSROOT_UNION_ORG, GRASSROOT_UNION_FZR, GRASSROOT_UNION_JSR);
        jdbc.update("delete from LEAGUE_ORGAN_MEMBER where LEAGUE_ID=? or USER_ID=?", GRASSROOT_YOUTH_ORG, GRASSROOT_YOUTH_FZR);
        jdbc.update("delete from PARTY_ORGANIZATION where ID in (?,?,?)", GRASSROOT_ORG, GRASSROOT_ORG_MISSING, GRASSROOT_INVALID_ORG);
        jdbc.update("delete from DYN_TRADE_UNION_ORGANIZA where ID=?", GRASSROOT_UNION_ORG);
        jdbc.update("delete from LEAGUE_ORGANIZATION where ID=?", GRASSROOT_YOUTH_ORG);
        jdbc.update("delete from DYN_ZBJHYWS where ID in (?,?,?)", GRASSROOT_BIZ, GRASSROOT_FREE_BIZ, GRASSROOT_INVALID_BIZ);
        jdbc.update("delete from SYS_USER_ROLE where ID in ('DW3_UR_LEADER_ADMIN','DW3_UR_PLATFORM_ADMIN')");
        jdbc.update("delete from SYS_ROLE where ID in (?,?)", LEADER_ADMIN_ROLE, PLATFORM_ADMIN_ROLE);
        try {
            jdbc.update("delete from SYS_MSG where RECV_USER in (?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2);
        } catch (Exception ignored) {
        }
    }

    private static void seedPartyRoot(JdbcTemplate jdbc) {
        jdbc.update("insert into DYN_DW_PLAN3_PERSON_TREE(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?)",
                PARTY_NODE, PARTY, PARTY, "127.0.0.1", "ORG_ROOT", null, "DW3 Test Party", PARTY, "DW3 Party", DwWorkPlan3Constants.ROLE_PARTY, 1, "Y", "DW3 test seeded root");
    }

    private static void seedPersonTreeAdminRoles(JdbcTemplate jdbc) {
        jdbc.update("insert into SYS_ROLE(ID,ROLE_NAME,ROLE_CODE,ROLE_TYPE,SYS_APPLICATION_ID,VALID_FLAG,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) values(?,?,?,?,?,?,sysdate,?,sysdate,?,?,0,?)",
                LEADER_ADMIN_ROLE, "\u515a\u59d4\u4e00\u7ea7\u7ba1\u7406\u5458", "DW3_LEADER_ADMIN", "0", "1", "1", STRANGER, STRANGER, "127.0.0.1", "ORG_ROOT");
        jdbc.update("insert into SYS_ROLE(ID,ROLE_NAME,ROLE_CODE,ROLE_TYPE,SYS_APPLICATION_ID,VALID_FLAG,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) values(?,?,?,?,?,?,sysdate,?,sysdate,?,?,0,?)",
                PLATFORM_ADMIN_ROLE, "\u5e73\u53f0\u7ba1\u7406\u5458", "DW3_PLATFORM_ADMIN", "0", "1", "1", STRANGER, STRANGER, "127.0.0.1", "ORG_ROOT");
        jdbc.update("insert into SYS_USER_ROLE(ID,SYS_ROLE_ID,SYS_USER_ID,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) values(?,?,?,sysdate,?,sysdate,?,?,0,?)",
                "DW3_UR_LEADER_ADMIN", LEADER_ADMIN_ROLE, LEADER_ADMIN, STRANGER, STRANGER, "127.0.0.1", "ORG_ROOT");
        jdbc.update("insert into SYS_USER_ROLE(ID,SYS_ROLE_ID,SYS_USER_ID,LAST_UPDATE_DATE,LAST_UPDATED_BY,CREATION_DATE,CREATED_BY,LAST_UPDATE_IP,VERSION,ORG_IDENTITY) values(?,?,?,sysdate,?,sysdate,?,?,0,?)",
                "DW3_UR_PLATFORM_ADMIN", PLATFORM_ADMIN_ROLE, PLATFORM_ADMIN, STRANGER, STRANGER, "127.0.0.1", "ORG_ROOT");
    }

    private static void assertPersonTreeAdmin(DwWorkPlan3Service service, JdbcTemplate jdbc, HttpServletRequest request,
                                              String officeNode, String suffix) {
        Map<String, Object> current = service.currentUser(request);
        assertEquals("true", current.get("personTreeEditable"), suffix + " admin person-tree permission");
        assertEquals("true", current.get("adminViewer"), suffix + " admin remains business viewer only");
        assertFailure(service.createBatch("2027", "Q1", request), suffix + " admin cannot create business tasks");
        assertContainsNode(service.listPersonTree(request), officeNode, suffix + " admin full person tree");
        String nodeId = id(service.savePerson(params(
                "parentId", officeNode,
                "nodeName", "DW3 Test Admin Leaf " + suffix,
                "userId", "DW3_ADMIN_LEAF_" + suffix,
                "userName", "DW3 Admin Leaf " + suffix,
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "90",
                "enabled", "Y"
        ), request));
        assertContainsNode(service.listPersonTree(request), nodeId, suffix + " admin add person node");
        assertSuccess(service.savePerson(params(
                "id", nodeId,
                "parentId", officeNode,
                "nodeName", "DW3 Test Admin Leaf Edited " + suffix,
                "userId", "DW3_ADMIN_LEAF_" + suffix,
                "userName", "DW3 Admin Leaf " + suffix,
                "roleCode", DwWorkPlan3Constants.ROLE_STAFF,
                "sortNo", "90",
                "enabled", "Y"
        ), request), suffix + " admin edit person node");
        assertEquals("DW3 Test Admin Leaf Edited " + suffix,
                jdbc.queryForObject("select NODE_NAME from DYN_DW_PLAN3_PERSON_TREE where ID=?", String.class, nodeId),
                suffix + " admin edited node name");
        assertSuccess(service.disablePerson(nodeId, request), suffix + " admin delete person node");
        Integer remaining = jdbc.queryForObject("select count(1) from DYN_DW_PLAN3_PERSON_TREE where ID=?", Integer.class, nodeId);
        assertEquals("0", remaining, suffix + " admin deleted person node");
    }

    private static void ensureGrassrootExternalTables(JdbcTemplate jdbc) {
        if (!tableExists(jdbc, "DYN_DW_PLAN3_GRASSROOT_DISPATCH")) {
            jdbc.execute("CREATE TABLE DYN_DW_PLAN3_GRASSROOT_DISPATCH (" +
                    "ID VARCHAR2(50) NOT NULL,CREATED_BY VARCHAR2(50),CREATION_DATE DATE,LAST_UPDATED_BY VARCHAR2(50),LAST_UPDATE_DATE DATE," +
                    "LAST_UPDATE_IP VARCHAR2(50),VERSION NUMBER(16),ORG_IDENTITY VARCHAR2(32),TASK_ID VARCHAR2(50) NOT NULL," +
                    "BUSINESS_TREE_ID VARCHAR2(50) NOT NULL,BUSINESS_NAME VARCHAR2(500),BUSINESS_TYPE VARCHAR2(100),BUSINESS_CODE VARCHAR2(200)," +
                    "FORM_ID VARCHAR2(200),FORM_CODE VARCHAR2(200),VIEW_ID VARCHAR2(200),VIEW_CODE VARCHAR2(200),HAS_FORM VARCHAR2(50)," +
                    "COMPLETE_TYPE VARCHAR2(50),TARGET_ORG_TYPE VARCHAR2(20),PARTY_ORG_ID VARCHAR2(50) NOT NULL,PARTY_ORG_NAME VARCHAR2(500),PRINCIPAL_USER_ID VARCHAR2(50)," +
                    "RECEIVER_USER_ID VARCHAR2(50),PLAN_YEAR VARCHAR2(20),PLAN_MONTH VARCHAR2(20),PLAN_QUARTER VARCHAR2(20),DEADLINE DATE," +
                    "REMARK VARCHAR2(1000),STATUS VARCHAR2(30),GRASSROOT_TASK_ID VARCHAR2(50),DISPATCH_TIME DATE,ERROR_MSG VARCHAR2(1000)," +
                    "CONSTRAINT PK_DW_PLAN3_GRASSROOT_DISPATCH PRIMARY KEY (ID))");
        }
        if (!tableExists(jdbc, "DYN_ZBJHYWS")) {
            jdbc.execute("CREATE TABLE DYN_ZBJHYWS (" +
                    "ID VARCHAR2(200) NOT NULL,CREATED_BY VARCHAR2(200) NOT NULL,CREATION_DATE TIMESTAMP(0) NOT NULL," +
                    "LAST_UPDATED_BY VARCHAR2(200) NOT NULL,LAST_UPDATE_DATE TIMESTAMP(0) NOT NULL,LAST_UPDATE_IP VARCHAR2(200) NOT NULL," +
                    "VERSION NUMBER(16,0) NOT NULL,ORG_IDENTITY VARCHAR2(200) NOT NULL,CREATED_DEPT VARCHAR2(200) NOT NULL," +
                    "TREE_SORTS VARCHAR2(4000),YWLX VARCHAR2(1020),YWBH VARCHAR2(200),IS_LEAD_PARTY VARCHAR2(8),BDBH VARCHAR2(1020)," +
                    "YWMC VARCHAR2(2000),TREE_SORT NUMBER(38,0),VALID_FLAG VARCHAR2(4),TREE_LEAF VARCHAR2(8),TREE_PATH VARCHAR2(4000)," +
                    "TREE_LEVEL NUMBER(38,0),PARENT_ID VARCHAR2(200),BD_ID VARCHAR2(1020),ST_ID VARCHAR2(200),ST_BM VARCHAR2(200)," +
                    "SFCZBD VARCHAR2(50),WCLX VARCHAR2(50),CONSTRAINT PK_DW3_TEST_ZBJHYWS PRIMARY KEY (ID))");
        }
        if (!tableExists(jdbc, "DYN_ZBRWB")) {
            jdbc.execute("CREATE TABLE DYN_ZBRWB (" +
                    "ID VARCHAR2(200) NOT NULL,CREATED_BY VARCHAR2(200) NOT NULL,CREATION_DATE TIMESTAMP(0) NOT NULL," +
                    "LAST_UPDATED_BY VARCHAR2(200) NOT NULL,LAST_UPDATE_DATE TIMESTAMP(0) NOT NULL,LAST_UPDATE_IP VARCHAR2(200) NOT NULL," +
                    "VERSION NUMBER(16,0) NOT NULL,ORG_IDENTITY VARCHAR2(200) NOT NULL,CREATED_DEPT VARCHAR2(200) NOT NULL," +
                    "SFGLRW VARCHAR2(800),FK_COL_ID VARCHAR2(800),JSR VARCHAR2(800),WCJD TIMESTAMP(0),SFLCRW VARCHAR2(800)," +
                    "DZZMC VARCHAR2(8000),RWBDID VARCHAR2(800),DZZID VARCHAR2(800),BZ VARCHAR2(8000),RWZT VARCHAR2(800),STID VARCHAR2(800)," +
                    "RWMC VARCHAR2(800),FZR VARCHAR2(800),YWSJ_ID VARCHAR2(200),BDBM VARCHAR2(200),STBM VARCHAR2(200),YEAR VARCHAR2(200)," +
                    "MONTH VARCHAR2(200),JD VARCHAR2(200),SFCZBD VARCHAR2(50),FFR VARCHAR2(50),FFBM VARCHAR2(50),WCLX VARCHAR2(50)," +
                    "REASON VARCHAR2(4000),CONSTRAINT PK_DW3_TEST_ZBRWB PRIMARY KEY (ID))");
        }
    }

    private static boolean tableExists(JdbcTemplate jdbc, String tableName) {
        Integer count = jdbc.queryForObject("select count(1) from USER_TABLES where TABLE_NAME=?", Integer.class, tableName);
        return count != null && count > 0;
    }

    private static void seedGrassrootExternalData(JdbcTemplate jdbc) {
        jdbc.update("insert into DYN_ZBJHYWS(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,YWMC,YWLX,YWBH,BD_ID,BDBH,ST_ID,ST_BM,SFCZBD,WCLX,VALID_FLAG,TREE_LEAF,TREE_LEVEL,TREE_SORT,TREE_SORTS,PARENT_ID) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                GRASSROOT_BIZ, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", "DW3 Grassroot Business", "d", "DW3-BIZ-001", "DW3_FORM_ID", "DW3_FORM_CODE", "DW3_VIEW_ID", "DW3_VIEW_CODE", "\u662f", "\u5fc5\u987b\u5b8c\u6210", "1", "1", 2, 1, "001", null);
        jdbc.update("insert into DYN_ZBJHYWS(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,YWMC,YWLX,YWBH,BD_ID,BDBH,ST_ID,ST_BM,SFCZBD,WCLX,VALID_FLAG,TREE_LEAF,TREE_LEVEL,TREE_SORT,TREE_SORTS,PARENT_ID) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                GRASSROOT_FREE_BIZ, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", "DW3 Grassroot Free Business", "d", "DW3-BIZ-FREE", "DW3_FORM_ID", "DW3_FORM_CODE", "DW3_VIEW_ID", "DW3_VIEW_CODE", "\u662f", "\u81ea\u7531\u5b8c\u6210", "1", "1", 2, 2, "002", null);
        jdbc.update("insert into DYN_ZBJHYWS(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,YWMC,YWLX,YWBH,BD_ID,BDBH,ST_ID,ST_BM,SFCZBD,WCLX,VALID_FLAG,TREE_LEAF,TREE_LEVEL,TREE_SORT,TREE_SORTS,PARENT_ID) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                GRASSROOT_INVALID_BIZ, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", "DW3 Invalid Completion Business", "d", "DW3-BIZ-INVALID", "DW3_FORM_ID", "DW3_FORM_CODE", "DW3_VIEW_ID", "DW3_VIEW_CODE", "\u662f", "\u6708\u5ea6", "0", "1", 2, 3, "003", null);
        insertPartyOrganization(jdbc, GRASSROOT_ORG, "DW3 Grassroot Party Org" + GRASSROOT_ORG, "001");
        insertPartyOrganization(jdbc, GRASSROOT_ORG_MISSING, "DW3 Grassroot Missing Org", "002");
        insertPartyOrganization(jdbc, GRASSROOT_INVALID_ORG, "002001", "003");
        jdbc.update("insert into PARTY_ORGAN_MEMBER(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?)",
                "DW3_GRASS_MEMBER_FZR", STAFF, STAFF, "127.0.0.1", "ORG_ROOT", GRASSROOT_ORG, GRASSROOT_FZR, "0");
        jdbc.update("insert into PARTY_ORGAN_MEMBER(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST,VALID_FLAG) values(?,?,sysdate-1,?,sysdate-1,?,0,?,?,?,?,?)",
                "DW3_GRASS_MEMBER_INVALID", STAFF, STAFF, "127.0.0.1", "ORG_ROOT", GRASSROOT_ORG, STRANGER, "0", "0");
        jdbc.update("insert into PARTY_ORGAN_MEMBER(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?)",
                "DW3_GRASS_MEMBER_JSR", STAFF, STAFF, "127.0.0.1", "ORG_ROOT", GRASSROOT_ORG, GRASSROOT_JSR, "4");
        insertLeagueOrganization(jdbc, "DYN_TRADE_UNION_ORGANIZA", GRASSROOT_UNION_ORG, "DW3 Grassroot Union Org", "003");
        insertLeagueMember(jdbc, "DYN_TU_ORGAN_MEMBER", "DW3_GRASS_UNION_MEMBER_FZR", GRASSROOT_UNION_ORG, GRASSROOT_UNION_FZR, "0");
        insertLeagueMember(jdbc, "DYN_TU_ORGAN_MEMBER", "DW3_GRASS_UNION_MEMBER_JSR", GRASSROOT_UNION_ORG, GRASSROOT_UNION_JSR, "2");
        insertLeagueOrganization(jdbc, "LEAGUE_ORGANIZATION", GRASSROOT_YOUTH_ORG, "DW3 Grassroot Youth Org", "004");
        insertLeagueMember(jdbc, "LEAGUE_ORGAN_MEMBER", "DW3_GRASS_YOUTH_MEMBER_FZR", GRASSROOT_YOUTH_ORG, GRASSROOT_YOUTH_FZR, "0");
    }

    private static void insertPartyOrganization(JdbcTemplate jdbc, String id, String name, String sort) {
        jdbc.update("insert into PARTY_ORGANIZATION(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_NAME,PARENT_ID,TREE_LEVEL,TREE_SORT,TREE_SORTS) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)",
                id, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", name, PARTY_NODE, 2, Integer.valueOf(sort), sort);
    }

    private static void insertLeagueOrganization(JdbcTemplate jdbc, String tableName, String id, String name, String sort) {
        jdbc.update("insert into " + tableName + "(ID,LEAGUE_NAME,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,PARENT_ID,TREE_LEVEL,TREE_SORT,TREE_SORTS,TREE_LEAF,VALID_FLAG) " +
                        "values(?,?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?)",
                id, name, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", null, 2, Integer.valueOf(sort), sort, "1", "1");
    }

    private static void insertLeagueMember(JdbcTemplate jdbc, String tableName, String id, String leagueId, String userId, String userPost) {
        jdbc.update("insert into " + tableName + "(ID,USER_ID,USER_POST,LEAGUE_ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT,VALID_FLAG) " +
                        "values(?,?,?,?,?,sysdate,?,sysdate,?,0,?,?,?)",
                id, userId, userPost, leagueId, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", "1");
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

    private static void assertContainsExternalRow(List<Map<String, Object>> rows, String id, String label) {
        for (Map<String, Object> row : rows) {
            if (id.equals(String.valueOf(row.get("ID")))) {
                return;
            }
        }
        throw new IllegalStateException(label + " did not contain row " + id);
    }

    private static void assertMissingExternalRow(List<Map<String, Object>> rows, String id, String label) {
        for (Map<String, Object> row : rows) {
            if (id.equals(String.valueOf(row.get("ID")))) {
                throw new IllegalStateException(label + " unexpectedly contained row " + id);
            }
        }
    }

    private static void assertGrassrootList(List<Map<String, Object>> rows, String businessId, String orgType, String partyOrgId, String expectedStatus) {
        Map<String, Object> row = grassrootRow(rows, businessId, orgType, partyOrgId);
        if (row == null) {
            throw new IllegalStateException("grassroot dispatch list did not contain business/org row.");
        }
        if (!expectedStatus.equals(String.valueOf(row.get("STATUS")))) {
            throw new IllegalStateException("Unexpected grassroot dispatch status: " + row);
        }
        assertEquals("\u5fc5\u987b\u5b8c\u6210", row.get("COMPLETE_TYPE"), "grassroot dispatch completion type");
    }

    private static void assertGrassrootSummary(Map<String, Object> result, int total, int dispatched, int draft,
                                               int failed, int requiredTotal, int requiredCompleted) {
        Map<String, Object> summary = (Map<String, Object>) result.get("summary");
        if (summary == null) {
            throw new IllegalStateException("grassroot summary missing: " + result);
        }
        assertEquals(String.valueOf(total), summary.get("totalCount"), "grassroot summary total");
        assertEquals(String.valueOf(dispatched), summary.get("dispatchedCount"), "grassroot summary dispatched");
        assertEquals(String.valueOf(draft), summary.get("draftCount"), "grassroot summary draft");
        assertEquals(String.valueOf(failed), summary.get("failedCount"), "grassroot summary failed");
        assertEquals(String.valueOf(requiredTotal), summary.get("requiredTotalCount"), "grassroot summary required total");
        assertEquals(String.valueOf(requiredCompleted), summary.get("requiredCompletedCount"), "grassroot summary required completed");
    }

    private static Map<String, Object> rowById(List<Map<String, Object>> rows, String id) {
        for (Map<String, Object> row : rows) {
            if (id.equals(String.valueOf(row.get("ID")))) {
                return row;
            }
        }
        throw new IllegalStateException("row not found: " + id);
    }

    private static String assertGrassrootDispatched(List<Map<String, Object>> rows, String businessId, String orgType, String partyOrgId) {
        Map<String, Object> row = grassrootRow(rows, businessId, orgType, partyOrgId);
        if (row == null) {
            throw new IllegalStateException("grassroot dispatched row missing.");
        }
        if (!DwWorkPlan3Constants.GRASSROOT_DISPATCHED.equals(String.valueOf(row.get("STATUS")))) {
            throw new IllegalStateException("grassroot row was not marked dispatched: " + row);
        }
        String grassrootTaskId = String.valueOf(row.get("GRASSROOT_TASK_ID"));
        if (blank(grassrootTaskId)) {
            throw new IllegalStateException("grassroot row missing DYN_ZBRWB id.");
        }
        return grassrootTaskId;
    }

    private static Map<String, Object> grassrootRow(List<Map<String, Object>> rows, String businessId, String orgType, String partyOrgId) {
        for (Map<String, Object> row : rows) {
            if (businessId.equals(String.valueOf(row.get("BUSINESS_TREE_ID"))) &&
                    orgType.equals(String.valueOf(row.get("TARGET_ORG_TYPE"))) &&
                    partyOrgId.equals(String.valueOf(row.get("PARTY_ORG_ID")))) {
                return row;
            }
        }
        return null;
    }

    private static void assertGrassrootReceiveTask(JdbcTemplate jdbc, String grassrootTaskId,
                                                    String orgId, String orgName, String principalUserId, String receiverUserId) {
        Map<String, Object> row = jdbc.queryForMap("select * from DYN_ZBRWB where ID=?", grassrootTaskId);
        assertEquals(GRASSROOT_BIZ, row.get("FK_COL_ID"), "DYN_ZBRWB.FK_COL_ID should point to DYN_ZBJHYWS.ID");
        if (!blank(row.get("YWSJ_ID"))) {
            throw new IllegalStateException("DYN_ZBRWB.YWSJ_ID must stay empty for 3.0 grassroot dispatch.");
        }
        assertEquals("\u672a\u5f00\u59cb", row.get("RWZT"), "grassroot receive task status");
        assertEquals("\u5426", row.get("SFGLRW"), "grassroot receive task relation flag");
        assertEquals(orgId, row.get("DZZID"), "grassroot target organization id");
        assertEquals(orgName, row.get("DZZMC"), "grassroot target organization display name");
        assertEquals(principalUserId, row.get("FZR"), "grassroot principal user");
        assertEquals(receiverUserId, row.get("JSR"), "grassroot receiver user");
        assertEquals("DW3 Grassroot Business", row.get("RWMC"), "grassroot business name");
        assertEquals("DW3_FORM_ID", row.get("RWBDID"), "grassroot form id");
        assertEquals("DW3_FORM_CODE", row.get("BDBM"), "grassroot form code");
        assertEquals("DW3_VIEW_ID", row.get("STID"), "grassroot view id");
        assertEquals("DW3_VIEW_CODE", row.get("STBM"), "grassroot view code");
        assertEquals("\u662f", row.get("SFCZBD"), "grassroot has-form flag");
        assertEquals("\u5fc5\u987b\u5b8c\u6210", row.get("WCLX"), "grassroot completion type");
    }

    private static void assertGrassrootFailed(JdbcTemplate jdbc, String taskId, String partyOrgId) {
        Map<String, Object> row = jdbc.queryForMap("select STATUS,ERROR_MSG from DYN_DW_PLAN3_GRASSROOT_DISPATCH where TASK_ID=? and PARTY_ORG_ID=?", taskId, partyOrgId);
        if (!DwWorkPlan3Constants.GRASSROOT_FAILED.equals(String.valueOf(row.get("STATUS"))) || blank(row.get("ERROR_MSG"))) {
            throw new IllegalStateException("grassroot missing receiver row should be FAILED with ERROR_MSG: " + row);
        }
    }

    private static void assertEquals(Object expected, Object actual, String label) {
        if (expected == null ? actual != null : !String.valueOf(expected).equals(String.valueOf(actual))) {
            throw new IllegalStateException(label + " expected=" + expected + ", actual=" + actual);
        }
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

    private static void assertStatsContract(Map<String, Object> result, JdbcTemplate jdbc, String batchId, String deptNode) {
        assertSuccess(result, "party stats contract");
        Map<String, Object> summary = (Map<String, Object>) result.get("summary");
        if (summary == null) {
            throw new IllegalStateException("stats summary is missing");
        }
        Integer expectedTotal = jdbc.queryForObject(
                "select count(1) from DYN_DW_PLAN3_TASK where BATCH_ID=? and PARENT_ID is null and TASK_LEVEL=?",
                Integer.class, batchId, DwWorkPlan3Constants.LEVEL_OFFICE);
        assertEquals(String.valueOf(expectedTotal), summary.get("TOTAL"), "office-root stats total");
        List<Map<String, Object>> departments = (List<Map<String, Object>>) result.get("byDepartmentStatus");
        boolean departmentFound = false;
        for (Map<String, Object> row : departments) {
            if (deptNode.equals(String.valueOf(row.get("DEPT_NODE_ID")))) {
                departmentFound = true;
            }
        }
        if (!departmentFound) {
            throw new IllegalStateException("department status stats did not include the office root's department");
        }
        List<Map<String, Object>> levels = (List<Map<String, Object>>) result.get("byLevel");
        for (Map<String, Object> row : levels) {
            String level = String.valueOf(row.get("TASK_LEVEL"));
            if (!DwWorkPlan3Constants.LEVEL_OFFICE.equals(level)
                    && !DwWorkPlan3Constants.LEVEL_STAFF.equals(level)) {
                throw new IllegalStateException("level chart must include OFFICE and STAFF only: " + level);
            }
        }
        List<Map<String, Object>> recent = (List<Map<String, Object>>) result.get("recent");
        for (Map<String, Object> row : recent) {
            if (row.get("PARENT_ID") != null || !DwWorkPlan3Constants.LEVEL_OFFICE.equals(String.valueOf(row.get("TASK_LEVEL")))) {
                throw new IllegalStateException("recent stats must contain office root tasks only");
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

    private static void assertImportTemplate(DwWorkPlan3Service service, HttpServletRequest request) throws Exception {
        final ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        final ServletOutputStream output = new ServletOutputStream() {
            public void write(int value) {
                bytes.write(value);
            }
        };
        HttpServletResponse response = (HttpServletResponse) Proxy.newProxyInstance(
                DwWorkPlan3BusinessVerifier.class.getClassLoader(),
                new Class[]{HttpServletResponse.class},
                new InvocationHandler() {
                    public Object invoke(Object proxy, Method method, Object[] args) {
                        if ("getOutputStream".equals(method.getName())) {
                            return output;
                        }
                        return defaultValue(method.getReturnType());
                    }
                });
        service.downloadImportTemplate(response, request);
        Workbook workbook = WorkbookFactory.create(new ByteArrayInputStream(bytes.toByteArray()));
        Sheet sheet = workbook.getSheetAt(0);
        Row header = sheet.getRow(0);
        String[] expected = new String[]{
                "\u4efb\u52a1\u6807\u9898", "\u5de5\u4f5c\u76ee\u6807", "\u5de5\u4f5c\u5185\u5bb9",
                "\u622a\u6b62\u65e5\u671f", "\u63a5\u6536\u79d1\u5458", "\u5907\u6ce8"
        };
        for (int i = 0; i < expected.length; i++) {
            assertEquals(expected[i], header.getCell(i).getStringCellValue(), "import template header " + (i + 1));
        }
        if (header.getCell(expected.length) != null) {
            throw new IllegalStateException("import template must contain exactly six task columns");
        }
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
$serviceSource = Join-Path $Root "src\avicit\pb\dwworkplan3\service\DwWorkPlan3Service.java"
& "D:\jdk1.8\bin\javac.exe" -encoding UTF-8 -cp $classpath -d $workDir $serviceSource
if ($LASTEXITCODE -ne 0) {
  throw "DwWorkPlan3Service javac failed"
}

& "D:\jdk1.8\bin\javac.exe" -encoding UTF-8 -cp "$workDir;$classpath" -d $workDir $javaFile
if ($LASTEXITCODE -ne 0) {
  throw "javac failed"
}

& "D:\jdk1.8\bin\java.exe" "-Dfile.encoding=UTF-8" -cp "$workDir;$classpath" DwWorkPlan3BusinessVerifier $DbUrl $DbUser $DbPassword
if ($LASTEXITCODE -ne 0) {
  throw "business verifier failed"
}
