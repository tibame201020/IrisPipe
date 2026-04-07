package irispipe.infrastructure.sse;

import java.time.LocalDateTime;

/**
 * SSE event payload records for pipeline runtime broadcasting.
 */
public final class SseEvents {

    private SseEvents() {
    }

    public record RunStartedEvent(Long runId, Long pipelineId, String pipelineName, LocalDateTime startedAt) {
    }

    public record JobStartedEvent(Long runId, String jobName, String stageName, LocalDateTime startedAt) {
    }

    public record JobFinishedEvent(Long runId, String jobName, String stageName, String status,
            LocalDateTime finishedAt) {
    }

    public record RunCompletedEvent(Long runId, String status, LocalDateTime finishedAt) {
    }

    public record RunFailedEvent(Long runId, LocalDateTime failedAt) {
    }

    public record RunStoppedEvent(Long runId, LocalDateTime stoppedAt) {
    }
}
