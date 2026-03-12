package irispipe.core.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.stereotype.Service;

import irispipe.infrastructure.context.SyncJobContext;
import irispipe.model.SyncJobDefinition;
import irispipe.infrastructure.error.exception.CustomJobExecutionException;
import irispipe.core.factory.SyncJobContextFactory;
import irispipe.core.factory.SyncJobFactory;
import irispipe.infrastructure.service.ExecutionRecordService;
import irispipe.infrastructure.service.JobConfigService;

@Service
public class JobExecutionService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JobConfigService jobConfigService;
    private final SyncJobContextFactory syncJobContextFactory;
    private final SyncJobFactory syncJobFactory;
    private final ExecutionRecordService executionRecordService;

    public JobExecutionService(JobConfigService jobConfigService, SyncJobContextFactory syncJobContextFactory,
            SyncJobFactory syncJobFactory, ExecutionRecordService executionRecordService) {
        this.jobConfigService = jobConfigService;
        this.syncJobContextFactory = syncJobContextFactory;
        this.syncJobFactory = syncJobFactory;
        this.executionRecordService = executionRecordService;
    }

    public List<JobExecution> execute(JobLauncher jobLauncher, Long pipelineId) {
        List<SyncJobDefinition> syncJobs = jobConfigService.getSyncJobs(pipelineId);
        return execute(jobLauncher, pipelineId, syncJobs);
    }

    public List<JobExecution> execute(JobLauncher jobLauncher, Long pipelineId, List<SyncJobDefinition> syncJobs) {
        syncJobs.forEach(SyncJobDefinition::validate);
        return syncJobs
                .stream()
                .map(syncJob -> {
                    SyncJobContext syncJobContext = syncJobContextFactory.initialSyncJobContext(syncJob,
                            executionRecordService);
                    Job job = syncJobFactory.createBatchJob(syncJobContext);
                    JobParameters jobParameters = new JobParametersBuilder()
                            .addLong("pipeline.id", pipelineId)
                            .addLong("run.id", System.currentTimeMillis())
                            .toJobParameters();
                    try {
                        return jobLauncher.run(job, jobParameters);
                    } catch (Exception e) {
                        logger.error("on error with job: {}, error: {}", syncJob.getJobName(), e.getMessage());
                        throw new CustomJobExecutionException(syncJob.getJobName(), e.getMessage());
                    }

                }).toList();
    }
}
