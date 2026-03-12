package irispipe.core.factory;

import org.springframework.batch.core.Step;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

public interface ExecutionStepStrategy {
    Step createStep(SyncJobContext syncJobContext, ExecutionStep execution);
}
