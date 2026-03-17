package irispipe.core.factory;

import org.springframework.batch.core.Step;
import org.springframework.transaction.PlatformTransactionManager;

import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

/**
 * Builds one Spring Batch step for a specific execution-step type.
 */
public interface ExecutionStepStrategy {
    /**
     * Creates a Spring Batch step from one logical execution step.
     *
     * @param syncJobContext sync job context with source and destination state
     * @param execution logical execution step
     * @param transactionManager transaction manager chosen for the job
     * @return Spring Batch step
     */
    Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager);
}
