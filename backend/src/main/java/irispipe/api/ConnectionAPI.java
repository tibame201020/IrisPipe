package irispipe.api;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import irispipe.infrastructure.entity.config.IrisConnection;
import irispipe.infrastructure.repo.config.IrisConnectionRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;

/**
 * Connection Library — CRUD, test, and driver preset endpoints.
 */
@RestController
@RequestMapping("/api/v1/connections")
@Tag(name = "Connections", description = "Connection Library — CRUD, test, and driver preset endpoints.")
public class ConnectionAPI {

    private final IrisConnectionRepo connectionRepo;
    private final WorkspaceContextService workspaceContextService;

    public ConnectionAPI(IrisConnectionRepo connectionRepo, WorkspaceContextService workspaceContextService) {
        this.connectionRepo = connectionRepo;
        this.workspaceContextService = workspaceContextService;
    }

    @GetMapping
    @Operation(summary = "List connections", description = "Returns all saved connections for the current workspace.")
    public List<ConnectionDTO> listConnections() {
        Long wsId = workspaceContextService.getCurrentWorkspaceId();
        return connectionRepo.findAllByWorkspaceIdOrderByNameAsc(wsId).stream()
                .map(this::toDTO).toList();
    }

    @PostMapping
    @Operation(summary = "Create connection", description = "Creates a new saved connection for the current workspace.")
    public ResponseEntity<ConnectionDTO> createConnection(@RequestBody ConnectionUpsertRequest req) {
        Long wsId = workspaceContextService.getCurrentWorkspaceId();
        LocalDateTime now = LocalDateTime.now();
        IrisConnection conn = new IrisConnection(null, wsId, req.name(), req.driver(), req.url(),
                req.username(), req.password(), now, now);
        return ResponseEntity.ok(toDTO(connectionRepo.save(conn)));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update connection", description = "Updates an existing saved connection.")
    public ResponseEntity<ConnectionDTO> updateConnection(@PathVariable Long id,
            @RequestBody ConnectionUpsertRequest req) {
        Long wsId = workspaceContextService.getCurrentWorkspaceId();
        IrisConnection conn = connectionRepo.findByIdAndWorkspaceId(id, wsId)
                .orElseThrow(() -> new IllegalArgumentException("Connection not found: " + id));
        conn.setName(req.name());
        conn.setDriver(req.driver());
        conn.setUrl(req.url());
        conn.setUsername(req.username());
        conn.setPassword(req.password());
        conn.setUpdatedAt(LocalDateTime.now());
        return ResponseEntity.ok(toDTO(connectionRepo.save(conn)));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete connection", description = "Deletes a saved connection.")
    public ResponseEntity<Void> deleteConnection(@PathVariable Long id) {
        Long wsId = workspaceContextService.getCurrentWorkspaceId();
        IrisConnection conn = connectionRepo.findByIdAndWorkspaceId(id, wsId)
                .orElseThrow(() -> new IllegalArgumentException("Connection not found: " + id));
        connectionRepo.delete(conn);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/test")
    @Operation(summary = "Test connection", description = "Tests a JDBC connection without saving it.")
    public ConnectionTestResult testConnection(@RequestBody ConnectionTestRequest req) {
        long start = System.currentTimeMillis();
        try {
            Class.forName(req.driver());
            try (Connection conn = DriverManager.getConnection(req.url(), req.username(), req.password())) {
                DatabaseMetaData meta = conn.getMetaData();
                long latency = System.currentTimeMillis() - start;
                return new ConnectionTestResult(true, "Connection successful",
                        meta.getDatabaseProductName() + " " + meta.getDatabaseProductVersion(), latency);
            }
        } catch (Exception e) {
            long latency = System.currentTimeMillis() - start;
            return new ConnectionTestResult(false, e.getMessage(), null, latency);
        }
    }

    @GetMapping("/drivers")
    @Operation(summary = "List driver presets", description = "Returns built-in JDBC driver presets for common databases.")
    public List<DriverPreset> getDriverPresets() {
        return List.of(
                new DriverPreset("H2 (Embedded)", "org.h2.Driver",
                        "jdbc:h2:{path};AUTO_SERVER=TRUE",
                        List.of(new DriverPlaceholder("path", "Database Path", "./h2data/mydb")),
                        null, true),
                new DriverPreset("MySQL", "com.mysql.cj.jdbc.Driver",
                        "jdbc:mysql://{host}:{port}/{database}",
                        List.of(new DriverPlaceholder("host", "Host", "localhost"),
                                new DriverPlaceholder("port", "Port", "3306"),
                                new DriverPlaceholder("database", "Database", "mydb")),
                        3306, true),
                new DriverPreset("PostgreSQL", "org.postgresql.Driver",
                        "jdbc:postgresql://{host}:{port}/{database}",
                        List.of(new DriverPlaceholder("host", "Host", "localhost"),
                                new DriverPlaceholder("port", "Port", "5432"),
                                new DriverPlaceholder("database", "Database", "mydb")),
                        5432, true),
                new DriverPreset("SQL Server", "com.microsoft.sqlserver.jdbc.SQLServerDriver",
                        "jdbc:sqlserver://{host}:{port};databaseName={database}",
                        List.of(new DriverPlaceholder("host", "Host", "localhost"),
                                new DriverPlaceholder("port", "Port", "1433"),
                                new DriverPlaceholder("database", "Database", "mydb")),
                        1433, true),
                new DriverPreset("Custom", "", "", List.of(), null, true));
    }

    private ConnectionDTO toDTO(IrisConnection c) {
        return new ConnectionDTO(c.getId(), c.getName(), c.getDriver(), c.getUrl(),
                c.getUsername(), c.getCreatedAt(), c.getUpdatedAt());
    }

    // ─── Records ─────────────────────────────────────────────────────────────

    public record ConnectionDTO(Long id, String name, String driver, String url,
            String username, LocalDateTime createdAt, LocalDateTime updatedAt) {
    }

    public record ConnectionUpsertRequest(String name, String driver, String url,
            String username, String password) {
    }

    public record ConnectionTestRequest(String driver, String url, String username, String password) {
    }

    public record ConnectionTestResult(boolean success, String message, String serverInfo, Long latencyMs) {
    }

    public record DriverPreset(String name, String driverClass, String urlTemplate,
            List<DriverPlaceholder> urlPlaceholders, Integer defaultPort, boolean testable) {
    }

    public record DriverPlaceholder(String key, String label, String example) {
    }
}
