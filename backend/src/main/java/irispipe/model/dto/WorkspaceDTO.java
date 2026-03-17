package irispipe.model.dto;

import static irispipe.api.validation.RequestValidationPatterns.WORKSPACE_KEY;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

/**
 * Request and response DTOs for workspace APIs.
 */
public interface WorkspaceDTO {

    /**
     * Request body for workspace create operations.
     *
     * @param workspaceKey normalized workspace key
     * @param workspaceName user-facing workspace name
     */
    record WorkspaceUpsertRequest(
            @NotBlank(message = "workspaceKey is required")
            @Pattern(regexp = WORKSPACE_KEY, message = "workspaceKey must be 2-63 chars and contain only lowercase letters, numbers, '_' or '-'")
            String workspaceKey,
            @NotBlank(message = "workspaceName is required")
            String workspaceName) {
    }

    /**
     * Summary payload for one workspace.
     *
     * @param id workspace id
     * @param workspaceKey workspace key
     * @param workspaceName user-facing workspace name
     * @param systemDefault whether this is the default workspace
     */
    record WorkspaceInfo(
            Long id,
            String workspaceKey,
            String workspaceName,
            Boolean systemDefault) {
    }
}
