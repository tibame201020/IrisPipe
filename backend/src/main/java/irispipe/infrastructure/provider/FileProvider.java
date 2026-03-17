package irispipe.infrastructure.provider;

import com.fasterxml.jackson.core.type.TypeReference;

import java.nio.file.Path;

/**
 * Parses config files from a specific file format.
 */
public interface FileProvider {

    /**
     * Reads raw file content from a path.
     *
     * @param path source file path
     * @return raw file content
     */
    String readPathContent(Path path);

    /**
     * Reads a file and converts it into the requested target type.
     *
     * @param path source file path
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed file content
     */
    <T> T readPathToClass(Path path, TypeReference<T> typeReference);

    /**
     * Converts raw content into the requested target type.
     *
     * @param content raw file content
     * @param typeReference target type
     * @param <T> parsed target type
     * @return parsed content
     */
    <T> T convertContentToClass(String content, TypeReference<T> typeReference);

    /**
     * Returns whether this provider can parse the supplied file path.
     *
     * @param path source file path
     * @return true when the provider supports the file extension
     */
    boolean supports(Path path);
}
