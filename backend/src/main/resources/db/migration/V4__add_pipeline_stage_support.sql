ALTER TABLE iris_pipeline_job
    ADD stage_name VARCHAR(255) NOT NULL DEFAULT 'default';

ALTER TABLE iris_pipeline_job
    ADD stage_sequence_order INT NOT NULL DEFAULT 0;

CREATE INDEX idx_iris_pipeline_job_stage_order
    ON iris_pipeline_job (pipeline_id, stage_sequence_order, sequence_order);

ALTER TABLE iris_pipeline_run_job
    ADD stage_name VARCHAR(255) NOT NULL DEFAULT 'default';

ALTER TABLE iris_pipeline_run_job
    ADD stage_sequence_order INT NOT NULL DEFAULT 0;

CREATE INDEX idx_iris_pipeline_run_job_stage_order
    ON iris_pipeline_run_job (pipeline_run_id, stage_sequence_order, job_sequence_order);
