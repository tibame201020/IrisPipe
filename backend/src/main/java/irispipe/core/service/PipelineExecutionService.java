package irispipe.core.service;

import java.time.LocalDateTime;
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
import org.springframework.batch.core.launch.JobLauncher;
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
import irispipe.infrastructure.service.PipelineRunLifecycleService;
import irispipe.infrastructure.service.PipelineRunSnapshotService;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncPipelineDTO;

@Service
public class PipelineExecutionService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JobLauncher jobLauncher;
    private final TaskExecutor pipelineTaskExecutor;
    private final JobExplorer jobExplorer;
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
    private final PipelineRunLifecycleService pipelineRunLifecycleService;
    private final PipelineRunSnapshotService pipelineRunSnapshotService;

    public PipelineExecutionService(JobLauncher jobLauncher,
            TaskExecutor pipelineTaskExecutor,
            JobExplorer jobExplorer,
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
            PipelineRunLifecycleService pipelineRunLifecycleService,
            PipelineRunSnapshotService pipelineRunSnapshotService) {
        this.jobLauncher = jobLauncher;
        this.pipelineTaskExecutor = pipelineTaskExecutor;
        this.jobExplorer = jobExplorer;
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
        this.pipelineRunLifecycleService = pipelineRunLifecycleService;
        this.pipelineRunSnapshotService = pipelineRunSnapshotService;
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo execute(Long pipelineId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> syncJobs = jobConfigService.getSyncJobs(pipelineId);
        syncJobs.forEach(SyncJobDefinition::validate);

        PipelineRun pipelineRun = createPipelineRun(pipelineId, requestedAsync);
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.createSnapshot(
                pipelineRun.getId(),
                pipelineDefinition.getContentHash(),
                syncJobs);
        List<PipelineRunJob> pipelineRunJobs = createPipelineRunJobs(pipelineRun.getId(), snapshotSyncJobs);
        PipelineRunExecution pipelineRunExecution = createPipelineRunExecution(pipelineRun, requestedAsync);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = createPipelineRunExecutionJobs(
                pipelineRunExecution.getId(),
                pipelineRunJobs);

        if (requestedAsync) {
            pipelineTaskExecutor.execute(
                    () -> executePipelineRun(pipelineId, snapshotSyncJobs, pipelineRunExecution, pipelineRunJobs,
                            pipelineRunExecutionJobs));
            return SyncPipelineDTO.PipelineRunSummaryInfo.render(pipelineDefinition, getPipelineRun(pipelineRun.getId()));
        }

        executePipelineRun(pipelineId, snapshotSyncJobs, pipelineRunExecution, pipelineRunJobs, pipelineRunExecutionJobs);
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(pipelineDefinition, getPipelineRun(pipelineRun.getId()));
    }

    private void executePipelineRun(Long pipelineId, List<SyncJobDefinition> syncJobs,
            PipelineRunExecution pipelineRunExecution, List<PipelineRunJob> pipelineRunJobs,
            List<PipelineRunExecutionJob> pipelineRunExecutionJobs) {
        for (int jobSequence = 0; jobSequence < syncJobs.size(); jobSequence++) {
            SyncJobDefinition syncJob = syncJobs.get(jobSequence);
            PipelineRunJob pipelineRunJob = pipelineRunJobs.get(jobSequence);
            PipelineRunExecutionJob pipelineRunExecutionJob = pipelineRunExecutionJobs.get(jobSequence);
            SyncJobContext syncJobContext = null;
            boolean closeSyncJobContext = true;
            try {
                syncJobContext = syncJobContextFactory.initialSyncJobContext(syncJob, executionRecordService);
                Job job = syncJobFactory.createBatchJob(syncJobContext);
                JobParameters jobParameters = new JobParametersBuilder()
                        .addLong("pipeline.run.job.id", pipelineRunJob.getId())
                        .addLong("pipeline.id", pipelineId, false)
                        .addLong("pipeline.run.id", pipelineRunJob.getPipelineRunId(), false)
                        .addLong("pipeline.run.execution.id", pipelineRunExecution.getId(), false)
                        .addLong("pipeline.run.execution.job.id", pipelineRunExecutionJob.getId(), false)
                        .addLong("job.sequence", Long.valueOf(jobSequence), false)
                        .toJobParameters();

                JobExecution jobExecution = jobLauncher.run(job, jobParameters);
                closeSyncJobContext = false;

                if (!BatchStatus.COMPLETED.equals(jobExecution.getStatus())) {
                    return;
                }
            } catch (Exception e) {
                logger.error("pipeline {} stopped on job {}: {}", pipelineId, syncJob.getJobName(), e.getMessage());
                pipelineRunLifecycleService.markLaunchFailed(
                        pipelineRunJob.getPipelineRunId(),
                        pipelineRunExecution.getId(),
                        pipelineRunJob.getId(),
                        pipelineRunExecutionJob.getId());
                return;
            } finally {
                if (closeSyncJobContext && syncJobContext != null) {
                    syncJobContext.close();
                }
            }
        }
    }

    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRunSummaries(List<Long> pipelineRunIds) {
        return pipelineRunIds.stream()
                .map(pipelineRunRepo::findById)
                .flatMap(java.util.Optional::stream)
                .map(pipelineRun -> SyncPipelineDTO.PipelineRunSummaryInfo.render(
                        getPipelineDefinition(pipelineRun.getPipelineId()),
                        pipelineRun))
                .toList();
    }

    public SyncPipelineDTO.PipelineRunDetailInfo getPipelineRunDetail(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        Map<Long, PipelineRunExecutionJob> executionJobsByRunJobId = latestExecution == null
                ? Map.of()
                : pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(latestExecution.getId()).stream()
                        .collect(Collectors.toMap(
                                PipelineRunExecutionJob::getPipelineRunJobId,
                                executionJob -> executionJob));

        List<SyncPipelineDTO.PipelineRunJobInfo> jobs = pipelineRunJobRepo
                .findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId)
                .stream()
                .map(pipelineRunJob -> {
                    PipelineRunExecutionJob executionJob = executionJobsByRunJobId.get(pipelineRunJob.getId());
                    Long lastJobExecutionId = executionJob == null
                            ? pipelineRunJob.getLastJobExecutionId()
                            : executionJob.getLastJobExecutionId();

                    return SyncPipelineDTO.PipelineRunJobInfo.render(
                            pipelineRunJob,
                            executionJob,
                            lastJobExecutionId == null ? null : jobExplorer.getJobExecution(lastJobExecutionId));
                })
                .toList();

        return SyncPipelineDTO.PipelineRunDetailInfo.render(pipelineDefinition, pipelineRun, latestExecution, jobs);
    }

    @Transactional
    public void deletePipelineRun(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
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

    private PipelineRun createPipelineRun(Long pipelineId, boolean requestedAsync) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = new PipelineRun();
        pipelineRun.setPipelineId(pipelineId);
        pipelineRun.setRerunFromPipelineRunId(null);
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

    private PipelineRunExecution createPipelineRunExecution(PipelineRun pipelineRun, boolean requestedAsync) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRunExecution pipelineRunExecution = new PipelineRunExecution();
        pipelineRunExecution.setPipelineRunId(pipelineRun.getId());
        pipelineRunExecution.setExecutionNo(1);
        pipelineRunExecution.setExecutionKind(PipelineRunExecutionKind.INITIAL);
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

    private List<PipelineRunExecutionJob> createPipelineRunExecutionJobs(Long pipelineRunExecutionId,
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

    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        return pipelineDefinitionRepo.findById(pipelineId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }
}
