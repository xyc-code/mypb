import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * 数据库文本替换工具。
 *
 * 默认只扫描，不更新。
 * 执行参数：
 * scan    只统计包含目标文本的字段
 * update  将目标文本替换为指定文本
 */
public class ReplaceDbText {
    private static final String URL = "jdbc:dm://127.0.0.1:5236";
    private static final String USER = "DJ";
    private static final String PASSWORD = "12345678aA";
    private static final String FROM = "航发";
    private static final String TO = "XX";

    public static void main(String[] args) throws Exception {
        String mode = args.length > 0 ? args[0] : "scan";
        if (!"scan".equals(mode) && !"update".equals(mode)) {
            throw new IllegalArgumentException("参数只能是 scan 或 update");
        }

        Class.forName("dm.jdbc.driver.DmDriver");
        Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
        connection.setAutoCommit(false);
        try {
            List<TextColumn> columns = loadTextColumns(connection);
            int hitColumns = 0;
            long hitRows = 0;
            for (TextColumn column : columns) {
                long count = countHits(connection, column);
                if (count == 0) {
                    continue;
                }
                hitColumns++;
                hitRows += count;
                System.out.println(column.tableName + "." + column.columnName + "=" + count);
                if ("update".equals(mode)) {
                    updateColumn(connection, column);
                }
            }
            if ("update".equals(mode)) {
                connection.commit();
            } else {
                connection.rollback();
            }
            System.out.println("MODE=" + mode);
            System.out.println("HIT_COLUMNS=" + hitColumns);
            System.out.println("HIT_ROWS=" + hitRows);
        } catch (Exception e) {
            connection.rollback();
            throw e;
        } finally {
            connection.close();
        }
    }

    private static List<TextColumn> loadTextColumns(Connection connection) throws Exception {
        String sql = "select table_name, column_name from user_tab_columns "
                + "where data_type in ('VARCHAR2','CHAR','CLOB') "
                + "and table_name not like 'BIN$%' "
                + "order by table_name, column_id";
        List<TextColumn> columns = new ArrayList<TextColumn>();
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(sql);
        while (rs.next()) {
            columns.add(new TextColumn(rs.getString(1), rs.getString(2)));
        }
        rs.close();
        statement.close();
        return columns;
    }

    private static long countHits(Connection connection, TextColumn column) throws Exception {
        String sql = "select count(*) from " + q(column.tableName)
                + " where " + q(column.columnName) + " like ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, "%" + FROM + "%");
        ResultSet rs = ps.executeQuery();
        rs.next();
        long count = rs.getLong(1);
        rs.close();
        ps.close();
        return count;
    }

    private static void updateColumn(Connection connection, TextColumn column) throws Exception {
        String sql = "update " + q(column.tableName)
                + " set " + q(column.columnName) + " = replace(" + q(column.columnName) + ", ?, ?)"
                + " where " + q(column.columnName) + " like ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setString(1, FROM);
        ps.setString(2, TO);
        ps.setString(3, "%" + FROM + "%");
        ps.executeUpdate();
        ps.close();
    }

    private static String q(String name) {
        return "\"" + name.replace("\"", "\"\"") + "\"";
    }

    private static class TextColumn {
        private final String tableName;
        private final String columnName;

        private TextColumn(String tableName, String columnName) {
            this.tableName = tableName;
            this.columnName = columnName;
        }
    }
}
