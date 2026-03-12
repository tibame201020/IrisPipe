package irispipe.core.factory;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;

import irispipe.batch.tasklet.DeleteTasklet;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionStep;

public class DeleteStepStrategy implements ExecutionStepStrategy {
    private final JobRepository jobRepository;

    public DeleteStepStrategy(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public Step createStep(SyncJobContext syncJobContext, ExecutionStep execution) {
        String jobName = syncJobContext.syncJob().getJobName();
        DeleteTasklet deleteTasklet = new DeleteTasklet(syncJobContext, execution);
        return new StepBuilder(jobName + "_ delete_step", jobRepository)
                .tasklet(deleteTasklet, syncJobContext.destContext().getTransactionManager())
                .build();
    }
}
