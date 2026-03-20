package irispipe.core.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

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
    @PersistenceContext
    private EntityManager entityManager;

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
     * Launches one pipeline run execution.
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

        List<Long> runningBatchExecutionIds = findRunningBatchExecutionIds(pipelineRunId, latestExecution.getId());
        if (runningBatchExecutionIds.isEmpty()) {
            markPendingExecutionJobsNotRun(latestExecution.getId());
            pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
            return;
        }

        boolean stoppedAny = false;
        for (Long runningBatchExecutionId : runningBatchExecutionIds) {
            try {
                jobOperator.stop(runningBatchExecutionId);
                stoppedAny = true;
            } catch (NoSuchJobExecutionException | JobExecutionNotRunningException e) {
                logger.warn("pipeline run {} stop target {} was no longer running: {}",
                        pipelineRunId,
                        runningBatchExecutionId,
                        e.getMessage());
            }
        }

        if (!stoppedAny) {
            markPendingExecutionJobsNotRun(latestExecution.getId());
            pipelineRunLifecycleService.markStopped(pipelineRunId, latestExecution.getId());
        }
    }

    /**
     * Executes the pipeline run stage-by-stage until completion, stop, or failure.
     *
     * @param launchRequest immutable launch payload
     */
    private void executePipelineRun(PipelineRunLaunchRequest launchRequest) {
        Map<Integer, List<JobLaunchSlot>> stageLaunchPlan = buildStageLaunchPlan(launchRequest);
        for (Map.Entry<Integer, List<JobLaunchSlot>> stageEntry : stageLaunchPlan.entrySet()) {
            if (finalizeStopIfRequested(launchRequest.pipelineRunExecution().getId())) {
                return;
            }

            List<JobLaunchSlot> stageSlots = stageEntry.getValue();
            List<JobLaunchSlot> pendingStageSlots = stageSlots.stream()
                    .filter(jobLaunchSlot -> PipelineRunStatus.PENDING.equals(jobLaunchSlot.pipelineRunExecutionJob().getStatus()))
                    .toList();
            if (pendingStageSlots.isEmpty()) {
                continue;
            }

            List<PipelineRunStatus> stageOutcomes = executeStage(launchRequest, pendingStageSlots);

            PipelineRunExecution latestExecution = pipelineRunExecutionRepo
                    .findById(launchRequest.pipelineRunExecution().getId())
                    .orElse(null);
            if (latestExecution == null) {
                return;
            }
            if (pipelineRunControlPolicy.isStopState(latestExecution.getStatus())) {
                markFutureStagesNotRun(stageLaunchPlan, stageEntry.getKey());
                finalizeStopIfRequested(launchRequest.pipelineRunExecution().getId());
                return;
            }

            boolean stageFailed = stageOutcomes.stream().anyMatch(this::isTerminalFailure);
            if (stageFailed) {
                markFutureStagesNotRun(stageLaunchPlan, stageEntry.getKey());
                return;
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
     * Launches all pending jobs in one stage and waits for the stage barrier.
     *
     * @param launchRequest immutable launch payload
     * @param pendingStageSlots pending execution jobs that belong to one stage
     */
    private List<PipelineRunStatus> executeStage(PipelineRunLaunchRequest launchRequest, List<JobLaunchSlot> pendingStageSlots) {
        Executor executor = pipelineTaskExecutor::execute;
        List<CompletableFuture<PipelineRunStatus>> futures = pendingStageSlots.stream()
                .map(jobLaunchSlot -> CompletableFuture.supplyAsync(
                        () -> executeJobSlot(launchRequest.pipelineId(), launchRequest.pipelineRunExecution(), jobLaunchSlot),
                        executor))
                .toList();

        CompletableFuture.allOf(futures.toArray(CompletableFuture[]::new)).join();
        return futures.stream()
                .map(CompletableFuture::join)
                .toList();
    }

    private PipelineRunStatus executeJobSlot(Long pipelineId, PipelineRunExecution pipelineRunExecution, JobLaunchSlot jobLaunchSlot) {
        SyncJobContext syncJobContext = null;
        boolean closeSyncJobContext = true;
        try {
            syncJobContext = syncJobContextFactory.initialSyncJobContext(jobLaunchSlot.syncJob(), executionRecordService);
            Job job = syncJobFactory.createBatchJob(syncJobContext);
            JobParameters jobParameters = buildJobParameters(
                    pipelineId,
                    jobLaunchSlot.syncJob(),
                    jobLaunchSlot.pipelineRunJob(),
                    pipelineRunExecution,
                    jobLaunchSlot.pipelineRunExecutionJob(),
                    jobLaunchSlot.jobSequence());

            JobExecution jobExecution = jobLauncher.run(job, jobParameters);
            closeSyncJobContext = false;
            return PipelineRunStatus.from(jobExecution.getStatus());
        } catch (Exception e) {
            logger.error("pipeline {} stopped on job {}: {}",
                    pipelineId,
                    jobLaunchSlot.syncJob().getJobName(),
                    e.getMessage());
            pipelineRunLifecycleService.markLaunchFailed(
                    jobLaunchSlot.pipelineRunJob().getPipelineRunId(),
                    pipelineRunExecution.getId(),
                    jobLaunchSlot.pipelineRunJob().getId(),
                    jobLaunchSlot.pipelineRunExecutionJob().getId());
            return PipelineRunStatus.FAILED;
        } finally {
            if (closeSyncJobContext && syncJobContext != null) {
                syncJobContext.close();
            }
        }
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

    private Map<Integer, List<JobLaunchSlot>> buildStageLaunchPlan(PipelineRunLaunchRequest launchRequest) {
        Map<Integer, List<JobLaunchSlot>> stageLaunchPlan = new LinkedHashMap<>();
        for (int jobSequence = 0; jobSequence < launchRequest.syncJobs().size(); jobSequence++) {
            PipelineRunJob pipelineRunJob = launchRequest.pipelineRunJobs().get(jobSequence);
            stageLaunchPlan.computeIfAbsent(pipelineRunJob.getStageSequenceOrder(), ignored -> new ArrayList<>())
                    .add(new JobLaunchSlot(
                            launchRequest.syncJobs().get(jobSequence),
                            pipelineRunJob,
                            launchRequest.pipelineRunExecutionJobs().get(jobSequence),
                            jobSequence));
        }
        return stageLaunchPlan;
    }

    private List<PipelineRunExecutionJob> refreshExecutionJobs(List<JobLaunchSlot> stageSlots) {
        return pipelineRunExecutionJobRepo.findAllById(
                stageSlots.stream()
                        .map(jobLaunchSlot -> jobLaunchSlot.pipelineRunExecutionJob().getId())
                        .toList());
    }

    private void markFutureStagesNotRun(Map<Integer, List<JobLaunchSlot>> stageLaunchPlan, int currentStageSequenceOrder) {
        List<Long> pendingExecutionJobIds = stageLaunchPlan.entrySet().stream()
                .filter(stageEntry -> stageEntry.getKey() > currentStageSequenceOrder)
                .flatMap(stageEntry -> stageEntry.getValue().stream())
                .map(JobLaunchSlot::pipelineRunExecutionJob)
                .map(PipelineRunExecutionJob::getId)
                .toList();
        pipelineRunLifecycleService.markExecutionJobsNotRun(pendingExecutionJobIds);
    }

    /**
     * Waits briefly for lifecycle projections to reflect the terminal execution
     * state before a synchronous controller response is rendered.
     *
     * @param pipelineRunExecutionId pipeline run execution id
     */
    public void awaitExecutionProjection(Long pipelineRunExecutionId) {
        long deadline = System.nanoTime() + TimeUnit.SECONDS.toNanos(2);
        while (System.nanoTime() < deadline) {
            entityManager.clear();
            PipelineRunExecution latestExecution = pipelineRunExecutionRepo.findById(pipelineRunExecutionId)
                    .orElse(null);
            if (latestExecution == null || pipelineRunControlPolicy.isTerminalStatus(latestExecution.getStatus())) {
                return;
            }

            try {
                Thread.sleep(10);
            } catch (InterruptedException interruptedException) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }

    /**
     * Finds the currently running Spring Batch execution ids for one pipeline run
     * execution.
     *
     * @param pipelineRunId pipeline run id
     * @param pipelineRunExecutionId pipeline run execution id
     * @return running Spring Batch execution ids
     */
    private List<Long> findRunningBatchExecutionIds(Long pipelineRunId, Long pipelineRunExecutionId) {
        List<Long> currentExecutionIds = pipelineRunExecutionJobRepo.findByPipelineRunExecutionId(pipelineRunExecutionId).stream()
                .filter(pipelineRunExecutionJob -> PipelineRunStatus.STARTED.equals(pipelineRunExecutionJob.getStatus()))
                .map(PipelineRunExecutionJob::getLastJobExecutionId)
                .filter(Objects::nonNull)
                .distinct()
                .toList();
        if (!currentExecutionIds.isEmpty()) {
            return currentExecutionIds;
        }

        return pipelineRunJobRepo.findByPipelineRunIdOrderByStageSequenceOrderAscJobSequenceOrderAsc(pipelineRunId).stream()
                .map(PipelineRunJob::getJobName)
                .distinct()
                .flatMap(jobName -> jobExplorer.findRunningJobExecutions(jobName).stream())
                .filter(jobExecution -> matchesPipelineExecution(jobExecution, pipelineRunId, pipelineRunExecutionId))
                .map(JobExecution::getId)
                .sorted(Comparator.naturalOrder())
                .toList();
    }

    private boolean isTerminalFailure(PipelineRunStatus pipelineRunStatus) {
        return pipelineRunStatus == PipelineRunStatus.FAILED
                || pipelineRunStatus == PipelineRunStatus.STOPPED
                || pipelineRunStatus == PipelineRunStatus.ABANDONED
                || pipelineRunStatus == PipelineRunStatus.UNKNOWN;
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

    private record JobLaunchSlot(
            SyncJobDefinition syncJob,
            PipelineRunJob pipelineRunJob,
            PipelineRunExecutionJob pipelineRunExecutionJob,
            int jobSequence) {
    }
}
