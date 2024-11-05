-- ### 2.1. SQL standard

-- R1 : « Quelle est la liste des nom et prix de chaque pizza, triée par ordre de prix croissant ? »
SELECT nomPizza, prixVentePizza FROM pizzas ORDER BY nomPizza, prixVentePizza DESC; 

-- R2 : « Quel est le nom des pizzas qui coûtent plus de 13€, triés par ordre décroissant du prix ? »
SELECT nomPizza, prixVentePizza FROM pizzas WHERE prixVentePizza > 13 ORDER BY prixVentePizza DESC; 

-- R3 : « Quelle est la liste de nom et prénom des employés qui gagnent entre 1 200 € et 1 300 € ? »
SELECT nomEmploye, prenomEmploye, salaireMensuel FROM employes WHERE salaireMensuel > 1200 AND salaireMensuel < 1300; 

-- R4 : « Quel est l'identifiant des commandes passées courant de l’année 2011, entre 15h et 16h de l’après midi, qui n’ont pas été traitées par l’employé numéro 1 ? »
SELECT idCommande
FROM commandes, employes
WHERE commandes.idEmploye = employes.idEmploye
AND dateCommande BETWEEN '2011/01/01' AND '2011/12/31'
AND heureCommande BETWEEN '15:00:00' AND '16:00:00'
AND commandes.idEmploye != 1;

-- Version plus optimisée
SELECT c.idCommande
FROM commandes c
JOIN employes e ON c.idEmploye = e.idEmploye
WHERE c.dateCommande BETWEEN '2011-01-01 15:00:00' AND '2011-12-31 16:00:00'
AND c.idEmploye != 1;

-- R5 : « Quel est le nom des ingrédients qui se terminent par la lettre « a » ? »
SELECT nomIngredient FROM ingredients WHERE nomIngredient LIKE '%e'; 

-- R6 : « Quelle est la liste des identifiants de pizzas qui contiennent au moins 100 g de champignons ou au moins 100 g de chorizo ? »
SELECT DISTINCT p.idPizza FROM pizzas p 
JOIN compositions c ON c.idPizza = p.idPizza 
JOIN ingredients i ON i.idIngredient = c.idIngredient 
WHERE (i.nomIngredient = "Champignons" AND c.quantite >= 0.10) 
OR (i.nomIngredient = "Chorizo" AND c.quantite >= 0.10); 

-- R7 : « Quelle est la liste avec nom et quantité des ingrédients de la pizza 4 fromages ? »
SELECT DISTINCT i.nomIngredient, c.quantite FROM ingredients, compositions, pizzas p 
JOIN compositions c ON c.idPizza = p.idPizza 
JOIN ingredients i ON i.idIngredient = c.idIngredient 
WHERE nomPizza = "4 fromages"; 

-- R8 : « Quels sont les noms des pizzas qui contiennent des olives ou du chorizo ? »
SELECT DISTINCT p.idPizza FROM pizzas p 
JOIN compositions c ON c.idPizza = p.idPizza 
JOIN ingredients i ON i.idIngredient = c.idIngredient 
WHERE i.nomIngredient LIKE "Olives%"
OR i.nomIngredient = "Chorizo";

-- R9 : « Quel est le nom et prénom de l’employé qui a traité la commande 3 ? »
SELECT e.nomEmploye, e.prenomEmploye 
FROM employes e 
JOIN commandes c ON e.idEmploye = c.idEmploye 
WHERE c.idCommande = 3;

-- R10 : « Quels sont les noms des employés ayant livré les commandes du 23 juin 2011 ? »
SELECT DISTINCT e.nomEmploye, e.prenomEmploye
FROM employes e
JOIN commandes c ON e.idEmploye = c.idEmploye
WHERE c.dateCommande = '2011/06/23';

-- R11 : « Quels sont le ou les employés qui gagnent le plus ? »
SELECT idEmploye, nomEmploye, prenomEmploye, salaireMensuel
FROM employes
WHERE salaireMensuel = (SELECT MAX(salaireMensuel) FROM employes);

-- R12 : « Quels sont, sans doublon, les ingrédients nécessaires pour réaliser les pizzas de la commande 2 ? »
SELECT DISTINCT i.nomIngredient
FROM ingredients i
JOIN compositions c ON i.idIngredient = c.idIngredient
JOIN pizzas p ON c.idPizza = p.idPizza
JOIN lignescommande l ON p.idPizza = l.idPizza
WHERE l.idCommande = 2;

-- R13 : « Quels sont les ingrédients qui ne sont utilisés dans aucune pizza ? »
SELECT ingredients.nomIngredient
FROM ingredients
LEFT JOIN compositions ON compositions.idIngredient = ingredients.idIngredient
WHERE compositions.idIngredient IS NULL;

-- ### 2.2. SQL avancé

-- R14 : « Quelle est la liste des commandes qui ont été livrées moins de 10 minutes après avoir été commandées ? »
SELECT c.idCommande, TIMEDIFF(heureLivraison, heureCommande) AS diff
FROM commandes c
WHERE TIMEDIFF(heureLivraison, heureCommande) < '00:10:00';

-- R15 : « Quel est la liste des commandes qui ont été commandées le mois de naissance de Julien MARTIN, en précisant le nom et le prénom des livreurs qui ont livrés chacune de ces commandes ? »
SELECT 
    c.idCommande, e.nomEmploye, e.prenomEmploye
FROM Commandes c
JOIN Employes e ON c.idEmploye = e.idEmploye
WHERE MONTH(c.dateCommande) = (SELECT MONTH(dateNaissance) FROM Employes WHERE nomEmploye = 'MARTIN' AND prenomEmploye = 'Julien')

-- R16 : « Quels sont les noms des pizzas qui contiennent au moins un ingrédient en commun avec la 4 fromages, sauf la pâte ? »


-- R17 : « Quelle est la listes des pizzas plus chères que la pizza royale ? »
SELECT p.nomPizza
FROM Pizzas p
WHERE p.prixVentePizza > (SELECT prixVentePizza FROM Pizzas WHERE nomPizza LIKE "%Royale");

-- R18 : « Quelle est la liste des commandes livrées cette année, en précisant le nom et le prénom des livreurs qui ont livrés chacune de ces commandes ? »

-- R19 : « Donner le contenu de chaque commande, en précisant le nom de la pizza et la quantité. »

-- R20 : « Quelles sont les commandes qui ne contiennent pas de pizza 4 fromages ? »

-- R21 : « Quelles sont les pizzas qui ne contiennent pas de chorizo ? »

-- R22 : « Quelles sont les pizzas qui ne contiennent pas de chorizo et qui ont été livrées dans au moins une commande du 23 juin 2011 ? »

-- R23 : « Quels sont les employés (nom et prénom) qui ont livrés plus de 2 commandes le 23 juin 2011 entre 16h et 17h ? »

-- R24 : « Quelles sont la ou les pizzas qui contiennent le moins de chorizo, mais en contiennent, en précisant combien elles en contiennent ? »

-- R25 : « Quelles sont les pizzas ayant été livrées par le livreur de la commande 12, qui contiennent au moins autant de chorizo que la pizza Royale et qui coûtent moins de 13 € ? »

-- R26 : « Quelles sont la ou les pizzas qui contiennent le plus d’ingrédients ? »

-- R27 : « Afficher la liste des pizzas avec une 2e colonne indiquant selon la quantité de champignons le message "Plus de 100g", "Moins de 100g" ou "Aucun". »