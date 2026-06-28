# PB Required Table Fields

These fields come from the PB low-code table design convention and must be present on every created business table.

| Column English Name | Column Chinese Name | Type | Length |
| --- | --- | --- | --- |
| `ID` | `ID` | `VARCHAR2` | `50` |
| `CREATED_BY` | `CREATED_BY` | `VARCHAR2` | `50` |
| `CREATION_DATE` | `CREATION_DATE` | `DATE` | `0` |
| `LAST_UPDATED_BY` | `LAST_UPDATED_BY` | `VARCHAR2` | `50` |
| `LAST_UPDATE_DATE` | `LAST_UPDATE_DATE` | `DATE` | `0` |
| `LAST_UPDATE_IP` | `LAST_UPDATE_IP` | `VARCHAR2` | `50` |
| `VERSION` | `VERSION` | `NUMBER` | `16` |
| `ORG_IDENTITY` | `ORG_IDENTITY` | `VARCHAR2` | `32` |

## Notes

- `CREATION_DATE` and `LAST_UPDATE_DATE` use length `0` in the low-code UI.
- `VERSION` uses type `NUMBER` and length `16`.
- `ORG_IDENTITY` uses type `VARCHAR2` and length `32`.
- Use the same names for English and Chinese column names in the low-code UI.
- For SQL, `DATE` has no length expression; this still corresponds to low-code length `0`.
