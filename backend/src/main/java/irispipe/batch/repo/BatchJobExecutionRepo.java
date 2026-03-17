package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobExecution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA repository for Spring Batch job execution rows.
 */
@Repository
public interface BatchJobExecutionRepo extends JpaRepository<BatchJobExecution, Long> {
    long countByJobInstanceJobInstanceId(Long jobInstanceId);
}
