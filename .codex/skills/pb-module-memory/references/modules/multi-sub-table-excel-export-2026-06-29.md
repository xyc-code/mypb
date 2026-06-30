# Multi Sub Table Excel Export - 2026-06-29 Update

## Enhancements

- Added config health check endpoint `operation/check` and a toolbar button.
- Added delete protection: referenced child configs cannot be deleted directly.
- Added child empty-data Excel text through `Section.emptyText`; service sets `暂无数据`.
- Added export volume limits: 500 master rows and 10000 child rows per export call.
- Added `PB_EXCEL_EXPORT_COLUMN.DISPLAY_FORMAT` and `PB_EXCEL_EXPORT_COLUMN.DICT_TYPE`.
- Added dictionary conversion with `SYS_LOOKUP_V` using `LOOKUP_TYPE + LOOKUP_CODE -> LOOKUP_NAME`.

## Verification

- Java compile passed for exporter, service, and controllers.
- JS syntax check passed for `excel-export-config.js`.
- SQL audit-field check passed for `sql/pb_excel_export_config.sql`.
- Page opened after `admin` login and displayed the check button plus format/dict column controls.
- Config check for `TEST` returned pass.
- Deleting referenced child config `TEST1` was blocked by the backend and the row remained.
- Temporary Java export verified dictionary text `自定义` and empty child text `暂无数据`.
- Temporary verification DB row and temporary `FL` column format changes were restored.
