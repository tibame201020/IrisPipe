package irispipe.core.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    public SyncPipelineDTO.PipelineRunSummaryInfo resume(Long pipelineRunId, Boolean useAsyncLauncher) {
        boolean requestedAsync = Boolean.TRUE.equals(useAsyncLauncher);
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateResumablePipelineRun(pipelineRunId, latestExecution);

        List<SyncJobDefinition> snapshotSyncJobs = pipelineRunSnapshotService.getSnapshotSyncJobs(pipelineRunId);
        List<PipelineRunJob> pipelineRunJobs = pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId);
        pipelineRunControlPolicy.validatePipelineRunTopology(pipelineRunId, snapshotSyncJobs, pipelineRunJobs);

        Map<Long, PipelineRunExecutionJob> latestExecutionJobsByRunJobId = getExecutionJobsByRunJobId(latestExecution.getId());
        int resumeJobSequence = pipelineRunControlPolicy.findResumeJobSequence(
                pipelineRunId,
                latestExecution,
                pipelineRunJobs,
                latestExecutionJobsByRunJobId);
        pipelineRunControlPolicy.validateResumeStrategy(pipelineRunId, pipelineRunJobs.get(resumeJobSequence));

        PipelineRunExecution pipelineRunExecution = pipelineRunCommandService.createPipelineRunExecution(
                pipelineRun,
                requestedAsync,
                PipelineRunExecutionKind.RESUME);
        List<PipelineRunExecutionJob> pipelineRunExecutionJobs = pipelineRunCommandService
                .createResumePipelineRunExecutionJobs(
                        pipelineRunExecution.getId(),
                        pipelineRunJobs,
                        latestExecutionJobsByRunJobId,
                        resumeJobSequence);

        pipelineRunLaunchService.launch(
                new PipelineRunLaunchRequest(
                        pipelineRun.getPipelineId(),
                        snapshotSyncJobs,
                        pipelineRunExecution,
                        pipelineRunJobs,
                        pipelineRunExecutionJobs,
                        resumeJobSequence),
                requestedAsync);
        return renderSummary(pipelineDefinition, pipelineRunId);
    }

    public SyncPipelineDTO.PipelineRunSummaryInfo stop(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineDefinition pipelineDefinition = getPipelineDefinition(pipelineRun.getPipelineId());
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateStoppablePipelineRun(pipelineRunId, latestExecution);

        pipelineRunLaunchService.requestStop(pipelineRunId, latestExecution);
        return renderSummary(pipelineDefinition, pipelineRunId);
    }

    @Transactional
    public void deletePipelineRun(Long pipelineRunId) {
        PipelineRun pipelineRun = getPipelineRun(pipelineRunId);
        PipelineRunExecution latestExecution = getLatestExecution(pipelineRun);
        pipelineRunControlPolicy.validateDeletablePipelineRun(pipelineRunId, pipelineRun, latestExecution);
        pipelineRunCommandService.deletePipelineRun(pipelineRun);
    }

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
                        pipelineRunExecutionJobs,
                        0),
                requestedAsync);
        return renderSummary(pipelineDefinition, pipelineRun.getId());
    }

    private PipelineRun getPipelineRun(Long pipelineRunId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineRunRepo.findByIdAndWorkspaceId(pipelineRunId, workspaceId)
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
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    private Map<Long, PipelineRunExecutionJob> getExecutionJobsByRunJobId(Long pipelineRunExecutionId) {
        return pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .collect(Collectors.toMap(
                        PipelineRunExecutionJob::getPipelineRunJobId,
                        executionJob -> executionJob));
    }

    private SyncPipelineDTO.PipelineRunSummaryInfo renderSummary(PipelineDefinition pipelineDefinition, Long pipelineRunId) {
        return SyncPipelineDTO.PipelineRunSummaryInfo.render(
                pipelineDefinition,
                pipelineFolderService.renderPublicFolderId(pipelineDefinition.getFolderId()),
                pipelineFolderService.buildFolderPath(pipelineDefinition.getFolderId()),
                getPipelineRun(pipelineRunId));
    }
}
