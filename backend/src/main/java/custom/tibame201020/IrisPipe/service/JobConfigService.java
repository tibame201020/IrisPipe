package custom.tibame201020.IrisPipe.service;

import com.fasterxml.jackson.core.type.TypeReference;
import custom.tibame201020.IrisPipe.data.SyncJob;
import custom.tibame201020.IrisPipe.provider.FileProvider;
import custom.tibame201020.IrisPipe.provider.JsonFileProvider;
import custom.tibame201020.IrisPipe.provider.YamlFileProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.List;

@Service
public class JobConfigService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;


    public JobConfigService(JsonFileProvider jsonFileProvider, YamlFileProvider yamlFileProvider) {
        this.jsonFileProvider = jsonFileProvider;
        this.yamlFileProvider = yamlFileProvider;
    }

    public List<SyncJob> getSyncJobs(Path path) {
        FileProvider fileProvider = getFileProvider(path);
        return fileProvider.readPathToClass(path, new TypeReference<>() {
        });
    }

    public List<SyncJob> getSyncJobs(String configFilePath) {
        Path path = Path.of(configFilePath);
        return getSyncJobs(path);
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
