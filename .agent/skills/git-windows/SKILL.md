---
name: Git on Windows
description: Rules for running git commands on this Windows machine without hanging
---

# Git on Windows — Agent Skill

This machine has Windows-specific git configuration that causes commands to hang if not handled properly. **Every agent session MUST follow these rules.**

## Environment Setup (Run Once Per Session)

Before ANY git operation, always execute:

```powershell
# Kill any zombie git/gpg processes from previous sessions
taskkill /F /IM git.exe 2>$null
taskkill /F /IM gpg.exe 2>$null
taskkill /F /IM gpg-agent.exe 2>$null

# Remove stale lock files
if (Test-Path ".git/index.lock") { Remove-Item ".git/index.lock" -Force }

# Disable GPG signing (global config has commit.gpgsign enabled)
git config --local commit.gpgsign false
git config --local tag.gpgsign false
```

## Git Command Rules

### Commits

Always use:

```powershell
$env:GIT_TERMINAL_PROMPT=0
git commit --no-gpg-sign --no-verify -m "message"
```

**Never** use bare `git commit` — it will hang waiting for a GPG passphrase dialog.

### Push

Always use:

```powershell
$env:GIT_TERMINAL_PROMPT=0
git push origin <branch> 2>&1
```

**Important:** PowerShell reports exit code 1 even on successful push because git writes progress to stderr. Check the output for `branch-name -> branch-name` to confirm success.

### Credential Helper

The global config has `credential.helper=manager` which spawns a Windows Credential Manager GUI. If push hangs, override with:

```powershell
git -c credential.helper="" push origin <branch> 2>&1
```

## Troubleshooting

| Symptom                                       | Cause                            | Fix                                       |
| --------------------------------------------- | -------------------------------- | ----------------------------------------- |
| `git commit` hangs > 10s                      | GPG passphrase dialog            | `git config --local commit.gpgsign false` |
| `git push` hangs > 10s                        | Credential Manager popup         | Set `$env:GIT_TERMINAL_PROMPT=0`          |
| `git add` hangs                               | Lock file from killed process    | `Remove-Item ".git/index.lock" -Force`    |
| Exit code 1 but output shows `->`             | PowerShell stderr false positive | **Ignore** — the push succeeded           |
| Commit appears to hang but `git log` shows it | Output capture stalling          | Kill process and proceed to push          |

## Husky Hooks

This project uses Husky for:

- **pre-commit**: lint + format (runs on every commit unless `--no-verify`)
- **pre-push**: build + test (runs on every push unless `--no-verify`)

Pre-push hooks take ~3-5 minutes (full build + 42 tests). This is **normal**, not a hang.
Use `--no-verify` to skip when you've already verified the build manually.
