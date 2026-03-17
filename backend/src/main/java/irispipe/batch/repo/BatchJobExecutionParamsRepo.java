package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobExecutionParams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * JPA repository for Spring Batch job execution parameter rows.
 */
@Repository
public interface BatchJobExecutionParamsRepo extends JpaRepository<BatchJobExecutionParams, Object> {
    List<BatchJobExecutionParams> findByJobExecutionId(Long jobExecutionId);
}
