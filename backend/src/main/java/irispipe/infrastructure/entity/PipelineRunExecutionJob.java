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
@Table(name = "iris_pipeline_run_execution_job")
public class PipelineRunExecutionJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pipeline_run_execution_id")
    private Long pipelineRunExecutionId;

    @Column(name = "pipeline_run_job_id")
    private Long pipelineRunJobId;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private PipelineRunStatus status;

    @Column(name = "root_job_instance_id")
    private Long rootJobInstanceId;

    @Column(name = "last_job_execution_id")
    private Long lastJobExecutionId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
