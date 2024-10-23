<?php
// phpinfo();
// Demander à l'utilisateur d'entrer un nombre entier
echo "Entrez un nombre entier: ";
$handle = fopen ("php://stdin","r");
$number = intval(fgets($handle));

// Générer et afficher la table de multiplication
for ($i = 1; $i <= 10; $i++) {
    $result = $number * $i;
    
    // Utiliser une instruction switch pour formater l'affichage
    switch ($i) {
        case 1:
            echo "$number x $i = $result\n";
            break;
        case 2:
            echo "$number x $i = $result\n";
            break;
        case 3:
            echo "$number x $i = $result\n";
            break;
        case 4:
            echo "$number x $i = $result\n";
            break;
        case 5:
            echo "$number x $i = $result\n";
            break;
        case 6:
            echo "$number x $i = $result\n";
            break;
        case 7:
            echo "$number x $i = $result\n";
            break;
        case 8:
            echo "$number x $i = $result\n";
            break;
        case 9:
            echo "$number x $i = $result\n";
            break;
        case 10:
            echo "$number x $i = $result\n";
            break;
        default:
            echo "Erreur dans la génération de la table de multiplication.\n";
            break;
    }
}


// Créer un tableau associatif avec des noms d'étudiants et leurs notes
$students = [
    "Alice" => 85,
    "Bob" => 58,
    "Charlie" => 92,
    "Diana" => 76,
    "Eve" => 64
];

// Parcourir le tableau et déterminer la mention pour chaque étudiant
foreach ($students as $name => $grade) {
    switch (true) {
        case ($grade >= 0 && $grade <= 59):
            $mention = "Échec";
            break;
        case ($grade >= 60 && $grade <= 79):
            $mention = "Passable";
            break;
        case ($grade >= 80 && $grade <= 89):
            $mention = "Bien";
            break;
        case ($grade >= 90 && $grade <= 100):
            $mention = "Excellent";
            break;
        default:
            $mention = "Note invalide";
            break;
    }
    echo "$name a obtenu la mention : $mention\n";
}
?>