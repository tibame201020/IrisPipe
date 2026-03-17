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

    public void launch(PipelineRunLaunchRequest launchRequest, boolean requestedAsync) {
        if (requestedAsync) {
            pipelineTaskExecutor.execute(() -> executePipelineRun(launchRequest));
            return;
        }
        executePipelineRun(launchRequest);
    }

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

    private JobParameters buildJobParameters(Long pipelineId, SyncJobDefinition syncJob, PipelineRunJob pipelineRunJob,
            PipelineRunExecution pipelineRunExecution, PipelineRunExecutionJob pipelineRunExecutionJob, int jobSequence) {
        boolean replayJobInstance = PipelineRunExecutionKind.RESUME.equals(pipelineRunExecution.getExecutionKind())
                && AtomicLevel.JOB.equals(syncJob.getSetting().atomicLevel());

        return new JobParametersBuilder()
                .addLong("pipeline.run.job.id", pipelineRunJob.getId(), !replayJobInstance)
                .addLong("pipeline.id", pipelineId, false)
                .addLong("pipeline.run.id", pipelineRunJob.getPipelineRunId(), false)
                .addLong("pipeline.run.execution.id", pipelineRunExecution.getId(), false)
                .addLong("pipeline.run.execution.job.id", pipelineRunExecutionJob.getId(), replayJobInstance)
                .addLong("job.sequence", Long.valueOf(jobSequence), false)
                .toJobParameters();
    }

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

    private void markPendingExecutionJobsNotRun(Long pipelineRunExecutionId) {
        List<Long> pendingExecutionJobIds = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId)
                .stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.PENDING.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(pendingExecutionJobIds);
    }

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

    private boolean matchesPipelineExecution(JobExecution jobExecution, Long pipelineRunId, Long pipelineRunExecutionId) {
        Long jobPipelineRunId = jobExecution.getJobParameters().getLong("pipeline.run.id");
        Long jobPipelineRunExecutionId = jobExecution.getJobParameters().getLong("pipeline.run.execution.id");
        return Objects.equals(pipelineRunId, jobPipelineRunId)
                && Objects.equals(pipelineRunExecutionId, jobPipelineRunExecutionId);
    }
}
