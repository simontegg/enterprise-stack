-- Deploy vf:valueflows-schema to pg

BEGIN;

CREATE SCHEMA valueflows;
CREATE SCHEMA valueflows_private;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE EXTENSION IF NOT EXISTS pgtap;

COMMIT;
