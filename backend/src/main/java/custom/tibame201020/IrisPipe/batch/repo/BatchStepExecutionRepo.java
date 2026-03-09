package custom.tibame201020.IrisPipe.batch.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import custom.tibame201020.IrisPipe.batch.entity.BatchStepExecution;

@Repository
public interface BatchStepExecutionRepo extends JpaRepository<BatchStepExecution, Long> {
}
