package irispipe.infrastructure.error.exception;

import lombok.Getter;

@Getter
public class ConfigFileException extends RuntimeException {
    private final String configPath;

    public ConfigFileException(String configPath, String message) {
        super(String.format("Config file error at [%s]: %s", configPath, message));
        this.configPath = configPath;
    }

    public ConfigFileException(String configPath, String message, Throwable cause) {
        super(String.format("Config file error at [%s]: %s", configPath, message), cause);
        this.configPath = configPath;
    }
}
