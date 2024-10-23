<?php
// Démarrer la session
session_start();

// Créer des variables de session
$_SESSION['nom'] = 'Dupont';
$_SESSION['prenom'] = 'Jean';

// Vous pouvez ajouter d'autres variables de session selon vos besoins
$_SESSION['email'] = 'jean.dupont@example.com';
$_SESSION['role'] = 'utilisateur';

// Afficher les variables de session pour vérification
echo 'Nom: ' . $_SESSION['nom'] . '<br>';
echo 'Prénom: ' . $_SESSION['prenom'] . '<br>';
echo 'Email: ' . $_SESSION['email'] . '<br>';
echo 'Rôle: ' . $_SESSION['role'] . '<br>';
?>