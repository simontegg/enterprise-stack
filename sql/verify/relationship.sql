-- Verify vf:relationship on pg

BEGIN;

SELECT subject_id, object_id, relationship_type
  FROM valueflows.relationship
 WHERE FALSE;

ROLLBACK;
