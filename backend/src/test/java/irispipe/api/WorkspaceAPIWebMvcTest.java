package irispipe.api;

import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import irispipe.infrastructure.error.GlobalExceptionHandler;
import irispipe.infrastructure.service.workspace.WorkspaceService;

@WebMvcTest(WorkspaceAPI.class)
@Import(GlobalExceptionHandler.class)
class WorkspaceAPIWebMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WorkspaceService workspaceService;

    @Test
    void createWorkspaceShouldRejectInvalidWorkspaceKey() throws Exception {
        mockMvc.perform(post("/api/v1/workspaces")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                          "workspaceKey": "INVALID KEY",
                          "workspaceName": "Desktop"
                        }
                        """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details",
                        hasItem("workspaceKey: workspaceKey must be 2-63 chars and contain only lowercase letters, numbers, '_' or '-'")));
    }
}
