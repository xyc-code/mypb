---
name: pb-table-audit-fields
description: Mandatory PB low-code table field rules. Use whenever creating, designing, reviewing, migrating, or generating a data table, SQL DDL, mapper, low-code/eform table, dynamic DYN_* table, or database migration for the PB project. Every new business table must include the required audit columns exactly as specified.
---

# PB Table Audit Fields

Use this project-local skill every time a PB data table is created or reviewed. This is mandatory.

## Required Columns

Every new PB business/data table must include these fields exactly:

| Order | Column English Name | Column Chinese Name | Type | Length |
| --- | --- | --- | --- | --- |
| 1 | `ID` | `ID` | `VARCHAR2` | `50` |
| 2 | `CREATED_BY` | `CREATED_BY` | `VARCHAR2` | `50` |
| 3 | `CREATION_DATE` | `CREATION_DATE` | `DATE` | `0` |
| 4 | `LAST_UPDATED_BY` | `LAST_UPDATED_BY` | `VARCHAR2` | `50` |
| 5 | `LAST_UPDATE_DATE` | `LAST_UPDATE_DATE` | `DATE` | `0` |
| 6 | `LAST_UPDATE_IP` | `LAST_UPDATE_IP` | `VARCHAR2` | `50` |
| 7 | `VERSION` | `VERSION` | `NUMBER` | `16` |
| 8 | `ORG_IDENTITY` | `ORG_IDENTITY` | `VARCHAR2` | `32` |

The column English name and column Chinese name must be the same values shown above.

## How To Apply

- In the low-code table UI, add the 8 rows in the exact order above.
- For DATE fields, use type `DATE` and length `0`.
- For SQL DDL, use Dameng/Oracle-style compatible declarations matching the same type and length.
- Do not rename, localize, omit, or reorder these fields unless the user explicitly gives a platform-level reason.
- If a generated table already has some of these fields, add only the missing ones and correct mismatched type/length.

## SQL Template

```sql
ID VARCHAR2(50),
CREATED_BY VARCHAR2(50),
CREATION_DATE DATE,
LAST_UPDATED_BY VARCHAR2(50),
LAST_UPDATE_DATE DATE,
LAST_UPDATE_IP VARCHAR2(50),
VERSION NUMBER(16),
ORG_IDENTITY VARCHAR2(32)
```

## Checks

Run the bundled checker for SQL files or text exports:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-table-audit-fields\scripts\check-table-audit-fields.ps1 -Paths path\to\file.sql
```

When creating a PB table, report explicitly that these mandatory columns were included or list what is missing.
