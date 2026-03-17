package irispipe.core.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;
import irispipe.model.dto.SyncPipelineDTO;

@Service
public class PipelineRunQueryService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineFolderService pipelineFolderService;
    private final WorkspaceContextService workspaceContextService;
    private final JobExplorer jobExplorer;

    public PipelineRunQueryService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineFolderService pipelineFolderService,
            WorkspaceContextService workspaceContextService,
            JobExplorer jobExplorer) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.workspaceContextService = workspaceContextService;
        this.jobExplorer = jobExplorer;
    }

    @Transactional(readOnly = true)
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRunSummaries(List<Long> pipelineRunIds) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunIds.stream()
                .map(pipelineRunId -> pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId))
                .flatMap(Optional::stream)
                .map(this::toPipelineRunSummaryInfo)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRunHistory(Long pipelineId, Integer limit, Long beforeRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        getPipelineDefinition(pipelineId);
        int normalizedLimit = normalizeLimit(limit);
        List<PipelineRun> pipelineRuns = beforeRunId == null
                ? pipelineRunRepo.findByWorkspaceIdAndPipelineIdOrderByIdDesc(
                        workspaceId,
                        pipelineId,
                        PageRequest.of(0, normalizedLimit))
                : pipelineRunRepo.findByWorkspaceIdAndPipelineIdAndIdLessThanOrderByIdDesc(
                        workspaceId,
                        pipelineId,
                        beforeRunId,
                        PageRequest.of(0, normalizedLimit));
        return pipelineRuns.stream()
                .map(this::toPipelineRunSummaryInfo)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getRecentPipelineRuns(Integer limit, Long beforeRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        int normalizedLimit = normalizeLimit(limit);
        List<PipelineRun> pipelineRuns = beforeRunId == null
                ? pipelineRunRepo.findAllByWorkspaceIdOrderByIdDesc(workspaceId, PageRequest.of(0, normalizedLimit))
                : pipelineRunRepo.findByWorkspaceIdAndIdLessThanOrderByIdDesc(
                        workspaceId,
                        beforeRunId,
                        PageRequest.of(0, normalizedLimit));
        return pipelineRuns.stream()
                .map(this::toPipelineRunSummaryInfo)
                .toList();
    }

    @Transactional(readOnly = true)
    public SyncPipelineDTO.PipelineRunDetailInfo getPipelineRunDetail(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);
        List<PipelineRunExecution> pipelineRunExecutions = pipelineRunExecutionRepo
                .findByPipelineRunIdOrderByExecutionNoAsc(pipelineRunId);
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun, pipelineRunExecutions);
        Map<Long, Map<Long, PipelineRunExecutionJob>> executionJobsByExecutionId = getExecutionJobsByExecutionId(
                pipelineRunExecutions);
        Map<Long, JobExecution> jobExecutionCache = new HashMap<>();

        List<SyncPipelineDTO.PipelineRunJobInfo> latestJobs = buildPipelineRunJobInfos(
                pipelineRunJobs,
                latestExecution == null
                        ? Map.of()
                        : executionJobsByExecutionId.getOrDefault(latestExecution.getId(), Map.of()),
                jobExecutionCache);
        List<SyncPipelineDTO.PipelineRunAttemptInfo> attempts = pipelineRunExecutions.stream()
                .map(pipelineRunExecution -> SyncPipelineDTO.PipelineRunAttemptInfo.render(
                        pipelineRunExecution,
                        buildPipelineRunJobInfos(
                                pipelineRunJobs,
                                executionJobsByExecutionId.getOrDefault(pipelineRunExecution.getId(), Map.of()),
                                jobExecutionCache)))
                .toList();

        return SyncPipelineDTO.PipelineRunDetailInfo.render(
                pipelineDefinition,
                pipelineFolderService.renderPublicFolderId(pipelineDefinition.getFolderId()),
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineRun,
                latestExecution,
                latestJobs,
                attempts);
    }

    private List<SyncPipelineDTO.PipelineRunJobInfo> buildPipelineRunJobInfos(List<PipelineRunJob> pipelineRunJobs,
            Map<Long, PipelineRunExecutionJob> executionJobsByRunJobId,
            Map<Long, JobExecution> jobExecutionCache) {
        return pipelineRunJobs.stream()
                .map(pipelineRunJob -> {
                    PipelineRunExecutionJob pipelineRunExecutionJob = executionJobsByRunJobId.get(pipelineRunJob.getId());
                    Long lastJobExecutionId = pipelineRunExecutionJob == null
                            ? pipelineRunJob.getLastJobExecutionId()
                            : pipelineRunExecutionJob.getLastJobExecutionId();

                    return SyncPipelineDTO.PipelineRunJobInfo.render(
                            pipelineRunJob,
                            pipelineRunExecutionJob,
                            getJobExecution(lastJobExecutionId, jobExecutionCache));
                })
                .toList();
    }

    private Map<Long, Map<Long, PipelineRunExecutionJob>> getExecutionJobsByExecutionId(
            List<PipelineRunExecution> pipelineRunExecutions) {
        List<Long> pipelineRunExecutionIds = pipelineRunExecutions.stream()
                .map(PipelineRunExecution::getId)
                .toList();
        if (pipelineRunExecutionIds.isEmpty()) {
            return Map.of();
        }

        return pipelineRunExecutionJobRepo.findByPipelineRunExecutionIdIn(pipelineRunExecutionIds).stream()
                .collect(Collectors.groupingBy(
                        PipelineRunExecutionJob::getPipelineRunExecutionId,
                        Collectors.toMap(
                                PipelineRunExecutionJob::getPipelineRunJobId,
                                executionJob -> executionJob,
                                (left, right) -> right)));
    }

    private PipelineRunExecution getLatestExecution(PipelineRun pipelineRun,
            List<PipelineRunExecution> pipelineRunExecutions) {
        if (pipelineRunExecutions.isEmpty()) {
            return null;
        }
        if (pipelineRun.getLatestExecutionId() != null) {
            PipelineRunExecution latestExecution = pipelineRunExecutions.stream()
                    .filter(pipelineRunExecution -> Objects.equals(
                            pipelineRunExecution.getId(),
                            pipelineRun.getLatestExecutionId()))
                    .findFirst()
                    .orElse(null);
            if (latestExecution != null) {
                return latestExecution;
            }
        }

        return pipelineRunExecutions.get(pipelineRunExecutions.size() - 1);
    }

    private JobExecution getJobExecution(Long jobExecutionId, Map<Long, JobExecution> jobExecutionCache) {
        if (jobExecutionId == null) {
            return null;
        }
        if (!jobExecutionCache.containsKey(jobExecutionId)) {
            jobExecutionCache.put(jobExecutionId, jobExplorer.getJobExecution(jobExecutionId));
        }
        return jobExecutionCache.get(jobExecutionId);
    }

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run", "Pipeline run not found"));
    }

    private SyncPipelineDTO.PipelineRunSummaryInfo toPipelineRunSummaryInfo(PipelineRun pipelineRun) {
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.renderPublicFolderId(pipelineDefinition.getFolderId()),
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineRun);
    }

    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    private int normalizeLimit(Integer limit) {
        if (limit == null) {
            return 20;
        }
        if (limit <= 0 || limit > 100) {
            throw new IllegalArgumentException("limit must be between 1 and 100");
        }
        return limit;
    }
}
