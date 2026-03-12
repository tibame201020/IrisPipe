Write-Host "=========================================="
Write-Host "      Starting IrisPipe K6 E2E Tests       "
Write-Host "=========================================="

$ErrorActionPreference = "Stop"

Write-Host "[WAITING] Checking if backend is running on http://localhost:8080 ..."
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/api/v1/sync-config" -Method Get -UseBasicParsing -ErrorAction Stop
    Write-Host "[OK] Backend is reachable!"
} catch {
    Write-Host "[ERROR] Backend is not reachable. Start Spring Boot first, then rerun this script." -ForegroundColor Red
    exit 1
}

$tests = @(
    @{ Name = "Config API Validation"; Path = "sync-config-validation.test.js" },
    @{ Name = "Config API CRUD"; Path = "sync-config.test.js" },
    @{ Name = "Sync Job Success"; Path = "sync-job-success.test.js" },
    @{ Name = "Sync Job Fail/Atomic"; Path = "sync-job-fail.test.js" },
    @{ Name = "Sync Job No Watermark"; Path = "sync-job-no-watermark.test.js" },
    @{ Name = "Sync Job Multi-step Operations"; Path = "sync-job-multi-step.test.js" },
    @{ Name = "Sync Job Composite PK"; Path = "sync-upsert-composite.test.js" },
    @{ Name = "Sync Job System Variables"; Path = "sync-system-variable.test.js" }
)

$failedTests = @()

foreach ($test in $tests) {
    Write-Host "`n---> Running $($test.Name) ($($test.Path))"
    & k6 run $test.Path
    if ($LASTEXITCODE -ne 0) {
        $failedTests += $test.Name
    }
}

Write-Host "`n=========================================="
if ($failedTests.Count -eq 0) {
    Write-Host "            Testing Complete!            "
    Write-Host "=========================================="
    exit 0
}

Write-Host " Failed suites: $($failedTests -join ', ')" -ForegroundColor Red
Write-Host "=========================================="
exit 1
