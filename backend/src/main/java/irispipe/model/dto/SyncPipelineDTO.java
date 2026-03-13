package irispipe.model.dto;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;

import com.fasterxml.jackson.annotation.JsonProperty;

import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.entity.PipelineRun;
import irispipe.infrastructure.entity.PipelineRunExecution;
import irispipe.infrastructure.entity.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.PipelineRunJob;
import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunStatus;

public interface SyncPipelineDTO {

    record PipelineExecuteRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher,
            Long pipelineId) {
    }

    record PipelineResumeRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher) {
    }

    record PipelineRerunRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher) {
    }

    record PipelineRunSummaryInfo(
            Long id,
            Long pipelineId,
            String path,
            String fileName,
            PipelineRunStatus status,
            LocalDateTime createdAt,
            LocalDateTime startTime,
            LocalDateTime endTime) {

        public static PipelineRunSummaryInfo render(PipelineDefinition pipelineDefinition, PipelineRun pipelineRun) {
            return new PipelineRunSummaryInfo(
                    pipelineRun.getId(),
                    pipelineDefinition.getId(),
                    pipelineDefinition.getConfigPath(),
                    pipelineDefinition.getFileName(),
                    pipelineRun.getStatus(),
                    pipelineRun.getCreatedAt(),
                    pipelineRun.getStartTime(),
                    pipelineRun.getEndTime());
        }
    }

    record PipelineRunDetailInfo(
            Long id,
            Long pipelineId,
            String path,
            String fileName,
            Boolean requestedAsync,
            PipelineRunStatus status,
            LocalDateTime createdAt,
            LocalDateTime startTime,
            LocalDateTime endTime,
            List<PipelineRunJobInfo> jobs) {

        public static PipelineRunDetailInfo render(PipelineDefinition pipelineDefinition, PipelineRun pipelineRun,
                PipelineRunExecution pipelineRunExecution,
                List<PipelineRunJobInfo> jobs) {
            return new PipelineRunDetailInfo(
                    pipelineRun.getId(),
                    pipelineDefinition.getId(),
                    pipelineDefinition.getConfigPath(),
                    pipelineDefinition.getFileName(),
                    pipelineRunExecution == null ? pipelineRun.getRequestedAsync() : pipelineRunExecution.getRequestedAsync(),
                    pipelineRunExecution == null ? pipelineRun.getStatus() : pipelineRunExecution.getStatus(),
                    pipelineRun.getCreatedAt(),
                    pipelineRunExecution == null ? pipelineRun.getStartTime() : pipelineRunExecution.getStartTime(),
                    pipelineRunExecution == null ? pipelineRun.getEndTime() : pipelineRunExecution.getEndTime(),
                    jobs);
        }
    }

    record PipelineRunJobInfo(
            Long id,
            Integer sequenceOrder,
            String jobName,
            AtomicLevel atomicLevel,
            PipelineRunStatus status,
            Long rootJobInstanceId,
            Long lastJobExecutionId,
            LocalDateTime createdAt,
            LocalDateTime startTime,
            LocalDateTime endTime,
            List<StepExecutionInfo> stepExecutionInfos) {

        public static PipelineRunJobInfo render(PipelineRunJob pipelineRunJob,
                PipelineRunExecutionJob pipelineRunExecutionJob, JobExecution jobExecution) {
            List<StepExecutionInfo> stepExecutionInfos = jobExecution == null
                    ? List.of()
                    : jobExecution.getStepExecutions().stream()
                            .map(StepExecutionInfo::render)
                            .toList();

            return new PipelineRunJobInfo(
                    pipelineRunJob.getId(),
                    pipelineRunJob.getJobSequenceOrder(),
                    pipelineRunJob.getJobName(),
                    pipelineRunJob.getAtomicLevel(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getStatus() : pipelineRunExecutionJob.getStatus(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getRootJobInstanceId()
                            : pipelineRunExecutionJob.getRootJobInstanceId(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getLastJobExecutionId()
                            : pipelineRunExecutionJob.getLastJobExecutionId(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getCreatedAt() : pipelineRunExecutionJob.getCreatedAt(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getStartTime() : pipelineRunExecutionJob.getStartTime(),
                    pipelineRunExecutionJob == null ? pipelineRunJob.getEndTime() : pipelineRunExecutionJob.getEndTime(),
                    stepExecutionInfos);
        }
    }

    record StepExecutionInfo(
            Long id,
            String stepName,
            String status,
            String exitCode,
            LocalDateTime startTime,
            LocalDateTime endTime,
            Long readCount,
            Long writeCount,
            Long commitCount,
            Long rollbackCount,
            Long filterCount,
            Long readSkipCount,
            Long writeSkipCount,
            Long processSkipCount,
            String exitDescription) {

        public static StepExecutionInfo render(StepExecution stepExecution) {
            return new StepExecutionInfo(
                    stepExecution.getId(),
                    stepExecution.getStepName(),
                    stepExecution.getStatus().name(),
                    stepExecution.getExitStatus().getExitCode(),
                    stepExecution.getStartTime(),
                    stepExecution.getEndTime(),
                    (long) stepExecution.getReadCount(),
                    (long) stepExecution.getWriteCount(),
                    (long) stepExecution.getCommitCount(),
                    (long) stepExecution.getRollbackCount(),
                    (long) stepExecution.getFilterCount(),
                    (long) stepExecution.getReadSkipCount(),
                    (long) stepExecution.getWriteSkipCount(),
                    (long) stepExecution.getProcessSkipCount(),
                    stepExecution.getExitStatus().getExitDescription());
        }
    }
}
