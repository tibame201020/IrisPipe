package irispipe.core.service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.batch.core.launch.JobExecutionNotRunningException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.launch.NoSuchJobExecutionException;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

import irispipe.core.factory.SyncJobContextFactory;
import irispipe.core.factory.SyncJobFactory;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;
import irispipe.infrastructure.entity.runtime.PipelineRunJob;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionJobRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunJobRepo;
import irispipe.infrastructure.service.runtime.ExecutionRecordService;
import irispipe.infrastructure.service.runtime.PipelineRunLifecycleService;
import irispipe.model.AtomicLevel;
import irispipe.model.PipelineRunExecutionKind;
import irispipe.model.PipelineRunStatus;
import irispipe.model.SyncJobDefinition;

/**
 * Bridges pipeline run executions to Spring Batch launch and stop operations.
 */
@Service
public class PipelineRunLaunchService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JobLauncher jobLauncher;
    private final TaskExecutor pipelineTaskExecutor;
    private final JobExplorer jobExplorer;
    private final JobOperator jobOperator;
    private final SyncJobContextFactory syncJobContextFactory;
    private final SyncJobFactory syncJobFactory;
    private final ExecutionRecordService executionRecordService;
    private final PipelineRunLifecycleService pipelineRunLifecycleService;
    private final PipelineRunExecutionRepo pipelineRunExecutionRepo;
    private final PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo;
    private final PipelineRunJobRepo pipelineRunJobRepo;
    private final PipelineRunControlPolicy pipelineRunControlPolicy;

    /**
     * Creates the launch helper with Spring Batch, job factory, execution record,
     * and lifecycle collaborators.
     *
     * @param jobLauncher Spring Batch job launcher
     * @param pipelineTaskExecutor async executor for pipeline runs
     * @param jobExplorer Spring Batch job explorer
     * @param jobOperator Spring Batch job operator
     * @param syncJobContextFactory sync job context factory
     * @param syncJobFactory sync job factory
     * @param executionRecordService execution record helper
     * @param pipelineRunLifecycleService runtime lifecycle helper
     * @param pipelineRunExecutionRepo pipeline run execution repository
     * @param pipelineRunExecutionJobRepo pipeline run execution job repository
     * @param pipelineRunJobRepo pipeline run job repository
     * @param pipelineRunControlPolicy run control policy helper
     */
    public PipelineRunLaunchService(JobLauncher jobLauncher,
            TaskExecutor pipelineTaskExecutor,
            JobExplorer jobExplorer,
            JobOperator jobOperator,
            SyncJobContextFactory syncJobContextFactory,
            SyncJobFactory syncJobFactory,
            ExecutionRecordService executionRecordService,
            PipelineRunLifecycleService pipelineRunLifecycleService,
            PipelineRunExecutionRepo pipelineRunExecutionRepo,
            PipelineRunExecutionJobRepo pipelineRunExecutionJobRepo,
            PipelineRunJobRepo pipelineRunJobRepo,
            PipelineRunControlPolicy pipelineRunControlPolicy) {
        this.jobLauncher = jobLauncher;
        this.pipelineTaskExecutor = pipelineTaskExecutor;
        this.jobExplorer = jobExplorer;
        this.jobOperator = jobOperator;
        this.syncJobContextFactory = syncJobContextFactory;
        this.syncJobFactory = syncJobFactory;
        this.executionRecordService = executionRecordService;
        this.pipelineRunLifecycleService = pipelineRunLifecycleService;
        this.pipelineRunExecutionRepo = pipelineRunExecutionRepo;
        this.pipelineRunExecutionJobRepo = pipelineRunExecutionJobRepo;
        this.pipelineRunJobRepo = pipelineRunJobRepo;
        this.pipelineRunControlPolicy = pipelineRunControlPolicy;
    }

    /**
     * Launches one pipeline run execution from the requested job sequence.
     *
     * @param launchRequest immutable launch payload
     * @param requestedAsync whether the execution should run asynchronously
     */
    public void launch(PipelineRunLaunchRequest launchRequest, boolean requestedAsync) {
        if (requestedAsync) {
            pipelineTaskExecutor.execute(() -> executePipelineRun(launchRequest));
            return;
        }
        executePipelineRun(launchRequest);
    }

    /**
     * Requests stop for the latest execution of one pipeline run.
     *
     * @param pipelineRunId pipeline run id
     * @param latestExecution latest execution to stop
     */
    public void requestStop(Long pipelineRunId, PipelineRunExecution latestExecution) {
        pipelineRunLifecycleService.markStopRequested(pipelineRunId, latestExecution.getId());

        Long runningBatchExecutionId = findRunningBatchExecutionId(pipelineRunId, latestExecution.getId());
        if (runningBatchExecutionId == null) {
            markPendingExecutionJobsNotRun(latestExecution.getId());
            pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
            return;
        }

        try {
            jobOperator.stop(runningBatchExecutionId);
        } catch (NoSuchJobExecutionException | JobExecutionNotRunningException e) {
            logger.warn("pipeline run {} stop target {} was no longer running: {}",
                    pipelineRunId,
                    runningBatchExecutionId,
                    e.getMessage());
            markPendingExecutionJobsNotRun(latestExecution.getId());
            pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
        }
    }

    /**
     * Executes the pipeline run job-by-job until completion, stop, or failure.
     *
     * @param launchRequest immutable launch payload
     */
    private void executePipelineRun(PipelineRunLaunchRequest launchRequest) {
        for (int jobSequence = launchRequest.startJobSequence(); jobSequence < launchRequest.syncJobs().size(); jobSequence++) {
            if (finalizeStopIfRequested(launchRequest.pipelineRunExecution().getId())) {
                return;
            }

            SyncJobDefinition syncJob = launchRequest.syncJobs().get(jobSequence);
            PipelineRunJob pipelineRunJob = launchRequest.pipelineRunJobs().get(jobSequence);
            PipelineRunExecutionJob pipelineRunExecutionJob = launchRequest.pipelineRunExecutionJobs().get(jobSequence);
            SyncJobContext syncJobContext = null;
            boolean closeSyncJobContext = true;
            try {
                syncJobContext = syncJobContextFactory.initialSyncJobContext(syncJob, executionRecordService);
                Job job = syncJobFactory.createBatchJob(syncJobContext);
                JobParameters jobParameters = buildJobParameters(
                        launchRequest.pipelineId(),
                        syncJob,
                        pipelineRunJob,
                        launchRequest.pipelineRunExecution(),
                        pipelineRunExecutionJob,
                        jobSequence);

                JobExecution jobExecution = jobLauncher.run(job, jobParameters);
                closeSyncJobContext = false;

                if (finalizeStopIfRequested(launchRequest.pipelineRunExecution().getId())) {
                    return;
                }

                if (!BatchStatus.COMPLETED.equals(jobExecution.getStatus())) {
                    markRemainingJobsNotRun(launchRequest.pipelineRunExecutionJobs(), jobSequence);
                    return;
                }
            } catch (Exception e) {
                logger.error("pipeline {} stopped on job {}: {}", launchRequest.pipelineId(), syncJob.getJobName(),
                        e.getMessage());
                pipelineRunLifecycleService.markLaunchFailed(
                        pipelineRunJob.getPipelineRunId(),
                        launchRequest.pipelineRunExecution().getId(),
                        pipelineRunJob.getId(),
                        pipelineRunExecutionJob.getId());
                markRemainingJobsNotRun(launchRequest.pipelineRunExecutionJobs(), jobSequence);
                return;
            } finally {
                if (closeSyncJobContext && syncJobContext != null) {
                    syncJobContext.close();
                }
            }
        }
    }

    /**
     * Builds the Spring Batch job parameters for one pipeline run job execution.
     *
     * @param pipelineId pipeline id
     * @param syncJob logical sync job definition
     * @param pipelineRunJob logical run job
     * @param pipelineRunExecution pipeline run execution
     * @param pipelineRunExecutionJob execution job row
     * @param jobSequence zero-based job sequence
     * @return job parameters passed to Spring Batch
     */
    private JobParameters buildJobParameters(Long pipelineId, SyncJobDefinition syncJob, PipelineRunJob pipelineRunJob,
            PipelineRunExecution pipelineRunExecution, PipelineRunExecutionJob pipelineRunExecutionJob, int jobSequence) {
        boolean replayJobInstance = PipelineRunExecutionKind.RESUME.equals(pipelineRunExecution.getExecutionKind())
                && AtomicLevel.JOB.equals(syncJob.getSetting().atomicLevel());

        return new JobParametersBuilder()
                .addLong(PipelineRunJobParameterKeys.PIPELINE_RUN_JOB_ID, pipelineRunJob.getId(), !replayJobInstance)
                .addLong(PipelineRunJobParameterKeys.PIPELINE_ID, pipelineId, false)
                .addLong(PipelineRunJobParameterKeys.PIPELINE_RUN_ID, pipelineRunJob.getPipelineRunId(), false)
                .addLong(PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_ID, pipelineRunExecution.getId(), false)
                .addLong(PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_JOB_ID, pipelineRunExecutionJob.getId(), replayJobInstance)
                .addLong(PipelineRunJobParameterKeys.JOB_SEQUENCE, Long.valueOf(jobSequence), false)
                .toJobParameters();
    }

    /**
     * Marks the remaining execution jobs as not run after one job fails or stops
     * the execution.
     *
     * @param pipelineRunExecutionJobs execution jobs for the current execution
     * @param currentJobSequence zero-based job sequence that just finished
     */
    private void markRemainingJobsNotRun(List<PipelineRunExecutionJob> pipelineRunExecutionJobs, int currentJobSequence) {
        if (currentJobSequence + 1 >= pipelineRunExecutionJobs.size()) {
            return;
        }

        List<Long> remainingExecutionJobIds = pipelineRunExecutionJobs.subList(
                currentJobSequence + 1,
                pipelineRunExecutionJobs.size()).stream()
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(remainingExecutionJobIds);
    }

    /**
     * Marks all pending execution jobs of one execution as not run.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     */
    private void markPendingExecutionJobsNotRun(Long pipelineRunExecutionId) {
        List<Long> pendingExecutionJobIds = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId)
                .stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.PENDING.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(pendingExecutionJobIds);
    }

    /**
     * Finalizes a stop request if the execution is already in stopping or stopped
     * state.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     * @return {@code true} when execution should stop immediately
     */
    private boolean finalizeStopIfRequested(Long pipelineRunExecutionId) {
        PipelineRunExecution latestExecution = pipelineRunExecutionRepo.findById(pipelineRunExecutionId)
                .orElse(null);
        if (latestExecution == null || !pipelineRunControlPolicy.isStopState(latestExecution.getStatus())) {
            return false;
        }

        markPendingExecutionJobsNotRun(pipelineRunExecutionId);
        pipelineRunLifecycleService.markStopped(latestExecution.getPipelineRunId(), pipelineRunExecutionId);
        return true;
    }

    /**
     * Finds the currently running Spring Batch execution id for one pipeline run
     * execution.
     *
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     * @return running Spring Batch execution id, or {@code null} when not found
     */
    private Long findRunningBatchExecutionId(Long pipelineRunId, Long pipelineRunExecutionId) {
        Long currentExecutionId = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.STARTED.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getLastJobExecutionId)
                .filter(Objects::nonNull)
                .findFirst()
                .orElse(null);
        if (currentExecutionId != null) {
            return currentExecutionId;
        }

        return pipelineRunJobRepo.findByPipelineRunIdOrderByJobSequenceOrder(pipelineRunId).stream()
                .map(PipelineRunJob::getJobName)
                .flatMap(jobName -> jobExplorer.findRunningJobExecutions(jobName).stream())
                .filter(jobExecution -> matchesPipelineExecution(jobExecution, pipelineRunId, pipelineRunExecutionId))
                .map(JobExecution::getId)
                .max(Comparator.naturalOrder())
                .orElse(null);
    }

    /**
     * Checks whether one Spring Batch execution belongs to the target pipeline run
     * execution.
     *
     * @param jobExecution Spring Batch job execution
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     * @return {@code true} when the job execution belongs to the target run execution
     */
    private boolean matchesPipelineExecution(JobExecution jobExecution, Long pipelineRunId, Long pipelineRunExecutionId) {
        Long jobPipelineRunId = jobExecution.getJobParameters().getLong(PipelineRunJobParameterKeys.PIPELINE_RUN_ID);
        Long jobPipelineRunExecutionId = jobExecution.getJobParameters()
                .getLong(PipelineRunJobParameterKeys.PIPELINE_RUN_EXECUTION_ID);
        return Objects.equals(pipelineRunId, jobPipelineRunId)
                && Objects.equals(pipelineRunExecutionId, jobPipelineRunExecutionId);
    }
}
