package irispipe.infrastructure.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineJobConnection;

@Repository
public interface PipelineJobConnectionRepo extends JpaRepository<PipelineJobConnection, Long> {

    List<PipelineJobConnection> findByJobIdIn(List<Long> jobIds);
}
