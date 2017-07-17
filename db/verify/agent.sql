-- Verify vf:person on pg

BEGIN;

SELECT first_name, last_name, name
  FROM valueflows.agent
 WHERE FALSE;

SELECT plan(1);
SELECT has_type('valueflows', 'agent_type');

ROLLBACK;
