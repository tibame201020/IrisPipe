package irispipe.batch.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA mapping for Spring Batch job instance rows.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BATCH_JOB_INSTANCE")
public class BatchJobInstance {

    @Id
    @Column(name = "JOB_INSTANCE_ID")
    private Long jobInstanceId;

    @Column(name = "VERSION")
    private Long version;

    @Column(name = "JOB_NAME")
    private String jobName;

    @Column(name = "JOB_KEY")
    private String jobKey;
}
