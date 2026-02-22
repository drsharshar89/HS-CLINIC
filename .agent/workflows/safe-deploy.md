---
description: Safe workflow for pushing changes to the live site via branch + PR
---

# Safe Deployment Workflow (Live Site Protection)

Since `www.drhaithamsharshar.com` auto-deploys from GitHub `main` branch via Netlify, **every push to `main` goes live immediately**. To protect the live site, follow this workflow:

## Steps

### 1. Create a feature branch

// turbo

```
git checkout -b <branch-name>
```

Use naming convention: `ui/description`, `fix/description`, `feat/description`

### 2. Make changes and commit

```
git add -A
git commit -m "type(scope): description"
```

### 3. Run safety checks before pushing

// turbo

```
npx vitest run
```

// turbo

```
npx vite build
```

### 4. Push the branch (NOT main)

```
git push origin <branch-name>
```

### 5. Create a Pull Request on GitHub

Go to: https://github.com/drsharshar89/HS-CLINIC/pulls

- Click "New Pull Request"
- Base: `main` ← Compare: `<branch-name>`
- Review the diff, confirm no regressions
- Merge when satisfied

### 6. Netlify auto-deploys

Once merged to `main`, Netlify auto-builds and deploys within ~2 minutes.
Check deploy status at: https://app.netlify.com/

## Emergency Rollback

If something breaks on the live site:

```
git revert HEAD
git push origin main
```

This creates a new commit that undoes the last change — Netlify will auto-deploy the fix.

// turbo-all
