package irispipe.model;

import io.micrometer.common.util.StringUtils;

public record ConnectionInfo(
        String driver,
        String url,
        String username,
        String password) {
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
