package irispipe.infrastructure.error.exception;

/**
 * Indicates that a custom execution step failed inside its own execution
 * logic.
 */
public class CustomJobExecutionException extends RuntimeException {
    private final String jobName;
    private final String message;

    /**
     * Creates an execution exception for a specific job.
     *
     * @param jobName logical job name that failed
     * @param message execution failure description
     */
    public CustomJobExecutionException(String jobName, String message) {
        this.jobName = jobName;
        this.message = message;
    }

    /**
     * Returns the formatted execution error message.
     *
     * @return job-scoped execution error message
     */
    @Override
    public String getMessage() {
        String template = "job: %s, error at execution logic: %s";
        return String.format(template, jobName, message);
    }
}
