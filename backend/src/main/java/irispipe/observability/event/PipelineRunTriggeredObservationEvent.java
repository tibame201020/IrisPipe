package irispipe.observability.event;

/**
 * Observation payload emitted when a logical pipeline run is triggered.
 *
 * @param requestedAsync whether the run was requested asynchronously
 */
public record PipelineRunTriggeredObservationEvent(
        boolean requestedAsync) {
}
