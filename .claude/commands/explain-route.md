---
description: Explain how a given route/file works in this Next.js 16 app
argument-hint: <path> e.g. app/f1/(.)f2
allowed-tools: Read, Glob, Grep
---

Explain the Next.js routing behavior of `$ARGUMENTS` for learning purposes.

Cover, as relevant:
- How the folder/file name maps to a URL and what convention it uses
  (dynamic `[param]`, catch-all `[...slug]`, optional catch-all `[[...slug]]`,
  route groups `(group)`, parallel routes `@slot`, intercepting routes
  `(.)`, `(..)`, `(...)`).
- What each special file does (page/layout/loading/error/route/template).
- Server vs client component implications.

Ground the explanation in the actual code — read the files under the path.
When you state a rule, confirm it against `node_modules/next/dist/docs/`
rather than relying on memory, since this version has breaking changes.

Keep it concise and teaching-oriented, with the concrete example from my code.
