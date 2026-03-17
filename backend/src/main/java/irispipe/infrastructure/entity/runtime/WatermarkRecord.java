package irispipe.infrastructure.entity.runtime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * Persistent execution watermark row keyed by execution, table, and watermark
 * column.
 */
@Entity
@Table(name = "iris_watermark_record")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@IdClass(WatermarkRecordId.class)
public class WatermarkRecord {

    @Id
    @Column(name = "execution_name")
    private String executionName;

    @Id
    @Column(name = "table_name")
    private String tableName;

    @Id
    @Column(name = "watermark_column")
    private String watermarkColumn;

    @Column(name = "last_value", length = 1000)
    private String lastValue;

    @Column(name = "last_start_time")
    private LocalDateTime lastStartTime;

    @Column(name = "last_end_time")
    private LocalDateTime lastEndTime;

    @Column(name = "last_update_time")
    private LocalDateTime lastUpdateTime;
}

/**
 * Composite id for one persisted watermark record.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
class WatermarkRecordId implements Serializable {
    private String executionName;
    private String tableName;
    private String watermarkColumn;
}
