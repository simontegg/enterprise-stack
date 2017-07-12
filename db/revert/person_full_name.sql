-- Revert vf:person_full_name from pg

BEGIN;

DROP FUNCTION valueflows.person_full_name(valueflows.person);

COMMIT;
