package irispipe.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import irispipe.infrastructure.service.PipelineFolderService;
import irispipe.model.dto.SyncConfigDTO;

@RestController
@RequestMapping("/api/v1")
public class PipelineFolderAPI {
    private final PipelineFolderService pipelineFolderService;

    public PipelineFolderAPI(PipelineFolderService pipelineFolderService) {
        this.pipelineFolderService = pipelineFolderService;
    }

    @GetMapping("/pipeline-tree")
    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        return pipelineFolderService.getPipelineTree();
    }

    @PostMapping("/pipeline-folders")
    public SyncConfigDTO.FolderInfo createFolder(@RequestBody SyncConfigDTO.FolderUpsertRequest folderUpsertRequest) {
        return pipelineFolderService.createFolder(folderUpsertRequest.parentFolderId(), folderUpsertRequest.folderName());
    }

    @PutMapping("/pipeline-folders/{folderId}")
    public SyncConfigDTO.FolderInfo updateFolder(@PathVariable("folderId") Long folderId,
            @RequestBody SyncConfigDTO.FolderUpsertRequest folderUpsertRequest) {
        return pipelineFolderService.updateFolder(folderId, folderUpsertRequest.parentFolderId(),
                folderUpsertRequest.folderName());
    }

    @GetMapping("/pipeline-folders/{folderId}/delete-preview")
    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(@PathVariable("folderId") Long folderId) {
        return pipelineFolderService.getDeletePreview(folderId);
    }

    @DeleteMapping("/pipeline-folders/{folderId}")
    public ResponseEntity<Void> deleteFolder(@PathVariable("folderId") Long folderId,
            @RequestParam(name = "recursive", defaultValue = "false") boolean recursive) {
        pipelineFolderService.deleteFolder(folderId, recursive);
        return ResponseEntity.noContent().build();
    }
}
