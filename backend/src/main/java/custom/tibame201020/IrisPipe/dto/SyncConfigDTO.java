package custom.tibame201020.IrisPipe.dto;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import custom.tibame201020.IrisPipe.data.SimpleEnum;
import custom.tibame201020.IrisPipe.data.SyncJob;

public interface SyncConfigDTO {

    record ConfigFileInfo(String path, String fileName, List<SyncJob> jobs) {
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
