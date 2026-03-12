package irispipe.core.utility;

import org.junit.jupiter.api.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.*;

/**
 * {@link SqlSyntaxHelper} 的單元測試。
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
        jdbcTemplate.execute("DROP TABLE IF EXISTS SINGLE_PK_TABLE");
        jdbcTemplate.execute("DROP TABLE IF EXISTS COMPOSITE_PK_TABLE");
        jdbcTemplate.execute("DROP TABLE IF EXISTS ALL_PK_TABLE");
        jdbcTemplate.execute("DROP SCHEMA IF EXISTS TEST_SCHEMA CASCADE");

        jdbcTemplate.execute("""
                CREATE TABLE SINGLE_PK_TABLE (
                    ID      INT          PRIMARY KEY,
                    NAME    VARCHAR(100),
                    STATUS  VARCHAR(20)
                )
                """);

        jdbcTemplate.execute("""
                CREATE TABLE COMPOSITE_PK_TABLE (
                    REGION_ID   INT,
                    PRODUCT_ID  INT,
                    QUANTITY    INT,
                    PRICE       DECIMAL(10,2),
                    PRIMARY KEY (REGION_ID, PRODUCT_ID)
                )
                """);

        jdbcTemplate.execute("""
                CREATE TABLE ALL_PK_TABLE (
                    KEY1 INT,
                    KEY2 INT,
                    PRIMARY KEY (KEY1, KEY2)
                )
                """);
    }

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
    @DisplayName("H2 storesUpperCase — 小寫輸入應自動轉為大寫進行 metadata 查詢")
    void constructor_lowercaseInput_shouldNormalizeToUpperCase() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("single_pk_table", namedJdbc);

        assertThat(helper.columns).containsExactly("ID", "NAME", "STATUS");
        assertThat(helper.primaryColumns).containsExactly("ID");
    }

    @Test
    @DisplayName("產生的 INSERT SQL 應包含所有欄位的 named parameter")
    void insertSql_singlePk_shouldContainAllNamedParams() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        assertThat(helper.insertSql).startsWith("INSERT INTO");
        assertThat(helper.insertSql).contains(":ID", ":NAME", ":STATUS");
    }

    @Test
    @DisplayName("EXISTS query 只應 SELECT 主鍵欄位")
    void buildExistsQuery_shouldOnlySelectPkColumns() {
        SqlSyntaxHelper helper = new SqlSyntaxHelper("SINGLE_PK_TABLE", namedJdbc);

        String query = helper.buildExistsQuery(1);
        String selectPart = query.substring(0, query.indexOf("FROM"));
        assertThat(selectPart).contains("\"ID\"");
        assertThat(selectPart).doesNotContain("\"NAME\"");
    }

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
