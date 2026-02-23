---
description: Safe workflow for pushing changes to the live site via branch + PR
---

# Safe Deployment Workflow (Live Site Protection)

Since `www.drhaithamsharshar.com` auto-deploys from GitHub `main` branch via Netlify, **every push to `main` goes live immediately**. To protect the live site, follow this workflow:

// turbo-all

## Step 0: Environment Setup (CRITICAL — prevents git hang on Windows)

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

## Step 1: Create a feature branch

```
git checkout -b <branch-name>
```

Use naming convention: `ui/description`, `fix/description`, `feat/description`

## Step 2: Make changes and commit

```powershell
$env:GIT_TERMINAL_PROMPT=0; git add -A
$env:GIT_TERMINAL_PROMPT=0; git commit --no-gpg-sign --no-verify -m "type(scope): description"
```

## Step 3: Run safety checks before pushing

```
npx vitest run
```

```
npx vite build
```

## Step 4: Push the branch (NOT main)

```powershell
$env:GIT_TERMINAL_PROMPT=0; git push origin <branch-name> 2>&1
```

> **Note:** PowerShell may report exit code 1 on success because git writes to stderr. Look for `->` in the output to confirm.

## Step 5: Merge via git (or GitHub PR)

Option A — Merge locally:

```powershell
git checkout main
git merge --no-gpg-sign <branch-name> -m "Merge <branch-name>"
$env:GIT_TERMINAL_PROMPT=0; git push origin main 2>&1
```

Option B — Create a Pull Request on GitHub:
Go to: https://github.com/drsharshar89/HS-CLINIC/pulls

- Click "New Pull Request"
- Base: `main` ← Compare: `<branch-name>`
- Review the diff, confirm no regressions
- Merge when satisfied

## Step 6: Netlify auto-deploys

Once merged to `main`, Netlify auto-builds and deploys within ~5 minutes.
Check deploy status at: https://app.netlify.com/

## Emergency Rollback

If something breaks on the live site:

```
git revert HEAD --no-gpg-sign
git push origin main
```

This creates a new commit that undoes the last change — Netlify will auto-deploy the fix.
