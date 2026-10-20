# ==============================================================================
# Antigravity Coding Quality Kit - Installation Health Checker
# ==============================================================================

$geminiDir = Join-Path $HOME ".gemini"
$rulesPath = Join-Path $geminiDir "GEMINI.md"
$skillFile = Join-Path $geminiDir "config\skills\clean-code-responses\SKILL.md"

Write-Host ""
Write-Host "Diagnostic: Antigravity Quality Kit Health Check" -ForegroundColor Cyan
Write-Host "--------------------------------------------------" -ForegroundColor DarkGray

$allOk = $true

# Check GEMINI.md
if (Test-Path $rulesPath) {
    $size = (Get-Item $rulesPath).Length
    Write-Host "[PASS] GEMINI.md is present ($size bytes)" -ForegroundColor Green
} else {
    Write-Host "[FAIL] GEMINI.md is NOT found at $rulesPath" -ForegroundColor Red
    $allOk = $false
}

# Check clean-code-responses SKILL.md
if (Test-Path $skillFile) {
    $size = (Get-Item $skillFile).Length
    Write-Host "[PASS] clean-code-responses SKILL.md is present ($size bytes)" -ForegroundColor Green
} else {
    Write-Host "[FAIL] clean-code-responses skill is NOT found at $skillFile" -ForegroundColor Red
    $allOk = $false
}

# Check Context7 CLI
$ctx7 = Get-Command "ctx7" -ErrorAction SilentlyContinue
if ($ctx7) {
    Write-Host "[PASS] Context7 CLI (ctx7) is installed in PATH" -ForegroundColor Green
} else {
    Write-Host "[INFO] Context7 CLI (ctx7) not found in PATH (optional, run via 'npx ctx7@latest')" -ForegroundColor Yellow
}

Write-Host "--------------------------------------------------" -ForegroundColor DarkGray
if ($allOk) {
    Write-Host "Status: READY - Antigravity agent quality rules active." -ForegroundColor Green
} else {
    Write-Host "Status: INCOMPLETE - Run install.ps1 to repair." -ForegroundColor Red
}
Write-Host ""
