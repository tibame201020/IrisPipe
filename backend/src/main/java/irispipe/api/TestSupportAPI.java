package irispipe.api;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/test-support")
public class TestSupportAPI {

    private final JdbcTemplate jdbcTemplate;

    public TestSupportAPI(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping(value = "/execute", consumes = "text/plain")
    public void executeSql(@RequestBody String sql) {
        jdbcTemplate.execute(sql);
    }

    @PostMapping(value = "/query", consumes = "text/plain")
    public List<Map<String, Object>> querySql(@RequestBody String sql) {
        return jdbcTemplate.queryForList(sql);
    }
}
