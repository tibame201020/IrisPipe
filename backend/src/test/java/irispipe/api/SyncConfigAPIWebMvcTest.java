package irispipe.api;

import static org.hamcrest.Matchers.hasItem;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import irispipe.infrastructure.error.GlobalExceptionHandler;
import irispipe.infrastructure.service.config.PipelineConfigService;

@WebMvcTest(SyncConfigAPI.class)
@Import(GlobalExceptionHandler.class)
class SyncConfigAPIWebMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PipelineConfigService pipelineConfigService;

    @Test
    void createConfigShouldRejectBlankPipelineName() throws Exception {
        mockMvc.perform(post("/api/v1/sync-config")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                          "pipelineName": " ",
                          "jobs": [{}]
                        }
                        """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details", hasItem("pipelineName: pipelineName can not be blank")));
    }

    @Test
    void importConfigShouldRejectUnsupportedFormat() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
                "file",
                "pipeline.json",
                MediaType.APPLICATION_JSON_VALUE,
                "{\"jobs\":[]}".getBytes());

        mockMvc.perform(multipart("/api/v1/sync-config/import")
                .file(file)
                .param("pipelineName", "orders-sync")
                .param("format", "xml"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details[0]").value(org.hamcrest.Matchers.containsString("format must be json, yaml, or yml")));
    }
}
