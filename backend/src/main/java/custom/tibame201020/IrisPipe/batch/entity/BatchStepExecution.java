package custom.tibame201020.IrisPipe.batch.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BATCH_STEP_EXECUTION")
public class BatchStepExecution {

    @Id
    @Column(name = "STEP_EXECUTION_ID")
    private Long stepExecutionId;

    @Column(name = "VERSION")
    private Long version;

    @Column(name = "STEP_NAME")
    private String stepName;

    @ManyToOne
    @JoinColumn(name = "JOB_EXECUTION_ID")
    private BatchJobExecution jobExecution;

    @Column(name = "CREATE_TIME")
    private LocalDateTime createTime;

    @Column(name = "START_TIME")
    private LocalDateTime startTime;

    @Column(name = "END_TIME")
    private LocalDateTime endTime;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "COMMIT_COUNT")
    private Long commitCount;

    @Column(name = "READ_COUNT")
    private Long readCount;

    @Column(name = "FILTER_COUNT")
    private Long filterCount;

    @Column(name = "WRITE_COUNT")
    private Long writeCount;

    @Column(name = "READ_SKIP_COUNT")
    private Long readSkipCount;

    @Column(name = "WRITE_SKIP_COUNT")
    private Long writeSkipCount;

    @Column(name = "PROCESS_SKIP_COUNT")
    private Long processSkipCount;

    @Column(name = "ROLLBACK_COUNT")
    private Long rollbackCount;

    @Column(name = "EXIT_CODE")
    private String exitCode;

    @Column(name = "EXIT_MESSAGE")
    private String exitMessage;

    @Column(name = "LAST_UPDATED")
    private LocalDateTime lastUpdated;
}
