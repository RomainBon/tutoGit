'use strict'

let presentation =" Je m'appelle Henrie";
let FormuledePolitesse = "Bonjour "+presentation;
 console.log(FormuledePolitesse);


 // Contacténation avec les littéreaux de template altgr + 7 x2 pour les quotes
 let littereaux = `<p>Bonjour ${presentation}</p>`;
 console.log(littereaux);

 // Affectation par décompasition

let a, b, rest;
[a,b]=[2,10];
console.log(a,b);
[a,b, ...rest]= [2,10,'test',35,true]
console.log(rest);