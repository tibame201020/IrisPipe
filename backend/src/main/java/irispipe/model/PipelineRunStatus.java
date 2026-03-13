package irispipe.model;

import org.springframework.batch.core.BatchStatus;

public enum PipelineRunStatus {
    PENDING,
    STARTING,
    STARTED,
    STOPPING,
    STOPPED,
    FAILED,
    COMPLETED,
    ABANDONED,
    UNKNOWN;

    public static PipelineRunStatus from(BatchStatus batchStatus) {
        if (batchStatus == null) {
            return UNKNOWN;
        }
        return PipelineRunStatus.valueOf(batchStatus.name());
    }
}
