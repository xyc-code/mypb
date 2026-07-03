---
name: pb-intranet-packager
description: Package the PB Java Web test project for intranet deployment. Use when the user says to 打包到内网, 生成内网拷贝清单, 发布补丁包, or prepare files from D:\codeXPorject\pb\pb for copying into the internal PB environment.
---

# PB Intranet Packager

Use this project-local skill only for the PB project. It creates an intranet delivery package from the tested local copy without relying on Git.

## User Preferences

- Before every intranet deployment package, first commit and push the deployment-related changes to Git.
- Package only the files involved in the requested module(s). Do not package unrelated dirty worktree changes just because they exist.
- Do not package `.class` files. Deliver Java changes as `src` files for the intranet test environment to compile.
- When packaging multiple modules, split files by module folder and use Chinese folder names, for example `党委计划3.0`, `Excel多子表导出`, and `门户待办推送`.
- Keep each module folder copyable into the PB project root by preserving original relative paths inside that folder.

## Workflow

1. Read `references/release-checklist.md`.
2. Confirm the requested module scope and list the exact involved files.
3. Commit and push the deployment-related changes to Git before packaging. If unrelated dirty files exist, leave them out and mention them.
4. Generate the first candidate list from Git, not memory. Use `git diff --name-only` for uncommitted work or `git diff --name-only <base> <head>` for committed deployment work, then filter it to the requested module scope.
5. Build an impact-closure list before copying files. For Java/XML changes, trace from Controller -> Service -> DAO interface -> Mapper XML -> runtime Mapper XML and include every changed signature, caller, mapper, and SQL file in that chain.
6. Generate a focused package for only the requested module(s). Use `scripts/create-pb-release.ps1` only when its output can be limited to the requested scope; otherwise create a focused package manually.
7. Run `scripts/check-package-coverage.ps1` against the release package and the candidate/impact-closure list. Missing required files are blocking; do not finish or hand off the package while any expected file is absent.
8. Review the generated package under `D:\pb-release\<timestamp>\` and compare it against the impact-closure list. Do not finish if a required file is absent.
9. Tell the user:
   - the package path,
   - module folders under `按模块分开\`,
   - files to copy,
   - files intentionally excluded,
   - blocking warnings,
   - DB or platform-config items needing manual migration.
10. Do not update the baseline unless the user explicitly says the intranet sync is complete.

## Commands

Create a release package:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\create-pb-release.ps1
```

Check that a release package contains every expected deployment file:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\check-package-coverage.ps1 -ReleasePath D:\pb-release\<dir-or-zip> -CandidateFile D:\pb-release\<dir>\deployment-candidates.txt
```

When the whole Git range is deployment-scoped, use Git directly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\check-package-coverage.ps1 -ReleasePath D:\pb-release\<dir-or-zip> -GitBase <base-commit> -GitHead HEAD
```

Update the baseline after confirmed intranet sync:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\update-baseline.ps1
```

## Guardrails

- Write generated packages and baselines to `D:\pb-release`, not C.
- Commit and push to Git before packaging for intranet deployment.
- Treat Git diff as the first source of truth for package candidates. Do not rely only on module memory, conversation memory, or a hand-written list.
- Keep package scope narrow: only include files for the requested module(s), even when the worktree contains other changed or staged files.
- Never package `.class` files by default.
- Package changed Java/XML source files under `src\...` instead of runtime classes.
- If a Java method signature changes, package all source files that declare or call that signature, not only the file with business logic. Example: if `PortalTaskService` calls `PortalTaskDao.searchPortalTaskByPage(...)` with a new parameter, include `PortalTaskDao.java` as well as the service and mapper XML.
- If a MyBatis mapper XML uses a new `@Param`, package the DAO interface declaring that `@Param`.
- For each changed `*Mapper.xml` under `src`, include the matching runtime `WebRoot\WEB-INF\classes\...\*Mapper.xml` when the intranet runtime reads mapper XML from classes.
- Do not package environment configs by default.
- Do not package `db\imp_exp.dmp`.
- Do not treat changed `.java` without changed `.class` as blocking; the intranet compiles Java from source.
- Treat DB/schema/menu/permission/form/process changes as manual migration work, not file-only deployment.

