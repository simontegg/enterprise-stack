BEGIN;

INSERT INTO valueflows.agent (first_name, last_name, agent_type) VALUES
  ('Sara', 'Powell', 'Person'),
  ('Tom', 'Powell', 'Person'),
  ('Dick', 'Powell', 'Person'),
  ('Harry', 'Powell', 'Person'),
  ('Sally', 'Powell', 'Person'),
  ('Tom', 'Hanks', 'Person'),
  ('Dick', 'Nixon', 'Person'),
  ('Harry', 'Enfield', 'Person');

INSERT INTO valueflows.agent (name, agent_type) VALUES
  ('ACME', 'Organization'),
  ('B1', 'Organization'),
  ('B2', 'Organization'),
  ('B3', 'Organization'),
  ('C org', 'Organization'),
  ('D group', 'Organization'),
  ('Evil Corp', 'Organization');

CREATE FUNCTION valueflows.get_ids (
  IN subject_name VARCHAR, 
  IN object_name VARCHAR,
  OUT subject_id UUID,
  OUT object_id UUID,
  OUT relationship_type VARCHAR
) AS $$
  BEGIN
    SELECT id INTO subject_id FROM valueflows.agent a WHERE a.name = subject_name;
    SELECT id INTO object_id FROM valueflows.agent a WHERE a.name = object_name;
    SELECT 'HasMember' INTO relationship_type;
  END
$$ LANGUAGE plpgsql;

INSERT INTO valueflows.relationship (subject_id, object_id, relationship_type) SELECT * FROM get_ids('B1', 'B2');
INSERT INTO valueflows.relationship (subject_id, object_id, relationship_type) SELECT * FROM get_ids('B2', 'B3');

END;
