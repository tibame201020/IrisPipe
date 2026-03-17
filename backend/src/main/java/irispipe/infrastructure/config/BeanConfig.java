package irispipe.infrastructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.core.task.TaskExecutor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

/**
 * Defines infrastructure beans shared across config import and pipeline execution
 * flows.
 */
@Configuration
public class BeanConfig {

    /**
     * Creates the JSON object mapper used by request and config parsing flows.
     *
     * @return configured JSON object mapper
     */
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    /**
     * Creates the YAML object mapper used by import flows.
     *
     * @return configured YAML object mapper
     */
    @Bean
    public ObjectMapper yamlMapper() {
        ObjectMapper yamlMapper = new ObjectMapper(new YAMLFactory());
        yamlMapper.registerModule(new JavaTimeModule());
        return yamlMapper;
    }

    /**
     * Creates the task executor used by asynchronous pipeline launches.
     *
     * @return pipeline task executor
     */
    @Bean
    public TaskExecutor pipelineTaskExecutor() {
        SimpleAsyncTaskExecutor taskExecutor = new SimpleAsyncTaskExecutor("irispipe-pipeline-");
        taskExecutor.setConcurrencyLimit(SimpleAsyncTaskExecutor.UNBOUNDED_CONCURRENCY);
        return taskExecutor;
    }

}
