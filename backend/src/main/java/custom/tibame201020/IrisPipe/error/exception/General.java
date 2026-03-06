package custom.tibame201020.IrisPipe.error.exception;

import lombok.Getter;

public interface General {
    @Getter
    class GeneralException extends RuntimeException {
        private final boolean isServerError;
        private final String message;

        public GeneralException(boolean isServerError, String message) {
            this.isServerError = isServerError;
            this.message = message;
        }
    }

    record GeneralExceptionResponse(String message) {
    }
}
