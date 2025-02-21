# REQUETER AVEC FETCH

## Utilisation de fetch et des Promises

```javascript
fetch("url")
.then(function(response){

  if(!response.ok){
    throw new Error("message d'erreur")
  }

  return response.json()
})
.then(function(data){

  if('condition'){
    throw new Error("message d'erreur")
  }

  console.log(data)
})
.catch(function(error){
  console.log(error.message)
})
.finaly(function(){
  console.log("Opération terminée.")
})
```

1. `fetch` va chercher quelque chose en suivant une URL, puis va retourner une `Promise`.

2. `then` récupère la `Promise` renvoyée par `fetch`. Elle prend en paramètre une fonction de rappel qui sera exécutée dès que quelque chose est reçu. Cette fonction de rappel prend en paramètre un argument qui contiendra la valeur de la `Promise`.

3. `response` retourne un objet avec plusieurs propriétés fournissant  des informations sur la réponse: 

   - `status`  retourne le code status (200, 404, 500 ...)
   - `ok` retourne `true` ou `false` selon que l'API a renvoyé des données ou non
   - `body` retourne les données de l'API
   
4. Ne pas oublier de traiter les cas d'erreur en lançant  une `Error` avec `throw` qui sera capturée  par le bloc `catch`

5. `json()` C'est une méthode de l'objet `Response`. Elle permet de convertir les données du `body` en format `JSON` et les retourne dans une `Promise`.

```javascript
 respone.json()
```

6. Comme `json()` retourne une `Promise`, il faut utiliser un autre bloc `then`pour traiter cette `Promise`retournée

7. On effectue le traitement sur les données réélles cette fois-ci, sans oublier de traiter les cas d'erreur

8. `catch` ne traite que les `Promies` rejetée. Cependant, il est possible qu'une `Promise` soit `Fulfilled`, mais que les données ne soient pas trouvées `(response.ok = false)`. Dans ce cas, il n'y a pas d'erreur, mais il faut gérer cela manuellement avec `throw`.

9. `finaly`: ce bloc est excuté dans tous les cas

## Utilisation de async / await

L'utilisation de `async` et `await` permet d'écrire du code asynchrone de manière plus lisible et compréhensible.

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Échec de la requête");
    }

    const data = await response.json();
    
    console.log("Données récupérées :", data);

  } catch (error) {

    console.log("Erreur :", error.message);

  } finally {

    console.log("Opération terminée.");

  }
}

```

1. La fonction `fetchData` est déclarée avec `async`, ce qui signifie qu'elle peut utiliser `await` à l'intérieur.

2. `await fetch(url)` permet d'attendre que la requête HTTP se termine avant de continuer l'exécution du code.

3. Si la réponse n'est pas ok, une erreur est levée avec `throw`, ce qui déclenche immédiatement le bloc `catch`.

4. `await response.json()` est utilisé pour attendre que les données soient converties en JSON.

5. En cas d'erreur, le bloc `catch` capture l'exception et affiche un message.

6. `finally` est exécuté quoi qu'il arrive, permettant d'exécuter un code de nettoyage ou d'affichage de statut.

### Avantages de async / await

- Améliore la lisibilité du code en évitant les `then` imbriqués.
- Facilite la gestion des erreurs grâce au `try/catch`.
