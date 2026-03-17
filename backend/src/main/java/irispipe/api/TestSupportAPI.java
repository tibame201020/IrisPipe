package irispipe.api;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.constraints.NotBlank;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Hidden
@Validated
@RequestMapping("/api/v1/test-support")
public class TestSupportAPI {

    private final JdbcTemplate jdbcTemplate;

    public TestSupportAPI(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping(value = "/execute", consumes = "text/plain")
    public void executeSql(@RequestBody @NotBlank(message = "sql can not be blank") String sql) {
        jdbcTemplate.execute(sql);
    }

    @PostMapping(value = "/query", consumes = "text/plain")
    public List<Map<String, Object>> querySql(@RequestBody @NotBlank(message = "sql can not be blank") String sql) {
        return jdbcTemplate.queryForList(sql);
    }
}
