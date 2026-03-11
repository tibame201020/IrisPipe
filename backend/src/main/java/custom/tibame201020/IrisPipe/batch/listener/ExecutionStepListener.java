package custom.tibame201020.IrisPipe.batch.listener;

import java.time.LocalDateTime;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.StepExecutionListener;

import custom.tibame201020.IrisPipe.data.StepExecutionRecord;
import custom.tibame201020.IrisPipe.data.SyncJobProp;
import io.micrometer.common.util.StringUtils;

public class ExecutionStepListener implements StepExecutionListener {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final SyncJobProp.Execution execution;

    public ExecutionStepListener(SyncJobProp.Execution execution) {
        this.execution = execution;
    }

    @Override
    public void beforeStep(StepExecution stepExecution) {
        logger.info("------- start step {}", stepExecution.getStepName());
    }

    @Override
    public ExitStatus afterStep(StepExecution stepExecution) {
        if (stepExecution.getStatus().equals(BatchStatus.COMPLETED)
                && StringUtils.isNotBlank(execution.watermarkColumn())) {
            String executionName = execution.name();
            String destTable = execution.destTable();
            String watermarkColumn = execution.watermarkColumn();
            Object value = execution.executionContext().get(watermarkColumn);
            if (Objects.nonNull(value)) {
                StepExecutionRecord stepExecutionRecord = new StepExecutionRecord(executionName, destTable,
                        watermarkColumn, value, stepExecution.getStartTime(), LocalDateTime.now(),
                        stepExecution.getLastUpdated());
                stepExecution.getExecutionContext().put(StepExecutionRecord.contextKey(), stepExecutionRecord);
            }
        }

        logger.info("------- end step");
        logger.info("[step] last updated: {}", stepExecution.getLastUpdated());
        logger.info("[step] create at: {}", stepExecution.getCreateTime());
        logger.info("[step] end at: {}", stepExecution.getEndTime());
        logger.info("[step] status", stepExecution.getStatus());
        logger.info("[step] read counst: {}", stepExecution.getReadCount());

        if (stepExecution.getReadCount() != 0) {
            execution.summaryInfo().total.setPlain(stepExecution.getReadCount());
        }

        return StepExecutionListener.super.afterStep(stepExecution);
    }
}
