-- Revert vf:agent_type from pg

BEGIN;

DROP TYPE valueflows.agent_type;

COMMIT;
