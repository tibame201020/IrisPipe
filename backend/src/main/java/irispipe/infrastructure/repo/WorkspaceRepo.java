package irispipe.infrastructure.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.Workspace;

@Repository
public interface WorkspaceRepo extends JpaRepository<Workspace, Long> {

    Optional<Workspace> findByWorkspaceKey(String workspaceKey);

    Optional<Workspace> findBySystemDefaultTrue();

    boolean existsByWorkspaceKey(String workspaceKey);

    List<Workspace> findAllByOrderByIdAsc();
}
