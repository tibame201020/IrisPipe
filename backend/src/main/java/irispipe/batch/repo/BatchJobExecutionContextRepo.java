package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobExecutionContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchJobExecutionContextRepo extends JpaRepository<BatchJobExecutionContext, Long> {
}
