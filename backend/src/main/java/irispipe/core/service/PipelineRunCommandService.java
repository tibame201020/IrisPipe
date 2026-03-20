package irispipe.core.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;
import irispipe.infrastructure.service.runtime.JobMetadataService;
import irispipe.infrastructure.service.runtime.PipelineRunSnapshotService;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;
import irispipe.model.SyncJobDefinition;

/**
 * Persists pipeline run headers, executions, logical run jobs, and execution-job
 * rows for command flows.
 */
@Service
public class PipelineRunCommandService {
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineRunSnapshotService pipelineRunSnapshotService;
    private final JobExplorer jobExplorer;
    private final JobMetadataService jobMetadataService;

    /**
     * Creates the command-side persistence helper for pipeline run aggregates.
     *
     * @param pipelineRunRepo pipeline run repository
     * @param pipelineRunExecutionRepo pipeline run execution repository
     * @param pipelineRunExecutionJobRepo pipeline run execution job repository
     * @param pipelineRunJobRepo pipeline run job repository
     * @param pipelineRunSnapshotService snapshot cleanup helper
     * @param jobExplorer Spring Batch job explorer
     * @param jobMetadataService Spring Batch metadata cleanup helper
     */
    public PipelineRunCommandService(PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineRunSnapshotService pipelineRunSnapshotService,
            JobExplorer jobExplorer,
            JobMetadataService jobMetadataService) {
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineRunSnapshotService = pipelineRunSnapshotService;
        this.jobExplorer = jobExplorer;
        this.jobMetadataService = jobMetadataService;
    }

    /**
     * Creates a new logical pipeline run header.
     *
     * @param pipelineDefinition pipeline definition used to seed workspace and pipeline ids
     * @param requestedAsync whether the run was requested asynchronously
     * @param rerunFromPipelineRunId source run id for rerun, or {@code null}
     * @return persisted pipeline run header
     */
    public PipelineRun createPipelineRun(PipelineDefinition pipelineDefinition, boolean requestedAsync,
            Long rerunFromPipelineRunId) {
        LocalDateTime now = LocalDateTime.now();

        PipelineRun pipelineRun = new PipelineRun();
        pipelineRun.setWorkspaceId(pipelineDefinition.getWorkspaceId());
        pipelineRun.setPipelineId(pipelineDefinition.getId());
        pipelineRun.setRerunFromPipelineRunId(rerunFromPipelineRunId);
        pipelineRun.setLatestExecutionId(null);
        pipelineRun.setRequestedAsync(requestedAsync);
        pipelineRun.setStatus(PipelineRunStatus.STARTING);
        pipelineRun.setCreatedAt(now);
        pipelineRun.setStartTime(now);
        pipelineRun.setUpdatedAt(now);
        return pipelineRunRepo.save(pipelineRun);
    }

    /**
     * Creates the logical run jobs for one pipeline run.
     *
     * @param pipelineRunId pipeline run id
     * @param syncJobs snapshot job payload used by the run
     * @return persisted logical run jobs ordered by job sequence
     */
    public List<PipelineRunJob> createPipelineRunJobs(Long pipelineRunId, List<SyncJobDefinition> syncJobs) {
        LocalDateTime now = LocalDateTime.now();
        return java.util.stream.IntStream.range(0, syncJobs.size())
                .mapToObj(jobSequence -> {
                    SyncJobDefinition syncJob = syncJobs.get(jobSequence);
                    PipelineRunJob pipelineRunJob = new PipelineRunJob();
                    pipelineRunJob.setPipelineRunId(pipelineRunId);
                    pipelineRunJob.setJobSequenceOrder(jobSequence);
                    pipelineRunJob.setStageName(syncJob.getStageName());
                    pipelineRunJob.setStageSequenceOrder(syncJob.getStageSequenceOrder());
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

    /**
     * Creates a new execution row and updates the run header latest projection.
     *
     * @param pipelineRun pipeline run header to mutate
     * @param requestedAsync whether the execution was requested asynchronously
     * @param executionKind execution kind to persist
     * @return persisted pipeline run execution
     */
    public PipelineRunExecution createPipelineRunExecution(PipelineRun pipelineRun, boolean requestedAsync,
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

    /**
     * Creates pending execution jobs for an initial execution.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @param pipelineRunJobs logical run jobs for the pipeline run
     * @return persisted execution jobs ordered by logical job order
     */
    public List<PipelineRunExecutionJob> createInitialPipelineRunExecutionJobs(Long pipelineRunExecutionId,
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

    /**
     * Creates execution jobs for a resume execution and marks completed prefix jobs
     * as skipped.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @param pipelineRunJobs logical run jobs for the pipeline run
     * @param latestExecutionJobsByRunJobId latest execution jobs keyed by run job id
     * @param resumeJobSequence zero-based resume start sequence
     * @return persisted execution jobs ordered by logical job order
     */
    public List<PipelineRunExecutionJob> createResumePipelineRunExecutionJobs(Long pipelineRunExecutionId,
            List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId,
            int resumeStageSequenceOrder) {
        LocalDateTime now = LocalDateTime.now();
        return java.util.stream.IntStream.range(0, pipelineRunJobs.size())
                .mapToObj(jobSequence -> {
                    PipelineRunJob pipelineRunJob = pipelineRunJobs.get(jobSequence);
                    PipelineRunExecutionJob previousExecutionJob = latestExecutionJobsByRunJobId.get(pipelineRunJob.getId());
                    boolean previouslyCompleted = previousExecutionJob != null
                            && (PipelineRunStatus.COMPLETED.equals(previousExecutionJob.getStatus())
                                    || PipelineRunStatus.SKIPPED.equals(previousExecutionJob.getStatus()));
                    boolean shouldSkip = previouslyCompleted
                            && pipelineRunJob.getStageSequenceOrder() <= resumeStageSequenceOrder;

                    PipelineRunExecutionJob pipelineRunExecutionJob = new PipelineRunExecutionJob();
                    pipelineRunExecutionJob.setPipelineRunExecutionId(pipelineRunExecutionId);
                    pipelineRunExecutionJob.setPipelineRunJobId(pipelineRunJob.getId());
                    pipelineRunExecutionJob.setStatus(shouldSkip
                            ? PipelineRunStatus.SKIPPED
                            : PipelineRunStatus.PENDING);
                    pipelineRunExecutionJob.setRootJobInstanceId(shouldSkip
                            ? previousExecutionJob == null
                                    ? pipelineRunJob.getRootJobInstanceId()
                                    : previousExecutionJob.getRootJobInstanceId()
                            : null);
                    pipelineRunExecutionJob.setLastJobExecutionId(shouldSkip
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

    /**
     * Deletes one pipeline run aggregate and associated Spring Batch metadata.
     *
     * @param pipelineRun persisted pipeline run header to delete
     */
    public void deletePipelineRun(PipelineRun pipelineRun) {
        Long pipelineRunId = pipelineRun.getId();
        List<PipelineRunExecution> pipelineRunExecutions = pipelineRunExecutionRepo
                .findByPipelineRunIdOrderByExecutionNoAsc(pipelineRunId);
        List<Long> pipelineRunExecutionIds = pipelineRunExecutions.stream()
                .map(PipelineRunExecution::getId)
                .toList();
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunExecutionIds.isEmpty()
                ? List.of()
                : pipelineRunExecutionJobRepo.findByPipelineRunExecutionIdIn(pipelineRunExecutionIds);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo
                .findByPipelineRunIdOrderByStageSequenceOrderAscJobSequenceOrderAsc(pipelineRunId);

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
}
