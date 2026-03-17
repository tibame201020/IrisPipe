package irispipe.model;

import io.micrometer.common.util.StringUtils;

/**
 * Connection settings for one source or destination database.
 *
 * @param driver JDBC driver class name
 * @param url JDBC URL
 * @param username database username
 * @param password database password
 */
public record ConnectionInfo(
        String driver,
        String url,
        String username,
        String password) {
    /**
     * Validates that all connection fields required by runtime execution are
     * present.
     */
    public void validate() {
        if (StringUtils.isBlank(driver)) {
            throw new IllegalArgumentException("driver can not be blank");
        }
        if (StringUtils.isBlank(url)) {
            throw new IllegalArgumentException("url can not be blank");
        }
        if (StringUtils.isBlank(username)) {
            throw new IllegalArgumentException("username can not be blank");
        }
        if (StringUtils.isBlank(password)) {
            throw new IllegalArgumentException("password can not be blank");
        }
    }
}
