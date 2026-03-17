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
 * Parses YAML config files.
 */
@Component
public class YamlFileProvider implements FileProvider {
    private final ObjectMapper yamlMapper;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final String yamlExtension = ".yaml";
    private final String ymlExtension = ".yml";

    /**
     * Creates the YAML file provider.
     *
     * @param yamlMapper YAML object mapper
     */
    public YamlFileProvider(@Qualifier("yamlMapper") ObjectMapper yamlMapper) {
        this.yamlMapper = yamlMapper;
    }

    /**
     * Reads raw YAML content from a file path.
     *
     * @param path source YAML file path
     * @return raw YAML content
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
     * Reads a YAML file and converts it into the requested target type.
     *
     * @param path source YAML file path
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed YAML value
     */
    @Override
    public <T> T readPathToClass(Path path, TypeReference<T> typeReference) {
        try {
            String content = readPathContent(path);
            return yamlMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at readPathToClass: {}", e.getMessage(), e);
            throw new RuntimeException("Failed read YAML file to TypeReference", e);
        }
    }

    /**
     * Converts raw YAML content into the requested target type.
     *
     * @param content raw YAML content
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed YAML value
     */
    @Override
    public <T> T convertContentToClass(String content, TypeReference<T> typeReference) {
        try {
            return yamlMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at convertContentToClass: {}", e.getMessage());
            throw new RuntimeException("Failed convert YAML content to TypeReference", e);
        }
    }

    /**
     * Returns whether the path has a YAML extension.
     *
     * @param path source file path
     * @return true when the file name ends with {@code .yaml} or {@code .yml}
     */
    @Override
    public boolean supports(Path path) {
        String fileName = path.toFile().getName().toLowerCase();
        return fileName.endsWith(yamlExtension) || fileName.endsWith(ymlExtension);
    }
}
