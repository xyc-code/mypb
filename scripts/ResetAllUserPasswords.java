import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class ResetAllUserPasswords {
    private static final String URL = "jdbc:dm://127.0.0.1:5236";

    public static void main(String[] args) throws Exception {
        if (args.length != 1) {
            throw new IllegalArgumentException("Usage: ResetAllUserPasswords <db-password>");
        }

        Class.forName("dm.jdbc.driver.DmDriver");
        try (Connection connection = DriverManager.getConnection(URL, "DJ", args[0])) {
            connection.setAutoCommit(false);
            int updated = 0;
            try (Statement query = connection.createStatement();
                 ResultSet users = query.executeQuery("select ID,LOGIN_NAME from SYS_USER where LOGIN_NAME is not null");
                 PreparedStatement update = connection.prepareStatement(
                         "update SYS_USER set LOGIN_PASSWORD=?,LOGIN_FAIL_TIMES=0,LOGIN_FAIL_FIRST_TIME=null," +
                                 "USER_LOCKED='0',LAST_PASSWORD_DATE=sysdate,LAST_UPDATE_DATE=sysdate," +
                                 "LAST_UPDATED_BY='codex',LAST_UPDATE_IP='127.0.0.1' where ID=?")) {
                while (users.next()) {
                    update.setString(1, passwordHash(users.getString("LOGIN_NAME")));
                    update.setString(2, users.getString("ID"));
                    update.addBatch();
                    updated++;
                }
                update.executeBatch();
            }
            connection.commit();
            System.out.println("UPDATED_USERS=" + updated);
        }
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
}
