package irispipe.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import irispipe.core.service.PipelineExecutionService;
import irispipe.core.service.PipelineRunQueryDefaults;
import irispipe.core.service.PipelineRunQueryService;
import irispipe.model.dto.SyncPipelineDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;

/**
 * Exposes workspace-scoped pipeline execution commands and pipeline run queries.
 */
@RestController
@Validated
@RequestMapping("/api/v1/sync-pipeline")
@Tag(name = "Sync Pipeline", description = "Workspace-scoped pipeline control and pipeline run query endpoints.")
public class SyncPipelineAPI {
    private final PipelineExecutionService pipelineExecutionService;
    private final PipelineRunQueryService pipelineRunQueryService;

    /**
     * Creates the pipeline control and query controller.
     *
     * @param pipelineExecutionService pipeline command application service
     * @param pipelineRunQueryService pipeline run query application service
     */
    public SyncPipelineAPI(PipelineExecutionService pipelineExecutionService,
            PipelineRunQueryService pipelineRunQueryService) {
        this.pipelineExecutionService = pipelineExecutionService;
        this.pipelineRunQueryService = pipelineRunQueryService;
    }

    @PostMapping
    @Operation(summary = "Execute pipeline", description = "Creates a new logical pipeline run for the requested pipeline id.")
    /**
     * Executes one pipeline definition.
     *
     * @param pipelineExecuteRequest validated execute request payload
     * @return created pipeline run summary
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo executePipeline(
            @Valid @RequestBody SyncPipelineDTO.PipelineExecuteRequest pipelineExecuteRequest) {
        return pipelineExecutionService.execute(
                pipelineExecuteRequest.pipelineId(),
                pipelineExecuteRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/resume")
    @Operation(summary = "Resume pipeline run", description = "Creates a new resume attempt for a failed or stopped pipeline run.")
    /**
     * Resumes one failed or stopped pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @param pipelineResumeRequest optional resume request payload
     * @return resumed pipeline run summary
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo resumePipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineResumeRequest pipelineResumeRequest) {
        return pipelineExecutionService.resume(
                pipelineRunId,
                pipelineResumeRequest == null ? null : pipelineResumeRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/rerun")
    @Operation(summary = "Rerun pipeline run", description = "Creates a new logical pipeline run from an existing run snapshot.")
    /**
     * Creates a new logical run from one existing run snapshot.
     *
     * @param pipelineRunId source pipeline run id in the current workspace
     * @param pipelineRerunRequest optional rerun request payload
     * @return new pipeline run summary
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo rerunPipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineRerunRequest pipelineRerunRequest) {
        return pipelineExecutionService.rerun(
                pipelineRunId,
                pipelineRerunRequest == null ? null : pipelineRerunRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/stop")
    @Operation(summary = "Stop pipeline run", description = "Requests stop for an in-flight pipeline run.")
    /**
     * Requests stop for one in-flight pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @return pipeline run summary after the stop request
     */
    public SyncPipelineDTO.PipelineRunSummaryInfo stopPipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        return pipelineExecutionService.stop(pipelineRunId);
    }

    @GetMapping
    @Operation(summary = "List pipeline runs", description = "Supports ids lookup or pipeline history mode. Exactly one of ids or pipelineId must be supplied.")
    /**
     * Lists pipeline runs by ids lookup or by pipeline history mode.
     *
     * @param ids optional explicit run ids
     * @param pipelineId optional pipeline id for history mode
     * @param limit optional page size for history mode
     * @param beforeRunId optional cursor for history mode
     * @return matching pipeline run summaries
     */
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRuns(
            @RequestParam(name = "ids", required = false) List<@Positive(message = "ids must contain only positive values") Long> ids,
            @RequestParam(name = "pipelineId", required = false) @Positive(message = "pipelineId must be positive") Long pipelineId,
            @RequestParam(name = "limit", required = false)
            @Min(value = 1, message = PipelineRunQueryDefaults.LIMIT_VALIDATION_MESSAGE)
            @Max(value = PipelineRunQueryDefaults.MAX_LIMIT, message = PipelineRunQueryDefaults.LIMIT_VALIDATION_MESSAGE) Integer limit,
            @RequestParam(name = "beforeRunId", required = false) @Positive(message = "beforeRunId must be positive") Long beforeRunId) {
        boolean hasIds = ids != null && !ids.isEmpty();
        boolean hasPipelineId = pipelineId != null;

        if (hasIds == hasPipelineId) {
            throw new IllegalArgumentException("Specify exactly one of ids or pipelineId");
        }
        if (hasIds) {
            if (limit != null || beforeRunId != null) {
                throw new IllegalArgumentException("limit and beforeRunId are not supported with ids lookup");
            }
            return pipelineRunQueryService.getPipelineRunSummaries(ids);
        }

        return pipelineRunQueryService.getPipelineRunHistory(pipelineId, limit, beforeRunId);
    }

    @GetMapping("/recent")
    @Operation(summary = "List recent pipeline runs", description = "Returns recent pipeline runs for the current workspace.")
    /**
     * Lists recent pipeline runs for the current workspace.
     *
     * @param limit optional page size
     * @param beforeRunId optional cursor for older runs
     * @return recent pipeline run summaries
     */
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getRecentPipelineRuns(
            @RequestParam(name = "limit", required = false)
            @Min(value = 1, message = PipelineRunQueryDefaults.LIMIT_VALIDATION_MESSAGE)
            @Max(value = PipelineRunQueryDefaults.MAX_LIMIT, message = PipelineRunQueryDefaults.LIMIT_VALIDATION_MESSAGE) Integer limit,
            @RequestParam(name = "beforeRunId", required = false) @Positive(message = "beforeRunId must be positive") Long beforeRunId) {
        return pipelineRunQueryService.getRecentPipelineRuns(limit, beforeRunId);
    }

    @GetMapping("/{pipelineRunId}")
    @Operation(summary = "Get pipeline run detail", description = "Returns latest job projection and attempt timeline for the requested pipeline run.")
    /**
     * Loads detail for one pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @return pipeline run detail
     */
    public SyncPipelineDTO.PipelineRunDetailInfo getPipelineRunDetail(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        return pipelineRunQueryService.getPipelineRunDetail(pipelineRunId);
    }

    @GetMapping("/{pipelineRunId}/logs")
    @Operation(summary = "Get pipeline run logs", description = "Returns a chronological log synthesized from run execution and Spring Batch step metadata.")
    public List<SyncPipelineDTO.RunLogEntry> getRunLogs(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        return pipelineRunQueryService.getRunLogs(pipelineRunId);
    }

    @DeleteMapping("/{pipelineRunId}")
    @Operation(summary = "Delete pipeline run", description = "Deletes a terminal pipeline run and its runtime rows.")
    /**
     * Deletes one terminal pipeline run.
     *
     * @param pipelineRunId pipeline run id in the current workspace
     * @return empty no-content response
     */
    public ResponseEntity<Void> deletePipelineRun(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        pipelineExecutionService.deletePipelineRun(pipelineRunId);
        return ResponseEntity.noContent().build();
    }
}
