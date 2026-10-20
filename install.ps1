# ==============================================================================
# Antigravity Coding Quality Kit - Automated Windows Installer
# Repository: https://github.com/angelolockdev/antigravity-coding-quality-kit
# ==============================================================================

[CmdletBinding()]
param(
    [switch]$Force = $false
)

$ErrorActionPreference = 'Stop'

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "    Antigravity Coding Quality Kit - Windows Installer   " -ForegroundColor White
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$geminiDir = Join-Path $HOME ".gemini"
$rulesPath = Join-Path $geminiDir "GEMINI.md"
$skillsDir = Join-Path $geminiDir "config\skills\clean-code-responses"
$skillFile = Join-Path $skillsDir "SKILL.md"

$baseUrl = "https://raw.githubusercontent.com/angelolockdev/antigravity-coding-quality-kit/main"

# 1. Ensure target directories exist
if (-not (Test-Path $geminiDir)) {
    Write-Host "[+] Creating directory: $geminiDir" -ForegroundColor DarkGray
    New-Item -ItemType Directory -Path $geminiDir -Force | Out-Null
}

if (-not (Test-Path $skillsDir)) {
    Write-Host "[+] Creating directory: $skillsDir" -ForegroundColor DarkGray
    New-Item -ItemType Directory -Path $skillsDir -Force | Out-Null
}

# 2. Backup existing GEMINI.md if present
if (Test-Path $rulesPath) {
    $timestamp = (Get-Date).ToString("yyyyMMdd_HHmmss")
    $backupPath = Join-Path $geminiDir "GEMINI.md.backup_$timestamp"
    Write-Host "[*] Existing GEMINI.md found. Creating backup:" -ForegroundColor Yellow
    Write-Host "    -> $backupPath" -ForegroundColor DarkYellow
    Copy-Item -Path $rulesPath -Destination $backupPath -Force
}

# 3. Install GEMINI.md
Write-Host "[+] Installing global quality rules (GEMINI.md)..." -ForegroundColor White
if (Test-Path ".\GEMINI.md") {
    Copy-Item -Path ".\GEMINI.md" -Destination $rulesPath -Force
} else {
    Invoke-RestMethod -Uri "$baseUrl/GEMINI.md" -OutFile $rulesPath
}

# 4. Install clean-code-responses skill
Write-Host "[+] Installing agent skill (clean-code-responses)..." -ForegroundColor White
if (Test-Path ".\skills\clean-code-responses\SKILL.md") {
    Copy-Item -Path ".\skills\clean-code-responses\SKILL.md" -Destination $skillFile -Force
} else {
    Invoke-RestMethod -Uri "$baseUrl/skills/clean-code-responses/SKILL.md" -OutFile $skillFile
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  [OK] Installation completed successfully!               " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Installed files:" -ForegroundColor White
Write-Host "  1. Global Rules : $rulesPath" -ForegroundColor Gray
Write-Host "  2. Agent Skill  : $skillFile" -ForegroundColor Gray
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  - Reload or restart Google Antigravity IDE." -ForegroundColor White
Write-Host "  - Your coding agent will now follow surgical diffs & zero slop!" -ForegroundColor White
Write-Host ""
