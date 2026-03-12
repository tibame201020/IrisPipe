package irispipe.infrastructure.error.exception;

import io.micrometer.common.util.StringUtils;
import lombok.Getter;

@Getter
public class ConfigValidationException extends RuntimeException {
    private final String jobName;
    private final String executionName;
    private final String message;

    public ConfigValidationException(String jobName, String executionName, String message) {
        this.jobName = jobName;
        this.executionName = executionName;
        this.message = message;
    }

    @Override
    public String getMessage() {
        if (StringUtils.isNotBlank(jobName) && StringUtils.isBlank(executionName)) {
            return message;
        }
        String template = "job: %s, execution: %s, error: %s";
        return String.format(template, jobName, executionName, message);
    }
}
