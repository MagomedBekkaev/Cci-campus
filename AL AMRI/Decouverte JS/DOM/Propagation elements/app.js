const section = document.querySelector('.section');
const paragraph = document.querySelector('.paragraph');
const button = document.querySelector('.button');
// Ajoute un écouteur d'événement à la section
section.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
    console.log("Clic sur : " + event.target.textContent);
    }
    });
// Ajoute un écouteur d'événement au paragraphe
// paragraph.addEventListener('click', function() {
// console.log("Événement déclenché sur l'élément <p>");
// });
// // Ajoute un écouteur d'événement au bouton
// button.addEventListener('click', function() {
// console.log("Événement déclenché sur l'élément <button>");
// });

const addButton = document.querySelector('#addButton');
// Événement pour ajouter un nouveau bouton dynamiquement
addButton.addEventListener('click', function() {
// Crée un nouveau bouton avec une classe spécifique
const newButton = document.createElement('button');
newButton.textContent = "Nouveau Bouton";
newButton.classList.add('new-button');
// Ajoute le nouveau bouton à la section
const section = document.querySelector('.section');
section.append(newButton);
});
// Tente de sélectionner le nouveau bouton et d'ajouter un événement directement
// const newBtn = document.querySelector('.new-button');
// newBtn.addEventListener('click', function() {
// console.log("Clic sur le nouveau bouton");
// });