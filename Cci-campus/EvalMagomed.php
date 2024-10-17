<?php
// Ceci est un commentaire, n'est pas une ligne de code
// Exercice 1
$nom = "Magomed";
$age = 22;
// echo pour afficher les valeurs des variables $nom et $age dans un echo
echo "Bonjour, je m'appelle $nom et j'ai $age ans. \n";

// Saut de ligne
echo "<br>"; 

// Exercice 2

// Afficher un texte en dependance de la valeur dans la variable $note
$note = 20;
if ($note >= 18){
    echo "Excellent";
    // le && sert à dite "ET" pour donner 2 conditions, dans ce cas la note doit obligatoirement être entre 14 ET 17 inclus
} elseif($note >= 14 && $note <= 17) { 
    echo "Bien";
} elseif($note >= 10 && $note >= 13) {
    echo "Moyen";
} elseif ($note < 10) {
    echo "Insuffisant";
} else {
    echo "Note pas valide";
}

echo "<br>";
// Exercice 3

$jour = "Mercredi";
// Meme principe que le IF ELSE
switch ($jour) {
    case 'Lundi':
        echo "Début de la semaine";
        // on utilise break pour sortir de la boucle si le case correspond à la valeur de la variable
        break;
    case 'Mercredi':
        echo "Millieu de la semaine";
        break;
    case "Verdredi":
        echo "Fin de la semaine";
        break;
    case 'Mardi' || "Jeudi":
        echo "Journée normale";
        // instruction par défaut
    default:
        echo "Jour non valide";
        break;
}
echo "<br>";

// Exercice 4
// Declaration d'un tableau
$produits = [
    "Banane" => 1.50,
    "Pomme" => 2.00,
    "Orange" => 1.75,
];

// Parcourir le tableu avec une boucle foreach, récuperer chaque élements du tableau et les afficher sur écran
foreach ($produits as $produit => $value) {
    echo "Produit: $produit, Prix: $value <br>";
};
echo "<br>";

// Exercice 5

$nombres = [3, 10, 7, 15, 2];

// Parcourir chque élement du tableu et les multitpier par eux meme pour avoir un nombre carré.
foreach ($nombres as $nombre) {
    $nombreCarre = $nombre * $nombre;
    echo "Le carré de $nombre est $nombreCarre <br>";
// Il faut bien mettre des ';' a la fin de la chaque ligne (presque)
};
?>