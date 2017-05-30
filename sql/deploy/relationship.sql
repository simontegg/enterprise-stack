-- Deploy vf:relationship to pg
-- requires: agent

BEGIN;

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

COMMIT;
