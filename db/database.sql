CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,   
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
(1, 'Jhon', 1000),
(2, 'Diana', 2000),
(3, 'Andres', 3000),
(4, 'Camilo', 4000)
