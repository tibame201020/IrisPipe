package irispipe.core.utility;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Builds insert, update, delete, and existence SQL statements from table
 * metadata.
 */
public class SqlStatementBuilder {
    private final String fullyQualifiedTableName;
    private final List<String> columns;
    private final List<String> primaryColumns;
    private final List<String> nonKeyColumns;
    private final SqlDialect dialect;

    private static final String INSERT_TEMPLATE = "INSERT INTO %s VALUES (%s)";
    private static final String UPDATE_TEMPLATE = "UPDATE %s SET %s WHERE %s";
    private static final String QUERY_TEMPLATE = "SELECT %s FROM %s WHERE %s";
    private static final String DELETE_TEMPLATE = "DELETE FROM %s WHERE %s";

    /**
     * Creates the SQL statement builder for one table.
     *
     * @param fullyQualifiedTableName quoted schema-qualified table name
     * @param columns all table columns
     * @param primaryColumns primary key columns
     * @param dialect SQL dialect helper
     */
    public SqlStatementBuilder(String fullyQualifiedTableName, List<String> columns, List<String> primaryColumns,
            SqlDialect dialect) {
        this.fullyQualifiedTableName = fullyQualifiedTableName;
        this.columns = columns;
        this.primaryColumns = primaryColumns;
        this.dialect = dialect;
        this.nonKeyColumns = columns.stream()
                .filter(col -> !primaryColumns.contains(col))
                .collect(Collectors.toList());
    }

    /**
     * Builds an insert statement that writes all columns by name.
     *
     * @return insert SQL
     */
    public String buildInsertSql() {
        String placeholders = columns.stream()
                .map(col -> ":" + col)
                .collect(Collectors.joining(", "));
        return String.format(INSERT_TEMPLATE, fullyQualifiedTableName, placeholders);
    }

    /**
     * Builds an update statement that updates only non-key columns.
     *
     * @return update SQL
     */
    public String buildUpdateSql() {
        String setClause = nonKeyColumns.stream()
                .map(col -> dialect.quoteIdentifier(col) + " = :" + col)
                .collect(Collectors.joining(", "));
        String whereClause = primaryColumns.stream()
                .map(col -> dialect.quoteIdentifier(col) + " = :" + col)
                .collect(Collectors.joining(" AND "));
        return String.format(UPDATE_TEMPLATE, fullyQualifiedTableName, setClause, whereClause);
    }

    /**
     * Builds a delete statement keyed by the primary key columns.
     *
     * @return delete SQL
     */
    public String buildDeleteSql() {
        String whereClause = primaryColumns.stream()
                .map(col -> dialect.quoteIdentifier(col) + " = :" + col)
                .collect(Collectors.joining(" AND "));
        return String.format(DELETE_TEMPLATE, fullyQualifiedTableName, whereClause);
    }

    /**
     * Builds a query that checks whether a chunk of primary-key tuples already
     * exists.
     *
     * @param chunkSize number of key tuples in the chunk
     * @return existence query SQL
     */
    public String buildExistsQuery(int chunkSize) {
        String selectColumns = primaryColumns.stream()
                .map(dialect::quoteIdentifier)
                .collect(Collectors.joining(", "));

        StringBuilder orConditions = new StringBuilder();
        for (int i = 0; i < chunkSize; i++) {
            if (i > 0) {
                orConditions.append(" OR ");
            }
            final int index = i;
            String singleCondition = primaryColumns.stream()
                    .map(pk -> dialect.quoteIdentifier(pk) + " = :" + pk + "_" + index)
                    .collect(Collectors.joining(" AND "));
            orConditions.append("(").append(singleCondition).append(")");
        }

        return String.format(QUERY_TEMPLATE, selectColumns, fullyQualifiedTableName, orConditions.toString());
    }
}
