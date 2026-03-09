package custom.tibame201020.IrisPipe.batch.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import custom.tibame201020.IrisPipe.batch.entity.BatchStepExecutionContext;

@Repository
public interface BatchStepExecutionContextRepo extends JpaRepository<BatchStepExecutionContext, Long> {
}
