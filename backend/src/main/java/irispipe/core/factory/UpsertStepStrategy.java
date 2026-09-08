package irispipe.core.factory;

import java.util.Map;

import javax.sql.DataSource;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.JdbcCursorItemReader;
import org.springframework.transaction.PlatformTransactionManager;

import io.micrometer.common.util.StringUtils;
import irispipe.batch.builder.BatchBeanBuilder;
import irispipe.batch.listener.ExecutionStepListener;
import irispipe.batch.writer.BatchUpsertWriter;
import irispipe.core.utility.BatchIdentityHelper;
import irispipe.core.utility.SqlSyntaxHelper;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

/**
 * Builds chunk-oriented upsert steps for upsert execution nodes.
 */
public class UpsertStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;
    private final BatchBeanBuilder batchBeanBuilder;

    /**
     * Creates the upsert step strategy.
     *
     * @param jobRepository Spring Batch job repository
     * @param batchBeanBuilder batch component builder
     */
    public UpsertStepStrategy(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder) {
        this.jobRepository = jobRepository;
        this.batchBeanBuilder = batchBeanBuilder;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager) {
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

        return new StepBuilder(BatchIdentityHelper.renderStepName(execution.name(), "upsert_step"), jobRepository)
                .listener(new ExecutionStepListener(execution))
                .<Map<String, Object>, Map<String, Object>>chunk(
                        syncJobContext.syncJob().getSetting().batchSize(),
                        transactionManager)
                .reader(jdbcCursorItemReader)
                .processor(item -> {
                    if (StringUtils.isNotBlank(execution.watermarkColumn())) {
                        Object watermark = item.entrySet().stream()
                                .filter(entry -> entry.getKey().equalsIgnoreCase(execution.watermarkColumn()))
                                .map(Map.Entry::getValue)
                                .findFirst()
                                .orElse(null);
                        execution.executionContext().put(execution.watermarkColumn(), watermark);
                    }
                    return sqlSyntaxHelper.alignToDestinationColumns(item);
                })
                .writer(batchUpsertWriter)
                .build();
    }
}
