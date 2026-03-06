package custom.tibame201020.IrisPipe.utility;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

/**
 * SQL 語法輔助工具，負責透過 JDBC {@link DatabaseMetaData} 自動取得
 * 目的端資料表的欄位資訊（全部欄位、主鍵欄位、非主鍵欄位），並據此
 * 預先組裝標準的 INSERT / UPDATE / DELETE SQL 語句。
 *
 * <p>本類別設計為 <strong>跨資料庫可共用（database-agnostic）</strong>，
 * 不使用任何資料庫特有語法（如 MERGE、ON DUPLICATE KEY UPDATE 等），
 * 僅依賴 ANSI SQL 標準語法與 JDBC metadata API。</p>
 */
public class SqlSyntaxHelper {
    private final String INSERT_TEMPLATE = "INSERT INTO %s VALUES (%s)";
    private final String UPDATE_TEMPLATE = "UPDATE %s SET %s WHERE %s";
    private final String QUERY_TEMPLATE = "SELECT %s FROM %s WHERE %s";
    private final String DELETE_TEMPLATE = "DELETE FROM %s WHERE %s";

    private final String columnLabel = "COLUMN_NAME";

    // initial by database metadata at constructor

    /**
     * 目的端資料表的主鍵欄位名稱清單（不可變）。
     * <p>依據 {@link DatabaseMetaData#getPrimaryKeys} 取得，順序依 {@code KEY_SEQ} 排列。</p>
     */
    public final List<String> primaryColumns;

    /**
     * 目的端資料表的所有欄位名稱清單（不可變）。
     * <p>依據 {@link DatabaseMetaData#getColumns} 取得，順序依 {@code ORDINAL_POSITION} 排列。</p>
     */
    public final List<String> columns;

    /**
     * 目的端資料表中排除主鍵後的欄位名稱清單（不可變）。
     * <p>用於 UPDATE SET 子句，避免更新主鍵欄位。</p>
     */
    public final List<String> nonKeyColumns;

    /**
     * 預先組裝好的 INSERT SQL（使用 Spring Named Parameter 格式）。
     * <p>格式: {@code INSERT INTO "schema"."table" VALUES (:col1, :col2, ...)}</p>
     */
    public final String insertSql;

    /**
     * 預先組裝好的 UPDATE SQL（使用 Spring Named Parameter 格式）。
     * <p>格式: {@code UPDATE "schema"."table" SET "col1" = :col1, ... WHERE "pk1" = :pk1 AND ...}</p>
     */
    public final String updateSql;

    /**
     * 預先組裝好的 DELETE SQL（使用 Spring Named Parameter 格式）。
     * <p>格式: {@code DELETE FROM "schema"."table" WHERE "pk1" = :pk1 AND ...}</p>
     */
    public final String deleteSql;

    /** 資料庫回傳的識別符號引用字串（例如雙引號 {@code "} 或反引號 {@code `}）。 */
    private final String identifierQutoeString;

    /** 完整的含 schema 資料表名稱（已加上識別符號引用），用於組裝 SQL。 */
    private final String fullyQualfiedTableName;

    /** 資料表所屬的 schema 名稱（已依資料庫策略轉換大小寫）。 */
    private final String schemaName;

    /** 資料表名稱（不含 schema，已依資料庫策略轉換大小寫）。 */
    private final String tableName;

    /**
     * 建構子：透過 JDBC {@link DatabaseMetaData} 取得目的端資料表的欄位與主鍵資訊，
     * 並預先組裝 INSERT / UPDATE / DELETE SQL 語句。
     *
     * <p>傳入的 {@code fullyQualfiedTableName} 預期格式為 {@code "SCHEMA.TABLE"}，
     * 若不含 dot 則視為沒有 schema。</p>
     *
     * <p>建構過程會依據資料庫的 identifier 儲存策略自動轉換大小寫：</p>
     * <ul>
     *   <li>{@link DatabaseMetaData#storesUpperCaseIdentifiers()} 為 true → 轉為大寫（如 Oracle）</li>
     *   <li>{@link DatabaseMetaData#storesLowerCaseIdentifiers()} 為 true → 轉為小寫（如 PostgreSQL）</li>
     *   <li>兩者皆 false → 維持原始輸入大小寫（如 MySQL / MariaDB）</li>
     * </ul>
     *
     * @param fullyQualfiedTableName 目的端完整資料表名稱，格式為 {@code "SCHEMA.TABLE"} 或 {@code "TABLE"}
     * @param namedParameterJdbcTemplate 已綁定目的端 DataSource 的 NamedParameterJdbcTemplate
     * @throws RuntimeException 當無法取得 metadata、資料表不存在、或主鍵未設定時拋出
     */
    public SqlSyntaxHelper(String fullyQualfiedTableName, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {

        try (Connection connection = namedParameterJdbcTemplate.getJdbcTemplate()
                .getDataSource().getConnection()) {

            DatabaseMetaData metaData = connection.getMetaData();

            // 取得識別符號引用字串（如雙引號或反引號）
            String rawQuote = metaData.getIdentifierQuoteString();
            this.identifierQutoeString = (rawQuote == null || rawQuote.trim().isEmpty()) ? "" : rawQuote.trim();

            // 解析 schema 與 table name，並依資料庫策略轉換大小寫
            String rawSchema;
            String rawTable;
            if (fullyQualfiedTableName.contains(".")) {
                String[] parts = fullyQualfiedTableName.split("\\.", 2);
                rawSchema = parts[0];
                rawTable = parts[1];
            } else {
                rawSchema = null;
                rawTable = fullyQualfiedTableName;
            }

            this.schemaName = normalizeIdentifier(rawSchema, metaData);
            this.tableName = normalizeIdentifier(rawTable, metaData);

            // 組裝帶引用的完整表名
            this.fullyQualfiedTableName = buildQualifiedTableName();

            // 取得所有欄位
            List<String> allColumns = new ArrayList<>();
            try (ResultSet rs = metaData.getColumns(null, schemaName, tableName, null)) {
                while (rs.next()) {
                    allColumns.add(rs.getString(columnLabel));
                }
            }
            if (allColumns.isEmpty()) {
                throw new IllegalStateException(
                        String.format("無法取得資料表 [%s] 的欄位資訊，請確認表名與 schema 是否正確",
                                fullyQualfiedTableName));
            }
            this.columns = Collections.unmodifiableList(allColumns);

            // 取得主鍵欄位
            List<String> pkColumns = new ArrayList<>();
            try (ResultSet rs = metaData.getPrimaryKeys(null, schemaName, tableName)) {
                while (rs.next()) {
                    pkColumns.add(rs.getString(columnLabel));
                }
            }
            if (pkColumns.isEmpty()) {
                throw new IllegalStateException(
                        String.format("資料表 [%s] 沒有主鍵，Upsert 流程必須依賴主鍵進行判斷",
                                fullyQualfiedTableName));
            }
            this.primaryColumns = Collections.unmodifiableList(pkColumns);

            // 計算非主鍵欄位
            List<String> nonPkColumns = allColumns.stream()
                    .filter(col -> !pkColumns.contains(col))
                    .collect(Collectors.toList());
            this.nonKeyColumns = Collections.unmodifiableList(nonPkColumns);

            // 預先組裝 SQL
            this.insertSql = buildInsertSql();
            this.updateSql = buildUpdateSql();
            this.deleteSql = buildDeleteSql();

        } catch (SQLException e) {
            throw new RuntimeException("取得資料庫 metadata 時發生錯誤: " + e.getMessage(), e);
        }
    }

    /**
     * 根據指定筆數動態產生 Upsert 用的 EXISTS 查詢 SQL。
     *
     * <p>產生的 SQL 會以 OR 串接多組 primary key 條件，用來一次查詢
     * chunk 中所有資料是否已存在於目的端。每一組條件使用帶有索引的
     * named parameter（如 {@code :pk1_0, :pk1_1, ...}），
     * 以便與 {@link org.springframework.jdbc.core.namedparam.MapSqlParameterSource} 搭配使用。</p>
     *
     * <p>產生的 SQL 範例（假設主鍵為 id，chunk 大小為 3）：</p>
     * <pre>{@code
     * SELECT "id" FROM "SCHEMA"."TABLE"
     *   WHERE ("id" = :id_0)
     *      OR ("id" = :id_1)
     *      OR ("id" = :id_2)
     * }</pre>
     *
     * <p>若主鍵為複合鍵（例如 pk1, pk2），則每組條件會以 AND 連接：</p>
     * <pre>{@code
     * SELECT "pk1", "pk2" FROM "SCHEMA"."TABLE"
     *   WHERE ("pk1" = :pk1_0 AND "pk2" = :pk2_0)
     *      OR ("pk1" = :pk1_1 AND "pk2" = :pk2_1)
     * }</pre>
     *
     * @param chunkSize 當前 chunk 的資料筆數（必須 &gt; 0）
     * @return 動態產生的 SELECT SQL 字串
     * @throws IllegalArgumentException 當 chunkSize &lt;= 0 時拋出
     */
    public String buildExistsQuery(int chunkSize) {
        if (chunkSize <= 0) {
            throw new IllegalArgumentException("chunkSize 必須大於 0，實際值: " + chunkSize);
        }

        // SELECT 只查主鍵欄位即可
        String selectColumns = primaryColumns.stream()
                .map(this::quoted)
                .collect(Collectors.joining(", "));

        // 組裝每一筆的 WHERE 條件
        List<String> orConditions = new ArrayList<>();
        for (int i = 0; i < chunkSize; i++) {
            final int index = i;
            String singleCondition = primaryColumns.stream()
                    .map(pk -> quoted(pk) + " = :" + pk + "_" + index)
                    .collect(Collectors.joining(" AND "));
            orConditions.add("(" + singleCondition + ")");
        }

        String whereClause = String.join(" OR ", orConditions);
        return String.format(QUERY_TEMPLATE, selectColumns, this.fullyQualfiedTableName, whereClause);
    }

    // ======================== private methods ========================

    /**
     * 依據資料庫的 identifier 儲存策略，將原始識別符號轉換為正確的大小寫。
     *
     * <ul>
     *   <li>{@link DatabaseMetaData#storesUpperCaseIdentifiers()} 為 true → 轉大寫（Oracle）</li>
     *   <li>{@link DatabaseMetaData#storesLowerCaseIdentifiers()} 為 true → 轉小寫（PostgreSQL）</li>
     *   <li>兩者皆 false → 維持原始輸入（MySQL / MariaDB）</li>
     * </ul>
     *
     * @param identifier 原始識別符號（schema 或 table name），可為 null
     * @param metaData   當前連線的 DatabaseMetaData
     * @return 轉換後的識別符號，若輸入為 null 則回傳 null
     * @throws SQLException 當呼叫 metadata 方法時發生錯誤
     */
    private String normalizeIdentifier(String identifier, DatabaseMetaData metaData) throws SQLException {
        if (identifier == null) {
            return null;
        }
        if (metaData.storesUpperCaseIdentifiers()) {
            return identifier.toUpperCase();
        }
        if (metaData.storesLowerCaseIdentifiers()) {
            return identifier.toLowerCase();
        }
        // mixed case — 維持原始輸入（如 MySQL / MariaDB）
        return identifier;
    }

    /**
     * 組裝帶有識別符號引用的完整資料表名稱。
     *
     * @return 例如 {@code "SCHEMA"."TABLE"} 或 {@code "TABLE"}
     */
    private String buildQualifiedTableName() {
        if (schemaName != null && !schemaName.isEmpty()) {
            return quoted(schemaName) + "." + quoted(tableName);
        }
        return quoted(tableName);
    }

    /**
     * 為識別符號加上引用字串。
     *
     * @param identifier 欄位名稱或表名
     * @return 加上引用後的字串，例如 {@code "COLUMN_NAME"} 或 {@code `COLUMN_NAME`}
     */
    private String quoted(String identifier) {
        return identifierQutoeString + identifier + identifierQutoeString;
    }

    /**
     * 組裝 INSERT SQL。
     * <p>格式: {@code INSERT INTO "schema"."table" VALUES (:col1, :col2, ...)}</p>
     *
     * @return INSERT SQL 字串
     */
    private String buildInsertSql() {
        String valuePlaceholders = columns.stream()
                .map(col -> ":" + col)
                .collect(Collectors.joining(", "));
        return String.format(INSERT_TEMPLATE, fullyQualfiedTableName, valuePlaceholders);
    }

    /**
     * 組裝 UPDATE SQL。
     * <p>SET 子句僅包含非主鍵欄位，WHERE 子句以主鍵欄位做條件。</p>
     * <p>格式: {@code UPDATE "schema"."table" SET "col1" = :col1, ... WHERE "pk1" = :pk1 AND ...}</p>
     *
     * @return UPDATE SQL 字串
     */
    private String buildUpdateSql() {
        String setClause = nonKeyColumns.stream()
                .map(col -> quoted(col) + " = :" + col)
                .collect(Collectors.joining(", "));

        String whereClause = primaryColumns.stream()
                .map(pk -> quoted(pk) + " = :" + pk)
                .collect(Collectors.joining(" AND "));

        return String.format(UPDATE_TEMPLATE, fullyQualfiedTableName, setClause, whereClause);
    }

    /**
     * 組裝 DELETE SQL。
     * <p>WHERE 子句以主鍵欄位做條件。</p>
     * <p>格式: {@code DELETE FROM "schema"."table" WHERE "pk1" = :pk1 AND ...}</p>
     *
     * @return DELETE SQL 字串
     */
    private String buildDeleteSql() {
        String whereClause = primaryColumns.stream()
                .map(pk -> quoted(pk) + " = :" + pk)
                .collect(Collectors.joining(" AND "));

        return String.format(DELETE_TEMPLATE, fullyQualfiedTableName, whereClause);
    }
}
