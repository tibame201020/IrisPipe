package irispipe.api;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

import org.junit.jupiter.api.Test;

class JdbcDriverAvailabilityTest {

    @Test
    void packagedRuntime_shouldContainBuiltInJdbcDrivers() {
        String[] drivers = {
                "org.h2.Driver",
                "org.postgresql.Driver",
                "com.mysql.cj.jdbc.Driver",
                "org.mariadb.jdbc.Driver",
                "com.microsoft.sqlserver.jdbc.SQLServerDriver",
                "oracle.jdbc.OracleDriver"
        };

        for (String driver : drivers) {
            assertDoesNotThrow(() -> Class.forName(driver), () -> "Missing JDBC driver: " + driver);
        }
    }
}
