<?php
// Expected parameters
$expected_params = ['name', 'email', 'nuits'];

// Check if all expected parameters are present
$missing_params = [];
foreach ($expected_params as $param) {
    if (!isset($_POST[$param]) || empty(trim($_POST[$param]))) {
        $missing_params[] = $param;
    }
}

if (!empty($missing_params)) {
    echo "Erreur: Les champs suivants sont manquants ou incorrects: " . implode(', ', $missing_params);
    exit;
}

// Validate email
$email = trim($_POST['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Erreur: L'adresse e-mail n'est pas valide.";
    exit;
}

// Validate number of nights
$nuits = (int)$_POST['nuits'];
if ($nuits <= 0) {
    echo "Erreur: Le nombre de nuits doit être supérieur à zéro.";
    exit;
}

// Validate name
$name = trim($_POST['name']);
if (empty($name)) {
    echo "Erreur: Le nom ne peut pas être vide ou contenir uniquement des espaces.";
    exit;
}

// Validate file upload
if (!isset($_FILES['fichier']) || $_FILES['fichier']['error'] != UPLOAD_ERR_OK) {
    echo "Erreur: Aucun fichier n'a été téléchargé ou une erreur s'est produite lors du téléchargement.";
    exit;
}

// Check file size (max 1MB)
if ($_FILES['fichier']['size'] > 1000000) {
    echo "Erreur: La taille du fichier ne doit pas dépasser 1 Mo.";
    exit;
}

// Check file extension
$allowed_extensions = ['png', 'jpg', 'jpeg', 'gif'];
$file_extension = pathinfo($_FILES['fichier']['name'], PATHINFO_EXTENSION);
if (!in_array(strtolower($file_extension), $allowed_extensions)) {
    echo "Erreur: Seuls les fichiers .png, .jpg, .jpeg et .gif sont autorisés.";
    exit;
}

// Check if uploads directory exists, create if not
$upload_dir = 'uploads';
if (!is_dir($upload_dir)) {
    if (!mkdir($upload_dir, 0777, true)) {
        echo "Erreur: Impossible de créer le répertoire de téléchargement.";
        exit;
    }
}

// Ensure the uploads directory is writable
if (!is_writable($upload_dir)) {
    echo "Erreur: Le répertoire de téléchargement n'est pas accessible en écriture.";
    exit;
}

// Move uploaded file to uploads directory
$target_file = $upload_dir . '/' . basename($_FILES['fichier']['name']);
if (!move_uploaded_file($_FILES['fichier']['tmp_name'], $target_file)) {
    echo "Erreur: Impossible de déplacer le fichier téléchargé.";
    exit;
}

// If all validations pass, display confirmation message
$name = htmlspecialchars($name);

echo "Réservation confirmée!<br>";
echo "Nom: $name<br>";
echo "Email: $email<br>";
echo "Nombre de nuits: $nuits<br>";
echo "Fichier téléchargé: $target_file<br>";
