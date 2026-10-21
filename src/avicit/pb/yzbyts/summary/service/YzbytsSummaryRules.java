package avicit.pb.yzbyts.summary.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Locale;

/** 年度总结的字段和提交规则，供接口及测试共同使用。 */
public final class YzbytsSummaryRules {
    public static final int GOAL_MAX = 70;
    public static final int BACKGROUND_MAX = 250;
    public static final int THOUGHT_MAX = 50;
    public static final int PRACTICE_MAX = 550;
    public static final int ACHIEVEMENT_MAX = 200;
    public static final int PHOTO_MAX = 4;
    public static final long PHOTO_SIZE_MAX = 10L * 1024L * 1024L;
    public static final ZoneId TIME_ZONE = ZoneId.of("Asia/Shanghai");

    private YzbytsSummaryRules() {
    }

    public static String text(String value) {
        return value == null ? "" : value.trim();
    }

    public static int length(String value) {
        return text(value).length();
    }

    public static void checkLength(String field, String value, int max) {
        if (length(value) > max) {
            throw new IllegalArgumentException(field + "不能超过" + max + "字");
        }
    }

    public static void checkText(String goal, String background, String thought,
            String practice, String achievement) {
        checkLength("活动目标", goal, GOAL_MAX);
        checkLength("活动背景", background, BACKGROUND_MAX);
        checkLength("工作思路", thought, THOUGHT_MAX);
        checkLength("具体做法", practice, PRACTICE_MAX);
        checkLength("突出成效", achievement, ACHIEVEMENT_MAX);
    }

    public static void checkPhoto(String filename, String contentType, long size) {
        String name = text(filename);
        String lowerName = name.toLowerCase(Locale.ROOT);
        boolean image = lowerName.endsWith(".jpg")
                || lowerName.endsWith(".jpeg") || lowerName.endsWith(".png");
        if (!image) {
            throw new IllegalArgumentException("活动照片仅支持JPG、JPEG、PNG格式");
        }
        if (size <= 0 || size > PHOTO_SIZE_MAX) {
            throw new IllegalArgumentException("单张活动照片大小须在1字节至10MB之间");
        }
    }

    public static LocalDateTime deadline(int year) {
        return LocalDateTime.of(year, 11, 10, 23, 59, 59);
    }

    public static void checkBeforeDeadline(int year, LocalDateTime now) {
        if (now.isAfter(deadline(year))) {
            throw new IllegalArgumentException(year + "年度总结已超过报送截止时间");
        }
    }
}
