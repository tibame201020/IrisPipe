package irispipe.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunStatus;
import irispipe.model.SyncJobDefinition;

/**
 * Holds command-side validation rules for resume, stop, and delete operations
 * on pipeline runs.
 */
@Service
public class PipelineRunControlPolicy {

    /**
     * Validates whether the latest execution of one run can be resumed.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param latestExecution latest execution of the pipeline run
     */
    public void validateResumablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to resume: " + pipelineRunId);
        }
        if (!isTerminalFailure(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only failed pipeline runs can be resumed: " + pipelineRunId);
        }
    }

    /**
     * Validates that the persisted run topology still matches the snapshot payload.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param snapshotSyncJobs snapshot job payload
     * @param pipelineRunJobs persisted logical run jobs
     */
    public void validatePipelineRunTopology(Long pipelineRunId, List<SyncJobDefinition> snapshotSyncJobs,
            List<PipelineRunJob> pipelineRunJobs) {
        if (snapshotSyncJobs.size() != pipelineRunJobs.size()) {
            throw new IllegalStateException("Pipeline run topology mismatch: " + pipelineRunId);
        }
    }

    /**
     * Finds the first job sequence that should be resumed for one execution.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param latestExecution latest execution of the pipeline run
     * @param pipelineRunJobs persisted logical run jobs
     * @param latestExecutionJobsByRunJobId latest execution jobs keyed by run job id
     * @return zero-based job sequence that should be launched on resume
     */
    public int findResumeStageSequenceOrder(Long pipelineRunId, PipelineRunExecution latestExecution,
            List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId) {
        Integer firstIncompleteStageSequenceOrder = null;
        for (PipelineRunJob pipelineRunJob : pipelineRunJobs) {
            PipelineRunExecutionJob executionJob = latestExecutionJobsByRunJobId.get(pipelineRunJob.getId());
            if (executionJob != null && !isSuccessfulTerminalStatus(executionJob.getStatus())) {
                firstIncompleteStageSequenceOrder = pipelineRunJob.getStageSequenceOrder();
                break;
            }
        }

        if (firstIncompleteStageSequenceOrder != null) {
            return firstIncompleteStageSequenceOrder;
        }

        if (PipelineRunStatus.STOPPED.equals(latestExecution.getStatus())) {
            return pipelineRunJobs.stream()
                    .map(PipelineRunJob::getStageSequenceOrder)
                    .findFirst()
                    .orElseThrow(() -> new IllegalArgumentException("Pipeline run has no failed stage to resume: " + pipelineRunId));
        }

        throw new IllegalArgumentException("Pipeline run has no failed stage to resume: " + pipelineRunId);
    }

    /**
     * Validates whether the target job atomic level supports resume.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param pipelineRunJob target logical run job
     */
    public void validateResumeStrategy(Long pipelineRunId,
            List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId,
            int resumeStageSequenceOrder) {
        List<PipelineRunJob> resumablePipelineRunJobs = pipelineRunJobs.stream()
                .filter(pipelineRunJob -> pipelineRunJob.getStageSequenceOrder() == resumeStageSequenceOrder)
                .filter(pipelineRunJob -> {
                    PipelineRunExecutionJob executionJob = latestExecutionJobsByRunJobId.get(pipelineRunJob.getId());
                    return executionJob != null && !isSuccessfulTerminalStatus(executionJob.getStatus());
                })
                .toList();

        if (resumablePipelineRunJobs.isEmpty()) {
            throw new IllegalArgumentException("Pipeline run has no resumable jobs in target stage: " + pipelineRunId);
        }

        boolean unsupportedAtomicLevel = resumablePipelineRunJobs.stream()
                .anyMatch(pipelineRunJob -> !AtomicLevel.JOB.equals(pipelineRunJob.getAtomicLevel())
                        && !AtomicLevel.CHUNK.equals(pipelineRunJob.getAtomicLevel()));
        if (unsupportedAtomicLevel) {
            throw new IllegalArgumentException(
                    "Pipeline resume currently supports only failed JOB or CHUNK nodes: " + pipelineRunId);
        }
    }

    /**
     * Validates whether the latest execution of one run can be stopped.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param latestExecution latest execution of the pipeline run
     */
    public void validateStoppablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to stop: " + pipelineRunId);
        }
        if (!isStoppableStatus(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only in-flight pipeline runs can be stopped: " + pipelineRunId);
        }
    }

    /**
     * Validates whether one pipeline run may be deleted.
     *
     * @param pipelineRunId pipeline run id used in validation errors
     * @param pipelineRun persisted pipeline run header
     * @param latestExecution latest execution of the pipeline run, or {@code null}
     */
    public void validateDeletablePipelineRun(Long pipelineRunId, PipelineRun pipelineRun,
            PipelineRunExecution latestExecution) {
        PipelineRunStatus pipelineRunStatus = latestExecution == null ? pipelineRun.getStatus() : latestExecution.getStatus();
        if (!isDeletableStatus(pipelineRunStatus)) {
            throw new IllegalArgumentException("Only terminal pipeline runs can be deleted: " + pipelineRunId);
        }
    }

    /**
     * Returns whether one run status represents a stop request or stopped state.
     *
     * @param pipelineRunStatus run status to inspect
     * @return {@code true} when the status is stopping or stopped
     */
    public boolean isStopState(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STOPPING
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    /**
     * Returns whether one status is terminal for an execution or run.
     *
     * @param pipelineRunStatus run status to inspect
     * @return {@code true} when the status is terminal
     */
    public boolean isTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || isTerminalFailure(pipelineRunStatus);
    }

    /**
     * Returns whether one status should be treated as a terminal failure for
     * resume decisions.
     *
     * @param pipelineRunStatus run status to inspect
     * @return {@code true} when the status is resumable failure or stop state
     */
    private boolean isTerminalFailure(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    private boolean isSuccessfulTerminalStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.SKIPPED;
    }

    /**
     * Returns whether one status may still receive a stop request.
     *
     * @param pipelineRunStatus run status to inspect
     * @return {@code true} when the status is in flight
     */
    private boolean isStoppableStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STARTING
                || pipelineRunStatus == PipelineRunStatus.STARTED
                || pipelineRunStatus == PipelineRunStatus.STOPPING;
    }

    /**
     * Returns whether one status is eligible for delete.
     *
     * @param pipelineRunStatus run status to inspect
     * @return {@code true} when the status is terminal
     */
    private boolean isDeletableStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }
}
