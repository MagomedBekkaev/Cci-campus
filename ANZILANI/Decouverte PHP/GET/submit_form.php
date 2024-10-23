<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données envoyées par le formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $age = htmlspecialchars($_POST['age']);

    // Afficher les informations saisies par l'utilisateur
    echo "<h1>Informations soumises</h1>";
    echo "<p><strong>Nom:</strong> $nom</p>";
    echo "<p><strong>Prenom:</strong> $prenom</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Age:</strong> $age</p>";
} else {
    echo "Aucune donnée reçue.";
}
