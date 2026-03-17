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

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;
import irispipe.model.dto.SyncPipelineDTO;

/**
 * Provides workspace-scoped query use cases for pipeline run summary, history,
 * recent activity, and detail views.
 */
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

    /**
     * Creates the run query service with repositories, folder metadata, and Spring
     * Batch read access.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineRunRepo pipeline run repository
     * @param pipelineRunExecutionRepo pipeline run execution repository
     * @param pipelineRunExecutionJobRepo pipeline run execution job repository
     * @param pipelineRunJobRepo pipeline run job repository
     * @param pipelineFolderService folder metadata helper
     * @param workspaceContextService current workspace resolver
     * @param jobExplorer Spring Batch job explorer
     */
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

    /**
     * Loads summary rows for the requested run ids that belong to the current
     * workspace.
     *
     * @param pipelineRunIds requested pipeline run ids
     * @return matching run summaries in request order, excluding missing runs
     */
    @Transactional(readOnly = true)
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRunSummaries(List<Long> pipelineRunIds) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunIds.stream()
                .map(pipelineRunId -> pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId))
                .flatMap(Optional::stream)
                .map(this::toPipelineRunSummaryInfo)
                .toList();
    }

    /**
     * Loads paged run history for one pipeline.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param limit requested page size
     * @param beforeRunId exclusive cursor for older runs
     * @return run summaries ordered by descending run id
     */
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

    /**
     * Loads recent pipeline runs in the current workspace.
     *
     * @param limit requested page size
     * @param beforeRunId exclusive cursor for older runs
     * @return run summaries ordered by descending run id
     */
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

    /**
     * Loads one pipeline run detail with latest-job projection and attempt timeline.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @return detailed run information for API responses
     */
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

    /**
     * Builds API job rows for one execution by combining logical run jobs,
     * execution-job rows, and optional Spring Batch step details.
     *
     * @param pipelineRunJobs logical run jobs
     * @param executionJobsByRunJobId execution jobs keyed by logical run job id
     * @param jobExecutionCache local cache for Spring Batch job executions
     * @return rendered job rows for API responses
     */
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

    /**
     * Groups execution-job rows by execution id and logical run job id.
     *
     * @param pipelineRunExecutions executions that belong to one pipeline run
     * @return nested map keyed by execution id and logical run job id
     */
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

    /**
     * Resolves the latest execution from preloaded executions and the run header.
     *
     * @param pipelineRun pipeline run header
     * @param pipelineRunExecutions executions ordered by execution number
     * @return latest execution, or {@code null} when none exists
     */
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

    /**
     * Loads one Spring Batch job execution with local request-scope caching.
     *
     * @param jobExecutionId Spring Batch job execution id
     * @param jobExecutionCache request-local cache
     * @return Spring Batch job execution, or {@code null} when id is null
     */
    private JobExecution getJobExecution(Long jobExecutionId, Map<Long, JobExecution> jobExecutionCache) {
        if (jobExecutionId == null) {
            return null;
        }
        if (!jobExecutionCache.containsKey(jobExecutionId)) {
            jobExecutionCache.put(jobExecutionId, jobExplorer.getJobExecution(jobExecutionId));
        }
        return jobExecutionCache.get(jobExecutionId);
    }

    /**
     * Resolves one pipeline run inside the current workspace.
     *
     * @param pipelineRunId pipeline run id
     * @return persisted pipeline run header
     */
    private PipelineRun getPipelineRun(Long pipelineRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run", "Pipeline run not found"));
    }

    /**
     * Renders one summary row for a persisted pipeline run.
     *
     * @param pipelineRun persisted pipeline run header
     * @return API summary row with folder metadata
     */
    private SyncPipelineDTO.PipelineRunSummaryInfo toPipelineRunSummaryInfo(PipelineRun pipelineRun) {
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.renderPublicFolderId(pipelineDefinition.getFolderId()),
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineRun);
    }

    /**
     * Resolves one pipeline definition inside the current workspace.
     *
     * @param pipelineId pipeline id
     * @return persisted pipeline definition
     */
    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    /**
     * Normalizes the page size used by history and recent queries.
     *
     * @param limit requested page size
     * @return validated page size
     */
    private int normalizeLimit(Integer limit) {
        if (limit == null) {
            return PipelineRunQueryDefaults.DEFAULT_LIMIT;
        }
        if (limit <= 0 || limit > PipelineRunQueryDefaults.MAX_LIMIT) {
            throw new IllegalArgumentException(PipelineRunQueryDefaults.LIMIT_VALIDATION_MESSAGE);
        }
        return limit;
    }
}
