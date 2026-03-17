package irispipe.infrastructure.service.config;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;
import irispipe.model.SyncJobDefinition;

/**
 * Applies create and replace mutations for pipeline config header rows and job
 * payloads.
 */
@Service
public class PipelineConfigCommandService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;
    private final WorkspaceContextService workspaceContextService;

    /**
     * Creates the command service with pipeline repositories and workspace scope resolution.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineDefinitionPersistenceService pipeline job persistence helper
     * @param workspaceContextService current workspace resolver
     */
    public PipelineConfigCommandService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            WorkspaceContextService workspaceContextService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.workspaceContextService = workspaceContextService;
    }

    /**
     * Creates a new pipeline config row and persists its job payload.
     *
     * @param command normalized pipeline config payload
     * @return id of the created pipeline definition
     */
    public Long createConfig(PipelineConfigCommand command) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        ensureUniquePipelineName(workspaceId, command.folderId(), command.pipelineName(), null);

        LocalDateTime now = LocalDateTime.now();
        PipelineDefinition pipeline = new PipelineDefinition();
        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(command.folderId());
        pipeline.setPipelineName(command.pipelineName());
        pipeline.setContentHash(command.contentHash());
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), command.syncJobs());
        return savedPipeline.getId();
    }

    /**
     * Replaces an existing pipeline config row and its persisted job payload.
     *
     * @param pipeline existing pipeline definition to mutate
     * @param command normalized replacement payload
     */
    public void replaceConfig(PipelineDefinition pipeline, PipelineConfigCommand command) {
        ensureUniquePipelineName(pipeline.getWorkspaceId(), command.folderId(), command.pipelineName(), pipeline.getId());

        pipeline.setWorkspaceId(pipeline.getWorkspaceId());
        pipeline.setFolderId(command.folderId());
        pipeline.setPipelineName(command.pipelineName());
        pipeline.setContentHash(command.contentHash());
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipeline.getId(), command.syncJobs());
    }

    /**
     * Enforces unique pipeline names within one workspace folder.
     *
     * @param workspaceId workspace id
     * @param folderId resolved folder id
     * @param pipelineName normalized pipeline name
     * @param currentPipelineId existing pipeline id for replace flow, or {@code null} for create
     */
    private void ensureUniquePipelineName(Long workspaceId, Long folderId, String pipelineName, Long currentPipelineId) {
        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(workspaceId, folderId, pipelineName)
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), currentPipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });
    }

    /**
     * Holds the normalized pipeline config payload used by create and replace flows.
     *
     * @param folderId resolved target folder id
     * @param pipelineName normalized pipeline name
     * @param contentHash persisted content hash
     * @param syncJobs normalized job payload
     */
    public record PipelineConfigCommand(
            Long folderId,
            String pipelineName,
            String contentHash,
            List<SyncJobDefinition> syncJobs) {
    }
}
