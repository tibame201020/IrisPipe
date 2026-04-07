package irispipe.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import irispipe.infrastructure.sse.SseEventBroadcaster;

/**
 * SSE endpoints for real-time pipeline run event streaming.
 */
@RestController
@RequestMapping("/api/v1/events")
@Tag(name = "Pipeline Events", description = "Server-Sent Events for real-time pipeline run streaming.")
public class PipelineEventController {

    private final SseEventBroadcaster broadcaster;

    public PipelineEventController(SseEventBroadcaster broadcaster) {
        this.broadcaster = broadcaster;
    }

    /**
     * Global stream: receives events for all runs in the workspace.
     */
    @GetMapping(value = "/runs", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    @Operation(summary = "Subscribe to all run events", description = "SSE stream of events for all pipeline runs in the current workspace.")
    public SseEmitter subscribeAllRuns() {
        return broadcaster.subscribeGlobal();
    }

    /**
     * Per-run stream: receives events scoped to one pipeline run.
     */
    @GetMapping(value = "/runs/{runId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    @Operation(summary = "Subscribe to run events", description = "SSE stream of events scoped to one pipeline run.")
    public SseEmitter subscribeRun(@PathVariable Long runId) {
        return broadcaster.subscribeRun(runId);
    }
}
