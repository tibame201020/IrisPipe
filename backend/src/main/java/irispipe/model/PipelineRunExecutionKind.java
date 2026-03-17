package irispipe.model;

/**
 * Identifies whether a pipeline run execution attempt is the initial launch or
 * a resume attempt.
 */
public enum PipelineRunExecutionKind {
    INITIAL,
    RESUME
}
