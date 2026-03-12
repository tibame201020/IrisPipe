package irispipe.core.factory;

import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;
import org.springframework.batch.core.Step;
import org.springframework.transaction.PlatformTransactionManager;

public interface ExecutionStepStrategy {
    Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager);
}
