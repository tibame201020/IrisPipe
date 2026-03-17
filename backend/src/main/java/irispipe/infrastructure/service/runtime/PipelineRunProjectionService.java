package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;

/**
 * Synchronizes latest runtime projection fields on pipeline run aggregate rows.
 */
@Service
public class PipelineRunProjectionService {
    /**
     * Copies the latest execution state onto the logical run row.
     *
     * @param pipelineRun logical run row
     * @param pipelineRunExecution latest execution row
     * @param now timestamp applied to the aggregate update
     */
    public void syncLatestRunProjection(PipelineRun pipelineRun, PipelineRunExecution pipelineRunExecution,
            LocalDateTime now) {
        pipelineRun.setLatestExecutionId(pipelineRunExecution.getId());
        pipelineRun.setRequestedAsync(pipelineRunExecution.getRequestedAsync());
        pipelineRun.setStatus(pipelineRunExecution.getStatus());
        pipelineRun.setStartTime(pipelineRunExecution.getStartTime());
        pipelineRun.setEndTime(pipelineRunExecution.getEndTime());
        pipelineRun.setUpdatedAt(now);
    }

    /**
     * Copies the latest execution-job state onto the logical run job row.
     *
     * @param pipelineRunJob logical run job row
     * @param pipelineRunExecutionJob latest execution job row
     * @param now timestamp applied to the aggregate update
     */
    public void syncLatestRunJobProjection(PipelineRunJob pipelineRunJob, PipelineRunExecutionJob pipelineRunExecutionJob,
            LocalDateTime now) {
        pipelineRunJob.setStatus(pipelineRunExecutionJob.getStatus());
        pipelineRunJob.setRootJobInstanceId(pipelineRunExecutionJob.getRootJobInstanceId());
        pipelineRunJob.setLastJobExecutionId(pipelineRunExecutionJob.getLastJobExecutionId());
        pipelineRunJob.setStartTime(pipelineRunExecutionJob.getStartTime());
        pipelineRunJob.setEndTime(pipelineRunExecutionJob.getEndTime());
        pipelineRunJob.setUpdatedAt(now);
    }
}
