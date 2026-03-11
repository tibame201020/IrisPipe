package custom.tibame201020.IrisPipe.factory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.job.builder.SimpleJobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.JdbcCursorItemReader;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;

import custom.tibame201020.IrisPipe.batch.builder.BatchBeanBuilder;
import custom.tibame201020.IrisPipe.batch.listener.CustomJobListener;
import custom.tibame201020.IrisPipe.batch.listener.ExecutionStepListener;
import custom.tibame201020.IrisPipe.batch.tasklet.DeleteTasklet;
import custom.tibame201020.IrisPipe.batch.tasklet.ExecuteTasklet;
import custom.tibame201020.IrisPipe.batch.writer.BatchInsertWriter;
import custom.tibame201020.IrisPipe.batch.writer.BatchUpdateWriter;
import custom.tibame201020.IrisPipe.batch.writer.BatchUpsertWriter;
import custom.tibame201020.IrisPipe.context.SyncJobContext;
import custom.tibame201020.IrisPipe.data.SyncJobProp;
import custom.tibame201020.IrisPipe.service.ExecutionRecordService;
import custom.tibame201020.IrisPipe.utility.SqlSyntaxHelper;
import io.micrometer.common.util.StringUtils;

@Service
public class SyncJobFactory {
        private final JobRepository jobRepository;
        private final BatchBeanBuilder batchBeanBuilder;
        private final PlatformTransactionManager platformTransactionManager;
        private final ExecutionRecordService executionRecordService;

        public SyncJobFactory(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder,
                        PlatformTransactionManager platformTransactionManager,
                        ExecutionRecordService executionRecordService) {
                this.jobRepository = jobRepository;
                this.batchBeanBuilder = batchBeanBuilder;
                this.platformTransactionManager = platformTransactionManager;
                this.executionRecordService = executionRecordService;
        }

        public Job createBatchJob(SyncJobContext syncJobContext) {
                List<Step> steps = syncJobContext.syncJob().getExecutions()
                                .stream()
                                .map(execution -> switch (execution.type()) {
                                        case INSERT -> createInsertStep(syncJobContext, execution);
                                        case UPDATE -> createUpdateStep(syncJobContext, execution);
                                        case UPSERT -> createUpsertStep(syncJobContext, execution);
                                        case DELETE -> createDeleteStep(syncJobContext, execution);
                                        case EXECUTE -> createExecuteStep(syncJobContext, execution);
                                }).toList();

                CustomJobListener customJobListener = new CustomJobListener(
                                syncJobContext.destContext().getTransactionManager(), true, syncJobContext,
                                executionRecordService);

                SimpleJobBuilder simpleJobBuilder = new JobBuilder(syncJobContext.syncJob().getJobName(), jobRepository)
                                .listener(customJobListener)
                                .incrementer(new RunIdIncrementer())
                                .start(steps.get(0));

                for (int i = 1; i < steps.size(); i++) {
                        simpleJobBuilder.next(steps.get(i));
                }

                return simpleJobBuilder.build();
        }

        private Step createInsertStep(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
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
                BatchInsertWriter batchInsertWriter = new BatchInsertWriter(insertWriter, execution.destTable(),
                                execution.summaryInfo());

                return new StepBuilder(jobName + "_ insert_step", jobRepository)
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
                                                if (processItem.containsKey(column)) {
                                                        processItem.put(column, null);
                                                }
                                        });
                                        return processItem;
                                })
                                .writer(batchInsertWriter)
                                .build();
        }

        private Step createUpdateStep(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
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

                return new StepBuilder(jobName + "_ update_step", jobRepository)
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
                                                if (processItem.containsKey(column)) {
                                                        processItem.put(column, null);
                                                }
                                        });
                                        return processItem;
                                })
                                .writer(batchUpdateWriter)
                                .build();
        }

        private Step createUpsertStep(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
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
                                                if (processItem.containsKey(column)) {
                                                        processItem.put(column, null);
                                                }
                                        });
                                        return processItem;
                                })
                                .writer(batchUpsertWriter)
                                .build();
        }

        private Step createDeleteStep(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
                String jobName = syncJobContext.syncJob().getJobName();
                DeleteTasklet deleteTasklet = new DeleteTasklet(syncJobContext, execution);
                return new StepBuilder(jobName + "_ delete_step", jobRepository)
                                .tasklet(deleteTasklet, syncJobContext.destContext().getTransactionManager())
                                .build();
        }

        private Step createExecuteStep(SyncJobContext syncJobContext, SyncJobProp.Execution execution) {
                String jobName = syncJobContext.syncJob().getJobName();
                ExecuteTasklet executeTasklet = new ExecuteTasklet(syncJobContext, execution);

                return new StepBuilder(jobName + "_ execute_step", jobRepository)
                                .tasklet(executeTasklet, syncJobContext.destContext().getTransactionManager())
                                .build();
        }

}
