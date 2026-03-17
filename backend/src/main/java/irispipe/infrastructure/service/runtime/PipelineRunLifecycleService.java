package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.PipelineRun;
import irispipe.infrastructure.entity.PipelineRunExecution;
import irispipe.infrastructure.entity.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.PipelineRunJob;
import irispipe.infrastructure.repo.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.PipelineRunJobRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.model.PipelineRunStatus;

@Service
public class PipelineRunLifecycleService {
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineRunStatusPolicy pipelineRunStatusPolicy;
    private final PipelineRunProjectionService pipelineRunProjectionService;
    private final PipelineRunObservationService pipelineRunObservationService;

    public PipelineRunLifecycleService(PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineRunStatusPolicy pipelineRunStatusPolicy,
            PipelineRunProjectionService pipelineRunProjectionService,
            PipelineRunObservationService pipelineRunObservationService) {
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineRunStatusPolicy = pipelineRunStatusPolicy;
        this.pipelineRunProjectionService = pipelineRunProjectionService;
        this.pipelineRunObservationService = pipelineRunObservationService;
    }

    @Transactional
    public void markJobStarted(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.id");
        Long pipelineRunExecutionId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.execution.id");
        Long pipelineRunExecutionJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.execution.job.id");
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.job.id");
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startTime = jobExecution.getStartTime() != null ? jobExecution.getStartTime() : now;

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecution(pipelineRunExecutionId);
        PipelineRunExecutionJob pipelineRunExecutionJob = getPipelineRunExecutionJob(pipelineRunExecutionJobId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        if (!pipelineRunStatusPolicy.isStopStatus(pipelineRunExecution.getStatus())) {
            pipelineRunExecution.setStatus(PipelineRunStatus.STARTED);
        }
        pipelineRunExecution.setStartTime(pipelineRunExecution.getStartTime() == null ? startTime : pipelineRunExecution.getStartTime());
        pipelineRunExecution.setUpdatedAt(now);
        pipelineRunExecutionRepo.save(pipelineRunExecution);

        pipelineRunExecutionJob.setStatus(PipelineRunStatus.STARTED);
        pipelineRunExecutionJob.setRootJobInstanceId(jobExecution.getJobInstance().getId());
        pipelineRunExecutionJob.setLastJobExecutionId(jobExecution.getId());
        pipelineRunExecutionJob.setStartTime(startTime);
        pipelineRunExecutionJob.setUpdatedAt(now);
        pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);

        pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, pipelineRunExecution, now);
        pipelineRunRepo.save(pipelineRun);

        pipelineRunProjectionService.syncLatestRunJobProjection(pipelineRunJob, pipelineRunExecutionJob, now);
        pipelineRunJobRepo.save(pipelineRunJob);
    }

    @Transactional(readOnly = true)
    public boolean isStopRequested(JobExecution jobExecution) {
        return isStopRequested(getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.execution.id"));
    }

    @Transactional(readOnly = true)
    public boolean isStopRequested(Long pipelineRunExecutionId) {
        return pipelineRunStatusPolicy.isStopStatus(getPipelineRunExecution(pipelineRunExecutionId).getStatus());
    }

    @Transactional
    public void markJobFinished(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.id");
        Long pipelineRunExecutionId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.execution.id");
        Long pipelineRunExecutionJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.execution.job.id");
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), "pipeline.run.job.id");
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecution(pipelineRunExecutionId);
        PipelineRunExecutionJob pipelineRunExecutionJob = getPipelineRunExecutionJob(pipelineRunExecutionJobId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        PipelineRunStatus jobStatus = PipelineRunStatus.from(jobExecution.getStatus());
        pipelineRunExecutionJob.setStatus(jobStatus);
        pipelineRunExecutionJob.setRootJobInstanceId(jobExecution.getJobInstance().getId());
        pipelineRunExecutionJob.setLastJobExecutionId(jobExecution.getId());
        if (pipelineRunExecutionJob.getStartTime() == null) {
            pipelineRunExecutionJob.setStartTime(jobExecution.getStartTime() != null ? jobExecution.getStartTime() : now);
        }
        pipelineRunExecutionJob.setEndTime(jobExecution.getEndTime() != null ? jobExecution.getEndTime() : now);
        pipelineRunExecutionJob.setUpdatedAt(now);
        pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);

        pipelineRunProjectionService.syncLatestRunJobProjection(pipelineRunJob, pipelineRunExecutionJob, now);
        pipelineRunJobRepo.save(pipelineRunJob);
        pipelineRunObservationService.publishJobObservation(pipelineRunJob, pipelineRunExecutionJob);

        if (pipelineRunStatusPolicy.isTerminalFailure(jobStatus)) {
            pipelineRunExecution.setStatus(jobStatus);
            pipelineRunExecution.setEndTime(jobExecution.getEndTime() != null ? jobExecution.getEndTime() : now);
            pipelineRunExecution.setUpdatedAt(now);
            pipelineRunExecutionRepo.save(pipelineRunExecution);

            pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, pipelineRunExecution, now);
            pipelineRunRepo.save(pipelineRun);
            if (PipelineRunStatus.FAILED.equals(jobStatus)) {
                pipelineRunObservationService.publishExecutionObservation(pipelineRunExecution);
            }
            return;
        }

        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunExecutionJobRepo
                .findByPipelineRunExecutionId(pipelineRunExecutionId);
        boolean allCompleted = pipelineRunExecutionJobs.stream()
                .allMatch(executionJob -> pipelineRunStatusPolicy.isSuccessfulTerminalStatus(executionJob.getStatus()));

        if (pipelineRunExecution.getStatus() == PipelineRunStatus.STOPPED) {
            pipelineRunExecution.setEndTime(pipelineRunExecution.getEndTime() == null ? now : pipelineRunExecution.getEndTime());
        } else if (pipelineRunExecution.getStatus() == PipelineRunStatus.STOPPING && !allCompleted) {
            pipelineRunExecution.setEndTime(null);
        } else {
            pipelineRunExecution.setStatus(allCompleted ? PipelineRunStatus.COMPLETED : PipelineRunStatus.STARTED);
            pipelineRunExecution.setEndTime(allCompleted ? now : null);
        }
        pipelineRunExecution.setUpdatedAt(now);
        pipelineRunExecutionRepo.save(pipelineRunExecution);

        pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, pipelineRunExecution, now);
        pipelineRunRepo.save(pipelineRun);
        if (PipelineRunStatus.COMPLETED.equals(pipelineRunExecution.getStatus())) {
            pipelineRunObservationService.publishExecutionObservation(pipelineRunExecution);
        }
    }

    @Transactional
    public void markLaunchFailed(Long pipelineRunId, Long pipelineRunExecutionId, Long pipelineRunJobId,
            Long pipelineRunExecutionJobId) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecution(pipelineRunExecutionId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);
        PipelineRunExecutionJob pipelineRunExecutionJob = getPipelineRunExecutionJob(pipelineRunExecutionJobId);

        if (pipelineRunExecutionJob.getStartTime() == null) {
            pipelineRunExecutionJob.setStartTime(now);
        }
        pipelineRunExecutionJob.setStatus(PipelineRunStatus.FAILED);
        pipelineRunExecutionJob.setEndTime(now);
        pipelineRunExecutionJob.setUpdatedAt(now);
        pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);

        pipelineRunProjectionService.syncLatestRunJobProjection(pipelineRunJob, pipelineRunExecutionJob, now);
        pipelineRunJobRepo.save(pipelineRunJob);
        pipelineRunObservationService.publishJobObservation(pipelineRunJob, pipelineRunExecutionJob);

        if (pipelineRunExecution.getStartTime() == null) {
            pipelineRunExecution.setStartTime(now);
        }
        pipelineRunExecution.setStatus(PipelineRunStatus.FAILED);
        pipelineRunExecution.setEndTime(now);
        pipelineRunExecution.setUpdatedAt(now);
        pipelineRunExecutionRepo.save(pipelineRunExecution);

        pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, pipelineRunExecution, now);
        pipelineRunRepo.save(pipelineRun);
        pipelineRunObservationService.publishExecutionObservation(pipelineRunExecution);
    }

    @Transactional
    public void markStopRequested(Long pipelineRunId, Long pipelineRunExecutionId) {
        LocalDateTime now = LocalDateTime.now();
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecution(pipelineRunExecutionId);

        if (!pipelineRunStatusPolicy.isTerminalStatus(pipelineRunExecution.getStatus())) {
            pipelineRunExecution.setStatus(PipelineRunStatus.STOPPING);
            pipelineRunExecution.setUpdatedAt(now);
            pipelineRunExecutionRepo.save(pipelineRunExecution);
        }

        pipelineRun.setLatestExecutionId(pipelineRunExecution.getId());
        pipelineRun.setRequestedAsync(pipelineRunExecution.getRequestedAsync());
        pipelineRun.setStatus(pipelineRunStatusPolicy.isTerminalStatus(pipelineRun.getStatus())
                ? pipelineRun.getStatus()
                : PipelineRunStatus.STOPPING);
        pipelineRun.setStartTime(pipelineRunExecution.getStartTime());
        pipelineRun.setEndTime(null);
        pipelineRun.setUpdatedAt(now);
        pipelineRunRepo.save(pipelineRun);
    }

    @Transactional
    public void markStopped(Long pipelineRunId, Long pipelineRunExecutionId) {
        LocalDateTime now = LocalDateTime.now();
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecution(pipelineRunExecutionId);
        boolean alreadyStopped = PipelineRunStatus.STOPPED.equals(pipelineRunExecution.getStatus());

        pipelineRunExecution.setStatus(PipelineRunStatus.STOPPED);
        pipelineRunExecution.setEndTime(pipelineRunExecution.getEndTime() == null ? now : pipelineRunExecution.getEndTime());
        pipelineRunExecution.setUpdatedAt(now);
        pipelineRunExecutionRepo.save(pipelineRunExecution);

        pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, pipelineRunExecution, now);
        pipelineRunRepo.save(pipelineRun);
        if (!alreadyStopped) {
            pipelineRunObservationService.publishExecutionObservation(pipelineRunExecution);
        }
    }

    @Transactional
    public void markExecutionJobsNotRun(List<Long> pipelineRunExecutionJobIds) {
        if (pipelineRunExecutionJobIds == null || pipelineRunExecutionJobIds.isEmpty()) {
            return;
        }

        LocalDateTime now = LocalDateTime.now();
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunExecutionJobRepo.findAllById(
                pipelineRunExecutionJobIds);
        Map<Long, PipelineRunJob> pipelineRunJobsById = pipelineRunJobRepo.findAllById(
                pipelineRunExecutionJobs.stream()
                        .map(PipelineRunExecutionJob::getPipelineRunJobId)
                        .distinct()
                        .toList())
                .stream()
                .collect(Collectors.toMap(PipelineRunJob::getId, pipelineRunJob -> pipelineRunJob));

        pipelineRunExecutionJobs.stream()
                .filter(pipelineRunExecutionJob -> pipelineRunExecutionJob.getStatus() == PipelineRunStatus.PENDING)
                .forEach(pipelineRunExecutionJob -> {
                    pipelineRunExecutionJob.setStatus(PipelineRunStatus.NOT_RUN);
                    pipelineRunExecutionJob.setUpdatedAt(now);
                    pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);

                    PipelineRunJob pipelineRunJob = pipelineRunJobsById.get(pipelineRunExecutionJob.getPipelineRunJobId());
                    if (pipelineRunJob != null) {
                        pipelineRunProjectionService.syncLatestRunJobProjection(
                                pipelineRunJob,
                                pipelineRunExecutionJob,
                                now);
                        pipelineRunJobRepo.save(pipelineRunJob);
                    }
                });
    }

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        return pipelineRunRepo.findById(pipelineRunId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run not found: " + pipelineRunId));
    }

    private PipelineRunExecution getPipelineRunExecution(Long pipelineRunExecutionId) {
        return pipelineRunExecutionRepo.findById(pipelineRunExecutionId)
                .orElseThrow(
                        () -> new IllegalArgumentException("Pipeline run execution not found: " + pipelineRunExecutionId));
    }

    private PipelineRunExecutionJob getPipelineRunExecutionJob(Long pipelineRunExecutionJobId) {
        return pipelineRunExecutionJobRepo.findById(pipelineRunExecutionJobId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Pipeline run execution job not found: " + pipelineRunExecutionJobId));
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
