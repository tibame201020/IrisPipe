package irispipe.observability.event;

import java.time.LocalDateTime;

import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;

public record PipelineExecutionObservationEvent(
        PipelineRunExecutionKind executionKind,
        boolean requestedAsync,
        PipelineRunStatus status,
        LocalDateTime startTime,
        LocalDateTime endTime) {
}
