<?php
// Demarrer une session
session_start();

// Verifier si l'utilisateur est connecté
if (!isset($_SESSION['isLoggedIn']) || $_SESSION['isLoggedIn'] !== true) {
    // sinon rediriger vers la page de connexion
    header("Location: login.php");
    exit;
}

// Afficher un message de bienvenue
echo "Bienvenue, " . htmlspecialchars($_SESSION['username']) . "!";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
</head>
<body>
    <h1>Bienvenue sur la page d'accueil!</h1>
    <form action="logout.php" method="post">
        <button type="submit">Déconnexion</button>
    </form>
</body>
</html>