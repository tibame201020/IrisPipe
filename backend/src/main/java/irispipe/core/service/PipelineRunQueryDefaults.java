package irispipe.core.service;

public final class PipelineRunQueryDefaults {
    public static final int DEFAULT_LIMIT = 20;
    public static final int MAX_LIMIT = 100;
    public static final String LIMIT_VALIDATION_MESSAGE = "limit must be between 1 and 100";

    private PipelineRunQueryDefaults() {
    }
}
