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
import irispipe.infrastructure.service.config.PipelineConfigService;
import irispipe.model.dto.SyncConfigDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

/**
 * Exposes workspace-scoped pipeline config CRUD and import endpoints.
 */
@RestController
@Validated
@RequestMapping("/api/v1/sync-config")
@Tag(name = "Sync Config", description = "Workspace-scoped pipeline config management endpoints.")
public class SyncConfigAPI {
    private final PipelineConfigService pipelineConfigService;

    /**
     * Creates the pipeline config controller.
     *
     * @param pipelineConfigService pipeline config application service
     */
    public SyncConfigAPI(PipelineConfigService pipelineConfigService) {
        this.pipelineConfigService = pipelineConfigService;
    }

    @GetMapping
    @Operation(summary = "List pipelines", description = "Returns pipeline config summaries for the current workspace.")
    /**
     * Lists pipeline configs in the current workspace.
     *
     * @return pipeline config summaries
     */
    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        return pipelineConfigService.listSyncConfig();
    }

    @GetMapping("/{pipelineId}")
    @Operation(summary = "Get pipeline config detail", description = "Returns the full pipeline config for the requested pipeline id.")
    /**
     * Loads one pipeline config detail.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return full pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo getConfigDetail(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId) {
        return pipelineConfigService.getPipelineConfigInfo(pipelineId);
    }

    @PostMapping(consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Create pipeline config", description = "Creates a pipeline config in the current workspace from a JSON payload.")
    /**
     * Creates a new pipeline config from a JSON request body.
     *
     * @param configPipelineUpsertRequest validated config payload
     * @return created pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo createConfig(
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return pipelineConfigService.createSyncConfig(
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.stages(),
                configPipelineUpsertRequest.jobs());
    }

    @PostMapping(value = "/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Import pipeline config", description = "Creates a pipeline config from an uploaded JSON or YAML file.")
    /**
     * Creates a new pipeline config from an uploaded JSON or YAML file.
     *
     * @param folderId target folder id, or {@code null} for root
     * @param pipelineName user-facing pipeline name
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return created pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @RequestParam(name = "folderId", required = false) @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam("pipelineName") @NotBlank(message = "pipelineName can not be blank") @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters") String pipelineName,
            @RequestParam(name = "format", required = false) @Pattern(regexp = IMPORT_FORMAT, message = "format must be json, yaml, or yml") String format,
            @RequestParam("file") MultipartFile file) {
        return pipelineConfigService.importSyncConfig(folderId, pipelineName, format, file);
    }

    @PutMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Replace pipeline config", description = "Replaces the full pipeline config for the requested pipeline id.")
    /**
     * Replaces one pipeline config from a JSON request body.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param configPipelineUpsertRequest validated replacement payload
     * @return updated pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo updateConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return pipelineConfigService.updateSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.stages(),
                configPipelineUpsertRequest.jobs());
    }

    @PatchMapping(value = "/{pipelineId}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Patch pipeline config", description = "Applies a partial update to the pipeline config for the requested pipeline id.")
    /**
     * Applies the current PATCH contract for pipeline configs.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param configPipelineUpsertRequest validated patch payload
     * @return updated pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo patchConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @Valid @RequestBody SyncConfigDTO.ConfigPipelineUpsertRequest configPipelineUpsertRequest) {
        return pipelineConfigService.patchSyncConfig(
                pipelineId,
                configPipelineUpsertRequest.folderId(),
                configPipelineUpsertRequest.pipelineName(),
                configPipelineUpsertRequest.stages(),
                configPipelineUpsertRequest.jobs());
    }

    @PutMapping(value = "/{pipelineId}/import", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Replace pipeline config from import", description = "Replaces an existing pipeline config from an uploaded JSON or YAML file.")
    /**
     * Replaces one pipeline config from an uploaded JSON or YAML file.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for root
     * @param pipelineName user-facing pipeline name after replacement
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return updated pipeline config detail
     */
    public SyncConfigDTO.ConfigPipelineInfo importConfig(
            @PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId,
            @RequestParam(name = "folderId", required = false) @Positive(message = "folderId must be positive") Long folderId,
            @RequestParam("pipelineName") @NotBlank(message = "pipelineName can not be blank") @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters") String pipelineName,
            @RequestParam(name = "format", required = false) @Pattern(regexp = IMPORT_FORMAT, message = "format must be json, yaml, or yml") String format,
            @RequestParam("file") MultipartFile file) {
        return pipelineConfigService.importSyncConfig(pipelineId, folderId, pipelineName, format, file);
    }

    @DeleteMapping("/{pipelineId}")
    @Operation(summary = "Delete pipeline config", description = "Deletes a pipeline config when it has no run history blockers.")
    /**
     * Deletes one pipeline config in the current workspace.
     *
     * @param pipelineId pipeline id in the current workspace
     */
    public void deleteConfig(@PathVariable("pipelineId") @Positive(message = "pipelineId must be positive") Long pipelineId) {
        pipelineConfigService.deleteSyncConfig(pipelineId);
    }
}
