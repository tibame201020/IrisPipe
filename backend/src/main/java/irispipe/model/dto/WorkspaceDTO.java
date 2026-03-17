package irispipe.model.dto;

import static irispipe.api.validation.RequestValidationPatterns.WORKSPACE_KEY;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public interface WorkspaceDTO {

    record WorkspaceUpsertRequest(
            @NotBlank(message = "workspaceKey is required")
            @Pattern(regexp = WORKSPACE_KEY, message = "workspaceKey must be 2-63 chars and contain only lowercase letters, numbers, '_' or '-'")
            String workspaceKey,
            @NotBlank(message = "workspaceName is required")
            String workspaceName) {
    }

    record WorkspaceInfo(
            Long id,
            String workspaceKey,
            String workspaceName,
            Boolean systemDefault) {
    }
}
