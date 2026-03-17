package irispipe.infrastructure.repo.config;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.config.PipelineJobDefinition;

@Repository
public interface PipelineJobDefinitionRepo extends JpaRepository<PipelineJobDefinition, Long> {

    List<PipelineJobDefinition> findByPipelineIdOrderBySequenceOrder(Long pipelineId);
}
