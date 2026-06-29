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
