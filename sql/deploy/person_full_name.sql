-- Deploy vf:person_full_name to pg
-- requires: agent

BEGIN;

CREATE FUNCTION valueflows.person_full_name (person valueflows.person) RETURNS TEXT AS $$
  SELECT person.first_name || ' ' || person.last_name
$$ LANGUAGE SQL STABLE;

COMMENT ON FUNCTION valueflows.person_full_name(valueflows.person) IS 'A person’s full name which is a concatenation of their first and last name.';

COMMIT;
