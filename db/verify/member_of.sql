-- Verify vf:member_of on pg

BEGIN;

SELECT subject_id, object_id, degrees
  FROM valueflows.member_of
 WHERE FALSE;

ROLLBACK;
