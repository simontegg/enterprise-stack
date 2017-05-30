-- Deploy vf:relationship_type to pg
-- requires: valueflows-schema

BEGIN;

CREATE TABLE valueflows.relationship_type (
    PRIMARY KEY (id)
    id          INT           NOT NULL,
                CONSTRAINT id_unique UNIQUE (id),
    name        VARCHAR(256)  NOT NULL,
    description TEXT          NOT NULL,
    created_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT timezone('utc'::text, now())
);

INSERT INTO valueflows.relationship_type (id, name, description) VALUES
    (1, 'MemberOf', 'a relationship between an agent and a group to which it belongs'),
    (2, 'AdminOf', 'a relationship indicating a person has adminstrative powers in a group');

COMMIT;
