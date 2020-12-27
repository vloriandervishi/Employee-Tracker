DROP database if exists employee-tracker;
create database employee-tracker;
use employee-tracker; 

CREATE TABLE department (
  id INT PRIMARY KEY auto_increment,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL

);

CREATE TABLE employee (
    id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
);
