package avicit.pb.ztdr.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Activity;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Item;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.MainRecord;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Month;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Organization;
import avicit.pb.ztdr.dto.ZtdrAssessmentDTO.Reason;

/** 只读取源数据；年度展示与指定自然月收集使用同一规则。 */
public final class ZtdrAssessmentCalculator {
    private static final BigDecimal ITEM_DEDUCTION = new BigDecimal("0.1");
    private static final BigDecimal MISSING_DEDUCTION = new BigDecimal("0.2");

    private ZtdrAssessmentCalculator() { }

    public static ZtdrAssessmentDTO calculate(int year, LocalDate today, Organization organization,
            List<MainRecord> records, List<Activity> activities, YearMonth onlyMonth) {
        if (year < 1 || year > 9999 || today == null) throw new IllegalArgumentException("考核日期无效");
        if (onlyMonth != null && onlyMonth.getYear() != year) {
            throw new IllegalArgumentException("考核月份与年份不一致");
        }
        List<String> mainIds = new ArrayList<String>();
        for (MainRecord record : records) {
            if (organization.id.equals(record.partyId) && Integer.toString(year).equals(trim(record.year))) {
                mainIds.add(record.id);
            }
        }
        if (mainIds.size() > 1) {
            throw new IllegalArgumentException("主题党日年度主表重复：" + organization.name + "（"
                    + organization.id + "），年份 " + year + "，记录ID " + mainIds);
        }

        ZtdrAssessmentDTO result = new ZtdrAssessmentDTO();
        result.partyId = organization.id;
        result.partyName = organization.name;
        result.orgIdentity = organization.orgIdentity;
        result.departmentId = organization.departmentId;
        result.departmentName = organization.departmentName;
        LocalDate created = date(organization.creationDate, "党组织创建日期", organization.id);
        result.createdDate = created == null ? null : created.toString();
        result.year = year;
        result.asOfDate = today.toString();
        int first = onlyMonth == null ? 1 : onlyMonth.getMonthValue();
        int last = onlyMonth == null ? 12 : first;
        for (int month = first; month <= last; month++) {
            YearMonth period = YearMonth.of(year, month);
            Month value = new Month();
            value.month = month;
            value.status = created != null && !period.isAfter(YearMonth.from(created)) ? "EXEMPT"
                    : !period.isBefore(YearMonth.from(today)) ? "PENDING" : "ASSESSED";
            for (Activity activity : activities) {
                if (!mainIds.contains(activity.mainId)) continue;
                LocalDate planned = date(activity.plannedDate, "计划开展日期", activity.id);
                if (planned == null || !period.equals(YearMonth.from(planned))) continue;
                Item item = item(activity);
                value.activityCount++;
                if ("ASSESSED".equals(value.status)) assess(item, activity, period, today);
                value.items.add(item);
                value.deduction = value.deduction.add(item.deduction);
            }
            if ("ASSESSED".equals(value.status) && value.activityCount == 0) {
                Item item = new Item();
                item.plan = "当月无活动计划";
                addReason(item, period, "MISSING_PLAN", "缺少活动计划", "当月没有符合条件的主题党日活动计划", MISSING_DEDUCTION);
                value.items.add(item);
                value.deduction = item.deduction;
            }
            result.months.add(value);
            result.totalDeduction = result.totalDeduction.add(value.deduction);
        }
        return result;
    }

    private static Item item(Activity activity) {
        Item item = new Item();
        item.activityId = activity.id;
        item.plan = activity.plan;
        item.plannedDate = normalizedDate(activity.plannedDate, "计划开展日期", activity.id);
        item.actualDate = normalizedDate(activity.actualDate, "实际开展日期", activity.id);
        item.completionStatus = activity.completionStatus;
        item.participants = activity.participants;
        return item;
    }

    private static void assess(Item item, Activity activity, YearMonth period, LocalDate today) {
        LocalDate actual = date(activity.actualDate, "实际开展日期", activity.id);
        if (actual == null) {
            addReason(item, period, "MISSING_ACTUAL_DATE", "未填写实际开展日期", "实际开展日期未填写", ITEM_DEDUCTION);
        } else {
            if (!period.equals(YearMonth.from(actual)) && trim(activity.adjustmentReason).isEmpty()) {
                addReason(item, period, "MISSING_ADJUSTMENT_REASON", "跨月未说明调整原因",
                        "实际开展年月与计划年月不同，且未填写调整原因", ITEM_DEDUCTION);
            }
            if (actual.isBefore(today) && !"已完成".equals(trim(activity.completionStatus))) {
                addReason(item, period, "INCOMPLETE", "活动未完成", "实际开展日期已过，完成情况不是已完成", ITEM_DEDUCTION);
            }
        }
        if (trim(activity.participants).isEmpty()) {
            addReason(item, period, "MISSING_PARTICIPANTS", "未填写参与党员人数", "参与党员人数未填写", ITEM_DEDUCTION);
        }
    }

    private static void addReason(Item item, YearMonth period, String code, String name,
            String description, BigDecimal deduction) {
        Reason reason = new Reason();
        reason.itemCode = period + ":" + (item.activityId == null ? "NO_PLAN" : item.activityId) + ":" + code;
        reason.itemName = name;
        reason.reason = period + "：" + description;
        reason.deduction = deduction;
        item.reasons.add(reason);
        item.deduction = item.deduction.add(deduction);
    }

    public static int parseYear(String value) {
        try {
            int year = Integer.parseInt(trim(value));
            if (year < 1 || year > 9999) throw new NumberFormatException();
            return year;
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("主题党日主表年份无效：" + value, ex);
        }
    }

    private static String normalizedDate(String value, String field, String id) {
        LocalDate parsed = date(value, field, id);
        return parsed == null ? null : parsed.toString();
    }

    private static LocalDate date(String value, String field, String id) {
        String text = trim(value);
        if (text.isEmpty()) return null;
        try {
            return LocalDate.parse(text.length() > 10 ? text.substring(0, 10) : text);
        } catch (DateTimeParseException ex) {
            throw new IllegalArgumentException(field + "无效，记录ID " + id + "：" + value, ex);
        }
    }

    private static String trim(String value) { return value == null ? "" : value.trim(); }
}
