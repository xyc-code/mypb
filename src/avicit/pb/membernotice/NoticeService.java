package avicit.pb.membernotice;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.bpm.api.ProcessDefinition;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.vo.WorkHandUsers;
import avicit.platform6.bpm.pvm.internal.identity.impl.MembershipImpl;
import avicit.platform6.bpm.web.service.BpmOperateService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;
import org.hibernate.SessionFactory;
import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;
import java.util.*;
import static avicit.pb.membernotice.NoticeRules.*;

@Service
public class NoticeService {
    private static final Logger LOG = LoggerFactory.getLogger(NoticeService.class);
    private static final String STATE = "case when a.PROCESS_INSTANCE_ID is null then 'start' "
            + "when h.STATE_='suspended' then 'suspended' "
            + "when h.END_ is not null and a.APPLIED_DATE is null then 'terminated' "
            + "else coalesce(h.BUSINESSSTATE_,h.STATE_) end";
    @Autowired private JdbcTemplate jdbc;
    @Autowired private NoticePermission permission;
    @Autowired private ProcessEngine engine;
    @Autowired private BpmOperateService bpm;
    @Autowired private SessionFactory sessionFactory;
    @Autowired @Qualifier("transactionManager") private PlatformTransactionManager transactionManager;

    private String where(String keyword, String type, String state, List<Object> args, HttpServletRequest request) {
        String sql = " from DYN_DYFSYZ a left join BPM_HIST_PROCINST h on h.DBID_=a.PROCESS_INSTANCE_ID "
                + "where a.ID in (" + permission.visibleIds(request) + ")";
        if (!text(keyword).isEmpty()) {
            sql += " and (a.EMPLOYEE_CODE like ? or a.MEMBER_NAME like ? or a.RECEIVER_ORG_NAME like ? or a.TITLE like ?)";
            for (int i = 0; i < 4; i++) args.add("%" + keyword.trim() + "%");
        }
        if (!text(type).isEmpty()) { sql += " and a.PARTY_TYPE_NAME=?"; args.add(type); }
        if (!text(state).isEmpty()) { sql += " and (" + STATE + ")=?"; args.add(state); }
        return sql;
    }
    public Map<String, Object> list(String keyword, String type, String state, int page, int size, HttpServletRequest request) {
        List<Object> args = new ArrayList<Object>();
        String from = where(keyword, type, state, args, request);
        long count = jdbc.queryForObject("select count(*)" + from, args.toArray(), Long.class);
        int length = Math.max(1, Math.min(100, size));
        int current = Math.max(1, page);
        List<Object> pageArgs = new ArrayList<Object>(args);
        pageArgs.add((long) current * length); pageArgs.add((long) (current - 1) * length);
        List<Map<String, Object>> rows = jdbc.queryForList("select * from (select q.*,rownum RN from (select a.ID,a.EMPLOYEE_CODE,"
                + "a.MEMBER_NAME,a.RECEIVER_ORG_NAME,a.PARTY_TYPE_NAME,a.TITLE,a.PROCESS_INSTANCE_ID,"
                + "case when a.PROCESS_INSTANCE_ID is null then 1 else 0 end IS_DRAFT,"
                + "to_char(a.MEETING_DATE,'YYYY-MM-DD') MEETING_DATE,to_char(a.REGULAR_DATE,'YYYY-MM-DD') REGULAR_DATE,"
                + "to_char(a.CREATION_DATE,'YYYY-MM-DD HH24:MI:SS') CREATION_DATE," + STATE + " NOTICE_STATE"
                + from + " order by a.CREATION_DATE desc,a.ID) q where rownum<=?) where RN>?", pageArgs.toArray());
        addHandlers(rows);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("rows", rows); result.put("total", count); result.put("page", current); result.put("size", length);
        return result;
    }
    private void addHandlers(List<Map<String, Object>> rows) {
        Map<String, Set<String>> handlers = new HashMap<String, Set<String>>();
        for (Map<String, Object> row : rows) {
            String process = text(row.get("PROCESS_INSTANCE_ID"));
            if (!process.isEmpty() && Arrays.asList("active", "start", "suspended").contains(row.get("NOTICE_STATE")))
                handlers.put(process, new LinkedHashSet<String>());
        }
        if (!handlers.isEmpty()) {
            String placeholders = String.join(",", Collections.nCopies(handlers.size(), "?"));
            List<String> parts = new ArrayList<String>();
            List<String> args = new ArrayList<String>();
            for (int i = 0; i <= 8; i++) {
                parts.add("select PROCINST_,ASSIGNEE_ from BPM_TASK" + (i == 0 ? "" : "_EXT" + i)
                        + " where PROCINST_ in (" + placeholders + ")");
                args.addAll(handlers.keySet());
            }
            for (Map<String, Object> task : jdbc.queryForList("select t.PROCINST_,u.NAME from ("
                    + String.join(" union ", parts) + ") t join SYS_USER u on u.ID=t.ASSIGNEE_ order by u.NAME", args.toArray())) {
                handlers.get(text(task.get("PROCINST_"))).add(text(task.get("NAME")));
            }
        }
        for (Map<String, Object> row : rows) {
            Set<String> names = handlers.get(text(row.get("PROCESS_INSTANCE_ID")));
            row.put("PROCESS_HANDLERS", names == null ? "" : String.join("、", names));
        }
    }
    public List<String> eligibleIds(String keyword, String type, String state, HttpServletRequest request) {
        List<Object> args = new ArrayList<Object>();
        String from = where(keyword, type, state, args, request);
        return jdbc.queryForList("select a.ID" + from + " and a.PROCESS_INSTANCE_ID is null order by a.CREATION_DATE desc,a.ID",
                String.class, args.toArray());
    }
    public Map<String, Object> deleteDrafts(List<String> ids, HttpServletRequest request) {
        require(ids != null && !ids.isEmpty(), "请选择需要删除的拟稿");
        String scoped = permission.visibleIds(request);
        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        int success = 0;
        for (String id : new LinkedHashSet<String>(ids)) {
            boolean removed = jdbc.update("delete from DYN_DYFSYZ where ID=? and PROCESS_INSTANCE_ID is null "
                    + "and APPLIED_DATE is null and ID in (" + scoped + ")", id) == 1;
            Map<String, Object> row = new LinkedHashMap<String, Object>();
            row.put("id", id); row.put("success", removed);
            if (removed) success++;
            else row.put("message", "仅可删除当前数据范围内的拟稿，请刷新列表确认状态");
            results.add(row);
        }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("successCount", success); result.put("failureCount", results.size() - success); result.put("results", results);
        return result;
    }
    public Map<String, Object> detail(String id, HttpServletRequest request, boolean fromFlow) {
        String user = SessionHelper.getLoginSysUserId(request);
        require(!text(user).isEmpty(), "请先登录");
        List<Map<String, Object>> rows = jdbc.queryForList("select a.*,to_char(a.MEETING_DATE,'YYYY-MM-DD') MEETING_DATE_TEXT,"
                + "to_char(a.PROBATION_START,'YYYY-MM-DD') PROBATION_START_TEXT,to_char(a.PROBATION_END,'YYYY-MM-DD') PROBATION_END_TEXT,"
                + "to_char(a.REGULAR_DATE,'YYYY-MM-DD') REGULAR_DATE_TEXT," + STATE + " DISPLAY_STATE from DYN_DYFSYZ a "
                + "left join BPM_HIST_PROCINST h on h.DBID_=a.PROCESS_INSTANCE_ID where a.ID=?", id);
        require(rows.size() == 1, "通知不存在");
        Map<String, Object> row = rows.get(0);
        String process = text(row.get("PROCESS_INSTANCE_ID"));
        boolean participant = false;
        if (fromFlow && !process.isEmpty() && process.equals(request.getParameter("entryId"))) {
            for (Map<String, Object> task : tasks(process)) {
                if (user.equals(text(task.get("ASSIGNEE_")))) participant = true;
            }
            if (!participant) participant = jdbc.queryForObject("select count(*) from BPM_HIST_TASK where PROCINST_=? and ASSIGNEE_=?",
                    Long.class, process, user) > 0;
        }
        if (!participant) require(jdbc.queryForObject("select count(*) from DYN_DYFSYZ where ID=? and ID in ("
                + permission.visibleIds(request) + ")", Long.class, id) == 1, "通知不存在或不在当前数据授权范围内");
        row.remove("DOCUMENT_NO");
        return row;
    }
    public Map<String, Object> importFile(InputStream stream, String filename, HttpServletRequest request) throws Exception {
        String user = SessionHelper.getLoginSysUserId(request);
        require(!text(user).isEmpty(), "请先登录");
        Workbook book = null;
        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        int success = 0;
        try {
            book = NoticeExcel.open(stream);
            Sheet sheet = book.getSheetAt(0);
            String[] headers = NoticeExcel.headers(sheet.getRow(0));
            for (int index = 1; index <= sheet.getLastRowNum(); index++) {
                Row row = sheet.getRow(index);
                if (row == null) continue;
                Map<String, Object> result = new LinkedHashMap<String, Object>(); result.put("row", index + 1);
                try {
                    boolean blank = true;
                    for (int i = 0; i < headers.length; i++) {
                        Cell c = row.getCell(i);
                        if (c != null && c.getCellType() != Cell.CELL_TYPE_BLANK && !NoticeExcel.value(c).isEmpty()) blank = false;
                    }
                    if (blank) continue;
                    String id = create(NoticeExcel.fields(row, headers), request);
                    result.put("id", id); result.put("success", true); success++;
                } catch (Exception ex) {
                    result.put("success", false); result.put("message", diagnostic(ex, filename, index + 1));
                }
                results.add(result);
            }
        } catch (Exception ex) {
            String error = UUID.randomUUID().toString();
            LOG.error("党员发送阅知工作簿导入失败 errorId=" + error + ", file=" + text(filename).replaceAll("[\\r\\n]", "_"), ex);
            throw new IllegalArgumentException((ex instanceof IllegalArgumentException ? ex.getMessage() : "工作簿无法读取") + "，错误编号：" + error);
        }
        finally { if (book instanceof XSSFWorkbook) ((XSSFWorkbook) book).getPackage().close(); }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("successCount", success); result.put("failureCount", results.size() - success); result.put("results", results);
        return result;
    }
    public Map<String, Object> member(String code, HttpServletRequest request) {
        require(!text(SessionHelper.getLoginSysUserId(request)).isEmpty(), "请先登录");
        require(!code.isEmpty(), "工号为空，无法匹配党员");
        List<Map<String, Object>> members = jdbc.queryForList("select m.ID,m.USER_CODE,u.NAME from PARTY_MEMBER m "
                + "left join SYS_USER u on u.ID=m.USER_ID where m.USER_CODE=?", code);
        require(members.size() == 1, members.isEmpty() ? "工号未匹配到党员" : "工号匹配到多条党员记录，请核对党员库");
        String name = text(members.get(0).get("NAME"));
        require(!name.isEmpty(), "匹配党员缺少关联姓名，请核对党员库");
        return members.get(0);
    }
    public Map<String, Object> memberByUser(String userId, HttpServletRequest request) {
        require(!text(SessionHelper.getLoginSysUserId(request)).isEmpty(), "请先登录");
        require(!text(userId).isEmpty(), "请选择姓名");
        List<Map<String, Object>> members = jdbc.queryForList("select m.ID,m.USER_CODE,u.NAME,o.PARTY_NAME "
                + "from PARTY_MEMBER m left join SYS_USER u on u.ID=m.USER_ID "
                + "left join PARTY_ORGANIZATION o on o.ID=m.PARTY_ID where m.USER_ID=?", userId);
        require(members.size() == 1, members.isEmpty() ? "所选用户未关联党员记录，请核对党员库" : "所选用户关联多条党员记录，请核对党员库");
        require(!text(members.get(0).get("NAME")).isEmpty(), "匹配党员缺少关联姓名，请核对党员库");
        return members.get(0);
    }
    public String create(Map<String, String> data, HttpServletRequest request) {
        String userId = text(data.get("userId"));
        Map<String, Object> member = userId.isEmpty() ? member(text(data.get("employeeCode")), request) : memberByUser(userId, request);
        String code = text(member.get("USER_CODE"));
        String name = text(member.get("NAME"));
        String orgName = text(data.get("receiverOrg"));
        List<String> orgs = jdbc.queryForList("select ID from PARTY_ORGANIZATION where PARTY_NAME=?", String.class, orgName);
        require(orgs.size() == 1, orgs.isEmpty() ? "接收党组织未匹配到系统组织" : "接收党组织名称不唯一，请核对系统组织");
        String type = text(data.get("partyType"));
        require("预备党员".equals(type) || formal(type), "党员类别应为预备党员或正式党员");
        List<String> codes = jdbc.queryForList("select distinct LOOKUP_CODE from SYS_LOOKUP_V where LOOKUP_TYPE='PM_PARTY_TYPE' "
                + "and LOOKUP_NAME=? and SYS_APPLICATION_ID='1'", String.class, type);
        require(codes.size() == 1, "党员类别字典未唯一配置：" + type);
        java.sql.Date meeting = readDate(data, 3), begin = readDate(data, 5), end = readDate(data, 6), regular = readDate(data, 7);
        require(!formal(type) || regular != null, "正式党员需填写转正日期，以便更新转正日期并计算党龄");
        String id = UUID.randomUUID().toString(), user = SessionHelper.getLoginSysUserId(request);
        jdbc.update("insert into DYN_DYFSYZ (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,"
                + "ORG_IDENTITY,CREATED_DEPT,EMPLOYEE_CODE,MEMBER_ID,MEMBER_NAME,PARTY_ID,RECEIVER_ORG_NAME,PARTY_TYPE,"
                + "PARTY_TYPE_NAME,MEETING_DATE,MEETING_NAME,PROBATION_START,PROBATION_END,REGULAR_DATE,TITLE,NOTICE_STATE) "
                + "values (?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'draft')",
                id, user, user, SessionHelper.getClientIp(request), SessionHelper.getCurrentOrgIdentity(request),
                SessionHelper.getCurrentDeptId(request), code, text(member.get("ID")), name, orgs.get(0), orgName,
                codes.get(0), type, meeting, text(data.get("meetingName")), begin, end, regular, title(name, type));
        return id;
    }
    private java.sql.Date readDate(Map<String, String> data, int col) {
        try { return NoticeExcel.parseDate(data.get(NoticeExcel.FIELDS[col])); }
        catch (IllegalArgumentException ex) { throw new IllegalArgumentException(NoticeExcel.HEADERS[col] + "：" + ex.getMessage()); }
    }
    private String diagnostic(Exception ex, String filename, int row) {
        if (ex instanceof IllegalArgumentException) return ex.getMessage();
        String error = UUID.randomUUID().toString();
        LOG.error("党员发送阅知导入错误 errorId=" + error + ", file=" + text(filename).replaceAll("[\\r\\n]", "_") + ", row=" + row, ex);
        return "导入异常，请凭错误编号查询日志：" + error;
    }
    public List<Map<String, Object>> tasks(String process) {
        String sql = "select DBID_,ACTIVITY_NAME_,ASSIGNEE_,EXECUTION_ID_ from BPM_TASK where PROCINST_=?";
        List<Object> args = new ArrayList<Object>(); args.add(process);
        for (int i = 1; i <= 8; i++) {
            sql += " union all select DBID_,ACTIVITY_NAME_,ASSIGNEE_,EXECUTION_ID_ from BPM_TASK_EXT" + i + " where PROCINST_=?";
            args.add(process);
        }
        return jdbc.queryForList(sql, args.toArray());
    }
    public String secretary(String org) {
        List<Map<String, Object>> organizations = jdbc.queryForList("select PARENT_ID from PARTY_ORGANIZATION where ID=?", org);
        String parent = organizations.isEmpty() ? "" : text(organizations.get(0).get("PARENT_ID"));
        Set<String> visited = new HashSet<String>(); visited.add(org);
        while (!parent.isEmpty() && !"-1".equals(parent) && visited.add(parent)) {
            List<Map<String, Object>> parents = jdbc.queryForList("select PARENT_ID,PARTY_NAME from PARTY_ORGANIZATION where ID=?", parent);
            if (parents.isEmpty()) break;
            String nextParent = text(parents.get(0).get("PARENT_ID"));
            // The tree root is never an upper-level recipient; direct branches use their own secretary.
            if (nextParent.isEmpty() || "-1".equals(nextParent)) break;
            List<String> upper = secretaries(parent);
            require(upper.size() <= 1, "上级党组织“" + text(parents.get(0).get("PARTY_NAME")) + "”匹配到多名书记，请核对任职信息");
            if (!upper.isEmpty()) return upper.get(0);
            parent = nextParent;
        }
        List<String> users = secretaries(org);
        require(users.size() == 1, users.isEmpty() ? "接收党组织未配置书记" : "接收党组织匹配到多名书记，请核对任职信息");
        return users.get(0);
    }
    private List<String> secretaries(String org) {
        return jdbc.queryForList("select distinct m.USER_ID from PARTY_ORGAN_MEMBER m join SYS_LOOKUP_V p "
                + "on p.LOOKUP_TYPE='PARTY_POST' and p.LOOKUP_CODE=m.USER_POST and p.SYS_APPLICATION_ID='1' "
                + "join SYS_USER u on u.ID=m.USER_ID where m.PARTY_ID=? and nvl(m.VALID_FLAG,'1')='1' "
                + "and p.LOOKUP_NAME in ('党支部书记','支部书记','党总支部书记','党总支书记','总支书记','党委书记','书记')", String.class, org);
    }
    public Map<String, Object> start(List<String> ids, final HttpServletRequest request) {
        require(ids != null && !ids.isEmpty(), "请选择需要发起的通知");
        final String scoped = permission.visibleIds(request);
        List<Map<String, Object>> results = new ArrayList<Map<String, Object>>();
        TransactionTemplate tx = new TransactionTemplate(transactionManager);
        tx.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        int success = 0;
        for (final String id : new LinkedHashSet<String>(ids)) {
            Map<String, Object> result = new LinkedHashMap<String, Object>(); result.put("id", id);
            try {
                String process = tx.execute(new TransactionCallback<String>() {
                    public String doInTransaction(TransactionStatus status) { return startOne(id, scoped, request); }
                });
                result.put("success", true); result.put("processInstanceId", process); success++;
            } catch (Exception ex) {
                result.put("success", false);
                if (ex instanceof IllegalArgumentException) result.put("message", ex.getMessage());
                else {
                    String error = UUID.randomUUID().toString();
                    LOG.error("党员发送阅知发起失败 errorId=" + error + ", noticeId=" + id, ex);
                    result.put("message", "发起失败，错误编号：" + error);
                }
            }
            results.add(result);
        }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("successCount", success); result.put("failureCount", results.size() - success); result.put("results", results);
        return result;
    }
    private String startOne(String id, String scoped, HttpServletRequest request) {
        require(jdbc.queryForObject("select count(*) from DYN_DYFSYZ where ID=? and ID in (" + scoped + ")", Long.class, id) == 1,
                "通知不存在或不在当前数据授权范围内");
        List<Map<String, Object>> rows = jdbc.queryForList("select * from DYN_DYFSYZ where ID=? for update", id);
        require(rows.size() == 1, "通知不存在");
        Map<String, Object> row = rows.get(0);
        if (!text(row.get("PROCESS_INSTANCE_ID")).isEmpty()) return text(row.get("PROCESS_INSTANCE_ID"));
        String next = secretary(text(row.get("PARTY_ID")));
        ProcessDefinition definition = engine.getRepositoryService().findProcessDefinitionByKey(PROCESS_KEY);
        require(definition != null && !definition.isSuspended(), "请先发布党员发送阅知流程");
        String user = SessionHelper.getLoginSysUserId(request), dept = SessionHelper.getCurrentDeptId(request);
        jdbc.update("update DYN_DYFSYZ set SECRETARY_ID=? where ID=?", next, id);
        Map<String, Object> variables = new HashMap<String, Object>();
        variables.put("id", id); variables.put("ID", id); variables.put("NOTICE_TITLE", row.get("TITLE"));
        String process = bpm.startProcessInstanceById(definition.getId(), FORM_CODE, user, dept, variables);
        engine.getHistoryService().updateHisInstanceTitleCmd(process, text(row.get("TITLE")));
        jdbc.update("update DYN_DYFSYZ set PROCESS_INSTANCE_ID=?,NOTICE_STATE='running',LAST_UPDATED_BY=?,"
                + "LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?,VERSION=VERSION+1 where ID=?", process, user, SessionHelper.getClientIp(request), id);
        List<Map<String, Object>> tasks = tasks(process);
        require(tasks.size() == 1 && "taskDraft".equals(text(tasks.get(0).get("ACTIVITY_NAME_"))), "流程未生成唯一拟稿任务");
        bpm.completeTask(text(tasks.get(0).get("DBID_")), user, dept, "to taskSecretary",
                Collections.<String, List<MembershipImpl>>emptyMap(), Collections.<String, List<WorkHandUsers>>emptyMap(),
                Collections.<String, Object>emptyMap(), "批量发送阅知", "", process);
        // BPM keeps task changes in Hibernate until flush; JDBC must see them before validating delivery.
        sessionFactory.getCurrentSession().flush();
        tasks = tasks(process);
        require(tasks.size() == 1 && "taskSecretary".equals(text(tasks.get(0).get("ACTIVITY_NAME_")))
                && next.equals(text(tasks.get(0).get("ASSIGNEE_"))), "未成功生成对应书记的阅知待办");
        return process;
    }
}
