# PB Intranet Release Checklist

## Purpose

Use this checklist when preparing changes from the external PB test copy for the intranet PB system. The goal is to produce a controlled delivery package, not to overwrite the intranet environment.

## Current Project Facts

- Project root: `C:\Users\xyc\Desktop\codeXPorject\pb\pb`
- Runtime web root: `WebRoot`
- Runtime classes root: `WebRoot\WEB-INF\classes`
- The project is currently not a Git repository.
- Local test dependencies use DM8, Redis, and Tomcat on local ports.

## Package By Evidence, Not Memory

Always generate a manifest. Do not manually guess changed files. The package script compares current file hashes against the baseline at:

```text
D:\pb-release\baseline\pb-baseline.json
```

The baseline represents the last known intranet-synced state. Do not update it until the user confirms the intranet has been synchronized.

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

