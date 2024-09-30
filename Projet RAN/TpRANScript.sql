DROP DATABASE IF EXISTS tpRAN;
CREATE DATABASE tpRAN;
USE tpRAN;

CREATE TABLE Adherents(
   numAdherent INT NOT NULL AUTO_INCREMENT,
   nom VARCHAR(50) NOT NULL,
   rue VARCHAR(50) NOT NULL,
   ville VARCHAR(50) NOT NULL,
   codePostal VARCHAR(5) NOT NULL,
   dateNaissance DATE,
   PRIMARY KEY(numAdherent)
);

CREATE TABLE Activites(
   numActivite INT NOT NULL AUTO_INCREMENT,
   nomActivite VARCHAR(150) NOT NULL,
   coutUnitaire DECIMAL(15,2) NOT NULL,
   prixUnitaire DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(numActivite)
);

CREATE TABLE Seances(
   numSeance INT NOT NULL AUTO_INCREMENT,
   dateDebut DATE NOT NULL,
   heureDebut TIME NOT NULL,
   numActivite INT NOT NULL,
   PRIMARY KEY(numSeance),
   FOREIGN KEY(numActivite) REFERENCES Activites(numActivite)
);

CREATE TABLE Participe(
   numAdherent INT,
   numSeance INT,
   noteAppreciation VARCHAR(150),
   PRIMARY KEY(numAdherent, numSeance),
   FOREIGN KEY(numAdherent) REFERENCES Adherents(numAdherent),
   FOREIGN KEY(numSeance) REFERENCES Seances(numSeance)
);

