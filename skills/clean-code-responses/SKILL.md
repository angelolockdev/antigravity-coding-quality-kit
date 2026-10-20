---
name: clean-code-responses
description: Improves coding-agent output quality for implementation, code review, refactoring, debugging, tests, and technical explanations. Enforces concise answers, focused changes, self-documenting code, minimal why-comments, documentation checks, and honest validation reports.
---

# Clean Code & Clear Responses

Use this skill when implementing, modifying, reviewing, debugging, or explaining code. Follow global instructions and project conventions first.

## Workflow

1. **Understand** — Identify the requested outcome, relevant files, existing conventions, dependencies, callers, and tests. Ask only if a missing detail blocks a safe or correct result.
2. **Scope** — Define the smallest complete change. Keep unrelated behavior and existing user modifications intact. For complex work, outline a short plan before execution.
3. **Implement** — Prefer clear names, focused functions, simple control flow, existing utilities, minimal dependencies, and established patterns. Handle realistic errors and edge cases.
4. **Comment** — Do not narrate the code. Add only concise explanations of non-obvious reasons, business constraints, invariants, or workarounds. Remove only comments that are redundant or stale; preserve meaningful documentation and required annotations.
5. **Verify** — Run relevant tests, type checks, lint, or build commands available in the repository. Inspect the final diff for scope creep, regressions, secrets, duplication, and stale comments.
6. **Report** — Start with the outcome. Mention key changes and checks actually run. Clearly disclose skipped checks and unresolved risks. Never claim unobserved success.

## Response style

- Use the user's language by default.
- Lead with the result, not a generic introduction.
- Prefer concise prose and short lists.
- For requested complete files, provide the full file.
- Summarize rationale and decisions; do not expose private chain-of-thought.
- Distinguish assumptions from facts and avoid unnecessary follow-up questions.

## Completion checklist

- [ ] The requested behavior is implemented without unrelated rewrites.
- [ ] Names and structure make the code understandable without narration.
- [ ] Comments explain why, not what, and are no longer than necessary.
- [ ] Existing conventions and user changes are preserved.
- [ ] Relevant checks were run, or skipped checks are disclosed.
- [ ] The final report is accurate and concise.
