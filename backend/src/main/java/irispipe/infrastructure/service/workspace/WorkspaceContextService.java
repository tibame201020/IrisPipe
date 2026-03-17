package irispipe.infrastructure.service.workspace;

import java.util.Locale;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import irispipe.infrastructure.entity.workspace.Workspace;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.workspace.WorkspaceRepo;

/**
 * Resolves the current workspace from request context with a default fallback.
 */
@Service
public class WorkspaceContextService {
    public static final String WORKSPACE_HEADER = "X-Iris-Workspace-Key";
    public static final String DEFAULT_WORKSPACE_KEY = "default";

    private final WorkspaceRepo workspaceRepo;

    /**
     * Creates the workspace context resolver.
     *
     * @param workspaceRepo workspace repository
     */
    public WorkspaceContextService(WorkspaceRepo workspaceRepo) {
        this.workspaceRepo = workspaceRepo;
    }

    /**
     * Resolves the current workspace entity.
     *
     * @return current workspace entity
     */
    @Transactional(readOnly = true)
    public Workspace getCurrentWorkspace() {
        String workspaceKey = getCurrentWorkspaceKey();
        return workspaceRepo.findByWorkspaceKey(workspaceKey)
                .orElseThrow(() -> new ResourceNotFoundException("workspace", "Workspace not found"));
    }

    /**
     * Resolves the current workspace id.
     *
     * @return current workspace id
     */
    @Transactional(readOnly = true)
    public Long getCurrentWorkspaceId() {
        return getCurrentWorkspace().getId();
    }

    /**
     * Resolves the current workspace key from request header or default fallback.
     *
     * @return normalized workspace key
     */
    public String getCurrentWorkspaceKey() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return DEFAULT_WORKSPACE_KEY;
        }

        String workspaceKey = requestAttributes.getRequest().getHeader(WORKSPACE_HEADER);
        if (workspaceKey == null || workspaceKey.isBlank()) {
            return DEFAULT_WORKSPACE_KEY;
        }
        return workspaceKey.trim().toLowerCase(Locale.ROOT);
    }
}
