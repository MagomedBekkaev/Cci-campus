// Exercice 1
// const num = prompt("Saisir un nombre");
// const message = (num % 2 === 0) ? "Nombre pair" : "Nombre impair";
// console.log(message);

// Exercice 2
const operation = prompt("Choisir quel opération à effectuer (+, -, /, *, % ou **)");
const num1 = parseFloat(prompt("Entrer un nombre"));
const num2 = parseFloat(prompt("Entrez un deuxième nombre"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Veuillez entrer des nombres valides.");
} else {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Erreur : Division par zéro.");
                break;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 === 0) {
                console.log("Erreur : Division par zéro.");
                break;
            }
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            console.log("Opération non valide.");
            break;
    }
    if (result !== undefined) {
        console.log(`Le résultat de l'opération est : ${result}`);
    }
}

