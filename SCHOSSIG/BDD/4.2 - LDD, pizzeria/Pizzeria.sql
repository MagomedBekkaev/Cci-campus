SET AUTOCOMMIT = 0;
START TRANSACTION;
-- ---------------------------------------------------------------------------------------
DROP DATABASE
    IF EXISTS pizzeria;
CREATE DATABASE pizzeria
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
USE pizzeria;
--
-- Base de données : pizzeria
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Ingredients
--
CREATE TABLE Ingredients (
    idIngredient INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomIngredient VARCHAR(25) NOT NULL DEFAULT '',
    prixUnitaireIngredient DECIMAL(5,2) DEFAULT 0,
    symboleUnite CHAR(4) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Ingredients
--
INSERT INTO Ingredients (idIngredient, nomIngredient, prixUnitaireIngredient, symboleUnite) VALUES
    (1, 'Sauce tomate', 3, 'euli'),
    (2, 'Champignons', 5, 'eukg'),
    (3, 'Pâte à pizza', 1, 'eupa'),
    (4, 'Chorizo', 7, 'eukg'),
    (5, 'Emmental', 4, 'eukg'),
    (6, 'Roquefort', 5, 'eukg'),
    (7, 'Chèvre', 6, 'eukg'),
    (8, 'Mozzarella', 5, 'eukg'),
    (9, 'Parmesan', 6, 'eukg'),
    (10, 'Lardons', 1.5, 'eukg'),
    (11, 'Crème fraîche', 2, 'euli'),
    (12, 'Oignon', 1, 'eukg'),
    (13, 'Olives noires', 7.35, 'eukg'),
    (14, 'Jambon', 2, 'eukg'),
    (15, 'Ananas', 1, 'eukg'),
    (16, 'Olives vertes', 6.20, 'eukg');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Unites
--
CREATE TABLE Unites (
    symboleUnite CHAR(4) NOT NULL PRIMARY KEY,
    libelleUnite VARCHAR(16) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Unites
--
INSERT INTO Unites (symboleUnite, libelleUnite) VALUES
    ('eukg', '€ par kilogramme'),
    ('euli', '€ par litre'),
    ('eupa', '€ par pâte');
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Compositions
--
CREATE TABLE Compositions (
    idComposition INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idPizza INT UNSIGNED NOT NULL,
    idIngredient INT UNSIGNED NOT NULL,
    quantite DECIMAL(4,2) DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Compositions
--
INSERT INTO Compositions (idPizza, idIngredient, quantite) VALUES
    (1, 1, 0.1),
    (1, 3, 1),
    (1, 6, 0.1),
    (1, 7, 0.13),
    (1, 8, 0.08),
    (1, 9, 0.03),
    (1, 10, 0.15),
    (1, 11, 0.13),
    (1, 13, 0.1),
    (2, 1, 0.15),
    (2, 2, 0.05),
    (2, 3, 1),
    (2, 4, 0.03),
    (2, 5, 0.1),
    (2, 8, 0.03),
    (2, 12, 0.01),
    (2, 13, 0.04),
    (2, 14, 0.1),
    (2, 15, 0.12),
    (3, 1, 0.15),
    (3, 3, 1),
    (3, 10, 0.2),
    (3, 12, 0.02),
    (4, 1, 0.15),
    (4, 2, 0.12),
    (4, 3, 1),
    (4, 6, 0.12),
    (4, 7, 0.14),
    (4, 10, 0.18),
    (4, 12, 0.03),
    (4, 14, 0.12);
--
-- --------------------------------------------------------
-- Structure de la table Pizzas
--
CREATE TABLE Pizzas (
    idPizza INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomPizza VARCHAR(25) NOT NULL DEFAULT '',
    prixVentePizza DECIMAL(4,2) DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Pizzas
--
INSERT INTO Pizzas (idPizza, nomPizza, prixVentePizza) VALUES
    (1, '4 fromages', 14),
    (2, 'Royale', 12),
    (3, 'Simple', 11),
    (4, 'Diverse', 15);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table LignesCommande
--
CREATE TABLE LignesCommande (
    idLigneCommande INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idPizza INT UNSIGNED NOT NULL,
    idCommande INT UNSIGNED NOT NULL,
    quantite INT DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table LignesCommande
--
INSERT INTO LignesCommande (idPizza, idCommande, quantite) VALUES
    (1, 1, 1),
    (1, 2, 1),
    (1, 4, 2),
    (1, 5, 5),
    (1, 6, 8),
    (2, 2, 1),
    (2, 3, 1),
    (2, 4, 1),
    (2, 6, 7),
    (3, 7, 1),
    (4, 8, 1),
    (2, 9, 7),
    (2, 10, 7),
    (4, 10, 5),
    (3, 11, 5);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Commandes
--
CREATE TABLE Commandes (
    idCommande INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dateCommande DATE NOT NULL,
    heureCommande TIME NOT NULL,
    heureLivraison TIME DEFAULT NULL,
    idEmploye INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Commandes
--
INSERT INTO Commandes (idCommande, dateCommande, heureCommande, heureLivraison, idEmploye) VALUES
    (1, '2015-01-09', '12:00:00', '13:00:00', 1),
    (2, '2011-06-23', '16:30:00', '16:40:00', 2),
    (3, '2011-06-23', '18:50:00', '19:30:00', 1),
    (4, '2007-01-12', '20:54:32', '21:20:00', 1),
    (5, '2011-06-23', '06:06:06', '16:06:06', 2),
    (6, '2011-06-23', '15:15:15', '16:20:00', 2),
    (7, '2011-06-25', '12:15:15', '12:20:00', 1),
    (8, '2011-06-25', '12:15:15', '12:20:00', 2),
    (9, '2011-06-12', '11:15:15', '12:20:00', 2),
    (10, '2020-06-12', '11:15:15', '12:20:00', 2),
    (11, '2020-06-12', '11:15:15', NULL, 1);
--
-- ---------------------------------------------------------------------------------------
-- Structure de la table Employes
--
CREATE TABLE Employes (
    idEmploye INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomEmploye VARCHAR(30) NOT NULL DEFAULT '',
    prenomEmploye VARCHAR(20) DEFAULT '',
    salaireMensuel DECIMAL(6,2) DEFAULT 0,
    dateNaissance DATE NOT NULL,
    dateEmbauche DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Contenu de la table Employes
--
INSERT INTO Employes (idEmploye, nomEmploye, prenomEmploye, salaireMensuel, dateNaissance, dateEmbauche) VALUES
    (1, 'MARTIN', 'Julien', 1150, '1980-06-11', '2000-11-12'),
    (2, 'DURAND', 'Ludovic', 1200, '1981-11-12', '2002-05-06');
--
-- ---------------------------------------------------------------------------------------
-- Index pour les tables
--
ALTER TABLE Ingredients
  ADD KEY IngredientsUnites_symboleUnite (symboleUnite);
ALTER TABLE Compositions
  ADD KEY CompositionsIngredients_idIngredient (idIngredient),
  ADD KEY CompositionsPizzas_idPizza (idPizza);
ALTER TABLE LignesCommande
  ADD KEY LignesCommandePizzas_idPizza (idPizza),
  ADD KEY LignesCommandeCommandes_idCommande (idCommande);
ALTER TABLE Commandes
  ADD KEY CommandesEmploye_idEmploye (idEmploye);
--
-- ---------------------------------------------------------------------------------------
-- Contraintes pour les tables
--
ALTER TABLE Ingredients
    ADD CONSTRAINT IngredientsUnites_symboleUnite FOREIGN KEY (symboleUnite) REFERENCES Unites (symboleUnite);
ALTER TABLE Compositions
    ADD CONSTRAINT CompositionsIngredients_idIngredient FOREIGN KEY (idIngredient) REFERENCES Ingredients (idIngredient),
    ADD CONSTRAINT CompositionsPizzas_idPizza FOREIGN KEY (idPizza) REFERENCES Pizzas (idPizza);
ALTER TABLE LignesCommande
    ADD CONSTRAINT LignesCommandePizzas_idPizza FOREIGN KEY (idPizza) REFERENCES Pizzas (idPizza),
    ADD CONSTRAINT LignesCommandeCommandes_idCommande FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande);
ALTER TABLE Commandes
    ADD CONSTRAINT CommandesEmploye_idEmploye FOREIGN KEY (idEmploye) REFERENCES Employes (idEmploye);
-- ---------------------------------------------------------------------------------------
COMMIT;
SET AUTOCOMMIT = 1;
