-- Revert vf:relationship_type from pg

BEGIN;

DROP TABLE valueflows.relationship_type;

COMMIT;
