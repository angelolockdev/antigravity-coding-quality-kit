#!/usr/bin/env bash
# ==============================================================================
# Antigravity Coding Quality Kit - Automated Unix / macOS Installer
# Repository: https://github.com/angelolockdev/antigravity-coding-quality-kit
# ==============================================================================

set -euo pipefail

echo ""
echo "=========================================================="
echo "    Antigravity Coding Quality Kit - Unix / macOS Setup   "
echo "=========================================================="
echo ""

GEMINI_DIR="$HOME/.gemini"
RULES_PATH="$GEMINI_DIR/GEMINI.md"
SKILLS_DIR="$GEMINI_DIR/config/skills/clean-code-responses"
SKILL_FILE="$SKILLS_DIR/SKILL.md"

BASE_URL="https://raw.githubusercontent.com/angelolockdev/antigravity-coding-quality-kit/main"

# 1. Ensure directories exist
mkdir -p "$GEMINI_DIR"
mkdir -p "$SKILLS_DIR"

# 2. Backup existing GEMINI.md if present
if [ -f "$RULES_PATH" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    BACKUP_PATH="$GEMINI_DIR/GEMINI.md.backup_$TIMESTAMP"
    echo "[*] Existing GEMINI.md found. Creating backup:"
    echo "    -> $BACKUP_PATH"
    cp "$RULES_PATH" "$BACKUP_PATH"
fi

# 3. Install global rules
echo "[+] Installing global quality rules (GEMINI.md)..."
if [ -f "./GEMINI.md" ]; then
    cp "./GEMINI.md" "$RULES_PATH"
else
    curl -fsSL "$BASE_URL/GEMINI.md" -o "$RULES_PATH"
fi

# 4. Install agent skill
echo "[+] Installing agent skill (clean-code-responses)..."
if [ -f "./skills/clean-code-responses/SKILL.md" ]; then
    cp "./skills/clean-code-responses/SKILL.md" "$SKILL_FILE"
else
    curl -fsSL "$BASE_URL/skills/clean-code-responses/SKILL.md" -o "$SKILL_FILE"
fi

echo ""
echo "=========================================================="
echo "  [OK] Installation completed successfully!               "
echo "=========================================================="
echo ""
echo "Installed files:"
echo "  1. Global Rules : $RULES_PATH"
echo "  2. Agent Skill  : $SKILL_FILE"
echo ""
echo "Next steps:"
echo "  - Reload or restart Google Antigravity IDE."
echo "  - Your coding agent will now follow surgical diffs & zero slop!"
echo ""
