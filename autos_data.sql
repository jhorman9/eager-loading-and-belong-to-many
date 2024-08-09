INSERT INTO countries (name, code)
VALUES
    ('Alemania', 'DE'),
    ('Estados Unidos', 'US'),
    ('Japón', 'JP'),
    ('China', 'CN'),
    ('Francia', 'FR'),
    ('Reino Unido', 'GB'),
    ('Corea del sur', 'KR');

INSERT INTO transmissions (type) VALUES ('MT'), ('AT');

INSERT INTO gammas VALUES (1, 'Baja'), (2, 'Media'), (3, 'Alta'), (4, 'Deportivo'), (5, 'Todo terreno');

INSERT INTO brands (name, country_id) VALUES ('Volkswagen', 1), ('Mercedez-Benz', 1), ('Audi', 1), ('Porsche', 1);

INSERT INTO autos (name, year, brand_id) VALUES ('A4', '1994-12-1', 3);

INSERT INTO "AutoTransmissions" ("createdAt", "updatedAt", "transmissionId", "autoId") VALUES ('2023-09-07','2023-09-07', 2, 1);

INSERT INTO "AutoGammas" ("createdAt", "updatedAt", "autoId", "gammaId") VALUES ('2023-09-07', '2023-09-07', 1, 4);