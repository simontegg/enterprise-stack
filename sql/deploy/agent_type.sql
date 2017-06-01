-- Deploy vf:agent_type to pg
-- requires: valueflows-schema

BEGIN;

-- agent
CREATE TYPE valueflows.agent_type AS ENUM (
    'Person',
    'Organization'
);

COMMIT;
