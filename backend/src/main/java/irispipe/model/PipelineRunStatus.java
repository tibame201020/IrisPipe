package irispipe.model;

import org.springframework.batch.core.BatchStatus;

/**
 * Unified runtime status used across logical runs, executions, and jobs.
 */
public enum PipelineRunStatus {
    PENDING,
    NOT_RUN,
    SKIPPED,
    STARTING,
    STARTED,
    STOPPING,
    STOPPED,
    FAILED,
    COMPLETED,
    ABANDONED,
    UNKNOWN;

    /**
     * Maps a Spring Batch status into the pipeline runtime status model.
     *
     * @param batchStatus Spring Batch status
     * @return mapped pipeline runtime status
     */
    public static PipelineRunStatus from(BatchStatus batchStatus) {
        if (batchStatus == null) {
            return UNKNOWN;
        }
        return PipelineRunStatus.valueOf(batchStatus.name());
    }
}
