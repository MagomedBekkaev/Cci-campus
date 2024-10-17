<?php
$etudiants = [
    100 => "Magomed",
    200 => "Mansour",
    300 =>"Baisangour",
];

if(in_array("Magomed", $etudiants)) {
    echo "L'étudiant est présent";
};

echo "<br>";

if (array_key_exists(100, $etudiants)) {
    echo "La clé '100' se trouve dans le tableau";
};
echo "<br>";

$positionEtudiant = array_search("Magomed", $etudiants);
echo $positionEtudiant;
