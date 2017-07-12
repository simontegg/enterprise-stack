-- Verify vf:has_member on pg

BEGIN;

SELECT subject_id, object_id, degrees
  FROM valueflows.has_member
 WHERE FALSE;

ROLLBACK;
