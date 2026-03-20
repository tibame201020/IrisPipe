package irispipe.core.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.context.ApplicationEventPublisher;
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
import irispipe.infrastructure.service.config.PipelineConfigService;
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.infrastructure.service.runtime.PipelineRunSnapshotService;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncPipelineDTO;
import irispipe.observability.event.PipelineRunTriggeredObservationEvent;

/**
 * Coordinates workspace-scoped pipeline run commands and delegates persistence,
 * policy, snapshot, and launch concerns to narrower collaborators.
 */
@Service
public class PipelineExecutionService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineConfigService pipelineConfigService;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineRunSnapshotService pipelineRunSnapshotService;
    private final WorkspaceContextService workspaceContextService;
    private final ApplicationEventPublisher applicationEventPublisher;
    private final PipelineRunCommandService pipelineRunCommandService;
    private final PipelineRunControlPolicy pipelineRunControlPolicy;
    private final PipelineRunLaunchService pipelineRunLaunchService;
    @PersistenceContext
    private EntityManager entityManager;

    /**
     * Creates the execution facade with repositories, workspace resolution, and
     * command-side collaborators.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineRunRepo pipeline run repository
     * @param pipelineRunExecutionRepo pipeline run execution repository
     * @param pipelineRunExecutionJobRepo pipeline run execution job repository
     * @param pipelineRunJobRepo pipeline run job repository
     * @param pipelineConfigService pipeline config read helper
     * @param pipelineFolderService folder metadata helper
     * @param pipelineRunSnapshotService snapshot persistence helper
     * @param workspaceContextService current workspace resolver
     * @param applicationEventPublisher observation event publisher
     * @param pipelineRunCommandService run persistence command helper
     * @param pipelineRunControlPolicy execution control policy helper
     * @param pipelineRunLaunchService Spring Batch launch and stop helper
     */
    public PipelineExecutionService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineConfigService pipelineConfigService,
            PipelineFolderService pipelineFolderService,
            PipelineRunSnapshotService pipelineRunSnapshotService,
            WorkspaceContextService workspaceContextService,
            ApplicationEventPublisher applicationEventPublisher,
            PipelineRunCommandService pipelineRunCommandService,
            PipelineRunControlPolicy pipelineRunControlPolicy,
            PipelineRunLaunchService pipelineRunLaunchService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineConfigService = pipelineConfigService;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineRunSnapshotService = pipelineRunSnapshotService;
        this.workspaceContextService = workspaceContextService;
        this.applicationEventPublisher = applicationEventPublisher;
        this.pipelineRunCommandService = pipelineRunCommandService;
        this.pipelineRunControlPolicy = pipelineRunControlPolicy;
        this.pipelineRunLaunchService = pipelineRunLaunchService;
    }

    /**
     * Creates a new pipeline run from the current persisted pipeline definition.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param useAsyncLauncher optional async flag from the request payload
     * @return summary of the created pipeline run
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo execute(Long pipelineId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> syncJobs = pipelineConfigService.getSyncJobs(pipelineId);
        syncJobs.forEach(SyncJobDefinition::validate);

        PipelineRun pipelineRun = pipelineRunCommandService.createPipelineRun(pipelineDefinition, requestedAsync, null);
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.createSnapshot(
                pipelineRun.getId(),
                pipelineDefinition.getContentHash(),
                syncJobs);
        return startPipelineRun(pipelineDefinition, pipelineRun, snapshotSyncJobs, requestedAsync);
    }

    /**
     * Creates a new pipeline run by copying the source run snapshot.
     *
     * @param pipelineRunId source pipeline run id in the current workspace
     * @param useAsyncLauncher optional async flag from the request payload
     * @return summary of the created rerun
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo rerun(Long pipelineRunId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineRun sourcePipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(sourcePipelineRun.getPipelineId());
        PipelineRun pipelineRun = pipelineRunCommandService.createPipelineRun(
                pipelineDefinition,
                requestedAsync,
                sourcePipelineRun.getId());
        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.copySnapshot(
                sourcePipelineRun.getId(),
                pipelineRun.getId());
        return startPipelineRun(pipelineDefinition, pipelineRun, snapshotSyncJobs, requestedAsync);
    }

    /**
     * Creates a resume execution for one existing pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @param useAsyncLauncher optional async flag from the request payload
     * @return summary of the resumed pipeline run
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo resume(Long pipelineRunId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateResumablePipelineRun(pipelineRunId, latestExecution);

        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.getSnapshotSyncJobs(pipelineRunId);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo
                .findByPipelineRunIdOrderByStageSequenceOrderAscJobSequenceOrderAsc(pipelineRunId);
        pipelineRunControlPolicy.validatePipelineRunTopology(pipelineRunId, snapshotSyncJobs, pipelineRunJobs);

        Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId = getExecutionJobsByRunJobId(latestExecution.getId());
        int resumeStageSequenceOrder = pipelineRunControlPolicy.findResumeStageSequenceOrder(
                pipelineRunId,
                latestExecution,
                pipelineRunJobs,
                latestExecutionJobsByRunJobId);
        pipelineRunControlPolicy.validateResumeStrategy(
                pipelineRunId,
                pipelineRunJobs,
                latestExecutionJobsByRunJobId,
                resumeStageSequenceOrder);

        PipelineRunExecution pipelineRunExecution = pipelineRunCommandService.createPipelineRunExecution(
                pipelineRun,
                requestedAsync,
                PipelineRunExecutionKind.RESUME);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunCommandService
                .createResumePipelineRunExecutionJobs(
                        pipelineRunExecution.getId(),
                        pipelineRunJobs,
                        latestExecutionJobsByRunJobId,
                        resumeStageSequenceOrder);

        pipelineRunLaunchService.launch(
                new PipelineRunLaunchRequest(
                        pipelineRun.getPipelineId(),
                        snapshotSyncJobs,
                        pipelineRunExecution,
                        pipelineRunJobs,
                        pipelineRunExecutionJobs),
                requestedAsync);
        if (!requestedAsync) {
            pipelineRunLaunchService.awaitExecutionProjection(pipelineRunExecution.getId());
        }
        return renderSummary(pipelineDefinition, pipelineRunId);
    }

    /**
     * Requests stop for the latest execution of one pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @return summary of the pipeline run after the stop request is recorded
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo stop(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateStoppablePipelineRun(pipelineRunId, latestExecution);

        pipelineRunLaunchService.requestStop(pipelineRunId, latestExecution);
        return renderSummary(pipelineDefinition, pipelineRunId);
    }

    /**
     * Deletes one pipeline run after delete guard validation passes.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     */
    @Transactional
    public void deletePipelineRun(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateDeletablePipelineRun(pipelineRunId, pipelineRun, latestExecution);
        pipelineRunCommandService.deletePipelineRun(pipelineRun);
    }

    /**
     * Creates the initial run jobs and execution, publishes observation, and
     * launches the run from the first job.
     *
     * @param pipelineDefinition persisted pipeline definition
     * @param pipelineRun created pipeline run header
     * @param syncJobs snapshot job payload used by the run
     * @param requestedAsync whether the run should be launched asynchronously
     * @return summary of the started pipeline run
     */
    private SyncPipelineDTO.PipelineRunSummaryInfo startPipelineRun(PipelineDefinition pipelineDefinition,
            PipelineRun pipelineRun, List<SyncJobDefinition> syncJobs, boolean requestedAsync) {
        syncJobs.forEach(SyncJobDefinition::validate);

        List<PipelineRunJob> pipelineRunJobs = pipelineRunCommandService.createPipelineRunJobs(pipelineRun.getId(), syncJobs);
        PipelineRunExecution pipelineRunExecution = pipelineRunCommandService.createPipelineRunExecution(
                pipelineRun,
                requestedAsync,
                PipelineRunExecutionKind.INITIAL);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunCommandService
                .createInitialPipelineRunExecutionJobs(
                        pipelineRunExecution.getId(),
                        pipelineRunJobs);
        applicationEventPublisher.publishEvent(new PipelineRunTriggeredObservationEvent(requestedAsync));

        pipelineRunLaunchService.launch(
                new PipelineRunLaunchRequest(
                        pipelineDefinition.getId(),
                        syncJobs,
                        pipelineRunExecution,
                        pipelineRunJobs,
                        pipelineRunExecutionJobs),
                requestedAsync);
        if (!requestedAsync) {
            pipelineRunLaunchService.awaitExecutionProjection(pipelineRunExecution.getId());
        }
        return renderSummary(pipelineDefinition, pipelineRun.getId());
    }

    /**
     * Resolves one pipeline run inside the current workspace.
     *
     * @param pipelineRunId pipeline run id
     * @return persisted pipeline run
     */
    private PipelineRun getPipelineRun(Long pipelineRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline run", "Pipeline run not found"));
    }

    /**
     * Resolves the latest execution for one pipeline run.
     *
     * @param pipelineRun persisted pipeline run header
     * @return latest execution, or {@code null} when no execution exists
     */
    private PipelineRunExecution getLatestExecution(PipelineRun pipelineRun) {
        if (pipelineRun.getLatestExecutionId() != null) {
            return pipelineRunExecutionRepo.findById(pipelineRun.getLatestExecutionId())
                    .orElse(null);
        }
        return pipelineRunExecutionRepo.findTopByPipelineRunIdOrderByExecutionNoDesc(pipelineRun.getId())
                .orElse(null);
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
     * Indexes execution jobs by logical run job id for one execution.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @return execution job map keyed by pipeline run job id
     */
    private Map<Long, PipelineRunExecutionJob> getExecutionJobsByRunJobId(Long pipelineRunExecutionId) {
        return pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .collect(Collectors.toMap(
                        PipelineRunExecutionJob::getPipelineRunJobId,
                        executionJob -> executionJob));
    }

    /**
     * Renders one run summary with folder metadata from the current pipeline
     * definition.
     *
     * @param pipelineDefinition persisted pipeline definition
     * @param pipelineRunId pipeline run id
     * @return run summary for API responses
     */
    private SyncPipelineDTO.PipelineRunSummaryInfo renderSummary(PipelineDefinition pipelineDefinition, Long pipelineRunId) {
        entityManager.clear();
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.renderPublicFolderId(pipelineDefinition.getFolderId()),
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineRun,
                latestExecution);
    }
}
