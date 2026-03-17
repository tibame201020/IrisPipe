package irispipe.api;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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

import irispipe.core.service.PipelineExecutionService;
import irispipe.core.service.PipelineRunQueryService;
import irispipe.infrastructure.error.GlobalExceptionHandler;

@WebMvcTest(SyncPipelineAPI.class)
@Import(GlobalExceptionHandler.class)
class SyncPipelineAPIWebMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PipelineExecutionService pipelineExecutionService;

    @MockBean
    private PipelineRunQueryService pipelineRunQueryService;

    @Test
    void executeShouldRejectMissingPipelineId() throws Exception {
        mockMvc.perform(post("/api/v1/sync-pipeline")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                          "useAsyncLaucher": true
                        }
                        """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details", hasItem("pipelineId: pipelineId is required")));
    }

    @Test
    void getRecentShouldRejectInvalidLimit() throws Exception {
        mockMvc.perform(get("/api/v1/sync-pipeline/recent")
                .param("limit", "0"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details[0]").value(containsString("limit must be between 1 and 100")));
    }

    @Test
    void runtimeIllegalStateShouldReturnJson500() throws Exception {
        when(pipelineRunQueryService.getPipelineRunDetail(1L))
                .thenThrow(new IllegalStateException("Pipeline run topology mismatch: 1"));

        mockMvc.perform(get("/api/v1/sync-pipeline/1"))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.error").value("Illegal State"))
                .andExpect(jsonPath("$.message").value("Pipeline run topology mismatch: 1"));
    }
}
