package irispipe.model.dto;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;

import com.fasterxml.jackson.annotation.JsonProperty;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;

/**
 * Request and response DTOs for pipeline control and runtime observation APIs.
 */
public interface SyncPipelineDTO {

    /**
     * Request body for execute operations.
     *
     * @param useAsyncLauncher whether to launch asynchronously
     * @param pipelineId target pipeline id
     */
    record PipelineExecuteRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher,
            @NotNull(message = "pipelineId is required")
            @Positive(message = "pipelineId must be positive")
            Long pipelineId) {
    }

    /**
     * Request body for resume operations.
     *
     * @param useAsyncLauncher whether to launch asynchronously
     */
    record PipelineResumeRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher) {
    }

    /**
     * Request body for rerun operations.
     *
     * @param useAsyncLauncher whether to launch asynchronously
     */
    record PipelineRerunRequest(
            @JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher) {
    }

    /**
     * Summary payload for one logical pipeline run.
     *
     * @param id logical run id
     * @param pipelineId pipeline id
     * @param folderId public folder id, or {@code null} for root
     * @param folderPath public folder path
     * @param pipelineName user-facing pipeline name
     * @param status logical run status
     * @param createdAt creation time
     * @param startTime latest start time
     * @param endTime latest end time
     */
    record PipelineRunSummaryInfo(
            Long id,
            Long pipelineId,
            Long folderId,
            String folderPath,
            String pipelineName,
            PipelineRunStatus status,
            LocalDateTime createdAt,
            LocalDateTime startTime,
            LocalDateTime endTime) {

        /**
         * Builds a run summary from persisted pipeline and run rows.
         *
         * @param pipelineDefinition pipeline definition row
         * @param folderId public folder id, or {@code null} for root
         * @param folderPath public folder path
         * @param pipelineRun logical run row
         * @return run summary payload
         */
        public static PipelineRunSummaryInfo render(PipelineDefinition pipelineDefinition, Long folderId, String folderPath,
                PipelineRun pipelineRun) {
            return render(pipelineDefinition, folderId, folderPath, pipelineRun, null);
        }

        /**
         * Builds a run summary from persisted pipeline, run, and latest execution rows.
         *
         * @param pipelineDefinition pipeline definition row
         * @param folderId public folder id, or {@code null} for root
         * @param folderPath public folder path
         * @param pipelineRun logical run row
         * @param pipelineRunExecution latest execution row, or {@code null}
         * @return run summary payload
         */
        public static PipelineRunSummaryInfo render(PipelineDefinition pipelineDefinition, Long folderId, String folderPath,
                PipelineRun pipelineRun, PipelineRunExecution pipelineRunExecution) {
            return new PipelineRunSummaryInfo(
                    pipelineRun.getId(),
                    pipelineDefinition.getId(),
                    folderId,
                    folderPath,
                    pipelineDefinition.getPipelineName(),
                    pipelineRunExecution == null ? pipelineRun.getStatus() : pipelineRunExecution.getStatus(),
                    pipelineRun.getCreatedAt(),
                    pipelineRunExecution == null ? pipelineRun.getStartTime() : pipelineRunExecution.getStartTime(),
                    pipelineRunExecution == null ? pipelineRun.getEndTime() : pipelineRunExecution.getEndTime());
        }
    }

    /**
     * Detail payload for one logical pipeline run.
     *
     * @param id logical run id
     * @param pipelineId pipeline id
     * @param folderId public folder id, or {@code null} for root
     * @param folderPath public folder path
     * @param pipelineName user-facing pipeline name
     * @param requestedAsync whether the latest launch was async
     * @param status latest execution or run status
     * @param createdAt run creation time
     * @param startTime latest start time
     * @param endTime latest end time
     * @param jobs latest job projection
     * @param attempts execution attempt timeline
     */
    record PipelineRunDetailInfo(
            Long id,
            Long pipelineId,
            Long folderId,
            String folderPath,
            String pipelineName,
            Boolean requestedAsync,
            PipelineRunStatus status,
            LocalDateTime createdAt,
            LocalDateTime startTime,
            LocalDateTime endTime,
            List<PipelineRunJobInfo> jobs,
            List<PipelineRunAttemptInfo> attempts) {

        /**
         * Builds run detail from pipeline, run, and latest execution state.
         *
         * @param pipelineDefinition pipeline definition row
         * @param folderId public folder id, or {@code null} for root
         * @param folderPath public folder path
         * @param pipelineRun logical run row
         * @param pipelineRunExecution latest execution row, or {@code null}
         * @param jobs latest job projection
         * @param attempts execution attempt timeline
         * @return run detail payload
         */
        public static PipelineRunDetailInfo render(PipelineDefinition pipelineDefinition, Long folderId, String folderPath,
                PipelineRun pipelineRun,
                PipelineRunExecution pipelineRunExecution,
                List<PipelineRunJobInfo> jobs,
                List<PipelineRunAttemptInfo> attempts) {
            return new PipelineRunDetailInfo(
                    pipelineRun.getId(),
                    pipelineDefinition.getId(),
                    folderId,
                    folderPath,
                    pipelineDefinition.getPipelineName(),
                    pipelineRunExecution == null ? pipelineRun.getRequestedAsync() : pipelineRunExecution.getRequestedAsync(),
                    pipelineRunExecution == null ? pipelineRun.getStatus() : pipelineRunExecution.getStatus(),
                    pipelineRun.getCreatedAt(),
                    pipelineRunExecution == null ? pipelineRun.getStartTime() : pipelineRunExecution.getStartTime(),
                    pipelineRunExecution == null ? pipelineRun.getEndTime() : pipelineRunExecution.getEndTime(),
                    jobs,
                    attempts);
        }
    }

    /**
     * One execution attempt in the run timeline.
     *
     * @param executionId execution id
     * @param executionNo execution sequence number
     * @param executionKind execution kind
     * @param status execution status
     * @param requestedAsync whether execution was requested asynchronously
     * @param startTime execution start time
     * @param endTime execution end time
     * @param jobs job projection for the attempt
     */
    record PipelineRunAttemptInfo(
            Long executionId,
            Integer executionNo,
            PipelineRunExecutionKind executionKind,
            PipelineRunStatus status,
            Boolean requestedAsync,
            LocalDateTime startTime,
            LocalDateTime endTime,
            List<PipelineRunJobInfo> jobs) {

        /**
         * Builds an execution attempt payload.
         *
         * @param pipelineRunExecution execution row
         * @param jobs job projection for the attempt
         * @return execution attempt payload
         */
        public static PipelineRunAttemptInfo render(PipelineRunExecution pipelineRunExecution,
                List<PipelineRunJobInfo> jobs) {
            return new PipelineRunAttemptInfo(
                    pipelineRunExecution.getId(),
                    pipelineRunExecution.getExecutionNo(),
                    pipelineRunExecution.getExecutionKind(),
                    pipelineRunExecution.getStatus(),
                    pipelineRunExecution.getRequestedAsync(),
                    pipelineRunExecution.getStartTime(),
                    pipelineRunExecution.getEndTime(),
                    jobs);
        }
    }

    /**
     * Job projection payload for logical runs and execution attempts.
     *
     * @param id logical run job id
     * @param sequenceOrder job sequence order
     * @param jobName job name
     * @param atomicLevel job atomic level
     * @param status latest job status
     * @param rootJobInstanceId root Spring Batch job instance id
     * @param lastJobExecutionId latest Spring Batch job execution id
     * @param createdAt creation time
     * @param startTime start time
     * @param endTime end time
     * @param stepExecutionInfos Spring Batch step execution summaries
     */
    record PipelineRunJobInfo(
            Long id,
            String stageName,
            Integer stageSequenceOrder,
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

        /**
         * Builds a job projection from logical and execution-scoped job rows.
         *
         * @param pipelineRunJob logical run job row
         * @param pipelineRunExecutionJob execution-scoped job row, or {@code null}
         * @param jobExecution Spring Batch job execution, or {@code null}
         * @return job projection payload
         */
        public static PipelineRunJobInfo render(PipelineRunJob pipelineRunJob,
                PipelineRunExecutionJob pipelineRunExecutionJob, JobExecution jobExecution) {
            List<StepExecutionInfo> stepExecutionInfos = jobExecution == null
                    ? List.of()
                    : jobExecution.getStepExecutions().stream()
                            .map(StepExecutionInfo::render)
                            .toList();

            return new PipelineRunJobInfo(
                    pipelineRunJob.getId(),
                    pipelineRunJob.getStageName(),
                    pipelineRunJob.getStageSequenceOrder(),
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

    /**
     * Summary payload for one Spring Batch step execution.
     *
     * @param id step execution id
     * @param stepName step name
     * @param status step status
     * @param exitCode exit code
     * @param startTime start time
     * @param endTime end time
     * @param readCount read count
     * @param writeCount write count
     * @param commitCount commit count
     * @param rollbackCount rollback count
     * @param filterCount filter count
     * @param readSkipCount read skip count
     * @param writeSkipCount write skip count
     * @param processSkipCount process skip count
     * @param exitDescription exit description
     */
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

        /**
         * Builds a step execution summary from Spring Batch state.
         *
         * @param stepExecution Spring Batch step execution
         * @return step execution summary payload
         */
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
