-- Deploy vf:has_member to pg
-- requires: relationship

BEGIN;
-- http://schinckel.net/2014/09/13/long-live-adjacency-lists/
 CREATE RECURSIVE VIEW valueflows.has_member (subject_id, object_id, degrees) AS (
     SELECT r.object_id, r.subject_id, 1 AS degrees
       FROM valueflows.relationship AS r
      WHERE r.relationship_type = 1
      UNION ALL
     SELECT r.object_id, r.subject_id, h.degrees + 1
       FROM has_member AS h
       JOIN valueflows.relationship r
         ON r.object_id = h.subject_id
 );

COMMIT;
