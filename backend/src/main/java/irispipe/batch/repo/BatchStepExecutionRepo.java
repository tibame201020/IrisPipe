package irispipe.batch.repo;

import irispipe.batch.entity.BatchStepExecution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchStepExecutionRepo extends JpaRepository<BatchStepExecution, Long> {
}
