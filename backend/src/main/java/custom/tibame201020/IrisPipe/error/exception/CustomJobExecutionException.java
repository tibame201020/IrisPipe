package custom.tibame201020.IrisPipe.error.exception;

import lombok.Getter;

@Getter
public class CustomJobExecutionException extends RuntimeException {
    private final String jobName;
    private final String message;

    public CustomJobExecutionException(String jobName, String message) {
        this.jobName = jobName;
        this.message = message;
    }

    @Override
    public String getMessage() {
        String template = "jobName: %s, error: %s";
        return String.format(template, jobName, message);
    }
}
