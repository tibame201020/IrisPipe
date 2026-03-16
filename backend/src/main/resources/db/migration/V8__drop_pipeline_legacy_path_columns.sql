ALTER TABLE iris_pipeline
    DROP CONSTRAINT uk_iris_pipeline_config_path;

ALTER TABLE iris_pipeline
    DROP COLUMN config_path;

ALTER TABLE iris_pipeline
    DROP COLUMN file_name;
