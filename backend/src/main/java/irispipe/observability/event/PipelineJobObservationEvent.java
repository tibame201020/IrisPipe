package irispipe.observability.event;

import java.time.LocalDateTime;

import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunStatus;

public record PipelineJobObservationEvent(
        AtomicLevel atomicLevel,
        PipelineRunStatus status,
        LocalDateTime startTime,
        LocalDateTime endTime) {
}
