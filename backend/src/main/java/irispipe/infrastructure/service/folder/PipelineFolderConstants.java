package irispipe.infrastructure.service.folder;

public final class PipelineFolderConstants {
    public static final String ROOT_FOLDER_NAME = "__root__";
    public static final int DEFAULT_DELETE_PREVIEW_LIMIT = 100;
    public static final int MAX_DELETE_PREVIEW_LIMIT = 200;
    public static final String DELETE_PREVIEW_LIMIT_VALIDATION_MESSAGE = "limit must be between 1 and 200";

    private PipelineFolderConstants() {
    }
}
