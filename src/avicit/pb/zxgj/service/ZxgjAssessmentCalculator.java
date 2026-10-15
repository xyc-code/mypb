package avicit.pb.zxgj.service;

import java.math.BigDecimal;
import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.format.ResolverStyle;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Calculation;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Item;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.MainRecord;
import avicit.pb.zxgj.dto.ZxgjAssessmentDTO.Milestone;

/** 纯计算；调用者锁定源记录，并在同一事务保存本次新认定的扣分。 */
public final class ZxgjAssessmentCalculator {
    public static final BigDecimal PENALTY = new BigDecimal("0.1");
    public static final DateTimeFormatter DATE = DateTimeFormatter.ofPattern("uuuu-MM-dd")
            .withResolverStyle(ResolverStyle.STRICT);
    public static final DateTimeFormatter DATE_TIME = DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss")
            .withResolverStyle(ResolverStyle.STRICT);

    private ZxgjAssessmentCalculator() { }

    public static Calculation calculate(MainRecord main, List<Milestone> milestones,
            LocalDateTime now, YearMonth filter) {
        if (main == null || now == null) throw new IllegalArgumentException("缺少共建项目或考核时间");
        int year;
        try { year = parseYear(main.formNumber); }
        catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("共建项目（" + main.id + "）表单编号BDBH缺少有效的4位年度："
                    + text(main.formNumber), ex);
        }
        Calculation calculation = new Calculation();
        ZxgjAssessmentDTO result = new ZxgjAssessmentDTO();
        calculation.result = result;
        result.projectId = main.id;
        result.projectName = main.projectName;
        result.formNumber = main.formNumber;
        result.partyId = main.partyId;
        result.partyName = main.partyName;
        result.orgIdentity = main.orgIdentity;
        result.departmentId = main.departmentId;
        result.departmentName = main.departmentName;
        result.year = year;

        List<Milestone> selected = new ArrayList<Milestone>();
        for (Milestone milestone : milestones) {
            if (main.id.equals(milestone.mainId)) selected.add(milestone);
        }
        Collections.sort(selected, new Comparator<Milestone>() {
            @Override public int compare(Milestone a, Milestone b) {
                BigDecimal x = number(a.sequence), y = number(b.sequence);
                int comparison;
                if (x != null && y != null) comparison = x.compareTo(y);
                else if (x != null) comparison = -1;
                else if (y != null) comparison = 1;
                else comparison = text(a.sequence).compareTo(text(b.sequence));
                return comparison != 0 ? comparison : text(a.id).compareTo(text(b.id));
            }
        });
        result.milestoneCount = selected.size();
        int index = 0;
        for (Milestone milestone : selected) {
            index++;
            LocalDate planned = plannedDate(main, milestone);
            LocalDate start = YearMonth.from(planned).plusMonths(1).atDay(1);
            if (filter != null && !filter.equals(YearMonth.from(start))) continue;
            Item item = item(main, "MILESTONE", milestone.id, "里程碑" + index, start);
            item.milestoneId = milestone.id;
            item.plan = milestone.plan;
            item.plannedDate = DATE.format(planned);
            item.evidenceProvided = milestone.attachmentCount > 0;
            item.penaltyMarked = "是".equals(milestone.penaltyFlag);
            complete(item, start, now, "未上传里程碑附件");
            result.items.add(item);
            result.milestoneDeduction = result.milestoneDeduction.add(item.deduction);
            if (item.deduction.signum() > 0 && !item.penaltyMarked) {
                calculation.pendingMilestoneIds.add(milestone.id);
                item.penaltyMarked = true;
            }
        }

        LocalDate summaryStart = LocalDate.of(year, 11, 1);
        if (filter == null || filter.equals(YearMonth.from(summaryStart))) {
            Item item = item(main, "SUMMARY", main.id, "年度总结", summaryStart);
            item.plan = year + "年度总结";
            item.evidenceProvided = main.attachmentCount > 0;
            item.penaltyMarked = "是".equals(main.penaltyFlag);
            complete(item, summaryStart, now, "未上传年度总结附件");
            result.items.add(item);
            result.summaryDeduction = item.deduction;
            if (item.deduction.signum() > 0 && !item.penaltyMarked) {
                calculation.pendingSummaryIds.add(main.id);
                item.penaltyMarked = true;
            }
        }
        result.totalDeduction = result.milestoneDeduction.add(result.summaryDeduction);
        return calculation;
    }

    /** BDBH前四位为业务年度；异常由调用者带上项目ID说明。 */
    public static int parseYear(String formNumber) {
        String value = text(formNumber);
        if (value.length() < 4 || !value.substring(0, 4).matches("[0-9]{4}")) {
            throw new IllegalArgumentException("表单编号缺少有效的4位年度");
        }
        int year = Integer.parseInt(value.substring(0, 4));
        if (year == 0) throw new IllegalArgumentException("表单编号年度不能为0000");
        return year;
    }

    private static LocalDate plannedDate(MainRecord main, Milestone milestone) {
        try {
            String value = text(milestone.plannedDate);
            return value.length() == 10 ? LocalDate.parse(value, DATE)
                    : LocalDateTime.parse(value, DATE_TIME).toLocalDate();
        } catch (DateTimeException ex) {
            throw new IllegalArgumentException("共建项目（" + main.id + "）里程碑（" + milestone.id
                    + "）时间节点SJJD缺失或无效，无法确定考核月份", ex);
        }
    }

    private static Item item(MainRecord main, String type, String sourceId, String name, LocalDate start) {
        Item item = new Item();
        item.itemCode = "ZXGJ:" + type + ":" + sourceId;
        item.itemName = name;
        item.type = type;
        item.projectId = main.id;
        item.projectName = main.projectName;
        item.formNumber = main.formNumber;
        item.assessmentDate = DATE.format(start);
        item.assessmentMonth = YearMonth.from(start).toString();
        return item;
    }

    private static void complete(Item item, LocalDate start, LocalDateTime now, String missing) {
        boolean due = !now.toLocalDate().isBefore(start);
        boolean penalty = item.penaltyMarked || (due && !item.evidenceProvided);
        item.status = penalty ? "DEDUCTED" : due ? "SATISFIED" : "PENDING";
        item.deduction = penalty ? PENALTY : BigDecimal.ZERO;
        String project = "项目“" + text(item.projectName) + "”（编号：" + text(item.formNumber)
                + "；主表ID：" + item.projectId + "）";
        String source = item.milestoneId == null ? "年度总结" : item.itemName + "“"
                + text(item.plan) + "”（子表ID：" + item.milestoneId + "）";
        String description = item.penaltyMarked ? "已认定永久扣分，补传不恢复，扣0.1分"
                : penalty ? missing + "，扣0.1分"
                : due ? "已提供附件" : "未到考核时间";
        item.reason = project + source + "，开始检查日期：" + item.assessmentDate
                + "，归属月份：" + item.assessmentMonth + "，" + description;
    }

    private static BigDecimal number(String value) {
        try { return new BigDecimal(text(value)); }
        catch (NumberFormatException ex) { return null; }
    }

    private static String text(String value) { return value == null ? "" : value.trim(); }
}
