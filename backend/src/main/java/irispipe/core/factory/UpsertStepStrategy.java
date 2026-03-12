package irispipe.core.factory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.JdbcCursorItemReader;
import org.springframework.transaction.PlatformTransactionManager;

import irispipe.batch.builder.BatchBeanBuilder;
import irispipe.batch.listener.ExecutionStepListener;
import irispipe.batch.writer.BatchUpsertWriter;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;
import irispipe.core.utility.SqlSyntaxHelper;
import io.micrometer.common.util.StringUtils;

public class UpsertStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;
    private final BatchBeanBuilder batchBeanBuilder;
    private final PlatformTransactionManager platformTransactionManager;

    public UpsertStepStrategy(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder,
            PlatformTransactionManager platformTransactionManager) {
        this.jobRepository = jobRepository;
        this.batchBeanBuilder = batchBeanBuilder;
        this.platformTransactionManager = platformTransactionManager;
    }

    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution) {
        String jobName = syncJobContext.syncJob().getJobName();
        DataSource sourceDataSource = syncJobContext.sourceContext().getDataSource();
        DataSource destDataSource = syncJobContext.destContext().getDataSource();

        SqlSyntaxHelper sqlSyntaxHelper = new SqlSyntaxHelper(execution.destTable(),
                syncJobContext.destContext().getNamedParameterJdbcTemplate());
        JdbcCursorItemReader<Map<String, Object>> jdbcCursorItemReader = batchBeanBuilder
                .creatJdbcCursorItemReader(
                        sourceDataSource, jobName, execution.sql(), execution.parameters(),
                        syncJobContext.syncJob().getSetting().fetchSize());
        JdbcBatchItemWriter<Map<String, Object>> insertWriter = batchBeanBuilder
                .createJdbcBatchItemWriter(destDataSource, sqlSyntaxHelper.insertSql);
        JdbcBatchItemWriter<Map<String, Object>> updateWriter = batchBeanBuilder
                .createJdbcBatchItemWriter(destDataSource, sqlSyntaxHelper.updateSql);

        BatchUpsertWriter batchUpsertWriter = new BatchUpsertWriter(
                insertWriter, updateWriter, sqlSyntaxHelper,
                syncJobContext.destContext().getJdbcTemplate(),
                execution.destTable(), execution.summaryInfo());

        return new StepBuilder(jobName + "_ upsert_step", jobRepository)
                .listener(new ExecutionStepListener(execution))
                .<Map<String, Object>, Map<String, Object>>chunk(
                        syncJobContext.syncJob().getSetting().batchSize(),
                        platformTransactionManager)
                .reader(jdbcCursorItemReader)
                .processor(item -> {
                    Map<String, Object> processItem = new HashMap<>(item);
                    if (StringUtils.isNotBlank(execution.watermarkColumn())) {
                        execution.executionContext()
                                .put(execution.watermarkColumn(), processItem
                                        .get(execution.watermarkColumn()));
                    }
                    List<String> columns = sqlSyntaxHelper.columns;
                    columns.forEach(column -> {
                        if (!processItem.containsKey(column)) {
                            processItem.put(column, null);
                        }
                    });
                    return processItem;
                })
                .writer(batchUpsertWriter)
                .build();
    }
}
