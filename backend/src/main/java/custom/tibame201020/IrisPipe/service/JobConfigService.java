package custom.tibame201020.IrisPipe.service;

import com.fasterxml.jackson.core.type.TypeReference;
import custom.tibame201020.IrisPipe.data.SyncJob;
import custom.tibame201020.IrisPipe.dto.SyncConfigDTO;
import custom.tibame201020.IrisPipe.error.exception.ConfigFileException;
import custom.tibame201020.IrisPipe.provider.FileProvider;
import custom.tibame201020.IrisPipe.provider.JsonFileProvider;
import custom.tibame201020.IrisPipe.provider.YamlFileProvider;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;

    public JobConfigService(JsonFileProvider jsonFileProvider, YamlFileProvider yamlFileProvider) {
        this.jsonFileProvider = jsonFileProvider;
        this.yamlFileProvider = yamlFileProvider;
    }

    public List<String> listSyncConfig(String configAcceptPath) {
        Path rooPath = Paths.get(configAcceptPath);
        try (Stream<Path> pathStream = Files.walk(rooPath)) {
            return pathStream
                    .filter(Files::isRegularFile)
                    .map(path -> rooPath.relativize(path).toString())
                    .toList();
        } catch (IOException e) {
            throw new ConfigFileException("jobs root dir", e.getMessage());
        }
    }

    public List<SyncJob> getSyncJobs(Path path) {
        FileProvider fileProvider = getFileProvider(path);
        return fileProvider.readPathToClass(path, new TypeReference<>() {
        });
    }

    public SyncConfigDTO.ConfigFileInfo getConfigFileInfo(String configAcceptPath, String configFilePath) {
        try {
            secureConifgPath(configFilePath);
            Path path = Path.of(configAcceptPath, configFilePath);
            List<SyncJob> jobs = getSyncJobs(path);
            return new SyncConfigDTO.ConfigFileInfo(configFilePath, path.getFileName().toString(), jobs);
        } catch (Exception e) {
            throw new ConfigFileException(configFilePath, e.getMessage());
        }
    }

    public SyncConfigDTO.ConfigFileInfo syncConfigControl(String configAcceptPath, String configFilePath,
            MultipartFile file, SyncConfigDTO.SyncConfigFileOperation operation) {
        try {
            secureConifgPath(configFilePath);
            Path path = Path.of(configAcceptPath, configFilePath);
            createTempFileAndValidate(configFilePath, file);
            operation.validate(path);

            Files.createDirectories(path.getParent());
            Files.write(path, file.getBytes());
            return getConfigFileInfo(configAcceptPath, configFilePath);
        } catch (Exception e) {
            throw new ConfigFileException(configFilePath, e.getMessage());
        }
    }

    public void deleteSyncConfig(String configAcceptPath, String configFilePath) {
        try {
            secureConifgPath(configFilePath);
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

    public List<SyncJob> getSyncJobs(String fullConfigFilePath) {
        Path path = Path.of(fullConfigFilePath);
        return getSyncJobs(path);
    }

    private void createTempFileAndValidate(String configPath, MultipartFile file) throws IOException {
        String extension = FilenameUtils.getExtension(configPath);
        String uuid = UUID.randomUUID().toString();
        Path tempPath = Files.createTempFile(uuid, "." + extension);
        List<SyncJob> syncJobs = getSyncJobs(tempPath);
        syncJobs.forEach(SyncJob::validate);
        Files.deleteIfExists(tempPath);
    }

    private void secureConifgPath(String configPath) {
        if (configPath.contains("..")) {
            throw new ConfigFileException(configPath, "not support relateive filepath");
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
