package irispipe.infrastructure.context;

import com.zaxxer.hikari.HikariDataSource;
import lombok.Getter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import javax.sql.DataSource;
import java.util.Objects;

@Getter
public class DatabaseContext implements AutoCloseable {
    private final DataSource dataSource;
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final DataSourceTransactionManager transactionManager;
    private final DefaultTransactionDefinition def;

    public DatabaseContext(DataSource dataSoure, int fetchSize) {
        this.dataSource = dataSoure;
        this.jdbcTemplate = new JdbcTemplate(dataSoure);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSoure);
        this.transactionManager = new DataSourceTransactionManager(dataSoure);
        this.def = new DefaultTransactionDefinition();
        this.def.setPropagationBehavior(DefaultTransactionDefinition.PROPAGATION_REQUIRED);
    }

    @Override
    public void close() {
        if (Objects.isNull(dataSource)) {
            return;
        }
        if (dataSource instanceof HikariDataSource) {
            ((HikariDataSource) dataSource).close();
        }
    }
}
