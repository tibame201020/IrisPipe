package custom.tibame201020.IrisPipe.provider;

import com.fasterxml.jackson.core.type.TypeReference;

import java.nio.file.Path;

public interface FileProvider {

    String readPathContent(Path path);

    <T> T readPathToClass(Path path, TypeReference<T> typeReference);

    <T> T convertContentToClass(String content, TypeReference<T> typeReference);

    boolean supports(Path path);
}
