package irispipe.core.service;

/**
 * Shared Spring Batch job parameter keys used for pipeline run launches.
 */
public final class PipelineRunJobParameterKeys {
    public static final String PIPELINE_RUN_JOB_ID = "pipeline.run.job.id";
    public static final String PIPELINE_ID = "pipeline.id";
    public static final String PIPELINE_RUN_ID = "pipeline.run.id";
    public static final String PIPELINE_RUN_EXECUTION_ID = "pipeline.run.execution.id";
    public static final String PIPELINE_RUN_EXECUTION_JOB_ID = "pipeline.run.execution.job.id";
    public static final String JOB_SEQUENCE = "job.sequence";

    private PipelineRunJobParameterKeys() {
    }
}
