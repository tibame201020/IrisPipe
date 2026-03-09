package custom.tibame201020.IrisPipe.batch.tasklet;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

import custom.tibame201020.IrisPipe.context.SyncJobContext;
import custom.tibame201020.IrisPipe.data.SyncJobProp;
import custom.tibame201020.IrisPipe.error.exception.CustomJobExecutionException;
import custom.tibame201020.IrisPipe.utility.SqlSyntaxHelper;

public class DeleteTasklet implements Tasklet {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final SyncJobContext syncJobContext;
    private final SyncJobProp.Execution execution;

    public DeleteTasklet(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
        this.syncJobContext = syncJobContext;
        this.execution = execution;
    }

    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
        String jobName = syncJobContext.syncJob().getJobName();
        String sql = execution.sql();
        logger.debug("[DeleteTasklet] execute with jobName: {}, sql: {}", jobName, sql);

        SqlSyntaxHelper sqlSyntaxHelper = new SqlSyntaxHelper(execution.destTable(),
                syncJobContext.destContext().getNamedParameterJdbcTemplate());
        String destTable = execution.destTable();

        DataSourceTransactionManager transactionManager = syncJobContext.destContext().getTransactionManager();
        TransactionTemplate transactionTemplate = new TransactionTemplate(transactionManager);
        NamedParameterJdbcTemplate namedParameterJdbcTemplate = syncJobContext.destContext()
                .getNamedParameterJdbcTemplate();

        MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
        for (SyncJobProp.Parameter parameter : execution.parameters()) {
            mapSqlParameterSource.addValue(parameter.param(), parameter.value());
        }

        Integer deleteThresholod = syncJobContext.syncJob().getSetting().deleteThreshold();
        String countSql = String.format("SELECT COUNT(*) FROM (%s)", sql);
        Integer countToDelete = namedParameterJdbcTemplate.queryForObject(countSql, mapSqlParameterSource,
                Integer.class);

        if (countToDelete != null && countToDelete > deleteThresholod && deleteThresholod != -1) {
            String errorMessage = String.format(
                    "Attemped to delete %s records, which exceeds the threshold of %s. Aborting delete tasklet",
                    countToDelete, deleteThresholod, jobName);
            logger.error(errorMessage);
            throw new CustomJobExecutionException(jobName, errorMessage);
        }

        execution.summaryInfo().total.addAndGet(countToDelete);
        logger.info("Number of records to delete: {} (below threshold {})", countToDelete, deleteThresholod);

        RowMapper<MapSqlParameterSource> rowMapper = (rs, rowNum) -> {
            MapSqlParameterSource sqlParameterSource = new MapSqlParameterSource();
            int columnCount = rs.getMetaData().getColumnCount();
            for (int i = 1; i <= columnCount; i++) {
                String columnName = rs.getMetaData().getColumnLabel(i);
                sqlParameterSource.addValue(columnName, rs.getObject(i));
            }
            return sqlParameterSource;
        };

        int batchSize = syncJobContext.syncJob().getSetting().batchSize();
        String deleteSql = sqlSyntaxHelper.deleteSql;
        transactionTemplate.executeWithoutResult(status -> {
            try (Stream<MapSqlParameterSource> rowStream = namedParameterJdbcTemplate.queryForStream(sql,
                    mapSqlParameterSource, rowMapper)) {
                List<MapSqlParameterSource> currentBatch = new ArrayList<>();
                rowStream.forEach(row -> {
                    currentBatch.add(row);
                    if (currentBatch.size() >= batchSize) {
                        execute(namedParameterJdbcTemplate, deleteSql, currentBatch);
                    }
                });
                if (!currentBatch.isEmpty()) {
                    execute(namedParameterJdbcTemplate, deleteSql, currentBatch);
                }
                if (execution.summaryInfo().deleted.get() == 0) {
                    logger.warn("No records deleted for table: {}", destTable);
                }

            } catch (Exception e) {
                String errorMessage = String.format(
                        "[DeleteTasklet] error during streaming delete for table: %s, error: %s",
                        destTable, e.getMessage());
                status.setRollbackOnly();
                logger.error(errorMessage);
                throw new CustomJobExecutionException(jobName, errorMessage);
            }

        });

        return RepeatStatus.FINISHED;
    }

    private void execute(NamedParameterJdbcTemplate namedParameterJdbcTemplate, String sql,
            List<MapSqlParameterSource> batch) {
        namedParameterJdbcTemplate.batchUpdate(sql, batch.toArray(new MapSqlParameterSource[0]));
        execution.summaryInfo().processed.addAndGet(batch.size());
        execution.summaryInfo().deleted.addAndGet(batch.size());
        logger.info("[DeleteTasklet] table: {}, total: {}, processed: {}, deleted: {}",
                execution.destTable(), execution.summaryInfo().total, execution.summaryInfo().processed,
                execution.summaryInfo().deleted);
        batch.clear();
    }
}
