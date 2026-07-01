# 多子表 Excel 导出配置模块

## Business Purpose

维护多子表 Excel 导出配置。管理员配置主表、子表、导出字段、字段顺序和主子关联字段后，导出接口按 `code + id` 读取配置并生成 Excel。

## Current Status

- 第一版实现为 JSP + jQuery/jqGrid/layer 页面。
- 后端使用 Spring MVC + JdbcTemplate，复用 `MultiSubTableExcelExporter`。
- 导出入口支持：
  - 页面路径：`platform/avicit/pb/excelexportconfig/excelExportConfigController/operation/export?code=...&id=...`
  - API 路径：`/pb/api/pb/excelExportConfig/export?code=...&id=...`

## Tables

- `PB_EXCEL_EXPORT_CONFIG`：配置主表，`CONFIG_CODE` 唯一。
- `PB_EXCEL_EXPORT_COLUMN`：字段明细，按 `SORT_NO` 控制导出顺序。
- `PB_EXCEL_EXPORT_RELATION`：主子表关系，保存主表字段和子表字段。
- 三张表均包含 PB 强制审计字段：
  `ID, CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE, LAST_UPDATE_IP, VERSION, ORG_IDENTITY`。
- SQL 文件：`sql/pb_excel_export_config.sql`。

## Rules

- 类型固定为 `MAIN` 和 `CHILD`。
- `CHILD` 类型不能配置子表关系。
- 第一版只支持 `主表字段 = 子表字段`，不支持自定义 SQL。
- 运行时不接受请求传入任意表名或字段名，只使用已保存配置。
- 表名、字段名必须通过数据库元数据校验。

## Changed Files

- `src/avicit/pb/excelexportconfig/controller/ExcelExportConfigController.java`
- `src/avicit/pb/excelexportconfig/controller/ExcelExportApiController.java`
- `src/avicit/pb/excelexportconfig/service/ExcelExportConfigService.java`
- `WebRoot/avicit/pb/excelexportconfig/ExcelExportConfigManage.jsp`
- `WebRoot/static/pb-modern/excel-export-config/excel-export-config.js`
- `WebRoot/static/pb-modern/excel-export-config/excel-export-config.css`
- `sql/pb_excel_export_config.sql`

## Verification Notes

- 打开管理页：`/pb/platform/avicit/pb/excelexportconfig/excelExportConfigController/toExcelExportConfigManage`
- 元数据接口依赖当前用户 schema 的 `USER_TAB_COMMENTS`、`USER_TAB_COLUMNS`、`USER_COL_COMMENTS`。
- 表结构会在服务首次调用时自检创建；内网部署仍建议执行 SQL 文件。
- 2026-06-29 本地验证：
  - 使用 `admin` 登录后管理页可打开，列表、添加、编辑、删除、搜索工具栏渲染正常，浏览器控制台无错误。
  - 添加弹窗可搜索 `SYS_USER`，选择表后字段明细自动回填 58 行，主表类型显示关联子表区域。
  - 编辑测试配置 `TEST_SYS_USER_EXPORT` 时可回显 6 个主表字段和 2 条子表关系。
  - 导出接口 `/pb/api/pb/excelExportConfig/export?code=TEST_SYS_USER_EXPORT&id=...` 可生成 xlsx，主表列顺序和两个子表区块按配置输出。
  - 不存在的 code 返回明确错误：`未找到可用的主表导出配置：NO_SUCH_CODE`。

## 2026-06-30 Intranet Handoff

- User asked to deploy the Excel export module to the intranet.
- Official full release script `.codex/skills/pb-intranet-packager/scripts/create-pb-release.ps1` was started but did not finish after more than 5 minutes, so the stuck PowerShell process was stopped.
- Created a focused module release package instead:
  - Package directory: `D:\pb-release\excel-export-20260630-112945`
  - Zip: `D:\pb-release\excel-export-20260630-112945\excel-export-release.zip`
  - Manifest: `D:\pb-release\excel-export-20260630-112945\manifest.md`
  - Warnings/manual items: `D:\pb-release\excel-export-20260630-112945\warnings.md`
- Runtime files packaged under `files/`:
  - `WebRoot/avicit/pb/excelexportconfig/ExcelExportConfigManage.jsp`
  - `WebRoot/static/pb-modern/excel-export-config/excel-export-config.css`
  - `WebRoot/static/pb-modern/excel-export-config/excel-export-config.js`
  - `WebRoot/WEB-INF/classes/avicit/pb/excelexportconfig/controller/ExcelExportApiController.class`
  - `WebRoot/WEB-INF/classes/avicit/pb/excelexportconfig/controller/ExcelExportConfigController.class`
  - `WebRoot/WEB-INF/classes/avicit/pb/excelexportconfig/service/ExcelExportConfigService.class`
  - all `WebRoot/WEB-INF/classes/avicit/pb/utils/excel/MultiSubTableExcelExporter*.class`
  - `sql/pb_excel_export_config.sql`
- Source files were copied only under `risk-review/src/` for review/record and must not be copied directly to the intranet runtime.
- Manual intranet steps:
  - Copy only `files/` contents to the matching intranet PB project paths.
  - Execute `files/sql/pb_excel_export_config.sql` if the three `PB_EXCEL_EXPORT_*` tables do not exist.
  - If old tables already exist, ensure `PB_EXCEL_EXPORT_COLUMN` has `DISPLAY_FORMAT VARCHAR2(30)` and `DICT_TYPE VARCHAR2(100)`.
  - Configure platform menu/resource URL: `platform/avicit/pb/excelexportconfig/excelExportConfigController/toExcelExportConfigManage`.
  - Restart Tomcat after copying classes/JSP/static assets.
  - Do not update `D:\pb-release\baseline` until the user confirms the intranet copy is complete.
- Verification before packaging:
  - `node --check WebRoot/static/pb-modern/excel-export-config/excel-export-config.js` passed.
  - Runtime `.class` timestamps are newer than the related Java sources.
  - Zip opened successfully and contained entries.

## 2026-06-30 Source Package Correction

- User clarified that the intranet test environment should compile Java itself and does not need `.class` files.
- Created a source-based intranet package:
  - Directory: `D:\pb-release\内网部署-Excel导出模块-源码版-20260630`
  - Zip: `D:\pb-release\内网部署-Excel导出模块-源码版-20260630\excel-export-source-release.zip`
- Package contains JSP, JS, CSS, SQL, and 4 Java source files under `files/`.
- Verified package has `JAVA_COUNT=4` and `CLASS_COUNT=0`.
- Use this source package for intranet testing instead of the previous class-based package.

## 2026-06-30 Intranet Compile Path Fix

- User reported that the intranet editor had no errors, but runtime/compile reported missing package `avicit.pb.utils.excel`.
- Local check confirmed:
  - `src/avicit/pb/utils/excel/MultiSubTableExcelExporter.java` declares `package avicit.pb.utils.excel;`
  - `ExcelExportConfigService.java` imports `avicit.pb.utils.excel.MultiSubTableExcelExporter`
  - The previous source package placed files under `files/src/...`, which can be mis-copied as `project/files/src/...`.
- Created a direct-root source package to avoid that mistake:
  - Directory: `D:\pb-release\内网部署-Excel导出模块-源码版-直接覆盖工程根目录-20260630`
  - Zip: `D:\pb-release\内网部署-Excel导出模块-源码版-直接覆盖工程根目录-20260630\excel-export-source-direct-root.zip`
- This package has top-level `src`, `WebRoot`, and `sql`; copy those directories directly to the intranet project root.
- Required intranet source path:
  - `src/avicit/pb/utils/excel/MultiSubTableExcelExporter.java`
- Required compiled runtime path after intranet build:
  - `WebRoot/WEB-INF/classes/avicit/pb/utils/excel/MultiSubTableExcelExporter.class`

## 2026-06-30 Format Conversion Enhancement

- Implemented export display format enhancements:
  - `DICT` lookup now matches `SYS_LOOKUP_V.LOOKUP_TYPE` case-insensitively.
  - `DICT` lookup now matches `LOOKUP_CODE` by original value and uppercase value.
  - Added `USER` display format: `SYS_USER.ID -> NAME`, with `LOGIN_NAME` fallback.
  - Added `DEPT` display format: `SYS_DEPT_V.ID -> DEPT_NAME`, falling back to `SYS_DEPT.DEPT_NAME` or `SYS_DEPT.DEPT_ALIAS`.
- Frontend config page now includes `USER` and `DEPT` options in the display-format dropdown.
- Add/edit dialog height changed from `720px` to `620px`; page-local dialog content max height changed to `520px` with scroll.
- Verification:
  - `node --check WebRoot/static/pb-modern/excel-export-config/excel-export-config.js` passed.
  - JDK 8 `javac` temp compile passed for exporter, service, and controllers.
  - PB frontend guardrails check passed for the changed JS and CSS, 0 warnings.
