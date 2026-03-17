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

@Service
public class PipelineRunControlPolicy {

    public void validateResumablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to resume: " + pipelineRunId);
        }
        if (!isTerminalFailure(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only failed pipeline runs can be resumed: " + pipelineRunId);
        }
    }

    public void validatePipelineRunTopology(Long pipelineRunId, List<SyncJobDefinition> snapshotSyncJobs,
            List<PipelineRunJob> pipelineRunJobs) {
        if (snapshotSyncJobs.size() != pipelineRunJobs.size()) {
            throw new IllegalStateException("Pipeline run topology mismatch: " + pipelineRunId);
        }
    }

    public int findResumeJobSequence(Long pipelineRunId, PipelineRunExecution latestExecution,
            List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId) {
        Integer firstNotRunJobSequence = null;
        for (int jobSequence = 0; jobSequence < pipelineRunJobs.size(); jobSequence++) {
            PipelineRunExecutionJob executionJob = latestExecutionJobsByRunJobId.get(pipelineRunJobs.get(jobSequence).getId());
            if (executionJob != null && isTerminalFailure(executionJob.getStatus())) {
                return jobSequence;
            }
            if (firstNotRunJobSequence == null
                    && executionJob != null
                    && PipelineRunStatus.NOT_RUN.equals(executionJob.getStatus())) {
                firstNotRunJobSequence = jobSequence;
            }
        }

        if (PipelineRunStatus.STOPPED.equals(latestExecution.getStatus()) && firstNotRunJobSequence != null) {
            return firstNotRunJobSequence;
        }

        throw new IllegalArgumentException("Pipeline run has no failed job to resume: " + pipelineRunId);
    }

    public void validateResumeStrategy(Long pipelineRunId, PipelineRunJob pipelineRunJob) {
        if (!AtomicLevel.JOB.equals(pipelineRunJob.getAtomicLevel())
                && !AtomicLevel.CHUNK.equals(pipelineRunJob.getAtomicLevel())) {
            throw new IllegalArgumentException(
                    "Pipeline resume currently supports only failed JOB or CHUNK nodes: " + pipelineRunId);
        }
    }

    public void validateStoppablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to stop: " + pipelineRunId);
        }
        if (!isStoppableStatus(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only in-flight pipeline runs can be stopped: " + pipelineRunId);
        }
    }

    public void validateDeletablePipelineRun(Long pipelineRunId, PipelineRun pipelineRun,
            PipelineRunExecution latestExecution) {
        PipelineRunStatus pipelineRunStatus = latestExecution == null ? pipelineRun.getStatus() : latestExecution.getStatus();
        if (!isDeletableStatus(pipelineRunStatus)) {
            throw new IllegalArgumentException("Only terminal pipeline runs can be deleted: " + pipelineRunId);
        }
    }

    public boolean isStopState(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STOPPING
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }

    private boolean isTerminalFailure(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }

    private boolean isStoppableStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STARTING
                || pipelineRunStatus == PipelineRunStatus.STARTED
                || pipelineRunStatus == PipelineRunStatus.STOPPING;
    }

    private boolean isDeletableStatus(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.COMPLETED
                || pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
    }
}
