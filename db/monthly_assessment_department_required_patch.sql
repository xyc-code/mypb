-- Existing installations only (Dameng / Oracle). New installations use the schema SQL.
-- Inspect and repair these rows using confirmed department information before the ALTER.
-- This script does not delete results or guess department names.
SELECT D.ID, D.RESULT_ID, D.ORG_IDENTITY, D.DEPT_ID, D.DEPT_NAME,
       R.MODULE_CODE, R.ASSESS_ORG_ID, R.ASSESS_ORG_NAME, R.ASSESS_YEAR, R.ASSESS_MONTH
FROM PB_ASSESS_RESULT_DEPT D
LEFT JOIN PB_ASSESS_MONTH_RESULT R ON R.ID = D.RESULT_ID AND R.ORG_IDENTITY = D.ORG_IDENTITY
WHERE COALESCE(LENGTH(TRIM(D.DEPT_ID)), 0) = 0
   OR COALESCE(LENGTH(TRIM(D.DEPT_NAME)), 0) = 0;

-- Run once after the query above returns zero rows. Existing bad rows make this fail.
ALTER TABLE PB_ASSESS_RESULT_DEPT ADD CONSTRAINT CK_PB_ASSESS_DEPT_INFO CHECK
    (COALESCE(LENGTH(TRIM(DEPT_ID)), 0) > 0 AND COALESCE(LENGTH(TRIM(DEPT_NAME)), 0) > 0);
