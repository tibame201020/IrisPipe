package irispipe.infrastructure.entity.runtime;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Persistent snapshot row storing the materialized job payload for one pipeline
 * run.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "iris_pipeline_run_snapshot")
public class PipelineRunSnapshot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pipeline_run_id")
    private Long pipelineRunId;

    @Column(name = "snapshot_schema_version")
    private Integer snapshotSchemaVersion;

    @Column(name = "pipeline_content_hash")
    private String pipelineContentHash;

    @Lob
    @Column(name = "materialized_job_json")
    private String materializedJobJson;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
