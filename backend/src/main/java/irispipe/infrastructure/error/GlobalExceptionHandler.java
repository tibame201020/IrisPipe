package irispipe.infrastructure.error;

import java.util.List;
import java.util.Map;

import irispipe.infrastructure.error.exception.ConfigFileException;
import irispipe.infrastructure.error.exception.ConfigValidationException;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import jakarta.validation.ConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

/**
 * Converts controller-facing exceptions into consistent JSON error responses.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * Renders resource lookup failures.
     *
     * @param e missing-resource exception
     * @return bad-request error payload describing the missing resource
     */
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", "Resource Not Found", "message", e.getMessage(), "resource", e.getResourceName()));
    }

    /**
     * Renders import file parsing failures.
     *
     * @param e config file exception
     * @return server-error payload for import failures
     */
    @ExceptionHandler(ConfigFileException.class)
    public ResponseEntity<?> handleConfigFile(ConfigFileException e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Config File Error", "message", e.getMessage()));
    }

    /**
     * Renders config validation failures raised after request binding.
     *
     * @param e config validation exception
     * @return bad-request payload describing validation failure
     */
    @ExceptionHandler(ConfigValidationException.class)
    public ResponseEntity<?> handleConfigValidation(ConfigValidationException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", "Config Validation Error", "message", e.getMessage()));
    }

    /**
     * Renders bean validation failures from request bodies.
     *
     * @param e request-body validation exception
     * @return bad-request payload with field-level validation details
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValid(MethodArgumentNotValidException e) {
        List<String> details = e.getBindingResult().getFieldErrors().stream()
                .map(this::renderFieldError)
                .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of(
                        "error", "Validation Error",
                        "message", "Request validation failed",
                        "details", details));
    }

    /**
     * Renders validation failures on handler method parameters.
     *
     * @param e method-parameter validation exception
     * @return bad-request payload with parameter-level validation details
     */
    @ExceptionHandler(HandlerMethodValidationException.class)
    public ResponseEntity<?> handleHandlerMethodValidation(HandlerMethodValidationException e) {
        List<String> details = e.getAllValidationResults().stream()
                .flatMap(validationResult -> validationResult.getResolvableErrors().stream()
                        .map(error -> validationResult.getMethodParameter().getParameterName() + ": " + error.getDefaultMessage()))
                .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of(
                        "error", "Validation Error",
                        "message", "Request validation failed",
                        "details", details));
    }

    /**
     * Renders validation failures raised directly by Jakarta Validation.
     *
     * @param e constraint-violation exception
     * @return bad-request payload with violation details
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> handleConstraintViolation(ConstraintViolationException e) {
        List<String> details = e.getConstraintViolations().stream()
                .map(violation -> violation.getPropertyPath() + ": " + violation.getMessage())
                .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of(
                        "error", "Validation Error",
                        "message", "Request validation failed",
                        "details", details));
    }

    /**
     * Renders request binding failures such as missing parts, invalid JSON, or
     * type mismatches.
     *
     * @param e request-binding exception
     * @return bad-request payload describing the binding failure
     */
    @ExceptionHandler({
            HttpMessageNotReadableException.class,
            MissingServletRequestParameterException.class,
            MissingServletRequestPartException.class,
            MethodArgumentTypeMismatchException.class
    })
    public ResponseEntity<?> handleRequestBinding(Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", "Request Binding Error", "message", e.getMessage()));
    }

    /**
     * Renders invalid argument errors raised by service-level guards.
     *
     * @param e illegal-argument exception
     * @return bad-request payload describing the invalid argument
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgument(IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", "Illegal Argument", "message", e.getMessage()));
    }

    /**
     * Renders conflict errors for duplicate or incompatible operations.
     *
     * @param e conflict exception
     * @return conflict payload describing the failed operation
     */
    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<?> handleConflict(ConflictException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(Map.of("error", "Conflict", "message", e.getMessage()));
    }

    /**
     * Renders unexpected illegal state failures while logging the underlying
     * server state issue.
     *
     * @param e illegal-state exception
     * @return server-error payload describing the illegal state
     */
    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<?> handleIllegalState(IllegalStateException e) {
        logger.error("Unexpected server state", e);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Illegal State", "message", e.getMessage()));
    }

    /**
     * Renders uncaught exceptions through a generic internal-server-error payload.
     *
     * @param e unexpected exception
     * @return generic server-error payload
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleUnexpectedException(Exception e) {
        logger.error("Unhandled server exception", e);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal Server Error", "message", "Unexpected server error"));
    }

    /**
     * Converts a field error into the API detail string used by validation
     * responses.
     *
     * @param fieldError binding field error
     * @return rendered field-level validation message
     */
    private String renderFieldError(FieldError fieldError) {
        return fieldError.getField() + ": " + fieldError.getDefaultMessage();
    }
}
