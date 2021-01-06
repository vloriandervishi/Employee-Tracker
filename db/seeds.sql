use emp_tracker_db;


INSERT INTO department (id, name)
VALUES (1, "Software Engineering");

INSERT INTO department (id, name)
VALUES (2, "Quality Assurance");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "IT");
INSERT INTO department (id,name) VALUES (5,"Costumer Service ");
INSERT INTO department (id,name) VALUES (6,"Accounting ");
INSERT INTO department (id,name) VALUES (7,"Public Relations");
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Engineer", 42000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Assistant Software Architect ", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, " Software Architect", 75000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Director Of Technology", 165000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Business Partner", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 100000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "System Adminstrator", 80000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "IT Coordinator", 52000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Manager", 105000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Charbelle", "Chaz", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Sofi", "Hernan", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Char", "Dant", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Jonathan", "Uong", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Melissa", "Arm", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alla", "Arous", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Rosie", "Cole", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Lianne", "Soon", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Zach", "Soar", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Martin", "Cast", 8, 10);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (11,"Murphy","Rivers",3,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (12,"Tamekah","Mcdaniel",3,7);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (13,"Thor","Chase",10,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (14,"Lucian","Zimmerman",6,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (15,"Iola","Marks",7,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (16,"Clarke","Hyde",8,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (17,"Ramona","Pennington",3,6);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (18,"Autumn","Meyers",3,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (19,"Nero","Knowles",6,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (20,"Evelyn","Johnston",6,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (21,"Amir","Poole",1,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (22,"Stephanie","Benson",8,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (23,"Burton","Holmes",6,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (24,"Kaitlin","Michael",9,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (25,"Whilemina","Talley",6,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (26,"Rooney","Holman",10,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (27,"Melyssa","Sexton",9,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (28,"Stacy","Molina",5,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (29,"Kiayada","Mercer",5,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (30,"Isabella","Bates",2,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (31,"Martena","Higgins",6,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (32,"Kermit","Carpenter",4,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (33,"Chelsea","Marks",4,7);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (34,"Kevyn","Santana",4,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (35,"Indigo","Dudley",10,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (36,"Rhonda","Goodman",5,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (37,"Keegan","Petersen",2,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (38,"Xandra","Rivera",6,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (39,"Yardley","Acosta",6,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (40,"Hamilton","Miller",4,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (41,"Thaddeus","Mullen",1,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (42,"Zeph","Montgomery",9,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (43,"Lawrence","Crawford",4,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (44,"Leslie","Mitchell",9,NULL);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (45,"Kendall","Neal",8,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (46,"Julie","Castillo",4,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (47,"Maggie","Case",1,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (48,"Sloane","Reese",5,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (49,"Madeline","Woodward",4,5);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (50,"Elaine","Clark",4,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (51,"Lev","David",4,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (52,"Melyssa","Goodwin",3,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (53,"Simon","Leach",7,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (54,"Cameran","House",1,7);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (55,"Laith","Larson",2,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (56,"Myra","Mays",7,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (57,"Jacob","Daniels",4,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (58,"Olga","Mcfadden",2,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (59,"Dustin","Pierce",8,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (60,"Erich","Carter",10,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (61,"Ivana","Cole",7,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (62,"Alvin","Kent",7,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (63,"Kelsey","Gallagher",3,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (64,"Carla","Flores",8,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (65,"Ronan","Dominguez",10,7);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (66,"Yuri","Butler",10,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (67,"Astra","Leon",10,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (68,"Calvin","Larsen",1,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (69,"Jane","Huff",9,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (70,"Madeson","Bond",4,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (71,"Patricia","Mann",4,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (72,"Melyssa","Stevenson",2,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (73,"Renee","Thompson",5,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (74,"Ginger","Clarke",4,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (75,"Lila","Rollins",3,6);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (76,"Jacob","Kent",1,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (77,"Mikayla","Higgins",2,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (78,"Sophia","Knight",6,5);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (79,"Belle","Craft",2,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (80,"Gary","Green",8,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (81,"Sawyer","Mejia",3,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (82,"Kameko","Hensley",9,0);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (83,"Prescott","Bauer",8,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (84,"Kiona","Anderson",5,7);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (85,"Travis","Phillips",8,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (86,"Irene","Chase",8,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (87,"Ruth","Hyde",5,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (88,"Melodie","Mack",8,NULL);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (89,"Quemby","Higgins",9,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (90,"Jakeem","Herrera",6,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (91,"MacKensie","Jefferson",5,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (92,"Ryan","Blanchard",6,NULL);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (93,"Harrison","Lowe",7,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (94,"Pearl","Haynes",4,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (95,"Perry","Duffy",9,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (96,"Hayfa","Hartman",1,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (97,"Arthur","Mcpherson",6,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (98,"Amir","Garza",2,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (99,"Jin","Dejesus",7,4);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES (100,"Britanni","Leon",1,4);
