package irispipe.infrastructure.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineDefinition;

@Repository
public interface PipelineDefinitionRepo extends JpaRepository<PipelineDefinition, Long> {

    boolean existsByConfigPath(String configPath);

    Optional<PipelineDefinition> findByConfigPath(String configPath);

    List<PipelineDefinition> findAllByOrderByIdAsc();
}
