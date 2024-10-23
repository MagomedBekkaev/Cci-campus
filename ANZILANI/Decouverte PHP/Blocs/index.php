<?php 
require_once("fonctionListeCourses.php");
require_once("listeCourses.php");

// Ajouter un élément qui n'est pas déjà dans la liste
$listeCourses = ajouterElement($listeCourses, "Fromage");

// Tenter d'ajouter un élément qui existe déjà
$listeCourses = ajouterElement($listeCourses, "Pain");

// Supprimer un élément qui existe dans la liste
$listeCourses = supprimerElement($listeCourses, "Oeufs");

// Tenter de supprimer un élément qui n'est pas dans la liste
$listeCourses = supprimerElement($listeCourses, "Chocolat");

// Afficher la liste après chaque action pour montrer les modifications
echo "État final de la liste de courses :<br>";
afficherListe($listeCourses);