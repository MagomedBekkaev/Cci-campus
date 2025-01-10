const http = require("http");
const path = require("path"); // Le module 'path' est utilisé pour gérer et manipuler les chemins de fichiers et répertoires
const url = require("url"); // Le module 'url' permet de traiter et analyser les URL, en extrayant facilement les différentes parties comme le chemin, les paramètres de requête, etc.
const url = require("url"); 
const serveStaticFile = require("./utils/serveStaticFile");


const PORT = process.env.PORT || 4100;

const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Analyse l'URL de la requête pour extraire les paramètres sous forme d'objet, par exemple, si l'URL est "/article?id=1", 
    // 'params' contiendra {id: "1"} en utilisant la méthode 'url.parse()'. Le second argument 'true' permet de convertir automatiquement la chaîne de caractères des paramètres de requête en un objet.
    const {query: params} = url.parse(pathName, true);

    if (pathName.endsWith(".css")) { // Vérifie si l'URL demandée se termine par ".css", ce qui indique une requête pour un fichier CSS
        const cssPath = path.join(__dirname, pathName); // Utilise 'path.join()' pour créer un chemin absolu du fichier CSS demandé en combinant le répertoire actuel (__dirname) et le chemin demandé
        serveStaticFile(cssPath, "text/css", res); // Sert le fichier CSS avec le bon type MIME ("text/css")
        return; // Stoppe l'exécution pour cette requête une fois le fichier CSS envoyé
    }

    if (pathName.startsWith("/images/")) { // Vérifie si l'URL commence par "/images/", indiquant une requête pour un fichier d'image
        const imgPath = path.join(__dirname, pathName); // Construit un chemin absolu vers le fichier image demandé en combinant le répertoire actuel et le chemin de l'image
        const ext = path.extname(imgPath).toLowerCase(); // Utilise 'path.extname()' pour extraire l'extension du fichier (ex : ".jpg") et la convertit en minuscule pour une gestion uniforme
        const mimeTypes = { // Associe les extensions de fichiers d'image à leurs types MIME correspondants
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png'
        };
        // Sert le fichier image avec le type MIME correspondant à son extension, ou 'application/octet-stream' par défaut si l'extension n'est pas reconnue
        serveStaticFile(imgPath, mimeTypes[ext] || 'application/octet-stream', res);
        return; // Termine l'exécution pour cette requête une fois le fichier image envoyé
    }

    // ***** ECRIVEZ VOTRE CODE ICI *****

})

server.listen(PORT, () => {
    console.log(`Le serveur est prêt et écoute sur le port ${PORT}`)
})