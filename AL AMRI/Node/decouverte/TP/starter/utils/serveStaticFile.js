const fs = require("fs");

/**
 * Fonction pour servir des fichiers statiques (CSS, images, etc.) au client.
 *
 * @param {string} filePath - Le chemin absolu du fichier à servir.
 * @param {string} contentType - Le type MIME du fichier (ex : 'text/css' pour CSS, 'image/jpeg' pour une image JPEG).
 * @param {object} res - L'objet réponse (response) HTTP utilisé pour envoyer la réponse au client.
 */
const serveStaticFile = (filePath, contentType, res) => {
    // Lit le fichier spécifié par 'filePath'
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Si une erreur se produit (fichier introuvable, par exemple), on envoie une réponse 404
            res.writeHead(404, { 'Content-Type': 'text/plain' }); // Définit le code de statut HTTP à 404 (Not Found) et indique que le contenu est du texte brut
            res.end('404 - File Not Found'); // Envoie le message d'erreur au client
        } else {
            // Si la lecture du fichier réussit, on envoie une réponse 200 (OK)
            res.writeHead(200, { 'Content-Type': contentType }); // Définit le code de statut HTTP à 200 et spécifie le type de contenu (par exemple, 'text/css' ou 'image/jpeg')
            res.end(content); //// Envoie le contenu du fichier au client
        }
    });
};

module.exports = serveStaticFile; // Exporte la fonction pour qu'elle puisse être utilisée dans d'autres fichiers