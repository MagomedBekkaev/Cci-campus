// Exercice 1
function direBonjour(){
    console.log("Bonjour, comment ça va ?");
}
direBonjour();

// Exercice 2
function saluerPersonne(prenom, nom) {
    console.log(`Bonjour ${prenom} ${nom}, comment ça va?`);
}

saluerPersonne("Magomed", "Bekkaev");

// Exercice 3
function calculeAge(anneeNaissance){
    const anneeActuelle = 2024
    const age = anneeActuelle - anneeNaissance
    console.log("Votre age: " + age)
}
calculeAge(2001);

// Exercice 4
const carre = function(num) {
    return num * num
}
console.log(carre(5))

// Exercice 5
const carree = num => num * num
console.log(carree(5))

// Exercice 6
const addition = (num1, num2) => num1 + num2
console.log(addition(10, 9))

// Exercice 7
function saisirTemperature() {
    return parseFloat(prompt("Saisir la température :"));
}

function celsiusVersFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitVersCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function celsiusVersKelvin(celsius) {
    const kelvin = celsius + 273.15;
    return kelvin;
}

function kelvinVersCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius;
}

function afficherResultat(tempOrigine, uniteOrigine, tempConvertie, uniteConvertie) {
    console.log(`Température d'origine : ${tempOrigine}°${uniteOrigine}, Température convertie : ${tempConvertie}°${uniteConvertie}`);
}

function convertion() {
    const temperature = saisirTemperature();
    const uniteOrigine = prompt("Choisir l'unité d'origine (C, F ou K)").toUpperCase();
    const uniteConvertie = prompt("Choisir l'unité de destination (C, F ou K)").toUpperCase();
    let tempConvertie;

    if (uniteOrigine === "C" && uniteConvertie === "F") {
        tempConvertie = celsiusVersFahrenheit(temperature);
    } else if (uniteOrigine === "F" && uniteConvertie === "C") {
        tempConvertie = fahrenheitVersCelsius(temperature);
    } else if (uniteOrigine === "C" && uniteConvertie === "K") {
        tempConvertie = celsiusVersKelvin(temperature);
    } else if (uniteOrigine === "K" && uniteConvertie === "C") {
        tempConvertie = kelvinVersCelsius(temperature);
    } else if (uniteOrigine === "F" && uniteConvertie === "K") {
        tempConvertie = celsiusVersKelvin(fahrenheitVersCelsius(temperature));
    } else if (uniteOrigine === "K" && uniteConvertie === "F") {
        tempConvertie = celsiusVersFahrenheit(kelvinVersCelsius(temperature));
    } else {
        console.log("La conversion demandée n'est pas valide.");
        return;
    }

    afficherResultat(temperature, uniteOrigine, tempConvertie, uniteConvertie);
}

convertion();
