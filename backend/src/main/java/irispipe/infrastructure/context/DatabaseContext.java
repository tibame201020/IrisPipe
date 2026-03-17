package irispipe.infrastructure.context;

import java.util.Objects;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.zaxxer.hikari.HikariDataSource;

import lombok.Getter;

/**
 * Holds JDBC access objects derived from one runtime data source.
 */
@Getter
public class DatabaseContext implements AutoCloseable {
    private final DataSource dataSource;
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final DataSourceTransactionManager transactionManager;
    private final DefaultTransactionDefinition def;

    /**
     * Creates the database context for one data source.
     *
     * @param dataSoure runtime data source
     * @param fetchSize reserved constructor parameter retained for current callers
     */
    public DatabaseContext(DataSource dataSoure, int fetchSize) {
        this.dataSource = dataSoure;
        this.jdbcTemplate = new JdbcTemplate(dataSoure);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSoure);
        this.transactionManager = new DataSourceTransactionManager(dataSoure);
        this.def = new DefaultTransactionDefinition();
        this.def.setPropagationBehavior(DefaultTransactionDefinition.PROPAGATION_REQUIRED);
    }

    /**
     * Closes the underlying runtime data source when it is Hikari-backed.
     */
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
