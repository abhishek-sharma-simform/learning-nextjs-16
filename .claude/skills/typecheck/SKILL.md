---
name: typecheck
description: Run the TypeScript compiler (tsc --noEmit) and fix reported type errors. Use when the user asks to typecheck the project, check for TS errors, or after making changes that could break types.
---

# Typecheck

Run the project's TypeScript compiler in no-emit mode and resolve whatever it reports.

## Steps

1. Run `npx tsc --noEmit --pretty` and capture the output.
2. If the output is clean, say so and stop.
3. If there are errors, fix them by editing the relevant files:
   - Prefer real fixes — correcting types, narrowing, adding proper
     annotations — over `any` or `@ts-ignore`.
   - Match the existing code style in the file being fixed.
4. Re-run `npx tsc --noEmit --pretty` to confirm the errors are resolved.
5. Briefly explain what each fix addressed.
