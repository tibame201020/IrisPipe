package irispipe.model.dto;

public interface WorkspaceDTO {

    record WorkspaceUpsertRequest(
            String workspaceKey,
            String workspaceName) {
    }

    record WorkspaceInfo(
            Long id,
            String workspaceKey,
            String workspaceName,
            Boolean systemDefault) {
    }
}
