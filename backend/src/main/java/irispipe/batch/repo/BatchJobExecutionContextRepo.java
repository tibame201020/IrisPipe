package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobExecutionContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA repository for Spring Batch job execution context rows.
 */
@Repository
public interface BatchJobExecutionContextRepo extends JpaRepository<BatchJobExecutionContext, Long> {
}
