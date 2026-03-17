package irispipe.observability.event;

import java.time.LocalDateTime;

import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunStatus;

/**
 * Observation payload emitted when one execution-scoped job reaches an observed
 * terminal state.
 *
 * @param atomicLevel job atomic level
 * @param status observed job status
 * @param startTime job start time
 * @param endTime job end time
 */
public record PipelineJobObservationEvent(
        AtomicLevel atomicLevel,
        PipelineRunStatus status,
        LocalDateTime startTime,
        LocalDateTime endTime) {
}
