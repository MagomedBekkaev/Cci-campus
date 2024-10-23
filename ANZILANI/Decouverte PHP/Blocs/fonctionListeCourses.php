<?php

function afficherListe($listeCourses) {
    foreach ($listeCourses as $course) {
        echo "$course<br>";
    }
}

function ajouterElement($listeCourses, $nouvelElement) {
    if (in_array($nouvelElement, $listeCourses)) {
        echo "L'élément '$nouvelElement' est déjà présent dans la liste.<br>";
    } else {
        $listeCourses[] = $nouvelElement;
        echo "L'élément '$nouvelElement' a été ajouté à la liste.<br>";
    }
    return $listeCourses;
}

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

