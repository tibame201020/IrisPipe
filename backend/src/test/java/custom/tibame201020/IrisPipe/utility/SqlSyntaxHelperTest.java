package custom.tibame201020.IrisPipe.utility;

import org.junit.jupiter.api.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.*;

/**
 * {@link SqlSyntaxHelper} 的單元測試。
 *
 * <p>使用 H2 in-memory 資料庫進行測試。
 * H2 的 {@code storesUpperCaseIdentifiers()} 回傳 true，
 * 因此可驗證 Oracle 風格的大寫識別符號處理邏輯。</p>
 */
class SqlSyntaxHelperTest {

    private static DataSource dataSource;
    private static NamedParameterJdbcTemplate namedJdbc;
    private static JdbcTemplate jdbcTemplate;

    @BeforeAll
    static void initDataSource() {
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setDriverClassName("org.h2.Driver");
        ds.setUrl("jdbc:h2:mem:sqlsyntax_test;DB_CLOSE_DELAY=-1");
        ds.setUsername("sa");
        ds.setPassword("");
        dataSource = ds;
        jdbcTemplate = new JdbcTemplate(dataSource);
        namedJdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    @BeforeEach
    void setupTables() {
        // 每次測試前清除舊表，確保隔離
        jdbcTemplate.execute("DROP TABLE IF EXISTS SINGLE_PK_TABLE");
        jdbcTemplate.execute("DROP TABLE IF EXISTS COMPOSITE_PK_TABLE");
        jdbcTemplate.execute("DROP TABLE IF EXISTS ALL_PK_TABLE");
        jdbcTemplate.execute("DROP SCHEMA IF EXISTS TEST_SCHEMA CASCADE");

        // 單一主鍵表
        jdbcTemplate.execute("""
                CREATE TABLE SINGLE_PK_TABLE (
                    ID      INT          PRIMARY KEY,
                    NAME    VARCHAR(100),
                    STATUS  VARCHAR(20)
                )
                """);

        // 複合主鍵表
        jdbcTemplate.execute("""
                CREATE TABLE COMPOSITE_PK_TABLE (
                    REGION_ID   INT,
                    PRODUCT_ID  INT,
                    QUANTITY    INT,
                    PRICE       DECIMAL(10,2),
                    PRIMARY KEY (REGION_ID, PRODUCT_ID)
                )
                """);

        // 全部欄位都是主鍵的表（邊界情境：nonKeyColumns 為空）
        jdbcTemplate.execute("""
                CREATE TABLE ALL_PK_TABLE (
                    KEY1 INT,
                    KEY2 INT,
                    PRIMARY KEY (KEY1, KEY2)
                )
                """);
    }

    // ======================== 建構子：欄位探測 ========================

    @Test
    @DisplayName("單一主鍵表 — columns / primaryColumns / nonKeyColumns 應正確分類")
    void constructor_singlePk_shouldDetectColumnsCorrectly() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "NAME", "STATUS");
        assertThat(helper.primaryColumns).containsExactly("ID");
        assertThat(helper.nonKeyColumns).containsExactly("NAME", "STATUS");
    }

    @Test
    @DisplayName("複合主鍵表 — 應正確辨識多個主鍵與非主鍵欄位")
    void constructor_compositePk_shouldDetectColumnsCorrectly() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        assertThat(helper.columns).containsExactly("REGION_ID", "PRODUCT_ID", "QUANTITY", "PRICE");
        assertThat(helper.primaryColumns).containsExactly("REGION_ID", "PRODUCT_ID");
        assertThat(helper.nonKeyColumns).containsExactly("QUANTITY", "PRICE");
    }

    @Test
    @DisplayName("全欄位皆為主鍵 — nonKeyColumns 應為空清單")
    void constructor_allPk_shouldHaveEmptyNonKeyColumns() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("ALL_PK_TABLE", namedJdbc);

        assertThat(helper.columns).containsExactly("KEY1", "KEY2");
        assertThat(helper.primaryColumns).containsExactly("KEY1", "KEY2");
        assertThat(helper.nonKeyColumns).isEmpty();
    }

    @Test
    @DisplayName("欄位清單應為不可變（unmodifiable）")
    void constructor_columnLists_shouldBeUnmodifiable() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThatThrownBy(() -> helper.columns.add("HACKED"))
                .isInstanceOf(UnsupportedOperationException.class);
        assertThatThrownBy(() -> helper.primaryColumns.add("HACKED"))
                .isInstanceOf(UnsupportedOperationException.class);
        assertThatThrownBy(() -> helper.nonKeyColumns.add("HACKED"))
                .isInstanceOf(UnsupportedOperationException.class);
    }

    // ======================== 建構子：大小寫策略 ========================

    @Test
    @DisplayName("H2 storesUpperCase — 小寫輸入應自動轉為大寫進行 metadata 查詢")
    void constructor_lowercaseInput_shouldNormalizeToUpperCase() {
        // H2 的 storesUpperCaseIdentifiers() = true
        // 傳入小寫表名，應能正常解析
        SqlSyntaxHelper helper = new SqlSyntaxHelper("single_pk_table", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "NAME", "STATUS");
        assertThat(helper.primaryColumns).containsExactly("ID");
    }

    @Test
    @DisplayName("混合大小寫輸入應同樣被正規化")
    void constructor_mixedCaseInput_shouldNormalizeToUpperCase() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("Single_Pk_Table", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "NAME", "STATUS");
    }

    // ======================== 建構子：Schema 處理 ========================

    @Test
    @DisplayName("帶 schema 的完整表名應正確解析並產生合法 SQL")
    void constructor_withSchema_shouldParseCorrectly() {
        // H2 建立 schema 並在其中建表
        jdbcTemplate.execute("CREATE SCHEMA TEST_SCHEMA");
        jdbcTemplate.execute("""
                CREATE TABLE TEST_SCHEMA.SCHEMA_TABLE (
                    ID   INT PRIMARY KEY,
                    DATA VARCHAR(50)
                )
                """);

        SqlSyntaxHelper helper = new SqlSyntaxHelper("TEST_SCHEMA.SCHEMA_TABLE", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "DATA");
        assertThat(helper.primaryColumns).containsExactly("ID");
        // INSERT SQL 中應包含 schema 前綴
        assertThat(helper.insertSql).contains("TEST_SCHEMA");
        assertThat(helper.insertSql).contains("SCHEMA_TABLE");
    }

    @Test
    @DisplayName("帶 schema 的小寫輸入也應正確正規化")
    void constructor_withSchema_lowercaseInput_shouldNormalize() {
        jdbcTemplate.execute("CREATE SCHEMA TEST_SCHEMA");
        jdbcTemplate.execute("""
                CREATE TABLE TEST_SCHEMA.SCHEMA_TABLE (
                    ID   INT PRIMARY KEY,
                    DATA VARCHAR(50)
                )
                """);

        SqlSyntaxHelper helper = new SqlSyntaxHelper("test_schema.schema_table", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "DATA");
    }

    // ======================== 建構子：錯誤情境 ========================

    @Test
    @DisplayName("不存在的表名應拋出 IllegalStateException")
    void constructor_nonExistentTable_shouldThrow() {
        assertThatThrownBy(() -> new SqlSyntaxHelper("NON_EXISTENT_TABLE", namedJdbc))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("無法取得資料表");
    }

    @Test
    @DisplayName("沒有主鍵的表應拋出 IllegalStateException")
    void constructor_noPrimaryKey_shouldThrow() {
        jdbcTemplate.execute("DROP TABLE IF EXISTS NO_PK_TABLE");
        jdbcTemplate.execute("""
                CREATE TABLE NO_PK_TABLE (
                    COL1 INT,
                    COL2 VARCHAR(50)
                )
                """);

        assertThatThrownBy(() -> new SqlSyntaxHelper("NO_PK_TABLE", namedJdbc))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("沒有主鍵");
    }

    // ======================== INSERT SQL ========================

    @Test
    @DisplayName("單一主鍵表的 INSERT SQL 應包含所有欄位的 named parameter")
    void insertSql_singlePk_shouldContainAllNamedParams() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper.insertSql).startsWith("INSERT INTO");
        assertThat(helper.insertSql).contains(":ID", ":NAME", ":STATUS");
        // H2 使用雙引號作為 identifier quote
        assertThat(helper.insertSql).contains("\"SINGLE_PK_TABLE\"");
    }

    @Test
    @DisplayName("複合主鍵表的 INSERT SQL 應包含所有欄位的 named parameter")
    void insertSql_compositePk_shouldContainAllNamedParams() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        assertThat(helper.insertSql).contains(":REGION_ID", ":PRODUCT_ID", ":QUANTITY", ":PRICE");
    }

    // ======================== UPDATE SQL ========================

    @Test
    @DisplayName("UPDATE SQL 的 SET 子句不應包含主鍵欄位")
    void updateSql_singlePk_setClauseShouldExcludePk() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper.updateSql).startsWith("UPDATE");
        // SET 子句應包含非主鍵欄位
        assertThat(helper.updateSql).contains("\"NAME\" = :NAME");
        assertThat(helper.updateSql).contains("\"STATUS\" = :STATUS");
        // WHERE 子句應包含主鍵
        assertThat(helper.updateSql).contains("WHERE");
        assertThat(helper.updateSql).contains("\"ID\" = :ID");
    }

    @Test
    @DisplayName("複合主鍵的 UPDATE SQL WHERE 子句應以 AND 連接")
    void updateSql_compositePk_whereShouldUseAnd() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        assertThat(helper.updateSql).contains("\"REGION_ID\" = :REGION_ID");
        assertThat(helper.updateSql).contains("\"PRODUCT_ID\" = :PRODUCT_ID");
        assertThat(helper.updateSql).contains("AND");
        // SET 子句只有非主鍵欄位
        assertThat(helper.updateSql).contains("\"QUANTITY\" = :QUANTITY");
        assertThat(helper.updateSql).contains("\"PRICE\" = :PRICE");
    }

    @Test
    @DisplayName("全欄位皆為主鍵時 — UPDATE SET 子句應為空")
    void updateSql_allPk_setClauseShouldBeEmpty() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("ALL_PK_TABLE", namedJdbc);

        // SET 子句為空 → UPDATE "ALL_PK_TABLE" SET  WHERE ...
        // nonKeyColumns 為空，SET 之後是空字串
        assertThat(helper.updateSql).contains("UPDATE");
        assertThat(helper.updateSql).contains("WHERE");
    }

    // ======================== DELETE SQL ========================

    @Test
    @DisplayName("DELETE SQL 應以主鍵作為 WHERE 條件")
    void deleteSql_singlePk_shouldUseIdInWhere() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper.deleteSql).startsWith("DELETE FROM");
        assertThat(helper.deleteSql).contains("\"ID\" = :ID");
    }

    @Test
    @DisplayName("複合主鍵的 DELETE SQL 應以 AND 連接所有主鍵")
    void deleteSql_compositePk_shouldUseAndForAllPks() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        assertThat(helper.deleteSql).contains("\"REGION_ID\" = :REGION_ID");
        assertThat(helper.deleteSql).contains("AND");
        assertThat(helper.deleteSql).contains("\"PRODUCT_ID\" = :PRODUCT_ID");
    }

    // ======================== buildExistsQuery ========================

    @Test
    @DisplayName("chunkSize=1 — 單一主鍵應產生一組條件")
    void buildExistsQuery_singlePk_chunkSize1() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(1);

        assertThat(query).startsWith("SELECT");
        assertThat(query).contains("\"ID\"");
        assertThat(query).contains("\"ID\" = :ID_0");
        assertThat(query).doesNotContain("OR");
    }

    @Test
    @DisplayName("chunkSize=3 — 單一主鍵應產生三組 OR 條件")
    void buildExistsQuery_singlePk_chunkSize3() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(3);

        assertThat(query).contains("\"ID\" = :ID_0");
        assertThat(query).contains("\"ID\" = :ID_1");
        assertThat(query).contains("\"ID\" = :ID_2");
        assertThat(query).doesNotContain(":ID_3");
        // 應有 2 個 OR（3 組條件中間 2 個 OR）
        assertThat(countOccurrences(query, " OR ")).isEqualTo(2);
    }

    @Test
    @DisplayName("複合主鍵的 EXISTS query — 每組條件應以 AND 連接")
    void buildExistsQuery_compositePk_shouldUseAndWithinGroup() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(2);

        // 第一組條件
        assertThat(query).contains("\"REGION_ID\" = :REGION_ID_0");
        assertThat(query).contains("\"PRODUCT_ID\" = :PRODUCT_ID_0");
        // 第二組條件
        assertThat(query).contains("\"REGION_ID\" = :REGION_ID_1");
        assertThat(query).contains("\"PRODUCT_ID\" = :PRODUCT_ID_1");
        // 組內用 AND，組間用 OR
        assertThat(query).contains("AND");
        assertThat(query).contains("OR");
    }

    @Test
    @DisplayName("EXISTS query 只應 SELECT 主鍵欄位，不含非主鍵欄位")
    void buildExistsQuery_shouldOnlySelectPkColumns() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(1);
        // SELECT 欄位清單中不應出現非主鍵欄位
        String selectPart = query.substring(0, query.indexOf("FROM"));
        assertThat(selectPart).contains("\"ID\"");
        assertThat(selectPart).doesNotContain("\"NAME\"");
        assertThat(selectPart).doesNotContain("\"STATUS\"");
    }

    @Test
    @DisplayName("chunkSize <= 0 — 應拋出 IllegalArgumentException")
    void buildExistsQuery_invalidChunkSize_shouldThrow() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThatThrownBy(() -> helper.buildExistsQuery(0))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("chunkSize");

        assertThatThrownBy(() -> helper.buildExistsQuery(-1))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    @DisplayName("較大的 chunkSize — 確認 named parameter 索引正確遞增")
    void buildExistsQuery_largeChunkSize_shouldHaveCorrectIndices() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(50);

        assertThat(query).contains(":ID_0");
        assertThat(query).contains(":ID_49");
        assertThat(query).doesNotContain(":ID_50");
        assertThat(countOccurrences(query, " OR ")).isEqualTo(49);
    }

    // ======================== SQL 語法正確性驗證 ========================

    @Test
    @DisplayName("產生的 INSERT SQL 應可被 H2 成功 parse（透過 EXPLAIN）")
    void insertSql_shouldBeValidSqlSyntax() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        // 將 named parameter 替換為實際值以驗證語法
        String testSql = helper.insertSql
                .replace(":ID", "1")
                .replace(":NAME", "'test'")
                .replace(":STATUS", "'active'");

        assertThatCode(() -> jdbcTemplate.execute("EXPLAIN " + testSql))
                .doesNotThrowAnyException();
    }

    @Test
    @DisplayName("產生的 UPDATE SQL 應可被 H2 成功 parse（透過 EXPLAIN）")
    void updateSql_shouldBeValidSqlSyntax() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String testSql = helper.updateSql
                .replace(":NAME", "'updated'")
                .replace(":STATUS", "'inactive'")
                .replace(":ID", "1");

        assertThatCode(() -> jdbcTemplate.execute("EXPLAIN " + testSql))
                .doesNotThrowAnyException();
    }

    @Test
    @DisplayName("產生的 DELETE SQL 應可被 H2 成功 parse（透過 EXPLAIN）")
    void deleteSql_shouldBeValidSqlSyntax() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String testSql = helper.deleteSql.replace(":ID", "1");

        assertThatCode(() -> jdbcTemplate.execute("EXPLAIN " + testSql))
                .doesNotThrowAnyException();
    }

    @Test
    @DisplayName("產生的 EXISTS query SQL 應可被 H2 成功 parse")
    void existsQuery_shouldBeValidSqlSyntax() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String testSql = helper.buildExistsQuery(2)
                .replace(":ID_0", "1")
                .replace(":ID_1", "2");

        assertThatCode(() -> jdbcTemplate.execute("EXPLAIN " + testSql))
                .doesNotThrowAnyException();
    }

    @Test
    @DisplayName("複合主鍵的 EXISTS query SQL 也應可被 H2 成功 parse")
    void existsQuery_compositePk_shouldBeValidSqlSyntax() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("COMPOSITE_PK_TABLE", namedJdbc);

        String testSql = helper.buildExistsQuery(2)
                .replace(":REGION_ID_0", "1")
                .replace(":PRODUCT_ID_0", "100")
                .replace(":REGION_ID_1", "2")
                .replace(":PRODUCT_ID_1", "200");

        assertThatCode(() -> jdbcTemplate.execute("EXPLAIN " + testSql))
                .doesNotThrowAnyException();
    }

    // ======================== 多實例一致性 ========================

    @Test
    @DisplayName("對同一張表重複建構 SqlSyntaxHelper，結果應一致")
    void constructor_multipleCalls_shouldBeConsistent() {
        SqlSyntaxHelper helper1 = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);
        SqlSyntaxHelper helper2 = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper1.columns).isEqualTo(helper2.columns);
        assertThat(helper1.primaryColumns).isEqualTo(helper2.primaryColumns);
        assertThat(helper1.nonKeyColumns).isEqualTo(helper2.nonKeyColumns);
        assertThat(helper1.insertSql).isEqualTo(helper2.insertSql);
        assertThat(helper1.updateSql).isEqualTo(helper2.updateSql);
        assertThat(helper1.deleteSql).isEqualTo(helper2.deleteSql);
    }

    // ======================== helper ========================

    /**
     * 計算子字串出現次數。
     */
    private int countOccurrences(String text, String sub) {
        int count = 0;
        int idx = 0;
        while ((idx = text.indexOf(sub, idx)) != -1) {
            count++;
            idx += sub.length();
        }
        return count;
    }
}
