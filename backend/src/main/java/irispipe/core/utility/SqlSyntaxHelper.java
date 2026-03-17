package irispipe.core.utility;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

/**
 * Reads table metadata and precomputes SQL statements used by the batch writers.
 */
public class SqlSyntaxHelper {
    public final List<String> primaryColumns;
    public final List<String> columns;
    public final List<String> nonKeyColumns;

    public final String insertSql;
    public final String updateSql;
    public final String deleteSql;

    private final SqlDialect dialect;
    private final String fullyQualifiedTableName;
    private final SqlStatementBuilder statementBuilder;

    /**
     * Creates the SQL helper for one destination table.
     *
     * @param tableNameInput schema-qualified or plain table name
     * @param namedParameterJdbcTemplate JDBC template used to access metadata
     */
    public SqlSyntaxHelper(String tableNameInput, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        try (Connection connection = namedParameterJdbcTemplate.getJdbcTemplate().getDataSource().getConnection()) {
            DatabaseMetaData metaData = connection.getMetaData();
            this.dialect = SqlDialect.fromMetaData(metaData);

            String schemaName;
            String tableName;
            if (tableNameInput.contains(".")) {
                String[] parts = tableNameInput.split("\\.", 2);
                schemaName = dialect.normalizeIdentifier(parts[0]);
                tableName = dialect.normalizeIdentifier(parts[1]);
            } else {
                schemaName = null;
                tableName = dialect.normalizeIdentifier(tableNameInput);
            }

            this.fullyQualifiedTableName = buildQualifiedTableName(schemaName, tableName);

            TableMetadataReader reader = new TableMetadataReader(metaData, dialect);
            this.columns = reader.getColumns(schemaName, tableName);
            if (this.columns.isEmpty()) {
                throw new IllegalStateException("Cannot find columns for table: " + tableNameInput);
            }

            this.primaryColumns = reader.getPrimaryKeys(schemaName, tableName);
            if (this.primaryColumns.isEmpty()) {
                throw new IllegalStateException("Table has no primary key: " + tableNameInput);
            }

            this.statementBuilder = new SqlStatementBuilder(fullyQualifiedTableName, columns, primaryColumns, dialect);
            this.insertSql = statementBuilder.buildInsertSql();
            this.updateSql = statementBuilder.buildUpdateSql();
            this.deleteSql = statementBuilder.buildDeleteSql();
            this.nonKeyColumns = columns.stream().filter(col -> !primaryColumns.contains(col)).toList();

        } catch (SQLException e) {
            throw new RuntimeException("Error reading database metadata: " + e.getMessage(), e);
        }
    }

    /**
     * Builds the quoted schema-qualified table name.
     *
     * @param schema normalized schema name, or {@code null}
     * @param table normalized table name
     * @return quoted schema-qualified table name
     */
    private String buildQualifiedTableName(String schema, String table) {
        if (schema != null && !schema.isEmpty()) {
            return dialect.quoteIdentifier(schema) + "." + dialect.quoteIdentifier(table);
        }
        return dialect.quoteIdentifier(table);
    }

    /**
     * Builds the existence query used by the upsert flow.
     *
     * @param chunkSize number of primary-key tuples in the chunk
     * @return existence query SQL
     */
    public String buildExistsQuery(int chunkSize) {
        return statementBuilder.buildExistsQuery(chunkSize);
    }
}
