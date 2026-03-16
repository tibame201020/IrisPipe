package irispipe.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/api/v1/sync-pipeline")
public class SyncPipelineAPI {
    private final PipelineExecutionService pipelineExecutionService;
    private final PipelineRunQueryService pipelineRunQueryService;

    public SyncPipelineAPI(PipelineExecutionService pipelineExecutionService,
            PipelineRunQueryService pipelineRunQueryService) {
        this.pipelineExecutionService = pipelineExecutionService;
        this.pipelineRunQueryService = pipelineRunQueryService;
    }

    @PostMapping
    public SyncPipelineDTO.PipelineRunSummaryInfo executePipeline(
            @RequestBody SyncPipelineDTO.PipelineExecuteRequest pipelineExecuteRequest) {
        return pipelineExecutionService.execute(
                pipelineExecuteRequest.pipelineId(),
                pipelineExecuteRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/resume")
    public SyncPipelineDTO.PipelineRunSummaryInfo resumePipeline(
            @PathVariable("pipelineRunId") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineResumeRequest pipelineResumeRequest) {
        return pipelineExecutionService.resume(
                pipelineRunId,
                pipelineResumeRequest == null ? null : pipelineResumeRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/rerun")
    public SyncPipelineDTO.PipelineRunSummaryInfo rerunPipeline(
            @PathVariable("pipelineRunId") Long pipelineRunId,
            @RequestBody(required = false) SyncPipelineDTO.PipelineRerunRequest pipelineRerunRequest) {
        return pipelineExecutionService.rerun(
                pipelineRunId,
                pipelineRerunRequest == null ? null : pipelineRerunRequest.useAsyncLauncher());
    }

    @PostMapping("/{pipelineRunId}/stop")
    public SyncPipelineDTO.PipelineRunSummaryInfo stopPipeline(@PathVariable("pipelineRunId") Long pipelineRunId) {
        return pipelineExecutionService.stop(pipelineRunId);
    }

    @GetMapping
    public List<SyncPipelineDTO.PipelineRunSummaryInfo> getPipelineRunsByIds(@RequestParam("ids") List<Long> ids) {
        return pipelineRunQueryService.getPipelineRunSummaries(ids);
    }

    @GetMapping("/{pipelineRunId}")
    public SyncPipelineDTO.PipelineRunDetailInfo getPipelineRunDetail(@PathVariable("pipelineRunId") Long pipelineRunId) {
        return pipelineRunQueryService.getPipelineRunDetail(pipelineRunId);
    }

    @DeleteMapping("/{pipelineRunId}")
    public ResponseEntity<Void> deletePipelineRun(@PathVariable("pipelineRunId") Long pipelineRunId) {
        pipelineExecutionService.deletePipelineRun(pipelineRunId);
        return ResponseEntity.noContent().build();
    }
}
