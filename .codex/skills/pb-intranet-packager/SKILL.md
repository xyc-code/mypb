---
name: pb-intranet-packager
description: Package the PB Java Web test project for intranet deployment. Use when the user says to 打包到内网, 生成内网拷贝清单, 发布补丁包, or prepare files from C:\Users\xyc\Desktop\codeXPorject\pb\pb for copying into the internal PB environment.
---

# PB Intranet Packager

Use this project-local skill only for the PB project. It creates an intranet delivery package from the tested local copy without relying on Git.

## User Preferences

- Do not package `.class` files. Deliver Java changes as `src` files for the intranet test environment to compile.
- When packaging multiple modules, split files by module folder and use Chinese folder names, for example `党委计划3.0`, `Excel多子表导出`, and `门户待办推送`.
- Keep each module folder copyable into the PB project root by preserving original relative paths inside that folder.

## Workflow

1. Read `references/release-checklist.md`.
2. Run `scripts/create-pb-release.ps1` from the project root.
3. Review the generated package under `D:\pb-release\<timestamp>\`.
4. Tell the user:
   - the package path,
   - module folders under `按模块分开\`,
   - files to copy,
   - files intentionally excluded,
   - blocking warnings,
   - DB or platform-config items needing manual migration.
5. Do not update the baseline unless the user explicitly says the intranet sync is complete.

## Commands

Create a release package:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\create-pb-release.ps1
```

Update the baseline after confirmed intranet sync:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\update-baseline.ps1
```

## Guardrails

- Write generated packages and baselines to `D:\pb-release`, not C.
- Never package `.class` files by default.
- Package changed Java/XML source files under `src\...` instead of runtime classes.
- Do not package environment configs by default.
- Do not package `db\imp_exp.dmp`.
- Do not treat changed `.java` without changed `.class` as blocking; the intranet compiles Java from source.
- Treat DB/schema/menu/permission/form/process changes as manual migration work, not file-only deployment.

