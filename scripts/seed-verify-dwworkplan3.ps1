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
    private static final String GRASSROOT_BIZ = "DW3_GRASS_BIZ";
    private static final String GRASSROOT_ORG = "DW3_GRASS_ORG";
    private static final String GRASSROOT_ORG_MISSING = "DW3_GRASS_ORG_MISSING";
    private static final String GRASSROOT_FZR = "DW3_GRASS_FZR";
    private static final String GRASSROOT_JSR = "DW3_GRASS_JSR";

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

        seedGrassrootExternalData(jdbc);
        assertContainsExternalRow(service.listGrassrootBusinessTree(staffReq), GRASSROOT_BIZ, "grassroot business tree");
        assertContainsExternalRow(service.listGrassrootPartyOrgTree(staffReq), GRASSROOT_ORG, "grassroot party organization tree");
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffRoot,
                "businessTreeId", GRASSROOT_BIZ,
                "partyOrgIds", GRASSROOT_ORG,
                "year", "2026",
                "month", "07",
                "quarter", "Q3",
                "deadline", "2026-11-20",
                "remark", "DW3 grassroot dispatch remark"
        ), staffReq), "save grassroot dispatch", 1);
        Map<String, Object> grassrootList = service.listGrassrootDispatch(staffRoot, staffReq);
        assertSuccess(grassrootList, "list grassroot dispatch");
        assertGrassrootList((List<Map<String, Object>>) grassrootList.get("rows"), GRASSROOT_BIZ, GRASSROOT_ORG, "DRAFT");
        assertSuccessCount(service.dispatchGrassroot(staffRoot, "", staffReq), "dispatch grassroot task", 1);
        Map<String, Object> grassrootAfterDispatch = service.listGrassrootDispatch(staffRoot, staffReq);
        String grassrootsTaskId = assertGrassrootDispatched((List<Map<String, Object>>) grassrootAfterDispatch.get("rows"), GRASSROOT_BIZ, GRASSROOT_ORG);
        assertGrassrootReceiveTask(jdbc, grassrootsTaskId, staffRoot);
        assertFailure(service.dispatchGrassroot(staffRoot, "", staffReq), "duplicate grassroot dispatch should have no pending rows");
        assertSuccessCount(service.saveGrassrootDispatch(params(
                "taskId", staffRoot,
                "businessTreeId", GRASSROOT_BIZ,
                "partyOrgIds", GRASSROOT_ORG_MISSING,
                "year", "2026",
                "month", "07",
                "quarter", "Q3",
                "deadline", "2026-11-21",
                "remark", "DW3 grassroot missing member"
        ), staffReq), "save grassroot dispatch with missing receiver", 1);
        assertFailure(service.dispatchGrassroot(staffRoot, "", staffReq), "grassroot dispatch should fail when party member receiver is missing");
        assertGrassrootFailed(jdbc, staffRoot, GRASSROOT_ORG_MISSING);

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
        jdbc.update("delete from DYN_ZBRWB where YWSJ_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%') or ID like 'DW3_GRASSROOT_TASK%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_GRASSROOT_DISPATCH where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%') or CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_FEEDBACK where TASK_ID in (select ID from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%')", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_TASK where CREATED_BY in (?,?,?,?,?,?) or TITLE like 'DW3 test%'", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_ATTACHMENT where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_BATCH where CREATED_BY in (?,?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from DYN_DW_PLAN3_PERSON_TREE where CREATED_BY in (?,?) or USER_ID in (?,?,?,?,?,?) or NODE_NAME like 'DW3 Test%'", PARTY, STRANGER, PARTY, DEPT, OFFICE, STAFF, STAFF2, STRANGER);
        jdbc.update("delete from PARTY_ORGAN_MEMBER where PARTY_ID in (?,?) or USER_ID in (?,?)", GRASSROOT_ORG, GRASSROOT_ORG_MISSING, GRASSROOT_FZR, GRASSROOT_JSR);
        jdbc.update("delete from PARTY_ORGANIZATION where ID in (?,?)", GRASSROOT_ORG, GRASSROOT_ORG_MISSING);
        jdbc.update("delete from DYN_ZBJHYWS where ID=?", GRASSROOT_BIZ);
        try {
            jdbc.update("delete from SYS_MSG where RECV_USER in (?,?,?,?,?)", PARTY, DEPT, OFFICE, STAFF, STAFF2);
        } catch (Exception ignored) {
        }
    }

    private static void seedPartyRoot(JdbcTemplate jdbc) {
        jdbc.update("insert into DYN_DW_PLAN3_PERSON_TREE(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARENT_ID,NODE_NAME,USER_ID,USER_NAME,ROLE_CODE,SORT_NO,ENABLED,REMARK) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?)",
                PARTY_NODE, PARTY, PARTY, "127.0.0.1", "ORG_ROOT", null, "DW3 Test Party", PARTY, "DW3 Party", DwWorkPlan3Constants.ROLE_PARTY, 1, "Y", "DW3 test seeded root");
    }

    private static void ensureGrassrootExternalTables(JdbcTemplate jdbc) {
        if (!tableExists(jdbc, "DYN_DW_PLAN3_GRASSROOT_DISPATCH")) {
            jdbc.execute("CREATE TABLE DYN_DW_PLAN3_GRASSROOT_DISPATCH (" +
                    "ID VARCHAR2(50) NOT NULL,CREATED_BY VARCHAR2(50),CREATION_DATE DATE,LAST_UPDATED_BY VARCHAR2(50),LAST_UPDATE_DATE DATE," +
                    "LAST_UPDATE_IP VARCHAR2(50),VERSION NUMBER(16),ORG_IDENTITY VARCHAR2(32),TASK_ID VARCHAR2(50) NOT NULL," +
                    "BUSINESS_TREE_ID VARCHAR2(50) NOT NULL,BUSINESS_NAME VARCHAR2(500),BUSINESS_TYPE VARCHAR2(100),BUSINESS_CODE VARCHAR2(200)," +
                    "FORM_ID VARCHAR2(200),FORM_CODE VARCHAR2(200),VIEW_ID VARCHAR2(200),VIEW_CODE VARCHAR2(200),HAS_FORM VARCHAR2(50)," +
                    "COMPLETE_TYPE VARCHAR2(50),PARTY_ORG_ID VARCHAR2(50) NOT NULL,PARTY_ORG_NAME VARCHAR2(500),PRINCIPAL_USER_ID VARCHAR2(50)," +
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
                GRASSROOT_BIZ, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", "DW3_DEPT", "DW3 Grassroot Business", "d", "DW3-BIZ-001", "DW3_FORM_ID", "DW3_FORM_CODE", "DW3_VIEW_ID", "DW3_VIEW_CODE", "\u662f", "\u6708\u5ea6", "1", "1", 2, 1, "001", null);
        insertPartyOrganization(jdbc, GRASSROOT_ORG, "DW3 Grassroot Party Org", "001");
        insertPartyOrganization(jdbc, GRASSROOT_ORG_MISSING, "DW3 Grassroot Missing Org", "002");
        jdbc.update("insert into PARTY_ORGAN_MEMBER(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?)",
                "DW3_GRASS_MEMBER_FZR", STAFF, STAFF, "127.0.0.1", "ORG_ROOT", GRASSROOT_ORG, GRASSROOT_FZR, "0");
        jdbc.update("insert into PARTY_ORGAN_MEMBER(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?)",
                "DW3_GRASS_MEMBER_JSR", STAFF, STAFF, "127.0.0.1", "ORG_ROOT", GRASSROOT_ORG, GRASSROOT_JSR, "4");
    }

    private static void insertPartyOrganization(JdbcTemplate jdbc, String id, String name, String sort) {
        jdbc.update("insert into PARTY_ORGANIZATION(ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_NAME,PARENT_ID,TREE_LEVEL,TREE_SORT,TREE_SORTS) values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)",
                id, STAFF, STAFF, "127.0.0.1", "ORG_ROOT", name, PARTY_NODE, 2, Integer.valueOf(sort), sort);
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

    private static void assertGrassrootList(List<Map<String, Object>> rows, String businessId, String partyOrgId, String expectedStatus) {
        Map<String, Object> row = grassrootRow(rows, businessId, partyOrgId);
        if (row == null) {
            throw new IllegalStateException("grassroot dispatch list did not contain business/org row.");
        }
        if (!expectedStatus.equals(String.valueOf(row.get("STATUS")))) {
            throw new IllegalStateException("Unexpected grassroot dispatch status: " + row);
        }
    }

    private static String assertGrassrootDispatched(List<Map<String, Object>> rows, String businessId, String partyOrgId) {
        Map<String, Object> row = grassrootRow(rows, businessId, partyOrgId);
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

    private static Map<String, Object> grassrootRow(List<Map<String, Object>> rows, String businessId, String partyOrgId) {
        for (Map<String, Object> row : rows) {
            if (businessId.equals(String.valueOf(row.get("BUSINESS_TREE_ID"))) && partyOrgId.equals(String.valueOf(row.get("PARTY_ORG_ID")))) {
                return row;
            }
        }
        return null;
    }

    private static void assertGrassrootReceiveTask(JdbcTemplate jdbc, String grassrootTaskId, String sourceTaskId) {
        Map<String, Object> row = jdbc.queryForMap("select * from DYN_ZBRWB where ID=?", grassrootTaskId);
        assertEquals(GRASSROOT_BIZ, row.get("FK_COL_ID"), "DYN_ZBRWB.FK_COL_ID should point to DYN_ZBJHYWS.ID");
        assertEquals(sourceTaskId, row.get("YWSJ_ID"), "DYN_ZBRWB.YWSJ_ID should keep the 3.0 task id");
        assertEquals("\u672a\u5f00\u59cb", row.get("RWZT"), "grassroot receive task status");
        assertEquals("\u5426", row.get("SFGLRW"), "grassroot receive task relation flag");
        assertEquals(GRASSROOT_ORG, row.get("DZZID"), "grassroot party org id");
        assertEquals(GRASSROOT_FZR, row.get("FZR"), "grassroot principal user");
        assertEquals(GRASSROOT_JSR, row.get("JSR"), "grassroot receiver user");
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
