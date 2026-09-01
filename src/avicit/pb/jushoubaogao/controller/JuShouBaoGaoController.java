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
                result.putAll(acceptUnitData(rows, year, null));
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
            result.putAll(acceptUnitData(rows, year, "BPM_CLIENT_HIST_TASK_V"));
            result.put("ok", true);
            return result;
        } catch (Exception ex) {
            LOGGER.error("举手报告正式统计查询失败", ex);
            result.put("ok", false);
            result.put("message", "统计数据暂时无法读取，请检查报告表、受理子表和 BPM_CLIENT_HIST 流程视图配置。");
            result.put("years", new ArrayList<Integer>());
            result.put("year", Calendar.getInstance().get(Calendar.YEAR));
            result.putAll(emptyAggregate());
            return result;
        }
    }

    private List<Integer> availableYears() {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select distinct extract(year from FSSJ) YEAR from DYN_JSBG where FSSJ is not null order by YEAR desc");
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
                    "select ID, FSSJ, BGLX, SZDW, SFNM, JJLX, SFZG, SFFQLC, JBG_TEST_STATUS "
                            + "from DYN_JSBG where FSSJ >= ? and FSSJ < ?", start, end);
        }
        String sql = "select t.ID, t.FSSJ, t.BGLX, t.SZDW, t.SFNM, t.JJLX, t.SFZG, t.SFFQLC, v.BUSINESSSTATE_ "
                + "from DYN_JSBG t left join (select FORMID_, BUSINESSSTATE_, "
                + "row_number() over(partition by FORMID_ order by LAST_UPDATE_DATE_ desc nulls last) rn "
                + "from " + processTable + ") v on t.ID = v.FORMID_ and v.rn = 1 "
                + "where t.FSSJ >= ? and t.FSSJ < ?";
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
            Object date = row.get("FSSJ");
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
            if ("紧急".equals(valueOr(row.get("JJLX"), "未填写")) && !"已完成".equals(state)) {
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

    private Map<String, Object> acceptUnitData(List<Map<String, Object>> reportRows, int year, String taskTable) {
        return aggregateAcceptUnits(reportRows, acceptChildRows(year), latestTask21Rows(year, taskTable));
    }

    private List<Map<String, Object>> acceptChildRows(int year) {
        Date start = Date.valueOf(year + "-01-01");
        Date end = Date.valueOf((year + 1) + "-01-01");
        if (TEMP_STATUS_MODE) {
            return jdbcTemplate.queryForList(
                    "select a.REPORT_ID, a.UNIT_NAME from JBG_TEST_ACCEPT_UNIT a "
                            + "join DYN_JSBG r on r.ID = a.REPORT_ID "
                            + "where a.SOURCE_KIND = 'CHILD' and r.FSSJ >= ? and r.FSSJ < ?",
                    start, end);
        }
        return jdbcTemplate.queryForList(
                "select c.FK_COL_ID REPORT_ID, c.ZRDWMC UNIT_NAME from DYN_JSBG_YWCL c "
                        + "join DYN_JSBG r on r.ID = c.FK_COL_ID "
                        + "where r.FSSJ >= ? and r.FSSJ < ?",
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
                            + "where a.SOURCE_KIND = 'TASK21' and r.FSSJ >= ? and r.FSSJ < ?) where rn = 1",
                    start, end);
        }
        String sql = "select REPORT_ID, UNIT_NAME from (select h.TASK_B_ID_ REPORT_ID, d.DEPT_NAME UNIT_NAME, "
                + "row_number() over(partition by h.TASK_B_ID_ order by h.CREATE_ desc nulls last, "
                + "h.END_ desc nulls last, h.DBID_ desc) rn "
                + "from " + taskTable + " h join DYN_JSBG r on r.ID = h.TASK_B_ID_ "
                + "left join SYS_DEPT_V d on d.ID = h.ASSIGNEE_DEPT_ "
                + "where h.TASK_NAME_ = 'task21' and r.FSSJ >= ? and r.FSSJ < ?) where rn = 1";
        return jdbcTemplate.queryForList(sql, start, end);
    }

    private Map<String, Object> aggregateAcceptUnits(List<Map<String, Object>> reportRows,
            List<Map<String, Object>> childRows, List<Map<String, Object>> taskRows) {
        Map<String, Map<String, Object>> reports = new LinkedHashMap<String, Map<String, Object>>();
        for (Map<String, Object> row : reportRows) reports.put(text(row.get("ID")), row);

        Map<String, Boolean> reportsWithChildren = new LinkedHashMap<String, Boolean>();
        Map<String, Boolean> assignedReports = new LinkedHashMap<String, Boolean>();
        Map<String, Map<String, Object>> details = new LinkedHashMap<String, Map<String, Object>>();
        Map<String, Integer> counts = new LinkedHashMap<String, Integer>();
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
            addAcceptUnit(details, counts, report, unitName);
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
            addAcceptUnit(details, counts, entry.getValue(), unitName);
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
            Map<String, Object> report, String unitName) {
        add(counts, unitName);
        Map<String, Object> detail = details.get(unitName);
        if (detail == null) {
            detail = new LinkedHashMap<String, Object>();
            detail.put("name", unitName);
            detail.put("total", 0);
            detail.put("已完成", 0);
            detail.put("流转中", 0);
            detail.put("拟稿中", 0);
            details.put(unitName, detail);
        }
        increment(detail, "total");
        String rawStatus = text(report.get("BUSINESSSTATE_"));
        String simulatedStatus = text(report.get("JBG_TEST_STATUS"));
        String state = TEMP_STATUS_MODE ? valueOr(simulatedStatus, "未启动") : mapStatus(rawStatus);
        if (detail.containsKey(state)) increment(detail, state);
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
                Collections.<Map<String, Object>>emptyList(), Collections.<Map<String, Object>>emptyList()));
        return result;
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
