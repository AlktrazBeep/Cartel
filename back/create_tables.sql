----------------------------------------CREACION DE TABLA carteles
--EL ID DEL CARTEL
--EL NOMBRE ES UNICO
-- EL JSON DEL CARTEL CODIFICADO EN BASE 64
--LA FECHA EN LA QUE LO CREO
-- LA ULTIMA FECHA EN LA QUE LO ACTUALIZO
-- SI ESTE SE ENCUENTRA PUBLICADO
CREATE TABLE carteles (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(20) UNIQUE, 
    cartel_encoded TEXT NULL, 
    created_at TIMESTAMP NULL, 
    updated_at TIMESTAMP NULL,
    finalizado TINYINT NULL
);


---------------------------------------INSERT NUEVO CARTEL PARA EL END POINT: nuevo_cartel
INSERT INTO carteles 
(nombre,cartel_encoded,created_at,updated_at,finalizado) VALUES 
('prueba1',NULL,NULL,NULL,NULL);

---------------------------------------

--------------------------------------UPDATE CARTEL PARA EL ENDPOINT update_cartel

UPDATE carteles SET nombre='prueba1', cartel_encoded='',created_at='2023-09-18 7:49:15',updated_at='2023-09-18 7:49:15', finalizado='false' WHERE nombre='prueba1';

-------------------------------------- GET CARTELES PARA EL ENDPOINT  get_carteles

SELECT * FROM carteles;
SELECT * FROM carteles WHERE nombre='prueba1';

-------------------------------------- ELIMINAR CARTEL

DELETE * from carteles WHERE nombre='prueba1';

------------------------------------  ELIMINAR TODO Y PONER INDICE EN 0
TRUNCATE TABLE carteles;