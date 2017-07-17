-- Revert vf:agent from pg

BEGIN;

DROP VIEW valueflows.person;
DROP VIEW valueflows.organization;
DROP TABLE valueflows.agent;
DROP TYPE valueflows.agent_type;

COMMIT;
