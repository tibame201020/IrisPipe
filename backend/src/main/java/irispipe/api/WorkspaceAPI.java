package irispipe.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import irispipe.infrastructure.service.WorkspaceService;
import irispipe.model.dto.WorkspaceDTO;

@RestController
@RequestMapping("/api/v1/workspaces")
public class WorkspaceAPI {
    private final WorkspaceService workspaceService;

    public WorkspaceAPI(WorkspaceService workspaceService) {
        this.workspaceService = workspaceService;
    }

    @GetMapping
    public List<WorkspaceDTO.WorkspaceInfo> listWorkspaces() {
        return workspaceService.listWorkspaces();
    }

    @GetMapping("/current")
    public WorkspaceDTO.WorkspaceInfo getCurrentWorkspace() {
        return workspaceService.getCurrentWorkspace();
    }

    @PostMapping
    public WorkspaceDTO.WorkspaceInfo createWorkspace(@RequestBody WorkspaceDTO.WorkspaceUpsertRequest workspaceUpsertRequest) {
        return workspaceService.createWorkspace(
                workspaceUpsertRequest.workspaceKey(),
                workspaceUpsertRequest.workspaceName());
    }
}
