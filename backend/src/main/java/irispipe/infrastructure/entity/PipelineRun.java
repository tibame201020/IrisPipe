package irispipe.infrastructure.entity;

import java.time.LocalDateTime;

import irispipe.model.PipelineRunStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "iris_pipeline_run")
public class PipelineRun {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "workspace_id")
    private Long workspaceId;

    @Column(name = "pipeline_id")
    private Long pipelineId;

    @Column(name = "rerun_from_pipeline_run_id")
    private Long rerunFromPipelineRunId;

    @Column(name = "latest_execution_id")
    private Long latestExecutionId;

    @Column(name = "requested_async")
    private Boolean requestedAsync;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private PipelineRunStatus status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
