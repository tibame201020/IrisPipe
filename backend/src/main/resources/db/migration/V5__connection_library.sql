CREATE TABLE iris_connection (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    workspace_id  BIGINT NOT NULL,
    name          VARCHAR(255) NOT NULL,
    driver        VARCHAR(512) NOT NULL,
    url           VARCHAR(1024) NOT NULL,
    username      VARCHAR(255),
    password      VARCHAR(512),
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uk_connection_name UNIQUE (workspace_id, name),
    CONSTRAINT fk_connection_workspace FOREIGN KEY (workspace_id) REFERENCES iris_workspace(id)
);
