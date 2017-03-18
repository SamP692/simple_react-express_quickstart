DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;

\c mydb

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
);

INSERT INTO users(name, email, password, l_id) VALUES ('Phred', 'phred@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri');
INSERT INTO users(name, email, password, l_id) VALUES ('Jones', 'jones@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri');
