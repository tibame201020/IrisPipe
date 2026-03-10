package custom.tibame201020.IrisPipe.service;

import java.util.List;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import custom.tibame201020.IrisPipe.batch.entity.BatchJobExecutionParams;
import custom.tibame201020.IrisPipe.batch.entity.BatchJobInstance;
import custom.tibame201020.IrisPipe.error.exception.ResourceNotFoundException;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionContextRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionParamsRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobExecutionRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchJobInstanceRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchStepExecutionContextRepo;
import custom.tibame201020.IrisPipe.batch.repo.BatchStepExecutionRepo;

@Service
public class JobMetadataService {
        private final BatchJobExecutionContextRepo batchJobExecutionContextRepo;
        private final BatchJobExecutionParamsRepo batchJobExecutionParamsRepo;
        private final BatchJobExecutionRepo batchJobExecutionRepo;
        private final BatchJobInstanceRepo batchJobInstanceRepo;
        private final BatchStepExecutionContextRepo batchStepExecutionContextRepo;
        private final BatchStepExecutionRepo batchStepExecutionRepo;

        public JobMetadataService(
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
                                .orElseThrow(() -> new ResourceNotFoundException("Job finding", "Job not found"));
        }

        @Transactional
        public void deleteByJobExecution(JobExecution jobExecution) {
                if (jobExecution == null) {
                        throw new ResourceNotFoundException("Job metadata deletion", "Job Execution not found");
                }
                Long jobExecutionId = jobExecution.getId();
                Long jobInstanceId = jobExecution.getJobInstance().getId();
                List<Long> stepExecutionIds = jobExecution.getStepExecutions().stream()
                                .map(StepExecution::getId)
                                .toList();

                if (!stepExecutionIds.isEmpty()) {
                        batchStepExecutionContextRepo.deleteAllByIdInBatch(stepExecutionIds);
                        batchStepExecutionRepo.deleteAllByIdInBatch(stepExecutionIds);
                }

                List<BatchJobExecutionParams> params = batchJobExecutionParamsRepo.findByJobExecutionId(jobExecutionId);
                if (!params.isEmpty()) {
                        batchJobExecutionParamsRepo.deleteAllInBatch(params);
                }

                batchJobExecutionContextRepo.deleteById(jobExecutionId);
                batchJobExecutionRepo.deleteById(jobExecutionId);
                batchJobInstanceRepo.deleteById(jobInstanceId);
        }

}
