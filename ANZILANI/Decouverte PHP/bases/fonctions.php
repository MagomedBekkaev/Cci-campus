<?php

// // Exercice 1  
// $texte = "Ceci est un exemple de paragraphe. Ce paragraphe est utilisé pour démontrer l'utilisation de str_replace.";
// $mot_a_remplacer = "paragraphe";
// $nouveau_mot = "texte";
// $texte_modifie = str_replace($mot_a_remplacer, $nouveau_mot, $texte);

// echo $texte_modifie;

// echo "<br>";

// // Exercice 2
// // Obtenir la date actuelle avec date
// $date_actuelle = date('Y-m-d H:i:s');
// echo "Date et heure actuelles : " . $date_actuelle . "\n";

// echo "<br>";

// // Exercice 3
// // Calcul de la somme d'un tableau avec array_sum
// $tableau = [1, 2, 3, 4, 5];
// $somme = array_sum($tableau);
// echo "La somme des éléments du tableau est : " . $somme . "\n";

// echo "<br>";
// // Exercice 4
// // Utiliser la fonction strlen() pour déterminer la longueur d'une chaîne prédéfinie
// $chaine = "Bonjour à tous";
// $longueur = strlen($chaine);
// echo "La chaîne contient " . $longueur . " caractères.\n";

// echo "<br>";

// // Exercice 5
// // Créer deux tableaux avec des éléments communs et des éléments uniques
// $tableau1 = ["pomme", "banane", "cerise", "datte", "figue"];
// $tableau2 = ["cerise", "datte", "figue", "raisin", "kiwi"];
// echo "<br>";

// // Fusionner les deux tableaux en un seul avec array_merge
// $tableau_fusionne = array_merge($tableau1, $tableau2);
// echo "<br>";

// // Éliminer les doublons dans le tableau fusionné avec array_unique
// $tableau_unique = array_unique($tableau_fusionne);
// echo "<br>";

// // Afficher le tableau résultant après suppression des doublons
// echo "Tableau après suppression des doublons : ";
// print_r($tableau_unique);

// echo"<br>";
// // Exercice 6
// $nom = "Alice";
// $age = 20;
// $note = 15.75;

// $message = sprintf("L'étudiant %s a %d ans et a obtenu une note de %.2f.", $nom, $age, $note);
// echo $message;

// echo "<br>";
// // Exercice 7
// function afficherBienvenue() {
//     echo "Bienvenue à la librairie !";
// }

// afficherBienvenue();

// echo "<br>";

// // Exercice 8
// function calculerPrixTotal($prixUnitaire, $quantite, $remise) {
//     $prixTotalSansRemise = $prixUnitaire * $quantite;
//     $montantRemise = ($prixTotalSansRemise * $remise) / 100;
//     $prixTotalAvecRemise = $prixTotalSansRemise - $montantRemise;
//     return $prixTotalAvecRemise;
// }

// // Appels de la fonction avec différentes valeurs
// echo "Prix total avec remise : " . calculerPrixTotal(100, 2, 10) . " €<br>";
// echo "Prix total avec remise : " . calculerPrixTotal(50, 5, 20) . " €<br>";
// echo "Prix total avec remise : " . calculerPrixTotal(200, 1, 5) . " €<br>";


// Exercice 9 // Liste de course 

$listeCourses = ["Pain", "Lait", "Oeufs", "Papie toillete"];
function afficherCourses($listeCourses) {
    foreach ($listeCourses as $course) {
        echo "$course<br>";
    }
}

afficherCourses($listeCourses);

function ajouterElement($listeCourses, $nouvelElement) {
    if (in_array($nouvelElement, $listeCourses)) {
        echo "L'élément '$nouvelElement' est déjà présent dans la liste.<br>";
    } else {
        $listeCourses[] = $nouvelElement;
        echo "L'élément '$nouvelElement' a été ajouté à la liste.<br>";
    }
    return $listeCourses;
}

$listeCourses = ajouterElement($listeCourses, "Beurre");
$listeCourses = ajouterElement($listeCourses, "Lait");
afficherCourses($listeCourses);

echo "<br>";
function supprimerElement($listeCourses, $elementASupprimer) {
    if (in_array($elementASupprimer, $listeCourses)) {
        $index = array_search($elementASupprimer, $listeCourses);
        unset($listeCourses[$index]);
        echo "L'élément '$elementASupprimer' a été supprimé de la liste.<br>";
    } else {
        echo "L'élément '$elementASupprimer' n'a pas été trouvé dans la liste.<br>";
    }
    return $listeCourses;
}

$listeCourses = supprimerElement($listeCourses, "Lait");
$listeCourses = supprimerElement($listeCourses, "Chocolat");
afficherCourses($listeCourses);

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
afficherCourses($listeCourses);