package irispipe.infrastructure.repo.config;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.config.PipelineJobDefinition;

/**
 * JPA repository for persisted pipeline job definition rows.
 */
@Repository
public interface PipelineJobDefinitionRepo extends JpaRepository<PipelineJobDefinition, Long> {

    List<PipelineJobDefinition> findByPipelineIdOrderByStageSequenceOrderAscSequenceOrderAsc(Long pipelineId);
}
