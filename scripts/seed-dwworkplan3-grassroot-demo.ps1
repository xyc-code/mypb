param(
  [string]$Root = (Resolve-Path ".").Path,
  [string]$DbUrl = "jdbc:dm://127.0.0.1:5236",
  [string]$DbUser = "dj",
  [string]$DbPassword = $env:PB_DM_PASSWORD
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($DbPassword)) {
  throw "DbPassword is required. Pass -DbPassword or set PB_DM_PASSWORD."
}

$workDir = Join-Path $Root "target\dwworkplan3-grassroot-demo"
New-Item -ItemType Directory -Force -Path $workDir | Out-Null

$javaFile = Join-Path $workDir "SeedDwWorkPlan3GrassrootDemo.java"
$javaSource = @'
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class SeedDwWorkPlan3GrassrootDemo {
    public static void main(String[] args) throws Exception {
        if (args.length < 3) {
            throw new IllegalArgumentException("Usage: <jdbcUrl> <user> <password>");
        }
        Class.forName("dm.jdbc.driver.DmDriver");
        Connection conn = DriverManager.getConnection(args[0], args[1], args[2]);
        try {
            conn.setAutoCommit(false);
            ensureTables(conn);
            cleanup(conn);
            seedBusiness(conn);
            seedPartyOrgs(conn);
            conn.commit();
            System.out.println("DWWORKPLAN3_GRASSROOT_DEMO_OK business=6 partyOrgs=6");
        } catch (Exception ex) {
            conn.rollback();
            throw ex;
        } finally {
            conn.close();
        }
    }

    private static void ensureTables(Connection conn) throws Exception {
        if (!tableExists(conn, "DYN_ZBJHYWS")) {
            execute(conn, "CREATE TABLE DYN_ZBJHYWS (" +
                    "ID VARCHAR2(200) NOT NULL,CREATED_BY VARCHAR2(200) NOT NULL,CREATION_DATE TIMESTAMP(0) NOT NULL," +
                    "LAST_UPDATED_BY VARCHAR2(200) NOT NULL,LAST_UPDATE_DATE TIMESTAMP(0) NOT NULL,LAST_UPDATE_IP VARCHAR2(200) NOT NULL," +
                    "VERSION NUMBER(16,0) NOT NULL,ORG_IDENTITY VARCHAR2(200) NOT NULL,CREATED_DEPT VARCHAR2(200) NOT NULL," +
                    "TREE_SORTS VARCHAR2(4000),YWLX VARCHAR2(1020),YWBH VARCHAR2(200),IS_LEAD_PARTY VARCHAR2(8),BDBH VARCHAR2(1020)," +
                    "YWMC VARCHAR2(2000),TREE_SORT NUMBER(38,0),VALID_FLAG VARCHAR2(4),TREE_LEAF VARCHAR2(8),TREE_PATH VARCHAR2(4000)," +
                    "TREE_LEVEL NUMBER(38,0),PARENT_ID VARCHAR2(200),BD_ID VARCHAR2(1020),ST_ID VARCHAR2(200),ST_BM VARCHAR2(200)," +
                    "SFCZBD VARCHAR2(50),WCLX VARCHAR2(50),CONSTRAINT PK_DW3_DEMO_ZBJHYWS PRIMARY KEY (ID))");
        }
        if (!tableExists(conn, "PARTY_ORGANIZATION")) {
            execute(conn, "CREATE TABLE PARTY_ORGANIZATION (" +
                    "ID VARCHAR2(200) NOT NULL,CREATED_BY VARCHAR2(200) NOT NULL,CREATION_DATE TIMESTAMP(0) NOT NULL," +
                    "LAST_UPDATED_BY VARCHAR2(200) NOT NULL,LAST_UPDATE_DATE TIMESTAMP(0) NOT NULL,LAST_UPDATE_IP VARCHAR2(200) NOT NULL," +
                    "VERSION NUMBER(16,0) NOT NULL,ORG_IDENTITY VARCHAR2(200) NOT NULL,PARTY_NAME VARCHAR2(800),PARENT_ID VARCHAR2(200)," +
                    "TREE_LEVEL NUMBER(38,0),TREE_SORT NUMBER(38,0),TREE_SORTS VARCHAR2(4000),CONSTRAINT PK_DW3_DEMO_PARTY_ORG PRIMARY KEY (ID))");
        }
        if (!tableExists(conn, "PARTY_ORGAN_MEMBER")) {
            execute(conn, "CREATE TABLE PARTY_ORGAN_MEMBER (" +
                    "ID VARCHAR2(200) NOT NULL,CREATED_BY VARCHAR2(200) NOT NULL,CREATION_DATE TIMESTAMP(0) NOT NULL," +
                    "LAST_UPDATED_BY VARCHAR2(200) NOT NULL,LAST_UPDATE_DATE TIMESTAMP(0) NOT NULL,LAST_UPDATE_IP VARCHAR2(200) NOT NULL," +
                    "VERSION NUMBER(16,0) NOT NULL,ORG_IDENTITY VARCHAR2(200) NOT NULL,PARTY_ID VARCHAR2(200),USER_ID VARCHAR2(200)," +
                    "USER_POST VARCHAR2(50),CONSTRAINT PK_DW3_DEMO_PARTY_MEMBER PRIMARY KEY (ID))");
        }
    }

    private static void cleanup(Connection conn) throws Exception {
        update(conn, "delete from PARTY_ORGAN_MEMBER where PARTY_ID like 'DW3_DEMO_ORG_%' or ID like 'DW3_DEMO_MEMBER_%'");
        update(conn, "delete from PARTY_ORGANIZATION where ID like 'DW3_DEMO_ORG_%'");
        update(conn, "delete from DYN_ZBJHYWS where ID like 'DW3_DEMO_BIZ_%'");
    }

    private static void seedBusiness(Connection conn) throws Exception {
        insertBusiness(conn, "DW3_DEMO_BIZ_001", "\u57fa\u5c42\u515a\u5efa\u4fe1\u606f\u5316\u5e73\u53f0\u5efa\u8bbe", "DW3-BIZ-001", "001", "\u5fc5\u987b\u5b8c\u6210");
        insertBusiness(conn, "DW3_DEMO_BIZ_002", "\u515a\u5458\u6559\u80b2\u57f9\u8bad", "DW3-BIZ-002", "002", "\u81ea\u7531\u5b8c\u6210");
        insertBusiness(conn, "DW3_DEMO_BIZ_003", "\u4e09\u4f1a\u4e00\u8bfe\u8d28\u91cf\u63d0\u5347", "DW3-BIZ-003", "003", "\u5fc5\u987b\u5b8c\u6210");
        insertBusiness(conn, "DW3_DEMO_BIZ_004", "\u4e3b\u9898\u515a\u65e5\u6d3b\u52a8", "DW3-BIZ-004", "004", "\u81ea\u7531\u5b8c\u6210");
        insertBusiness(conn, "DW3_DEMO_BIZ_005", "\u515a\u652f\u90e8\u54c1\u724c\u521b\u5efa", "DW3-BIZ-005", "005", "\u5fc5\u987b\u5b8c\u6210");
        insertBusiness(conn, "DW3_DEMO_BIZ_006", "\u7ec4\u7ec7\u751f\u6d3b\u4f1a\u548c\u6c11\u4e3b\u8bc4\u8bae", "DW3-BIZ-006", "006", "\u81ea\u7531\u5b8c\u6210");
    }

    private static void insertBusiness(Connection conn, String id, String name, String code, String sort, String completeType) throws Exception {
        PreparedStatement ps = conn.prepareStatement("insert into DYN_ZBJHYWS(" +
                "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,CREATED_DEPT," +
                "YWMC,YWLX,YWBH,BD_ID,BDBH,ST_ID,ST_BM,SFCZBD,WCLX,VALID_FLAG,TREE_LEAF,TREE_LEVEL,TREE_SORT,TREE_SORTS,PARENT_ID) " +
                "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        ps.setString(1, id);
        ps.setString(2, "DW3_DEMO");
        ps.setString(3, "DW3_DEMO");
        ps.setString(4, "127.0.0.1");
        ps.setString(5, "ORG_ROOT");
        ps.setString(6, "DW3_DEMO_DEPT");
        ps.setString(7, name);
        ps.setString(8, "d");
        ps.setString(9, code);
        ps.setString(10, "DW3_DEMO_FORM");
        ps.setString(11, "DW3_DEMO_FORM_CODE");
        ps.setString(12, "DW3_DEMO_VIEW");
        ps.setString(13, "DW3_DEMO_VIEW_CODE");
        ps.setString(14, "\u662f");
        ps.setString(15, completeType);
        ps.setString(16, "1");
        ps.setString(17, "1");
        ps.setInt(18, 2);
        ps.setInt(19, Integer.parseInt(sort));
        ps.setString(20, sort);
        ps.setString(21, null);
        ps.executeUpdate();
        ps.close();
    }

    private static void seedPartyOrgs(Connection conn) throws Exception {
        insertPartyOrg(conn, "DW3_DEMO_ORG_001", "\u7b2c\u4e00\u515a\u652f\u90e8", "001");
        insertPartyOrg(conn, "DW3_DEMO_ORG_002", "\u7b2c\u4e8c\u515a\u652f\u90e8", "002");
        insertPartyOrg(conn, "DW3_DEMO_ORG_003", "\u751f\u4ea7\u4e00\u7ebf\u515a\u652f\u90e8", "003");
        insertPartyOrg(conn, "DW3_DEMO_ORG_004", "\u673a\u5173\u515a\u652f\u90e8", "004");
        insertPartyOrg(conn, "DW3_DEMO_ORG_005", "\u9752\u5e74\u515a\u5458\u7a81\u51fb\u961f\u515a\u652f\u90e8", "005");
        insertPartyOrg(conn, "DW3_DEMO_ORG_006", "\u5de5\u7a0b\u9879\u76ee\u515a\u652f\u90e8", "006");
    }

    private static void insertPartyOrg(Connection conn, String id, String name, String sort) throws Exception {
        PreparedStatement org = conn.prepareStatement("insert into PARTY_ORGANIZATION(" +
                "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_NAME,PARENT_ID,TREE_LEVEL,TREE_SORT,TREE_SORTS) " +
                "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?,?,?)");
        org.setString(1, id);
        org.setString(2, "DW3_DEMO");
        org.setString(3, "DW3_DEMO");
        org.setString(4, "127.0.0.1");
        org.setString(5, "ORG_ROOT");
        org.setString(6, name);
        org.setString(7, "-1");
        org.setInt(8, 2);
        org.setInt(9, Integer.parseInt(sort));
        org.setString(10, sort);
        org.executeUpdate();
        org.close();
        insertMember(conn, "DW3_DEMO_MEMBER_FZR_" + sort, id, "0");
        insertMember(conn, "DW3_DEMO_MEMBER_JSR_" + sort, id, "4");
    }

    private static void insertMember(Connection conn, String id, String partyId, String post) throws Exception {
        PreparedStatement member = conn.prepareStatement("insert into PARTY_ORGAN_MEMBER(" +
                "ID,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,ORG_IDENTITY,PARTY_ID,USER_ID,USER_POST) " +
                "values(?,?,sysdate,?,sysdate,?,0,?,?,?,?)");
        member.setString(1, id);
        member.setString(2, "DW3_DEMO");
        member.setString(3, "DW3_DEMO");
        member.setString(4, "127.0.0.1");
        member.setString(5, "ORG_ROOT");
        member.setString(6, partyId);
        member.setString(7, "1");
        member.setString(8, post);
        member.executeUpdate();
        member.close();
    }

    private static boolean tableExists(Connection conn, String tableName) throws Exception {
        PreparedStatement ps = conn.prepareStatement("select count(1) from USER_TABLES where TABLE_NAME=?");
        ps.setString(1, tableName);
        ResultSet rs = ps.executeQuery();
        rs.next();
        boolean exists = rs.getInt(1) > 0;
        rs.close();
        ps.close();
        return exists;
    }

    private static void execute(Connection conn, String sql) throws Exception {
        Statement st = conn.createStatement();
        st.execute(sql);
        st.close();
    }

    private static void update(Connection conn, String sql) throws Exception {
        Statement st = conn.createStatement();
        st.executeUpdate(sql);
        st.close();
    }
}
'@

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($javaFile, $javaSource, $utf8NoBom)

$classpath = "$Root\WebRoot\WEB-INF\classes;$Root\WebRoot\WEB-INF\lib\*"
& "D:\jdk1.8\bin\javac.exe" -encoding UTF-8 -cp $classpath -d $workDir $javaFile
if ($LASTEXITCODE -ne 0) {
  throw "javac failed"
}

& "D:\jdk1.8\bin\java.exe" "-Dfile.encoding=UTF-8" -cp "$workDir;$classpath" SeedDwWorkPlan3GrassrootDemo $DbUrl $DbUser $DbPassword
if ($LASTEXITCODE -ne 0) {
  throw "demo seed failed"
}
