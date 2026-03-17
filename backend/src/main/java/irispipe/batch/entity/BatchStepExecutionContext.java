package irispipe.batch.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA mapping for Spring Batch step execution context rows.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BATCH_STEP_EXECUTION_CONTEXT")
public class BatchStepExecutionContext {

    @Id
    @Column(name = "STEP_EXECUTION_ID")
    private Long stepExecutionId;

    @Column(name = "SHORT_CONTEXT")
    private String shortContext;

    @Column(name = "SERIALIZED_CONTEXT")
    private String serializedContext;
}
