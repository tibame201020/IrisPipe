package irispipe.api;

import java.time.Duration;
import java.util.List;
import java.util.OptionalDouble;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import io.micrometer.core.instrument.MeterRegistry;
import irispipe.core.service.PipelineRunQueryService;
import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.folder.PipelineFolderRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;
import irispipe.model.PipelineRunStatus;
import irispipe.model.dto.SyncPipelineDTO;

/**
 * Aggregated overview endpoint — returns all data needed by the Overview page
 * in a single request, replacing the previous multi-call approach.
 */
@RestController
@RequestMapping("/api/v1/overview")
@Tag(name = "Overview", description = "Aggregated workspace overview endpoint.")
public class OverviewAPI {

    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineFolderRepo pipelineFolderRepo;
    private final PipelineRunQueryService pipelineRunQueryService;
    private final WorkspaceContextService workspaceContextService;
    private final MeterRegistry meterRegistry;

    public OverviewAPI(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineFolderRepo pipelineFolderRepo,
            PipelineRunQueryService pipelineRunQueryService,
            WorkspaceContextService workspaceContextService,
            MeterRegistry meterRegistry) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.pipelineRunQueryService = pipelineRunQueryService;
        this.workspaceContextService = workspaceContextService;
        this.meterRegistry = meterRegistry;
    }

    /**
     * Returns an aggregated snapshot of engine vitals, catalog counts, and run stats.
     */
    @GetMapping("/summary")
    @Operation(summary = "Get overview summary", description = "Returns aggregated engine, catalog, and run statistics for the current workspace.")
    public OverviewSummary getSummary() {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();

        int totalPipelines = pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId).size();
        int totalFolders = pipelineFolderRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId).size();

        List<SyncPipelineDTO.PipelineRunSummaryInfo> recentRuns = pipelineRunQueryService.getRecentPipelineRuns(10, null);

        long completed = recentRuns.stream().filter(r -> r.status() == PipelineRunStatus.COMPLETED).count();
        long failed = recentRuns.stream().filter(r -> r.status() == PipelineRunStatus.FAILED).count();
        long stopped = recentRuns.stream().filter(r -> r.status() == PipelineRunStatus.STOPPED).count();
        long active = recentRuns.stream()
                .filter(r -> r.status() == PipelineRunStatus.STARTING || r.status() == PipelineRunStatus.STARTED)
                .count();
        int successRate = recentRuns.isEmpty() ? 0
                : (int) Math.round((completed * 100.0) / recentRuns.size());

        OptionalDouble avgDuration = recentRuns.stream()
                .filter(r -> r.startTime() != null && r.endTime() != null)
                .mapToLong(r -> {
                    long secs = Duration.between(r.startTime(), r.endTime()).getSeconds();
                    return secs >= 0 ? secs : 0L;
                })
                .filter(s -> s >= 0)
                .average();

        double jvmUsed = gaugeValue("jvm.memory.used");
        double jvmMax = gaugeValue("jvm.memory.max");
        double uptime = gaugeValue("process.uptime");
        double activeBatch = gaugeValue("spring.batch.job.active");

        int jvmUsedMb = jvmUsed >= 0 ? (int) (jvmUsed / 1_048_576) : -1;
        int jvmMaxMb = jvmMax >= 0 ? (int) (jvmMax / 1_048_576) : -1;
        int jvmPercent = jvmUsedMb > 0 && jvmMaxMb > 0
                ? (int) Math.round((jvmUsed / jvmMax) * 100) : -1;

        return new OverviewSummary(
                new EngineInfo("UP",
                        uptime >= 0 ? (long) uptime : -1L,
                        jvmUsedMb, jvmMaxMb, jvmPercent,
                        activeBatch >= 0 ? (int) activeBatch : 0),
                new CatalogInfo(totalFolders, totalPipelines),
                new RunsInfo((int) active, recentRuns.size(),
                        (int) completed, (int) failed, (int) stopped, (int) active,
                        successRate,
                        avgDuration.isPresent() ? (long) avgDuration.getAsDouble() : null),
                recentRuns);
    }

    private double gaugeValue(String name) {
        var gauge = meterRegistry.find(name).gauge();
        return gauge != null ? gauge.value() : -1.0;
    }

    // ─── Response Records ────────────────────────────────────────────────────

    public record OverviewSummary(EngineInfo engine, CatalogInfo catalog, RunsInfo runs,
            List<SyncPipelineDTO.PipelineRunSummaryInfo> recentRuns) {
    }

    public record EngineInfo(String status, long uptimeSeconds,
            int jvmMemoryMb, int jvmMemoryTotalMb, int jvmMemoryPercent, int activeBatchJobs) {
    }

    public record CatalogInfo(int totalFolders, int totalPipelines) {
    }

    public record RunsInfo(int activeCount, int last10Total, int last10Completed, int last10Failed,
            int last10Stopped, int last10InFlight, int successRate, Long avgDurationSeconds) {
    }
}
