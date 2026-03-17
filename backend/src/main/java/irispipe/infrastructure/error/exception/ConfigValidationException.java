package irispipe.infrastructure.error.exception;

import io.micrometer.common.util.StringUtils;
import lombok.Getter;

/**
 * Indicates that pipeline config content passed structural validation but
 * failed domain validation.
 */
@Getter
public class ConfigValidationException extends RuntimeException {
    private final String jobName;
    private final String executionName;
    private final String message;

    /**
     * Creates a config validation exception for a specific job or execution.
     *
     * @param jobName logical job name involved in the validation failure
     * @param executionName execution name involved in the validation failure
     * @param message validation failure description
     */
    public ConfigValidationException(String jobName, String executionName, String message) {
        this.jobName = jobName;
        this.executionName = executionName;
        this.message = message;
    }

    /**
     * Returns the formatted validation message exposed to callers.
     *
     * @return job- or execution-scoped validation error message
     */
    @Override
    public String getMessage() {
        if (StringUtils.isNotBlank(jobName) && StringUtils.isBlank(executionName)) {
            return message;
        }
        String template = "job: %s, execution: %s, error: %s";
        return String.format(template, jobName, executionName, message);
    }
}
