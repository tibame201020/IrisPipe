package irispipe.infrastructure.service.runtime;

import org.springframework.stereotype.Service;

import irispipe.model.PipelineRunStatus;

/**
 * Centralizes runtime status predicates used by lifecycle and observation flows.
 */
@Service
public class PipelineRunStatusPolicy {
    /**
     * Returns whether one status should be treated as a terminal failure.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when the status represents failure or stop terminality
     */
    public boolean isTerminalFailure(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    /**
     * Returns whether one status is terminal for an execution or run.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when the status is terminal
     */
    public boolean isTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    /**
     * Returns whether one status is a successful terminal job outcome.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when the status represents successful completion
     */
    public boolean isSuccessfulTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.SKIPPED;
    }

    /**
     * Returns whether one status indicates an active or completed stop request.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when the status is stopping or stopped
     */
    public boolean isStopStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STOPPING
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    /**
     * Returns whether one execution status should publish an execution observation.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when execution observation should be emitted
     */
    public boolean isObservedExecutionStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    /**
     * Returns whether one job status should publish a job observation.
     *
     * @param pipelineRunStatus status to inspect
     * @return {@code true} when job observation should be emitted
     */
    public boolean isObservedJobStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }
}
