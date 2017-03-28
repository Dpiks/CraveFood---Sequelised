CREATE DATABASE CraveFood;
USE CraveFood;

CREATE TABLE Food_List 
(
id int NOT NULL AUTO_INCREMENT,
dish_name varchar(255) NOT NULL,
devoured BOOLEAN,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);
