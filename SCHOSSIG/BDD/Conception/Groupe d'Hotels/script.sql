DROP DATABASE IF EXISTS groupeHotels;
CREATE DATABASE groupeHotels;
USE groupeHotels;

CREATE TABLE Clients(
   idClient VARCHAR(50),
   numTel VARCHAR(50),
   nom VARCHAR(50),
   prenom VARCHAR(50),
   adresse VARCHAR(50),
   codePostal VARCHAR(50),
   ville VARCHAR(50),
   PRIMARY KEY(idClient)
);

CREATE TABLE Societes(
   numSiret VARCHAR(50),
   nomSociete VARCHAR(50),
   adresseSociete VARCHAR(50),
   numSiret_1 VARCHAR(50),
   PRIMARY KEY(numSiret),
   FOREIGN KEY(numSiret_1) REFERENCES Societes(numSiret)
);

CREATE TABLE reservation(
   idReservation VARCHAR(50),
   dateReservation VARCHAR(50),
   idClient VARCHAR(50) NOT NULL,
   PRIMARY KEY(idReservation),
   FOREIGN KEY(idClient) REFERENCES Clients(idClient)
);

CREATE TABLE Hotels(
   idHotel VARCHAR(50),
   nomHotel VARCHAR(50),
   adresseHotel VARCHAR(50),
   villeHotel VARCHAR(50),
   categorie VARCHAR(50),
   nbreEtoile VARCHAR(50),
   numSiret VARCHAR(50) NOT NULL,
   PRIMARY KEY(idHotel),
   FOREIGN KEY(numSiret) REFERENCES Societes(numSiret)
);

CREATE TABLE Chambres(
   idChambre VARCHAR(50),
   numChambre VARCHAR(50),
   nbreLitSimple VARCHAR(50),
   nbreLitDouble VARCHAR(50),
   idHotel VARCHAR(50) NOT NULL,
   PRIMARY KEY(idChambre),
   FOREIGN KEY(idHotel) REFERENCES Hotels(idHotel)
);

CREATE TABLE regroupe(
   idChambre VARCHAR(50),
   idReservation VARCHAR(50),
   dateDebut VARCHAR(50),
   dateFin VARCHAR(50),
   PRIMARY KEY(idChambre, idReservation),
   FOREIGN KEY(idChambre) REFERENCES Chambres(idChambre),
   FOREIGN KEY(idReservation) REFERENCES reservation(idReservation)
);

INSERT INTO Clients (idClient, numTel, nom, prenom, adresse, codePostal, ville) VALUES
('C001', '0123456789', 'Dupont', 'Jean', '123 Rue de Paris', '75001', 'Paris'),
('C002', '0987654321', 'Martin', 'Marie', '456 Avenue de Lyon', '69001', 'Lyon');

INSERT INTO Societes (numSiret, nomSociete, adresseSociete, numSiret_1) VALUES
('S001', 'HotelGroup', '789 Boulevard de Nice', NULL),
('S002', 'LuxuryStays', '321 Rue de Marseille', 'S001');

INSERT INTO reservation (idReservation, dateReservation, idClient) VALUES
('R001', '2023-10-01', 'C001'),
('R002', '2023-10-02', 'C002');

INSERT INTO Hotels (idHotel, nomHotel, adresseHotel, villeHotel, categorie, nbreEtoile, numSiret) VALUES
('H001', 'Hotel Paris', '123 Rue de Paris', 'Paris', 'Business', '4', 'S001'),
('H002', 'Hotel Lyon', '456 Avenue de Lyon', 'Lyon', 'Luxury', '5', 'S002');

INSERT INTO Chambres (idChambre, numChambre, nbreLitSimple, nbreLitDouble, idHotel) VALUES
('CH001', '101', '1', '1', 'H001'),
('CH002', '102', '2', '0', 'H002');

INSERT INTO regroupe (idChambre, idReservation, dateDebut, dateFin) VALUES
('CH001', 'R001', '2023-10-05', '2023-10-10'),
('CH002', 'R002', '2023-10-06', '2023-10-12');