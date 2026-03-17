package irispipe.infrastructure.service.runtime;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.model.AtomicLevel;
import irispipe.observability.event.PipelineExecutionObservationEvent;
import irispipe.observability.event.PipelineJobObservationEvent;

@Service
public class PipelineRunObservationService {
    private final ApplicationEventPublisher applicationEventPublisher;
    private final PipelineRunStatusPolicy pipelineRunStatusPolicy;

    public PipelineRunObservationService(ApplicationEventPublisher applicationEventPublisher,
            PipelineRunStatusPolicy pipelineRunStatusPolicy) {
        this.applicationEventPublisher = applicationEventPublisher;
        this.pipelineRunStatusPolicy = pipelineRunStatusPolicy;
    }

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
