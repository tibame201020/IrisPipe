package irispipe.batch.repo;

import irispipe.batch.entity.BatchStepExecutionContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA repository for Spring Batch step execution context rows.
 */
@Repository
public interface BatchStepExecutionContextRepo extends JpaRepository<BatchStepExecutionContext, Long> {
}
