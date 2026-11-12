package avicit.pb.membernotice;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public final class NoticeRules {
    private NoticeRules() { }
    public static final String FORM_CODE = "DYFSYZ";
    public static final String PROCESS_KEY = "dyfsyz";
    public static String text(Object value) { return value == null ? "" : value.toString().trim(); }
    public static void require(boolean valid, String message) {
        if (!valid) throw new IllegalArgumentException(message);
    }
    public static boolean formal(String name) { return "正式党员".equals(name); }
    public static String title(String name, String type) {
        return formal(type) ? "关于同意" + name + "同志转为中共正式党员的审批意见"
                : "关于批准发展" + name + "同志为中共预备党员的审批意见";
    }
    public static int partyYears(LocalDate regular, LocalDate today) {
        return (int) Math.max(0, ChronoUnit.YEARS.between(regular, today));
    }
}
