package irispipe.model;

public record DatabaseConfig(
        ConnectionInfo source,
        ConnectionInfo dest) {
}
