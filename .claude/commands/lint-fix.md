---
description: Run ESLint, then fix the reported issues
allowed-tools: Bash(npm run lint:*), Bash(npx eslint:*), Read, Edit
---

Current lint output:

!`npm run lint 2>&1 || true`

Review the ESLint output above. If there are errors or warnings, fix them by
editing the relevant files — prefer real fixes over disabling rules. If the
output is clean, just say so. Explain briefly what each fix addressed.
