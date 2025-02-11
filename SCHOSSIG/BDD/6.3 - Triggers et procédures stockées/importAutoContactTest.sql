-- --------------------------------------------------------------------------------------
-- Base de données : contacts
--
DROP DATABASE
    IF EXISTS contacts;
CREATE DATABASE contacts
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;
USE contacts;
--
-- --------------------------------------------------------------------------------------
-- Structure de la table Contacts
--
CREATE TABLE Contacts (
    idContact INT(11) NOT NULL AUTO_INCREMENT,
    nomContact VARCHAR(30) DEFAULT '',
    prenomContact VARCHAR(30) DEFAULT '',
    PRIMARY KEY (idContact)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--
-- --------------------------------------------------------------------------------------
-- Structure de la table Imports
--
CREATE TABLE Imports (
    idImport INT(11) NOT NULL AUTO_INCREMENT,
    contactJson JSON NOT NULL CHECK (JSON_VALID(contactJson)),
    importFini BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (idImport)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--

DELIMITER |
CREATE OR REPLACE TRIGGER importsBeforeInsert BEFORE INSERT
ON Imports FOR EACH ROW
BEGIN
    INSERT INTO Contacts (nomContact, prenomContact) VALUES
        (JSON_VALUE(NEW.contactJson, '$.firstName'),
         JSON_VALUE(NEW.contactJson, '$.lastName'));
    SET NEW.importFini = TRUE;
END |
DELIMITER ;

INSERT INTO Imports (contactJson) VALUES
    ('{"firstName":"Tom","lastName":"JACKSON"}'),
    ('{"firstName":"Ben","lastName":"BENSON"}'),
    ('{"firstName":"Tim","lastName":"RUBSAN"}');