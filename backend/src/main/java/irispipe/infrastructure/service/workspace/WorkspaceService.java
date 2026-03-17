package irispipe.infrastructure.service.workspace;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.infrastructure.entity.workspace.Workspace;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.repo.folder.PipelineFolderRepo;
import irispipe.infrastructure.repo.workspace.WorkspaceRepo;
import irispipe.model.dto.WorkspaceDTO;

@Service
public class WorkspaceService {
    private static final String ROOT_FOLDER_NAME = "__root__";

    private final WorkspaceRepo workspaceRepo;
    private final PipelineFolderRepo pipelineFolderRepo;
    private final WorkspaceContextService workspaceContextService;

    public WorkspaceService(WorkspaceRepo workspaceRepo,
            PipelineFolderRepo pipelineFolderRepo,
            WorkspaceContextService workspaceContextService) {
        this.workspaceRepo = workspaceRepo;
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.workspaceContextService = workspaceContextService;
    }

    @Transactional(readOnly = true)
    public List<WorkspaceDTO.WorkspaceInfo> listWorkspaces() {
        return workspaceRepo.findAllByOrderByIdAsc().stream()
                .map(this::toWorkspaceInfo)
                .toList();
    }

    @Transactional(readOnly = true)
    public WorkspaceDTO.WorkspaceInfo getCurrentWorkspace() {
        return toWorkspaceInfo(workspaceContextService.getCurrentWorkspace());
    }

    @Transactional
    public WorkspaceDTO.WorkspaceInfo createWorkspace(String workspaceKey, String workspaceName) {
        String normalizedWorkspaceKey = normalizeWorkspaceKey(workspaceKey);
        String normalizedWorkspaceName = normalizeWorkspaceName(workspaceName);
        if (workspaceRepo.existsByWorkspaceKey(normalizedWorkspaceKey)) {
            throw new ConflictException("Workspace already exists");
        }

        LocalDateTime now = LocalDateTime.now();
        Workspace workspace = new Workspace();
        workspace.setWorkspaceKey(normalizedWorkspaceKey);
        workspace.setWorkspaceName(normalizedWorkspaceName);
        workspace.setSystemDefault(false);
        workspace.setCreatedAt(now);
        workspace.setUpdatedAt(now);
        Workspace savedWorkspace = workspaceRepo.save(workspace);

        PipelineFolder rootFolder = new PipelineFolder();
        rootFolder.setWorkspaceId(savedWorkspace.getId());
        rootFolder.setParentId(null);
        rootFolder.setFolderName(ROOT_FOLDER_NAME);
        rootFolder.setSystemRoot(true);
        rootFolder.setCreatedAt(now);
        rootFolder.setUpdatedAt(now);
        pipelineFolderRepo.save(rootFolder);

        return toWorkspaceInfo(savedWorkspace);
    }

    private WorkspaceDTO.WorkspaceInfo toWorkspaceInfo(Workspace workspace) {
        return new WorkspaceDTO.WorkspaceInfo(
                workspace.getId(),
                workspace.getWorkspaceKey(),
                workspace.getWorkspaceName(),
                workspace.getSystemDefault());
    }

    private String normalizeWorkspaceKey(String workspaceKey) {
        if (workspaceKey == null || workspaceKey.isBlank()) {
            throw new IllegalArgumentException("workspaceKey is required");
        }

        String normalized = workspaceKey.trim().toLowerCase(Locale.ROOT);
        if (!normalized.matches("[a-z0-9][a-z0-9_-]{1,62}")) {
            throw new IllegalArgumentException(
                    "workspaceKey must be 2-63 chars and contain only lowercase letters, numbers, '_' or '-'");
        }
        return normalized;
    }

    private String normalizeWorkspaceName(String workspaceName) {
        if (workspaceName == null || workspaceName.isBlank()) {
            throw new IllegalArgumentException("workspaceName is required");
        }
        return workspaceName.trim();
    }
}
