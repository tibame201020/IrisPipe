package irispipe.infrastructure.service.folder;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.repo.folder.PipelineFolderRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;

/**
 * Resolves folder state, root aliases, and public folder path helpers for the
 * current workspace.
 */
@Service
public class PipelineFolderStructureService {
    private final PipelineFolderRepo pipelineFolderRepo;
    private final WorkspaceContextService workspaceContextService;

    /**
     * Creates the folder structure service.
     *
     * @param pipelineFolderRepo folder repository
     * @param workspaceContextService current workspace resolver
     */
    public PipelineFolderStructureService(PipelineFolderRepo pipelineFolderRepo,
            WorkspaceContextService workspaceContextService) {
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.workspaceContextService = workspaceContextService;
    }

    /**
     * Returns the current workspace id.
     *
     * @return current workspace id
     */
    @Transactional(readOnly = true)
    public Long getCurrentWorkspaceId() {
        return workspaceContextService.getCurrentWorkspaceId();
    }

    /**
     * Loads folder state for the current workspace.
     *
     * @return current workspace folder state
     */
    @Transactional(readOnly = true)
    public PipelineFolderWorkspaceState getCurrentWorkspaceState() {
        Long workspaceId = getCurrentWorkspaceId();
        return getWorkspaceState(workspaceId);
    }

    /**
     * Loads folder state for one workspace.
     *
     * @param workspaceId workspace id
     * @return workspace folder state
     */
    @Transactional(readOnly = true)
    public PipelineFolderWorkspaceState getWorkspaceState(Long workspaceId) {
        return new PipelineFolderWorkspaceState(
                workspaceId,
                pipelineFolderRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId));
    }

    /**
     * Resolves a folder id or the hidden root id when input is null.
     *
     * @param folderId folder id, or {@code null} for root
     * @return resolved folder id
     */
    @Transactional(readOnly = true)
    public Long resolveFolderIdOrRoot(Long folderId) {
        return getCurrentWorkspaceState().resolveFolderOrRoot(folderId).getId();
    }

    /**
     * Builds the public folder path for one folder or root.
     *
     * @param folderId folder id, or {@code null} for root
     * @return public folder path
     */
    @Transactional(readOnly = true)
    public String buildFolderPath(Long folderId) {
        return getCurrentWorkspaceState().buildFolderPath(folderId);
    }

    /**
     * Converts an internal folder id into the public API value.
     *
     * @param folderId internal folder id
     * @return public folder id, or {@code null} for root
     */
    @Transactional(readOnly = true)
    public Long renderPublicFolderId(Long folderId) {
        return getCurrentWorkspaceState().renderPublicFolderId(folderId);
    }
}
