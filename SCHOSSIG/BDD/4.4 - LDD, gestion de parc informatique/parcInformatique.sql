DROP DATABASE IF EXISTS parcInformatique;
CREATE DATABASE parcInformatique;
USE parcInformatique;

CREATE TABLE Services (
    idService INT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(255),
    idResponsable INT
);

CREATE TABLE Utilisateurs (
    idUtilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    fonction VARCHAR(255),
    salaire DECIMAL(10, 2),
    idService INT,
    FOREIGN KEY (idService) REFERENCES Services(idService)
);

CREATE TABLE Logiciels (
    idLogiciel INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255),
    version VARCHAR(50)
);

CREATE TABLE Equipements (
    idEquipement INT PRIMARY KEY AUTO_INCREMENT,
    marque VARCHAR(255),
    modele VARCHAR(255),
    nomHote VARCHAR(255),
    description TEXT,
    idAffectation INT,
    FOREIGN KEY (idAffectation) REFERENCES Utilisateurs(idUtilisateur)
);

CREATE TABLE Installations (
    idEquipement INT,
    idLogiciel INT,
    clefProduit VARCHAR(255),
    PRIMARY KEY (idEquipement, idLogiciel),
    FOREIGN KEY (idEquipement) REFERENCES Equipements(idEquipement),
    FOREIGN KEY (idLogiciel) REFERENCES Logiciels(idLogiciel)
);

INSERT INTO Services (idService, libelle, idResponsable) VALUES
(1, 'Comptabilité', 3),
(2, 'R&D', 6),
(3, 'Informatique', 5),
(4, 'Marketing', 7),
(5, 'RH', 8);

INSERT INTO Utilisateurs (idUtilisateur, nom, prenom, fonction, salaire, idService) VALUES
(1, 'SIMON', 'Paul', 'Adjoint', 1600.00, 1),
(2, 'DURAND', 'Marie', 'Secrétaire', 1500.00, 1),
(3, 'DUPOND', 'Gérard', 'Chef', 2200.00, 1),
(4, 'MARTIN', 'Luc', 'Technicien', 1800.00, 2),
(5, 'BLANC', 'Alexandre', 'Technicien', 2000.00, 2),
(6, 'MARTIN', 'Robert', 'Chef', 2700.00, 2),
(7, 'LEGRAND', 'Sophie', 'Manager', 2500.00, 3),
(8, 'PETIT', 'Julie', 'RH', 2400.00, 4);

INSERT INTO Logiciels (idLogiciel, designation, version) VALUES
(1, 'Windows Seven', 'W7 64 bits'),
(2, 'Pack Office', 'Office 2007'),
(3, 'Windows XP', 'SP3 32 bits'),
(4, 'Windows Seven', 'W7 32 bits');

INSERT INTO Equipements (idEquipement, marque, modele, nomHote, description, idAffectation) VALUES
(1, 'DELL', 'Optiplex 740', 'Compta-01', '2 Go RAM + 540 Go DD', 1),
(2, 'EPSON', 'Stylus 260', 'Compta-imp-01', 'Laser couleur', 1),
(3, 'DELL', 'Optiplex 680', 'Compta-02', '4 Go RAM + 540 Go DD', 1),
(4, 'DELL', 'Optiplex 680', 'Compta-02', '4 Go RAM + 540 Go DD', 1),
(5, 'DELL', 'Optiplex 680', 'RD-01', '6 Go RAM + 1 To DD', 5),
(6, 'DELL', 'Optiplex 740', 'RD-02', '2 Go RAM + 540 Go DD', 5),
(7, 'HPL', 'Deskjet 650', 'RD-imp-02', "Jet d'encre N&B", 5),
(8, 'DELL', 'Optiplex 740', 'RD-02', '2 Go RAM + 540 Go DD', 5);

INSERT INTO Installations (idEquipement, idLogiciel, clefProduit) VALUES
(1, 1, 'RTEYU-HFGJH-SRDRQ-PLKHG'),
(2, 1, 'SRDRG-HFGJH-SRDRQ-PLKHG'),
(3, 2, 'SRDRG-HFGJH-DESQI-PLHHG'),
(4, 3, 'SHUZD-SLUGT-SARGT-TYUAS'),
(5, 4, 'QPOBD-TDGBS-IUAZG-GSBUQ'),
(6, 2, 'SRDRQ-HFGJH-DESQI-PLKHG');

ALTER TABLE Services
ADD CONSTRAINT fk_responsable FOREIGN KEY (idResponsable) REFERENCES Utilisateurs(idUtilisateur);