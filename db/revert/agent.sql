-- Revert vf:agent from pg

BEGIN;

DROP VIEW valueflows.person;
DROP VIEW valueflows.organization;
DROP TABLE valueflows.agent;

COMMIT;
