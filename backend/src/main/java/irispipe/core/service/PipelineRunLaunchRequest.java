package irispipe.core.service;

import java.util.List;

import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.model.SyncJobDefinition;

record PipelineRunLaunchRequest(
        Long pipelineId,
        List<SyncJobDefinition> syncJobs,
        PipelineRunExecution pipelineRunExecution,
        List<PipelineRunJob> pipelineRunJobs,
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs,
        int startJobSequence) {
}
