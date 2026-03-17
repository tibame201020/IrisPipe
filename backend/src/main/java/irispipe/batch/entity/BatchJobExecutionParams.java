package irispipe.batch.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA mapping for Spring Batch job execution parameter rows.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BATCH_JOB_EXECUTION_PARAMS")
@IdClass(BatchJobExecutionParamsId.class)
public class BatchJobExecutionParams {

    @Id
    @Column(name = "JOB_EXECUTION_ID")
    private Long jobExecutionId;

    @Id
    @Column(name = "PARAMETER_NAME")
    private String parameterName;

    @Column(name = "PARAMETER_TYPE")
    private String parameterType;

    @Column(name = "PARAMETER_VALUE")
    private String parameterValue;

    @Column(name = "IDENTIFYING")
    private String identifying;
}
