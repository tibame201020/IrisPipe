package irispipe.infrastructure.error.exception;

import lombok.Getter;

@Getter
public class ConfigFileException extends RuntimeException {
    private final String pipelineName;

    public ConfigFileException(String pipelineName, String message) {
        super(String.format("Config import error for pipeline [%s]: %s", pipelineName, message));
        this.pipelineName = pipelineName;
    }

    public ConfigFileException(String pipelineName, String message, Throwable cause) {
        super(String.format("Config import error for pipeline [%s]: %s", pipelineName, message), cause);
        this.pipelineName = pipelineName;
    }
}
