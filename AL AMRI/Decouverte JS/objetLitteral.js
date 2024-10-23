// // Exercice 1
// const fruits = ["pomme", "banane", "orange"]
// const [fruit1, fruit2, fruit3] = fruits
// console.log(fruit1, fruit2, fruit3)

// // Exercice 2
// const voiture = {
//     marque: "Porche",
//     modele: "911"
// }
// const {marque, modele} = voiture;
// console.log(marque, modele)

// // Exercice 3
// const nombres = [5, 10, 15]
// const newNombres = [...nombres, 20]
// console.log(newNombres);

// // Exercice 4
// const ordinateur = {
//     marque: "Honor",
//     modele: "MagicBook 16"
// }

// const newPc = {...ordinateur, annee: "2022"}
// console.log(newPc);

// // Exercice 5
// const etudiants = [
//     {nom: "Léo", age: 22, note: 15},
//     {nom: "Magomed", age: 22, note: 20},
//     {nom: "Sophie", age: 23, note : 17}
// ];

// etudiants.forEach(element => {
//     console.log(element);
// });

// // Exercice 6
// etudiants.push({nom: "Jules", age: 21, note: 14})
// console.log(etudiants);

// // Exercice 7
// console.log(etudiants.findIndex(etudiant => etudiant.nom == "Sophie"));
// const indexSophie = etudiants.findIndex(etudiant => etudiant.nom == "Sophie")
// const sophie = etudiants[indexSophie]
// sophie.note = 16
// console.log(sophie);
// etudiants[indexSophie] = sophie
// console.log(etudiants);

// // Exercice 8
// console.log(etudiants.findIndex(etudiant => etudiant.nom == "Léo"));
// const indexLeo = etudiants.findIndex(etudiant => etudiant.nom == "Léo")
// console.log(etudiants.slice(indexLeo + 1));

// // Exercice 9
// console.log(etudiants.findIndex(etudiant => etudiant.nom == "Magomed"));
// const indexMagomed = etudiants.findIndex(etudiant => etudiant.nom == "Magomed")
// const Magomed = etudiants[indexMagomed]
// console.log(Magomed);

// // Exercice 10
// etudiants.sort(function (a, b) {
//     return b.note - a.note;
// });
// console.log(etudiants);

// // Exercice 11
// const bonneNote = etudiants.filter(etudiant => etudiant.note > 14)
// console.log(bonneNote);

///////////////////////////////////////////////////////////////////////
// EXERCICE OBJET LITTERAL PARTIE 2
///////////////////////////////////////////////////////////////////////

const taches =[ 
    {id: 1, nom: "Déclarer un objet taches", description: "Il faut déclarer un tableau avec des objets", termine: 1},
    {id: 2, nom: "Courses", description: "Acheter du pain", termine: 0},
    {id: 3, nom: "Projet RAN", description: "Faire l'appli web pour le projet CDA RAN", termine: 0}
]

function trouverTacheParId(message = "Entrez l'ID de la tâche:") {
    const id = parseInt(prompt(message));
    const tache = taches.find(tache => tache.id === id);
    if (tache) {
        return tache;
    } else {
        console.log("Aucune tâche trouvée avec cet ID.");
        return null;
    }
}

function afficherListe() {
    console.log(taches);
}

function creerTache() {
    const id = taches.length ? taches[taches.length - 1].id + 1 : 1;
    const nom = prompt("Entrez le nom de la tâche:");
    const description = prompt("Entrez la description de la tâche:");
    const termine = 0; 

    const nouvelleTache = { id, nom, description, termine };
    taches.push(nouvelleTache);
    console.log("Nouvelle tâche créée:", nouvelleTache);
}

function modifierTache() {
    const tache = trouverTacheParId("Entrez l'ID de la tâche à modifier:");
    if (tache) {
        const nom = prompt("Entrez le nouveau nom de la tâche:");
        const description = prompt("Entrez la nouvelle description de la tâche:");
        tache.nom = nom;
        tache.description = description;
        console.log("Tâche modifiée:", tache);
    }
}

function supprimerTache() {
    const tache = trouverTacheParId("Entrez l'ID de la tâche à supprimer:");
    if (tache) {
        const index = taches.indexOf(tache);
        taches.splice(index, 1);
        console.log(`La tâche avec l'ID ${tache.id} a été supprimée.`);
        console.log(taches);
    }
}

function tacheTerminee() {
    const tache = trouverTacheParId("Entrez l'ID de la tâche à marquer comme terminée:");
    if (tache) {
        tache.termine = 1;
        console.log(`La tâche avec l'ID ${tache.id} est maintenant marquée comme terminée.`);
    }
}

function afficherTacheSpecifique() {
    const tache = trouverTacheParId("Entrez l'ID de la tâche spécifique à afficher:");
    if (tache) {
        console.log(tache);
    }
}

function dupliquerTache() {
    const tache = trouverTacheParId("Entrez l'ID de la tâche à dupliquer:");
    if (tache) {
        const nouvelleTache = {
            ...tache,
            id: taches[taches.length - 1].id + 1
        };
        taches.push(nouvelleTache);
        console.log("Tâche dupliquée avec succès:", nouvelleTache);
        console.log("Liste des tâches mise à jour:", taches);
    }
}

function afficherNbreTacheComplete() {
    const tachesCompletees = taches.filter(tache => tache.termine === 1);
    console.log("Nombre de tâches complétées:", tachesCompletees.length);
}

function afficherNbreTacheAFaire() {
    const tachesaFaire = taches.filter(tache => tache.termine === 0);
    console.log("Nombre de tâches à faire:", tachesaFaire.length);
}

function afficherMenu() {
    let action;
    while (action !== "10") {
        console.log("Entrer un chiffre correspondant au menu que vous souhaitez ouvrir: ");
        action = prompt("1. Afficher la liste de tâches; 2. Créer une nouvelle tâche; 3. Modifier une tâche existante; 4. Supprimer une tâche; 5. Marquer une tâche comme terminée; 6. Afficher une tâche spécifique; 7. Dupliquer une tâche; 8. Afficher le nombre de tâches complétées; 9. Afficher le nombre de tâches à faire; 10. Quitter le programme");
        console.log(action);
        switch (action) {
            case "1":
                afficherListe();
                break;
            case "2":
                creerTache();
                break;
            case "3":
                modifierTache();
                break;
            case "4":
                supprimerTache();
                break;
            case "5":
                tacheTerminee();
                break;
            case "6":
                afficherTacheSpecifique();
                break;
            case "7":
                dupliquerTache();
                break;
            case "8":
                afficherNbreTacheComplete();
                break;
            case "9":
                afficherNbreTacheAFaire();
                break;
            case "10":
                console.log("Vous avez choisi de quitter le programme. Au revoir !");
                break;
            default:
                console.log("Action invalide. Entrez un chiffre entre 1 et 10.");
                break;
        }
    }
}
afficherMenu();