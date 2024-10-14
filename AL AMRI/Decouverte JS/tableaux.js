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

// Exercice 5
const scores = [60, 85, 90, 75, 55, 95, 80]

const sup90 = (score) => score > 90
console.log(scores.some(sup90))

const toutSup50 = (currentValue) => currentValue > 50
console.log(scores.every(toutSup50))