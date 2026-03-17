package irispipe.infrastructure.service.runtime;

import org.springframework.stereotype.Service;

import irispipe.model.PipelineRunStatus;

@Service
public class PipelineRunStatusPolicy {
    public boolean isTerminalFailure(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    public boolean isTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    public boolean isSuccessfulTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.SKIPPED;
    }

    public boolean isStopStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STOPPING
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    public boolean isObservedExecutionStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    public boolean isObservedJobStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }
}
