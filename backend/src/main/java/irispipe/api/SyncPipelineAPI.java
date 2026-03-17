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

import irispipe.core.service.PipelineExecutionService;
import irispipe.core.service.PipelineRunQueryService;
import irispipe.model.dto.SyncPipelineDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/api/v1/sync-pipeline")
@Tag(name = "Sync Pipeline", description = "Workspace-scoped pipeline control and pipeline run query endpoints.")
public class SyncPipelineAPI {
    private final PipelineExecutionService pipelineExecutionService;
    private final PipelineRunQueryService pipelineRunQueryService;

    public SyncPipelineAPI(PipelineExecutionService pipelineExecutionService,
            PipelineRunQueryService pipelineRunQueryService) {
        this.pipelineExecutionService = pipelineExecutionService;
        this.pipelineRunQueryService = pipelineRunQueryService;
    }

    @PostMapping
    @Operation(summary = "Execute pipeline", description = "Creates a new logical pipeline run for the requested pipeline id.")
    public SyncPipelineDTO.PipelineRunSummaryInfo executePipeline(
            @Valid @RequestBody SyncPipelineDTO.PipelineExecuteRequest pipelineExecuteRequest) {
        return pipelineExecutionService.execute(
                pipelineExecuteRequest.pipelineId(),
                pipelineExecuteRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/resume")
    @Operation(summary = "Resume pipeline run", description = "Creates a new resume attempt for a failed or stopped pipeline run.")
    public SyncPipelineDTO.PipelineRunSummaryInfo resumePipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineResumeRequest pipelineResumeRequest) {
        return pipelineExecutionService.resume(
                pipelineRunId,
                pipelineResumeRequest == null ? null : pipelineResumeRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/rerun")
    @Operation(summary = "Rerun pipeline run", description = "Creates a new logical pipeline run from an existing run snapshot.")
    public SyncPipelineDTO.PipelineRunSummaryInfo rerunPipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineRerunRequest pipelineRerunRequest) {
        return pipelineExecutionService.rerun(
                pipelineRunId,
                pipelineRerunRequest == null ? null : pipelineRerunRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/stop")
    @Operation(summary = "Stop pipeline run", description = "Requests stop for an in-flight pipeline run.")
    public SyncPipelineDTO.PipelineRunSummaryInfo stopPipeline(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        return pipelineExecutionService.stop(pipelineRunId);
    }

    @GetMapping
    @Operation(summary = "List pipeline runs", description = "Supports ids lookup or pipeline history mode. Exactly one of ids or pipelineId must be supplied.")
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRuns(
            @RequestParam(name = "ids", required = false) List<@Positive(message = "ids must contain only positive values") Long> ids,
            @RequestParam(name = "pipelineId", required = false) @Positive(message = "pipelineId must be positive") Long pipelineId,
            @RequestParam(name = "limit", required = false) @Min(value = 1, message = "limit must be between 1 and 100") @Max(value = 100, message = "limit must be between 1 and 100") Integer limit,
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
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getRecentPipelineRuns(
            @RequestParam(name = "limit", required = false) @Min(value = 1, message = "limit must be between 1 and 100") @Max(value = 100, message = "limit must be between 1 and 100") Integer limit,
            @RequestParam(name = "beforeRunId", required = false) @Positive(message = "beforeRunId must be positive") Long beforeRunId) {
        return pipelineRunQueryService.getRecentPipelineRuns(limit, beforeRunId);
    }

    @GetMapping("/{pipelineRunId}")
    @Operation(summary = "Get pipeline run detail", description = "Returns latest job projection and attempt timeline for the requested pipeline run.")
    public SyncPipelineDTO.PipelineRunDetailInfo getPipelineRunDetail(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        return pipelineRunQueryService.getPipelineRunDetail(pipelineRunId);
    }

    @DeleteMapping("/{pipelineRunId}")
    @Operation(summary = "Delete pipeline run", description = "Deletes a terminal pipeline run and its runtime rows.")
    public ResponseEntity<Void> deletePipelineRun(
            @PathVariable("pipelineRunId") @Positive(message = "pipelineRunId must be positive") Long pipelineRunId) {
        pipelineExecutionService.deletePipelineRun(pipelineRunId);
        return ResponseEntity.noContent().build();
    }
}
