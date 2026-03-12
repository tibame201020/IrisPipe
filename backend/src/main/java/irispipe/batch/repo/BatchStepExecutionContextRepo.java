package irispipe.batch.repo;

import irispipe.batch.entity.BatchStepExecutionContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchStepExecutionContextRepo extends JpaRepository<BatchStepExecutionContext, Long> {
}
