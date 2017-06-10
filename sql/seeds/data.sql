BEGIN;

INSERT INTO valueflows.agent (id, first_name, last_name, agent_type) VALUES
    (uuid('86e80ff9-5335-4bbe-a7cf-df0b4629a2b3'),'Sara', 'Powell', 'Person'),
    (uuid('c002f89c-9124-4302-9652-0ec4814cf495'),'Tom', 'Powell', 'Person'),
    (uuid('4ca48c1b-09f5-4ce6-aa37-cebaea24a830'),'Dick', 'Powell', 'Person'),
    (uuid('6664c612-6876-444c-8b85-e830d5a7963b'),'Harry', 'Powell', 'Person'),
    (uuid('ac519398-64f2-4314-9c0a-b47b9e2a3c68'),'Sally', 'Powell', 'Person'),
    (uuid('31a3601c-c0ba-432f-b921-1b0efb879dd2'), 'Tom', 'Hanks', 'Person'),
    (uuid('99646a16-5161-4228-8f92-8c91f456165f'),'Dick', 'Nixon', 'Person'),
    (uuid('63400d04-ebb4-4c6f-8c48-fc209f6c553b'),'Harry', 'Enfield', 'Person');

INSERT INTO valueflows.agent (id, name, agent_type) VALUES
    (uuid('1028f159-df2b-4d40-b12c-9fcebd0f4c3d'), 'ACME', 'Organization'),
    (uuid('9ee4199b-1c44-40b3-b1f1-109415ddb640'), 'B1', 'Organization'),
    (uuid('779e3356-5809-4b65-a1b0-81d0c5afc387'), 'B2', 'Organization'),
    (uuid('e391df77-eb5d-455d-88c6-fb93fe3e0073'), 'B3', 'Organization'),
    (uuid('12bf38db-cf2d-4d9b-8305-840d20d9b60a'), 'C org', 'Organization'),
    (uuid('0b01d056-20d2-4c69-a022-ea08d9c219dd'), 'D group', 'Organization'),
    (uuid('6da961d6-1326-4341-ad9e-e793112a99b6'), 'Evil Corp', 'Organization');

INSERT INTO valueflows.relationship (subject_id, object_id, relationship_type) VALUES
    (uuid('9ee4199b-1c44-40b3-b1f1-109415ddb640'), uuid('1028f159-df2b-4d40-b12c-9fcebd0f4c3d'), 1),
    (uuid('779e3356-5809-4b65-a1b0-81d0c5afc387'), uuid('1028f159-df2b-4d40-b12c-9fcebd0f4c3d'), 1),
    (uuid('0b01d056-20d2-4c69-a022-ea08d9c219dd'), uuid('1028f159-df2b-4d40-b12c-9fcebd0f4c3d'), 1),
    (uuid('31a3601c-c0ba-432f-b921-1b0efb879dd2'), uuid('1028f159-df2b-4d40-b12c-9fcebd0f4c3d'), 1),
    (uuid('63400d04-ebb4-4c6f-8c48-fc209f6c553b'), uuid('9ee4199b-1c44-40b3-b1f1-109415ddb640'), 1),
    (uuid('e391df77-eb5d-455d-88c6-fb93fe3e0073'), uuid('779e3356-5809-4b65-a1b0-81d0c5afc387'), 1),
    (uuid('86e80ff9-5335-4bbe-a7cf-df0b4629a2b3'), uuid('e391df77-eb5d-455d-88c6-fb93fe3e0073'), 1),
    (uuid('86e80ff9-5335-4bbe-a7cf-df0b4629a2b3'), uuid('0b01d056-20d2-4c69-a022-ea08d9c219dd'), 1);


END;
--
  --                       +-------+                                               
  --  -                 |       |\---\                                          
  --                    - ACME  | |   ---\                                      
  --                   /+-------+ \       ----\                                 
  --                 -/    |       |           ---\                             
  --                /      |       \            +---------+                     
  --           +----+      |     +--|--+        |         |                     
  --           |B1  |    Tom     | B2  |        | D Group |                     
  --           |    |    Hanks   |     |        +---------+                     
  --           +----+            +-----+           |                            
  --            /-                   |             |                            
  --          /-                     |             |                            
  --      Harry                   +-----+          |                            
  --      Enfield                 | B3  |          |                            
  --                              |     |          |                           -
  --                              |     |---\      |                            
  --                              +-----+    ---                                
  --                                          Sara Powell                       
  --                                                           

