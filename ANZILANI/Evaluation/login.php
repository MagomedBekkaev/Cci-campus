<?php

// declarer un tableau d'utilisateurs
$users = [
    [
        "username" => "alice",
        "password" => "password123"
    ],
    [
        "username" => "bob",
        "password" => "456"
    ],
    [
        "username" => "charlie",
        "password" => "myPass789"
    ]
];

// verifier si la methode de requete est POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // recuperer les valeurs de l'utilisateur
    $username = $_POST['username'];
    $password = $_POST['password'];
    $isLoggedIn = false;
    // parcourir le tableau d'utilisateurs
    foreach ($users as $user) {
        // verifier si le nom d'utilisateur et le mot de passe correspondent
        if ($user['username'] == $username && $user['password'] == $password) {
            // demarrer une session
            session_start();
            // definir une variable de session
            $_SESSION['isLoggedIn'] = true;
            $_SESSION['username'] = $username;
            // creer un cookie qui dure 1 jour
            setcookie('username', $username, time() + 3600*24);
            // definir une variable pour indiquer que l'utilisateur est connecté
            $isLoggedIn = true;
            break;
        }
    }
    // afficher un message de connexion reussie ou echouée
    if ($isLoggedIn) {
        echo "Login réussi.";
        header("Location: welcome.php");
        exit;
    } else {
        echo "Le nom d'utilisateur ou le mot de passe est incorrect.";
    }
}
?>
<!-- Formualaire de connexion -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <form method="post" action="login.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Se connecter</button>
    </form>
</body>
</html>