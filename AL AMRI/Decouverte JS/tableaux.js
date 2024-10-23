// // Exercice 1
// const fruits = ["pomme", "banane", "orange"];
// fruits.push("fraise")
// fruits.unshift("kiwi")
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// // Exercice 2
// const nombres = [10, 15, 20, 25, 30, 35, 40]
// console.log(nombres.includes(25))
// console.log(nombres.indexOf(30))
// console.log(nombres.slice(2, 5))

// // Exercice 3
// const noms = ["Alice", "Bob", "Charlie", "David", "Eve"]

// noms.forEach(element => {
//     console.log(element)
// });

// const nomsEnMajuscules = noms.map(nom => nom.toUpperCase());
// console.log(nomsEnMajuscules)

// // Exercice 4
// const ages = [8, 12, 15, 17, 20, 22, 27]

// const majeurs = ages.filter((age) => age > 18)
// console.log(majeurs)

// const initialValue = 0;
// const somme = ages.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)
// console.log(somme)

// // Exercice 5
// const scores = [60, 85, 90, 75, 55, 95, 80]

// const sup90 = (score) => score > 90
// console.log(scores.some(sup90))

// const toutSup50 = (currentValue) => currentValue > 50
// console.log(scores.every(toutSup50))


//////////////////////////////////////////////////////
// TABLEAUX 6.02
//////////////////////////////////////////////////////

// Exercice 1

const transactions = [200, 400, -30, -50, -124.58];
let devise = "€";

function calculerSolde() {
    const initialValue = 0;
    const solde = transactions.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return solde;
}

function afficherSolde(solde = calculerSolde(), currentDevise = devise) {
    console.log(`Votre solde actuel: ${solde} ${currentDevise}`);
}

// Exercice 2 : Fonction pour faire un virement
function faireVirement() {
    const montantVirement = parseFloat(prompt("Saisir le montant de virement"));
    transactions.push(montantVirement);
    console.log(`Virement de ${montantVirement}${devise} est effectué`);
    afficherSolde();
}

// Exercice 3 : Fonction pour faire un retrait
function faireRetrait() {
    const solde = calculerSolde();
    const montantRetrait = parseFloat(prompt("Saisir le montant de retrait"));

    if (solde > montantRetrait) {
        transactions.push(-montantRetrait);
        console.log(`Retrait de ${montantRetrait}${devise} est effectué`);
        afficherSolde();
    } else {
        console.log("Solde insuffisant. Retrait refusé.");
    }
}

// Exercice 4 : Afficher les transactions
function afficherTransactions() {
    transactions.forEach(element => {
        element > 0 ? console.log(`Virement de ${element}${devise}`) : console.log(`Retrait de ${element}${devise}`);
    });
}

// Exercice 5 : Afficher les statistiques des transactions
function afficherStatistiques() {
    const virements = transactions.filter((transaction) => transaction > 0);
    const retraits = transactions.filter((transaction) => transaction < 0);
    const virementCumules = virements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const retraitsCumules = retraits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Statistiques des transactions:");
    console.log(`Nombre de virements: ${virements.length} | Montant total des virements : ${virementCumules}${devise}`);
    console.log(`Nombre de retraits: ${retraits.length} | Montant total des retraits : ${retraitsCumules}${devise}`);
}

// Exercice 6 : Filtrer les virements
function filtrerVirements() {
    const montantMinimum = parseFloat(prompt("Saisir le montant minimum à filtrer"));
    const montantsFiltre = transactions.filter((transaction) => transaction > montantMinimum);
    console.log(`Virements supérieurs à ${montantMinimum}${devise}:`);
    montantsFiltre.forEach(element => {
        console.log(element);
    });
}

// Exercice 7 : Convertir les devises
function convertirDevise() {
    const nouveauDevise = prompt("Choisir vers quel devise convertir ($ ou £)").toUpperCase();
    let tauxConversion;
    let deviseSymbole;

    if (nouveauDevise === "$") {
        tauxConversion = 1.09; 
        deviseSymbole = "$";
    } else if (nouveauDevise === "£") {
        tauxConversion = 0.84; 
        deviseSymbole = "£";
    } else {
        console.log("Devise non reconnue. Veuillez choisir $ ou £.");
        return;
    }

    // Convertit les transactions avec le taux de conversion choisi
    const transactionsConverties = transactions.map(transaction => transaction * tauxConversion);

    // Met à jour les transactions avec les valeurs converties sans changer la référence de `transactions`
    transactions.splice(0, transactions.length, ...transactionsConverties);

    // Recalcule le solde avec les transactions converties
    const soldeConverti = calculerSolde();

    // Affiche les transactions converties et le solde converti
    console.log(`Transactions converties en ${deviseSymbole}:`, transactions);
    afficherSolde(soldeConverti, deviseSymbole);
}

// convertirDevise();

// Exercice 8 et 9
function afficherMenu() {
    let action;
    while (action !== "8") {
        console.log("Entrer un chiffre correspondant au menu que vous souhaitez ouvrir: ");
        action = prompt("1. Afficher le Solde; 2. Faire un virement; 3. Faire un retrait; 4. Afficher les transactions; 5. Afficher les statistiques; 6. Filtrer les virements par montant minimum; 7. Convertir les transactions en devise; 8. Quitter");
        
        switch (action) {
            case "1":
                afficherSolde();
                break;
            case "2":
                faireVirement();
                break;
            case "3":
                faireRetrait();
                break;
            case "4":
                afficherTransactions();
                break;
            case "5":
                afficherStatistiques();
                break;
            case "6":
                filtrerVirements();
                break;
            case "7":
                convertirDevise();
                break;
            case "8":
                console.log("Vous avez choisi de quitter le programme. Au revoir !");
                break;
            default:
                console.log("Action invalide. Entrez un chiffre entre 1 et 8.");
                break;
        }
    }
}

afficherMenu();