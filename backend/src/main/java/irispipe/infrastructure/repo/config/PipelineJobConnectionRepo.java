package irispipe.infrastructure.repo.config;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.config.PipelineJobConnection;

/**
 * JPA repository for persisted job connection rows.
 */
@Repository
public interface PipelineJobConnectionRepo extends JpaRepository<PipelineJobConnection, Long> {

    List<PipelineJobConnection> findByJobIdIn(List<Long> jobIds);
}
