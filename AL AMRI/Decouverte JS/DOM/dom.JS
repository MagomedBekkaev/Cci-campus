// Exercice 1
const element = document.getElementById('main-title')
element.innerHTML = 'Bienvenu sur la page DOM'

const section = document.querySelectorAll('.section')
section[0].style.backgroundColor = 'red'
section[1].style.backgroundColor = 'green'
section[2].style.backgroundColor = 'blue'

// Exercice 2
const p = document.getElementById('description')
// p.innerText = 'Je suis un paragraphe'
p.innerHTML = 'Je suis un paragraphe'

// Exercice 3
const img = document.getElementById('image')
img.setAttribute("src", "cyberpunk.jpg")
img.style.maxWidth = 400 + 'px'

const a = document.querySelector('a')
a.href = "https://www.google.com"
a.title = "Cliquez ici"