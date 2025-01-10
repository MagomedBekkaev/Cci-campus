const fs = require("fs")

// ex 1
const data = fs.readFileSync('text-1.txt', 'utf-8')
console.log(data);

// ex 2
fs.readFile("text-2.txt", "utf-8", (err, data) => {
    if(err) {
        console.log('Erreurr de lecture:', err);
        return
    }
    console.log(data);
})

// ex 3

fs.writeFileSync('text-3.txt', 'Node.js exécute le moteur JavaScript V8, le cœur de Google Chrome, en dehors du navigateur.', 'utf-8' )

// ex 4

fs.writeFile('output_async.txt', `Une application Node.js s'exécute dans un processus unique, sans créer de nouveau thread pour chaque requête`, 'utf-8', (err) => {
        if(err) {
            console.log(`Erreur d'écriture`, err);
            return
        }
        console.log('Ecriture asyncrone réussie');
    })

// ex 5

fs.readFile("source.txt", "utf-8", (err, data) => {
    if(err) {
        console.log('Erreurr de lecture:', err);
        return
    }
    console.log(data);

    fs.writeFile('copie.txt', data, 'utf-8', (err) => {
        if(err) {
            console.log(`Erreur d'écriture`, err);
            return
        }
        console.log('Ecriture asyncrone réussie');
    })
})



