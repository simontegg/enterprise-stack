-- Verify vf:person_full_name on pg

BEGIN;

SELECT has_function_privilege('valueflows.person_full_name(valueflows.person)', 'execute');

ROLLBACK;
