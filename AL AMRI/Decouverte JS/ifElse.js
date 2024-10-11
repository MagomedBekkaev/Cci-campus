// Exercice 1
const reponse = prompt("Saisir la température")
if (reponse < 14){
        console.log("Froid")
}
else if (reponse > 14 && reponse < 25) {
    console.log("Modéré")
} else {
    console.log("Chaud")
}

// Exercice 2
const user = prompt("Saisir le nom d'utilisatuer")
const pwd = prompt("Saisir le mot de passe")

if (user == "user" && pwd == "password") {
    console.log("Connection réussie")
} else {
    if (user != "user") {
        console.log("Nom d'utilisateur incorrect")
    }
    if (pwd != "password") {
        console.log("Mot de passe incorrect")
    }
}

// Exercice 3
const mail = prompt("Saisir l'adresse e-mail")
if (mail.includes("@") && mail.includes(".") && mail.endsWith(".com")) {
    console.log("E-mail valide")
} else {
    console.log("E-mail non valide")
}

// Exercice 4
const poids = prompt("Saisir le poids en kg").replace(",", ".")
const taille = prompt("Saisir la taille en mètres").replace(",", ".")
const poidsNum = parseFloat(poids)
const tailleNum = parseFloat(taille)

if (isNaN(poidsNum) || isNaN(tailleNum)) {
    console.log("Veuillez saisir des valeurs numériques valides pour le poids et la taille.")
} else {
    const imc = poidsNum / (tailleNum * tailleNum)
    console.log("Votre IMC est: " + imc.toFixed(2))

    if (imc > 18.5 && imc < 24.9) {
        console.log("IMC normal")
    } else if (imc > 25 && imc < 29.9) {
        console.log("Surpoids")
    } else if (imc > 30 && imc < 34.9) {
        console.log("Obésité modérée")
    } else if (imc > 35 && imc < 39.9) {
        console.log("Obésité sévère")
    } else if (imc > 40) {
        console.log("Obésité massive")
    } else {
        console.log("IMC inconnu")
    }
}

// Exercice 5
const age = prompt("Saisir votre age")
const estEtudiant = prompt("Est vous un étudiant?(oui on non)")
let prix = 100

if (estEtudiant === "oui") {
    prix = 100 * 70 / 100
    console.log("Prix de votre billet: " + prix)

} else if (estEtudiant === "non") {
    if (age <= 12 && age > 0) {
    prix = 100 * 50 / 100
    console.log("Prix de votre billet: " + prix)
    } else if (age >= 12 && age <= 24) {
        prix = 100 * 80 / 100
        console.log("Prix de votre billet: " + prix)
    } else if (age >= 65) {
        prix = 100 * 60 / 100
        console.log("Prix de votre billet: " + prix)
    } else {
        console.log("Prix de votre billet: 100")
    }
}