---
description: Scaffold a new Next.js App Router route (page, layout, loading, error)
argument-hint: <route-path> e.g. dashboard/settings
allowed-tools: Read, Write, Bash(mkdir:*), Glob
---

Scaffold a new App Router route at `app/$ARGUMENTS`.

IMPORTANT: This is Next.js 16 — before writing any file, read the relevant
guide in `node_modules/next/dist/docs/` (e.g. the file-conventions docs for
`page`, `layout`, `loading`, `error`). Heed deprecation notices and use the
current API shape, not what you remember.

Steps:
1. Create the directory `app/$ARGUMENTS` if it does not exist.
2. Create a `page.tsx` server component with a minimal, typed default export.
3. Ask me (briefly) whether I also want `layout.tsx`, `loading.tsx`, and
   `error.tsx` for this route — only create the ones I confirm.
4. Match the code style already used in the existing routes under `app/`.
5. Summarize what each file does and how the route URL maps to the folder.
