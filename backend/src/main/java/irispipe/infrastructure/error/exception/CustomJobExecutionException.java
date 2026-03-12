package irispipe.infrastructure.error.exception;

public class CustomJobExecutionException extends RuntimeException {
    private final String jobName;
    private final String message;

    public CustomJobExecutionException(String jobName, String message) {
        this.jobName = jobName;
        this.message = message;
    }

    @Override
    public String getMessage() {
        String template = "job: %s, error at execution logic: %s";
        return String.format(template, jobName, message);
    }
}
