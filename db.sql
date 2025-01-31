CREATE DATABASE IF NOT EXISTS service_provider;
USE service_provider;
CREATE TABLE IF NOT EXISTS providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    service VARCHAR(255) NOT NULL
);
DESCRIBE providers;
SELECT * FROM providers;
