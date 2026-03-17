package irispipe.infrastructure.repo.runtime;

import irispipe.infrastructure.entity.runtime.WatermarkRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA repository for persisted execution watermark rows.
 */
@Repository
public interface WatermarkRecordRepo extends JpaRepository<WatermarkRecord, Object> {

    WatermarkRecord findByExecutionNameAndTableNameAndWatermarkColumn(String executionName, String tableName,
            String watermarkColumn);
}
