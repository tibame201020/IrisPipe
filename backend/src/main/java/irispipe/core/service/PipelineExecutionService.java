package irispipe.core.service;

import java.time.LocalDateTime;
import java.util.List;

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
import irispipe.infrastructure.entity.PipelineRunJob;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.PipelineRunJobRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.infrastructure.service.ExecutionRecordService;
import irispipe.infrastructure.service.JobConfigService;
import irispipe.infrastructure.service.JobMetadataService;
import irispipe.infrastructure.service.PipelineRunLifecycleService;
import irispipe.infrastructure.service.PipelineRunSnapshotService;
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
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> syncJobs = jobConfigService.getSyncJobs(pipelineId);
        syncJobs.forEach(SyncJobDefinition::validate);

        PipelineRun pipelineRun = createPipelineRun(pipelineId, Boolean.TRUE.equals(useAsyncLauncher));
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.createSnapshot(
                pipelineRun.getId(),
                pipelineDefinition.getContentHash(),
                syncJobs);
        List<PipelineRunJob> pipelineRunJobs = createPipelineRunJobs(pipelineRun.getId(), snapshotSyncJobs);

        if (Boolean.TRUE.equals(useAsyncLauncher)) {
            pipelineTaskExecutor.execute(() -> executePipelineRun(pipelineId, snapshotSyncJobs, pipelineRunJobs));
            return SyncPipelineDTO.PipelineRunSummaryInfo.render(pipelineDefinition, getPipelineRun(pipelineRun.getId()));
        }

        executePipelineRun(pipelineId, snapshotSyncJobs, pipelineRunJobs);
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(pipelineDefinition, getPipelineRun(pipelineRun.getId()));
    }

    private void executePipelineRun(Long pipelineId, List<SyncJobDefinition> syncJobs, List<PipelineRunJob> pipelineRunJobs) {
        for (int jobSequence = 0; jobSequence < syncJobs.size(); jobSequence++) {
            SyncJobDefinition syncJob = syncJobs.get(jobSequence);
            PipelineRunJob pipelineRunJob = pipelineRunJobs.get(jobSequence);
            SyncJobContext syncJobContext = null;
            boolean closeSyncJobContext = true;
            try {
                syncJobContext = syncJobContextFactory.initialSyncJobContext(syncJob, executionRecordService);
                Job job = syncJobFactory.createBatchJob(syncJobContext);
                JobParameters jobParameters = new JobParametersBuilder()
                        .addLong("pipeline.run.job.id", pipelineRunJob.getId())
                        .addLong("pipeline.id", pipelineId, false)
                        .addLong("pipeline.run.id", pipelineRunJob.getPipelineRunId(), false)
                        .addLong("job.sequence", Long.valueOf(jobSequence), false)
                        .toJobParameters();

                JobExecution jobExecution = jobLauncher.run(job, jobParameters);
                closeSyncJobContext = false;

                if (!BatchStatus.COMPLETED.equals(jobExecution.getStatus())) {
                    return;
                }
            } catch (Exception e) {
                logger.error("pipeline {} stopped on job {}: {}", pipelineId, syncJob.getJobName(), e.getMessage());
                pipelineRunLifecycleService.markLaunchFailed(pipelineRunJob.getPipelineRunId(), pipelineRunJob.getId());
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
        List<SyncPipelineDTO.PipelineRunJobInfo> jobs = pipelineRunJobRepo
                .findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId)
                .stream()
                .map(pipelineRunJob -> SyncPipelineDTO.PipelineRunJobInfo.render(
                        pipelineRunJob,
                        pipelineRunJob.getLastJobExecutionId() == null
                                ? null
                                : jobExplorer.getJobExecution(pipelineRunJob.getLastJobExecutionId())))
                .toList();

        return SyncPipelineDTO.PipelineRunDetailInfo.render(pipelineDefinition, pipelineRun, jobs);
    }

    @Transactional
    public void deletePipelineRun(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);

        pipelineRunJobs.stream()
                .map(PipelineRunJob::getLastJobExecutionId)
                .filter(java.util.Objects::nonNull)
                .map(jobExplorer::getJobExecution)
                .filter(java.util.Objects::nonNull)
                .forEach(jobMetadataService::deleteByJobExecution);

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

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        return pipelineRunRepo.findById(pipelineRunId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run", "Pipeline run not found"));
    }

    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        return pipelineDefinitionRepo.findById(pipelineId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }
}
