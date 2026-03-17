package irispipe.api;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.constraints.NotBlank;

/**
 * Exposes hidden test-support endpoints used by integration and K6 flows.
 */
@RestController
@Hidden
@Validated
@RequestMapping("/api/v1/test-support")
public class TestSupportAPI {

    private final JdbcTemplate jdbcTemplate;

    /**
     * Creates the test-support controller.
     *
     * @param jdbcTemplate JDBC template used for raw SQL execution
     */
    public TestSupportAPI(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping(value = "/execute", consumes = "text/plain")
    /**
     * Executes a raw SQL statement.
     *
     * @param sql non-blank SQL statement
     */
    public void executeSql(@RequestBody @NotBlank(message = "sql can not be blank") String sql) {
        jdbcTemplate.execute(sql);
    }

    @PostMapping(value = "/query", consumes = "text/plain")
    /**
     * Executes a raw SQL query and returns the result rows.
     *
     * @param sql non-blank SQL query
     * @return query result rows
     */
    public List<Map<String, Object>> querySql(@RequestBody @NotBlank(message = "sql can not be blank") String sql) {
        return jdbcTemplate.queryForList(sql);
    }
}
