DROP DATABASE IF EXISTS agriculteur;
CREATE DATABASE agriculteur;
USE agriculteur;

CREATE TABLE Parcelles(
   idParcelle VARCHAR(50),
   nomParcelle VARCHAR(50),
   surface INT,
   coordonnees VARCHAR(50),
   PRIMARY KEY(idParcelle)
);

CREATE TABLE TypesProductions(
   idProduction VARCHAR(50),
   nomProduction VARCHAR(50),
   uniteProduction VARCHAR(50),
   PRIMARY KEY(idProduction)
);

CREATE TABLE Engrais(
   idEngrais VARCHAR(50),
   nomEngrais VARCHAR(50),
   proportionN INT,
   proportionP INT,
   proportionK INT,
   PRIMARY KEY(idEngrais)
);

CREATE TABLE Productions(
   idParcelle VARCHAR(50),
   idProduction VARCHAR(50),
   dateDebut DATE,
   dateFin DATE,
   quantiteProduite INT,
   PRIMARY KEY(idParcelle, idProduction),
   FOREIGN KEY(idParcelle) REFERENCES Parcelles(idParcelle),
   FOREIGN KEY(idProduction) REFERENCES TypesProductions(idProduction)
);

CREATE TABLE Epandages(
   idParcelle VARCHAR(50),
   idEngrais VARCHAR(50),
   quantiteEpandage INT,
   dateEpandage DATETIME,
   PRIMARY KEY(idParcelle, idEngrais),
   FOREIGN KEY(idParcelle) REFERENCES Parcelles(idParcelle),
   FOREIGN KEY(idEngrais) REFERENCES Engrais(idEngrais)
);


INSERT INTO Parcelles (idParcelle, nomParcelle, surface, coordonnees) VALUES
('P001', 'Parcelle A', 100, '45.764043, 4.835659'),
('P002', 'Parcelle B', 150, '48.856613, 2.352222');

INSERT INTO TypesProductions (idProduction, nomProduction, uniteProduction) VALUES
('T001', 'Blé', 'kg'),
('T002', 'Maïs', 'kg');

INSERT INTO Engrais (idEngrais, nomEngrais, proportionN, proportionP, proportionK) VALUES
('E001', 'Engrais A', 10, 5, 5),
('E002', 'Engrais B', 15, 10, 10);

INSERT INTO Productions (idParcelle, idProduction, dateDebut, dateFin, quantiteProduite) VALUES
('P001', 'T001', '2023-01-01', '2023-06-01', 5000),
('P002', 'T002', '2023-02-01', '2023-07-01', 7000);

INSERT INTO Epandages (idParcelle, idEngrais, quantiteEpandage, dateEpandage) VALUES
('P001', 'E001', 100, '2023-03-01 08:00:00'),
('P002', 'E002', 150, '2023-04-01 09:00:00');