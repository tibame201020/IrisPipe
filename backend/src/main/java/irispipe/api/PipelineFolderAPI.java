package irispipe.api;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import irispipe.infrastructure.service.folder.PipelineFolderConstants;
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.model.dto.SyncConfigDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;

/**
 * Exposes workspace-scoped folder tree and folder mutation endpoints.
 */
@RestController
@Validated
@RequestMapping("/api/v1")
@Tag(name = "Pipeline Folder", description = "Workspace-scoped folder tree endpoints for organizing pipelines.")
public class PipelineFolderAPI {
    private final PipelineFolderService pipelineFolderService;

    /**
     * Creates the folder controller.
     *
     * @param pipelineFolderService folder application service
     */
    public PipelineFolderAPI(PipelineFolderService pipelineFolderService) {
        this.pipelineFolderService = pipelineFolderService;
    }

    @GetMapping("/pipeline-tree")
    @Operation(summary = "Get pipeline tree", description = "Returns the current workspace folder tree and root-level pipelines.")
    /**
     * Loads the folder tree for the current workspace.
     *
     * @return folder tree info
     */
    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        return pipelineFolderService.getPipelineTree();
    }

    @PostMapping("/pipeline-folders")
    @Operation(summary = "Create folder", description = "Creates a folder under the requested parent folder in the current workspace.")
    /**
     * Creates one folder under root or another folder.
     *
     * @param folderUpsertRequest validated folder create payload
     * @return created folder info
     */
    public SyncConfigDTO.FolderInfo createFolder(@Valid @RequestBody SyncConfigDTO.FolderUpsertRequest folderUpsertRequest) {
        return pipelineFolderService.createFolder(folderUpsertRequest.parentFolderId(), folderUpsertRequest.folderName());
    }

    @PutMapping("/pipeline-folders/{folderId}")
    @Operation(summary = "Update folder", description = "Renames or moves a folder within the current workspace.")
    /**
     * Renames or moves one folder.
     *
     * @param folderId folder id in the current workspace
     * @param folderUpsertRequest validated folder update payload
     * @return updated folder info
     */
    public SyncConfigDTO.FolderInfo updateFolder(
            @PathVariable("folderId") @Positive(message = "folderId must be positive") Long folderId,
            @Valid @RequestBody SyncConfigDTO.FolderUpsertRequest folderUpsertRequest) {
        return pipelineFolderService.updateFolder(folderId, folderUpsertRequest.parentFolderId(),
                folderUpsertRequest.folderName());
    }

    @GetMapping("/pipeline-folders/{folderId}/delete-preview")
    @Operation(summary = "Preview recursive folder delete", description = "Returns affected folders, pipelines, and blockers before a recursive folder delete.")
    /**
     * Builds a recursive delete preview for one folder.
     *
     * @param folderId folder id in the current workspace
     * @param limit optional preview item limit
     * @return delete preview info
     */
    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(
            @PathVariable("folderId") @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam(name = "limit", required = false)
            @Min(value = 1, message = PipelineFolderConstants.DELETE_PREVIEW_LIMIT_VALIDATION_MESSAGE)
            @Max(value = PipelineFolderConstants.MAX_DELETE_PREVIEW_LIMIT, message = PipelineFolderConstants.DELETE_PREVIEW_LIMIT_VALIDATION_MESSAGE) Integer limit) {
        return pipelineFolderService.getDeletePreview(folderId, limit);
    }

    @DeleteMapping("/pipeline-folders/{folderId}")
    @Operation(summary = "Delete folder", description = "Deletes an empty folder or recursively deletes a folder subtree when recursive=true and no run-history blockers exist.")
    /**
     * Deletes one folder, optionally recursively.
     *
     * @param folderId folder id in the current workspace
     * @param recursive whether subtree deletion is explicitly requested
     * @return empty no-content response
     */
    public ResponseEntity<Void> deleteFolder(
            @PathVariable("folderId") @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam(name = "recursive", defaultValue = "false") boolean recursive) {
        pipelineFolderService.deleteFolder(folderId, recursive);
        return ResponseEntity.noContent().build();
    }
}
