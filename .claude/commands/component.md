---
description: Create a new React component (server by default, client if asked)
argument-hint: <ComponentName> [client]
allowed-tools: Read, Write, Glob
---

Create a new React component named `$1` for this Next.js 16 app.

- If `$2` is `client`, make it a Client Component (add `"use client"` at the
  top) and briefly note why/when that directive is needed.
- Otherwise make it a Server Component (the default in the App Router) — no
  directive, and it can be `async` if it needs to fetch data.
- Use TypeScript with a typed props interface.
- Place it in a sensible location, matching where existing components live in
  this repo (check `app/_lib` and the `app/` routes first with Glob/Read).
- Match the existing code style and Tailwind usage.

After creating it, show me a one-line usage example and explain the
server-vs-client choice.
