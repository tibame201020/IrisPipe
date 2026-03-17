package irispipe.observability;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import io.micrometer.core.instrument.Gauge;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Tags;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;
import irispipe.model.PipelineRunStatus;
import irispipe.observability.event.PipelineExecutionObservationEvent;
import irispipe.observability.event.PipelineJobObservationEvent;
import irispipe.observability.event.PipelineRunTriggeredObservationEvent;

/**
 * Registers pipeline gauges and publishes counters and timers from observation
 * events.
 */
@Component
public class PipelineMetricsPublisher {
    private static final List<PipelineRunStatus> ACTIVE_STATUSES = List.of(
            PipelineRunStatus.STARTING,
            PipelineRunStatus.STARTED,
            PipelineRunStatus.STOPPING);

    private final MeterRegistry meterRegistry;

    /**
     * Creates the metrics publisher and registers active-run gauges.
     *
     * @param meterRegistry meter registry
     * @param pipelineRunRepo pipeline run repository
     * @param pipelineRunExecutionRepo pipeline run execution repository
     */
    public PipelineMetricsPublisher(MeterRegistry meterRegistry,
            PipelineRunRepo pipelineRunRepo,
            PipelineRunExecutionRepo pipelineRunExecutionRepo) {
        this.meterRegistry = meterRegistry;

        Gauge.builder(PipelineMetricNames.PIPELINE_RUNS_ACTIVE, pipelineRunRepo,
                repo -> repo.countByStatusIn(ACTIVE_STATUSES))
                .description("The number of pipeline runs currently active.")
                .register(meterRegistry);
        Gauge.builder(PipelineMetricNames.PIPELINE_EXECUTIONS_ACTIVE, pipelineRunExecutionRepo,
                repo -> repo.countByStatusIn(ACTIVE_STATUSES))
                .description("The number of pipeline executions currently active.")
                .register(meterRegistry);
    }

    /**
     * Publishes the run-triggered counter.
     *
     * @param event run-triggered observation event
     */
    @EventListener
    public void onPipelineRunTriggered(PipelineRunTriggeredObservationEvent event) {
        meterRegistry.counter(
                PipelineMetricNames.PIPELINE_RUN_TRIGGERED,
                Tags.of("requested_async", Boolean.toString(event.requestedAsync())))
                .increment();
    }

    /**
     * Publishes execution terminal counters and duration timers.
     *
     * @param event execution observation event
     */
    @EventListener
    public void onPipelineExecutionObserved(PipelineExecutionObservationEvent event) {
        String counterMetricName = switch (event.status()) {
            case COMPLETED -> PipelineMetricNames.PIPELINE_EXECUTION_COMPLETED;
            case FAILED -> PipelineMetricNames.PIPELINE_EXECUTION_FAILED;
            case STOPPED -> PipelineMetricNames.PIPELINE_EXECUTION_STOPPED;
            default -> null;
        };
        if (counterMetricName == null) {
            return;
        }

        Tags tags = Tags.of(
                "execution_kind", event.executionKind().name(),
                "requested_async", Boolean.toString(event.requestedAsync()),
                "status", event.status().name());
        meterRegistry.counter(counterMetricName, tags).increment();
        recordDuration(PipelineMetricNames.PIPELINE_EXECUTION_DURATION, tags, event.startTime(), event.endTime());
    }

    /**
     * Publishes job terminal counters and duration timers.
     *
     * @param event job observation event
     */
    @EventListener
    public void onPipelineJobObserved(PipelineJobObservationEvent event) {
        String counterMetricName = switch (event.status()) {
            case COMPLETED -> PipelineMetricNames.PIPELINE_JOB_COMPLETED;
            case FAILED -> PipelineMetricNames.PIPELINE_JOB_FAILED;
            case STOPPED -> PipelineMetricNames.PIPELINE_JOB_STOPPED;
            default -> null;
        };
        if (counterMetricName == null) {
            return;
        }

        Tags tags = Tags.of(
                "atomic_level", event.atomicLevel().name(),
                "status", event.status().name());
        meterRegistry.counter(counterMetricName, tags).increment();
        recordDuration(PipelineMetricNames.PIPELINE_JOB_DURATION, tags, event.startTime(), event.endTime());
    }

    /**
     * Records a duration timer when the supplied time range is valid.
     *
     * @param metricName timer metric name
     * @param tags timer tags
     * @param startTime start time
     * @param endTime end time
     */
    private void recordDuration(String metricName, Tags tags, LocalDateTime startTime, LocalDateTime endTime) {
        if (startTime == null || endTime == null || endTime.isBefore(startTime)) {
            return;
        }
        meterRegistry.timer(metricName, tags).record(Duration.between(startTime, endTime));
    }
}
