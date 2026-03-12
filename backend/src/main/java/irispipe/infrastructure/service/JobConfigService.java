package irispipe.infrastructure.service;

import com.fasterxml.jackson.core.type.TypeReference;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncConfigDTO;
import irispipe.infrastructure.error.exception.ConfigFileException;
import irispipe.infrastructure.provider.FileProvider;
import irispipe.infrastructure.provider.JsonFileProvider;
import irispipe.infrastructure.provider.YamlFileProvider;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class JobConfigService {

    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;

    public JobConfigService(JsonFileProvider jsonFileProvider, YamlFileProvider yamlFileProvider) {
        this.jsonFileProvider = jsonFileProvider;
        this.yamlFileProvider = yamlFileProvider;
    }

    public List<String> listSyncConfig(String configAcceptPath) {
        Path rootPath = Paths.get(configAcceptPath);
        if (!Files.exists(rootPath)) {
            try {
                Files.createDirectories(rootPath);
            } catch (IOException e) {
                throw new ConfigFileException("jobs root dir", e.getMessage());
            }
        }
        try (Stream<Path> pathStream = Files.walk(rootPath)) {
            return pathStream
                    .filter(Files::isRegularFile)
                    .map(path -> rootPath.relativize(path).toString().replace("\\", "/"))
                    .toList();
        } catch (IOException e) {
            throw new ConfigFileException("jobs root dir", e.getMessage());
        }
    }

    public List<SyncJobDefinition> getSyncJobs(Path path) {
        FileProvider fileProvider = getFileProvider(path);
        return fileProvider.readPathToClass(path, new TypeReference<List<SyncJobDefinition>>() {
        });
    }

    public SyncConfigDTO.ConfigFileInfo getConfigFileInfo(String configAcceptPath, String configFilePath) {
        try {
            secureConfigPath(configFilePath);
            Path path = Path.of(configAcceptPath, configFilePath);
            if (!Files.exists(path)) {
                throw new irispipe.infrastructure.error.exception.ResourceNotFoundException(configFilePath, "Config file not found");
            }
            List<SyncJobDefinition> jobs = getSyncJobs(path);
            return new SyncConfigDTO.ConfigFileInfo(configFilePath.replace("\\", "/"), path.getFileName().toString(), jobs);
        } catch (irispipe.infrastructure.error.exception.ResourceNotFoundException | irispipe.infrastructure.error.exception.ConfigValidationException e) {
            throw e;
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().contains("YAML")) {
                throw new irispipe.infrastructure.error.exception.ConfigValidationException(configFilePath, "", e.getMessage());
            }
            throw new ConfigFileException(configFilePath, e.getMessage());
        }
    }

    public SyncConfigDTO.ConfigFileInfo syncConfigControl(String configAcceptPath, String configFilePath,
            MultipartFile file, SyncConfigDTO.SyncConfigFileOperation operation) {
        try {
            secureConfigPath(configFilePath);
            Path path = Path.of(configAcceptPath, configFilePath);
            createTempFileAndValidate(configFilePath, file);
            operation.validate(path);

            Files.createDirectories(path.getParent());
            Files.write(path, file.getBytes());
            return getConfigFileInfo(configAcceptPath, configFilePath);
        } catch (irispipe.infrastructure.error.exception.ConfigValidationException e) {
            throw e;
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().contains("YAML")) {
                throw new irispipe.infrastructure.error.exception.ConfigValidationException(configFilePath, "", e.getMessage());
            }
            throw new ConfigFileException(configFilePath, e.getMessage());
        }
    }

    public void deleteSyncConfig(String configAcceptPath, String configFilePath) {
        try {
            secureConfigPath(configFilePath);
            Path path = Path.of(configAcceptPath, configFilePath);
            boolean isFileExists = Files.exists(path);
            if (!isFileExists) {
                throw new RuntimeException("try delete, but config not exists.");
            }
            Files.delete(path);
        } catch (Exception e) {
            throw new ConfigFileException(configFilePath, e.getMessage());
        }
    }

    public List<SyncJobDefinition> getSyncJobs(String fullConfigFilePath) {
        Path path = Path.of(fullConfigFilePath);
        return getSyncJobs(path);
    }

    private void createTempFileAndValidate(String configPath, MultipartFile file) throws IOException {
        String extension = FilenameUtils.getExtension(configPath);
        String uuid = UUID.randomUUID().toString();
        Path tempPath = Files.createTempFile(uuid, "." + extension);
        try {
            Files.write(tempPath, file.getBytes());
            List<SyncJobDefinition> syncJobs = getSyncJobs(tempPath);
            syncJobs.forEach(SyncJobDefinition::validate);
        } finally {
            Files.deleteIfExists(tempPath);
        }
    }

    private void secureConfigPath(String configPath) {
        if (configPath.contains("..")) {
            throw new ConfigFileException(configPath, "not support relative filepath");
        }
    }

    private FileProvider getFileProvider(Path path) {
        if (jsonFileProvider.supports(path)) {
            return jsonFileProvider;
        }
        if (yamlFileProvider.supports(path)) {
            return yamlFileProvider;
        }
        throw new IllegalArgumentException("not support file provider with " + path);
    }
}
