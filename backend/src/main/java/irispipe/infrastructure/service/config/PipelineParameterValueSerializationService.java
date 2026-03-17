package irispipe.infrastructure.service.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Serializes execution parameter values before they are persisted.
 */
@Service
public class PipelineParameterValueSerializationService {
    private final ObjectMapper objectMapper;

    /**
     * Creates the parameter serialization service.
     *
     * @param objectMapper JSON object mapper
     */
    public PipelineParameterValueSerializationService(@Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    /**
     * Serializes one parameter value into JSON text.
     *
     * @param value parameter value
     * @return serialized parameter value
     */
    public String renderParameterValue(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to serialize parameter value", e);
        }
    }
}
