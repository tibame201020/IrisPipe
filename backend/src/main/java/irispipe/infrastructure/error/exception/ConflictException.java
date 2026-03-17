package irispipe.infrastructure.error.exception;

/**
 * Indicates that the requested operation conflicts with existing persisted
 * state.
 */
public class ConflictException extends RuntimeException {

    /**
     * Creates a conflict exception.
     *
     * @param message conflict description
     */
    public ConflictException(String message) {
        super(message);
    }
}
