-- Deploy vf:member_of to pg
-- requires: relationship

BEGIN;

 CREATE RECURSIVE VIEW valueflows.member_of (subject_id, object_id, degrees) AS (
     SELECT r.subject_id, r.object_id, 1 AS degrees
       FROM valueflows.relationship AS r
      WHERE r.relationship_type = 1
      UNION ALL
     SELECT r.subject_id, r.object_id, h.degrees + 1
       FROM member_of AS h
       JOIN valueflows.relationship r
         ON r.subject_id = h.object_id
 );

COMMIT;
