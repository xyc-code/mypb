import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 英雄联盟全英雄测试数据脚本。
 *
 * 支持动作：
 * seed   先清理再生成测试用户、党员、党支部，并重建全部党组织人员。
 * verify 只验证测试数据数量和状态，不改库。
 * clean  只清理本脚本生成的测试数据。
 *
 * 约定：
 * 登录名号段为 910001 - 919999。
 * 默认密码为 cape。
 * 党组织类型使用 PARTY_ORGANIZATION.ATTRIBUTE_01 = 1，也就是“党支部”。
 * 仅用于本地开发库，不要在生产库执行。
 */
public class SeedLolTestUsers {
    private static final String URL = "jdbc:dm://127.0.0.1:5236";
    private static final String DB_USER = "DJ";
    private static final String DB_PASSWORD = "12345678aA";

    private static final String DM_DRIVER = "dm.jdbc.driver.DmDriver";
    private static final int LOGIN_START = 910001;
    private static final String ROOT_PARTY_ID = "8280808195ec6cf20195ec6faf880cc8";

    private static final String[][] DEPTS = {
            {"40283881641bf84d01641cc2f9b20b78", "审计法务部"},
            {"40283881641bf84d01641cc2c3db07a6", "生产安全部"},
            {"40283881641bf84d01641cc2d06c088a", "服务保障部"},
            {"40283881641bf84d01641cc2c2f7079a", "项目管理部"},
            {"40283881641bf84d01641cc2bf1a0764", "人力资源部"},
            {"40283881641bf84d01641cc2d59708e1", "信息工程部"},
            {"948e81e57345930c01734ae728f3506a", "保密部"},
            {"40283881641bf84d01641cc2c0fd077e", "纪检监察部"},
            {"40283881641bf84d01641cc2f8050b59", "设备管理部"},
            {"948e81e57262fd4801726edbb57a74a8", "党群工作部"}
    };

    private static final String[][] PARTY_ORGS = {
            {"LOLTESTORGDEMACIA2026070600001", "LOL_TEST_DEMACIA", "德玛西亚测试党支部", "9010", "000010/009010"},
            {"LOLTESTORGIONIA202607060000001", "LOL_TEST_IONIA", "艾欧尼亚测试党支部", "9020", "000010/009020"},
            {"LOLTESTORGPILTOVER202607060001", "LOL_TEST_PILTOVER", "皮尔特沃夫测试党支部", "9030", "000010/009030"},
            {"LOLTESTORGZAUN2026070600000001", "LOL_TEST_ZAUN", "祖安测试党支部", "9040", "000010/009040"},
            {"LOLTESTORGNOXUS202607060000001", "LOL_TEST_NOXUS", "诺克萨斯测试党支部", "9050", "000010/009050"}
    };

    private static final String[] BRANCH_PARTY_IDS = {
            "LOLTESTORGDEMACIA2026070600001",
            "LOLTESTORGIONIA202607060000001",
            "LOLTESTORGPILTOVER202607060001",
            "LOLTESTORGZAUN2026070600000001",
            "LOLTESTORGNOXUS202607060000001"
    };

    public static void main(String[] args) throws Exception {
        String action = args.length == 0 ? "seed" : args[0].trim().toLowerCase();
        if (!"seed".equals(action) && !"verify".equals(action) && !"clean".equals(action)) {
            throw new IllegalArgumentException("参数只能是 seed、verify、clean");
        }

        Class.forName(DM_DRIVER);
        Connection connection = DriverManager.getConnection(URL, DB_USER, DB_PASSWORD);
        connection.setAutoCommit(false);
        try {
            if ("clean".equals(action)) {
                clean(connection);
                connection.commit();
                printVerify(connection, -1);
                return;
            }

            if ("verify".equals(action)) {
                connection.rollback();
                printVerify(connection, -1);
                return;
            }

            List<Champion> champions = loadChampions();
            if (champions.isEmpty()) {
                throw new IllegalStateException("未读取到英雄列表，停止生成测试数据");
            }
            clean(connection);
            insertPartyOrganizations(connection);
            insertUsers(connection, champions);
            insertPartyMembers(connection, champions);
            replacePartyOrganMembers(connection, champions);
            connection.commit();
            printVerify(connection, champions.size());
        } catch (Exception e) {
            connection.rollback();
            throw e;
        } finally {
            connection.close();
        }
    }

    private static List<Champion> loadChampions() throws Exception {
        String versionsJson = readText("https://ddragon.leagueoflegends.com/api/versions.json");
        Matcher versionMatcher = Pattern.compile("\"([^\"]+)\"").matcher(versionsJson);
        if (!versionMatcher.find()) {
            throw new IllegalStateException("未解析到 Data Dragon 版本号");
        }

        String version = versionMatcher.group(1);
        String championJson = readText("https://ddragon.leagueoflegends.com/cdn/" + version + "/data/zh_CN/champion.json");
        Matcher matcher = Pattern.compile("\"id\":\"([^\"]+)\".*?\"key\":\"(\\d+)\".*?\"name\":\"([^\"]+)\"", Pattern.DOTALL).matcher(championJson);

        List<Champion> champions = new ArrayList<Champion>();
        while (matcher.find()) {
            champions.add(new Champion(matcher.group(1), matcher.group(2), matcher.group(3)));
        }
        System.out.println("DATA_DRAGON_VERSION=" + version);
        System.out.println("CHAMPION_COUNT=" + champions.size());
        return champions;
    }

    private static String readText(String url) throws Exception {
        InputStream input = new URL(url).openStream();
        try {
            ByteArrayOutputStream output = new ByteArrayOutputStream();
            byte[] buffer = new byte[8192];
            int length;
            while ((length = input.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }
            return new String(output.toByteArray(), StandardCharsets.UTF_8);
        } finally {
            input.close();
        }
    }

    private static void clean(Connection connection) throws Exception {
        execute(connection, "delete from PARTY_ORGAN_MEMBER where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999')");
        execute(connection, "delete from PARTY_MEMBER where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999')");
        execute(connection, "delete from SYS_USER_GROUP where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999')");
        execute(connection, "delete from SYS_USER_DEPT_POSITION where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999')");
        execute(connection, "delete from SYS_USER where LOGIN_NAME between '910001' and '919999'");
        execute(connection, "delete from PARTY_ORGANIZATION where PARTY_CODE like 'LOL_TEST%'");
    }

    private static void insertPartyOrganizations(Connection connection) throws Exception {
        String sql = "insert into PARTY_ORGANIZATION (ID, PARTY_CODE, PARTY_NAME, PARENT_ID, TREE_PATH, TREE_SORT, TREE_SORTS, TREE_LEAF, TREE_LEVEL, VALID_FLAG, ATTRIBUTE_01, CREATION_DATE, CREATED_BY, LAST_UPDATE_DATE, LAST_UPDATED_BY, LAST_UPDATE_IP, VERSION, ORG_IDENTITY) values (?, ?, ?, ?, ?, ?, ?, 'Y', 2, '1', '1', ?, 'codex', ?, 'codex', '127.0.0.1', 0, 'ORG_ROOT')";
        PreparedStatement ps = connection.prepareStatement(sql);
        for (String[] org : PARTY_ORGS) {
            ps.setString(1, org[0]);
            ps.setString(2, org[1]);
            ps.setString(3, org[2]);
            ps.setString(4, ROOT_PARTY_ID);
            ps.setString(5, ROOT_PARTY_ID + "/" + org[0]);
            ps.setInt(6, Integer.parseInt(org[3]));
            ps.setString(7, org[4]);
            ps.setTimestamp(8, now());
            ps.setTimestamp(9, now());
            ps.executeUpdate();
        }
        ps.close();
    }

    private static void insertUsers(Connection connection, List<Champion> champions) throws Exception {
        String userSql = "insert into SYS_USER (ID, NAME, NO, LOGIN_NAME, LOGIN_PASSWORD, SECRET_LEVEL, BIRTHDAY, SEX, NATION, MOBILE, ORDER_BY, TYPE, STATUS, USER_LOCKED, LOGIN_FAIL_TIMES, LAST_PASSWORD_DATE, LAST_UPDATE_DATE, LAST_UPDATED_BY, CREATION_DATE, CREATED_BY, LAST_UPDATE_IP, VERSION, CONSOLE_TYPE) values (?, ?, ?, ?, ?, '1', ?, ?, '汉族', ?, ?, '0', '1', '0', 0, ?, ?, 'codex', ?, 'codex', '127.0.0.1', 0, '1')";
        String deptSql = "insert into SYS_USER_DEPT_POSITION (ID, USER_ID, DEPT_ID, POSITION_ID, IS_CHIEF_DEPT, LAST_UPDATE_DATE, LAST_UPDATED_BY, CREATION_DATE, CREATED_BY, LAST_UPDATE_IP, VERSION, ORG_IDENTITY) values (?, ?, ?, '1', '1', ?, 'codex', ?, 'codex', '127.0.0.1', 0, 'ORG_ROOT')";
        PreparedStatement userPs = connection.prepareStatement(userSql);
        PreparedStatement deptPs = connection.prepareStatement(deptSql);

        for (int i = 0; i < champions.size(); i++) {
            Champion champion = champions.get(i);
            String loginName = loginName(i);
            String userId = userId(i);
            String[] dept = DEPTS[(i * 7 + 3) % DEPTS.length];

            userPs.setString(1, userId);
            userPs.setString(2, champion.name);
            userPs.setString(3, "LOL" + loginName);
            userPs.setString(4, loginName);
            userPs.setString(5, passwordHash(loginName));
            userPs.setTimestamp(6, birthday(i));
            userPs.setString(7, i % 2 == 0 ? "1" : "2");
            userPs.setString(8, "139" + loginName + "00");
            userPs.setInt(9, LOGIN_START + i);
            userPs.setTimestamp(10, now());
            userPs.setTimestamp(11, now());
            userPs.setTimestamp(12, now());
            userPs.executeUpdate();

            deptPs.setString(1, deptRelationId(i));
            deptPs.setString(2, userId);
            deptPs.setString(3, dept[0]);
            deptPs.setTimestamp(4, now());
            deptPs.setTimestamp(5, now());
            deptPs.executeUpdate();
        }
        userPs.close();
        deptPs.close();
    }

    private static void insertPartyMembers(Connection connection, List<Champion> champions) throws Exception {
        String sql = "insert into PARTY_MEMBER (ID, USER_ID, DEPT_ID, PARTY_ID, USER_CODE, SEX, BIRTHDAY, NATION, ORIGN, BIRTH_PLACE, JOIN_PARTY, WORK_TIME, POST, STATUS, CREATION_DATE, CREATED_BY, LAST_UPDATE_DATE, LAST_UPDATED_BY, LAST_UPDATE_IP, VERSION, ORG_IDENTITY) values (?, ?, ?, ?, ?, ?, ?, '汉族', '符文之地', '召唤师峡谷', ?, ?, '测试党员', '1', ?, 'codex', ?, 'codex', '127.0.0.1', 0, 'ORG_ROOT')";
        PreparedStatement ps = connection.prepareStatement(sql);
        for (int i = 0; i < champions.size(); i++) {
            String[] dept = DEPTS[(i * 7 + 3) % DEPTS.length];
            ps.setString(1, memberId(i));
            ps.setString(2, userId(i));
            ps.setString(3, dept[0]);
            ps.setString(4, BRANCH_PARTY_IDS[i % BRANCH_PARTY_IDS.length]);
            ps.setString(5, loginName(i));
            ps.setString(6, i % 2 == 0 ? "1" : "2");
            ps.setTimestamp(7, birthday(i));
            ps.setTimestamp(8, date("2020-07-01"));
            ps.setTimestamp(9, date("2018-07-01"));
            ps.setTimestamp(10, now());
            ps.setTimestamp(11, now());
            ps.executeUpdate();
        }
        ps.close();
    }

    private static void replacePartyOrganMembers(Connection connection, List<Champion> champions) throws Exception {
        execute(connection, "delete from PARTY_ORGAN_MEMBER");

        List<String[]> organizations = new ArrayList<String[]>();
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(
                "select ID,PARTY_NAME,ATTRIBUTE_01 from PARTY_ORGANIZATION " +
                        "where ID<>'-1' and nvl(VALID_FLAG,'1')='1' and length(trim(PARTY_NAME))>0 order by TREE_SORTS,TREE_SORT,ID");
        while (rs.next()) {
            organizations.add(new String[]{rs.getString("ID"), rs.getString("PARTY_NAME"), rs.getString("ATTRIBUTE_01")});
        }
        rs.close();
        statement.close();

        String sql = "insert into PARTY_ORGAN_MEMBER (ID, USER_ID, USER_NAME, DEPT_ID, DEPT_NAME, USER_POST, PARTY_ID, VALID_FLAG, CREATION_DATE, CREATED_BY, LAST_UPDATE_DATE, LAST_UPDATED_BY, LAST_UPDATE_IP, VERSION, ORG_IDENTITY) values (?, ?, ?, ?, ?, ?, ?, '1', ?, 'codex', ?, 'codex', '127.0.0.1', 0, 'ORG_ROOT')";
        PreparedStatement ps = connection.prepareStatement(sql);
        for (int i = 0; i < organizations.size(); i++) {
            String[] organization = organizations.get(i);
            insertPartyOrganMember(ps, champions, i * 2, organization[0], secretaryPost(organization[2]), "SJ");
            insertPartyOrganMember(ps, champions, i * 2 + 1, organization[0], "4", "ZZWY");
        }
        ps.close();
        System.out.println("PARTY_ORGANIZATIONS_ASSIGNED=" + organizations.size());
    }

    private static void insertPartyOrganMember(PreparedStatement ps, List<Champion> champions, int assignmentIndex,
                                               String partyId, String userPost, String roleKey) throws Exception {
        int userIndex = assignmentIndex % champions.size();
        Champion champion = champions.get(userIndex);
        String[] dept = DEPTS[(userIndex * 7 + 3) % DEPTS.length];
        ps.setString(1, organMemberId(assignmentIndex, roleKey));
        ps.setString(2, userId(userIndex));
        ps.setString(3, champion.name);
        ps.setString(4, dept[0]);
        ps.setString(5, dept[1]);
        ps.setString(6, userPost);
        ps.setString(7, partyId);
        ps.setTimestamp(8, now());
        ps.setTimestamp(9, now());
        ps.executeUpdate();
    }

    private static String secretaryPost(String organizationType) {
        return "1".equals(organizationType) ? "0" : "1";
    }

    private static void printVerify(Connection connection, int expectedChampions) throws Exception {
        if (expectedChampions >= 0) {
            System.out.println("EXPECTED_CHAMPIONS=" + expectedChampions);
        }
        printCount(connection, "SYS_USER", "select count(*) from SYS_USER where LOGIN_NAME between '910001' and '919999' and STATUS='1' and nvl(USER_LOCKED, '0')='0'");
        printCount(connection, "SYS_USER_DEPT_POSITION", "select count(*) from SYS_USER_DEPT_POSITION where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999') and IS_CHIEF_DEPT='1' and ORG_IDENTITY='ORG_ROOT'");
        printCount(connection, "PARTY_MEMBER", "select count(*) from PARTY_MEMBER where USER_ID in (select ID from SYS_USER where LOGIN_NAME between '910001' and '919999') and STATUS='1'");
        printCount(connection, "PARTY_ORGANIZATION", "select count(*) from PARTY_ORGANIZATION where PARTY_CODE like 'LOL_TEST%' and VALID_FLAG='1' and ATTRIBUTE_01='1' and PARENT_ID='" + ROOT_PARTY_ID + "'");
        printCount(connection, "PARTY_ORGAN_MEMBER", "select count(*) from PARTY_ORGAN_MEMBER where VALID_FLAG='1'");
        printCount(connection, "PARTY_ORGAN_MEMBER_SECRETARY", "select count(*) from PARTY_ORGAN_MEMBER where VALID_FLAG='1' and USER_POST in ('0','1')");
        printCount(connection, "PARTY_ORGAN_MEMBER_ORGANIZER", "select count(*) from PARTY_ORGAN_MEMBER where VALID_FLAG='1' and USER_POST='4'");
        printCount(connection, "PARTY_ORGANIZATION_WITHOUT_REQUIRED_POSTS", "select count(*) from PARTY_ORGANIZATION p where p.ID<>'-1' and nvl(p.VALID_FLAG,'1')='1' and length(trim(p.PARTY_NAME))>0 and (not exists (select 1 from PARTY_ORGAN_MEMBER m where m.PARTY_ID=p.ID and m.USER_POST in ('0','1') and m.VALID_FLAG='1') or not exists (select 1 from PARTY_ORGAN_MEMBER m where m.PARTY_ID=p.ID and m.USER_POST='4' and m.VALID_FLAG='1'))");
    }

    private static void printCount(Connection connection, String name, String sql) throws Exception {
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(sql);
        rs.next();
        System.out.println(name + "=" + rs.getInt(1));
        rs.close();
        statement.close();
    }

    private static void execute(Connection connection, String sql) throws Exception {
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.executeUpdate();
        ps.close();
    }

    private static String loginName(int index) {
        return String.valueOf(LOGIN_START + index);
    }

    private static String userId(int index) {
        return String.format("LOLUSER202607060000000000000%03d", index + 1);
    }

    private static String passwordHash(String loginName) throws Exception {
        byte[] digest = MessageDigest.getInstance("SHA-1")
                .digest(("cape{" + loginName + "}").getBytes(StandardCharsets.UTF_8));
        StringBuilder hash = new StringBuilder(digest.length * 2);
        for (byte value : digest) {
            hash.append(String.format("%02x", value & 0xff));
        }
        return hash.toString();
    }

    private static String deptRelationId(int index) {
        return String.format("LOLUDP202607060000000000000%04d", index + 1);
    }

    private static String memberId(int index) {
        return String.format("LOLMEMBER202607060000000000%03d", index + 1);
    }

    private static String organMemberId(int index, String roleKey) {
        return String.format("LOLOM%s20260706%016d", roleKey, index + 1);
    }

    private static Timestamp now() {
        return new Timestamp(System.currentTimeMillis());
    }

    private static Timestamp birthday(int index) throws Exception {
        int year = 1988 + (index % 18);
        int month = 1 + (index % 12);
        int day = 1 + (index % 28);
        return date(String.format("%04d-%02d-%02d", year, month, day));
    }

    private static Timestamp date(String value) throws Exception {
        Date date = new SimpleDateFormat("yyyy-MM-dd").parse(value);
        return new Timestamp(date.getTime());
    }

    private static class Champion {
        private final String id;
        private final String key;
        private final String name;

        private Champion(String id, String key, String name) {
            this.id = id;
            this.key = key;
            this.name = name;
        }
    }
}
