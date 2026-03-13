package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobExecution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchJobExecutionRepo extends JpaRepository<BatchJobExecution, Long> {
    long countByJobInstanceJobInstanceId(Long jobInstanceId);
}
