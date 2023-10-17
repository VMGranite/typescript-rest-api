CREATE TABLE customer (
    id SERIAL,
    company VARCHAR NULL,
    country VARCHAR NULL,
    CONSTRAINT customer_pkey PRIMARY KEY(id)
);

INSERT INTO customer (id, company, country) VALUES (1, 'Funke', 'Germany');
INSERT INTO customer (id, company, country) VALUES (2, 'Mosolf', 'England');
INSERT INTO customer (id, company, country) VALUES (3, 'Nippon Express', 'America');
INSERT INTO customer (id, company, country) VALUES (4, null, 'France');
INSERT INTO customer (id, company, country) VALUES (5, 'OM3', 'Austria');


