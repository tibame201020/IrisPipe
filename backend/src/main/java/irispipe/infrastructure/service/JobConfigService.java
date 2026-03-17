package irispipe.infrastructure.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import irispipe.infrastructure.entity.PipelineDefinition;
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
    private final PipelineConfigCommandService pipelineConfigCommandService;

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
     * @param pipelineConfigCommandService command-side config mutation helper
     */
    public JobConfigService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineFolderService pipelineFolderService,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            WorkspaceContextService workspaceContextService,
            PipelineConfigRequestPolicy pipelineConfigRequestPolicy,
            PipelineConfigImportService pipelineConfigImportService,
            PipelineConfigReadModelService pipelineConfigReadModelService,
            PipelineConfigCommandService pipelineConfigCommandService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.workspaceContextService = workspaceContextService;
        this.pipelineConfigRequestPolicy = pipelineConfigRequestPolicy;
        this.pipelineConfigImportService = pipelineConfigImportService;
        this.pipelineConfigReadModelService = pipelineConfigReadModelService;
        this.pipelineConfigCommandService = pipelineConfigCommandService;
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
        PipelineConfigCommandService.PipelineConfigCommand command = buildJsonConfigCommand(folderId, pipelineName, syncJobs);
        Long pipelineId = pipelineConfigCommandService.createConfig(command);
        return getConfigFileInfo(pipelineId);
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
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        PipelineConfigCommandService.PipelineConfigCommand command = buildJsonConfigCommand(folderId, pipelineName, syncJobs);
        pipelineConfigCommandService.replaceConfig(pipeline, command);
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
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);
        PipelineConfigCommandService.PipelineConfigCommand command = toCommand(persistedConfig);
        Long pipelineId = pipelineConfigCommandService.createConfig(command);
        return getConfigFileInfo(pipelineId);
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
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);
        PipelineConfigCommandService.PipelineConfigCommand command = toCommand(persistedConfig);
        pipelineConfigCommandService.replaceConfig(pipeline, command);
        return getConfigFileInfo(pipelineId);
    }

    /**
     * Builds a normalized command payload from JSON config request fields.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name
     * @param syncJobs full job payload from the request
     * @return normalized command payload for create or replace flows
     */
    private PipelineConfigCommandService.PipelineConfigCommand buildJsonConfigCommand(Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = pipelineConfigRequestPolicy.validateSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        String contentHash = pipelineConfigImportService.renderContentHash(validatedSyncJobs);
        return new PipelineConfigCommandService.PipelineConfigCommand(
                targetFolderId,
                normalizedPipelineName,
                contentHash,
                validatedSyncJobs);
    }

    /**
     * Converts an import payload into the shared command payload used by create and replace flows.
     *
     * @param parsedConfig parsed import payload
     * @return normalized command payload for create or replace flows
     */
    private PipelineConfigCommandService.PipelineConfigCommand toCommand(PipelineConfigImportService.ParsedConfig parsedConfig) {
        return new PipelineConfigCommandService.PipelineConfigCommand(
                parsedConfig.folderId(),
                parsedConfig.pipelineName(),
                parsedConfig.contentHash(),
                parsedConfig.syncJobs());
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
