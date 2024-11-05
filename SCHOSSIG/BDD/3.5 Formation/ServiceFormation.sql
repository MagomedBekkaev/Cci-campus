SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET AUTOCOMMIT = 0;
START TRANSACTION;
-- ---------------------------------------------------------------------------------------
DROP DATABASE
    IF EXISTS serviceFormation;
CREATE DATABASE serviceFormation
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;
USE serviceFormation;
--
-- Base de données : serviceFormation
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Actions
--
CREATE TABLE Actions (
    codeAction INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeActivite INT(11) NOT NULL,
    intitule VARCHAR(20) NOT NULL,
    cout FLOAT NOT NULL,
    duree FLOAT NOT NULL,
    dateCreation DATE NOT NULL,
    KEY (codeActivite)
) ENGINE=InnoDB;
--
-- Contenu de la table Actions
--
INSERT INTO Actions (codeAction, codeActivite, intitule, cout, duree, dateCreation) VALUES
    (1, 4, 'Action 1', 1000, 2, '2015-02-12'),
    (2, 3, 'Action 2', 2000, 4, '2016-06-25'),
    (3, 5, 'Action 3', 500, 1, '2016-10-09'),
    (4, 1, 'Action 4', 600, 2, '2016-07-19'),
    (5, 3, 'Action 5', 1700, 3, '2016-10-23'),
    (6, 2, 'Action 6', 2600, 4, '2015-11-30'),
    (7, 1, 'Action 7', 3500, 6, '2015-10-13');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Activites
--
CREATE TABLE Activites (
    codeActivite INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(20) NOT NULL
) ENGINE=InnoDB;
--
-- Contenu de la table Activites
--
INSERT INTO Activites (codeActivite, libelle) VALUES
    (1, 'Activité 1'),
    (2, 'Activité 2'),
    (3, 'Activité 3'),
    (4, 'Activité 4'),
    (5, 'Activité 5');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Agents
--
CREATE TABLE Agents (
    codeAgent INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idLieuAdministratif INT(11) NOT NULL,
    civilite VARCHAR(10) NOT NULL,
    prenom VARCHAR(20) NOT NULL,
    nom VARCHAR(20) NOT NULL,
    adresse VARCHAR(50) NOT NULL,
    codePostal char(5) NOT NULL,
    ville VARCHAR(20) NOT NULL,
    dateNaissance DATE NOT NULL,
    dateEmbauche DATE NOT NULL,
    KEY (idLieuAdministratif)
) ENGINE=InnoDB;
--
-- Contenu de la table Agents
--
INSERT INTO Agents (codeAgent, idLieuAdministratif, civilite, prenom, nom, adresse, codePostal, ville, dateNaissance, dateEmbauche) VALUES
    (1, 4, 'M.', 'Oskar', 'MERTZER', '1 rue des Prés', '67852', 'MERTZERSHEIM', '1980-05-12', '2000-05-26'),
    (2, 4, 'M.', 'Albert', 'MEYER', '2 rue des Anémones', '67456', 'MEYERSHEIM', '1980-10-11', '2000-10-16'),
    (3, 5, 'Mme', 'Ursuline', 'MULLER', '3 rue des Pâquettes', '67896', 'MULLERSHEIM', '1982-01-06', '2002-09-11'),
    (4, 5, 'M.', 'Herbert', 'METZGER', '4 rue des Andouillettes', '67789', 'METZGERSHEIM', '1988-11-25', '2001-09-20'),
    (5, 5, 'Mme', 'Antoinette', 'MINGEL', '5 rue des choux', '67741', 'MINGELSHEIM', '1986-10-05', '2000-08-19');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Inscriptions
--
CREATE TABLE Inscriptions (
    idInscription INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numeroSession INT(11) NOT NULL,
    codeAgent INT(11) NOT NULL,
    presence TINYINT(1) NOT NULL,
    frais FLOAT NOT NULL,
    UNIQUE (numeroSession,codeAgent),
    KEY (codeAgent)
) ENGINE=InnoDB;
--
-- Contenu de la table Inscriptions
--
INSERT INTO Inscriptions (numeroSession, codeAgent, presence, frais) VALUES
    (1, 2, 1, 300),
    (2, 4, 0, 0);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Lieux
--
CREATE TABLE Lieux (
    idLieu INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ville VARCHAR(20) NOT NULL,
    codePostal VARCHAR(5) NOT NULL,
    telephone VARCHAR(15) NOT NULL
) ENGINE=InnoDB;
--
-- Contenu de la table Lieux
--
INSERT INTO Lieux (idLieu, ville, codePostal, telephone) VALUES
    (1, 'Strasbourg', '67000', '03 88 23 45 67'),
    (2, 'Strasbourg', '67100', '03 88 45 23 67'),
    (3, 'Strasbourg', '67200', '03 88 67 23 67'),
    (4, 'Schiltigheim', '67300', '03 88 23 23 67'),
    (5, 'Haguenau', '67400', '03 88 67 87 67');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table LieuxFormation
--
CREATE TABLE LieuxFormation (
    idLieuFormation INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
) ENGINE=InnoDB;
--
-- Contenu de la table LieuxFormation
--
INSERT INTO LieuxFormation (idLieuFormation) VALUES
    (1),
    (2),
    (3);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table LieuxAdministratifs
--
CREATE TABLE LieuxAdministratifs (
    idLieuAdministratif INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY
) ENGINE=InnoDB;
--
-- Contenu de la table LieuxAdministratifs
--
INSERT INTO LieuxAdministratifs (idLieuAdministratif) VALUES
    (4),
    (5);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Distances
--
CREATE TABLE Distances (
    idLieuAdministratif INT(11) NOT NULL,
    idLieuFormation INT(11) NOT NULL,
    distanceEntreLieux FLOAT
) ENGINE=InnoDB;
--
-- Contenu de la table Distances
--
INSERT INTO Distances (idLieuAdministratif, idLieuFormation, distanceEntreLieux) VALUES
    (4, 1, 6),
    (5, 1, 24),
    (4, 2, 4),
    (5, 2, 20),
    (4, 3, 2),
    (5, 3, 22);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Sessions
--
CREATE TABLE Sessions (
    numeroSession INT(11) NOT NULL PRIMARY KEY,
    codeAction INT(11) NOT NULL,
    idLieuFormation INT(11) NOT NULL,
    nombreMaxParticipant INT(11) NOT NULL,
    dateSession DATE NOT NULL,
    coutPrevu FLOAT NOT NULL,
    coutReel FLOAT NOT NULL,
    forfaitJournalier FLOAT NOT NULL,
    distanceMinimale FLOAT NOT NULL,
    KEY (codeAction),
    KEY (idLieuFormation)
) ENGINE=InnoDB;
--
-- Contenu de la table Sessions
--
INSERT INTO Sessions (numeroSession, codeAction, idLieuFormation, nombreMaxParticipant, dateSession, coutPrevu, coutReel, forfaitJournalier, distanceMinimale) VALUES
    (1, 1, 3, 2, '2016-10-20', 1000, 800, 60, 20),
    (2, 4, 5, 2, '2017-01-23', 800, 800, 60, 20);
--
-- ---------------------------------------------------------------------------------------
-- Contraintes pour les tables exportées
--
ALTER TABLE Actions
    ADD CONSTRAINT FK_ActionsCodeActivite
        FOREIGN KEY (codeActivite) REFERENCES Activites (codeActivite);
ALTER TABLE Agents
    ADD CONSTRAINT FK_AgentsIdLieuAdministratif
        FOREIGN KEY (idLieuAdministratif) REFERENCES Lieux (idLieu);
ALTER TABLE Inscriptions
    ADD CONSTRAINT FK_InscriptionsNumeroSession
        FOREIGN KEY (numeroSession) REFERENCES Sessions (numeroSession),
    ADD CONSTRAINT FK_InscriptionsCodeAgent
        FOREIGN KEY (codeAgent) REFERENCES Agents (codeAgent);
ALTER TABLE Sessions
    ADD CONSTRAINT FK_SessionsCodeAction
        FOREIGN KEY (codeAction) REFERENCES Actions (codeAction),
    ADD CONSTRAINT FK_SessionsIdLieu
        FOREIGN KEY (idLieuFormation) REFERENCES Lieux (idLieu);
-- ---------------------------------------------------------------------------------------
COMMIT;
SET AUTOCOMMIT = 1;