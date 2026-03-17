package irispipe.core.factory;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.transaction.PlatformTransactionManager;

import irispipe.batch.tasklet.DeleteTasklet;
import irispipe.core.utility.BatchIdentityHelper;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

/**
 * Builds delete tasklet steps for delete execution nodes.
 */
public class DeleteStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;

    /**
     * Creates the delete step strategy.
     *
     * @param jobRepository Spring Batch job repository
     */
    public DeleteStepStrategy(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager) {
        DeleteTasklet deleteTasklet = new DeleteTasklet(syncJobContext, execution);
        return new StepBuilder(BatchIdentityHelper.renderStepName(execution.name(), "delete_step"), jobRepository)
                .tasklet(deleteTasklet, syncJobContext.destContext().getTransactionManager())
                .build();
    }
}
