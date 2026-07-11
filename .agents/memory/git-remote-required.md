---
name: Git remote required before push
description: gitPush/gitPull/createPullRequest require an origin remote already configured on the workspace repo; cloning a separate reference repo elsewhere does not set this up.
---

`gitPush({})` returns `{"code":"NO_REMOTE"}` if the workspace's own git repo has no `origin` remote configured. Cloning another repo (e.g. to `/tmp/repo`) purely for reference/inspiration does not configure the workspace's own remote — they are unrelated git repos.

**Why:** Users sometimes ask to rebuild a project "from" a GitHub repo and then push the result back — but the workspace repo and the reference repo are separate; pushing requires explicitly wiring the workspace's origin to a target repo (and GitHub account connection), which is not implied by just cloning a reference copy.

**How to apply:** Before assuming a push destination, check `git remote -v` in the actual workspace. If no origin exists, ask the user which repo/branch to push to (and expect they may need to connect GitHub) rather than guessing the reference repo is the intended target.
