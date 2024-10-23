// // Exercice 1
// const nombreSecret = Math.floor(Math.random() * 10) + 1;
// let nombreEntree
// while (nombreSecret != nombreEntree) {
//     nombreEntree = prompt("Deviner le nombre secret entre 1 et 10")
//     console.log(nombreSecret, nombreEntree)
//     if (nombreSecret < nombreEntree) {
//         console.log("Trop grand")
//     } else if ((nombreSecret > nombreEntree)) {
//         console.log("Trop petit")
//     } else if (isNaN(nombreEntree)) {
//         console.log("Incorrect")
//     } else  {
//         console.log("Félicitation")
//     }
// }

// // Exercice 2

// const nombre = prompt("Saisir un nombre")

// for (let i = 1; i <= 10; i++) {
//     console.log(nombre * i)
// }

// Exercice 3
// let num = prompt("Saisir un nombre pour le compte à rebours");

// do {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
//     let response = prompt("Souhaitez-vous recommencer le compte à rebours ? (oui/non)");
//     if (response.toLowerCase() === "oui") {
//         num = prompt("Saisir un nombre pour le compte à rebours");
//     } else {
//         console.log("Fin du compte à rebours.");
//         break;
//     }
// } while (true);

// Exercice 4
const numStart = prompt("Saisir un nombre")
const numEnd = prompt("Saisir un deuxième nombre")
let somme = 0

for(let i = numStart; i <= numEnd; i++) {
    if (i % 2 === 0) {
        somme += i
        
    } else {
        // console.log("jsp")
    }
    console.log(somme)
}