package irispipe.api.validation;

/**
 * Centralizes request-layer regex patterns used by controller validation.
 */
public final class RequestValidationPatterns {
    public static final String PIPELINE_NAME = "^[^/\\\\\\r\\n]+$";
    public static final String FOLDER_NAME = "^(?!__root__$)[^/\\\\\\r\\n]+$";
    public static final String WORKSPACE_KEY = "^[a-z0-9][a-z0-9_-]{1,62}$";
    public static final String IMPORT_FORMAT = "^(?i:json|yaml|yml)$";

    /**
     * Prevents instantiation of the validation pattern holder.
     */
    private RequestValidationPatterns() {
    }
}
