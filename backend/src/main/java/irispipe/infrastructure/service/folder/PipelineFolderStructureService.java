package irispipe.infrastructure.service.folder;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.repo.PipelineFolderRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;

@Service
public class PipelineFolderStructureService {
    private final PipelineFolderRepo pipelineFolderRepo;
    private final WorkspaceContextService workspaceContextService;

    public PipelineFolderStructureService(PipelineFolderRepo pipelineFolderRepo,
            WorkspaceContextService workspaceContextService) {
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.workspaceContextService = workspaceContextService;
    }

    @Transactional(readOnly = true)
    public Long getCurrentWorkspaceId() {
        return workspaceContextService.getCurrentWorkspaceId();
    }

    @Transactional(readOnly = true)
    public PipelineFolderWorkspaceState getCurrentWorkspaceState() {
        Long workspaceId = getCurrentWorkspaceId();
        return getWorkspaceState(workspaceId);
    }

    @Transactional(readOnly = true)
    public PipelineFolderWorkspaceState getWorkspaceState(Long workspaceId) {
        return new PipelineFolderWorkspaceState(
                workspaceId,
                pipelineFolderRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId));
    }

    @Transactional(readOnly = true)
    public Long resolveFolderIdOrRoot(Long folderId) {
        return getCurrentWorkspaceState().resolveFolderOrRoot(folderId).getId();
    }

    @Transactional(readOnly = true)
    public String buildFolderPath(Long folderId) {
        return getCurrentWorkspaceState().buildFolderPath(folderId);
    }

    @Transactional(readOnly = true)
    public Long renderPublicFolderId(Long folderId) {
        return getCurrentWorkspaceState().renderPublicFolderId(folderId);
    }
}
