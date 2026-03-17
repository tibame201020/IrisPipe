package irispipe.model;

/**
 * Source and destination database settings used by one logical job.
 *
 * @param source source-side connection config
 * @param dest destination-side connection config
 */
public record DatabaseConfig(
        ConnectionInfo source,
        ConnectionInfo dest) {
}
