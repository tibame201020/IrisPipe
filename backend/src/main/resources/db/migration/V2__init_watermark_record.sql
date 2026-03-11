CREATE TABLE IF NOT EXISTS iris_watermark_record (
    execution_name VARCHAR(255) NOT NULL,
    table_name VARCHAR(255) NOT NULL,
    watermark_column VARCHAR(255) NOT NULL,
    last_value VARCHAR(1000),
    last_start_time TIMESTAMP,
    last_end_time TIMESTAMP,
    last_update_time TIMESTAMP,
    PRIMARY KEY (execution_name, table_name, watermark_column)
);
