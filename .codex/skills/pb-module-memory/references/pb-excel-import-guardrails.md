# PB Excel Import Guardrails

These are project-wide mandatory rules for every Excel import in PB, including existing modules and future work.

## Cell Reading

- An import must accept both text date cells and native Excel date cells.
- Never pass every cell directly to `DateUtil.isCellDateFormatted`. With the PB project's POI 3.9, that method reads a numeric value internally and throws `IllegalStateException` for ordinary text cells.
- Read `cell.getCellType()` first. Call `DateUtil.isCellDateFormatted` only for `CELL_TYPE_NUMERIC`, or for `CELL_TYPE_FORMULA` when `getCachedFormulaResultType()` is numeric.
- For native Excel date cells, use `getDateCellValue()` and normalize before database conversion. Use `yyyy-MM-dd` for business dates and the field's explicit timestamp contract, normally `yyyy-MM-dd HH:mm:ss`, for timestamps.
- For non-date cells, keep the module's normal `DataFormatter` or explicit text parsing path. Do not rely on Excel's displayed date text because workbook styles and locale can produce values such as `7/1/20` that `java.sql.Date.valueOf` rejects.
- Text-date parsing must be explicit and must normalize to the same value contract as native Excel dates before persistence. Blank cells must retain the module's documented blank/null behavior.

## Failure Diagnostics

- Never return only `导入失败` or depend only on `Exception.getMessage()`: exception messages may be blank.
- Each failed workbook or import operation must return a traceable error ID and log the complete exception stack on the server with that same ID, the import module, and the filename.
- Do not log passwords, tokens, or full imported business rows. Add sheet/row/column context only when it is safe and useful.
- If the import supports multiple files, preserve the module's documented isolation behavior so one failed workbook does not hide the result of the others.

## Required Regression Checks

Before declaring an Excel import complete, verify at least:

1. A valid text date imports successfully.
2. The same date stored as a native Excel date imports to the same database value.
3. An ordinary text cell passes without `DateUtil`/numeric conversion exceptions.
4. A numeric formula date, when supported by the importer, follows the native-date path.
5. An invalid date produces a useful row/file error; an unexpected exception produces an error ID and a matching full server log.
6. The touched Java source compiles with the PB project's JDK 8 and POI version.

## Origin

- Established after the 2026-09-08 group-data-sync incident. Excel-native dates were first formatted as locale-dependent text, then an unguarded `DateUtil.isCellDateFormatted` call failed on `CELL_TYPE_STRING`. The corrected implementation checks the cell type before date detection and normalizes native dates explicitly.
- Detailed incident evidence remains in `references/modules/sync-group-data.md`.
