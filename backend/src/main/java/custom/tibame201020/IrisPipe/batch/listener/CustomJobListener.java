package custom.tibame201020.IrisPipe.batch.listener;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import custom.tibame201020.IrisPipe.context.SyncJobContext;
import custom.tibame201020.IrisPipe.data.StepExecutionRecord;
import custom.tibame201020.IrisPipe.data.SummaryInfo;
import custom.tibame201020.IrisPipe.service.ExecutionRecordService;

public class CustomJobListener implements JobExecutionListener {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final PlatformTransactionManager transactionManager;
    private final boolean openJobTransaction;
    private final SyncJobContext syncJobContext;
    private final ExecutionRecordService executionRecordService;
    private TransactionStatus transactionStatus;

    public CustomJobListener(PlatformTransactionManager transactionManager, boolean openJobTransaction,
            SyncJobContext syncJobContext, ExecutionRecordService executionRecordService) {
        this.transactionManager = transactionManager;
        this.openJobTransaction = openJobTransaction;
        this.syncJobContext = syncJobContext;
        this.executionRecordService = executionRecordService;
    }

    @Override
    public void beforeJob(JobExecution jobExecution) {
        logger.info("start job {}", jobExecution);
        if (!this.openJobTransaction) {
            return;
        }
        DefaultTransactionDefinition defaultTransactionDefinition = new DefaultTransactionDefinition();
        defaultTransactionDefinition.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
        this.transactionStatus = this.transactionManager.getTransaction(defaultTransactionDefinition);
        logger.info("atomic transaction started for job {}", jobExecution.getJobInstance().getJobName());
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        logger.info("end job {}", jobExecution);
        if (this.openJobTransaction) {
            handleAtomicJobTransaction(jobExecution);
        }

        logger.info("=== job summary ===");
        logger.info("[job] name: {}", jobExecution.getJobInstance().getJobName());
        logger.info("[job] status: {}", jobExecution.getStatus());
        logger.info("[job] start time: {}", jobExecution.getStartTime());

        syncJobContext.syncJob().getExecutions()
                .forEach(execution -> {
                    SummaryInfo summaryInfo = execution.summaryInfo();
                    logger.info("=== execution summary ===");
                    logger.info("[execution] name: {}", summaryInfo.name);
                    logger.info("[execution] sql: {}", execution.sql());
                    logger.info("[execution] parameters: {}", execution.parameters());
                    logger.info("[execution] total: {}", summaryInfo.total);
                    logger.info("[execution] inserted: {}", summaryInfo.inserted);
                    logger.info("[execution] updated: {}", summaryInfo.updated);
                    logger.info("[execution] deleted: {}", summaryInfo.deleted);
                });

        logger.info("[job] end time: {}", jobExecution.getEndTime());

        Duration duration = Duration.between(jobExecution.getCreateTime(), jobExecution.getEndTime());
        long hours = duration.toHours();
        long minutes = duration.toMinutes() % 60;
        long seconds = duration.toSeconds() % 60;
        long mills = duration.toMillis() % 1000;

        logger.info("[job] duration: {}h {}m {}s {}ms", hours, minutes, seconds, mills);
    }

    private void handleAtomicJobTransaction(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            logger.info("-------------- commit job {}", jobExecution);
            this.transactionManager.commit(this.transactionStatus);
            persistStepExecutionRecords(jobExecution);
        } else {
            logger.info("-------------- rollback job {}", jobExecution);
            this.transactionManager.rollback(this.transactionStatus);
        }

        this.transactionStatus = null;
        logger.info("atomic transaction closed for job {}", jobExecution.getJobInstance().getJobName());

        this.syncJobContext.close();
    }

    private void persistStepExecutionRecords(JobExecution jobExecution) {
        jobExecution.getStepExecutions().stream()
                .map(stepExecution -> stepExecution.getExecutionContext().get(StepExecutionRecord.contextKey(),
                        StepExecutionRecord.class))
                .filter(Objects::nonNull)
                .forEach(stepExecutionRecord -> {
                    String executionName = stepExecutionRecord.executionName();
                    String destTable = stepExecutionRecord.tableName();
                    String watermarkColumn = stepExecutionRecord.watermarkColumn();
                    Object value = stepExecutionRecord.value();
                    LocalDateTime startTime = stepExecutionRecord.startTime();
                    LocalDateTime endTime = stepExecutionRecord.endTime();
                    LocalDateTime updateTime = stepExecutionRecord.updateTime();

                    executionRecordService.saveWatermark(executionName, destTable,
                            watermarkColumn, value, startTime, endTime, updateTime);
                });
    }
}
