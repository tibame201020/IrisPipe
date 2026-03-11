package custom.tibame201020.IrisPipe.repo;

import custom.tibame201020.IrisPipe.data.WatermarkRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatermarkRecordRepo extends JpaRepository<WatermarkRecord, Object> {

    WatermarkRecord findByExecutionNameAndTableNameAndWatermarkColumn(String executionName, String tableName,
            String watermarkColumn);
}
