package irispipe.infrastructure.repo.runtime;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import irispipe.infrastructure.entity.runtime.PipelineRunSnapshot;

public interface PipelineRunSnapshotRepo extends JpaRepository<PipelineRunSnapshot, Long> {
    Optional<PipelineRunSnapshot> findByPipelineRunId(Long pipelineRunId);
}
