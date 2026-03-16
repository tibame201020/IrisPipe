package irispipe.core.service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.batch.core.launch.JobExecutionNotRunningException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.launch.NoSuchJobExecutionException;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.core.factory.SyncJobContextFactory;
import irispipe.core.factory.SyncJobFactory;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.entity.PipelineRun;
import irispipe.infrastructure.entity.PipelineRunExecution;
import irispipe.infrastructure.entity.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.PipelineRunJob;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.PipelineRunJobRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.infrastructure.service.ExecutionRecordService;
import irispipe.infrastructure.service.JobConfigService;
import irispipe.infrastructure.service.JobMetadataService;
import irispipe.infrastructure.service.PipelineFolderService;
import irispipe.infrastructure.service.PipelineRunLifecycleService;
import irispipe.infrastructure.service.PipelineRunSnapshotService;
import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncPipelineDTO;
import irispipe.observability.event.PipelineRunTriggeredObservationEvent;

@Service
public class PipelineExecutionService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JobLauncher jobLauncher;
    private final TaskExecutor pipelineTaskExecutor;
    private final JobExplorer jobExplorer;
    private final JobOperator jobOperator;
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final JobConfigService jobConfigService;
    private final SyncJobContextFactory syncJobContextFactory;
    private final SyncJobFactory syncJobFactory;
    private final ExecutionRecordService executionRecordService;
    private final JobMetadataService jobMetadataService;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineRunLifecycleService pipelineRunLifecycleService;
    private final PipelineRunSnapshotService pipelineRunSnapshotService;
    private final ApplicationEventPublisher applicationEventPublisher;

    public PipelineExecutionService(JobLauncher jobLauncher,
            TaskExecutor pipelineTaskExecutor,
            JobExplorer jobExplorer,
            JobOperator jobOperator,
            PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            JobConfigService jobConfigService,
            SyncJobContextFactory syncJobContextFactory,
            SyncJobFactory syncJobFactory,
            ExecutionRecordService executionRecordService,
            JobMetadataService jobMetadataService,
            PipelineFolderService pipelineFolderService,
            PipelineRunLifecycleService pipelineRunLifecycleService,
            PipelineRunSnapshotService pipelineRunSnapshotService,
            ApplicationEventPublisher applicationEventPublisher) {
        this.jobLauncher = jobLauncher;
        this.pipelineTaskExecutor = pipelineTaskExecutor;
        this.jobExplorer = jobExplorer;
        this.jobOperator = jobOperator;
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.jobConfigService = jobConfigService;
        this.syncJobContextFactory = syncJobContextFactory;
        this.syncJobFactory = syncJobFactory;
        this.executionRecordService = executionRecordService;
        this.jobMetadataService = jobMetadataService;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineRunLifecycleService = pipelineRunLifecycleService;
        this.pipelineRunSnapshotService = pipelineRunSnapshotService;
        this.applicationEventPublisher = applicationEventPublisher;
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo execute(Long pipelineId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> syncJobs = jobConfigService.getSyncJobs(pipelineId);
        syncJobs.forEach(SyncJobDefinition::validate);

        PipelineRun pipelineRun = createPipelineRun(pipelineId, requestedAsync, null);
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.createSnapshot(
                pipelineRun.getId(),
                pipelineDefinition.getContentHash(),
                syncJobs);
        return startPipelineRun(pipelineDefinition, pipelineRun, snapshotSyncJobs, requestedAsync);
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo rerun(Long pipelineRunId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineRun sourcePipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(sourcePipelineRun.getPipelineId());
        PipelineRun pipelineRun = createPipelineRun(sourcePipelineRun.getPipelineId(), requestedAsync,
                sourcePipelineRun.getId());
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.copySnapshot(
                sourcePipelineRun.getId(),
                pipelineRun.getId());
        return startPipelineRun(pipelineDefinition, pipelineRun, snapshotSyncJobs, requestedAsync);
    }

    private SyncPipelineDTO.PipelineRunSummaryInfo startPipelineRun(PipelineDefinition pipelineDefinition,
            PipelineRun pipelineRun, List<SyncJobDefinition> syncJobs, boolean requestedAsync) {
        syncJobs.forEach(SyncJobDefinition::validate);

        List<PipelineRunJob> pipelineRunJobs = createPipelineRunJobs(pipelineRun.getId(), syncJobs);
        PipelineRunExecution pipelineRunExecution = createPipelineRunExecution(
                pipelineRun,
                requestedAsync,
                PipelineRunExecutionKind.INITIAL);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = createInitialPipelineRunExecutionJobs(
                pipelineRunExecution.getId(),
                pipelineRunJobs);
        applicationEventPublisher.publishEvent(new PipelineRunTriggeredObservationEvent(requestedAsync));

        if (requestedAsync) {
            pipelineTaskExecutor.execute(
                    () -> executePipelineRun(pipelineDefinition.getId(), syncJobs, pipelineRunExecution, pipelineRunJobs,
                            pipelineRunExecutionJobs, 0));
            return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                    pipelineDefinition,
                    pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                    getPipelineRun(pipelineRun.getId()));
        }

        executePipelineRun(pipelineDefinition.getId(), syncJobs, pipelineRunExecution, pipelineRunJobs, pipelineRunExecutionJobs,
                0);
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                getPipelineRun(pipelineRun.getId()));
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo resume(Long pipelineRunId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        validateResumablePipelineRun(pipelineRunId, latestExecution);

        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.getSnapshotSyncJobs(pipelineRunId);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);
        validatePipelineRunTopology(pipelineRunId, snapshotSyncJobs, pipelineRunJobs);

        Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId = getExecutionJobsByRunJobId(latestExecution.getId());
        int resumeJobSequence = findResumeJobSequence(
                pipelineRunId,
                latestExecution,
                pipelineRunJobs,
                latestExecutionJobsByRunJobId);
        validateResumeStrategy(pipelineRunId, pipelineRunJobs.get(resumeJobSequence));

        PipelineRunExecution pipelineRunExecution = createPipelineRunExecution(
                pipelineRun,
                requestedAsync,
                PipelineRunExecutionKind.RESUME);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = createResumePipelineRunExecutionJobs(
                pipelineRunExecution.getId(),
                pipelineRunJobs,
                latestExecutionJobsByRunJobId,
                resumeJobSequence);

        if (requestedAsync) {
            pipelineTaskExecutor.execute(
                    () -> executePipelineRun(
                            pipelineRun.getPipelineId(),
                            snapshotSyncJobs,
                            pipelineRunExecution,
                            pipelineRunJobs,
                            pipelineRunExecutionJobs,
                            resumeJobSequence));
            return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                    pipelineDefinition,
                    pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                    getPipelineRun(pipelineRunId));
        }

        executePipelineRun(
                pipelineRun.getPipelineId(),
                snapshotSyncJobs,
                pipelineRunExecution,
                pipelineRunJobs,
                pipelineRunExecutionJobs,
                resumeJobSequence);
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                getPipelineRun(pipelineRunId));
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo stop(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        validateStoppablePipelineRun(pipelineRunId, latestExecution);

        pipelineRunLifecycleService.markStopRequested(pipelineRunId, latestExecution.getId());

        Long runningBatchExecutionId = findRunningBatchExecutionId(pipelineRunId, latestExecution.getId());
        if (runningBatchExecutionId == null) {
            markPendingExecutionJobsNotRun(latestExecution.getId());
            pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
        } else {
            try {
                jobOperator.stop(runningBatchExecutionId);
            } catch (NoSuchJobExecutionException | JobExecutionNotRunningException e) {
                logger.warn("pipeline run {} stop target {} was no longer running: {}",
                        pipelineRunId,
                        runningBatchExecutionId,
                        e.getMessage());
                markPendingExecutionJobsNotRun(latestExecution.getId());
                pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
            }
        }

        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                getPipelineRun(pipelineRunId));
    }

    private void executePipelineRun(Long pipelineId, List<SyncJobDefinition> syncJobs,
            PipelineRunExecution pipelineRunExecution, List<PipelineRunJob> pipelineRunJobs,
            List<PipelineRunExecutionJob> pipelineRunExecutionJobs, int startJobSequence) {
        for (int jobSequence = startJobSequence; jobSequence < syncJobs.size(); jobSequence++) {
            if (finalizeStopIfRequested(pipelineRunExecution.getId())) {
                return;
            }

            SyncJobDefinition syncJob = syncJobs.get(jobSequence);
            PipelineRunJob pipelineRunJob = pipelineRunJobs.get(jobSequence);
            PipelineRunExecutionJob pipelineRunExecutionJob = pipelineRunExecutionJobs.get(jobSequence);
            SyncJobContext syncJobContext = null;
            boolean closeSyncJobContext = true;
            try {
                syncJobContext = syncJobContextFactory.initialSyncJobContext(syncJob, executionRecordService);
                Job job = syncJobFactory.createBatchJob(syncJobContext);
                JobParameters jobParameters = buildJobParameters(
                        pipelineId,
                        syncJob,
                        pipelineRunJob,
                        pipelineRunExecution,
                        pipelineRunExecutionJob,
                        jobSequence);

                JobExecution jobExecution = jobLauncher.run(job, jobParameters);
                closeSyncJobContext = false;

                if (finalizeStopIfRequested(pipelineRunExecution.getId())) {
                    return;
                }

                if (!BatchStatus.COMPLETED.equals(jobExecution.getStatus())) {
                    markRemainingJobsNotRun(pipelineRunExecutionJobs, jobSequence);
                    return;
                }
            } catch (Exception e) {
                logger.error("pipeline {} stopped on job {}: {}", pipelineId, syncJob.getJobName(), e.getMessage());
                pipelineRunLifecycleService.markLaunchFailed(
                        pipelineRunJob.getPipelineRunId(),
                        pipelineRunExecution.getId(),
                        pipelineRunJob.getId(),
                        pipelineRunExecutionJob.getId());
                markRemainingJobsNotRun(pipelineRunExecutionJobs, jobSequence);
                return;
            } finally {
                if (closeSyncJobContext && syncJobContext != null) {
                    syncJobContext.close();
                }
            }
        }
    }

    @Transactional
    public void deletePipelineRun(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        validateDeletablePipelineRun(pipelineRunId, pipelineRun, latestExecution);
        List<PipelineRunExecution> pipelineRunExecutions = pipelineRunExecutionRepo
                .findByPipelineRunIdOrderByExecutionNoAsc(pipelineRunId);
        List<Long> pipelineRunExecutionIds = pipelineRunExecutions.stream()
                .map(PipelineRunExecution::getId)
                .toList();
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunExecutionIds.isEmpty()
                ? List.of()
                : pipelineRunExecutionJobRepo.findByPipelineRunExecutionIdIn(pipelineRunExecutionIds);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);

        pipelineRunExecutionJobs.stream()
                .map(PipelineRunExecutionJob::getLastJobExecutionId)
                .filter(Objects::nonNull)
                .distinct()
                .map(jobExplorer::getJobExecution)
                .filter(Objects::nonNull)
                .forEach(jobMetadataService::deleteByJobExecution);

        pipelineRun.setLatestExecutionId(null);
        pipelineRunRepo.saveAndFlush(pipelineRun);

        if (!pipelineRunExecutionJobs.isEmpty()) {
            pipelineRunExecutionJobRepo.deleteAllInBatch(pipelineRunExecutionJobs);
        }
        if (!pipelineRunExecutions.isEmpty()) {
            pipelineRunExecutionRepo.deleteAllInBatch(pipelineRunExecutions);
        }
        if (!pipelineRunJobs.isEmpty()) {
            pipelineRunJobRepo.deleteAllInBatch(pipelineRunJobs);
        }
        pipelineRunSnapshotService.deleteSnapshot(pipelineRunId);
        pipelineRunRepo.delete(pipelineRun);
    }

    private PipelineRun createPipelineRun(Long pipelineId, boolean requestedAsync, Long rerunFromPipelineRunId) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = new PipelineRun();
        pipelineRun.setPipelineId(pipelineId);
        pipelineRun.setRerunFromPipelineRunId(rerunFromPipelineRunId);
        pipelineRun.setLatestExecutionId(null);
        pipelineRun.setRequestedAsync(requestedAsync);
        pipelineRun.setStatus(PipelineRunStatus.STARTING);
        pipelineRun.setCreatedAt(now);
        pipelineRun.setStartTime(now);
        pipelineRun.setUpdatedAt(now);
        return pipelineRunRepo.save(pipelineRun);
    }

    private List<PipelineRunJob> createPipelineRunJobs(Long pipelineRunId, List<SyncJobDefinition> syncJobs) {
        LocalDateTime now = LocalDateTime.now();
        return java.util.stream.IntStream.range(0, syncJobs.size())
                .mapToObj(jobSequence -> {
                    SyncJobDefinition syncJob = syncJobs.get(jobSequence);
                    PipelineRunJob pipelineRunJob = new PipelineRunJob();
                    pipelineRunJob.setPipelineRunId(pipelineRunId);
                    pipelineRunJob.setJobSequenceOrder(jobSequence);
                    pipelineRunJob.setJobName(syncJob.getJobName());
                    pipelineRunJob.setAtomicLevel(syncJob.getSetting().atomicLevel());
                    pipelineRunJob.setStatus(PipelineRunStatus.PENDING);
                    pipelineRunJob.setCreatedAt(now);
                    pipelineRunJob.setUpdatedAt(now);
                    return pipelineRunJob;
                })
                .map(pipelineRunJobRepo::save)
                .toList();
    }

    private PipelineRunExecution createPipelineRunExecution(PipelineRun pipelineRun, boolean requestedAsync,
            PipelineRunExecutionKind executionKind) {
        LocalDateTime now = LocalDateTime.now();
        int nextExecutionNo = pipelineRunExecutionRepo.findTopByPipelineRunIdOrderByExecutionNoDesc(pipelineRun.getId())
                .map(existingExecution -> existingExecution.getExecutionNo() + 1)
                .orElse(1);

        PipelineRunExecution pipelineRunExecution = new PipelineRunExecution();
        pipelineRunExecution.setPipelineRunId(pipelineRun.getId());
        pipelineRunExecution.setExecutionNo(nextExecutionNo);
        pipelineRunExecution.setExecutionKind(executionKind);
        pipelineRunExecution.setRequestedAsync(requestedAsync);
        pipelineRunExecution.setStatus(PipelineRunStatus.STARTING);
        pipelineRunExecution.setCreatedAt(now);
        pipelineRunExecution.setStartTime(now);
        pipelineRunExecution.setUpdatedAt(now);
        PipelineRunExecution savedPipelineRunExecution = pipelineRunExecutionRepo.save(pipelineRunExecution);

        pipelineRun.setLatestExecutionId(savedPipelineRunExecution.getId());
        pipelineRun.setRequestedAsync(savedPipelineRunExecution.getRequestedAsync());
        pipelineRun.setStatus(savedPipelineRunExecution.getStatus());
        pipelineRun.setStartTime(savedPipelineRunExecution.getStartTime());
        pipelineRun.setEndTime(savedPipelineRunExecution.getEndTime());
        pipelineRun.setUpdatedAt(now);
        pipelineRunRepo.save(pipelineRun);

        return savedPipelineRunExecution;
    }

    private List<PipelineRunExecutionJob> createInitialPipelineRunExecutionJobs(Long pipelineRunExecutionId,
            List<PipelineRunJob> pipelineRunJobs) {
        LocalDateTime now = LocalDateTime.now();
        return pipelineRunJobs.stream()
                .map(pipelineRunJob -> {
                    PipelineRunExecutionJob pipelineRunExecutionJob = new PipelineRunExecutionJob();
                    pipelineRunExecutionJob.setPipelineRunExecutionId(pipelineRunExecutionId);
                    pipelineRunExecutionJob.setPipelineRunJobId(pipelineRunJob.getId());
                    pipelineRunExecutionJob.setStatus(PipelineRunStatus.PENDING);
                    pipelineRunExecutionJob.setCreatedAt(now);
                    pipelineRunExecutionJob.setUpdatedAt(now);
                    return pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);
                })
                .toList();
    }

    private List<PipelineRunExecutionJob> createResumePipelineRunExecutionJobs(Long pipelineRunExecutionId,
            List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId,
            int resumeJobSequence) {
        LocalDateTime now = LocalDateTime.now();
        return java.util.stream.IntStream.range(0, pipelineRunJobs.size())
                .mapToObj(jobSequence -> {
                    PipelineRunJob pipelineRunJob = pipelineRunJobs.get(jobSequence);
                    PipelineRunExecutionJob previousExecutionJob = latestExecutionJobsByRunJobId.get(pipelineRunJob.getId());

                    PipelineRunExecutionJob pipelineRunExecutionJob = new PipelineRunExecutionJob();
                    pipelineRunExecutionJob.setPipelineRunExecutionId(pipelineRunExecutionId);
                    pipelineRunExecutionJob.setPipelineRunJobId(pipelineRunJob.getId());
                    pipelineRunExecutionJob.setStatus(jobSequence < resumeJobSequence
                            ? PipelineRunStatus.SKIPPED
                            : PipelineRunStatus.PENDING);
                    pipelineRunExecutionJob.setRootJobInstanceId(jobSequence < resumeJobSequence
                            ? previousExecutionJob == null
                                    ? pipelineRunJob.getRootJobInstanceId()
                                    : previousExecutionJob.getRootJobInstanceId()
                            : null);
                    pipelineRunExecutionJob.setLastJobExecutionId(jobSequence < resumeJobSequence
                            ? previousExecutionJob == null
                                    ? pipelineRunJob.getLastJobExecutionId()
                                    : previousExecutionJob.getLastJobExecutionId()
                            : null);
                    pipelineRunExecutionJob.setCreatedAt(now);
                    pipelineRunExecutionJob.setUpdatedAt(now);
                    return pipelineRunExecutionJobRepo.save(pipelineRunExecutionJob);
                })
                .toList();
    }

    private JobParameters buildJobParameters(Long pipelineId, SyncJobDefinition syncJob, PipelineRunJob pipelineRunJob,
            PipelineRunExecution pipelineRunExecution, PipelineRunExecutionJob pipelineRunExecutionJob, int jobSequence) {
        boolean replayJobInstance = PipelineRunExecutionKind.RESUME.equals(pipelineRunExecution.getExecutionKind())
                && AtomicLevel.JOB.equals(syncJob.getSetting().atomicLevel());

        return new JobParametersBuilder()
                .addLong("pipeline.run.job.id", pipelineRunJob.getId(), !replayJobInstance)
                .addLong("pipeline.id", pipelineId, false)
                .addLong("pipeline.run.id", pipelineRunJob.getPipelineRunId(), false)
                .addLong("pipeline.run.execution.id", pipelineRunExecution.getId(), false)
                .addLong("pipeline.run.execution.job.id", pipelineRunExecutionJob.getId(), replayJobInstance)
                .addLong("job.sequence", Long.valueOf(jobSequence), false)
                .toJobParameters();
    }

    private void markRemainingJobsNotRun(List<PipelineRunExecutionJob> pipelineRunExecutionJobs, int currentJobSequence) {
        if (currentJobSequence + 1 >= pipelineRunExecutionJobs.size()) {
            return;
        }

        List<Long> remainingExecutionJobIds = pipelineRunExecutionJobs.subList(
                currentJobSequence + 1,
                pipelineRunExecutionJobs.size()).stream()
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(remainingExecutionJobIds);
    }

    private void markPendingExecutionJobsNotRun(Long pipelineRunExecutionId) {
        List<Long> pendingExecutionJobIds = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId)
                .stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.PENDING.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(pendingExecutionJobIds);
    }

    private boolean finalizeStopIfRequested(Long pipelineRunExecutionId) {
        PipelineRunExecution latestExecution = getPipelineRunExecution(pipelineRunExecutionId);
        if (!isStopState(latestExecution.getStatus())) {
            return false;
        }

        markPendingExecutionJobsNotRun(pipelineRunExecutionId);
        pipelineRunLifecycleService.markStopped(latestExecution.getPipelineRunId(), pipelineRunExecutionId);
        return true;
    }

    private void validateResumablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to resume: " + pipelineRunId);
        }
        if (!isTerminalFailure(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only failed pipeline runs can be resumed: " + pipelineRunId);
        }
    }

    private void validatePipelineRunTopology(Long pipelineRunId, List<SyncJobDefinition> snapshotSyncJobs,
            List<PipelineRunJob> pipelineRunJobs) {
        if (snapshotSyncJobs.size() != pipelineRunJobs.size()) {
            throw new IllegalStateException("Pipeline run topology mismatch: " + pipelineRunId);
        }
    }

    private int findResumeJobSequence(Long pipelineRunId, PipelineRunExecution latestExecution, List<PipelineRunJob> pipelineRunJobs,
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

    private void validateResumeStrategy(Long pipelineRunId, PipelineRunJob pipelineRunJob) {
        if (!AtomicLevel.JOB.equals(pipelineRunJob.getAtomicLevel())
                && !AtomicLevel.CHUNK.equals(pipelineRunJob.getAtomicLevel())) {
            throw new IllegalArgumentException(
                    "Pipeline resume currently supports only failed JOB or CHUNK nodes: " + pipelineRunId);
        }
    }

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        return pipelineRunRepo.findById(pipelineRunId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run", "Pipeline run not found"));
    }

    private PipelineRunExecution getLatestExecution(PipelineRun pipelineRun) {
        if (pipelineRun.getLatestExecutionId() != null) {
            return pipelineRunExecutionRepo.findById(pipelineRun.getLatestExecutionId())
                    .orElse(null);
        }
        return pipelineRunExecutionRepo.findTopByPipelineRunIdOrderByExecutionNoDesc(pipelineRun.getId())
                .orElse(null);
    }

    private PipelineRunExecution getPipelineRunExecution(Long pipelineRunExecutionId) {
        return pipelineRunExecutionRepo.findById(pipelineRunExecutionId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run execution", "Pipeline run execution not found"));
    }

    private void validateStoppablePipelineRun(Long pipelineRunId, PipelineRunExecution latestExecution) {
        if (latestExecution == null) {
            throw new IllegalArgumentException("Pipeline run has no execution to stop: " + pipelineRunId);
        }
        if (!isStoppableStatus(latestExecution.getStatus())) {
            throw new IllegalArgumentException("Only in-flight pipeline runs can be stopped: " + pipelineRunId);
        }
    }

    private void validateDeletablePipelineRun(Long pipelineRunId, PipelineRun pipelineRun,
            PipelineRunExecution latestExecution) {
        PipelineRunStatus pipelineRunStatus = latestExecution == null ? pipelineRun.getStatus() : latestExecution.getStatus();
        if (!isDeletableStatus(pipelineRunStatus)) {
            throw new IllegalArgumentException("Only terminal pipeline runs can be deleted: " + pipelineRunId);
        }
    }

    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        return pipelineDefinitionRepo.findById(pipelineId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    private Map<Long, PipelineRunExecutionJob> getExecutionJobsByRunJobId(Long pipelineRunExecutionId) {
        return pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .collect(Collectors.toMap(
                        PipelineRunExecutionJob::getPipelineRunJobId,
                        executionJob -> executionJob));
    }

    private Long findRunningBatchExecutionId(Long pipelineRunId, Long pipelineRunExecutionId) {
        Long currentExecutionId = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.STARTED.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getLastJobExecutionId)
                .filter(Objects::nonNull)
                .findFirst()
                .orElse(null);
        if (currentExecutionId != null) {
            return currentExecutionId;
        }

        return pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId).stream()
                .map(PipelineRunJob::getJobName)
                .flatMap(jobName -> jobExplorer.findRunningJobExecutions(jobName).stream())
                .filter(jobExecution -> matchesPipelineExecution(jobExecution, pipelineRunId, pipelineRunExecutionId))
                .map(JobExecution::getId)
                .max(Comparator.naturalOrder())
                .orElse(null);
    }

    private boolean matchesPipelineExecution(JobExecution jobExecution, Long pipelineRunId, Long pipelineRunExecutionId) {
        Long jobPipelineRunId = jobExecution.getJobParameters().getLong("pipeline.run.id");
        Long jobPipelineRunExecutionId = jobExecution.getJobParameters().getLong("pipeline.run.execution.id");
        return Objects.equals(pipelineRunId, jobPipelineRunId)
                && Objects.equals(pipelineRunExecutionId, jobPipelineRunExecutionId);
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

    private boolean isStopState(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.STOPPING
                || pipelineRunStatus == PipelineRunStatus.STOPPED;
    }
}
