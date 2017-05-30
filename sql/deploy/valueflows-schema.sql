-- Deploy vf:valueflows-schema to pg

BEGIN;

CREATE SCHEMA valueflows;
CREATE SCHEMA valueflows_private;

CREATE extension IF NOT exists "uuid-ossp";

COMMIT;
