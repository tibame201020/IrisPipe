package irispipe.api;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import irispipe.model.dto.SyncConfigDTO;
import irispipe.infrastructure.service.JobConfigService;

@RestController
@RequestMapping("/api/v1/sync-config")
public class SyncConfigAPI {
    private final JobConfigService jobConfigService;

    public SyncConfigAPI(JobConfigService jobConfigService) {
        this.jobConfigService = jobConfigService;
    }

    @GetMapping
    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        return jobConfigService.listSyncConfig();
    }

    @GetMapping("/{pipelineId}")
    public SyncConfigDTO.ConfigPipelineInfo getConfigDetail(@PathVariable("pipelineId") Long pipelineId) {
        return jobConfigService.getConfigFileInfo(pipelineId);
    }

    @PostMapping(consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    public SyncConfigDTO.ConfigPipelineInfo createConfig(
            @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.createSyncConfig(
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PostMapping(value = "/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @RequestParam(name = "folderId", required = false) Long folderId,
            @RequestParam("pipelineName") String pipelineName,
            @RequestParam(name = "format", required = false) String format,
            @RequestParam("file") MultipartFile file) {
        return jobConfigService.importSyncConfig(folderId, pipelineName, format, file);
    }

    @PutMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    public SyncConfigDTO.ConfigPipelineInfo updateConfig(
            @PathVariable("pipelineId") Long pipelineId,
            @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.updateSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PatchMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    public SyncConfigDTO.ConfigPipelineInfo patchConfig(
            @PathVariable("pipelineId") Long pipelineId,
            @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.patchSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PutMapping(value = "/{pipelineId}/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @PathVariable("pipelineId") Long pipelineId,
            @RequestParam(name = "folderId", required = false) Long folderId,
            @RequestParam("pipelineName") String pipelineName,
            @RequestParam(name = "format", required = false) String format,
            @RequestParam("file") MultipartFile file) {
        return jobConfigService.importSyncConfig(pipelineId, folderId, pipelineName, format, file);
    }

    @DeleteMapping("/{pipelineId}")
    public void deleteConfig(@PathVariable("pipelineId") Long pipelineId) {
        jobConfigService.deleteSyncConfig(pipelineId);
    }
}
