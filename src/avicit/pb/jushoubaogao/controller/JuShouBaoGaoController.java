package avicit.pb.jushoubaogao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/jushoubaogao/juShouBaoGaoController")
public class JuShouBaoGaoController {
    private static final Logger LOGGER = LoggerFactory.getLogger(JuShouBaoGaoController.class);
    private static final String[] REPORT_TYPES = {"质量", "安全", "生产", "技术", "其他"};
    private static final String PARTY_WORK_NODE = "党建工作部";
    private static final String BUSINESS_DISTRIBUTION_NODE = "业务部门分发";
    private static final String HR_REVIEW_NODE = "人力复核";
    /** Formal mode is the safe default; local fixture testing must opt in explicitly. */
    private static final boolean TEMP_STATUS_MODE = Boolean.parseBoolean(System.getProperty("pb.jbg.tempStatusMode", "false"));

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/toStatistics", method = RequestMethod.GET)
    public ModelAndView toStatistics() {
        return new ModelAndView("avicit/pb/jushoubaogao/JuShouBaoGaoStatistics");
    }

    @RequestMapping(value = "/statistics", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> statistics(HttpServletRequest request) {
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        if (TEMP_STATUS_MODE) {
            try {
                List<Integer> years = availableYears();
                int year = selectYear(request.getParameter("year"), years);
                result.put("years", years);
                result.put("year", year);
                List<Map<String, Object>> rows = baseRows(year, null);
                result.putAll(aggregate(rows));
                result.putAll(acceptUnitData(rows, year, null, null));
                result.put("ok", true);
                return result;
            } catch (Exception ex) {
                LOGGER.error("举手报告本地测试统计查询失败", ex);
                result.put("ok", false);
                result.put("message", "测试统计数据暂时无法读取，请检查本地测试数据。");
                result.put("years", new ArrayList<Integer>());
                result.put("year", Calendar.getInstance().get(Calendar.YEAR));
                result.putAll(emptyAggregate());
                return result;
            }
        }
        try {
            List<Integer> years = availableYears();
            int year = selectYear(request.getParameter("year"), years);
            result.put("years", years);
            result.put("year", year);
            List<Map<String, Object>> rows = baseRows(year, "BPM_CLIENT_HIST_PROCINST_V");
            result.putAll(aggregate(rows));
            result.putAll(acceptUnitData(rows, year, "BPM_CLIENT_HIST_TASK_V", "BPM_CLIENT_HIST_PROCINST_V"));
            result.put("ok", true);
            return result;
        } catch (Exception ex) {
            LOGGER.error("举手报告正式统计查询失败", ex);
            result.put("ok", false);
            result.put("message", "统计数据暂时无法读取，请检查报告表、受理子表、节点轨迹表和 BPM_CLIENT_HIST 流程视图配置。");
            result.put("years", new ArrayList<Integer>());
            result.put("year", Calendar.getInstance().get(Calendar.YEAR));
            result.putAll(emptyAggregate());
            return result;
        }
    }

    private List<Integer> availableYears() {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select distinct extract(year from CREATION_DATE) YEAR from DYN_JSBG where CREATION_DATE is not null order by YEAR desc");
        List<Integer> years = new ArrayList<Integer>();
        for (Map<String, Object> row : rows) {
            Object value = row.get("YEAR");
            if (value instanceof Number) {
                years.add(((Number) value).intValue());
            }
        }
        return years;
    }

    private int selectYear(String requested, List<Integer> years) {
        if (years.isEmpty()) {
            return Calendar.getInstance().get(Calendar.YEAR);
        }
        try {
            int year = Integer.parseInt(requested);
            if (years.contains(year)) {
                return year;
            }
        } catch (Exception ignored) {
            // Use the latest year with data.
        }
        return years.get(0);
    }

    private List<Map<String, Object>> baseRows(int year, String processTable) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select ID, CREATION_DATE, BGLX, SZDW, SFNM, cast(null as varchar2(50)) JJ_LX, SFZG, SFFQLC, JBG_TEST_STATUS "
                            + "from DYN_JSBG where CREATION_DATE >= ? and CREATION_DATE < ?", start, end);
        }
        String sql = "select t.ID, t.CREATION_DATE, t.BGLX, t.SZDW, t.SFNM, t.JJ_LX, t.SFZG, t.SFFQLC, v.BUSINESSSTATE_ "
                + "from DYN_JSBG t left join (select FORMID_, BUSINESSSTATE_, "
                + "row_number() over(partition by FORMID_ order by LAST_UPDATE_DATE_ desc nulls last) rn "
                + "from " + processTable + ") v on t.ID = v.FORMID_ and v.rn = 1 "
                + "where t.CREATION_DATE >= ? and t.CREATION_DATE < ?";
        return jdbcTemplate.queryForList(sql, start, end);
    }

    private Map<String, Object> aggregate(List<Map<String, Object>> rows) {
        Map<String, Integer> status = new LinkedHashMap<String, Integer>();
        Map<String, Integer> type = new LinkedHashMap<String, Integer>();
        Map<String, Integer> unit = new LinkedHashMap<String, Integer>();
        Map<String, Map<String, Object>> unitDetails = new LinkedHashMap<String, Map<String, Object>>();
        Map<String, Integer> anonymous = new LinkedHashMap<String, Integer>();
        Map<String, Map<String, Integer>> statusByType = new LinkedHashMap<String, Map<String, Integer>>();
        Map<String, int[]> monthlyByType = new LinkedHashMap<String, int[]>();
        Map<String, int[]> monthlyByStatus = new LinkedHashMap<String, int[]>();
        Map<String, Map<String, int[]>> monthlyStatusByType = new LinkedHashMap<String, Map<String, int[]>>();
        for (String reportType : REPORT_TYPES) {
            statusByType.put(reportType, new LinkedHashMap<String, Integer>());
            monthlyByType.put(reportType, new int[12]);
            monthlyStatusByType.put(reportType, new LinkedHashMap<String, int[]>());
        }
        int linked = 0;
        int closed = 0;
        int unitMissing = 0;
        int typeMissing = 0;
        int anonymousInvalid = 0;
        int unknownStatus = 0;
        int urgentPending = 0;
        int[] monthly = new int[12];
        for (Map<String, Object> row : rows) {
            String rawStatus = text(row.get("BUSINESSSTATE_"));
            String simulatedStatus = text(row.get("JBG_TEST_STATUS"));
            if ((TEMP_STATUS_MODE && simulatedStatus.length() > 0) || (!TEMP_STATUS_MODE && rawStatus.length() > 0)) {
                linked++;
            }
            String state = TEMP_STATUS_MODE ? valueOr(simulatedStatus, "未启动") : mapStatus(rawStatus);
            add(status, state);
            if ("已完成".equals(state)) {
                closed++;
            }
            if (rawStatus.length() > 0 && !isKnownStatus(rawStatus)) {
                unknownStatus++;
            }
            String typeName = valueOr(row.get("BGLX"), "未填写");
            String unitName = valueOr(row.get("SZDW"), "未填写");
            String anonymousRaw = text(row.get("SFNM"));
            String anonymousName = "是".equals(anonymousRaw) ? "匿名" : ("否".equals(anonymousRaw) ? "非匿名" : "");
            add(type, typeName);
            if (statusByType.containsKey(typeName)) {
                add(statusByType.get(typeName), state);
            }
            if (anonymousName.length() > 0) {
                add(anonymous, anonymousName);
            } else {
                anonymousInvalid++;
            }
            if (unitName.equals("未填写")) {
                unitMissing++;
            } else {
                add(unit, unitName);
                Map<String, Object> detail = unitDetails.get(unitName);
                if (detail == null) {
                    detail = new LinkedHashMap<String, Object>();
                    detail.put("name", unitName);
                    detail.put("total", 0);
                    for (String reportType : REPORT_TYPES) detail.put(reportType, 0);
                    unitDetails.put(unitName, detail);
                }
                increment(detail, "total");
                if (detail.containsKey(typeName)) increment(detail, typeName);
            }
            if (typeName.equals("未填写")) {
                typeMissing++;
            }
            Object date = row.get("CREATION_DATE");
            if (date instanceof java.util.Date) {
                int month = ((java.util.Date) date).getMonth();
                if (month >= 0 && month < 12) {
                    monthly[month]++;
                    incrementMonth(monthlyByStatus, state, month);
                    if (monthlyByType.containsKey(typeName)) {
                        monthlyByType.get(typeName)[month]++;
                        incrementMonth(monthlyStatusByType.get(typeName), state, month);
                    }
                }
            }
            if ("紧急".equals(valueOr(row.get("JJ_LX"), "未填写")) && !"已完成".equals(state)) {
                urgentPending++;
            }
        }
        int total = rows.size();
        int pending = Math.max(total - closed, 0);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("total", total);
        result.put("status", groups(status));
        result.put("type", groups(type));
        result.put("unit", groups(unit));
        List<Map<String, Object>> unitDetailRows = new ArrayList<Map<String, Object>>(unitDetails.values());
        Collections.sort(unitDetailRows, new Comparator<Map<String, Object>>() {
            public int compare(Map<String, Object> left, Map<String, Object> right) {
                int totalCompare = ((Integer) right.get("total")).compareTo((Integer) left.get("total"));
                return totalCompare != 0 ? totalCompare : String.valueOf(left.get("name")).compareTo(String.valueOf(right.get("name")));
            }
        });
        result.put("unitDetails", unitDetailRows);
        result.put("anonymous", groups(anonymous));
        result.put("closedCount", closed);
        result.put("processingCount", count(status, "流转中"));
        result.put("pendingCount", pending);
        result.put("closureRate", total == 0 ? 0 : Math.round(closed * 10000.0 / total) / 100.0);
        result.put("flowLinkedCount", linked);
        result.put("flowUnlinkedCount", total - linked);
        result.put("flowCoverageRate", total == 0 ? 0 : Math.round(linked * 10000.0 / total) / 100.0);
        result.put("unitMissingCount", unitMissing);
        result.put("typeMissingCount", typeMissing);
        result.put("anonymousInvalidCount", anonymousInvalid);
        result.put("unknownStatusCount", unknownStatus);
        result.put("urgentPendingCount", urgentPending);
        result.put("urgentPendingRate", pending == 0 ? 0 : Math.round(urgentPending * 10000.0 / pending) / 100.0);
        result.put("monthly", monthlyRows(monthly, monthlyByStatus));
        Map<String, Object> typeBreakdowns = new LinkedHashMap<String, Object>();
        for (String reportType : REPORT_TYPES) {
            Map<String, Object> breakdown = new LinkedHashMap<String, Object>();
            breakdown.put("status", groups(statusByType.get(reportType)));
            breakdown.put("monthly", monthlyRows(monthlyByType.get(reportType), monthlyStatusByType.get(reportType)));
            typeBreakdowns.put(reportType, breakdown);
        }
        result.put("typeBreakdowns", typeBreakdowns);
        Map<String, Object> reconciliation = new LinkedHashMap<String, Object>();
        int unitDetailTotal = 0;
        for (Map<String, Object> detail : unitDetailRows) unitDetailTotal += ((Integer) detail.get("total")).intValue();
        reconciliation.put("total", total);
        reconciliation.put("statusSum", sum(status));
        reconciliation.put("unitDetailsTotal", unitDetailTotal);
        reconciliation.put("totalMatchesUnitDetailsAndMissing", total == unitDetailTotal + unitMissing);
        reconciliation.put("closedPlusPending", closed + pending);
        reconciliation.put("totalMatchesStatus", total == sum(status));
        reconciliation.put("totalMatchesClosedPending", total == closed + pending);
        result.put("reconciliation", reconciliation);
        result.put("statusBasis", TEMP_STATUS_MODE ? "JBG_TEST_STATUS" : "BPM_CLIENT_HIST_PROCINST_V.BUSINESSSTATE_");
        result.put("statusTemporary", TEMP_STATUS_MODE);
        return result;
    }

    private Map<String, Object> acceptUnitData(List<Map<String, Object>> reportRows, int year,
            String taskTable, String processTable) {
        java.util.Date requestTime = new java.util.Date();
        Map<String, Map<String, Object>> reportMetrics = reportEfficiencyMetrics(reportRows,
                nodeTraceRows(year), processEndRows(year, processTable), requestTime);
        return aggregateAcceptUnits(reportRows, acceptChildRows(year), latestTask21Rows(year, taskTable), reportMetrics);
    }

    private List<Map<String, Object>> nodeTraceRows(int year) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select n.REPORT_ID, n.NODE_NAME, n.RECEIVE_TIME, n.OPEN_TIME, n.PROCESS_TIME "
                            + "from JBG_TEST_NODE_TRACE n join DYN_JSBG r on r.ID = n.REPORT_ID "
                            + "where r.CREATION_DATE >= ? and r.CREATION_DATE < ?",
                    start, end);
        }
        return jdbcTemplate.queryForList(
                "select n.FK_COL_ID REPORT_ID, n.JD NODE_NAME, n.JSSJ RECEIVE_TIME, "
                        + "n.DKSJ OPEN_TIME, n.CLSJ PROCESS_TIME "
                        + "from DYN_JSBGYJB n join DYN_JSBG r on r.ID = n.FK_COL_ID "
                        + "where r.CREATION_DATE >= ? and r.CREATION_DATE < ?",
                start, end);
    }

    private List<Map<String, Object>> processEndRows(int year, String processTable) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select REPORT_ID, max(PROCESS_END_TIME) PROCESS_END_TIME from JBG_TEST_NODE_TRACE n "
                            + "join DYN_JSBG r on r.ID = n.REPORT_ID "
                            + "where r.CREATION_DATE >= ? and r.CREATION_DATE < ? group by REPORT_ID",
                    start, end);
        }
        String sql = "select REPORT_ID, PROCESS_END_TIME from (select v.FORMID_ REPORT_ID, "
                + "v.END_ PROCESS_END_TIME, row_number() over(partition by v.FORMID_ "
                + "order by v.LAST_UPDATE_DATE_ desc nulls last) rn "
                + "from " + processTable + " v join DYN_JSBG r on r.ID = v.FORMID_ "
                + "where r.CREATION_DATE >= ? and r.CREATION_DATE < ?) where rn = 1";
        return jdbcTemplate.queryForList(sql, start, end);
    }

    private Map<String, Map<String, Object>> reportEfficiencyMetrics(List<Map<String, Object>> reportRows,
            List<Map<String, Object>> traceRows, List<Map<String, Object>> endRows, java.util.Date requestTime) {
        Map<String, Map<String, Object>> metrics = new LinkedHashMap<String, Map<String, Object>>();
        for (Map<String, Object> report : reportRows) {
            Map<String, Object> metric = new LinkedHashMap<String, Object>();
            metric.put("hrReviewCount", 0);
            metrics.put(text(report.get("ID")), metric);
        }
        for (Map<String, Object> endRow : endRows) {
            Map<String, Object> metric = metrics.get(text(endRow.get("REPORT_ID")));
            if (metric != null) metric.put("processEndTime", dateValue(endRow.get("PROCESS_END_TIME")));
        }
        for (Map<String, Object> trace : traceRows) {
            Map<String, Object> metric = metrics.get(text(trace.get("REPORT_ID")));
            if (metric == null) continue;
            String nodeName = text(trace.get("NODE_NAME"));
            if (PARTY_WORK_NODE.equals(nodeName)) {
                putEarlier(metric, "partyHandledAt", dateValue(trace.get("PROCESS_TIME")));
            } else if (HR_REVIEW_NODE.equals(nodeName)) {
                increment(metric, "hrReviewCount");
            }
        }
        for (Map<String, Object> trace : traceRows) {
            Map<String, Object> metric = metrics.get(text(trace.get("REPORT_ID")));
            if (metric == null || !BUSINESS_DISTRIBUTION_NODE.equals(text(trace.get("NODE_NAME")))) continue;
            java.util.Date openedAt = dateValue(trace.get("OPEN_TIME"));
            java.util.Date partyHandledAt = dateValue(metric.get("partyHandledAt"));
            putEarlier(metric, "handlingStartedAt", openedAt);
            if (openedAt != null && partyHandledAt != null && !openedAt.before(partyHandledAt)) {
                putEarlier(metric, "distributionOpenedAt", openedAt);
            }
        }
        for (Map<String, Object> metric : metrics.values()) {
            java.util.Date partyHandledAt = dateValue(metric.get("partyHandledAt"));
            java.util.Date distributionOpenedAt = dateValue(metric.get("distributionOpenedAt"));
            java.util.Date handlingStartedAt = dateValue(metric.get("handlingStartedAt"));
            if (partyHandledAt != null) {
                java.util.Date receiveEnd = distributionOpenedAt == null ? requestTime : distributionOpenedAt;
                Long minutes = elapsedMinutes(partyHandledAt, receiveEnd);
                if (minutes != null) metric.put("receiveMinutes", minutes);
            }
            if (handlingStartedAt != null) {
                java.util.Date processEnd = dateValue(metric.get("processEndTime"));
                Long minutes = elapsedMinutes(handlingStartedAt, processEnd == null ? requestTime : processEnd);
                if (minutes != null) metric.put("handlingMinutes", minutes);
            }
        }
        return metrics;
    }

    private List<Map<String, Object>> acceptChildRows(int year) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select a.REPORT_ID, a.UNIT_NAME from JBG_TEST_ACCEPT_UNIT a "
                            + "join DYN_JSBG r on r.ID = a.REPORT_ID "
                            + "where a.SOURCE_KIND = 'CHILD' and r.CREATION_DATE >= ? and r.CREATION_DATE < ?",
                    start, end);
        }
        return jdbcTemplate.queryForList(
                "select c.FK_COL_ID REPORT_ID, c.ZRDWMC UNIT_NAME from DYN_JSBG_YWCL c "
                        + "join DYN_JSBG r on r.ID = c.FK_COL_ID "
                        + "where r.CREATION_DATE >= ? and r.CREATION_DATE < ?",
                start, end);
    }

    private List<Map<String, Object>> latestTask21Rows(int year, String taskTable) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select REPORT_ID, UNIT_NAME from (select a.REPORT_ID, a.UNIT_NAME, "
                            + "row_number() over(partition by a.REPORT_ID order by a.EVENT_TIME desc nulls last, "
                            + "a.CREATION_DATE desc nulls last, a.ID desc) rn "
                            + "from JBG_TEST_ACCEPT_UNIT a join DYN_JSBG r on r.ID = a.REPORT_ID "
                            + "where a.SOURCE_KIND = 'TASK21' and r.CREATION_DATE >= ? and r.CREATION_DATE < ?) where rn = 1",
                    start, end);
        }
        String sql = "select REPORT_ID, UNIT_NAME from (select h.TASK_B_ID_ REPORT_ID, d.DEPT_NAME UNIT_NAME, "
                + "row_number() over(partition by h.TASK_B_ID_ order by h.CREATE_ desc nulls last, "
                + "h.END_ desc nulls last, h.DBID_ desc) rn "
                + "from " + taskTable + " h join DYN_JSBG r on r.ID = h.TASK_B_ID_ "
                + "left join SYS_DEPT_V d on d.ID = h.ASSIGNEE_DEPT_ "
                + "where h.TASK_NAME_ = 'task21' and r.CREATION_DATE >= ? and r.CREATION_DATE < ?) where rn = 1";
        return jdbcTemplate.queryForList(sql, start, end);
    }

    private Map<String, Object> aggregateAcceptUnits(List<Map<String, Object>> reportRows,
            List<Map<String, Object>> childRows, List<Map<String, Object>> taskRows,
            Map<String, Map<String, Object>> reportMetrics) {
        Map<String, Map<String, Object>> reports = new LinkedHashMap<String, Map<String, Object>>();
        for (Map<String, Object> row : reportRows) reports.put(text(row.get("ID")), row);

        Map<String, Boolean> reportsWithChildren = new LinkedHashMap<String, Boolean>();
        Map<String, Boolean> assignedReports = new LinkedHashMap<String, Boolean>();
        Map<String, Map<String, Object>> details = new LinkedHashMap<String, Map<String, Object>>();
        Map<String, Integer> counts = new LinkedHashMap<String, Integer>();
        Map<String, Boolean> metricAssignments = new LinkedHashMap<String, Boolean>();
        int childRecordCount = 0;
        int task21FallbackCount = 0;
        int invalidUnitCount = 0;

        for (Map<String, Object> child : childRows) {
            String reportId = text(child.get("REPORT_ID"));
            reportsWithChildren.put(reportId, Boolean.TRUE);
            String unitName = text(child.get("UNIT_NAME"));
            Map<String, Object> report = reports.get(reportId);
            if (report == null || unitName.length() == 0) {
                invalidUnitCount++;
                continue;
            }
            addAcceptUnit(details, counts, report, reportId, unitName, reportMetrics, metricAssignments);
            assignedReports.put(reportId, Boolean.TRUE);
            childRecordCount++;
        }

        Map<String, String> latestTaskUnits = new LinkedHashMap<String, String>();
        for (Map<String, Object> task : taskRows) {
            latestTaskUnits.put(text(task.get("REPORT_ID")), text(task.get("UNIT_NAME")));
        }
        for (Map.Entry<String, Map<String, Object>> entry : reports.entrySet()) {
            String reportId = entry.getKey();
            if (reportsWithChildren.containsKey(reportId)) continue;
            String unitName = latestTaskUnits.get(reportId);
            if (unitName == null || unitName.length() == 0) continue;
            addAcceptUnit(details, counts, entry.getValue(), reportId, unitName, reportMetrics, metricAssignments);
            assignedReports.put(reportId, Boolean.TRUE);
            task21FallbackCount++;
        }

        int unresolvedCount = 0;
        for (String reportId : reports.keySet()) {
            if (!assignedReports.containsKey(reportId)) unresolvedCount++;
        }
        List<Map<String, Object>> detailRows = new ArrayList<Map<String, Object>>(details.values());
        sortUnitDetails(detailRows);
        for (Map<String, Object> detail : detailRows) {
            int total = ((Integer) detail.get("total")).intValue();
            int completed = ((Integer) detail.get("已完成")).intValue();
            detail.put("closureRate", total == 0 ? 0 : Math.round(completed * 10000.0 / total) / 100.0);
            finishEfficiencyMetrics(detail);
        }

        Map<String, Object> sourceCounts = new LinkedHashMap<String, Object>();
        sourceCounts.put("childRecords", childRecordCount);
        sourceCounts.put("task21Fallbacks", task21FallbackCount);
        sourceCounts.put("unresolvedReports", unresolvedCount);
        sourceCounts.put("invalidUnitRecords", invalidUnitCount);
        Map<String, Object> result = new LinkedHashMap<String, Object>();
        result.put("acceptUnit", groups(counts));
        result.put("acceptUnitDetails", detailRows);
        result.put("acceptUnitSourceCounts", sourceCounts);
        result.put("acceptUnitBasis", TEMP_STATUS_MODE ? "JBG_TEST_ACCEPT_UNIT" : "DYN_JSBG_YWCL + task21");
        return result;
    }

    private void addAcceptUnit(Map<String, Map<String, Object>> details, Map<String, Integer> counts,
            Map<String, Object> report, String reportId, String unitName,
            Map<String, Map<String, Object>> reportMetrics, Map<String, Boolean> metricAssignments) {
        add(counts, unitName);
        Map<String, Object> detail = details.get(unitName);
        if (detail == null) {
            detail = new LinkedHashMap<String, Object>();
            detail.put("name", unitName);
            detail.put("total", 0);
            detail.put("已完成", 0);
            detail.put("流转中", 0);
            detail.put("拟稿中", 0);
            detail.put("receiveMinutesTotal", 0L);
            detail.put("receiveSampleCount", 0);
            detail.put("handlingMinutesTotal", 0L);
            detail.put("handlingSampleCount", 0);
            detail.put("hrReviewCountTotal", 0L);
            detail.put("hrReviewSampleCount", 0);
            details.put(unitName, detail);
        }
        increment(detail, "total");
        String rawStatus = text(report.get("BUSINESSSTATE_"));
        String simulatedStatus = text(report.get("JBG_TEST_STATUS"));
        String state = TEMP_STATUS_MODE ? valueOr(simulatedStatus, "未启动") : mapStatus(rawStatus);
        if (detail.containsKey(state)) increment(detail, state);
        String metricKey = unitName + "\u0000" + reportId;
        if (!metricAssignments.containsKey(metricKey)) {
            metricAssignments.put(metricKey, Boolean.TRUE);
            addEfficiencyMetrics(detail, reportMetrics.get(reportId));
        }
    }

    private void addEfficiencyMetrics(Map<String, Object> detail, Map<String, Object> metric) {
        if (metric == null) return;
        Number receiveMinutes = (Number) metric.get("receiveMinutes");
        if (receiveMinutes != null) {
            addLong(detail, "receiveMinutesTotal", receiveMinutes.longValue());
            increment(detail, "receiveSampleCount");
        }
        Number handlingMinutes = (Number) metric.get("handlingMinutes");
        if (handlingMinutes != null) {
            addLong(detail, "handlingMinutesTotal", handlingMinutes.longValue());
            increment(detail, "handlingSampleCount");
        }
        Number hrReviewCount = (Number) metric.get("hrReviewCount");
        addLong(detail, "hrReviewCountTotal", hrReviewCount == null ? 0L : hrReviewCount.longValue());
        increment(detail, "hrReviewSampleCount");
    }

    private void finishEfficiencyMetrics(Map<String, Object> detail) {
        long receiveTotal = ((Number) detail.remove("receiveMinutesTotal")).longValue();
        int receiveSamples = ((Number) detail.get("receiveSampleCount")).intValue();
        long handlingTotal = ((Number) detail.remove("handlingMinutesTotal")).longValue();
        int handlingSamples = ((Number) detail.get("handlingSampleCount")).intValue();
        long hrReviewTotal = ((Number) detail.remove("hrReviewCountTotal")).longValue();
        int hrReviewSamples = ((Number) detail.get("hrReviewSampleCount")).intValue();
        detail.put("averageReceiveMinutes", receiveSamples == 0 ? null : Math.round(receiveTotal * 1.0 / receiveSamples));
        detail.put("averageHandlingMinutes", handlingSamples == 0 ? null : Math.round(handlingTotal * 1.0 / handlingSamples));
        detail.put("averageHrReviewCount", hrReviewSamples == 0 ? null : Math.round(hrReviewTotal * 100.0 / hrReviewSamples) / 100.0);
    }

    private void sortUnitDetails(List<Map<String, Object>> rows) {
        Collections.sort(rows, new Comparator<Map<String, Object>>() {
            public int compare(Map<String, Object> left, Map<String, Object> right) {
                int totalCompare = ((Integer) right.get("total")).compareTo((Integer) left.get("total"));
                return totalCompare != 0 ? totalCompare : String.valueOf(left.get("name")).compareTo(String.valueOf(right.get("name")));
            }
        });
    }

    private Map<String, Object> emptyAggregate() {
        Map<String, Object> result = aggregate(Collections.<Map<String, Object>>emptyList());
        result.putAll(aggregateAcceptUnits(Collections.<Map<String, Object>>emptyList(),
                Collections.<Map<String, Object>>emptyList(), Collections.<Map<String, Object>>emptyList(),
                Collections.<String, Map<String, Object>>emptyMap()));
        return result;
    }

    private java.util.Date dateValue(Object value) {
        return value instanceof java.util.Date ? (java.util.Date) value : null;
    }

    private void putEarlier(Map<String, Object> values, String key, java.util.Date candidate) {
        if (candidate == null) return;
        java.util.Date current = dateValue(values.get(key));
        if (current == null || candidate.before(current)) values.put(key, candidate);
    }

    private Long elapsedMinutes(java.util.Date start, java.util.Date end) {
        if (start == null || end == null || end.before(start)) return null;
        return Long.valueOf(Math.round((end.getTime() - start.getTime()) / 60000.0));
    }

    private void addLong(Map<String, Object> values, String key, long amount) {
        Number current = (Number) values.get(key);
        values.put(key, Long.valueOf((current == null ? 0L : current.longValue()) + amount));
    }

    private String mapStatus(String raw) {
        if (raw.length() == 0 || "nostart".equals(raw)) return "未启动";
        if ("start".equals(raw)) return "拟稿中";
        if ("active".equals(raw)) return "流转中";
        if ("ended".equals(raw)) return "已完成";
        return raw;
    }

    private boolean isKnownStatus(String raw) {
        return "nostart".equals(raw) || "start".equals(raw) || "active".equals(raw) || "ended".equals(raw);
    }

    private void add(Map<String, Integer> counts, String key) {
        Integer current = counts.get(key);
        counts.put(key, current == null ? 1 : current + 1);
    }

    private void increment(Map<String, Object> counts, String key) {
        Integer current = (Integer) counts.get(key);
        counts.put(key, current == null ? 1 : current + 1);
    }

    private int sum(Map<String, Integer> counts) {
        int total = 0;
        for (Integer value : counts.values()) total += value;
        return total;
    }

    private int count(Map<String, Integer> counts, String key) {
        Integer value = counts.get(key);
        return value == null ? 0 : value.intValue();
    }

    private void incrementMonth(Map<String, int[]> counts, String key, int month) {
        int[] values = counts.get(key);
        if (values == null) {
            values = new int[12];
            counts.put(key, values);
        }
        values[month]++;
    }

    private int monthCount(Map<String, int[]> counts, String key, int month) {
        int[] values = counts.get(key);
        return values == null ? 0 : values[month];
    }

    private List<Map<String, Object>> monthlyRows(int[] monthly, Map<String, int[]> statusCounts) {
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        for (int month = 0; month < monthly.length; month++) {
            Map<String, Object> item = new LinkedHashMap<String, Object>();
            int unaccepted = monthCount(statusCounts, "拟稿中", month);
            int processing = monthCount(statusCounts, "流转中", month);
            int completed = monthCount(statusCounts, "已完成", month);
            int other = Math.max(monthly[month] - unaccepted - processing - completed, 0);
            item.put("name", (month + 1) + "月");
            item.put("value", monthly[month]);
            item.put("unaccepted", unaccepted);
            item.put("processing", processing);
            item.put("completed", completed);
            item.put("other", other);
            item.put("reportCount", monthly[month]);
            item.put("closureRate", monthly[month] == 0 ? 0 : Math.round(completed * 10000.0 / monthly[month]) / 100.0);
            rows.add(item);
        }
        return rows;
    }

    private List<Map<String, Object>> groups(Map<String, Integer> counts) {
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            Map<String, Object> row = new LinkedHashMap<String, Object>();
            row.put("name", entry.getKey());
            row.put("value", entry.getValue());
            rows.add(row);
        }
        Collections.sort(rows, new Comparator<Map<String, Object>>() {
            public int compare(Map<String, Object> left, Map<String, Object> right) {
                return ((Integer) right.get("value")).compareTo((Integer) left.get("value"));
            }
        });
        return rows;
    }

    private String text(Object value) {
        return value == null ? "" : String.valueOf(value).trim();
    }

    private String valueOr(Object value, String fallback) {
        String text = text(value);
        return text.length() == 0 ? fallback : text;
    }
}
