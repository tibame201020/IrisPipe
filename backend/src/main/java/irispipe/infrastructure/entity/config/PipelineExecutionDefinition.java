package irispipe.infrastructure.entity.config;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import irispipe.model.ExecutionType;

/**
 * Persistent execution-step row belonging to one pipeline job definition.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "iris_pipeline_execution")
public class PipelineExecutionDefinition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_id")
    private Long jobId;

    @Column(name = "sequence_order")
    private Integer sequenceOrder;

    @Column(name = "execution_name")
    private String executionName;

    @Enumerated(EnumType.STRING)
    @Column(name = "execution_type")
    private ExecutionType executionType;

    @Lob
    @Column(name = "sql_statement")
    private String sqlStatement;

    @Column(name = "dest_table")
    private String destTable;

    @Column(name = "watermark_column")
    private String watermarkColumn;
}
