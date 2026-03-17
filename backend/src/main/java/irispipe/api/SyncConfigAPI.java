package irispipe.api;

import static irispipe.api.validation.RequestValidationPatterns.IMPORT_FORMAT;
import static irispipe.api.validation.RequestValidationPatterns.PIPELINE_NAME;

import java.util.List;

import org.springframework.validation.annotation.Validated;
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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import irispipe.model.dto.SyncConfigDTO;
import irispipe.infrastructure.service.JobConfigService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/api/v1/sync-config")
@Tag(name = "Sync Config", description = "Workspace-scoped pipeline config management endpoints.")
public class SyncConfigAPI {
    private final JobConfigService jobConfigService;

    public SyncConfigAPI(JobConfigService jobConfigService) {
        this.jobConfigService = jobConfigService;
    }

    @GetMapping
    @Operation(summary = "List pipelines", description = "Returns pipeline config summaries for the current workspace.")
    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        return jobConfigService.listSyncConfig();
    }

    @GetMapping("/{pipelineId}")
    @Operation(summary = "Get pipeline config detail", description = "Returns the full pipeline config for the requested pipeline id.")
    public SyncConfigDTO.ConfigPipelineInfo getConfigDetail(@PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId) {
        return jobConfigService.getConfigFileInfo(pipelineId);
    }

    @PostMapping(consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Create pipeline config", description = "Creates a pipeline config in the current workspace from a JSON payload.")
    public SyncConfigDTO.ConfigPipelineInfo createConfig(
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.createSyncConfig(
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PostMapping(value = "/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Import pipeline config", description = "Creates a pipeline config from an uploaded JSON or YAML file.")
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @RequestParam(name = "folderId", required = false) @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam("pipelineName") @NotBlank(message = "pipelineName can not be blank") @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters") String pipelineName,
            @RequestParam(name = "format", required = false) @Pattern(regexp = IMPORT_FORMAT, message = "format must be json, yaml, or yml") String format,
            @RequestParam("file") MultipartFile file) {
        return jobConfigService.importSyncConfig(folderId, pipelineName, format, file);
    }

    @PutMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Replace pipeline config", description = "Replaces the full pipeline config for the requested pipeline id.")
    public SyncConfigDTO.ConfigPipelineInfo updateConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.updateSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PatchMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Patch pipeline config", description = "Applies a partial update to the pipeline config for the requested pipeline id.")
    public SyncConfigDTO.ConfigPipelineInfo patchConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return jobConfigService.patchSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.jobs());
    }

    @PutMapping(value = "/{pipelineId}/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Replace pipeline config from import", description = "Replaces an existing pipeline config from an uploaded JSON or YAML file.")
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @RequestParam(name = "folderId", required = false) @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam("pipelineName") @NotBlank(message = "pipelineName can not be blank") @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters") String pipelineName,
            @RequestParam(name = "format", required = false) @Pattern(regexp = IMPORT_FORMAT, message = "format must be json, yaml, or yml") String format,
            @RequestParam("file") MultipartFile file) {
        return jobConfigService.importSyncConfig(pipelineId, folderId, pipelineName, format, file);
    }

    @DeleteMapping("/{pipelineId}")
    @Operation(summary = "Delete pipeline config", description = "Deletes a pipeline config when it has no run history blockers.")
    public void deleteConfig(@PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId) {
        jobConfigService.deleteSyncConfig(pipelineId);
    }
}
