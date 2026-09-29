import avicit.pb.fzdy.service.FzdyAccessService;
import avicit.pb.fzdy.service.FzdyConversionService;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysdatapermissions.utils.ExpressionUtil;
import avicit.platform6.msystem.sysdatapermissions.sysdatapermissionsauth.service.SysDataPermissionsAuthService;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ThreadContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import java.lang.reflect.Proxy;
import java.lang.reflect.Field;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;
import java.util.concurrent.*;

/** Real DM8 transactions/row locks in a temporary schema; never inserts application business data. */
public class FzdyConversionTest {
    private static final String URL = "jdbc:dm://127.0.0.1:5236";
    private static final String AUDIT = "CREATED_BY VARCHAR2(50), CREATION_DATE DATE, LAST_UPDATED_BY VARCHAR2(50), "
            + "LAST_UPDATE_DATE DATE, LAST_UPDATE_IP VARCHAR2(50), VERSION NUMBER(16), ORG_IDENTITY VARCHAR2(32)";
    private static int assertions;
    private static JdbcTemplate jdbc;
    private static FzdyConversionService service;
    private static PartyMemberDTO lastDto;
    private static boolean missingFormalDictionary;
    private static final FzdyAccessService.Context CONTEXT = new FzdyAccessService.Context("org",
            "select ID from DYN_FZDY where ID <> 'denied'");

    public static void main(String[] args) throws Exception {
        Class.forName("dm.jdbc.driver.DmDriver");
        final String password = System.getenv("PB_TEST_DB_PASSWORD");
        if (password == null || password.isEmpty()) throw new IllegalStateException("PB_TEST_DB_PASSWORD required");
        final String schema = "FZDY_TEST_" + System.currentTimeMillis();
        try (Connection admin = DriverManager.getConnection(URL, "DJ", password)) {
            try (Statement s = admin.createStatement()) { s.execute("create schema " + schema + " authorization DJ"); }
            try {
                DriverManagerDataSource ds = new DriverManagerDataSource(URL, "DJ", password) {
                    @Override public Connection getConnection() throws SQLException {
                        Connection c = super.getConnection();
                        try (Statement s = c.createStatement()) { s.execute("set schema " + schema); }
                        return c;
                    }
                };
                jdbc = new JdbcTemplate(ds);
                createTables();
                PartyMemberService members = new PartyMemberService() {
                    @Override public String insertPartyMember(PartyMemberDTO dto) throws Exception {
                        lastDto = dto;
                        String id = UUID.randomUUID().toString().replace("-", "");
                        jdbc.update("insert into PARTY_MEMBER (ID,USER_ID,STATUS,PARTY_TYPE,ORG_IDENTITY,IDCARD) values (?,?,?,?,?,?)",
                                id, dto.getUserId(), dto.getStatus(), dto.getPartyType(), dto.getOrgIdentity(), dto.getIdcard());
                        if ("insertfail".equals(dto.getUserId())) throw new Exception("Injected checked exception AFTER insert");
                        return id;
                    }
                };
                SysLookupAPI lookups = (SysLookupAPI) Proxy.newProxyInstance(SysLookupAPI.class.getClassLoader(),
                        new Class<?>[]{SysLookupAPI.class}, (p, method, values) -> {
                            if (!"getLookUpListByTypeByAppId".equals(method.getName())) throw new UnsupportedOperationException();
                            String type = (String) values[0];
                            if ("PM_PARTY_TYPE".equals(type)) return missingFormalDictionary ? Collections.emptyList() : Arrays.asList(vo("formal-code", "正式党员"));
                            if ("PLATFORM_SEX".equals(type)) return Arrays.asList(vo("1", "男"), vo("2", "女"));
                            return Arrays.asList(vo("college-code", "大学本科"));
                        });
                SysUserAPI users = (SysUserAPI) Proxy.newProxyInstance(SysUserAPI.class.getClassLoader(),
                        new Class<?>[]{SysUserAPI.class}, (p, method, values) -> {
                            if (!"getSysUserById".equals(method.getName())) throw new UnsupportedOperationException();
                            SysUser u = new SysUser(); u.setId((String) values[0]); u.setDeptId("dept"); return u;
                        });
                service = new FzdyConversionService(jdbc, members, lookups, users, new DataSourceTransactionManager(ds));
                scenarios();
                authorization(users);
                System.out.println("PASS: " + assertions + " assertions; DM8 batch, rollback, permissions and concurrency scenarios.");
            } finally {
                try (Statement s = admin.createStatement()) { s.execute("drop schema " + schema + " cascade"); }
                System.out.println("Removed isolated schema " + schema);
            }
        }
    }

    private static void authorization(SysUserAPI users) throws Exception {
        for (String ddl : Arrays.asList(
                "SYS_USER_ROLE (ID VARCHAR2(50)," + AUDIT + ",SYS_USER_ID VARCHAR2(50),SYS_ROLE_ID VARCHAR2(50))",
                "SYS_DATA_PERMISSIONS_METHOD (ID VARCHAR2(50)," + AUDIT + ",VIEW_CODE VARCHAR2(50),TABLE_NAME VARCHAR2(50),TYPE VARCHAR2(2))",
                "SYS_DATA_PERMISSIONS_AUTH (ID VARCHAR2(50)," + AUDIT + ",ROLE_ID VARCHAR2(50),METHOD_ID VARCHAR2(50),FORMULA VARCHAR2(100))",
                "SYS_DATA_PERMISSIONS_RULE (ID VARCHAR2(50)," + AUDIT + ",METHOD_ID VARCHAR2(50),STATE VARCHAR2(2),FILTER_CONDITION_SQL VARCHAR2(2000),IDENTIFIER VARCHAR2(50),COLUMN_VALUE VARCHAR2(100))")) {
            jdbc.execute("create table " + ddl);
        }
        SysDataPermissionsAuthService platform = new SysDataPermissionsAuthService();
        Field jdbcField = SysDataPermissionsAuthService.class.getDeclaredField("jdbcTemplate"); jdbcField.setAccessible(true); jdbcField.set(platform, jdbc);
        Field apiField = ExpressionUtil.class.getDeclaredField("sysUserAPI"); apiField.setAccessible(true); apiField.set(null, users);
        FzdyAccessService access = new FzdyAccessService();
        Field field = FzdyAccessService.class.getDeclaredField("dataPermissions"); field.setAccessible(true); field.set(access, platform);
        Map<String, Object> sessionValues = new HashMap<String, Object>();
        SysUser operator = new SysUser(); operator.setId("operator");
        sessionValues.put(SessionHelper.SESSION_CURRENT_USER, operator);
        sessionValues.put(SessionHelper.SESSION_CURRENT_DEPT_ID, "dept");
        sessionValues.put("CURRENT_ORG_IDENTITY", "org");
        HttpSession session = (HttpSession) Proxy.newProxyInstance(HttpSession.class.getClassLoader(), new Class<?>[]{HttpSession.class},
                (p, method, values) -> "getAttribute".equals(method.getName()) ? sessionValues.get(values[0]) : null);
        HttpServletRequest request = (HttpServletRequest) Proxy.newProxyInstance(HttpServletRequest.class.getClassLoader(), new Class<?>[]{HttpServletRequest.class},
                (p, method, values) -> "getSession".equals(method.getName()) ? session : "getRemoteAddr".equals(method.getName()) ? "127.0.0.1" : null);
        final boolean[] operationGrant = {false};
        Subject subject = (Subject) Proxy.newProxyInstance(Subject.class.getClassLoader(), new Class<?>[]{Subject.class},
                (p, method, values) -> "isAuthenticated".equals(method.getName()) || ("isPermitted".equals(method.getName()) && operationGrant[0]));
        ThreadContext.bind(subject);
        try {
            try { access.authorize(request); throw new AssertionError("missing operation grant accepted"); }
            catch (SecurityException expected) { assertions++; }
            operationGrant[0] = true;
            try { access.authorize(request); throw new AssertionError("missing row grant accepted"); }
            catch (SecurityException expected) { assertions++; }
            jdbc.update("insert into SYS_USER_ROLE (SYS_USER_ID,SYS_ROLE_ID) values ('operator','role')");
            jdbc.update("insert into SYS_DATA_PERMISSIONS_METHOD (ID,VIEW_CODE,TABLE_NAME,TYPE) values ('method','TEST_FZDY','DYN_FZDY','1')");
            jdbc.update("insert into SYS_DATA_PERMISSIONS_AUTH (ROLE_ID,METHOD_ID,FORMULA) values ('role','method','1')");
            jdbc.update("insert into SYS_DATA_PERMISSIONS_RULE (METHOD_ID,STATE,FILTER_CONDITION_SQL,IDENTIFIER) values ('method','0',?, '1')", "#{t}.ID <> 'native-denied'");
            FzdyAccessService.Context scope = access.authorize(request);
            seed("native-denied", "u-native-denied", "ended"); seed("native-allowed", "u-native-allowed", "ended");
            counts(service.convert(new String[]{"native-denied", "native-allowed"}, scope), 1, 1, 0);
            jdbc.update("update SYS_DATA_PERMISSIONS_AUTH set FORMULA=' '");
            try { access.authorize(request); throw new AssertionError("blank formula accepted"); }
            catch (SecurityException expected) { assertions++; }
            sessionValues.remove(SessionHelper.SESSION_CURRENT_USER);
            try { access.authorize(request); throw new AssertionError("anonymous accepted"); }
            catch (SecurityException expected) { assertions++; }
        } finally { ThreadContext.unbindSubject(); }
    }

    private static void createTables() {
        jdbc.execute("create table DYN_FZDY (ID VARCHAR2(50) primary key," + AUDIT + ",XM VARCHAR2(50),USER_ID VARCHAR2(50),"
                + "PARTY_ID VARCHAR2(50),XB VARCHAR2(50),MZ VARCHAR2(50),CRNY DATE,JG VARCHAR2(2000),CSD VARCHAR2(2000),"
                + "WHCD VARCHAR2(2000),CJGZSJ DATE,XRZW VARCHAR2(2000),ZC VARCHAR2(50),SSZH VARCHAR2(2000),JTZZ VARCHAR2(2000))");
        jdbc.execute("create table SYS_USER (ID VARCHAR2(50) primary key," + AUDIT + ",NO VARCHAR2(50),STATUS VARCHAR2(2))");
        jdbc.execute("create table PARTY_ORGANIZATION (ID VARCHAR2(50) primary key," + AUDIT + ")");
        jdbc.execute("create table PARTY_MEMBER (ID VARCHAR2(50) primary key," + AUDIT + ",USER_ID VARCHAR2(50),STATUS VARCHAR2(16),PARTY_TYPE VARCHAR2(50),IDCARD VARCHAR2(255),check (USER_ID <> 'constraintfail'))");
        jdbc.execute("create table BPM_HIST_PROCINST (ID_ VARCHAR2(50),FORMID_ VARCHAR2(50),STATE_ VARCHAR2(50),BUSINESSSTATE_ VARCHAR2(50),END_ DATE)");
        jdbc.update("insert into PARTY_ORGANIZATION (ID,ORG_IDENTITY) values ('party','org')");
    }

    private static void scenarios() throws Exception {
        seed("good", "u-good", "ended");
        counts(run("good"), 1, 0, 0);
        eq(lastDto.getStatus(), "1", "effective");
        eq(lastDto.getPartyType(), "formal-code", "formal dictionary resolved by NAME, not hardcoded code");
        eq(lastDto.getSex(), "1", "gender label to code");
        eq(lastDto.getEducationLevel(), "college-code", "education mapping");
        eq(lastDto.getUserCode(), "code-u-good", "user code from SYS_USER");
        eq(lastDto.getDeptId(), "dept", "system user department");
        eq(lastDto.getJoinParty(), null, "application date not copied");
        eq(lastDto.getRegularDate(), null, "regular date absent");
        eq(lastDto.getCategory(), null, "no invented category");
        eq(lastDto.getIntroducer(), null, "no invented introducer");
        eq(lastDto.getIdcard(), "CARD-U-GOOD", "ID card mapping and uppercase normalization");
        eq(lastDto.getAddress(), "test-address", "address mapping");
        eq(lastDto.getNation(), "汉族", "nation retained");
        eq(lastDto.getBirthday(), java.sql.Date.valueOf("1990-01-02"), "birth date");
        eq(lastDto.getWorkTime(), java.sql.Date.valueOf("2010-03-04"), "work date");
        eq(jdbc.queryForObject("select LAST_UPDATED_BY from DYN_FZDY where ID='good'", String.class), null, "source unchanged");
        counts(run("good"), 0, 1, 0);
        jdbc.update("delete from PARTY_MEMBER where USER_ID='u-good'");
        counts(run("good"), 1, 0, 0); // Only current ID-card presence matters; no historical marker.

        for (String state : Arrays.asList("start", "active", "cancel", "terminated")) {
            seed(state, "u-" + state, state); counts(run(state), 0, 1, 0);
        }
        seed("no-flow", "u-no-flow", "ended"); jdbc.update("delete from BPM_HIST_PROCINST where FORMID_='no-flow'");
        counts(run("no-flow"), 0, 1, 0);
        seed("multi", "u-multi", "ended"); flow("multi", "active"); counts(run("multi"), 0, 1, 0);
        seed("no-end", "u-no-end", "ended"); jdbc.update("update BPM_HIST_PROCINST set END_=null where FORMID_='no-end'");
        counts(run("no-end"), 0, 1, 0);
        seed("mismatch", "u-mismatch", "ended"); jdbc.update("update BPM_HIST_PROCINST set STATE_='terminated' where FORMID_='mismatch'");
        counts(run("mismatch"), 0, 1, 0);
        for (String status : Arrays.asList("0", "1")) {
            seed("exists" + status, "existing" + status, "ended");
            jdbc.update("insert into PARTY_MEMBER (ID,USER_ID,STATUS,IDCARD) values (?,?,?,?)", "old" + status, "different-user" + status, status, " card-existing" + status + " ");
            counts(run("exists" + status), 0, 1, 0);
            eq(jdbc.queryForObject("select STATUS from PARTY_MEMBER where ID=?", String.class, "old" + status), status, "existing status unchanged");
        }
        seed("denied", "u-denied", "ended"); counts(run("denied"), 0, 1, 0);
        seed("other-org", "u-other-org", "ended"); jdbc.update("update DYN_FZDY set ORG_IDENTITY='other' where ID='other-org'");
        counts(run("other-org"), 0, 1, 0);
        seed("no-user", "u-no-user", "ended"); jdbc.update("delete from SYS_USER where ID='u-no-user'"); counts(run("no-user"), 0, 1, 0);
        seed("inactive-user", "u-inactive", "ended"); jdbc.update("update SYS_USER set STATUS='3' where ID='u-inactive'"); counts(run("inactive-user"), 0, 1, 0);
        seed("no-party", "u-no-party", "ended"); jdbc.update("update DYN_FZDY set PARTY_ID=null where ID='no-party'"); counts(run("no-party"), 0, 1, 0);
        seed("bad-dict", "u-bad-dict", "ended"); jdbc.update("update DYN_FZDY set XB='unknown' where ID='bad-dict'"); counts(run("bad-dict"), 0, 1, 0);
        seed("no-formal", "u-no-formal", "ended"); missingFormalDictionary = true; counts(run("no-formal"), 0, 1, 0); missingFormalDictionary = false;
        seed("insertfail", "insertfail", "ended"); seed("constraintfail", "constraintfail", "ended"); seed("batchgood", "u-batchgood", "ended");
        counts(run("active", "exists0", "insertfail", "batchgood", "constraintfail", "batchgood"), 1, 3, 2);
        eq(jdbc.queryForObject("select count(*) from PARTY_MEMBER where USER_ID in ('insertfail','constraintfail')", Integer.class), 0, "checked exception and database constraint failures rolled back");
        seed("empty-card", "u-empty-card", "ended"); jdbc.update("update DYN_FZDY set SSZH='   ' where ID='empty-card'");
        counts(run("empty-card"), 0, 1, 0);
        jdbc.update("update DYN_FZDY set SSZH=null where ID='empty-card'"); counts(run("empty-card"), 0, 1, 0);
        seed("x-card", "u-x-card", "ended"); jdbc.update("update DYN_FZDY set SSZH=' 11010119900101001x ' where ID='x-card'");
        counts(run("x-card"), 1, 0, 0); eq(lastDto.getIdcard(), "11010119900101001X", "trim and uppercase X");
        seed("x-repeat", "u-x-repeat", "ended"); jdbc.update("update DYN_FZDY set SSZH='11010119900101001X' where ID='x-repeat'");
        counts(run("x-repeat"), 0, 1, 0);
        counts(run("missing", "", null, "' OR '1'='1"), 0, 4, 0);
        try { run(new String[0]); throw new AssertionError("empty batch accepted"); } catch (IllegalArgumentException expected) { assertions++; }
        try { run(new String[201]); throw new AssertionError("oversized batch accepted"); } catch (IllegalArgumentException expected) { assertions++; }
        seed("same", "u-same", "ended"); concurrent("same", "same", "CARD-U-SAME");
        seed("person-a", "u-person", "ended"); seed("person-b", "u-person", "ended"); concurrent("person-a", "person-b", "CARD-U-PERSON");
        seed("account-a", "u-account-a", "ended"); seed("account-b", "u-account-b", "ended");
        jdbc.update("update DYN_FZDY set SSZH='same-card-x' where ID='account-a'");
        jdbc.update("update DYN_FZDY set SSZH=' SAME-CARD-X ' where ID='account-b'");
        concurrent("account-a", "account-b", "SAME-CARD-X");
    }

    private static void concurrent(final String a, final String b, String idcard) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        CountDownLatch start = new CountDownLatch(1);
        try {
            Future<Map<String, Object>> first = executor.submit(() -> { start.await(); return run(a); });
            Future<Map<String, Object>> second = executor.submit(() -> { start.await(); return run(b); });
            start.countDown();
            Map<String, Object> x = first.get(40, TimeUnit.SECONDS), y = second.get(40, TimeUnit.SECONDS);
            eq((Integer) x.get("success") + (Integer) y.get("success"), 1, "exactly one concurrent success");
            eq((Integer) x.get("skipped") + (Integer) y.get("skipped"), 1, "other request skipped");
            eq((Integer) x.get("failed") + (Integer) y.get("failed"), 0, "no concurrency error");
            eq(jdbc.queryForObject("select count(*) from PARTY_MEMBER where upper(trim(IDCARD))=?", Integer.class, idcard), 1, "one member row per ID card");
        } finally { executor.shutdownNow(); executor.awaitTermination(40, TimeUnit.SECONDS); }
    }

    private static void seed(String id, String user, String state) {
        if (jdbc.queryForObject("select count(*) from SYS_USER where ID=?", Integer.class, user) == 0) {
            jdbc.update("insert into SYS_USER (ID,NO,STATUS) values (?,?,'1')", user, "code-" + user);
        }
        jdbc.update("insert into DYN_FZDY (ID,XM,USER_ID,PARTY_ID,ORG_IDENTITY,XB,WHCD,MZ,CRNY,CJGZSJ,SSZH,JTZZ) "
                + "values (?,?,?,'party','org','男','大学本科','汉族',?,?,?,'test-address')",
                id, "test-" + id, user, java.sql.Date.valueOf("1990-01-02"), java.sql.Date.valueOf("2010-03-04"), "card-" + user);
        flow(id, state);
    }
    private static void flow(String id, String state) {
        jdbc.update("insert into BPM_HIST_PROCINST (ID_,FORMID_,STATE_,BUSINESSSTATE_,END_) values (?,?,?,?,?)",
                UUID.randomUUID().toString(), id, state, state, "ended".equals(state) ? new Date() : null);
    }
    private static SysLookupSimpleVo vo(String code, String name) { SysLookupSimpleVo v = new SysLookupSimpleVo(); v.setLookupCode(code); v.setLookupName(name); return v; }
    private static Map<String, Object> run(String... ids) { return service.convert(ids, CONTEXT); }
    private static void counts(Map<String, Object> result, int success, int skipped, int failed) {
        eq(result.get("success"), success, "success count"); eq(result.get("skipped"), skipped, "skipped count"); eq(result.get("failed"), failed, "failed count");
    }
    private static void eq(Object actual, Object expected, String message) {
        assertions++;
        if (!Objects.equals(actual, expected)) throw new AssertionError(message + ": expected=" + expected + ", actual=" + actual);
    }
}
