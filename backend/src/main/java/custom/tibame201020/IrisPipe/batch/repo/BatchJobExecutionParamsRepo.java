package custom.tibame201020.IrisPipe.batch.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import custom.tibame201020.IrisPipe.batch.entity.BatchJobExecutionParams;
import custom.tibame201020.IrisPipe.batch.entity.BatchJobExecutionParamsId;

@Repository
public interface BatchJobExecutionParamsRepo extends JpaRepository<BatchJobExecutionParams, BatchJobExecutionParamsId> {
}
