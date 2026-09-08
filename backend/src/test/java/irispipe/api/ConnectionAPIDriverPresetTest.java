package irispipe.api;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.Test;

import irispipe.infrastructure.repo.config.IrisConnectionRepo;
import irispipe.infrastructure.service.workspace.WorkspaceContextService;

class ConnectionAPIDriverPresetTest {

    @Test
    void mysqlPresetEnablesCursorStreamingForLargeReads() {
        ConnectionAPI api = new ConnectionAPI(
                mock(IrisConnectionRepo.class),
                mock(WorkspaceContextService.class));

        ConnectionAPI.DriverPreset mysql = api.getDriverPresets().stream()
                .filter(preset -> preset.name().equals("MySQL"))
                .findFirst()
                .orElseThrow();

        assertThat(mysql.driverClass()).isEqualTo("com.mysql.cj.jdbc.Driver");
        assertThat(mysql.urlTemplate())
                .contains("useCursorFetch=true")
                .contains("rewriteBatchedStatements=true");
    }
}
