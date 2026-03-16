package irispipe.infrastructure.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineFolder;

@Repository
public interface PipelineFolderRepo extends JpaRepository<PipelineFolder, Long> {

    Optional<PipelineFolder> findBySystemRootTrue();

    List<PipelineFolder> findAllByOrderByIdAsc();

    List<PipelineFolder> findByParentIdOrderByFolderNameAsc(Long parentId);

    Optional<PipelineFolder> findByParentIdAndFolderName(Long parentId, String folderName);

    boolean existsByParentIdAndFolderName(Long parentId, String folderName);
}
