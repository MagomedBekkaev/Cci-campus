<?php
// Demmarer une session
session_start();

// Supprimer les variables de session
unset($_SESSION['isLoggedIn']);

// Supprimer la session
session_destroy();

// Supprimer le cookie
if (isset($_COOKIE['username'])) {
    setcookie('username', '', time() - 3600, '/');
}

// Rediriger vers la page de connexion
header('Location: login.php');
exit();
?>