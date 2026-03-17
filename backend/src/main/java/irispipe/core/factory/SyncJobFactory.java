package irispipe.core.factory;

import irispipe.batch.builder.BatchBeanBuilder;
import irispipe.batch.listener.CustomJobListener;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.infrastructure.service.runtime.ExecutionRecordService;
import irispipe.infrastructure.service.runtime.PipelineRunLifecycleService;
import irispipe.model.AtomicLevel;
import irispipe.model.ExecutionType;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.job.builder.SimpleJobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

@Service
public class SyncJobFactory {
    private final JobRepository jobRepository;
    private final ExecutionRecordService executionRecordService;
    private final Map<ExecutionType, ExecutionStepStrategy> strategies = new EnumMap<>(ExecutionType.class);

    private final PlatformTransactionManager platformTransactionManager;
    private final PipelineRunLifecycleService pipelineRunLifecycleService;

    public SyncJobFactory(JobRepository jobRepository, BatchBeanBuilder batchBeanBuilder,
                          PlatformTransactionManager platformTransactionManager,
                          ExecutionRecordService executionRecordService,
                          PipelineRunLifecycleService pipelineRunLifecycleService) {
        this.jobRepository = jobRepository;
        this.executionRecordService = executionRecordService;
        this.platformTransactionManager = platformTransactionManager;
        this.pipelineRunLifecycleService = pipelineRunLifecycleService;

        strategies.put(ExecutionType.INSERT,
                new InsertStepStrategy(jobRepository, batchBeanBuilder));
        strategies.put(ExecutionType.UPDATE,
                new UpdateStepStrategy(jobRepository, batchBeanBuilder));
        strategies.put(ExecutionType.UPSERT,
                new UpsertStepStrategy(jobRepository, batchBeanBuilder));
        strategies.put(ExecutionType.DELETE, new DeleteStepStrategy(jobRepository));
        strategies.put(ExecutionType.EXECUTE, new ExecuteStepStrategy(jobRepository));
    }

    public Job createBatchJob(SyncJobContext syncJobContext) {

        AtomicLevel atomicLevel = syncJobContext.syncJob().getSetting().atomicLevel();
        PlatformTransactionManager transactionManager = atomicLevel.equals(AtomicLevel.JOB) ?
                platformTransactionManager : syncJobContext.destContext().getTransactionManager();

        List<Step> steps = syncJobContext.syncJob().getExecutions()
                .stream()
                .map(execution -> strategies.get(execution.type()).createStep(syncJobContext, execution, transactionManager))
                .toList();

        boolean openJobTransaction = syncJobContext.syncJob().getSetting().atomicLevel().equals(AtomicLevel.JOB);

        CustomJobListener customJobListener = new CustomJobListener(
                syncJobContext.destContext().getTransactionManager(), openJobTransaction, syncJobContext,
                executionRecordService, pipelineRunLifecycleService);

        SimpleJobBuilder simpleJobBuilder = new JobBuilder(syncJobContext.syncJob().getJobName(), jobRepository)
                .listener(customJobListener)
                .start(steps.getFirst());

        for (int i = 1; i < steps.size(); i++) {
            simpleJobBuilder.next(steps.get(i));
        }

        return simpleJobBuilder.build();
    }
}
