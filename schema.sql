
BEGIN;

CREATE SCHEMA valueflows;
CREATE SCHEMA valueflows_private;

CREATE extension IF NOT exists "uuid-ossp";

-- agent
CREATE TYPE valueflows.agent_type AS ENUM (
    'Person',
    'Organization'
);

CREATE TABLE valueflows.agent (
    PRIMARY KEY (id),
    id              UUID          DEFAULT uuid_generate_v1mc()  NOT NULL, 
    agent_type      valueflows.agent_type                       NOT NULL,
    classification  VARCHAR(80),
    img             VARCHAR(200),
    name            VARCHAR(80),
    first_name      VARCHAR(80), 
    last_name       VARCHAR(80),
    created_at      TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP     WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.agent is 'A person or organisation';
COMMENT ON COLUMN valueflows.agent.id is 'The primary unique identifier for the agent.';
COMMENT ON COLUMN valueflows.agent.img is 'A url for an image representing the agent';
COMMENT ON COLUMN valueflows.agent.name is 'The name of the ';
COMMENT ON COLUMN valueflows.agent.classification is 'The kind of ';
COMMENT ON COLUMN valueflows.agent.first_name is 'The person’s first name.';
COMMENT ON COLUMN valueflows.agent.last_name is 'The person’s last name.';
COMMENT ON COLUMN valueflows.agent.created_at is 'The time this agent was created.';
COMMENT ON COLUMN valueflows.agent.updated_at is 'The time this agent was updated.';

-- person
CREATE VIEW valueflows.person AS
    SELECT id, img, first_name, last_name, created_at, updated_at
      FROM valueflows.agent AS a
     WHERE a.agent_type = 'Person';

-- organization
CREATE VIEW valueflows.organization AS
    SELECT id, img, name, classification, created_at, updated_at
      FROM valueflows.agent AS a
     WHERE a.agent_type = 'Organization';

CREATE TABLE valueflows.relationship (
    PRIMARY KEY (subject_id, object_id, relationship_type),
    relationship_type   VARCHAR(256)  NOT NULL,
    subject_id          UUID          NOT NULL,
                        CONSTRAINT subject_id_fkey FOREIGN KEY (subject_id)
                             REFERENCES valueflows.agent (id) MATCH SIMPLE
                             ON DELETE CASCADE ON UPDATE CASCADE,
    object_id           UUID          NOT NULL,
                        CONSTRAINT object_id_fkey FOREIGN KEY (object_id)
                            REFERENCES valueflows.agent (id) MATCH SIMPLE
                            ON DELETE CASCADE ON UPDATE CASCADE,
    created_at          TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at          TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE valueflows.relationship IS 'A relationship between two agents';
COMMENT ON COLUMN valueflows.relationship.subject_id IS 'A uuid that refernces the subject (agent) of the relationship' ;
COMMENT ON COLUMN valueflows.relationship.object_id IS 'A uuid that references the object (agent) of the relationship';
COMMENT ON COLUMN valueflows.relationship.relationship_type IS 'The type of relationship.';
COMMENT ON COLUMN valueflows.relationship.created_at IS 'The time this relationship was created.';
COMMENT ON COLUMN valueflows.relationship.updated_at IS 'The time this relationship was updated.';

-- views
-- http://schinckel.net/2014/09/13/long-live-adjacency-lists/
 CREATE RECURSIVE VIEW valueflows.has_member (subject_id, object_id, degrees) AS (
     SELECT r.object_id, r.subject_id, 1 AS degrees
       FROM valueflows.relationship AS r
      WHERE r.relationship_type = 'MemberOf'
      UNION ALL
     SELECT r.object_id, r.subject_id, h.degrees + 1
       FROM has_member AS h
       JOIN valueflows.relationship r
         ON r.object_id = h.subject_id
 );
 
 CREATE RECURSIVE VIEW valueflows.member_of (subject_id, object_id, degrees) AS (
     SELECT r.subject_id, r.object_id, 1 AS degrees
       FROM valueflows.relationship AS r
      WHERE r.relationship_type = 'MemberOf'
      UNION ALL
     SELECT r.subject_id, r.object_id, h.degrees + 1
       FROM has_member AS h
       JOIN valueflows.relationship r
         ON r.subject_id = h.object_id
 );

-- TODO: functions
-- getMembersByDepthAndAgentType
-- getPeopleWhoAreMemberOf
-- getOrganizationsThatAreMemberOf
-- getSiblingOrganizations
CREATE FUNCTION valueflows.get_members (org_id UUID) RETURNS SETOF valueflows.has_member AS $$
    SELECT * FROM valueflows.has_member
$$ LANGUAGE SQL STABLE;


-- private
CREATE TABLE valueflows_private.person_account (
    PRIMARY KEY (id),
    id              UUID,
                    CONSTRAINT id_fkey FOREIGN KEY (id)
                        REFERENCES valueflows.agent (id) MATCH SIMPLE
                        ON DELETE CASCADE ON UPDATE CASCADE,
    email           VARCHAR(256),
                    CONSTRAINT email_unique UNIQUE (email),
    email_confirmed BOOLEAN   DEFAULT FALSE NOT NULL,
    created_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

END;
