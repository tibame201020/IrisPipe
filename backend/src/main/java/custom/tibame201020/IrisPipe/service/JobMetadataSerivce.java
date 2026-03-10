package custom.tibame201020.IrisPipe.service;

import java.util.List;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import custom.tibame201020.IrisPipe.batch.entity.BatchJobExecution;
import custom.tibame201020.IrisPipe.batch.entity.BatchJobExecutionParams;
import custom.tibame201020.IrisPipe.batch.entity.BatchJobInstance;
import custom.tibame201020.IrisPipe.batch.entity.BatchStepExecution;
import custom.tibame201020.IrisPipe.batch.entity.BatchStepExecutionContext;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionContextRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionParamsRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobInstanceRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchStepExecutionContextRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchStepExecutionRepo;

@Service
public class JobMetadataSerivce {
    private final BatchJobExecutionContextRepo batchJobExecutionContextRepo;
    private final BatchJobExecutionParamsRepo batchJobExecutionParamsRepo;
    private final BatchJobExecutionRepo batchJobExecutionRepo;
    private final BatchJobInstanceRepo batchJobInstanceRepo;
    private final BatchStepExecutionContextRepo batchStepExecutionContextRepo;
    private final BatchStepExecutionRepo batchStepExecutionRepo;

    public JobMetadataSerivce(
            BatchJobExecutionContextRepo batchJobExecutionContextRepo,
            BatchJobExecutionParamsRepo batchJobExecutionParamsRepo,
            BatchJobExecutionRepo batchJobExecutionRepo,
            BatchJobInstanceRepo batchJobInstanceRepo,
            BatchStepExecutionRepo batchStepExecutionRepo,
            BatchStepExecutionContextRepo batchStepExecutionContextRepo) {
        this.batchJobExecutionContextRepo = batchJobExecutionContextRepo;
        this.batchJobExecutionParamsRepo = batchJobExecutionParamsRepo;
        this.batchJobExecutionRepo = batchJobExecutionRepo;
        this.batchJobInstanceRepo = batchJobInstanceRepo;
        this.batchStepExecutionRepo = batchStepExecutionRepo;
        this.batchStepExecutionContextRepo = batchStepExecutionContextRepo;
    }

    public String getJobKeyByJobId(Long jobId) {
        return batchJobInstanceRepo.findById(jobId)
                .map(BatchJobInstance::getJobKey)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    @Transactional
    public void deleteByJobExecution(JobExecution jobExecution) {
        Long jobExecutionId = jobExecution.getId();
        Long jobInstanceId = jobExecution.getJobInstance().getId();
        List<Long> stepExecutionIds = jobExecution.getStepExecutions().stream()
                .map(StepExecution::getId)
                .toList();

        List<BatchStepExecutionContext> batchStepExecutionContexts = stepExecutionIds.stream()
                .map(stepExecutionId -> batchStepExecutionContextRepo.findById(stepExecutionId)
                        .orElseThrow(() -> new RuntimeException("Step execution not found")))
                .toList();
        batchStepExecutionContextRepo.deleteAll(batchStepExecutionContexts);

        List<BatchStepExecution> batchStepExecutions = stepExecutionIds.stream()
                .map(stepExecutionId -> batchStepExecutionRepo.findById(stepExecutionId)
                        .orElseThrow(() -> new RuntimeException("Step execution not found")))
                .toList();
        batchStepExecutionRepo.deleteAll(batchStepExecutions);

        List<BatchJobExecutionParams> batchJobExecutionParams = batchJobExecutionParamsRepo
                .findByJobExecutionId(jobExecutionId);
        batchJobExecutionParamsRepo.deleteAll(batchJobExecutionParams);

        BatchJobExecution batchJobExecution = batchJobExecutionRepo.findById(jobExecutionId)
                .orElseThrow(() -> new RuntimeException("Job execution not found"));
        batchJobExecutionRepo.delete(batchJobExecution);

        BatchJobInstance batchJobInstance = batchJobInstanceRepo.findById(jobInstanceId)
                .orElseThrow(() -> new RuntimeException("Job instance not found"));
        batchJobInstanceRepo.delete(batchJobInstance);

    }

}
