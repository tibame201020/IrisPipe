package irispipe.model.dto;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.StepExecution;

public interface SyncJobDTO {

    record JobExecuteRequest(
            @com.fasterxml.jackson.annotation.JsonProperty("useAsyncLaucher")
            Boolean useAsyncLauncher,
            Long pipelineId) {
    }

    record JobSummaryInfo(
            Long id,
            String jobName,
            BatchStatus status,
            ExitStatus exitStatus,
            LocalDateTime createTime,
            LocalDateTime startTime,
            LocalDateTime endTime) {
        public static JobSummaryInfo render(JobExecution jobExecution) {
            Long id = jobExecution.getId();
            String jobName = jobExecution.getJobInstance().getJobName();
            BatchStatus status = jobExecution.getStatus();
            ExitStatus exitStatus = jobExecution.getExitStatus();
            LocalDateTime createTime = jobExecution.getCreateTime();
            LocalDateTime startTime = jobExecution.getStartTime();
            LocalDateTime endTime = jobExecution.getEndTime();

            return new JobSummaryInfo(id, jobName, status, exitStatus, createTime, startTime, endTime);
        }
    }

    record JobDetailInfo(
            Long id,
            String jobName,
            BatchStatus status,
            ExitStatus exitStatus,
            LocalDateTime createTime,
            LocalDateTime startTime,
            LocalDateTime endTime,
            JobParameters jobParameters,
            List<StepExecutionInfo> stepExecutionInfos) {

        public static JobDetailInfo render(JobExecution jobExecution) {
            Long id = jobExecution.getId();
            String jobName = jobExecution.getJobInstance().getJobName();
            BatchStatus status = jobExecution.getStatus();
            ExitStatus exitStatus = jobExecution.getExitStatus();
            LocalDateTime createTime = jobExecution.getCreateTime();
            LocalDateTime startTime = jobExecution.getStartTime();
            LocalDateTime endTime = jobExecution.getEndTime();
            JobParameters jobParameters = jobExecution.getJobParameters();
            List<StepExecutionInfo> stepExecutionInfos = jobExecution.getStepExecutions()
                    .stream()
                    .map(StepExecutionInfo::render)
                    .toList();

            return new JobDetailInfo(id, jobName, status, exitStatus, createTime, startTime, endTime, jobParameters,
                    stepExecutionInfos);
        }
    }

    record StepExecutionInfo(
            Long id,
            String stepName,
            BatchStatus status,
            ExitStatus exitStatus,
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
            Long id = stepExecution.getId();
            String stepName = stepExecution.getStepName();
            BatchStatus status = stepExecution.getStatus();
            ExitStatus exitStatus = stepExecution.getExitStatus();
            LocalDateTime startTime = stepExecution.getStartTime();
            LocalDateTime endTime = stepExecution.getEndTime();
            Long readCount = stepExecution.getReadCount();
            Long writeCount = stepExecution.getWriteCount();
            Long commitCount = stepExecution.getCommitCount();
            Long rollbackCount = stepExecution.getRollbackCount();
            Long filterCount = stepExecution.getFilterCount();
            Long readSkipCount = stepExecution.getReadSkipCount();
            Long writeSkipCount = stepExecution.getWriteSkipCount();
            Long processSkipCount = stepExecution.getProcessSkipCount();
            String exitDescription = stepExecution.getExitStatus().getExitDescription();

            return new StepExecutionInfo(id, stepName, status, exitStatus, startTime, endTime, readCount,
                    writeCount, commitCount, rollbackCount, filterCount, readSkipCount, writeSkipCount,
                    processSkipCount, exitDescription);
        }
    }

}
