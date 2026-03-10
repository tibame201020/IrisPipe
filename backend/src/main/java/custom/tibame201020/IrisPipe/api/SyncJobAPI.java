package custom.tibame201020.IrisPipe.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sync-job")
public class SyncJobAPI {

    @PostMapping("/execute")
    public ResponseEntity<?> executeJob(@RequestBody Object request) {
        return null;
    }

    @GetMapping("/executions")
    public ResponseEntity<?> getExecutions() {
        return null;
    }

    @GetMapping("/executions/{executionId}")
    public ResponseEntity<?> getExecutionDetail(@PathVariable("executionId") Long executionId) {
        return null;
    }

    @DeleteMapping("/metadata")
    public ResponseEntity<?> deleteAllMetadata() {
        return null;
    }
}
