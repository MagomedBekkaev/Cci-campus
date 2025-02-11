DROP DATABASE IF EXISTS importsAuto;
CREATE DATABASE importsAuto;
USE importsAuto;

CREATE TABLE Contacts(
   idContact INT AUTO_INCREMENT,
   nom VARCHAR(50),
   prenom VARCHAR(50),
   PRIMARY KEY(idContact)
);

CREATE TABLE Classes(
   idClasse INT AUTO_INCREMENT,
   nomClasse VARCHAR(50),
   annee VARCHAR(50),
   active BOOLEAN,
   idContact INT NOT NULL,
   PRIMARY KEY(idClasse),
   FOREIGN KEY(idContact) REFERENCES Contacts(idContact)
);

CREATE TABLE Membres(
   idContact INT,
   idClasse INT,
   PRIMARY KEY(idContact, idClasse),
   FOREIGN KEY(idContact) REFERENCES Contacts(idContact),
   FOREIGN KEY(idClasse) REFERENCES Classes(idClasse)
);


CREATE TABLE Imports (
    idImport INT(11) NOT NULL AUTO_INCREMENT,
    contactsJson JSON NOT NULL CHECK (JSON_VALID(contactsJson)),
    classesJson JSON NOT NULL CHECK (JSON_VALID(classesJson)),
    membresJson JSON NOT NULL CHECK (JSON_VALID(membresJson)),
    importFini BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (idImport)
);

DELIMITER |
CREATE OR REPLACE TRIGGER importsBeforeInsert BEFORE INSERT
ON Imports FOR EACH ROW
BEGIN
    INSERT INTO Contacts (nom, prenom) VALUES
        (JSON_VALUE(NEW.contactsJson, '$.nom'),
         JSON_VALUE(NEW.contactsJson, '$.prenom'));

    INSERT INTO Classes (nomClasse, annee, active, idContact) VALUES
        (JSON_VALUE(NEW.classesJson, '$.nomClasse'),
         JSON_VALUE(NEW.classesJson, '$.annee'),
         JSON_VALUE(NEW.classesJson, '$.active'),
         (SELECT idContact 
         FROM Contacts 
         WHERE nom = JSON_VALUE(NEW.contactsJson, '$.nom') 
         AND prenom = JSON_VALUE(NEW.contactsJson, '$.prenom')));

    INSERT INTO Membres (idContact, idClasse) VALUES
        ((SELECT idContact 
         FROM Contacts 
         WHERE nom = JSON_VALUE(NEW.contactsJson, '$.nom') 
         AND prenom = JSON_VALUE(NEW.contactsJson, '$.prenom')),
         (SELECT idClasse 
         FROM Classes 
         WHERE nomClasse = JSON_VALUE(NEW.classesJson, '$.nomClasse') 
         AND annee = JSON_VALUE(NEW.classesJson, '$.annee')));
    SET NEW.importFini = TRUE;
END |
DELIMITER ;

INSERT INTO Imports (contactsJson, classesJson, membresJson) VALUES
('{"nomClasse":"Classe 2B",
    "annee":2023,
    "active":true,
    "enseignant":{"prenom":"Richard", "nom":"ROE"},
    "membres":[{"prenom":"Jane","nom":"DOE"},
               {"prenom":"Jinny","nom":"ROE"},
               {"prenom":"Johnny","nom":"ROE"}]}'),
('{"nomClasse":"Classe 2C",
    "annee":2021,
    "active":true,
    "enseignant":{"prenom":"Arthur", "nom":"GRUE"},
    "membres":[{"prenom":"Jane","nom":"GOE"},
               {"prenom":"Annie","nom":"GRUOE"},
               {"prenom":"Albert","nom":"GHIOE"}]}'),
('{"nomClasse":"Classe 2A",
    "annee":2024,
    "active":true,
    "enseignant":{"prenom":"Lion", "nom":"MOUI"},
    "membres":[{"prenom":"Fifi","nom":"MAER"},
               {"prenom":"Junon","nom":"MNOU"},
               {"prenom":"John","nom":"MYEIT"}]}'),
('{"nomClasse":"Classe 1A",
    "annee":2020,
    "active":true,
    "enseignant":{"prenom":"Lulu", "nom":"MOUI"},
    "membres":[{"prenom":"Fifi","nom":"TUTU"},
               {"prenom":"Riri","nom":"TOTO"},
               {"prenom":"John","nom":"MYEIT"}]}'),
('{"nomClasse":"Classe 1B",
    "annee":2021,
    "active":true,
    "enseignant":{"prenom":"Fifi", "nom":"TUTU"},
    "membres":[{"prenom":"Annie","nom":"GRUOE"},
               {"prenom":"Junon","nom":"MNOU"},
               {"prenom":"John","nom":"MYEIT"}]}')