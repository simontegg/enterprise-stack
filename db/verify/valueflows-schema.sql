-- Verify vf:valueflows-schema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('valueflows', 'usage');
SELECT pg_catalog.has_schema_privilege('valueflows_private', 'usage');

ROLLBACK;
