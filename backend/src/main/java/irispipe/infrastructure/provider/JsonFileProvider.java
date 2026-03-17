package irispipe.infrastructure.provider;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Qualifier;

/**
 * Parses JSON config files.
 */
@Component
public class JsonFileProvider implements FileProvider {
    private final ObjectMapper objectMapper;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final String jsonExtension = ".json";

    /**
     * Creates the JSON file provider.
     *
     * @param objectMapper JSON object mapper
     */
    public JsonFileProvider(@Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    /**
     * Reads raw JSON content from a file path.
     *
     * @param path source JSON file path
     * @return raw JSON content
     */
    @Override
    public String readPathContent(Path path) {
        try {
            return Files.readString(path);
        } catch (Exception e) {
            logger.error("error at readPathContent: {}", e.getMessage());
            throw new RuntimeException("Failed read content from path", e);
        }
    }

    /**
     * Reads a JSON file and converts it into the requested target type.
     *
     * @param path source JSON file path
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed JSON value
     */
    @Override
    public <T> T readPathToClass(Path path, TypeReference<T> typeReference) {
        try {
            String content = readPathContent(path);
            return objectMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at readPathToClass: {}", e.getMessage());
            throw new RuntimeException("Failed read file to TypeReference", e);
        }
    }

    /**
     * Converts raw JSON content into the requested target type.
     *
     * @param content raw JSON content
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed JSON value
     */
    @Override
    public <T> T convertContentToClass(String content, TypeReference<T> typeReference) {
        try {
            return objectMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at convertContentToClass: {}", e.getMessage());
            throw new RuntimeException("Failed convert content to TypeReference", e);
        }
    }

    /**
     * Returns whether the path has a JSON extension.
     *
     * @param path source file path
     * @return true when the file name ends with {@code .json}
     */
    @Override
    public boolean supports(Path path) {
        String fileName = path.toFile().getName().toLowerCase();
        return fileName.endsWith(jsonExtension);
    }
}
