package irispipe.core.factory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.JdbcCursorItemReader;
import org.springframework.transaction.PlatformTransactionManager;

import io.micrometer.common.util.StringUtils;
import irispipe.batch.builder.BatchBeanBuilder;
import irispipe.batch.listener.ExecutionStepListener;
import irispipe.batch.writer.BatchUpdateWriter;
import irispipe.core.utility.BatchIdentityHelper;
import irispipe.core.utility.SqlSyntaxHelper;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

/**
 * Builds chunk-oriented update steps for update execution nodes.
 */
public class UpdateStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;
    private final BatchBeanBuilder batchBeanBuilder;

    /**
     * Creates the update step strategy.
     *
     * @param jobRepository Spring Batch job repository
     * @param batchBeanBuilder batch component builder
     */
    public UpdateStepStrategy(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder) {
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

        BatchUpdateWriter batchUpdateWriter = new BatchUpdateWriter(execution.destTable(),
                execution.summaryInfo(),
                destDataSource, sqlSyntaxHelper.updateSql);

        return new StepBuilder(BatchIdentityHelper.renderStepName(execution.name(), "update_step"), jobRepository)
                .listener(new ExecutionStepListener(execution))
                .<Map<String, Object>, Map<String, Object>>chunk(
                        syncJobContext.syncJob().getSetting().batchSize(),
                        transactionManager)
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
                .writer(batchUpdateWriter)
                .build();
    }
}
