# TP : Rendu HTML avec Node.js

## Objectif 

Le but de ce TP est de créer un site web dynamique à partir de données stockées dans un fichier JSON, en utilisant des templates HTML. Vous allez découper du HTML statique en templates réutilisables, mettre en place un serveur Node.js, et utiliser ces templates pour générer des pages dynamiques.

 ## Structure de depart

```text
|_ html/
        |_ article.html
        |_ index.html
|_ images/
|_ styles/
        |_ styles.css
|_ templates/
|_ utils/
        |_ serveStaticFile.js
|_ data.json
|_ server.js
```
- **`html/article.html`** : Ce fichier contient le code complet de la page de détails d'un article. Il devra être découpé en un template réutilisable.


- **`html/index.html`** : Ce fichier contient le code complet de la page d'accueil du site. Il sera également découpé pour être utilisé dans des templates dynamiques.

- **`images/`** : Ce dossier contient toutes les images utilisées sur le site.

- **`styles/styles.css`** : Ce fichier CSS gère le style global de votre site web.

- **`templates/`** : Ce dossier est actuellement vide, mais il servira à stocker les fichiers templates HTML que vous allez créer pour générer les pages dynamiques.

- **`utils/serveStaticFile.js`** : Ce fichier contient une fonction utilitaire pour servir des fichiers statiques (images et CSS).

- **`data.json`** : Ce fichier JSON contient les données des articles qui seront utilisés pour générer dynamiquement le contenu des pages.

- **`server.js`** : C'est le fichier principal du projet qui implémente la logique du serveur Node.js et sert les pages HTML dynamiques.

## Etapes 1 : Découper le HTML en templates réutilisables

L'objectif ici est de transformer le code HTML statique en templates réutilisables qui seront injectés dynamiquement dans les pages. Les fichiers `index.html` et `article.html` doivent être découpés en différentes parties.

### 1. Créer un template pour les cartes d'articles
- Ouvrez le fichier `html/index.html` et localisez le code HTML qui représente une carte. 

- Dans le dossier `templates/`, créez un fichier `card-template.html`et collez le code HTML qui représente une carte. 

- Dans `card-template.html`, repérez les données correspondant à un article, tel que le titre, l'extrait, l'auteur etc... et remplacer ces informations par des marqueurs génériques qui seront remplacés dynamiquement dans `server.js` :

    - Titre : `{%TITLE%}`

    - Auteur : `{%AUTHOR%}`

    - Avatar  : `{%AVATAR%}`

    - Date de publication : `{%DATE%}`

    - Image : `{%IMAGE%}`

    - Extrait : `{%EXCERPT%}`

    - ID : `{%ID%}` (sera utilisé pour générer un lien vers la page de détails de l'article)

Ce fichier sera utilisé pour générer plusieurs cartes d'articles dans la page d'accueil.

### 2.  Créer un template pour la page d'accueil

- Identifiez la structure globale de la page dans html/index.html, en dehors des cartes d'articles.

-  Dans le dossier `templates/`, créez un fichier `home-template.html` où vous placerez cette structure.

- Dans `home-template.html`, remplacez l'endroit où les cartes d'articles apparaissent par le placeholder `{%ARTICLES_LIST%}`. Ce placeholder sera remplacé par la liste des articles générés dynamiquement dans `server.js`.

### 3. Créer un template pour la page de détails d'article

- Ouvrez le fichier `html/article.html` et identifiez la structure de la page de détails d'un article.

- Dans le dossier `templates/`, créez un fichier `details-template.html`. Ce fichier contiendra la structure HTML d'une page d'article individuel.

- Remplacez les informations spécifiques à chaque article (titre, contenu, image, auteur, etc.) par des placeholders :

    - Titre : `{%TITLE%}`

    - Contenu : `{%CONTENT%}`

    - Auteur : `{%AUTHOR%}`

    - Avatar  : `{%AVATAR%}`

    - Date de publication : `{%DATE%}`

    - Image : `{%IMAGE%}`  

## Etape 2 : Implémentation dans server.js

### 1. Charger les fichiers templates et les données

- Utilisez `fs.readFileSync` dans le fichier `server.js` pour charger le contenu des fichiers `card-template.html`, `home-template.html`, et `details-template.html`. Vous devrez aussi charger le fichier `data.json`, qui contient les informations de chaque article.

Vous devrez charger chaque fichier HTML une seule fois lors du démarrage du serveur et les stocker dans des variables pour les utiliser dans les routes.

- Une fois le fichier `data.json` chargé, utilisez `JSON.parse` pour convertir le contenu JSON en un objet JavaScript. Chaque article dans ce fichier a des propriétés comme id, `title`, `author`, `image`, `content`, etc. qui seront utilisées pour remplir les templates.

### 2. Création des routes

- Route pour la page d'accueil `/`

    - Lorsque l'utilisateur accède à la racine du site, le serveur doit générer dynamiquement la page d'accueil.

    - Parcourez les données des articles dans `data.json`. Pour chaque article, utilisez le fichier `card-template.html` et remplacez les placeholders par les valeurs spécifiques de l'article (titre, image, auteur, etc.). Utilisez la méthode `map` pour créer un tableau contenant toutes les cartes d'articles, à chaque tour de boucle remplacez les marqueurs par les données correspondante. Puis convertissez ce tableau en chaîne de caractères avec la méthode `join`.

    - Remplacez le placeholder `{%ARTICLES_LIST%}` dans `home-template.html` par la liste des cartes générées.

    - Après avoir inséré les cartes dans le template de la page d'accueil, envoyez le contenu final au navigateur de l'utilisateur.

### 3. Route pour la page de détails d'article : `/article?id={ID}`

-  Lorsque l'utilisateur clique sur un article, le serveur doit afficher la page de détails pour cet article.

- Utilisez l'ID de l'article fourni dans l'URL pour rechercher l'article correspondant dans `data.json` avec la méthode `find`.

- Une fois l'article trouvé, remplacez les placeholders dans `details-template.html` par les valeurs spécifiques de cet article (titre, contenu, auteur, etc.).

- Envoyez la page de détails complétée au navigateur.

### 4. Gérer les routes qui n'existent pas

- Si l'utilisateur tente d'accéder à une route non définie, répondez avec une page d'erreur 404.

## Résultat attendu

À la fin de ce TP, vous aurez :

- Un site web avec une page d'accueil dynamique listant les articles sous forme de cartes.

- Une page de détails pour chaque article, affichant les informations complètes.

- Une gestion des erreurs 404.