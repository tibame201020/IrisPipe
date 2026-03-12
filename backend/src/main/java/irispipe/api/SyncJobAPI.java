package irispipe.api;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;

import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import irispipe.model.dto.SyncJobDTO;
import irispipe.core.service.JobExecutionService;
import irispipe.infrastructure.service.JobMetadataService;

@RestController
@RequestMapping("/api/v1/sync-job")
public class SyncJobAPI {
    private final JobLauncher jobLauncher;
    private final JobLauncher asyncJobLauncher;
    private final JobExplorer jobExplorer;
    private final JobExecutionService jobExecutionService;
    private final JobMetadataService jobMetadataService;
    private final String configAcceptPath;

    public SyncJobAPI(JobLauncher jobLauncher, JobLauncher asyncJobLauncher, JobExplorer jobExplorer,
            JobExecutionService jobExecutionService, JobMetadataService jobMetadataService, Environment environment) {
        this.jobLauncher = jobLauncher;
        this.asyncJobLauncher = asyncJobLauncher;
        this.jobExplorer = jobExplorer;
        this.jobExecutionService = jobExecutionService;
        this.jobMetadataService = jobMetadataService;
        this.configAcceptPath = environment.getRequiredProperty("config.accept-path", String.class);
    }

    @GetMapping
    public List<SyncJobDTO.JobSummaryInfo> getJobSummariesByIds(@RequestParam("ids") List<Long> jobIds) {
        return jobIds.stream()
                .map(jobExplorer::getJobExecution)
                .filter(Objects::nonNull)
                .map(SyncJobDTO.JobSummaryInfo::render)
                .toList();
    }

    @PostMapping
    public List<SyncJobDTO.JobSummaryInfo> executeJob(@RequestBody SyncJobDTO.JobExecuteRequest jobExecuteRequest) {
        boolean useAsyncLauncher = Boolean.TRUE.equals(jobExecuteRequest.useAsyncLauncher());
        JobLauncher jobLauncher = useAsyncLauncher ? this.asyncJobLauncher : this.jobLauncher;
        String configPath = jobExecuteRequest.configPath();
        Path path = Paths.get(configAcceptPath, configPath);

        return jobExecutionService.execute(jobLauncher, path)
                .stream()
                .map(SyncJobDTO.JobSummaryInfo::render)
                .toList();
    }

    @GetMapping("/{jobId}")
    public SyncJobDTO.JobDetailInfo getJobDetail(@PathVariable("jobId") Long jobId) {
        return SyncJobDTO.JobDetailInfo.render(jobExplorer.getJobExecution(jobId));
    }

    @DeleteMapping("/{jobId}")
    public ResponseEntity<Void> deleteMetadata(@PathVariable("jobId") Long jobId) {
        jobMetadataService.deleteByJobExecution(jobExplorer.getJobExecution(jobId));
        return ResponseEntity.noContent().build();
    }
}
