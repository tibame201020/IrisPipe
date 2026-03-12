package irispipe.core.factory;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.job.builder.SimpleJobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;

import irispipe.batch.builder.BatchBeanBuilder;
import irispipe.batch.listener.CustomJobListener;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.ExecutionType;
import irispipe.infrastructure.service.ExecutionRecordService;

@Service
public class SyncJobFactory {
    private final JobRepository jobRepository;
    private final ExecutionRecordService executionRecordService;
    private final Map<ExecutionType, ExecutionStepStrategy> strategies = new EnumMap<>(ExecutionType.class);

    public SyncJobFactory(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder,
            PlatformTransactionManager platformTransactionManager,
            ExecutionRecordService executionRecordService) {
        this.jobRepository = jobRepository;
        this.executionRecordService = executionRecordService;

        strategies.put(ExecutionType.INSERT,
                new InsertStepStrategy(jobRepository, batchBeanBuilder, platformTransactionManager));
        strategies.put(ExecutionType.UPDATE,
                new UpdateStepStrategy(jobRepository, batchBeanBuilder, platformTransactionManager));
        strategies.put(ExecutionType.UPSERT,
                new UpsertStepStrategy(jobRepository, batchBeanBuilder, platformTransactionManager));
        strategies.put(ExecutionType.DELETE, new DeleteStepStrategy(jobRepository));
        strategies.put(ExecutionType.EXECUTE, new ExecuteStepStrategyImpl(jobRepository));
    }

    public Job createBatchJob(SyncJobContext syncJobContext) {
        List<Step> steps = syncJobContext.syncJob().getExecutions()
                .stream()
                .map(execution -> strategies.get(execution.type()).createStep(syncJobContext, execution))
                .toList();

        CustomJobListener customJobListener = new CustomJobListener(
                syncJobContext.destContext().getTransactionManager(), true, syncJobContext,
                executionRecordService);

        SimpleJobBuilder simpleJobBuilder = new JobBuilder(syncJobContext.syncJob().getJobName(), jobRepository)
                .listener(customJobListener)
                .incrementer(new RunIdIncrementer())
                .start(steps.get(0));

        for (int i = 1; i < steps.size(); i++) {
                simpleJobBuilder.next(steps.get(i));
        }

        return simpleJobBuilder.build();
    }
}
