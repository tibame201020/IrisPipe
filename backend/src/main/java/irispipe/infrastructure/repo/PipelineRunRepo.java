package irispipe.infrastructure.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRun;

@Repository
public interface PipelineRunRepo extends JpaRepository<PipelineRun, Long> {
    List<PipelineRun> findAllByOrderByIdAsc();
}
