
BEGIN;

CREATE SCHEMA valueflows;
CREATE SCHEMA valueflows_private;

CREATE extension IF NOT exists "uuid-ossp";

-- person
CREATE TABLE valueflows.person (
    PRIMARY KEY (id),
    id          UUID          DEFAULT uuid_generate_v1mc()  NOT NULL, 
    first_name  VARCHAR(80)                                 NOT NULL, 
    last_name   VARCHAR(80)                                 NOT NULL,
    img         VARCHAR(200),
    created_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.person is 'A user.';
COMMENT ON COLUMN valueflows.person.id is 'The primary unique identifier for the person.';
COMMENT ON COLUMN valueflows.person.first_name is 'The person’s first name.';
COMMENT ON COLUMN valueflows.person.last_name is 'The person’s last name.';
COMMENT ON COLUMN valueflows.person.img is 'A url for an image representing the person';
COMMENT ON COLUMN valueflows.person.created_at is 'The time this person was created.';
COMMENT ON COLUMN valueflows.person.updated_at is 'The time this person was updated.';

-- organization
CREATE TABLE valueflows.organization (
    PRIMARY KEY (id),
    id              UUID          DEFAULT uuid_generate_v1mc()  NOT NULL, 
    name            TEXT                                        NOT NULL,
    classification  TEXT,      
    img             VARCHAR(200),
    created_at      TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.organization is 'An organization';
COMMENT ON COLUMN valueflows.organization.id is 'The primary unique identifier for the person.';
COMMENT ON COLUMN valueflows.organization.name is 'The name of the organization';
COMMENT ON COLUMN valueflows.organization.classification is 'The kind of organization';
COMMENT ON COLUMN valueflows.organization.img is 'A url for an image representing the organization';
COMMENT ON COLUMN valueflows.organization.created_at is 'The time this organization was created.';
COMMENT ON COLUMN valueflows.organization.updated_at is 'The time this organization was updated.';

-- memberships
CREATE TABLE valueflows.membership (
    PRIMARY KEY (person_id, organization_id),
    person_id       UUID                                    NOT NULL,
                    CONSTRAINT person_id_fkey FOREIGN KEY (person_id)
                        REFERENCES valueflows.person (id) MATCH SIMPLE
                        ON DELETE CASCADE ON UPDATE CASCADE,
    organization_id UUID                                    NOT NULL,
                    CONSTRAINT organization_id_fkey FOREIGN KEY (organization_id)
                        REFERENCES valueflows.person (id) MATCH SIMPLE
                        ON DELETE CASCADE ON UPDATE CASCADE,
    is_admin        BOOLEAN   DEFAULT FALSE                 NOT NULL,
    created_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.membership is 'A relationship indicating that a person is a member of an organization';
COMMENT ON COLUMN valueflows.membership.person_id is 'A uuid referencing the person who is a member';
COMMENT ON COLUMN valueflows.membership.person_id is 'A uuid referencing the organisation of which the person is a member';
COMMENT ON COLUMN valueflows.membership.created_at is 'The time this relationship was created.';
COMMENT ON COLUMN valueflows.membership.updated_at is 'The time this relationship was updated.';

-- closure list / bridge table
-- allows a sub-organization to have multiple independent parents?
-- nested hierarchical relationships between organizations
CREATE TABLE valueflows.organization_relationship (
    PRIMARY KEY (subject_id, object_id, classification),
    classification  VARCHAR(256)  NOT NULL,
    subject_id      UUID          NOT NULL,
                    CONSTRAINT subject_id_fkey FOREIGN KEY (subject_id)
                         REFERENCES valueflows.organization (id) MATCH SIMPLE
                         ON DELETE CASCADE ON UPDATE CASCADE,
    object_id       UUID          NOT NULL,
                    CONSTRAINT object_id_fkey FOREIGN KEY (object_id)
                        REFERENCES valueflows.organization (id) MATCH SIMPLE
                        ON DELETE CASCADE ON UPDATE CASCADE,
    depth           INT           NOT NULL,
    created_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.organization_relationship IS 'A relationship indicating that a person is a member of an organization';
COMMENT ON COLUMN valueflows.organization_relationship.subject_id IS 'A uuid that references an organization to which the descendant belongs.';
COMMENT ON COLUMN valueflows.organization_relationship.object_id IS 'A uuid that references the sub-organization.';
COMMENT ON COLUMN valueflows.organization_relationship.classification IS 'The type of relationship.';
COMMENT ON COLUMN valueflows.organization_relationship.depth IS 'The number of relationships between ancestor and its descendant';
COMMENT ON COLUMN valueflows.organization_relationship.created_at IS 'The time this relationship was created.';
COMMENT ON COLUMN valueflows.organization_relationship.updated_at IS 'The time this relationship was updated.';

-- functions

CREATE FUNCTION valueflows.create_relationship (
  _subject_id UUID, 
  _object_id UUID, 
  _classification VARCHAR(256)
) RETURNS VOID AS $$
    INSERT INTO valueflows.organization_relationship (subject_id, object_id, depth, classification)
    VALUES (_subject_id, _object_id, 0, _classification);
    INSERT INTO valueflows.organization_relationship (subject_id, object_id, depth, classification)
    SELECT s.subject_id, o.object_id, s.depth + o.depth + 1, s.classification
    FROM valueflows.organization_relationship o, valueflows.organization_relationship s
    WHERE s.object_id = _object_id 
      AND o.subject_id = _subject_id 
      AND o.classification = _classification 
      AND s.classification = _classification
$$ LANGUAGE SQL;

-- private
CREATE TABLE valueflows_private.person_account (
    PRIMARY KEY (id),
    id              UUID,
                    CONSTRAINT id_fkey FOREIGN KEY (id)
                        REFERENCES valueflows.person (id) MATCH SIMPLE
                        ON DELETE CASCADE ON UPDATE CASCADE,
    email           VARCHAR(256),
                    CONSTRAINT email_unique UNIQUE (email),
    email_confirmed BOOLEAN   DEFAULT FALSE NOT NULL,
    created_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

END;



