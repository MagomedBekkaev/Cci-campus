// // Exercice 1
// const element = document.getElementById('main-title')
// element.innerHTML = 'Bienvenu sur la page DOM'

// const section = document.querySelectorAll('.section')
// section[0].style.backgroundColor = 'red'
// section[1].style.backgroundColor = 'green'
// section[2].style.backgroundColor = 'blue'

// // Exercice 2
// const p = document.getElementById('description')
// // p.innerText = 'Je suis un paragraphe'
// p.innerHTML = 'Je suis un paragraphe'

// // Exercice 3
// const img = document.getElementById('image')
// img.setAttribute("src", "cyberpunk.jpg")
// img.style.maxWidth = 400 + 'px'

// const a = document.getElementById('myLink')
// a.href = "https://www.google.com"
// a.innerText = "Cliquez ici"

// // Exercice 4
// let box = document.querySelector('.box');
// console.log(box)
// box.style.color = "red";
// box.style.backgroundColor = 'yellow';
// box.style.border = '2px solid blue';



// ////////////////////////
// // SECTION 3
// ////////////////////////

// // Exercice 1
// const container = document.querySelector(".container");
// container.insertAdjacentHTML("beforeend", `

//         <img src="cyberpunk.jpg" alt="Image de la carte" style="width: 100px;" >
//         <h3>Titre de la carte</h3>
//         <p>Voici une description de la carte avec du texte et des styles.</p>
// `);


// // Exercice 2
// const section2 = document.querySelector(".sectionDeux");

// const newP = document.createElement("p");
// newP.textContent = "Bienvenue sur cette section"
// newP.classList.add("highlight")

// section2.insertAdjacentElement("afterbegin", newP)

// // Exercice 3
// const mainContainer = document.querySelector(".main-container");
// mainContainer.insertAdjacentText("beforebegin", "Titre de la section");

// /////////////////////////////
// // GESTION DES EVENEMENTS
// /////////////////////////////

// // Exercice 1
// const btn = document.getElementById("countButton");

// let clickCount = 0;
// btn.addEventListener("click", function() {
//     clickCount++;
//     let counter = document.getElementById("clickCount");
//     counter.innerText = clickCount;
// });

// // Exercice 2
// const txt = document.querySelector(".txt");
// txt.addEventListener("mouseover", function() {
//     txt.style.color = "green";
// });

// // Exercice 3
// const reveal= document.querySelector(".revealBtn");
// reveal.addEventListener("click", function() {
//     const secret = document.querySelector(".hiddenContent");
//     secret.style.display = "block";
// });

// // Exercice 4
// const hoverImage = document.getElementById("hover-image")
// hoverImage.addEventListener("mouseover", function() {
//     hoverImage.style.opacity = 0.5;
// })
// hoverImage.addEventListener("mouseout", function() {
//     hoverImage.style.opacity = 1;
// })

// // Exercice 5
// const lock = document.querySelector(".lock-btn");
// const action = document.querySelector(".action-btn");

// lock.addEventListener("click", function() {
//     if (!action.disabled) {
//         action.disabled = true;
//         lock.innerText = "Déverrouiller";
//     } else {
//         action.disabled = false;
//         lock.innerText = "Verrouiller";
//     }
// });


const monBouton = document.querySelector('.btn');
const maDiv = document.querySelector('.box');
monBouton.addEventListener('click', function() {
    maDiv.insertAdjacentHTML('afterbegin', `
            <div class="box">
        <button class="btnDeux">Text js</button>
    </div>
`)
});
// const monBoutonDeux = document.querySelector('.btnDeux');
maDiv.addEventListener('click', function() {
    alert('Hello World')
})