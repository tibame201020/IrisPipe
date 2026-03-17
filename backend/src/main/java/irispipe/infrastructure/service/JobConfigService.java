package irispipe.infrastructure.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncConfigDTO;

@Service
/**
 * Provides workspace-scoped pipeline config query, CRUD, and import operations.
 */
public class JobConfigService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;
    private final WorkspaceContextService workspaceContextService;
    private final PipelineConfigRequestPolicy pipelineConfigRequestPolicy;
    private final PipelineConfigImportService pipelineConfigImportService;
    private final PipelineConfigReadModelService pipelineConfigReadModelService;

    /**
     * Creates the config service with persistence, parsing, and workspace helpers.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineFolderService folder and folder-path helper service
     * @param pipelineDefinitionPersistenceService pipeline persistence helper service
     * @param workspaceContextService current workspace resolver
     * @param pipelineConfigRequestPolicy request normalization and validation policy
     * @param pipelineConfigImportService import parsing and content hashing helper
     * @param pipelineConfigReadModelService config hydration and detail rendering helper
     */
    public JobConfigService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineFolderService pipelineFolderService,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            WorkspaceContextService workspaceContextService,
            PipelineConfigRequestPolicy pipelineConfigRequestPolicy,
            PipelineConfigImportService pipelineConfigImportService,
            PipelineConfigReadModelService pipelineConfigReadModelService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.workspaceContextService = workspaceContextService;
        this.pipelineConfigRequestPolicy = pipelineConfigRequestPolicy;
        this.pipelineConfigImportService = pipelineConfigImportService;
        this.pipelineConfigReadModelService = pipelineConfigReadModelService;
    }

    /**
     * Lists pipeline configs visible in the current workspace.
     *
     * @return folder-aware pipeline summaries ordered by pipeline id
     */
    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId).stream()
                .map(pipelineFolderService::toConfigPipelineSummary)
                .toList();
    }

    /**
     * Loads the normalized job definitions for one pipeline.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return normalized job definitions used by execution and editor flows
     */
    public List<SyncJobDefinition> getSyncJobs(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        return pipelineConfigReadModelService.renderSyncJobs(pipelineId);
    }

    /**
     * Returns pipeline metadata and its full job payload.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return folder-aware pipeline detail for editor and inspection screens
     */
    public SyncConfigDTO.ConfigPipelineInfo getConfigFileInfo(Long pipelineId) {
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> jobs = pipelineConfigReadModelService.renderSyncJobs(pipelineId);
        return pipelineConfigReadModelService.renderConfigPipelineInfo(pipeline, jobs);
    }

    /**
     * Deletes a pipeline config in the current workspace.
     *
     * @param pipelineId pipeline id in the current workspace
     */
    @Transactional
    public void deleteSyncConfig(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        pipelineDefinitionPersistenceService.deletePipelineDefinition(pipelineId);
    }

    /**
     * Creates a new pipeline config in the target folder.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name
     * @param syncJobs full job payload for the new pipeline
     * @return persisted folder-aware pipeline detail
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo createSyncConfig(Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = pipelineConfigRequestPolicy.validateSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        if (pipelineDefinitionRepo.existsByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                targetFolderId,
                normalizedPipelineName)) {
            throw new ConflictException("Pipeline already exists in target folder");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineDefinition pipeline = new PipelineDefinition();
        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(targetFolderId);
        pipeline.setPipelineName(normalizedPipelineName);
        pipeline.setContentHash(pipelineConfigImportService.renderContentHash(validatedSyncJobs));
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), validatedSyncJobs);
        return getConfigFileInfo(savedPipeline.getId());
    }

    /**
     * Fully replaces an existing pipeline config and may rename or move it.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after replacement
     * @param syncJobs full replacement job payload
     * @return persisted folder-aware pipeline detail after replacement
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo updateSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = pipelineConfigRequestPolicy.validateSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(workspaceId, targetFolderId, normalizedPipelineName)
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), pipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });

        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(targetFolderId);
        pipeline.setPipelineName(normalizedPipelineName);
        pipeline.setContentHash(pipelineConfigImportService.renderContentHash(validatedSyncJobs));
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipelineId, validatedSyncJobs);
        return getConfigFileInfo(pipelineId);
    }

    /**
     * Applies the current PATCH contract for pipeline config updates.
     *
     * <p>The current PATCH behavior is intentionally aligned with full-replace update.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after patch
     * @param syncJobs full replacement job payload
     * @return persisted folder-aware pipeline detail after patch
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo patchSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        return updateSyncConfig(pipelineId, folderId, pipelineName, syncJobs);
    }

    /**
     * Creates a new pipeline from an imported YAML or JSON file.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return persisted folder-aware pipeline detail
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);

        if (pipelineDefinitionRepo.existsByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                persistedConfig.folderId(),
                persistedConfig.pipelineName())) {
            throw new ConflictException("Pipeline already exists in target folder");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineDefinition pipeline = new PipelineDefinition();
        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(persistedConfig.folderId());
        pipeline.setPipelineName(persistedConfig.pipelineName());
        pipeline.setContentHash(persistedConfig.contentHash());
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), persistedConfig.syncJobs());
        return getConfigFileInfo(savedPipeline.getId());
    }

    /**
     * Replaces an existing pipeline from an imported YAML or JSON file.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after replacement
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return persisted folder-aware pipeline detail after import replacement
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long pipelineId, Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);

        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                persistedConfig.folderId(),
                persistedConfig.pipelineName())
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), pipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });

        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(persistedConfig.folderId());
        pipeline.setPipelineName(persistedConfig.pipelineName());
        pipeline.setContentHash(persistedConfig.contentHash());
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipelineId, persistedConfig.syncJobs());
        return getConfigFileInfo(pipelineId);
    }

    /**
     * Resolves a pipeline in the current workspace.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return persisted pipeline definition
     */
    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }
}
