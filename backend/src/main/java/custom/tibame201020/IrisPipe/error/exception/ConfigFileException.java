package custom.tibame201020.IrisPipe.error.exception;

import lombok.Getter;

@Getter
public class ConfigFileException extends RuntimeException {
    private final String configPath;
    private final String message;

    public ConfigFileException(String configPath, String message) {
        this.configPath = configPath;
        this.message = message;
    }
}
