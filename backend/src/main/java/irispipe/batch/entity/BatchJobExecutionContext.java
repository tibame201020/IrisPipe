package irispipe.batch.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BATCH_JOB_EXECUTION_CONTEXT")
public class BatchJobExecutionContext {

    @Id
    @Column(name = "JOB_EXECUTION_ID")
    private Long jobExecutionId;

    @Column(name = "SHORT_CONTEXT")
    private String shortContext;

    @Column(name = "SERIALIZED_CONTEXT")
    private String serializedContext;
}
