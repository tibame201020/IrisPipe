package irispipe.observability.event;

import java.time.LocalDateTime;

import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;

/**
 * Observation payload emitted when one execution attempt reaches an observed
 * terminal state.
 *
 * @param executionKind execution attempt kind
 * @param requestedAsync whether the attempt was requested asynchronously
 * @param status observed execution status
 * @param startTime execution start time
 * @param endTime execution end time
 */
public record PipelineExecutionObservationEvent(
        PipelineRunExecutionKind executionKind,
        boolean requestedAsync,
        PipelineRunStatus status,
        LocalDateTime startTime,
        LocalDateTime endTime) {
}
