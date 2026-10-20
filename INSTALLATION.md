# Installation — Antigravity global coding instructions

This kit contains a global rules file and an optional reusable skill. The rules are the always-on layer; the skill provides a focused workflow that the agent can activate when relevant.

## 1. Install the global rules

Antigravity IDE supports global rules under `~/.gemini/`. Recommended target:

- Windows: `%USERPROFILE%\.gemini\GEMINI.md`
- macOS/Linux: `~/.gemini/GEMINI.md`

Back up any existing file before replacing it. If you already have global instructions, merge the new content with them instead of overwriting your custom rules blindly.

You can also add or edit a global rule through the Antigravity agent panel: **… → Customizations → Rules → + Global**.

## 2. Install the optional global skill

Copy `skills/clean-code-responses/SKILL.md` to:

- Windows: `%USERPROFILE%\.gemini\config\skills\clean-code-responses\SKILL.md`
- macOS/Linux: `~/.gemini/config/skills/clean-code-responses/SKILL.md`

Create the directory if needed. Restart or reload Antigravity if the rule or skill does not appear in Customizations.

## 3. Verify

Ask the agent to make a small targeted code change and check whether it:

1. Starts with the useful result and avoids filler.
2. Makes only the changes needed.
3. Avoids comments that merely narrate code.
4. Runs relevant checks and accurately reports their results.

Global instructions apply across projects on this workstation; they do not automatically synchronize to other machines. Project-specific instructions may further specialize or override global behavior.

## Sources

- Antigravity rules: https://www.antigravity.google/docs/rules/
- Antigravity agent skills: https://antigravity.google/docs/skills?app=antigravity-ide
- Gemini prompting strategies: https://ai.google.dev/gemini-api/docs/prompting-strategies
- Context7 CLI: https://context7.com/docs/clients/cli
