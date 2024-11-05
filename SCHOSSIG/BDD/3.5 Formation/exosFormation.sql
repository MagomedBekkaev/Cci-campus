-- ## 1. Lecture et compréhension des requêtes SQL

-- Pour chacune des requêtes suivantes :

-- - formuler la demande d'information à laquelle elle répond,
-- - l'implanter sur le SGBD,
-- - contrôler que le résultat obtenu est conforme au besoin exprimé.



-- Afficher la liste des agents avec leur nom, prénom et ville de leur lieu administratif, triée par ville puis par nom.
SELECT nom, prenom, Lieux.ville
FROM Agents
      INNER JOIN Lieux
            ON Agents.idLieuAdministratif = Lieux.idLieu
ORDER BY Lieux.ville, nom;


-- Afficher le libelle des activités qui n'ont pas eu de session après le 11 décembre 2024
SELECT libelle
FROM Activites
WHERE codeActivite NOT IN ( SELECT codeActivite
                            FROM Actions
                                INNER JOIN Sessions
                                    ON Actions.codeAction = Sessions.codeAction
                            WHERE dateSession > '20024-12-11' )


-- Afficher la distance entre les lieux de formation et les lieux administratifs des agents qui est supérieure à 350 km
SELECT nom, prenom, distanceEntreLieux
FROM Agents
    INNER JOIN Inscriptions
            ON Agents.codeAgent = Inscriptions.codeAgent
        INNER JOIN Sessions
                ON Inscriptions.numeroSession = Sessions.numeroSession
            INNER JOIN Distances
					ON Sessions.idLieuFormation = Distances.idLieuFormation
                       AND Agents.idLieuAdministratif = Distances.idLieuAdministratif
WHERE distanceEntreLieux > 350;

-- Afficher les sessions et les actions qui se déroulent à Bordeaux
SELECT numeroSession, intitule
FROM Sessions
	INNER JOIN Actions
			ON Sessions.codeAction = Actions.codeAction
		INNER JOIN Lieux
				ON Sessions.idLieuFormation = Lieux.idLieu
                    AND ville = "Bordeaux";

-- Afficher les villes distinctes des lieux de formation
SELECT DISTINCT ville
FROM Lieux
	INNER JOIN LieuxFormation
			ON Lieux.idLieu = LieuxFormation.idLieuFormation
ORDER BY ville;


-- Afficher le nombre d'inscrits aux sessions d'informatique
SELECT COUNT(*) as nbrInscrits
FROM Inscriptions
	INNER JOIN Sessions
			ON Inscriptions.numeroSession = Sessions.numeroSession
		INNER JOIN Actions
				ON Sessions.codeAction = Actions.codeAction
			INNER JOIN Activites
					ON Actions.codeActivite = Activites.codeActivite
WHERE libelle = "Informatique";


-- Afficher le cout moyen des actions qui ont eu lieu
SELECT intitule, AVG(coutPrevu - coutReel)
FROM Actions
	INNER JOIN Sessions
			ON Actions.codeAction = Sessions.codeAction
WHERE coutReel IS NOT NULL
GROUP BY intitule;

-- ## 2. Lecture et modification de requêtes SQL incorrectes

-- **Dans chacun des cas suivants :**

-- - **expliquer en quoi cette requête n'est pas conforme à la demande**,
-- - **proposer une modification de la requête**,
-- - **exécuter et contrôler cette requête dans le SGBD.**

-- **Cas n° 1** : *Quel est l'intitulé et le coût des actions dont le coût est le plus faible ?*

-- La requête suivante a été construite :

SELECT intitule, MIN(cout) AS coutMin
FROM Actions
WHERE cout = (SELECT cout
              FROM Actions)
GROUP BY intitule;

-- PAS FINI 



-- **Cas n° 2** : *Quel est le nombre de sessions par activité ?*

-- La requête suivante a été construite :

SELECT libelle, intitule, COUNT(Sessions.numeroSession)
FROM Activites
	INNER JOIN Actions
			ON Activites.codeActivite = Actions.codeActivite
		INNER JOIN Sessions
				ON Actions.codeAction = Sessions.codeAction;

-- Il manque un GROUP BY pour regrouper les sessions par activité
-- La requête corrigée est :

SELECT libelle, intitule, COUNT(Sessions.numeroSession)
FROM Activites
	INNER JOIN Actions
			ON Activites.codeActivite = Actions.codeActivite
		INNER JOIN Sessions
				ON Actions.codeAction = Sessions.codeAction;
GROUP BY libelle;


-- **Cas n°3** : *Quelle est la liste des intitulés d'actions pour lesquelles il y a plus de 3 inscrits, toutes sessions confondues ?*

-- La requête suivante a été construite :

SELECT intitule, COUNT(*) AS nbrInscrits
FROM Actions
	INNER JOIN Sessions
			ON Actions.codeAction = Sessions.codeAction
WHERE nbrInscrits > 3
GROUP BY intitule;

-- Le nbInscrits ne peut pas être utilisé dans le WHERE car il est calculé dans le SELECT
-- La requête corrigée est :
SELECT intitule, COUNT(*) AS nbrInscrits
FROM Actions
	INNER JOIN Sessions
			ON Actions.codeAction = Sessions.codeAction
GROUP BY intitule
HAVING COUNT(*) > 3;


-- **Cas n°4** : *Quel est le montant total des frais d'hébergement par session ?*

-- La requête suivante a été construite :

SELECT numeroSession, COUNT(frais)
FROM Inscriptions
GROUP BY numeroSession;

-- Il faut utiliser SUM pour additionner les frais parce que COUNT ne fait que compter le nombre de frais
-- La requête corrigée est :
SELECT numeroSession, SUM(frais) AS totalFrais
FROM Inscriptions
GROUP BY numeroSession;


-- ## 3. Écriture de requêtes SQL

-- **Pour chacun des besoins exprimés suivants :**

-- - écrire et exécuter la requête correspondante,
-- - contrôler que le résultat obtenu soit conforme à la demande.

-- R1 : Quelle est la liste des inscriptions (nom, prénom, numeroSession et dateSession) triée par nom et prénom ?



-- R2 : Quelle est la liste des actions d'une durée supérieure à 60 heures ?

-- R3 : Quelle est la liste des dates et des lieux de sessions dont le contenu concerne les « réseaux » ?

-- R4 : Quelle est la liste des agents qui ne sont inscrits à aucune session ?

-- R5 : Quelles sont les sessions par activité (libellé de l’activité, intitulé de l'action, date de session) ?

-- R6 : Quelle est la liste des agents déclarant des frais d'hébergement supérieurs à 1000 € ?

-- R7 : Quel est le nombre de sessions qui se déroulent à Bordeaux ?

-- R8 : Quelle est la liste des activités pour lesquelles le coût moyen des actions est inférieur à 3 000 € ?

-- R9 : Quelle est la liste de intitulés d'actions qui ont des sessions pour lesquelles le coût réel est supérieur au coût prévu, en affichant cet écart ?

-- R10 : Quel est le nombre total de places, toutes sessions confondues, portant sur l'activité "informatique" ?

-- R11 : Quel est le nombre total de places par action ?

-- R12 : Quelle est la durée moyenne des actions par activité ?

