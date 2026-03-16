package irispipe.observability.event;

public record PipelineRunTriggeredObservationEvent(
        boolean requestedAsync) {
}
