package irispipe.core.factory;

import irispipe.batch.tasklet.DeleteTasklet;
import irispipe.core.utility.BatchIdentityHelper;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.transaction.PlatformTransactionManager;

public class DeleteStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;

    public DeleteStepStrategy(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager) {
        String jobName = syncJobContext.syncJob().getJobName();
        DeleteTasklet deleteTasklet = new DeleteTasklet(syncJobContext, execution);
        return new StepBuilder(BatchIdentityHelper.renderStepName(execution.name(), "delete_step"), jobRepository)
                .tasklet(deleteTasklet, syncJobContext.destContext().getTransactionManager())
                .build();
    }
}
