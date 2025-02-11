-- 7.1. Pizzeria : heure de livraison invalide

--  Apporter une modification à la base pizzeria afin d'interdire la saisie d'une heure de livraison précédent l'heure de commande.
-- avec CHECK
ALTER TABLE Commandes
    ADD CONSTRAINT chk_heureLivraison CHECK (heureLivraison >= heureCommande);

-- sans CHECK
-- trigger pour insertion
DELIMITER |
CREATE TRIGGER trg_heureLivraison_insert
BEFORE INSERT ON Commandes
FOR EACH ROW
BEGIN
    IF NEW.heureLivraison < NEW.heureCommande THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Heure de livraison ne peut pas être avant l\'heure de commande";
    END IF;
END |
DELIMITER;

-- trigger pour mise à jour
DELIMITER |
CREATE TRIGGER trg_heureLivraison_update
BEFORE UPDATE ON Commandes
FOR EACH ROW
BEGIN
    IF NEW.heureLivraison < NEW.heureCommande THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Heure de livraison ne peut pas être avant l\'heure de commande";
    END IF;
END|
DELIMITER;

-- 7.2. Pizzeria : traduction des unités

-- Modifier la base Pizzeria afin de permettre la gestion des traductions des unités :

-- - renommer le champ symboleUnite en idUnite de type entier dans les tables `Ingredients` et `Unites`,

-- Step 1: Drop the foreign key constraint in Ingredients
ALTER TABLE Ingredients
    DROP FOREIGN KEY IngredientsUnites_symboleUnite;

-- Step 2: Rename the column in Ingredients
ALTER TABLE Ingredients
    CHANGE symboleUnite idUnite VARCHAR(10) NOT NULL;

-- Step 3: Rename the column in Unites
ALTER TABLE Unites
    CHANGE symboleUnite idUnite VARCHAR(10) NOT NULL;

-- Step 4: Add the foreign key constraint back in Ingredients
ALTER TABLE Ingredients
    ADD CONSTRAINT IngredientsUnites_idUnite FOREIGN KEY (idUnite) REFERENCES Unites (idUnite);

-- - ajouter un champ codeLangue pour préciser la langue de l'enregistrement : 'fr', 'de' ou 'en',
ALTER TABLE Unites
    ADD codeLangue CHAR(2) NOT NULL; 

INSERT INTO Unites (idUnite, libelleUnite, codeLangue) VALUES
    (1, '€ par kilogramme', 'fr'),
    (2, '€ per kilogram', 'en'),
    (3, '€ pro Kilogramm', 'de'),
    (4, '€ par litre', 'fr'),
    (5, '€ per liter', 'en'),
    (6, '€ pro Liter', 'de'),
    (7, '€ par pâte', 'fr'),
    (8, '€ per dough', 'en'),
    (9, '€ pro Teig', 'de');

-- - ajouter un champ idUniteLangueDefaut pour relier une traduction à sa langue par défaut.

ALTER TABLE Unites
    ADD idUniteLangueDefaut INT;

UPDATE Unites
SET idUniteLangueDefaut = idUnite
WHERE codeLangue = 'fr';

-- Ajouter les enregistrements nécessaires pour le fonctionnement.
-- Grace à une procédure ou fonction stockée, afficher la liste des ingrédients avec l'unité dans une autre langue.

DELIMITER |
CREATE PROCEDURE afficher_ingredients_unite(langue CHAR(2))
BEGIN
    SELECT i.nomIngredient, u.libelleUnite
    FROM Ingredients i
    JOIN Unites u ON i.idUnite = u.idUnite
    WHERE u.codeLangue COLLATE utf8mb4_unicode_ci = langue COLLATE utf8mb4_unicode_ci;
END |
DELIMITER ;

-- Call the procedure to display ingredients with units in a specified language
CALL afficher_ingredients_unite('en');
