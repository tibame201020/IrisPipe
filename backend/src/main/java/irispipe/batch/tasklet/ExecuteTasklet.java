package irispipe.batch.tasklet;

import java.sql.PreparedStatement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;

/**
 * Executes a destination-side SQL statement inside one transaction.
 */
public class ExecuteTasklet implements Tasklet {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final SyncJobContext syncJobContext;
    private final ExecutionStep execution;

    /**
     * Creates the execute tasklet.
     *
     * @param syncJobContext runtime sync job context
     * @param execution logical execution step definition
     */
    public ExecuteTasklet(SyncJobContext syncJobContext, ExecutionStep execution) {
        this.syncJobContext = syncJobContext;
        this.execution = execution;
    }

    /**
     * Executes the configured SQL statement.
     *
     * @param contribution step contribution
     * @param chunkContext chunk context
     * @return finished repeat status
     * @throws Exception when execution fails
     */
    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
        String jobName = syncJobContext.syncJob().getJobName();
        String sql = execution.sql();

        logger.debug("[ExecuteTasklet] execute with jobName: {}, sql: {}", jobName, sql);

        DataSourceTransactionManager transactionManager = syncJobContext.destContext().getTransactionManager();
        TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);
        NamedParameterJdbcTemplate namedParameterJdbcTemplate = syncJobContext.destContext()
                .getNamedParameterJdbcTemplate();

        MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
        for (JobParameter parameter : execution.parameters()) {
            mapSqlParameterSource.addValue(parameter.param(), parameter.value());
        }

        transactionTemplate.executeWithoutResult(status -> {
            namedParameterJdbcTemplate.execute(sql, mapSqlParameterSource, PreparedStatement::execute);
        });

        return RepeatStatus.FINISHED;
    }

}
