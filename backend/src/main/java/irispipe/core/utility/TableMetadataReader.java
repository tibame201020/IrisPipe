package irispipe.core.utility;

import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Reads table column and primary-key metadata from JDBC metadata.
 */
public class TableMetadataReader {
    private final DatabaseMetaData metaData;

    /**
     * Creates the metadata reader.
     *
     * @param metaData JDBC metadata
     * @param dialect unused compatibility parameter retained by current callers
     */
    public TableMetadataReader(DatabaseMetaData metaData, SqlDialect dialect) {
        this.metaData = metaData;
    }

    /**
     * Reads all column names for one table.
     *
     * @param schemaName normalized schema name, or {@code null}
     * @param tableName normalized table name
     * @return immutable list of column names
     * @throws SQLException when metadata access fails
     */
    public List<String> getColumns(String schemaName, String tableName) throws SQLException {
        List<String> columns = new ArrayList<>();
        try (ResultSet rs = metaData.getColumns(null, schemaName, tableName, null)) {
            while (rs.next()) {
                columns.add(rs.getString("COLUMN_NAME"));
            }
        }
        return Collections.unmodifiableList(columns);
    }

    /**
     * Reads primary-key column names for one table.
     *
     * @param schemaName normalized schema name, or {@code null}
     * @param tableName normalized table name
     * @return immutable list of primary-key column names
     * @throws SQLException when metadata access fails
     */
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
