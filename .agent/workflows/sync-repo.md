---
description: Sync local changes to GitHub repository (Windows-safe with GPG fix)
---

# Sync to GitHub (Windows-Safe)

This workflow stages all changes, commits, and pushes to a branch — with full protection against GPG/credential hanging on Windows.

// turbo-all

## Step 0: Environment Setup (CRITICAL)

Kill any stuck git processes and disable interactive prompts:

```powershell
taskkill /F /IM git.exe 2>$null; taskkill /F /IM gpg.exe 2>$null; taskkill /F /IM gpg-agent.exe 2>$null
```

```powershell
if (Test-Path ".git/index.lock") { Remove-Item ".git/index.lock" -Force }
```

```powershell
git config --local commit.gpgsign false
git config --local tag.gpgsign false
```

## Step 1: Stage all changes

```powershell
$env:GIT_TERMINAL_PROMPT=0; git add -A
```

## Step 2: Commit (no GPG, no hooks)

```powershell
$env:GIT_TERMINAL_PROMPT=0; git commit --no-gpg-sign --no-verify -m "<describe changes>"
```

> Replace `<describe changes>` with a conventional commit message like `fix(seo): description` or `feat(cms): description`.

## Step 3: Push to current branch

```powershell
$env:GIT_TERMINAL_PROMPT=0; git push origin HEAD 2>&1
```

> **Note:** PowerShell may report exit code 1 even on successful push because git writes to stderr. Check the output for `->` which confirms success.

## Troubleshooting

If `git commit` hangs for more than 10 seconds:

1. The commit likely already succeeded — check with `git log --oneline -n 3`
2. Kill processes: `taskkill /F /IM git.exe`
3. Remove lock: `Remove-Item ".git/index.lock" -Force -ErrorAction SilentlyContinue`
4. Retry
