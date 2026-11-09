package avicit.pb.jushoubaogao.award;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysRole;
import avicit.platform6.bpm.api.ProcessEngine;
import avicit.platform6.bpm.api.ProcessDefinition;
import avicit.platform6.bpm.web.service.BpmOperateService;
import avicit.platform6.bpm.bpmreform.domain.StartResultBean;
import avicit.platform6.bpm.bpmreform.service.BpmReformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.util.*;

@Service
public class AwardService {
    public static final String FORM_CODE = "JSBG_AWARD";
    public static final String PROCESS_KEY = "jsbgaward";
    public static final String FORM_PATH = "platform/avicit/pb/jushoubaogao/award/form";
    private static final String ELIGIBLE = " from DYN_JSBG r join (select FORMID_, BUSINESSSTATE_, "
            + "row_number() over(partition by FORMID_ order by LAST_UPDATE_DATE_ desc nulls last, ID_ desc) RN "
            + "from BPM_CLIENT_HIST_PROCINST_V) p on p.FORMID_=r.ID and p.RN=1 "
            + "where trim(r.SFNM)='否' and p.BUSINESSSTATE_ in ('ended','已完成') ";
    private static final String SNAPSHOT = "r.ID REPORT_ID,r.BDBH REPORT_NO,r.BT REPORT_TITLE,"
            + "r.XM REPORTER_NAME,r.GH REPORTER_NO,r.SZDW REPORT_UNIT";
    @Autowired private JdbcTemplate jdbc;
    @Autowired private BpmOperateService bpm;
    @Autowired private BpmReformService business;
    @Autowired private ProcessEngine processEngine;
    @Autowired private AwardDataPermission dataPermission;
    @Autowired private SysUserRoleAPI sysUserRoleAPI;

    public Map<String, Object> reports(String keyword, String participation, int page, int size) {
        return reports(keyword, participation, "", page, size);
    }

    public Map<String, Object> reports(String keyword, String participation, String department, int page, int size) {
        String filter = ELIGIBLE;
        List<Object> args = new ArrayList<Object>();
        String departments = receivingDepartments();
        if (department != null && !department.trim().isEmpty()) {
            filter += " and exists (select 1 from (" + departments + ") receiving where receiving.REPORT_ID=r.ID and receiving.UNIT_NAME like ?)";
            args.add("%" + department.trim() + "%");
        }
        if (keyword != null && !keyword.trim().isEmpty()) {
            filter += " and (r.BDBH like ? or r.BT like ? or r.SZDW like ?)";
            for (int i = 0; i < 3; i++) args.add("%" + keyword.trim() + "%");
        }
        String participated = " exists (select 1 from DYN_JSBG_PJ_MX d join DYN_JSBG_PJ a on a.ID=d.FK_COL_ID "
                + "where d.REPORT_ID=r.ID and a.PROCESS_INSTANCE_ID is not null)";
        if ("yes".equals(participation)) filter += " and" + participated;
        if ("no".equals(participation)) filter += " and not" + participated;
        String query = "select " + SNAPSHOT + ",r.CREATION_DATE,(select listagg(receiving.UNIT_NAME,'、') within group(order by receiving.UNIT_NAME) "
                + "from (" + departments + ") receiving where receiving.REPORT_ID=r.ID) ACCEPT_DEPARTMENT,(select count(*) from DYN_JSBG_PJ_MX d "
                + "join DYN_JSBG_PJ a on a.ID=d.FK_COL_ID where d.REPORT_ID=r.ID "
                + "and a.PROCESS_INSTANCE_ID is not null) PARTICIPATION_COUNT" + filter;
        Map<String, Object> result = page(query, "select count(*)" + filter, args, page, size, "CREATION_DATE desc,REPORT_ID");
        hideIdentity((List<Map<String, Object>>) result.get("rows"));
        return result;
    }

    private String receivingDepartments() {
        return "select ID REPORT_ID,trim(JS_YWBM) UNIT_NAME from DYN_JSBG";
    }

    public Map<String, Object> summaries(String keyword, String state, String year, int page, int size) {
        String from = " from DYN_JSBG_PJ a left join BPM_HIST_PROCINST h on h.DBID_=a.PROCESS_INSTANCE_ID where 1=1" + dataPermission.filter();
        List<Object> args = new ArrayList<Object>();
        if (year != null && !year.trim().isEmpty()) {
            from += " and a.AWARD_YEAR=?";
            args.add(year.trim());
        }
        if ("draft".equals(state)) from += " and a.PROCESS_INSTANCE_ID is null";
        if ("active".equals(state)) from += " and a.PROCESS_INSTANCE_ID is not null and h.END_ is null";
        if ("ended".equals(state)) from += " and h.END_ is not null and h.ENDACTIVITY_='end1'";
        if ("terminated".equals(state)) from += " and h.END_ is not null and (h.ENDACTIVITY_ is null or h.ENDACTIVITY_<>'end1')";
        if (keyword != null && !keyword.trim().isEmpty()) {
            from += " and (a.INITIATOR_NAME like ? or exists (select 1 from DYN_JSBG_PJ_MX d "
                    + "where d.FK_COL_ID=a.ID and (d.REPORT_NO like ? or d.REPORT_TITLE like ? "
                    + ")))";
            for (int i = 0; i < 3; i++) args.add("%" + keyword.trim() + "%");
        }
        String query = "select a.ID,a.INITIATOR_NAME,coalesce(a.INITIATION_TIME,cast(a.CREATION_DATE as timestamp)) CREATION_DATE,a.PROCESS_INSTANCE_ID,"
                + "(select d.REPORT_TITLE from DYN_JSBG_PJ_MX d where d.FK_COL_ID=a.ID and d.SORT_ORDER=0) FIRST_REPORT_TITLE,"
                + "case when a.PROCESS_INSTANCE_ID is null then '草稿' "
                + "when h.END_ is not null and h.ENDACTIVITY_='end1' then '已完成' "
                + "when h.END_ is not null then '已终止' else '审批中' end AWARD_STATE,"
                + "(select count(*) from DYN_JSBG_PJ_MX d where d.FK_COL_ID=a.ID) REPORT_COUNT,"
                + "(select coalesce(sum(d.AMOUNT),0) from DYN_JSBG_PJ_MX d where d.FK_COL_ID=a.ID) TOTAL_AMOUNT" + from;
        Map<String, Object> result = page(query, "select count(*)" + from, args, page, size, "CREATION_DATE desc,ID");
        fillCurrentTasks((List<Map<String, Object>>) result.get("rows"));
        return result;
    }

    private void fillCurrentTasks(List<Map<String, Object>> rows) {
        Map<String, Set<String>> nodes = new HashMap<String, Set<String>>(), handlers = new HashMap<String, Set<String>>();
        for (Map<String, Object> row : rows) {
            row.put("CURRENT_NODE", "草稿".equals(row.get("AWARD_STATE")) ? "填写／提交" : row.get("AWARD_STATE"));
            row.put("CURRENT_HANDLER", "草稿".equals(row.get("AWARD_STATE")) ? row.get("INITIATOR_NAME") : "");
            if ("审批中".equals(row.get("AWARD_STATE"))) {
                String process = text(row.get("PROCESS_INSTANCE_ID"));
                nodes.put(process, new LinkedHashSet<String>());
                handlers.put(process, new LinkedHashSet<String>());
            }
        }
        if (nodes.isEmpty()) return;
        String marks = String.join(",", Collections.nCopies(nodes.size(), "?"));
        List<Map<String, Object>> tasks = jdbc.queryForList("select t.PROCINST_,t.TASK_TITLE_ NODE_LABEL,coalesce(w.NAME,u.NAME) HANDLER_NAME "
                + "from BPM_HIST_TASK_V t left join SYS_USER u on u.ID=t.ASSIGNEE_ left join SYS_USER w on w.ID=t.WORKHAND_USER_ "
                + "where t.PROCINST_ in (" + marks + ") and t.TASK_STATE_='1' and t.TASK_FINISHED_='0' and t.END_ is null order by t.CREATE_,t.DBID_",
                nodes.keySet().toArray());
        for (Map<String, Object> task : tasks) {
            String process = text(task.get("PROCINST_"));
            if (!text(task.get("NODE_LABEL")).isEmpty()) nodes.get(process).add(text(task.get("NODE_LABEL")));
            if (!text(task.get("HANDLER_NAME")).isEmpty()) handlers.get(process).add(text(task.get("HANDLER_NAME")));
        }
        for (Map<String, Object> row : rows) {
            String process = text(row.get("PROCESS_INSTANCE_ID"));
            if (!nodes.containsKey(process)) continue;
            row.put("CURRENT_NODE", String.join("、", nodes.get(process)));
            row.put("CURRENT_HANDLER", String.join("、", handlers.get(process)));
        }
    }

    private Map<String, Object> page(String query, String count, List<Object> args, int page, int size, String order) {
        size = Math.min(100, Math.max(1, size));
        page = Math.max(1, page);
        long total = jdbc.queryForObject(count, args.toArray(), Long.class);
        List<Object> paged = new ArrayList<Object>(args);
        paged.add((page - 1L) * size);
        paged.add((long) page * size);
        List<Map<String, Object>> rows = jdbc.queryForList("select * from (select q.*,row_number() over(order by "
                + order + ") PAGE_ROW from (" + query + ") q) where PAGE_ROW>? and PAGE_ROW<=? order by PAGE_ROW", paged.toArray());
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("rows", rows);
        result.put("total", total);
        result.put("page", page);
        result.put("size", size);
        return result;
    }

    public Map<String, Object> detail(String id) {
        return loadDetail(id, dataPermission.filter());
    }

    private Map<String, Object> loadDetail(String id, String filter) {
        List<Map<String, Object>> rows = jdbc.queryForList("select a.*,to_char(coalesce(a.INITIATION_TIME,cast(a.CREATION_DATE as timestamp)),'YYYY-MM-DD HH24:MI:SS') INITIATED_AT from DYN_JSBG_PJ a where a.ID=?" + filter, id);
        require(!rows.isEmpty(), "评奖单不存在或不在当前数据权限范围内");
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("form", rows.get(0));
        List<Map<String, Object>> items = jdbc.queryForList("select * from DYN_JSBG_PJ_MX where FK_COL_ID=? order by SORT_ORDER,ID", id);
        String process = text(rows.get(0).get("PROCESS_INSTANCE_ID"));
        Set<String> nodes = activeNodes(process);
        boolean showIdentity = identityVisible(process, nodes);
        if (!showIdentity) hideIdentity(items);
        result.put("items", items);
        result.put("showIdentity", showIdentity);
        result.put("editableReports", process.isEmpty() || nodes.contains("taskDraft"));
        return result;
    }

    public String definitionId() {
        ProcessDefinition definition = processEngine.getRepositoryService().findProcessDefinitionByKey(PROCESS_KEY);
        require(definition != null && !definition.isSuspended(), "请先发布举手报告评奖流程");
        return definition.getId();
    }

    public Map<String, String> startInfo(String user) throws Exception {
        String definition = definitionId();
        Map<String, String> info = business.doReadStartInfoByDefineId(definition, user);
        info.put("defineId", definition);
        return info;
    }

    @Transactional(value = "transactionManager", rollbackFor = Exception.class)
    public Map<String, Object> save(AwardForm form, HttpServletRequest request, boolean start) throws Exception {
        String user = SessionHelper.getLoginSysUserId(request);
        require(user != null && !user.isEmpty(), "请先登录");
        require(form.id != null && form.id.matches("[a-zA-Z0-9_-]{1,50}"), "评奖单标识无效");
        List<Map<String, Object>> current = jdbc.queryForList("select * from DYN_JSBG_PJ where ID=? for update", form.id);
        String instance = current.isEmpty() ? "" : text(current.get(0).get("PROCESS_INSTANCE_ID"));
        if (start && !instance.isEmpty()) {
            require(user.equals(text(current.get(0).get("CREATED_BY"))), "请由发起人提交评奖单");
            Map<String, Object> replay = loadDetail(form.id, "");
            replay.put("startResult", business.getStartResultBean(instance, form.id, user));
            return replay;
        }
        if (instance.isEmpty()) {
            if (!current.isEmpty()) require(user.equals(text(current.get(0).get("CREATED_BY"))), "请由发起人修改草稿");
        } else {
            // A task assignee may edit award values. Completed/history-only readers may not save.
            require(!text(bpm.getTaskUrl(instance, user)).isEmpty(), "当前账号没有此评奖单的待办办理权限");
        }
        if (!current.isEmpty()) require(((Number) current.get(0).get("VERSION")).longValue() == form.version,
                "评奖单已被更新，请刷新后再操作");
        require(form.items != null && (!start || !form.items.isEmpty()), "请至少添加一份申报单");
        Set<String> reportIds = new HashSet<String>();
        for (AwardForm.Item item : form.items) {
            require(item != null && item.reportId != null && reportIds.add(item.reportId), "同一评奖单中的报告不能重复");
        }
        // One IN query for the whole sheet; the eligibility window is evaluated once instead of per item.
        Map<String, Map<String, Object>> byId = new HashMap<String, Map<String, Object>>();
        if (!reportIds.isEmpty()) {
            List<Object> eligibleArgs = new ArrayList<Object>(reportIds);
            StringBuilder marks = new StringBuilder();
            for (int i = 0; i < reportIds.size(); i++) marks.append(i == 0 ? "?" : ",?");
            for (Map<String, Object> row : jdbc.queryForList("select " + SNAPSHOT + ELIGIBLE + " and r.ID in (" + marks + ")", eligibleArgs.toArray())) {
                byId.put(text(row.get("REPORT_ID")), row);
            }
        }
        List<Map<String, Object>> snapshots = new ArrayList<Map<String, Object>>();
        List<BigDecimal> amounts = new ArrayList<BigDecimal>();
        for (AwardForm.Item item : form.items) {
            Map<String, Object> snapshot = byId.get(item.reportId);
            require(snapshot != null, "所选报告不再符合已完成、非匿名的参评条件，请刷新列表");
            snapshots.add(snapshot);
            amounts.add(AwardRules.amount(item.prize, item.amount, start || !instance.isEmpty()));
        }
        boolean editReports = instance.isEmpty() || activeNodes(instance).contains("taskDraft");
        if (!editReports) {
            Set<String> previous = new HashSet<String>(jdbc.queryForList("select REPORT_ID from DYN_JSBG_PJ_MX where FK_COL_ID=?", String.class, form.id));
            require(previous.equals(reportIds), "审批时仅修改奖等和金额");
        }
        String ip = SessionHelper.getClientIp(request);
        String org = SessionHelper.getCurrentOrgIdentity(request);
        String year = text(form.year).trim();
        require(year.isEmpty() || year.matches("20[0-9]{2}"), "评奖年度格式不正确");
        if (current.isEmpty()) {
            jdbc.update("insert into DYN_JSBG_PJ (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,"
                    + "LAST_UPDATE_IP,VERSION,ORG_IDENTITY,INITIATOR_NAME,INITIATOR_DEPT_ID,INITIATOR_DEPT_NAME,INITIATION_TIME,AWARD_YEAR) "
                    + "values (?,?,sysdate,?,sysdate,?,0,?,?,?,?,current_timestamp,?)",
                    form.id, user, user, ip, org, SessionHelper.getLoginSysUser(request).getName(), SessionHelper.getCurrentDeptId(request),
                    departmentName(SessionHelper.getCurrentDeptId(request)),
                    year.isEmpty() ? new java.text.SimpleDateFormat("yyyy").format(new Date()) : year);
        }
        jdbc.update("update DYN_JSBG_PJ set LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,LAST_UPDATE_IP=?,VERSION=VERSION+1 where ID=?",
                user, ip, form.id);
        if (!year.isEmpty() && !current.isEmpty()) {
            jdbc.update("update DYN_JSBG_PJ set AWARD_YEAR=? where ID=?", year, form.id);
        }
        if (editReports) {
            jdbc.update("delete from DYN_JSBG_PJ_MX where FK_COL_ID=?", form.id);
            for (int i = 0; i < snapshots.size(); i++) {
                Map<String, Object> r = snapshots.get(i);
                jdbc.update("insert into DYN_JSBG_PJ_MX (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,"
                        + "LAST_UPDATE_IP,VERSION,ORG_IDENTITY,FK_COL_ID,REPORT_ID,REPORT_NO,REPORT_TITLE,REPORTER_NAME,REPORTER_NO,"
                        + "REPORT_UNIT,PRIZE,AMOUNT,SORT_ORDER,PASSED) values (?,?,sysdate,?,sysdate,?,1,?,?,?,?,?,?,?,?,?,?,?,?)",
                        UUID.randomUUID().toString(), user, user, ip, org, form.id, r.get("REPORT_ID"), r.get("REPORT_NO"),
                        r.get("REPORT_TITLE"), r.get("REPORTER_NAME"), r.get("REPORTER_NO"), r.get("REPORT_UNIT"),
                        form.items.get(i).prize, amounts.get(i), i, "是");
            }
        } else {
            for (int i = 0; i < form.items.size(); i++) {
                AwardForm.Item item = form.items.get(i);
                jdbc.update("update DYN_JSBG_PJ_MX set PRIZE=?,AMOUNT=?,PASSED=?,LAST_UPDATED_BY=?,LAST_UPDATE_DATE=sysdate,"
                        + "LAST_UPDATE_IP=?,VERSION=VERSION+1 where FK_COL_ID=? and REPORT_ID=?",
                        item.prize, amounts.get(i), "是", user, ip, form.id, item.reportId);
            }
        }
        StartResultBean started = null;
        if (start) {
            Map<String, Object> variables = new HashMap<String, Object>();
            variables.put("id", form.id);
            variables.put("ID", form.id);
            variables.put("AWARD_TITLE", "举手报告评奖（" + form.items.size() + "份）");
            instance = bpm.startProcessInstanceById(definitionId(), FORM_CODE, user,
                    SessionHelper.getCurrentDeptId(request), variables);
            jdbc.update("update DYN_JSBG_PJ set PROCESS_INSTANCE_ID=? where ID=?", instance, form.id);
            started = business.getStartResultBean(instance, form.id, user);
        }
        // Saving remains governed by the existing creator/task checks, including first-time drafts.
        Map<String, Object> result = loadDetail(form.id, "");
        if (started != null) result.put("startResult", started);
        return result;
    }

    public Map<String, Object> defaults(HttpServletRequest request) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("INITIATOR_NAME", SessionHelper.getLoginSysUser(request).getName());
        result.put("INITIATOR_DEPT_NAME", departmentName(SessionHelper.getCurrentDeptId(request)));
        result.put("INITIATED_AT", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        return result;
    }

    private String departmentName(String id) {
        List<String> names = jdbc.queryForList("select DEPT_NAME from SYS_DEPT_V where ID=?", String.class, id);
        return names.isEmpty() ? "" : names.get(0);
    }

    /** One round trip for every task table instead of probing BPM_TASK plus 8 extension tables separately. */
    private Set<String> activeNodes(String process) {
        Set<String> nodes = new HashSet<String>();
        if (process.isEmpty()) return nodes;
        StringBuilder sql = new StringBuilder("select ACTIVITY_NAME_ from BPM_TASK where PROCINST_=?");
        List<Object> args = new ArrayList<Object>();
        args.add(process);
        for (int i = 1; i <= 8; i++) {
            sql.append(" union all select ACTIVITY_NAME_ from BPM_TASK_EXT").append(i).append(" where PROCINST_=?");
            args.add(process);
        }
        for (String name : jdbc.queryForList(sql.toString(), String.class, args.toArray())) {
            if (name != null) nodes.add(name);
        }
        return nodes;
    }

    private boolean ended(String process) {
        return !process.isEmpty() && jdbc.queryForObject(
                "select count(*) from BPM_HIST_PROCINST where DBID_=? and END_ is not null and ENDACTIVITY_='end1'", Long.class, process) > 0;
    }

    private boolean identityVisible(String process, Set<String> nodes) {
        return !process.isEmpty() && (nodes.contains("taskReceiver") || ended(process));
    }

    private boolean identityVisible(String process) {
        return identityVisible(process, activeNodes(process));
    }

    private void hideIdentity(List<Map<String, Object>> items) {
        for (Map<String, Object> item : items) {
            item.remove("REPORTER_NAME");
            item.remove("REPORTER_NO");
        }
    }

    public String taskUrl(String id, String user) {
        String process = text(((Map<?, ?>) detail(id).get("form")).get("PROCESS_INSTANCE_ID"));
        return process.isEmpty() ? "" : bpm.getTaskUrl(process, user);
    }

    /** Resolves jsbg in the current environment and opens its native read-only form. */
    public String reportFormUrl(String reportId) throws Exception {
        require(reportId != null && !reportId.trim().isEmpty(), "缺少原报告标识");
        List<String> forms = jdbc.queryForList(
                "select ID from EFORM_FORM_INFO where FORM_CODE=?", String.class, "jsbg");
        require(!forms.isEmpty(), "未找到举手报告表单（编码 jsbg）");
        return "platform/eform/bpmsCRUDClient/toDetail?formInfoId=" + URLEncoder.encode(forms.get(0), "UTF-8")
                + "&id=" + URLEncoder.encode(reportId.trim(), "UTF-8");
    }

    public Map<String, Object> tracks(String id) throws Exception {
        String process = text(((Map<?, ?>) detail(id).get("form")).get("PROCESS_INSTANCE_ID"));
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("tracks", process.isEmpty() ? Collections.emptyList() : business.doGettracksByPage(process));
        return result;
    }

    public Map<String, Object> originalReport(String id, String awardId) {
        List<Map<String, Object>> rows = jdbc.query("select " + SNAPSHOT + ",r.WTYHMS DESCRIPTION,r.ZGCSJY SUGGESTION"
                + ELIGIBLE + " and r.ID=?", new Object[]{id}, new RowMapper<Map<String, Object>>() {
            public Map<String, Object> mapRow(java.sql.ResultSet rs, int row) throws java.sql.SQLException {
                Map<String, Object> result = new LinkedHashMap<String, Object>();
                for (String field : new String[]{"REPORT_ID", "REPORT_NO", "REPORT_TITLE", "REPORTER_NAME", "REPORTER_NO",
                        "REPORT_UNIT", "DESCRIPTION", "SUGGESTION"}) result.put(field, rs.getString(field));
                return result;
            }
        });
        require(rows.size() == 1, "报告不存在或不符合参评条件");
        boolean reveal = false;
        if (awardId != null && !awardId.isEmpty()) {
            List<String> processes = jdbc.queryForList("select a.PROCESS_INSTANCE_ID from DYN_JSBG_PJ a join DYN_JSBG_PJ_MX d on d.FK_COL_ID=a.ID where a.ID=? and d.REPORT_ID=?" + dataPermission.filter(), String.class, awardId, id);
            reveal = !processes.isEmpty() && identityVisible(text(processes.get(0)));
        }
        if (!reveal) hideIdentity(rows);
        return rows.get(0);
    }

    public Map<String, Object> history(String reportId) {
        List<Map<String, Object>> rows = jdbc.queryForList("select a.ID,a.INITIATOR_NAME,d.PRIZE,d.AMOUNT,"
                + "coalesce(a.INITIATION_TIME,cast(a.CREATION_DATE as timestamp)) CREATION_DATE,case "
                + "when h.END_ is not null and h.ENDACTIVITY_='end1' then '已完成' "
                + "when h.END_ is not null then '已终止' else '审批中' end AWARD_STATE "
                + "from DYN_JSBG_PJ a join DYN_JSBG_PJ_MX d on d.FK_COL_ID=a.ID "
                + "left join BPM_HIST_PROCINST h on h.DBID_=a.PROCESS_INSTANCE_ID "
                + "where d.REPORT_ID=? and a.PROCESS_INSTANCE_ID is not null" + dataPermission.filter()
                + " order by coalesce(a.INITIATION_TIME,cast(a.CREATION_DATE as timestamp)) desc,a.ID", reportId);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("rows", rows);
        result.put("awarded", awarded(result));
        return result;
    }

    /** True when any earlier award sheet already granted this report a prize, so a new entry cannot silently duplicate it. */
    private boolean awarded(Map<String, Object> rows) {
        for (Map<String, Object> row : (List<Map<String, Object>>) rows.get("rows")) {
            String state = text(row.get("AWARD_STATE"));
            if (("已完成".equals(state) || "审批中".equals(state)) && !text(row.get("PRIZE")).isEmpty()) {
                return true;
            }
        }
        return false;
    }

    public List<Map<String, Object>> preview(List<String> ids) {
        List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
        Set<String> seen = new HashSet<String>();
        for (String id : ids) {
            if (!seen.add(id)) continue;
            List<Map<String, Object>> rows = jdbc.queryForList("select " + SNAPSHOT + ELIGIBLE + " and r.ID=?", id);
            require(rows.size() == 1, "所选报告不符合已完成、非匿名的参评条件");
            hideIdentity(rows);
            result.add(rows.get(0));
        }
        return result;
    }

    public List<String> years() {
        return jdbc.queryForList("select distinct a.AWARD_YEAR from DYN_JSBG_PJ a where a.AWARD_YEAR is not null and a.AWARD_YEAR<>''"
                + dataPermission.filter() + " order by a.AWARD_YEAR desc", String.class);
    }

    /** Prize distribution over completed sheets, optionally limited to one award year. */
    public Map<String, Object> summary(String year) {
        StringBuilder from = new StringBuilder(" from DYN_JSBG_PJ a join DYN_JSBG_PJ_MX d on d.FK_COL_ID=a.ID"
                + " join BPM_HIST_PROCINST h on h.DBID_=a.PROCESS_INSTANCE_ID"
                + " where h.END_ is not null and h.ENDACTIVITY_='end1' and a.PROCESS_INSTANCE_ID is not null" + dataPermission.filter());
        List<Object> args = new ArrayList<Object>();
        if (year != null && !year.trim().isEmpty()) {
            from.append(" and a.AWARD_YEAR=?");
            args.add(year.trim());
        }
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("prizes", jdbc.queryForList("select d.PRIZE PRIZE,count(*) CNT,coalesce(sum(d.AMOUNT),0) AMOUNT" + from
                + " and d.PRIZE is not null group by d.PRIZE", args.toArray()));
        result.put("sheets", jdbc.queryForObject("select count(distinct a.ID)" + from, args.toArray(), Long.class));
        result.put("reports", jdbc.queryForObject("select count(*)" + from, args.toArray(), Long.class));
        result.put("total", jdbc.queryForObject("select coalesce(sum(d.AMOUNT),0)" + from, args.toArray(), BigDecimal.class));
        return result;
    }

    private boolean exportIdentityVisible() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String user = SessionHelper.getLoginSysUserId(request);
        require(user != null && !user.isEmpty(), "请先登录");
        List<SysRole> roles = sysUserRoleAPI.getSysRoleListBySysUserId(user);
        if (roles != null) for (SysRole role : roles) {
            if ("举手报告管理员".equals(role.getRoleName())) return true;
        }
        return false;
    }

    /** Only 举手报告管理员 exports reporter identity columns, independently of the workflow stage. */
    public void export(String id, HttpServletResponse response) throws Exception {
        Map<String, Object> detail = detail(id);
        Map<?, ?> form = (Map<?, ?>) detail.get("form");
        List<Map<String, Object>> items = (List<Map<String, Object>>) detail.get("items");
        boolean showIdentity = exportIdentityVisible();
        final Map<String, Map<String, String>> reports = new HashMap<String, Map<String, String>>();
        if (!items.isEmpty()) {
            jdbc.query("select d.REPORT_ID ID,d.REPORTER_NAME,d.REPORTER_NO,r.BGLX,r.WTYHMS,r.JS_YWBM,r.FBDW,r.JS_BLJG "
                    + "from DYN_JSBG_PJ_MX d left join DYN_JSBG r on r.ID=d.REPORT_ID where d.FK_COL_ID=?", new Object[]{id},
                    new RowCallbackHandler() {
                        public void processRow(java.sql.ResultSet rs) throws java.sql.SQLException {
                            Map<String, String> report = new HashMap<String, String>();
                            for (String field : new String[]{"REPORTER_NAME", "REPORTER_NO", "BGLX", "WTYHMS", "JS_YWBM", "FBDW", "JS_BLJG"}) {
                                report.put(field, rs.getString(field));
                            }
                            reports.put(rs.getString("ID"), report);
                        }
                    });
        }
        XSSFWorkbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("举手报告奖励清单");
        List<String> heads = new ArrayList<String>(Arrays.asList("序号", "表单编号", "报告类型", "标题"));
        if (showIdentity) heads.addAll(Arrays.asList("报告人", "报告人工号"));
        heads.addAll(Arrays.asList("报告单位", "问题或隐患描述", "受理业务部门", "分办单位", "办理结果", "奖励等级", "奖励金额"));
        CellStyle centered = workbook.createCellStyle();
        centered.setAlignment(CellStyle.ALIGN_CENTER);
        centered.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        centered.setWrapText(true);
        CellStyle wrapped = workbook.createCellStyle();
        wrapped.setWrapText(true);
        wrapped.setVerticalAlignment(CellStyle.VERTICAL_TOP);
        CellStyle money = workbook.createCellStyle();
        money.setDataFormat(workbook.createDataFormat().getFormat("0.00"));
        Row title = sheet.createRow(0);
        title.setHeightInPoints(32);
        title.createCell(0).setCellValue("举手报告奖励清单");
        title.getCell(0).setCellStyle(centered);
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, heads.size() - 1));
        Row head = sheet.createRow(1);
        head.setHeightInPoints(30);
        for (int i = 0; i < heads.size(); i++) {
            head.createCell(i).setCellValue(heads.get(i));
            head.getCell(i).setCellStyle(centered);
        }
        int rowIndex = 2;
        BigDecimal total = BigDecimal.ZERO;
        for (int i = 0; i < items.size(); i++) {
            Map<String, Object> item = items.get(i);
            Map<String, String> report = reports.get(text(item.get("REPORT_ID")));
            if (report == null) report = Collections.emptyMap();
            Row row = sheet.createRow(rowIndex++);
            int cell = 0;
            row.createCell(cell++).setCellValue(i + 1);
            row.createCell(cell++).setCellValue(text(item.get("REPORT_NO")));
            row.createCell(cell++).setCellValue(text(report.get("BGLX")));
            row.createCell(cell++).setCellValue(text(item.get("REPORT_TITLE")));
            if (showIdentity) {
                row.createCell(cell++).setCellValue(text(report.get("REPORTER_NAME")));
                row.createCell(cell++).setCellValue(text(report.get("REPORTER_NO")));
            }
            row.createCell(cell++).setCellValue(text(item.get("REPORT_UNIT")));
            row.createCell(cell++).setCellValue(text(report.get("WTYHMS")));
            row.createCell(cell++).setCellValue(text(report.get("JS_YWBM")));
            row.createCell(cell++).setCellValue(text(report.get("FBDW")));
            row.createCell(cell++).setCellValue(text(report.get("JS_BLJG")));
            row.createCell(cell++).setCellValue(text(item.get("PRIZE")));
            Object amount = item.get("AMOUNT");
            if (amount instanceof Number) {
                row.createCell(cell).setCellValue(((Number) amount).doubleValue());
                total = total.add(new BigDecimal(amount.toString()));
            } else {
                row.createCell(cell).setCellValue(text(amount));
            }
            for (int j = 0; j < cell; j++) row.getCell(j).setCellStyle(wrapped);
            row.getCell(cell).setCellStyle(money);
        }
        Row totalRow = sheet.createRow(rowIndex);
        totalRow.createCell(0).setCellValue("合计");
        totalRow.createCell(heads.size() - 1).setCellValue(total.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
        totalRow.getCell(heads.size() - 1).setCellStyle(money);
        for (int i = 0; i < heads.size(); i++) {
            String label = heads.get(i);
            sheet.setColumnWidth(i, "问题或隐患描述".equals(label) || "办理结果".equals(label) ? 12288 : "标题".equals(label) ? 8192 : 4096);
        }
        String fileName = URLEncoder.encode("举手报告评奖-" + text(form.get("AWARD_YEAR")) + "-" + id + ".xlsx", "UTF-8").replace("+", "%20");
        response.reset();
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"; filename*=UTF-8''" + fileName);
        OutputStream out = response.getOutputStream();
        workbook.write(out);
        out.flush();
    }

    static String text(Object value) { return value == null ? "" : value.toString(); }
    static void require(boolean condition, String message) {
        if (!condition) throw new IllegalArgumentException(message);
    }
}
