-- Revert vf:member_of from pg

BEGIN;

DROP VIEW valueflows.member_of;

COMMIT;
