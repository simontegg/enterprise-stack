-- Verify vf:person on pg

BEGIN;

SELECT first_name, last_name, name
  FROM valueflows.agent
 WHERE FALSE;

ROLLBACK;
