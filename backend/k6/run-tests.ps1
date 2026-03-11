Write-Host "=========================================="
Write-Host "      Starting IrisPipe K6 E2E Tests       "
Write-Host "=========================================="

# Ensure the app is running before executing tests
Write-Host "[WAITING] Checking if backend is running on http://localhost:8080 ..."
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/actuator/health" -Method Get -ErrorAction Stop
    Write-Host "[OK] Backend is reachable!"
} catch {
    Write-Host "[WARNING] Could not reach health endpoint. Assuming backend is up anyway... If tests fail, please start the Spring Boot application first." -ForegroundColor Yellow
}

Write-Host "`n---> Running Config API Validation (sync-config-validation.test.js)"
k6 run sync-config-validation.test.js

Write-Host "`n---> Running Config API CRUD (sync-config.test.js)"
k6 run sync-config.test.js

Write-Host "`n---> Running Sync Job Success (sync-job-success.test.js)"
k6 run sync-job-success.test.js

Write-Host "`n---> Running Sync Job Fail/Atomic (sync-job-fail.test.js)"
k6 run sync-job-fail.test.js

# Write-Host "`n---> Running Sync Job Fail/Chunk (sync-job-chunk-fail.test.js) [PENDING PHASE 2]"
# k6 run sync-job-chunk-fail.test.js

Write-Host "`n---> Running Sync Job No Watermark (sync-job-no-watermark.test.js)"
k6 run sync-job-no-watermark.test.js

Write-Host "`n---> Running Sync Job Multi-step Operations (sync-job-multi-step.test.js)"
k6 run sync-job-multi-step.test.js

Write-Host "`n=========================================="
Write-Host "            Testing Complete!            "
Write-Host "=========================================="
