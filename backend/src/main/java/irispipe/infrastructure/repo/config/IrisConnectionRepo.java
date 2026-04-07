package irispipe.infrastructure.repo.config;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import irispipe.infrastructure.entity.config.IrisConnection;

public interface IrisConnectionRepo extends JpaRepository<IrisConnection, Long> {

    List<IrisConnection> findAllByWorkspaceIdOrderByNameAsc(Long workspaceId);

    Optional<IrisConnection> findByIdAndWorkspaceId(Long id, Long workspaceId);

    boolean existsByWorkspaceIdAndName(Long workspaceId, String name);
}
