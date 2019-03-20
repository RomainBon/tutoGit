'use strict'
//Document represent la page html
//query selector pre,d le 1er eleement et c tout
// avec le all prend tous les element de la page qui 

let titreH2 = document.querySelector("h2");
console.log(titreH2);
let allTitreH2 = document.querySelectorAll("h2");
console.log(allTitreH2);

let idTitre2 = document.querySelector("#titre");
console.log(idTitre2);

let classTitre2 = document.querySelectorAll('.Titre');
console.log(classTitre2);

classTitre2.forEach(element=>{
    element.innerText = "Salutation";
});

let ulListe = document.querySelector('#ulListe');

console.log(ulListe.children);
console.log(ulListe.parentNode);

//création d'élément
let li = document.createElement('li');
li.textContent='JE SUIS CREE DU SCRIPT JS';
li.className='liList'
ulListe.appendChild(li);