-- Party committee work plan 3.0: remove the obsolete category column.
-- Repeatable migration; existing task rows and all other columns are preserved.

DECLARE
  V_COUNT NUMBER;
BEGIN
  SELECT COUNT(1)
    INTO V_COUNT
    FROM USER_TAB_COLUMNS
   WHERE TABLE_NAME = 'DYN_DW_PLAN3_TASK'
     AND COLUMN_NAME = 'WORK_CATEGORY';
  IF V_COUNT > 0 THEN
    EXECUTE IMMEDIATE 'ALTER TABLE DYN_DW_PLAN3_TASK DROP COLUMN WORK_CATEGORY';
  END IF;
END;
/
