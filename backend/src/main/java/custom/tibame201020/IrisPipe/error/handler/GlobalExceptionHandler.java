package custom.tibame201020.IrisPipe.error.handler;

import custom.tibame201020.IrisPipe.error.exception.ConfigFileException;
import custom.tibame201020.IrisPipe.error.exception.ConfigValidationException;
import custom.tibame201020.IrisPipe.error.exception.CustomJobExecutionException;
import custom.tibame201020.IrisPipe.error.exception.General;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handle(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        for (FieldError error : e.getFieldErrors()) {
            errors.put(error.getField(), error.getDefaultMessage());
        }
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<General.GeneralExceptionResponse> handle(ResponseStatusException e) {
        General.GeneralExceptionResponse generalExceptionResponse = new General.GeneralExceptionResponse(e.getReason());
        return new ResponseEntity<>(generalExceptionResponse, e.getStatusCode());
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<General.GeneralExceptionResponse> handle(RuntimeException e) {
        General.GeneralExceptionResponse generalExceptionResponse = new General.GeneralExceptionResponse(
                e.getMessage());
        return new ResponseEntity<>(generalExceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ConfigValidationException.class)
    public ResponseEntity<Map<String, String>> handle(ConfigValidationException e) {
        Map<String, String> map = Map.of(
                "jobName", e.getJobName(),
                "executionName", e.getExecutionName(),
                "message", e.getMessage());

        return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(General.GeneralException.class)
    public ResponseEntity<General.GeneralExceptionResponse> handle(General.GeneralException e) {
        General.GeneralExceptionResponse generalExceptionResponse = new General.GeneralExceptionResponse(
                e.getMessage());
        HttpStatus status = e.isServerError() ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.BAD_REQUEST;
        return new ResponseEntity<>(generalExceptionResponse, status);
    }

    @ExceptionHandler(CustomJobExecutionException.class)
    public ResponseEntity<General.GeneralExceptionResponse> handle(CustomJobExecutionException e) {
        General.GeneralExceptionResponse generalExceptionResponse = new General.GeneralExceptionResponse(
                e.getMessage());
        return new ResponseEntity<>(generalExceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ConfigFileException.class)
    public ResponseEntity<General.GeneralExceptionResponse> handle(ConfigFileException e) {
        General.GeneralExceptionResponse generalExceptionResponse = new General.GeneralExceptionResponse(
                e.getMessage());
        return new ResponseEntity<>(generalExceptionResponse, HttpStatus.BAD_REQUEST);
    }

}
