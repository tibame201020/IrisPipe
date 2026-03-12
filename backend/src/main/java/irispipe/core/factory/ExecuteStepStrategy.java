package irispipe.core.factory;

import irispipe.batch.tasklet.ExecuteTasklet;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.transaction.PlatformTransactionManager;

public class ExecuteStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;

    public ExecuteStepStrategy(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution, PlatformTransactionManager transactionManager) {
        String jobName = syncJobContext.syncJob().getJobName();
        ExecuteTasklet executeTasklet = new ExecuteTasklet(syncJobContext, execution);

        return new StepBuilder(jobName + "_ execute_step", jobRepository)
                .tasklet(executeTasklet, syncJobContext.destContext().getTransactionManager())
                .build();
    }
}
