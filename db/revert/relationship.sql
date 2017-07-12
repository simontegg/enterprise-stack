-- Revert vf:relationship from pg

BEGIN;

DROP TABLE valueflows.relationship;

COMMIT;
