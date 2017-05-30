-- Revert vf:valueflows-schema from pg

BEGIN;

DROP SCHEMA valueflows;
DROP SCHEMA valueflows_private;


COMMIT;
