package irispipe.core.utility;

import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TableMetadataReader {
    private final DatabaseMetaData metaData;

    public TableMetadataReader(DatabaseMetaData metaData, SqlDialect dialect) {
        this.metaData = metaData;
    }

    public List<String> getColumns(String schemaName, String tableName) throws SQLException {
        List<String> columns = new ArrayList<>();
        try (ResultSet rs = metaData.getColumns(null, schemaName, tableName, null)) {
            while (rs.next()) {
                columns.add(rs.getString("COLUMN_NAME"));
            }
        }
        return Collections.unmodifiableList(columns);
    }

    public List<String> getPrimaryKeys(String schemaName, String tableName) throws SQLException {
        List<String> primaryKeys = new ArrayList<>();
        try (ResultSet rs = metaData.getPrimaryKeys(null, schemaName, tableName)) {
            while (rs.next()) {
                primaryKeys.add(rs.getString("COLUMN_NAME"));
            }
        }
        return Collections.unmodifiableList(primaryKeys);
    }
}
