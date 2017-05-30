-- Revert vf:has_member from pg

BEGIN;

DROP VIEW valueflows.has_member;

COMMIT;
