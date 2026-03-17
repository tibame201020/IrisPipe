package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.PipelineRun;
import irispipe.infrastructure.entity.PipelineRunExecution;
import irispipe.infrastructure.entity.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.PipelineRunJob;

@Service
public class PipelineRunProjectionService {
    public void syncLatestRunProjection(PipelineRun pipelineRun, PipelineRunExecution pipelineRunExecution,
            LocalDateTime now) {
        pipelineRun.setLatestExecutionId(pipelineRunExecution.getId());
        pipelineRun.setRequestedAsync(pipelineRunExecution.getRequestedAsync());
        pipelineRun.setStatus(pipelineRunExecution.getStatus());
        pipelineRun.setStartTime(pipelineRunExecution.getStartTime());
        pipelineRun.setEndTime(pipelineRunExecution.getEndTime());
        pipelineRun.setUpdatedAt(now);
    }

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
