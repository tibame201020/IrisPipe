package irispipe.infrastructure.service.runtime;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.model.AtomicLevel;
import irispipe.observability.event.PipelineExecutionObservationEvent;
import irispipe.observability.event.PipelineJobObservationEvent;

/**
 * Publishes runtime observation events after terminal execution and job
 * transitions.
 */
@Service
public class PipelineRunObservationService {
    private final ApplicationEventPublisher applicationEventPublisher;
    private final PipelineRunStatusPolicy pipelineRunStatusPolicy;

    /**
     * Creates the observation service.
     *
     * @param applicationEventPublisher Spring event publisher
     * @param pipelineRunStatusPolicy status policy for observed states
     */
    public PipelineRunObservationService(ApplicationEventPublisher applicationEventPublisher,
            PipelineRunStatusPolicy pipelineRunStatusPolicy) {
        this.applicationEventPublisher = applicationEventPublisher;
        this.pipelineRunStatusPolicy = pipelineRunStatusPolicy;
    }

    /**
     * Publishes an execution observation event when the execution status is
     * observable.
     *
     * @param pipelineRunExecution execution row
     */
    public void publishExecutionObservation(PipelineRunExecution pipelineRunExecution) {
        if (!pipelineRunStatusPolicy.isObservedExecutionStatus(pipelineRunExecution.getStatus())) {
            return;
        }
        applicationEventPublisher.publishEvent(new PipelineExecutionObservationEvent(
                pipelineRunExecution.getExecutionKind(),
                Boolean.TRUE.equals(pipelineRunExecution.getRequestedAsync()),
                pipelineRunExecution.getStatus(),
                pipelineRunExecution.getStartTime(),
                pipelineRunExecution.getEndTime()));
    }

    /**
     * Publishes a job observation event when the job status is observable and the
     * job has an atomic level.
     *
     * @param pipelineRunJob logical run job row
     * @param pipelineRunExecutionJob execution-scoped job row
     */
    public void publishJobObservation(PipelineRunJob pipelineRunJob, PipelineRunExecutionJob pipelineRunExecutionJob) {
        if (!pipelineRunStatusPolicy.isObservedJobStatus(pipelineRunExecutionJob.getStatus())) {
            return;
        }
        AtomicLevel atomicLevel = pipelineRunJob.getAtomicLevel();
        if (atomicLevel == null) {
            return;
        }
        applicationEventPublisher.publishEvent(new PipelineJobObservationEvent(
                atomicLevel,
                pipelineRunExecutionJob.getStatus(),
                pipelineRunExecutionJob.getStartTime(),
                pipelineRunExecutionJob.getEndTime()));
    }
}
