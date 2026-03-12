package irispipe.batch.repo;

import irispipe.batch.entity.BatchJobInstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchJobInstanceRepo extends JpaRepository<BatchJobInstance, Long> {
}
