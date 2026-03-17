package irispipe.infrastructure.error.exception;

/**
 * Indicates that a requested resource could not be resolved in the current
 * workspace or runtime scope.
 */
public class ResourceNotFoundException extends RuntimeException {
    private final String resourceName;

    /**
     * Creates a missing-resource exception.
     *
     * @param resourceName logical resource type
     * @param message missing-resource description
     */
    public ResourceNotFoundException(String resourceName, String message) {
        super(message);
        this.resourceName = resourceName;
    }

    /**
     * Returns the missing resource type included in the error payload.
     *
     * @return logical resource type name
     */
    public String getResourceName() {
        return resourceName;
    }
}
