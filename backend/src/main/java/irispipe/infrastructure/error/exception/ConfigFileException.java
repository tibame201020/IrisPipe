package irispipe.infrastructure.error.exception;

import lombok.Getter;

/**
 * Indicates that an imported config file could not be parsed or converted into
 * the pipeline config model.
 */
@Getter
public class ConfigFileException extends RuntimeException {
    private final String pipelineName;

    /**
     * Creates a config file exception without an underlying cause.
     *
     * @param pipelineName target pipeline name
     * @param message import failure description
     */
    public ConfigFileException(String pipelineName, String message) {
        super(String.format("Config import error for pipeline [%s]: %s", pipelineName, message));
        this.pipelineName = pipelineName;
    }

    /**
     * Creates a config file exception with an underlying parsing or conversion
     * cause.
     *
     * @param pipelineName target pipeline name
     * @param message import failure description
     * @param cause original parsing failure
     */
    public ConfigFileException(String pipelineName, String message, Throwable cause) {
        super(String.format("Config import error for pipeline [%s]: %s", pipelineName, message), cause);
        this.pipelineName = pipelineName;
    }
}
