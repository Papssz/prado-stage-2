const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sysdev_recruitment',
});

connection.connect();

connection.end();

// CREATE DATABASE IF NOT EXISTS sysdev_recruitment;
// USE sysdev_recruitment;
// CREATE TABLE IF NOT EXISTS programming_languages (id INT NOT NULL AUTO_INCREMENT, favorite VARCHAR(255), PRIMARY KEY (id));
// INSERT INTO programming_languages (favorites)  VALUES ("JS");