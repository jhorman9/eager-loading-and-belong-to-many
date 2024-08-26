INSERT INTO countries ("name","code", "createdAt", "updatedAt") VALUES
	 ('Alemania','DE', NOW(), NOW()),
	 ('Estados Unidos','US', NOW(), NOW()),
	 ('Japón','JP', NOW(), NOW()),
	 ('China','CN', NOW(), NOW()),
	 ('Francia','FR', NOW(), NOW()),
	 ('Reino Unido','GB', NOW(), NOW()),
	 ('Corea del sur','KR', NOW(), NOW());

INSERT INTO gammas ("type", "createdAt", "updatedAt") VALUES
	 ('Baja', NOW(), NOW()),
	 ('Media', NOW(), NOW()),
	 ('Alta', NOW(), NOW()),
	 ('Deportivo', NOW(), NOW()),
	 ('Todo terreno', NOW(), NOW());

INSERT INTO transmissions ("type", "createdAt", "updatedAt") VALUES
	 ('MT', NOW(), NOW()),
	 ('AT', NOW(), NOW());

INSERT INTO brands ("name","country_id", "createdAt", "updatedAt") VALUES
	 ('Volkswagen',1, NOW(), NOW()),
	 ('Mercedez-Benz',1, NOW(), NOW()),
	 ('Audi',1, NOW(), NOW()),
	 ('Porsche',1, NOW(), NOW());

INSERT INTO autos ("name","year","brand_id", "createdAt", "updatedAt") VALUES
	 ('A6','1994-12-1',3, NOW(), NOW()),
	 ('A7','1994-12-1',3, NOW(), NOW()),
	 ('A8','1994-12-3',1, NOW(), NOW()),
	 ('A9','1994-12-3',1, NOW(), NOW());

INSERT INTO "AutoTransmissions" ("createdAt","updatedAt","autoId","transmissionId") VALUES
	 ('2024-08-15 10:17:24.688-05','2024-08-15 10:17:24.688-05',1,1),
	 ('2024-08-15 11:46:00.612-05','2024-08-15 11:46:00.612-05',2,1),
	 ('2024-08-15 14:34:11.971-05','2024-08-15 14:34:11.971-05',3,1),
	 ('2024-08-15 14:37:29.128-05','2024-08-15 14:37:29.128-05',4,1);

INSERT INTO "AutoGamma" ("createdAt","updatedAt","gammaId","autoId") VALUES
	 ('2024-08-15 10:17:24.691-05','2024-08-15 10:17:24.691-05',1,1),
	 ('2024-08-15 11:46:00.615-05','2024-08-15 11:46:00.615-05',3,2),
	 ('2024-08-15 11:47:47.37-05','2024-08-15 11:47:47.37-05',1,3),
	 ('2024-08-15 14:34:11.978-05','2024-08-15 14:34:11.978-05',1,4);