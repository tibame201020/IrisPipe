package custom.tibame201020.IrisPipe.api;

import java.util.List;

import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import custom.tibame201020.IrisPipe.dto.SyncConfigDTO;
import custom.tibame201020.IrisPipe.service.JobConfigService;

@RestController
@RequestMapping("/api/v1/sync-config")
public class SyncConfigAPI {
    private final JobConfigService jobConfigService;
    private final String configAcceptPath;
    public SyncConfigAPI(JobConfigService jobConfigService, Environment environment) {
        this.jobConfigService = jobConfigService;
        this.configAcceptPath = environment.getRequiredProperty("config.accept.path", String.class);
    }

    @GetMapping
    public List<String> listSyncConfig() {
        return jobConfigService.listSyncConfig(configAcceptPath);
    }

    @GetMapping
    public SyncConfigDTO.ConfigFileInfo getConfigDetail(@RequestParam("path") String path) {
        return jobConfigService.getConfigFileInfo(configAcceptPath, path);
    }

    @PostMapping(consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public SyncConfigDTO.ConfigFileInfo createConfig(
            @RequestParam("path") String path,
            @RequestParam("file") MultipartFile file) {
        return jobConfigService.syncConfigControl(configAcceptPath, path, file, SyncConfigDTO.SyncConfigFileOperation.CREATE);
    }

    @PutMapping(consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public SyncConfigDTO.ConfigFileInfo updateConfig(
            @RequestParam("path") String path,
            @RequestParam("file") MultipartFile file) {
                return jobConfigService.syncConfigControl(configAcceptPath, path, file, SyncConfigDTO.SyncConfigFileOperation.UPSERT);
    }

    @PatchMapping(consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public SyncConfigDTO.ConfigFileInfo patchConfig(
            @RequestParam("path") String path,
            @RequestParam("file") MultipartFile file) {
                return jobConfigService.syncConfigControl(configAcceptPath, path, file, SyncConfigDTO.SyncConfigFileOperation.UPDATE);
    }

    @DeleteMapping
    public void deleteConfig(@RequestParam("path") String path) {
        jobConfigService.deleteSyncConfig(configAcceptPath, path);
    }
}
