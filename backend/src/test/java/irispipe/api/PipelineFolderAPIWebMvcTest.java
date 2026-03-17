package irispipe.api;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;
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

import irispipe.infrastructure.error.GlobalExceptionHandler;
import irispipe.infrastructure.service.PipelineFolderService;

@WebMvcTest(PipelineFolderAPI.class)
@Import(GlobalExceptionHandler.class)
class PipelineFolderAPIWebMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PipelineFolderService pipelineFolderService;

    @Test
    void createFolderShouldRejectBlankFolderName() throws Exception {
        mockMvc.perform(post("/api/v1/pipeline-folders")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                          "folderName": " "
                        }
                        """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details", hasItem("folderName: folderName can not be blank")));
    }

    @Test
    void deletePreviewShouldRejectLimitAboveMax() throws Exception {
        mockMvc.perform(get("/api/v1/pipeline-folders/1/delete-preview")
                .param("limit", "201"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Error"))
                .andExpect(jsonPath("$.details[0]").value(containsString("limit must be between 1 and 200")));
    }
}
