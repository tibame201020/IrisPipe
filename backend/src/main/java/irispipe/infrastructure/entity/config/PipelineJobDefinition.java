package irispipe.infrastructure.entity.config;

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

import irispipe.model.AtomicLevel;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "iris_pipeline_job")
public class PipelineJobDefinition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pipeline_id")
    private Long pipelineId;

    @Column(name = "sequence_order")
    private Integer sequenceOrder;

    @Column(name = "job_name")
    private String jobName;

    @Column(name = "fetch_size")
    private Integer fetchSize;

    @Column(name = "batch_size")
    private Integer batchSize;

    @Column(name = "delete_threshold")
    private Integer deleteThreshold;

    @Enumerated(EnumType.STRING)
    @Column(name = "atomic_level")
    private AtomicLevel atomicLevel;
}
