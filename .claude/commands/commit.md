---
description: Stage and commit changes using this repo's commit message style
argument-hint: [optional short description of the change]
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git add:*), Bash(git commit:*)
---

Current state:

- Status: !`git status --short`
- Diff (staged + unstaged): !`git diff HEAD`
- Recent commit style: !`git log --oneline -8`

Based on the changes above, stage the relevant files and create ONE commit.

- Match the existing message style in the recent log (this repo uses messages
  like `feat : dynamic imports`).
- Extra context from me (optional): $ARGUMENTS
- Do NOT push. Do NOT commit unrelated files.
- End the commit message with the required trailer:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`

Show me the final commit message before committing.
