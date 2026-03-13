package irispipe.infrastructure.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.PipelineRun;
import irispipe.infrastructure.entity.PipelineRunJob;
import irispipe.infrastructure.repo.PipelineRunJobRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.model.PipelineRunStatus;

@Service
public class PipelineRunLifecycleService {
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;

    public PipelineRunLifecycleService(PipelineRunRepo pipelineRunRepo, PipelineRunJobRepo pipelineRunJobRepo) {
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
    }

    @Transactional
    public void markJobStarted(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.id");
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.job.id");
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        pipelineRun.setStatus(PipelineRunStatus.STARTED);
        pipelineRun.setUpdatedAt(now);
        pipelineRunRepo.save(pipelineRun);

        pipelineRunJob.setStatus(PipelineRunStatus.STARTED);
        pipelineRunJob.setRootJobInstanceId(jobExecution.getJobInstance().getId());
        pipelineRunJob.setLastJobExecutionId(jobExecution.getId());
        pipelineRunJob.setStartTime(jobExecution.getStartTime() != null ? jobExecution.getStartTime() : now);
        pipelineRunJob.setUpdatedAt(now);
        pipelineRunJobRepo.save(pipelineRunJob);
    }

    @Transactional
    public void markJobFinished(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.id");
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.job.id");
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        pipelineRunJob.setStatus(PipelineRunStatus.from(jobExecution.getStatus()));
        pipelineRunJob.setRootJobInstanceId(jobExecution.getJobInstance().getId());
        pipelineRunJob.setLastJobExecutionId(jobExecution.getId());
        if (pipelineRunJob.getStartTime() == null) {
            pipelineRunJob.setStartTime(jobExecution.getStartTime() != null ? jobExecution.getStartTime() : now);
        }
        pipelineRunJob.setEndTime(jobExecution.getEndTime() != null ? jobExecution.getEndTime() : now);
        pipelineRunJob.setUpdatedAt(now);
        pipelineRunJobRepo.save(pipelineRunJob);

        PipelineRunStatus jobStatus = PipelineRunStatus.from(jobExecution.getStatus());
        if (jobStatus == PipelineRunStatus.FAILED
                || jobStatus == PipelineRunStatus.STOPPED
                || jobStatus == PipelineRunStatus.ABANDONED
                || jobStatus == PipelineRunStatus.UNKNOWN) {
            pipelineRun.setStatus(jobStatus);
            pipelineRun.setEndTime(now);
            pipelineRun.setUpdatedAt(now);
            pipelineRunRepo.save(pipelineRun);
            return;
        }

        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);
        boolean allCompleted = pipelineRunJobs.stream()
                .allMatch(runJob -> runJob.getStatus() == PipelineRunStatus.COMPLETED);

        pipelineRun.setStatus(allCompleted ? PipelineRunStatus.COMPLETED : PipelineRunStatus.STARTED);
        if (allCompleted) {
            pipelineRun.setEndTime(now);
        }
        pipelineRun.setUpdatedAt(now);
        pipelineRunRepo.save(pipelineRun);
    }

    @Transactional
    public void markLaunchFailed(Long pipelineRunId, Long pipelineRunJobId) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        if (pipelineRunJob.getStartTime() == null) {
            pipelineRunJob.setStartTime(now);
        }
        pipelineRunJob.setStatus(PipelineRunStatus.FAILED);
        pipelineRunJob.setEndTime(now);
        pipelineRunJob.setUpdatedAt(now);
        pipelineRunJobRepo.save(pipelineRunJob);

        pipelineRun.setStatus(PipelineRunStatus.FAILED);
        pipelineRun.setEndTime(now);
        pipelineRun.setUpdatedAt(now);
        pipelineRunRepo.save(pipelineRun);
    }

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        return pipelineRunRepo.findById(pipelineRunId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run not found: " + pipelineRunId));
    }

    private PipelineRunJob getPipelineRunJob(Long pipelineRunJobId) {
        return pipelineRunJobRepo.findById(pipelineRunJobId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run job not found: " + pipelineRunJobId));
    }

    private Long getRequiredLong(JobParameters jobParameters, String key) {
        Long value = jobParameters.getLong(key);
        if (value == null) {
            throw new IllegalArgumentException("Missing JobParameter: " + key);
        }
        return value;
    }
}
