'use strict'

/*
*Définir un tableau
*Supprimer la 1er valeur
*Supprimer la dernière valeur
* Ajouter à l'index 2 de votre tableau
* Avec plusieurs valeurs
* Inverser le tableau
* Retrouvé la longeur du tableau
*/

let tabExo = ["Tademorv","Pikachu","Tortank","Florizzare","Smogogo"];
console.log(tabExo);

tabExo.pop();// supprime le dernier element
console.log(tabExo);

tabExo.shift();// supprimer le 1er element
console.log(tabExo);

tabExo.splice(2 , 0 , ['Salamèche','Reptincel','Dracaufeu']);
console.log(tabExo); // modifie la valeurs de l'index 2

tabExo.push("Mew"); //ajout a la fin du tab
console.log(tabExo);

tabExo.reverse();// inverse les entré
console.log(tabExo);

tabExo.sort();//range en ordre alphabétique
console.log(tabExo);

console.log(tabExo.length);// Affiche la longeur du tableau