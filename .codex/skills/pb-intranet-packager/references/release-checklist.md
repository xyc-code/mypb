# PB Intranet Release Checklist

## Purpose

Use this checklist when preparing changes from the external PB test copy for the intranet PB system. The goal is to produce a controlled delivery package, not to overwrite the intranet environment.

## Current Project Facts

- Project root: `D:\codeXPorject\pb\pb`
- Runtime web root: `WebRoot`
- Runtime classes root: `WebRoot\WEB-INF\classes`
- The project is a Git repository; use Git diff as the first evidence source for deployment candidates.
- Local test dependencies use DM8, Redis, and Tomcat on local ports.

## Package By Evidence, Not Memory

Always generate a manifest. Do not manually guess changed files.

First generate a candidate list from Git:

```powershell
git diff --name-only
git diff --name-only <base-commit> <head-commit>
git show --name-only --format= <commit>
```

Then filter that Git list to the requested module scope and add any impact-closure files discovered by call-chain review. The final candidate list must be saved or reported and compared against the package contents with `scripts/check-package-coverage.ps1`.

The baseline package script can also compare current file hashes against the baseline at:

```text
D:\pb-release\baseline\pb-baseline.json
```

The baseline represents the last known intranet-synced state. Do not update it until the user confirms the intranet has been synchronized.

## Git First

Before every intranet deployment package:

- Commit the deployment-related changes.
- Push the commit to Git.
- Use Git diff or the pushed commit to create the deployment candidate file list before copying files.
- If unrelated dirty or staged files exist, do not include them in that commit or package; mention them separately.
- Use the pushed commit as the traceable source for the package contents.

Do not package a module for intranet deployment from uncommitted deployment changes unless the user explicitly overrides this rule.

## Scope Only The Requested Modules

Package only files involved in the requested module(s). Do not package every changed file from the worktree just because it is dirty.

Use these inputs to define scope:

- the modules named by the user,
- module memory files under `.codex/skills/pb-module-memory/references/modules/`,
- directly related JSP/JS/CSS/Java/XML/SQL files,
- manual platform or SQL migration notes for those modules.

Leave unrelated deletes, experiments, local notes, generated folders, and other pending work out of the package.

## Impact Closure, Not File Memory

Before packaging, write or generate a short impact-closure list for each module. This is the list to compare against the package contents.

For Java and MyBatis changes, trace the complete local call chain:

- Controller methods that expose the endpoint.
- Service methods that contain or call the changed behavior.
- DAO interfaces that declare changed method signatures or `@Param` names.
- `src` Mapper XML that uses those DAO parameters or SQL changes.
- Runtime Mapper XML under `WebRoot\WEB-INF\classes\...` when the platform loads mapper XML from classes.
- New helper services and SQL tables used by that chain.

Never assume an interface file is safe to omit. If a Service call adds, removes, or renames a DAO argument, the DAO interface must be packaged even if the implementation is only MyBatis XML.

Regression example from 2026-07-03: `pendingWork` portal business todos changed `PortalTaskService.searchPortalTaskByPage` to pass `businessTodoEnabled` into `PortalTaskDao.searchPortalTaskByPage`. The package must include `PortalTaskDao.java`, `PortalTaskService.java`, `PortalTaskMapper.xml`, `PortalUnionTaskController.java`, `PortalBusinessTodoService.java`, and `db/portal_business_todo.sql`.

## Coverage Check

After the package is built, run the coverage checker. The checker compares expected relative project paths against files inside a release directory or zip. It accepts either a candidate text file or a Git range.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\check-package-coverage.ps1 -ReleasePath D:\pb-release\<dir-or-zip> -CandidateFile D:\pb-release\<dir>\deployment-candidates.txt
```

If all files in a Git range are deployment-scoped:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-intranet-packager\scripts\check-package-coverage.ps1 -ReleasePath D:\pb-release\<dir-or-zip> -GitBase <base-commit> -GitHead HEAD
```

Missing files are blocking. Fix the package and rerun the checker before telling the user it is ready.

## Include By Default

These changed files can be copied into `按模块分开\<中文模块名>\` with their original relative paths inside each module folder:

- `WebRoot/**/*.jsp`
- `WebRoot/**/*.js`
- `WebRoot/**/*.css`
- `src/**/*.java`
- `src/**/*.xml`
- `WebRoot/WEB-INF/classes/**/*Mapper.xml`
- changed SQL files, copied under `db/` for review

## Risk-List, Do Not Package By Default

These files may be needed, but must be reviewed before copying to intranet:

- `WebRoot/WEB-INF/classes/**/*.properties`
- `WebRoot/WEB-INF/lib/*.jar`
- `src/**/*` except Java/XML source files
- any environment configuration
- any DB dump or generated runtime artifact

## Exclude By Default

Never include these unless the user explicitly asks and confirms the intranet value:

- `WebRoot/WEB-INF/classes/jdbc.properties`
- `WebRoot/WEB-INF/classes/platform6.properties`
- `WebRoot/WEB-INF/classes/rest-client.xml`
- `WebRoot/WEB-INF/classes/spring-redis.xml`
- `WebRoot/WEB-INF/classes/spring-product-mq.xml`
- `WebRoot/WEB-INF/classes/spring-consumer-mq.xml`
- `WebRoot/WEB-INF/classes/service/application-service.xml`
- `WebRoot/static/js/platform/sysmessage/js/messageDialog.js` (local-only system-message popup suppression; do not deploy to intranet)
- `db/imp_exp.dmp`
- `WebRoot/WEB-INF/classes/**/*.class`
- Tomcat, DM, Redis, local logs, temp files, generated release packages

## Java Rules

- The user does not want `.class` files in deployment packages.
- Deliver Java changes through `src\...` and let the intranet test environment compile them.
- Do not mark changed `.java` without matching changed `.class` as blocking.
- Mapper changes may need source XML and/or runtime `WebRoot\WEB-INF\classes\**\*Mapper.xml`; include the XML, but do not include classes.
- When packaging a changed Service that calls a DAO/Mapper, inspect the exact method call and include the DAO interface if its signature or `@Param` list changed.
- When packaging a changed Mapper XML that references a new parameter, include the DAO interface that defines that parameter.
- Treat missing caller/declaration/mapper files as a blocking package error, not a warning.

## Multi-Module Folder Rules

When more than one module is included, separate files under Chinese folder names:

- `党委计划3.0`
- `Excel多子表导出`
- `门户待办推送`
- `其他变更`

Each Chinese module folder must preserve PB project-relative paths inside it, so copying that folder's contents to the PB project root keeps files in the right location.

## Database Rules

File copying is not enough when a feature changes:

- table structure,
- views,
- sequences,
- dictionaries,
- menu/resource permissions,
- forms/eform definitions,
- workflow/process configuration,
- scheduled jobs,
- uploaded/attached files or doccenter data.

If such changes are suspected and no SQL or migration note is present, mark the package for manual DB/platform migration confirmation.

## What To Tell The User

After packaging, report:

- release package path,
- Chinese module folders included,
- copied files count,
- excluded/risk files count,
- blocking warnings,
- whether SQL/manual DB migration is needed,
- exact next step for intranet copying.

