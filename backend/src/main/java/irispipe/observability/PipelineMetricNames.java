package irispipe.observability;

public final class PipelineMetricNames {
    public static final String PIPELINE_RUN_TRIGGERED = "irispipe.pipeline.run.triggered";
    public static final String PIPELINE_EXECUTION_COMPLETED = "irispipe.pipeline.execution.completed";
    public static final String PIPELINE_EXECUTION_FAILED = "irispipe.pipeline.execution.failed";
    public static final String PIPELINE_EXECUTION_STOPPED = "irispipe.pipeline.execution.stopped";
    public static final String PIPELINE_JOB_COMPLETED = "irispipe.pipeline.job.completed";
    public static final String PIPELINE_JOB_FAILED = "irispipe.pipeline.job.failed";
    public static final String PIPELINE_JOB_STOPPED = "irispipe.pipeline.job.stopped";
    public static final String PIPELINE_RUNS_ACTIVE = "irispipe.pipeline.runs.active";
    public static final String PIPELINE_EXECUTIONS_ACTIVE = "irispipe.pipeline.executions.active";
    public static final String PIPELINE_EXECUTION_DURATION = "irispipe.pipeline.execution.duration";
    public static final String PIPELINE_JOB_DURATION = "irispipe.pipeline.job.duration";

    private PipelineMetricNames() {
    }
}
