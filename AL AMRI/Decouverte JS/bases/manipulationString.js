// Exercice 1
const texte = "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte."
console.log(texte.length)

// Exercice 2
const texte2 = "Chaque échec est une leçon qui nous rapproche du succès."
console.log(texte2.slice(20,35))

// Exercice 3
const texte3 = "La persévérance est la clé de la réussite."
console.log(texte3.startsWith("La persévérance"))

// Exercice 4
const texte4 = "L'échec est simplement l'opportunité de recommencer, cette fois plus intelligemment."
console.log(texte4.replace("simplement", "toujours"))

// Exercice 5
const texte5 = "Rien de grand ne s'est accompli sans passion."
const list = texte5.split(" ")
console.log(list)

// Exercice 6
const texte6 = "Le seul véritable échec est d’abandonner."
const reel = texte6.includes("réel")
console.log(reel)

// Exercice 7
const texte7 ="Le travail acharné bat le talent quand le talent ne travaille pas dur."
console.log(texte7.toUpperCase())

// Exercice 8
const texte8 =  "L'éducation est l'arme la plus puissante que vous puissiez utiliser pour changer le monde."
console.log(texte8.substring(16, 40))

// Exercice 9
const texte9 = "Chaque jour est une chance de s’améliorer."
console.log(texte9.repeat(3))

// Exercice 10
const texte10 = "Croyez en vous-même et tout deviendra possible."
console.log(texte10.padEnd(50, "!"))

// Exercice 11
const texte11 = "Tomber sept fois, se relever huit fois."
console.log(texte11.padStart(40, "*"))

// Exercice 12
const texte12 = "L'échec est le fondement de la réussite."
console.log(texte12.endsWith("fondement de la réussite."))