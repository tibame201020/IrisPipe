package irispipe.observability;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import io.micrometer.core.instrument.Gauge;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Tags;
import irispipe.infrastructure.repo.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.model.PipelineRunStatus;
import irispipe.observability.event.PipelineExecutionObservationEvent;
import irispipe.observability.event.PipelineJobObservationEvent;
import irispipe.observability.event.PipelineRunTriggeredObservationEvent;

@Component
public class PipelineMetricsPublisher {
    private static final List<PipelineRunStatus> ACTIVE_STATUSES = List.of(
            PipelineRunStatus.STARTING,
            PipelineRunStatus.STARTED,
            PipelineRunStatus.STOPPING);

    private final MeterRegistry meterRegistry;

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

    @EventListener
    public void onPipelineRunTriggered(PipelineRunTriggeredObservationEvent event) {
        meterRegistry.counter(
                PipelineMetricNames.PIPELINE_RUN_TRIGGERED,
                Tags.of("requested_async", Boolean.toString(event.requestedAsync())))
                .increment();
    }

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

    private void recordDuration(String metricName, Tags tags, LocalDateTime startTime, LocalDateTime endTime) {
        if (startTime == null || endTime == null || endTime.isBefore(startTime)) {
            return;
        }
        meterRegistry.timer(metricName, tags).record(Duration.between(startTime, endTime));
    }
}
