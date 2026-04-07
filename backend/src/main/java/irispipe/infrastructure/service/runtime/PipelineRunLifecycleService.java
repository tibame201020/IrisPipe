package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.core.service.PipelineRunJobParameterKeys;
import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;
import irispipe.infrastructure.sse.SseEventBroadcaster;
import irispipe.infrastructure.sse.SseEvents;
import irispipe.model.PipelineRunStatus;

/**
 * Synchronizes pipeline run runtime state with Spring Batch job lifecycle events.
 */
@Service
public class PipelineRunLifecycleService {
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineRunStatusPolicy pipelineRunStatusPolicy;
    private final PipelineRunProjectionService pipelineRunProjectionService;
    private final PipelineRunObservationService pipelineRunObservationService;
    private final SseEventBroadcaster sseEventBroadcaster;

    /**
     * Creates the lifecycle service with runtime repositories, status policy,
     * projection sync, and observation publishing helpers.
     *
     * @param pipelineRunRepo pipeline run repository
     * @param pipelineRunExecutionRepo pipeline run execution repository
     * @param pipelineRunExecutionJobRepo pipeline run execution job repository
     * @param pipelineRunJobRepo pipeline run job repository
     * @param pipelineRunStatusPolicy runtime status policy helper
     * @param pipelineRunProjectionService latest projection sync helper
     * @param pipelineRunObservationService observation publishing helper
     */
    public PipelineRunLifecycleService(PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineRunStatusPolicy pipelineRunStatusPolicy,
            PipelineRunProjectionService pipelineRunProjectionService,
            PipelineRunObservationService pipelineRunObservationService,
            SseEventBroadcaster sseEventBroadcaster) {
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineRunStatusPolicy = pipelineRunStatusPolicy;
        this.pipelineRunProjectionService = pipelineRunProjectionService;
        this.pipelineRunObservationService = pipelineRunObservationService;
        this.sseEventBroadcaster = sseEventBroadcaster;
    }

    /**
     * Marks one execution job and its parent execution as started from Spring Batch
     * job-start data.
     *
     * @param jobExecution Spring Batch job execution that just started
     */
    @Transactional
    public void markJobStarted(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), PipelineRunJobParameterKeys.PIPELINE_RUN_ID);
        Long pipelineRunExecutionId = getRequiredLong(
                jobExecution.getJobParameters(),
                PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_ID);
        Long pipelineRunExecutionJobId = getRequiredLong(
                jobExecution.getJobParameters(),
                PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_JOB_ID);
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), PipelineRunJobParameterKeys.PIPELINE_RUN_JOB_ID);
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startTime = jobExecution.getStartTime() != null ? jobExecution.getStartTime() : now;

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);
        PipelineRunExecutionJob pipelineRunExecutionJob = getPipelineRunExecutionJob(pipelineRunExecutionJobId);
        PipelineRunJob pipelineRunJob = getPipelineRunJob(pipelineRunJobId);

        if (!pipelineRunStatusPolicy.isStopStatus(pipelineRunExecution.getStatus())
                && !pipelineRunStatusPolicy.isTerminalFailure(pipelineRunExecution.getStatus())
                && pipelineRunExecution.getStatus() != PipelineRunStatus.COMPLETED) {
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

        sseEventBroadcaster.broadcast(pipelineRunId, "job_started", new SseEvents.JobStartedEvent(
                pipelineRunId, pipelineRunJob.getJobName(), pipelineRunJob.getStageName(), startTime));
    }

    /**
     * Checks whether a stop request exists for the execution referenced by one
     * Spring Batch job execution.
     *
     * @param jobExecution Spring Batch job execution
     * @return {@code true} when stop has been requested
     */
    @Transactional(readOnly = true)
    public boolean isStopRequested(JobExecution jobExecution) {
        return isStopRequested(getRequiredLong(
                jobExecution.getJobParameters(),
                PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_ID));
    }

    /**
     * Checks whether a stop request exists for one pipeline run execution.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @return {@code true} when execution is stopping or stopped
     */
    @Transactional(readOnly = true)
    public boolean isStopRequested(Long pipelineRunExecutionId) {
        return pipelineRunStatusPolicy.isStopStatus(getPipelineRunExecution(pipelineRunExecutionId).getStatus());
    }

    /**
     * Marks one execution job and its parent execution as finished using Spring
     * Batch terminal status.
     *
     * @param jobExecution Spring Batch job execution that just finished
     */
    @Transactional
    public void markJobFinished(JobExecution jobExecution) {
        Long pipelineRunId = getRequiredLong(jobExecution.getJobParameters(), PipelineRunJobParameterKeys.PIPELINE_RUN_ID);
        Long pipelineRunExecutionId = getRequiredLong(
                jobExecution.getJobParameters(),
                PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_ID);
        Long pipelineRunExecutionJobId = getRequiredLong(
                jobExecution.getJobParameters(),
                PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_JOB_ID);
        Long pipelineRunJobId = getRequiredLong(jobExecution.getJobParameters(), PipelineRunJobParameterKeys.PIPELINE_RUN_JOB_ID);
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);
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

        sseEventBroadcaster.broadcast(pipelineRunId, "job_finished", new SseEvents.JobFinishedEvent(
                pipelineRunId, pipelineRunJob.getJobName(), pipelineRunJob.getStageName(),
                jobStatus.name(), pipelineRunExecutionJob.getEndTime()));

        PipelineRunExecution latestPipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);
        if (pipelineRunStatusPolicy.isTerminalFailure(latestPipelineRunExecution.getStatus())) {
            pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, latestPipelineRunExecution, now);
            pipelineRunRepo.save(pipelineRun);
            return;
        }

        if (pipelineRunStatusPolicy.isTerminalFailure(jobStatus)) {
            latestPipelineRunExecution.setStatus(jobStatus);
            latestPipelineRunExecution.setEndTime(jobExecution.getEndTime() != null ? jobExecution.getEndTime() : now);
            latestPipelineRunExecution.setUpdatedAt(now);
            pipelineRunExecutionRepo.save(latestPipelineRunExecution);

            pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, latestPipelineRunExecution, now);
            pipelineRunRepo.save(pipelineRun);
            if (PipelineRunStatus.FAILED.equals(jobStatus)) {
                pipelineRunObservationService.publishExecutionObservation(latestPipelineRunExecution);
                sseEventBroadcaster.broadcast(pipelineRunId, "run_failed", new SseEvents.RunFailedEvent(
                        pipelineRunId, latestPipelineRunExecution.getEndTime()));
            }
            return;
        }

        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunExecutionJobRepo
                .findByPipelineRunExecutionId(pipelineRunExecutionId);
        boolean anyTerminalFailure = pipelineRunExecutionJobs.stream()
                .anyMatch(executionJob -> pipelineRunStatusPolicy.isTerminalFailure(executionJob.getStatus()));
        boolean allCompleted = pipelineRunExecutionJobs.stream()
                .allMatch(executionJob -> pipelineRunStatusPolicy.isSuccessfulTerminalStatus(executionJob.getStatus()));

        latestPipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);
        if (pipelineRunStatusPolicy.isTerminalFailure(latestPipelineRunExecution.getStatus())) {
            pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, latestPipelineRunExecution, now);
            pipelineRunRepo.save(pipelineRun);
            return;
        }

        if (latestPipelineRunExecution.getStatus() == PipelineRunStatus.STOPPED) {
            latestPipelineRunExecution.setEndTime(
                    latestPipelineRunExecution.getEndTime() == null ? now : latestPipelineRunExecution.getEndTime());
        } else if (anyTerminalFailure) {
            latestPipelineRunExecution.setStatus(PipelineRunStatus.FAILED);
            latestPipelineRunExecution.setEndTime(now);
        } else if (latestPipelineRunExecution.getStatus() == PipelineRunStatus.STOPPING && !allCompleted) {
            latestPipelineRunExecution.setEndTime(null);
        } else {
            latestPipelineRunExecution.setStatus(allCompleted ? PipelineRunStatus.COMPLETED : PipelineRunStatus.STARTED);
            latestPipelineRunExecution.setEndTime(allCompleted ? now : null);
        }
        latestPipelineRunExecution.setUpdatedAt(now);
        pipelineRunExecutionRepo.save(latestPipelineRunExecution);

        pipelineRunProjectionService.syncLatestRunProjection(pipelineRun, latestPipelineRunExecution, now);
        pipelineRunRepo.save(pipelineRun);
        if (PipelineRunStatus.COMPLETED.equals(latestPipelineRunExecution.getStatus())
                || PipelineRunStatus.FAILED.equals(latestPipelineRunExecution.getStatus())) {
            pipelineRunObservationService.publishExecutionObservation(latestPipelineRunExecution);
            if (PipelineRunStatus.COMPLETED.equals(latestPipelineRunExecution.getStatus())) {
                sseEventBroadcaster.broadcast(pipelineRunId, "run_completed", new SseEvents.RunCompletedEvent(
                        pipelineRunId, "COMPLETED", latestPipelineRunExecution.getEndTime()));
            } else {
                sseEventBroadcaster.broadcast(pipelineRunId, "run_failed", new SseEvents.RunFailedEvent(
                        pipelineRunId, latestPipelineRunExecution.getEndTime()));
            }
        }
    }

    /**
     * Marks one pipeline run execution as failed before a Spring Batch job could
     * complete normally.
     *
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     * @param pipelineRunJobId logical run job id
     * @param pipelineRunExecutionJobId execution job id
     */
    @Transactional
    public void markLaunchFailed(Long pipelineRunId, Long pipelineRunExecutionId, Long pipelineRunJobId,
            Long pipelineRunExecutionJobId) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);
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

        sseEventBroadcaster.broadcast(pipelineRunId, "run_failed", new SseEvents.RunFailedEvent(
                pipelineRunId, pipelineRunExecution.getEndTime()));
    }

    /**
     * Records a stop request on one pipeline run execution and its run header.
     *
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     */
    @Transactional
    public void markStopRequested(Long pipelineRunId, Long pipelineRunExecutionId) {
        LocalDateTime now = LocalDateTime.now();
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution pipelineRunExecution = getPipelineRunExecutionForUpdate(pipelineRunExecutionId);

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

    /**
     * Marks one pipeline run execution as stopped and syncs latest projections.
     *
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     */
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
            sseEventBroadcaster.broadcast(pipelineRunId, "run_stopped", new SseEvents.RunStoppedEvent(
                    pipelineRunId, pipelineRunExecution.getEndTime()));
        }
    }

    /**
     * Marks pending execution jobs as not run and updates logical job projections.
     *
     * @param pipelineRunExecutionJobIds execution job ids to update
     */
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

    /**
     * Loads one pipeline run by id.
     *
     * @param pipelineRunId pipeline run id
     * @return persisted pipeline run
     */
    private PipelineRun getPipelineRun(Long pipelineRunId) {
        return pipelineRunRepo.findById(pipelineRunId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run not found: " + pipelineRunId));
    }

    /**
     * Loads one pipeline run execution by id.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @return persisted pipeline run execution
     */
    private PipelineRunExecution getPipelineRunExecution(Long pipelineRunExecutionId) {
        return pipelineRunExecutionRepo.findById(pipelineRunExecutionId)
                .orElseThrow(
                        () -> new IllegalArgumentException("Pipeline run execution not found: " + pipelineRunExecutionId));
    }

    /**
     * Loads one pipeline run execution by id with a pessimistic write lock so
     * concurrent same-stage job completions cannot overwrite terminal execution
     * state with stale in-flight projection.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @return locked pipeline run execution
     */
    private PipelineRunExecution getPipelineRunExecutionForUpdate(Long pipelineRunExecutionId) {
        return pipelineRunExecutionRepo.findByIdForUpdate(pipelineRunExecutionId)
                .orElseThrow(
                        () -> new IllegalArgumentException("Pipeline run execution not found: " + pipelineRunExecutionId));
    }

    /**
     * Loads one pipeline run execution job by id.
     *
     * @param pipelineRunExecutionJobId pipeline run execution job id
     * @return persisted pipeline run execution job
     */
    private PipelineRunExecutionJob getPipelineRunExecutionJob(Long pipelineRunExecutionJobId) {
        return pipelineRunExecutionJobRepo.findById(pipelineRunExecutionJobId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Pipeline run execution job not found: " + pipelineRunExecutionJobId));
    }

    /**
     * Loads one logical pipeline run job by id.
     *
     * @param pipelineRunJobId pipeline run job id
     * @return persisted logical run job
     */
    private PipelineRunJob getPipelineRunJob(Long pipelineRunJobId) {
        return pipelineRunJobRepo.findById(pipelineRunJobId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run job not found: " + pipelineRunJobId));
    }

    /**
     * Extracts one required long value from Spring Batch job parameters.
     *
     * @param jobParameters Spring Batch job parameters
     * @param key job parameter key
     * @return required long value
     */
    private Long getRequiredLong(JobParameters jobParameters, String key) {
        Long value = jobParameters.getLong(key);
        if (value == null) {
            throw new IllegalArgumentException("Missing JobParameter: " + key);
        }
        return value;
    }
}
