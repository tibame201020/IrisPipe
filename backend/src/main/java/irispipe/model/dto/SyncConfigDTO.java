package irispipe.model.dto;

import irispipe.model.SyncJobDefinition;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public interface SyncConfigDTO {

    record ConfigFileInfo(String path, String fileName, List<SyncJobDefinition> jobs) {
    }

    enum SyncConfigFileOperation {
        CREATE {
            @Override
            public void validate(Path path) {
                boolean isFileExists = Files.exists(path);
                if (isFileExists) {
                    throw new IllegalArgumentException("File already exists: " + path);
                }
            }

        },
        UPDATE {
            @Override
            public void validate(Path path) {
                boolean isFileExists = Files.exists(path);
                if (!isFileExists) {
                    throw new IllegalArgumentException("File not exists: " + path);
                }
            }
        },
        UPSERT {
            @Override
            public void validate(Path path) {}
        };

        public abstract void validate(Path path);
    }
}
