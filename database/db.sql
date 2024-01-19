CREATE DATABASE LogroB;

use LogroB;

CREATE TABLE categorias{
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
}

CREATE TABLE productos{
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fechaVencimiento DATE NOT NULL,
    precio INT,
    total INT NULL,
    fechaCompra DATE NULL,
    stock INT NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
}

SHOW TABLES;

  


