import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/** Local-only demo data for the annual YZBYTS summary page. */
public class YzbytsSummaryFixture {
    private static final String URL = "jdbc:dm://127.0.0.1:5236";
    private static final String OWNER = "YZBYTS_SUMMARY_DEMO";
    private static final String PREFIX = "YZBYTS_SUMMARY_DEMO_";
    private static final String[] PARTY_IDS = {
            "DW3_DEMO_ORG_001", "DW3_DEMO_ORG_002", "DW3_DEMO_ORG_003",
            "DW3_DEMO_ORG_004", "DW3_DEMO_ORG_005", "DW3_DEMO_ORG_006"
    };

    public static void main(String[] args) throws Exception {
        String action = args.length == 0 ? "verify" : args[0];
        if (!("install".equals(action) || "seed".equals(action)
                || "clean".equals(action) || "verify".equals(action))) {
            throw new IllegalArgumentException("Expected install, seed, clean or verify");
        }
        try (Connection connection = connect()) {
            if ("install".equals(action)) {
                install(connection);
                return;
            }
            requireTable(connection, "DYN_YZBYTS_SUMMARY");
            requireTable(connection, "DYN_YZBYTS_SUMMARY_FILE");
            connection.setAutoCommit(false);
            try {
                if ("seed".equals(action) || "clean".equals(action)) clean(connection);
                if ("seed".equals(action)) seed(connection);
                connection.commit();
            } catch (Exception ex) {
                connection.rollback();
                throw ex;
            }
            System.out.println("demo declarations=" + count(connection,
                    "SELECT COUNT(*) FROM DYN_D_YZBYTS WHERE ID LIKE ? AND CREATED_BY=?", PREFIX + "%", OWNER));
            System.out.println("demo summaries=" + count(connection,
                    "SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY WHERE ID LIKE ? AND CREATED_BY=?", PREFIX + "%", OWNER));
        }
    }

    private static Connection connect() throws Exception {
        String password = System.getenv("PB_TEST_DB_PASSWORD");
        if (password == null || password.length() == 0) {
            throw new IllegalStateException("PB_TEST_DB_PASSWORD is required");
        }
        Class.forName("dm.jdbc.driver.DmDriver");
        return DriverManager.getConnection(URL, "DJ", password);
    }

    private static void install(Connection connection) throws Exception {
        String source = new String(java.nio.file.Files.readAllBytes(
                java.nio.file.Paths.get("db/yzbyts_summary_schema.sql")), "UTF-8");
        try (Statement statement = connection.createStatement()) {
            for (String part : source.split(";")) {
                String sql = part.replaceAll("(?m)^\\s*--[^\\r\\n]*", "").trim();
                if (sql.length() == 0 || sql.startsWith("COMMENT ON")) continue;
                String[] words = sql.split("\\s+");
                if (sql.startsWith("CREATE TABLE") && tableExists(connection, words[2])) continue;
                statement.execute(sql);
            }
        }
        System.out.println("Local YZBYTS summary tables installed. Run seed to create demo rows.");
    }

    private static void seed(Connection connection) throws Exception {
        for (int i = 0; i < PARTY_IDS.length; i++) {
            String suffix = String.format("%03d", i + 1);
            String declarationId = PREFIX + "DECL_" + suffix;
            String summaryId = PREFIX + "SUM_" + suffix;
            declaration(connection, declarationId, PARTY_IDS[i], suffix);
            if (i == 2 || i == 5) continue;
            summary(connection, summaryId, declarationId, PARTY_IDS[i], suffix, i == 1 || i == 4 ? "SUBMITTED" : "DRAFT");
        }
        System.out.println("Demo filter name: 一支部一特色测试");
    }

    private static void declaration(Connection c, String id, String partyId, String suffix) throws Exception {
        execute(c, "INSERT INTO DYN_D_YZBYTS (ID,PARTY_ID,NF,D_DZZMC,D_HDZT,D_HDRWJJ,D_FL,D_ZZLX,ORG_IDENTITY,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,CREATED_DEPT) VALUES (?,?,?,?,?,?,?,'党支部',? ,?,SYSDATE,?,SYSDATE,'127.0.0.1',1,?)",
                id, partyId, "2026", "一支部一特色测试支部" + suffix,
                "一支部一特色测试活动" + suffix, "用于年度总结页面的本地测试活动简介。",
                "党支部", "ORG_ROOT", OWNER, OWNER, OWNER);
    }

    private static void summary(Connection c, String id, String declarationId, String partyId,
            String suffix, String status) throws Exception {
        execute(c, "INSERT INTO DYN_YZBYTS_SUMMARY (ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,SUMMARY_YEAR,PARTY_ID,DECLARATION_ID,PARTY_NAME,SOURCE_THEME,SOURCE_BACKGROUND,SOURCE_EXTRACTED_AT,ACTIVITY_THEME,ACTIVITY_GOAL,ACTIVITY_BACKGROUND,WORK_THOUGHT,PRACTICE,ACHIEVEMENT,STATUS,SUBMITTED_AT) VALUES (?,?,SYSDATE,?,SYSDATE,'127.0.0.1',1,?,?,?,?,?,?,?,SYSDATE,?,?,?,?,?,?,?,?)",
                id, OWNER, OWNER, "ORG_ROOT", "2026", partyId, declarationId,
                "一支部一特色测试支部" + suffix, "一支部一特色测试活动" + suffix,
                "用于年度总结页面的本地测试活动简介。", "一支部一特色测试活动" + suffix,
                "完成测试目标", "测试活动背景", "测试工作思路", "测试具体做法", "测试突出成效",
                status, "SUBMITTED".equals(status) ? new java.sql.Timestamp(System.currentTimeMillis()) : null);
    }

    private static void clean(Connection c) throws Exception {
        execute(c, "DELETE FROM DYN_YZBYTS_SUMMARY_FILE WHERE SUMMARY_ID IN (SELECT ID FROM DYN_YZBYTS_SUMMARY WHERE ID LIKE ?)", PREFIX + "%");
        execute(c, "DELETE FROM DYN_YZBYTS_SUMMARY WHERE ID LIKE ? AND CREATED_BY=?", PREFIX + "%", OWNER);
        execute(c, "DELETE FROM DYN_D_YZBYTS WHERE ID LIKE ? AND CREATED_BY=?", PREFIX + "%", OWNER);
    }

    private static void execute(Connection c, String sql, Object... values) throws Exception {
        try (PreparedStatement statement = c.prepareStatement(sql)) {
            for (int i = 0; i < values.length; i++) statement.setObject(i + 1, values[i]);
            statement.executeUpdate();
        }
    }

    private static long count(Connection c, String sql, Object... values) throws Exception {
        try (PreparedStatement statement = c.prepareStatement(sql)) {
            for (int i = 0; i < values.length; i++) statement.setObject(i + 1, values[i]);
            try (ResultSet result = statement.executeQuery()) {
                result.next();
                return result.getLong(1);
            }
        }
    }

    private static boolean tableExists(Connection c, String table) throws Exception {
        return count(c, "SELECT COUNT(*) FROM USER_TABLES WHERE TABLE_NAME=?", table) > 0;
    }

    private static void requireTable(Connection c, String table) throws Exception {
        if (!tableExists(c, table)) throw new IllegalStateException("Missing table " + table + "; run install first");
    }
}
