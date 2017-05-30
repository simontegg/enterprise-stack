-- Revert vf:agent from pg

BEGIN;

DROP TABLE valueflows.agent;
DROP VIEW valueflows.person;
DROP VIEW valueflows.organization;

COMMIT;
