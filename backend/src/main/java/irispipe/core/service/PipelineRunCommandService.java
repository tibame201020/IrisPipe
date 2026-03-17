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

@Service
public class PipelineRunCommandService {
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineRunSnapshotService pipelineRunSnapshotService;
    private final JobExplorer jobExplorer;
    private final JobMetadataService jobMetadataService;

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

    public List<PipelineRunJob> createPipelineRunJobs(Long pipelineRunId, List<SyncJobDefinition> syncJobs) {
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

    public List<PipelineRunExecutionJob> createResumePipelineRunExecutionJobs(Long pipelineRunExecutionId,
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
}
