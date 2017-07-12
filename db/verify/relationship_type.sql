-- Verify vf:relationship_type on pg

BEGIN;

SELECT id, name, description
  FROM valueflows.relationship_type
 WHERE FALSE;

ROLLBACK;
