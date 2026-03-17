package irispipe.infrastructure.service.folder;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.model.dto.SyncConfigDTO;

/**
 * Exposes folder-tree query and command use cases behind a small facade.
 */
@Service
public class PipelineFolderService {
    private final PipelineFolderReadModelService pipelineFolderReadModelService;
    private final PipelineFolderCommandService pipelineFolderCommandService;
    private final PipelineFolderStructureService pipelineFolderStructureService;

    /**
     * Creates the folder facade with read-model, command, and structure helpers.
     *
     * @param pipelineFolderReadModelService tree and preview query helper
     * @param pipelineFolderCommandService folder mutation helper
     * @param pipelineFolderStructureService folder structure and path helper
     */
    public PipelineFolderService(PipelineFolderReadModelService pipelineFolderReadModelService,
            PipelineFolderCommandService pipelineFolderCommandService,
            PipelineFolderStructureService pipelineFolderStructureService) {
        this.pipelineFolderReadModelService = pipelineFolderReadModelService;
        this.pipelineFolderCommandService = pipelineFolderCommandService;
        this.pipelineFolderStructureService = pipelineFolderStructureService;
    }

    /**
     * Loads the folder tree and root-level pipelines of the current workspace.
     *
     * @return folder tree DTO for config manager screens
     */
    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        return pipelineFolderReadModelService.getPipelineTree();
    }

    /**
     * Creates a folder under the requested parent folder or workspace root.
     *
     * @param parentFolderId parent folder id, or {@code null} for root
     * @param folderName folder name from the request
     * @return created folder info
     */
    public SyncConfigDTO.FolderInfo createFolder(Long parentFolderId, String folderName) {
        return pipelineFolderCommandService.createFolder(parentFolderId, folderName);
    }

    /**
     * Renames or moves one folder.
     *
     * @param folderId folder id to update
     * @param parentFolderId target parent folder id, or {@code null} for root
     * @param folderName target folder name
     * @return updated folder info
     */
    public SyncConfigDTO.FolderInfo updateFolder(Long folderId, Long parentFolderId, String folderName) {
        return pipelineFolderCommandService.updateFolder(folderId, parentFolderId, folderName);
    }

    /**
     * Builds a delete preview for one folder subtree.
     *
     * @param folderId folder id to inspect
     * @param limit optional preview item limit
     * @return delete preview including affected counts and blockers
     */
    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(Long folderId, Integer limit) {
        return pipelineFolderReadModelService.getDeletePreview(folderId, limit);
    }

    /**
     * Deletes one folder and optionally its subtree.
     *
     * @param folderId folder id to delete
     * @param recursive whether subtree deletion was explicitly approved
     */
    public void deleteFolder(Long folderId, boolean recursive) {
        pipelineFolderCommandService.deleteFolder(folderId, recursive);
    }

    /**
     * Resolves a folder id or returns the hidden root id of the current workspace.
     *
     * @param folderId public folder id, or {@code null}
     * @return resolved persisted folder id
     */
    public Long resolveFolderIdOrRoot(Long folderId) {
        return pipelineFolderStructureService.resolveFolderIdOrRoot(folderId);
    }

    /**
     * Renders the public folder path for one persisted folder id.
     *
     * @param folderId persisted folder id
     * @return public folder path
     */
    public String buildFolderPath(Long folderId) {
        return pipelineFolderStructureService.buildFolderPath(folderId);
    }

    /**
     * Converts one persisted folder id to the public folder id contract.
     *
     * @param folderId persisted folder id
     * @return public folder id, or {@code null} for root
     */
    public Long renderPublicFolderId(Long folderId) {
        return pipelineFolderStructureService.renderPublicFolderId(folderId);
    }

    /**
     * Renders one pipeline summary with folder metadata.
     *
     * @param pipelineDefinition persisted pipeline definition
     * @return folder-aware pipeline summary
     */
    public SyncConfigDTO.ConfigPipelineSummary toConfigPipelineSummary(PipelineDefinition pipelineDefinition) {
        return pipelineFolderReadModelService.toConfigPipelineSummary(pipelineDefinition);
    }

    /**
     * Renders one folder info row.
     *
     * @param folder persisted folder entity
     * @return folder info for API responses
     */
    public SyncConfigDTO.FolderInfo toFolderInfo(PipelineFolder folder) {
        return pipelineFolderReadModelService.toFolderInfo(folder);
    }
}
