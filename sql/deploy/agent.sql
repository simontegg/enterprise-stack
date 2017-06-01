-- Deploy vf:person to pg
-- requires: valueflows-schema

BEGIN;

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


COMMIT;
