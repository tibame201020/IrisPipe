package custom.tibame201020.IrisPipe.batch.listener;

import java.time.LocalDateTime;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.StepExecutionListener;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import custom.tibame201020.IrisPipe.context.SyncJobContext;
import custom.tibame201020.IrisPipe.data.SyncJobProp;
import custom.tibame201020.IrisPipe.service.ExecutionRecordService;
import io.micrometer.common.util.StringUtils;

public class ExecutionStepListener implements StepExecutionListener {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final SyncJobContext syncJobContext;
    private final SyncJobProp.Execution execution;
    private final ExecutionRecordService executionRecordService;

    public ExecutionStepListener(SyncJobContext syncJobContext, SyncJobProp.Execution execution,
            ExecutionRecordService executionRecordService) {
        this.syncJobContext = syncJobContext;
        this.execution = execution;
        this.executionRecordService = executionRecordService;
    }

    @Override
    public void beforeStep(StepExecution stepExecution) {
        logger.info("------- start step {}", stepExecution.getStepName());
    }

    @Override
    public ExitStatus afterStep(StepExecution stepExecution) {
        if (stepExecution.getStatus().equals(BatchStatus.COMPLETED)
                && StringUtils.isNotBlank(execution.watermarkColumn())) {
            NamedParameterJdbcTemplate jdbcTemplate = syncJobContext.recordContext().getNamedParameterJdbcTemplate();
            String recordTable = syncJobContext.syncJob().getSetting().recordTable();
            String executionName = execution.name();
            String destTable = execution.destTable();
            String watermarkColumn = execution.watermarkColumn();
            Object value = execution.executionContext().get(watermarkColumn);
            if (Objects.nonNull(value)) {
                executionRecordService.saveWatermark(jdbcTemplate, recordTable, executionName, destTable,
                        watermarkColumn, value, stepExecution.getStartTime(), stepExecution.getEndTime(),
                        LocalDateTime.now());
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
