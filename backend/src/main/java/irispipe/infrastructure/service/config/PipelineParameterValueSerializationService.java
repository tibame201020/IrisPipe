package irispipe.infrastructure.service.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PipelineParameterValueSerializationService {
    private final ObjectMapper objectMapper;

    public PipelineParameterValueSerializationService(@Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public String renderParameterValue(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to serialize parameter value", e);
        }
    }
}
