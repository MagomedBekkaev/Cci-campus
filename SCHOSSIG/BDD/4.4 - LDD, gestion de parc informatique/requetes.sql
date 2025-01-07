-- 2.1. Correction et insertion de données

-- R1 : Il y a eu une erreur dans le nom de Gérard DUPOND. Son nom réel est Gérard DUPONT.
UPDATE Utilisateurs
SET nom = 'DUPONT'
WHERE idUtilisateur = 3;


-- R2 : Louisette COUCOU, l'épouse du chef du service R&D a été embauchée et a été affectée à un poste identique à celui de Gérard DUPONT. 
--      Elle est embauchée avec un salaire inférieur de 150 € par rapport à celui de son mari.

INSERT INTO Utilisateurs (nom, prenom) 
VALUES ('COUCOU', 'Louisette');

UPDATE Utilisateurs
SET fonction = (SELECT fonction 
                FROM Utilisateurs 
                WHERE nom = 'DUPONT' 
                AND prenom = 'Gérard'), 
    idService = (SELECT idService 
                FROM Utilisateurs
                WHERE nom = 'DUPONT' 
                AND prenom = 'Gérard' )
WHERE nom = 'COUCOU' AND prenom = 'Louisette';

UPDATE Utilisateurs
SET salaire = (SELECT salaire - 150
                FROM Utilisateurs 
                INNER JOIN Services 
                    ON Utilisateurs.idService = Services.idService 
                WHERE libelle = 'R&D' AND fonction = 'Chef')
WHERE nom = 'COUCOU' AND prenom = 'Louisette';

-- ou bien

INSERT INTO Utilisateurs (nom, prenom) 
VALUES ('COUCOU', 'Louisette');

UPDATE Utilisateurs u
JOIN Utilisateurs d ON d.nom = 'DUPONT' AND d.prenom = 'Gérard'
JOIN Services s ON u.idService = s.idService AND s.libelle = 'R&D' AND u.fonction = 'Chef'
SET u.fonction = d.fonction, 
    u.idService = d.idService,
    u.salaire = u.salaire - 150
WHERE u.nom = 'COUCOU' AND u.prenom = 'Louisette';

-- ou mieux

SELECT idService, fonction INTO @idService, @fonction
FROM Utilisateurs
WHERE nom ="DUPONT" AND prenom = 'Gérard'

SELECT salaire INTO @salaire
FROM Utilisateurs
WHERE nom = 'COUCOU' AND prenom = 'Robert'

INSERT INTO Utilisateurs (nom, prenom, fonction, salaire, idService) VALUES
('COUCOU', 'Louisette', @fonction, (@salaire - 150), @idService);

-- R3 : Tous les adjoints sont augmentés de 8%.
UPDATE Utilisateurs
SET salaire = salaire * 1.08
WHERE fonction = 'Adjoint';

-- R4 : Tous les employés touchant moins de 1000€ par mois doivent être licenciés.
DELETE FROM Utilisateurs
WHERE salaire < 1000;



-- 2.2. Interrogations

-- R5 : « Quelle est la liste des équipements (marque et modèle), sans doublon ? »

SELECT DISTINCT marque, modele
FROM Equipements

-- R6 : « Quel sont les équipements du service Comptabilité ? »

SELECT e.idEquipement, e.marque, e.modele, e.nomHote, e.description
FROM Equipements e
JOIN Utilisateurs u ON e.idAffectation = u.idUtilisateur
JOIN Services s ON u.idService = s.idService
WHERE s.libelle = 'Comptabilité';

-- R7 : « Quel sont les employés des différents services triés par ordre alphabétique de nom, puis prénom ? »

-- R8 : « Quel est le coût salarial mensuel cumulé de l'ensemble des employés (estimation du coût salarial à partir du salaire net) ? »

-- R9 : « Quel est le salaire net moyen de chaque service ainsi que le nombre de personnes qui lui sont affectées ? »

-- R10 : « Qui n'a pas de Pack Office ? »

-- R11 : « Quels sont le ou les services où il y a le plus d’employés ? »

-- R12 : « Afficher le tableau des données tel que fourni dans le sujet. »

-- R13 : « Modifier la requête précédente pour afficher le tableau de toutes les données présentes dans la base de données. »