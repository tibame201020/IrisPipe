package custom.tibame201020.IrisPipe.provider;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class YamlFileProvider implements FileProvider {
    private final ObjectMapper yamlMapper;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final String yamlExtension = ".yaml";
    private final String ymlExtension = ".yml";

    public YamlFileProvider(ObjectMapper yamlMapper) {
        this.yamlMapper = yamlMapper;
    }

    @Override
    public String readPathContent(Path path) {
        try {
            return Files.readString(path);
        } catch (Exception e) {
            logger.error("error at readPathContent: {}", e.getMessage());
            throw new RuntimeException("Failed read content from path", e);
        }
    }

    @Override
    public <T> T readPathToClass(Path path, TypeReference<T> typeReference) {
        try {
            String content = readPathContent(path);
            return yamlMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at readPathToClass: {}", e.getMessage());
            throw new RuntimeException("Failed read YAML file to TypeReference", e);
        }
    }

    @Override
    public <T> T convertContentToClass(String content, TypeReference<T> typeReference) {
        try {
            return yamlMapper.readValue(content, typeReference);
        } catch (Exception e) {
            logger.error("error at convertContentToClass: {}", e.getMessage());
            throw new RuntimeException("Failed read YAML file to TypeReference", e);
        }
    }

    @Override
    public boolean supports(Path path) {
        String fileName = path.toFile().getName().toLowerCase();
        return fileName.endsWith(yamlExtension) || fileName.endsWith(ymlExtension);
    }
}
