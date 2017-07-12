-- Verify vf:agent_type on pg

BEGIN;

SELECT plan(1);
SELECT has_type('valueflows', 'agent_type');

ROLLBACK;
