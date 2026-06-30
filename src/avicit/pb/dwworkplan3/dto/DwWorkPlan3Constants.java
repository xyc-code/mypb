package avicit.pb.dwworkplan3.dto;

public final class DwWorkPlan3Constants {
    private DwWorkPlan3Constants() {
    }

    public static final String ROLE_PARTY = "PARTY_SENDER";
    public static final String ROLE_DEPT = "DEPT_MINISTER";
    public static final String ROLE_OFFICE = "OFFICE_DIRECTOR";
    public static final String ROLE_STAFF = "STAFF";

    public static final String LEVEL_PARTY = "PARTY";
    public static final String LEVEL_DEPT = "DEPT";
    public static final String LEVEL_OFFICE = "OFFICE";
    public static final String LEVEL_STAFF = "STAFF";

    public static final String STATUS_DRAFT = "DRAFT";
    public static final String STATUS_TODO = "TODO";
    public static final String STATUS_DOING = "DOING";
    public static final String STATUS_WAIT_CHILD = "WAIT_CHILD";
    public static final String STATUS_PENDING_CONFIRM = "PENDING_CONFIRM";
    public static final String STATUS_COMPLETED = "COMPLETED";
    public static final String STATUS_RETURNED = "RETURNED";

    public static final String FEEDBACK_PENDING = "PENDING";
    public static final String FEEDBACK_DRAFT = "DRAFT";
    public static final String FEEDBACK_CONFIRMED = "CONFIRMED";
    public static final String FEEDBACK_RETURNED = "RETURNED";

    public static String nextRole(String role) {
        if (ROLE_PARTY.equals(role)) {
            return ROLE_DEPT;
        }
        if (ROLE_DEPT.equals(role)) {
            return ROLE_OFFICE;
        }
        if (ROLE_OFFICE.equals(role)) {
            return ROLE_STAFF;
        }
        return "";
    }

    public static String nextLevel(String level) {
        if (LEVEL_PARTY.equals(level)) {
            return LEVEL_DEPT;
        }
        if (LEVEL_DEPT.equals(level)) {
            return LEVEL_OFFICE;
        }
        if (LEVEL_OFFICE.equals(level)) {
            return LEVEL_STAFF;
        }
        return "";
    }
}


