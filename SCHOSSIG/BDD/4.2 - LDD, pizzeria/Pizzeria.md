# Pizzeria
**Création d'une base de données à partir d'un modèle relationnel**



## 1. Création de la base de données avec insertion de données

Le but du travail est d'implémenter le Système d'information d'une pizzeria. Celui-ci gère la composition des pizzas, les commandes et les livraisons par des employés.

> **Travail à faire**
>
> Composer le script de création de base de donnée Pizzeria en utilisant les commandes SQL adéquates, à partir du modèle relationnel fourni.
>
> Compléter ensuite le script pour insérer les données nécessaires au fonctionnement du système de gestion de la pizzeria. Les principales données sont fournies ci-après. Les données nécessaires aux commandes sont à composer librement.

Cet exercice permet de :
- manipuler les commandes SQL de création de base, tables, champs, index, intégrité, données…,
- réfléchir à l'organisation des données dans les champs,
- visualiser les informations nécessaires aux jointures,
- se créer un jeux de données utile pour le test des requêtes.



### 1.1. Modèle relationnel de la base de données Pizzeria

- **Ingredients** (<u>idIngredient</u>, nomIngredient, prixUnitaireIngredient, #symboleUnite)
        idIngredient : Clef primaire
        symboleUnite : Clef étrangère en référence à symboleUnite de Unites
- **Unites** (<u>symboleUnite</u>, libelleUnite)
        symboleUnite : Clef primaire
- **Compositions** (<u>idComposition</u>, #idPizza, #idIngredient, quantite)
        idComposition : Clef primaire
        idPizza : Clef étrangère en référence à idPizza de Pizzas
        idIngredient : Clef étrangère en référence à idIngredient de Ingredients
- **Pizzas** (<u>idPizza</u>, nomPizza, prixVentePizza)
        idPizza : Clef primaire
- **LignesCommande** (<u>idLigneCommande</u>, #idPizza, #idCommande, quantite)
        idLigneCommande : Clef primaire
        idPizza : Clef étrangère en référence à idPizza de Pizzas
        idCommande : Clef étrangère en référence à idCommande de Commandes
- **Commandes** (<u>idCommande</u>, dateCommande, heureCommande, heureLivraison, #idEmploye)
        idCommande : Clef primaire
        idEmploye : Clef étrangère en référence à idEmploye de Employes
- **Employes** (<u>idEmploye</u>, nomEmploye, prenomEmploye, dateNaissance, salaireMensuel, dateEmbauche)
        idEmploye : Clef primaire

<img src="../Medias/4.x/4.2-Pizzeria-ModeleRelationnel.jpg" alt="Pizzeria - Modèle relationnel" style="zoom:150%;" />



### 1.2. Les ingrédients

| **Ingrédients** | **Tarif** |
| --------------- | --------- |
| Sauce tomate    | 3 €/L     |
| Champignons     | 5 €/Kg    |
| Pâte à pizza    | 1 €/pâte  |
| Chorizo         | 7 €/Kg    |
| Emmental        | 4 €/Kg    |
| Roquefort       | 5 €/Kg    |
| Chèvre          | 6 €/Kg    |
| Mozzarella      | 5 €/Kg    |
| Parmesan        | 6 €/Kg    |
| Lardons         | 1,5 €/Kg  |
| Crème fraîche   | 2 €/L     |
| Oignons         | 1 €/Kg    |
| Olives noires   | 7,35 €/Kg |
| Jambon          | 2 €/Kg    |
| Ananas          | 1 €/Kg    |
| Olives vertes   | 6,20 €/Kg |



### 1.3. Les Pizzas proposées

Deux pizzas sont proposées, d'autres pourront être ajoutées.

| **La pizza 4 fromages à 14 €**  | **La pizza royale à 16 €** |
| ------------------------------- | -------------------------- |
| 1 pâte à pizza                  | 1 pâte à pizza             |
| 100 ml de sauce tomate          | 100 ml de sauce tomate     |
| 150 g de lardons                | 10 g d'oignon              |
| 130 ml de crème fraîche épaisse | 50 g de champignons        |
| 100 g de roquefort              | 25 g d'emmenthal râpé      |
| 130 g de chèvre                 | 30 g de mozzarella         |
| 80 g de mozzarella              | 40 g d'olives noires       |
| 30 g de parmesan                | 100 g de jambon            |



### 1.4. Les employés

- Julien MARTIN, embauché à 1 150 €/mois,
- Ludovic DURAND, embauché à 1 200 €/mois.



## 2. Requêtes

> **Travail à faire**
>
> Construire les requêtes suivantes. Adapter les données pour permettre la vérification du fonctionnement des différentes requêtes.



### 2.1. SQL standard

**R1** : *« Quelle est la liste des nom et prix de chaque pizza, triée par ordre de prix croissant ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R01.png" alt="Requête R01" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R2** : *« Quel est le nom des pizzas qui coûtent plus de 13€, triés par ordre décroissant du prix ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R02.png" alt="Requête R02" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R3** : *« Quelle est la liste de nom et prénom des employés qui gagnent entre 1 200 € et 1 300 € ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R03.png" alt="Requête R03" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R4** : *« Quel est l'identifiant des commandes passées courant de l’année 2011, entre 15h et 16h de l’après midi, qui n’ont pas été traitées par l’employé numéro 1 ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R04.png" alt="Requête R04" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R5** : *« Quel est le nom des ingrédients qui se terminent par la lettre « a » ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R05.png" alt="Requête R05" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R6** : *« Quelle est la liste des identifiants de pizzas qui contiennent au moins 100 g de champignons ou au moins 100 g de chorizo ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R06.png" alt="Requête R06" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R7** : *« Quelle est la liste avec nom et quantité des ingrédients de la pizza 4 fromages ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R07.png" alt="Requête R07" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R8** : *« Quels sont les noms des pizzas qui contiennent des olives ou du chorizo ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R08.png" alt="Requête R08" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R9** : *« Quel est le nom et prénom de l’employé qui a traité la commande 3 ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R09.png" alt="Requête R09" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R10** : *« Quels sont les noms des employés ayant livré les commandes du 23 juin 2011 ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R10.png" alt="Requête R10" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R11** : *« Quels sont le ou les employés qui gagnent le plus ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R11.png" alt="Requête R11" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R12** : *« Quels sont, sans doublon, les ingrédients nécessaires pour réaliser les pizzas de la commande 2 ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R12.png" alt="Requête R12" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R13** : *« Quels sont les ingrédients qui ne sont utilisés dans aucune pizza ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R13.png" alt="Requête R13" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>



### 2.2. SQL avancé

**R14** : *« Quelle est la liste des commandes qui ont été livrées moins de 10 minutes après avoir été commandées ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R14.png" alt="Requête R14" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R15** : *« Quel est la liste des commandes qui ont été commandées le mois de naissance de Julien MARTIN, en précisant le nom et le prénom des livreurs qui ont livrés chacune de ces commandes ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R15.png" alt="Requête R15" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R16** : *« Quels sont les noms des pizzas qui contiennent au moins un ingrédient en commun avec la 4 fromages, sauf la pâte ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R16.png" alt="Requête R16" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R17** : *« Quelle est la listes des pizzas plus chères que la pizza royale ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R17.png" alt="Requête R17" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R18** : *« Quelle est la liste des commandes livrées cette année, en précisant le nom et le prénom des livreurs qui ont livrés chacune de ces commandes ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R18.png" alt="Requête R18" style="zoom: 67%; float: right; margin-left: 40px;" />

Illustration pour l'année 2020.

<div style="clear: both;"></div>

**R19** : *« Donner le contenu de chaque commande, en précisant le nom de la pizza et la quantité. »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R19.png" alt="Requête R19" style="zoom: 67%; float: right; margin-left: 40px;" />

<div style="clear: both;"></div>

**R20** : *« Quelles sont les commandes qui ne contiennent pas de pizza 4 fromages ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R20.png" alt="Requête R20" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R21** : *« Quelles sont les pizzas qui ne contiennent pas de chorizo ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R21.png" alt="Requête R21" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R22** : *« Quelles sont les pizzas qui ne contiennent pas de chorizo et qui ont été livrées dans au moins une commande du 23 juin 2011 ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R22.png" alt="Requête R22" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R23** : *« Quels sont les employés (nom et prénom) qui ont livrés plus de 2 commandes le 23 juin 2011 entre 16h et 17h ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R23.png" alt="Requête R23" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R24** : *« Quelles sont la ou les pizzas qui contiennent le moins de chorizo, mais en contiennent, en précisant combien elles en contiennent ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R24.png" alt="Requête R24" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R25** : *« Quelles sont les pizzas ayant été livrées par le livreur de la commande 12, qui contiennent au moins autant de chorizo que la pizza Royale et qui coûtent moins de 13 € ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R25.png" alt="Requête R25" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R26** : *« Quelles sont la ou les pizzas qui contiennent le plus d’ingrédients ? »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R26.png" alt="Requête R26" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>

**R27** : *« Afficher la liste des pizzas avec une 2e colonne indiquant selon la quantité de champignons le message "Plus de 100g", "Moins de 100g" ou "Aucun". »*
<img src="../Medias/4.x/4.2-Pizzeria-requetes/R27.png" alt="Requête R27" style="zoom: 67%; float: right; margin-left: 40px;" />
<div style="clear: both;"></div>
