-- Revert vf:agent from pg

BEGIN;

DROP TABLE valueflows.agent;

COMMIT;
