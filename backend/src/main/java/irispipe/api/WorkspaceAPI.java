package irispipe.api;

import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import irispipe.infrastructure.service.workspace.WorkspaceService;
import irispipe.model.dto.WorkspaceDTO;
import jakarta.validation.Valid;

@RestController
@Validated
@RequestMapping("/api/v1/workspaces")
@Tag(name = "Workspace", description = "Workspace provisioning and workspace context discovery endpoints.")
public class WorkspaceAPI {
    private final WorkspaceService workspaceService;

    public WorkspaceAPI(WorkspaceService workspaceService) {
        this.workspaceService = workspaceService;
    }

    @GetMapping
    @Operation(summary = "List workspaces", description = "Returns all available workspaces.")
    public List<WorkspaceDTO.WorkspaceInfo> listWorkspaces() {
        return workspaceService.listWorkspaces();
    }

    @GetMapping("/current")
    @Operation(summary = "Get current workspace", description = "Resolves the current workspace from the optional workspace header or default workspace fallback.")
    public WorkspaceDTO.WorkspaceInfo getCurrentWorkspace() {
        return workspaceService.getCurrentWorkspace();
    }

    @PostMapping
    @Operation(summary = "Create workspace", description = "Creates a new workspace and its hidden root folder.")
    public WorkspaceDTO.WorkspaceInfo createWorkspace(@Valid @RequestBody WorkspaceDTO.WorkspaceUpsertRequest workspaceUpsertRequest) {
        return workspaceService.createWorkspace(
                workspaceUpsertRequest.workspaceKey(),
                workspaceUpsertRequest.workspaceName());
    }
}
