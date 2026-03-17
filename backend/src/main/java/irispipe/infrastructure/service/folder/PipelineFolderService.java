package irispipe.infrastructure.service.folder;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.model.dto.SyncConfigDTO;

@Service
public class PipelineFolderService {
    private final PipelineFolderReadModelService pipelineFolderReadModelService;
    private final PipelineFolderCommandService pipelineFolderCommandService;
    private final PipelineFolderStructureService pipelineFolderStructureService;

    public PipelineFolderService(PipelineFolderReadModelService pipelineFolderReadModelService,
            PipelineFolderCommandService pipelineFolderCommandService,
            PipelineFolderStructureService pipelineFolderStructureService) {
        this.pipelineFolderReadModelService = pipelineFolderReadModelService;
        this.pipelineFolderCommandService = pipelineFolderCommandService;
        this.pipelineFolderStructureService = pipelineFolderStructureService;
    }

    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        return pipelineFolderReadModelService.getPipelineTree();
    }

    public SyncConfigDTO.FolderInfo createFolder(Long parentFolderId, String folderName) {
        return pipelineFolderCommandService.createFolder(parentFolderId, folderName);
    }

    public SyncConfigDTO.FolderInfo updateFolder(Long folderId, Long parentFolderId, String folderName) {
        return pipelineFolderCommandService.updateFolder(folderId, parentFolderId, folderName);
    }

    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(Long folderId, Integer limit) {
        return pipelineFolderReadModelService.getDeletePreview(folderId, limit);
    }

    public void deleteFolder(Long folderId, boolean recursive) {
        pipelineFolderCommandService.deleteFolder(folderId, recursive);
    }

    public Long resolveFolderIdOrRoot(Long folderId) {
        return pipelineFolderStructureService.resolveFolderIdOrRoot(folderId);
    }

    public String buildFolderPath(Long folderId) {
        return pipelineFolderStructureService.buildFolderPath(folderId);
    }

    public Long renderPublicFolderId(Long folderId) {
        return pipelineFolderStructureService.renderPublicFolderId(folderId);
    }

    public SyncConfigDTO.ConfigPipelineSummary toConfigPipelineSummary(PipelineDefinition pipelineDefinition) {
        return pipelineFolderReadModelService.toConfigPipelineSummary(pipelineDefinition);
    }

    public SyncConfigDTO.FolderInfo toFolderInfo(PipelineFolder folder) {
        return pipelineFolderReadModelService.toFolderInfo(folder);
    }
}
