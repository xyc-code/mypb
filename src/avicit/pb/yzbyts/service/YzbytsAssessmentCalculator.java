package avicit.pb.yzbyts.service;

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
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Calculation;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Configuration;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Item;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.MainRecord;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Milestone;
import avicit.pb.yzbyts.dto.YzbytsAssessmentDTO.Organization;

/** 纯计算，不读取数据库、不修改源记录；调用者一次提交本批所有扣分标记。 */
public final class YzbytsAssessmentCalculator {
    public static final BigDecimal PENALTY = new BigDecimal("0.1");
    public static final DateTimeFormatter DATE_TIME = DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss")
            .withResolverStyle(ResolverStyle.STRICT);

    private YzbytsAssessmentCalculator() { }

    public static Calculation calculate(int year, LocalDateTime now, Organization organization,
            List<MainRecord> mains, List<Milestone> milestones, Configuration configuration,
            YearMonth targetMonth) {
        if (now == null) throw new IllegalArgumentException("缺少考核时间");
        LocalDateTime start = assessmentStart(year, configuration);
        MainRecord main = null;
        for (MainRecord record : mains) {
            if (organization.id.equals(record.partyId) && year == parseYear(record.year)) {
                if (main != null) throw new IllegalArgumentException(organization.name + "在" + year
                        + "年存在多条一支部一特色主表记录（" + main.id + "、" + record.id + "），请先核对数据");
                main = record;
            }
        }
        List<Milestone> selected = new ArrayList<Milestone>();
        if (main != null) {
            for (Milestone milestone : milestones) {
                if (main.id.equals(milestone.mainId)) selected.add(milestone);
            }
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
        Calculation calculation = new Calculation();
        YzbytsAssessmentDTO result = organizationResult(organization, year, start, now);
        calculation.result = result;
        result.submitted = main != null;
        result.milestoneCount = selected.size();
        result.missingMilestoneCount = Math.max(0, 3 - selected.size());

        Item submission = item(year + ":SUBMISSION", "年度提交", start);
        complete(submission, result.due, !result.submitted,
                "未填报" + year + "年度一支部一特色，扣0.1分", "已填报年度一支部一特色");
        if (belongs(submission, targetMonth)) {
            result.items.add(submission);
            result.submissionDeduction = submission.deduction;
        }
        for (int index = selected.size() + 1; index <= 3; index++) {
            Item missing = item(year + ":MISSING:" + index, "缺少里程碑" + index, start);
            complete(missing, result.due, true, year + "年度至少应填报3条里程碑，缺少第"
                    + index + "条，扣0.1分", "");
            if (belongs(missing, targetMonth)) {
                result.items.add(missing);
                result.missingDeduction = result.missingDeduction.add(missing.deduction);
            }
        }
        int index = 0;
        for (Milestone milestone : selected) {
            index++;
            LocalDateTime planned = plannedDate(milestone, organization, year);
            LocalDateTime deadline = planned.plusHours(24);
            LocalDateTime assessmentDate = deadline.isAfter(start) ? deadline : start;
            Item detail = item(year + ":MILESTONE:" + milestone.id, "里程碑" + index, assessmentDate);
            detail.milestoneId = milestone.id;
            detail.plan = milestone.plan;
            detail.plannedDate = DATE_TIME.format(planned);
            detail.sourceStatus = milestone.sourceStatus;
            detail.evidenceProvided = !text(milestone.evidence).isEmpty();
            detail.penaltyMarked = "是".equals(milestone.penaltyFlag);
            boolean completed = "已完成".equals(milestone.sourceStatus);
            boolean eligible = result.due && (detail.penaltyMarked || !now.isBefore(assessmentDate));
            boolean penalty = detail.penaltyMarked || !detail.evidenceProvided || !completed;
            String reason;
            if (detail.penaltyMarked) reason = year + "年度" + detail.itemName + "已记录永久扣分，扣0.1分";
            else {
                String fault = !detail.evidenceProvided && !completed ? "未提供佐证材料且状态未完成"
                        : !detail.evidenceProvided ? "未提供佐证材料" : "状态未完成";
                reason = year + "年度" + detail.itemName + "考核时间为" + detail.assessmentDate
                        + "，" + fault + "，扣0.1分";
            }
            complete(detail, eligible, penalty, reason, "已提供佐证材料且状态为已完成");
            if (belongs(detail, targetMonth)) {
                result.items.add(detail);
                result.milestoneDeduction = result.milestoneDeduction.add(detail.deduction);
                if (detail.deduction.signum() > 0 && !detail.penaltyMarked) {
                    calculation.pendingPenaltyIds.add(milestone.id);
                    detail.penaltyMarked = true;
                }
            }
        }
        result.totalDeduction = result.submissionDeduction.add(result.missingDeduction)
                .add(result.milestoneDeduction);
        return calculation;
    }

    public static YzbytsAssessmentDTO organizationResult(Organization organization, int year,
            LocalDateTime start, LocalDateTime now) {
        YzbytsAssessmentDTO result = new YzbytsAssessmentDTO();
        result.partyId = organization.id;
        result.partyName = organization.name;
        result.orgIdentity = organization.orgIdentity;
        result.departmentId = organization.departmentId;
        result.departmentName = organization.departmentName;
        result.year = year;
        result.assessmentStart = DATE_TIME.format(start);
        result.due = !now.isBefore(start);
        return result;
    }

    public static LocalDateTime assessmentStart(int year, Configuration configuration) {
        if (year < 1 || year > 9998) throw new IllegalArgumentException("考核年份无效");
        try {
            return LocalDate.of(year, Integer.parseInt(text(configuration.month)),
                    Integer.parseInt(text(configuration.day))).atStartOfDay();
        } catch (DateTimeException ex) {
            throw new IllegalArgumentException(year + "年度考核开始日期配置无效，请检查KH_MONTH/KH_DAY");
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("考核开始日期配置无效，请检查KH_MONTH/KH_DAY");
        }
    }

    public static int parseYear(String value) {
        try {
            String normalized = text(value);
            if (!normalized.matches("[0-9]{4}")) throw new NumberFormatException();
            int year = Integer.parseInt(normalized);
            if (year < 1 || year > 9998) throw new NumberFormatException();
            return year;
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("一支部一特色主表年份NF无效：" + text(value));
        }
    }

    private static LocalDateTime plannedDate(Milestone milestone, Organization organization, int year) {
        try {
            return LocalDateTime.parse(text(milestone.plannedDate), DATE_TIME);
        } catch (DateTimeException ex) {
            throw new IllegalArgumentException(organization.name + "在" + year + "年的里程碑（"
                    + milestone.id + "）缺少或填写了无效的计划完成时间");
        }
    }

    private static Item item(String code, String name, LocalDateTime date) {
        Item item = new Item();
        item.itemCode = code;
        item.itemName = name;
        item.assessmentDate = DATE_TIME.format(date);
        item.assessmentMonth = YearMonth.from(date).toString();
        return item;
    }

    private static void complete(Item item, boolean due, boolean penalty, String reason, String success) {
        item.status = !due ? "未到考核时间" : penalty ? "已扣分" : "已达标";
        item.deduction = due && penalty ? PENALTY : BigDecimal.ZERO;
        item.reason = !due ? "未到考核时间" : penalty ? reason : success;
    }

    private static boolean belongs(Item item, YearMonth month) {
        return month == null || month.toString().equals(item.assessmentMonth);
    }

    private static BigDecimal number(String value) {
        try { return new BigDecimal(text(value)); }
        catch (NumberFormatException ex) { return null; }
    }

    private static String text(String value) { return value == null ? "" : value.trim(); }
}
