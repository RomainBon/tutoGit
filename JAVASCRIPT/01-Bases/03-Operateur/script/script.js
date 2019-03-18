'use strict'

//Operateur

//affectation
let attribution = 1000;
//addition
let add = 1;

add +=1; // add = add + 1; same thing
console.log("add : "+add);
let multi =5;
multi *=multi;
// multi= multi * multi;
console.log("multi :"+multi);

//div

let div =10;
div/=2; // div = div/2
console.log('div :'+div);

//modulo
//donne le reste d'un division euclidienne
let modulo =10;
modulo %=6; // modulo = modulo % 6
console.log('modulo : '+modulo);

// Concaténation (+)

let nom ="Phillipe";
let prenom="Justin"
let Concatenation ="Bonjour je me nome " + prenom + " " + nom;
console.log(Concatenation);

// ICI le plus qui est devant la deuxime variable permet 
//de metre le string en number
let premierNombre=5;
let deuxiemeNombre="42";
let result =null;
result=premierNombre + +deuxiemeNombre;
console.log(result);

//Opérateur de comparaison

//Compraison == (Exemple : c == b ) ; vérife uniquement la valeur

let c = 5;
let b = 5;
console.log(c==b);

//Comparaison strict === valeur et type de la variable

let e = 5;
let f = "5";
console.log(e===f);

// plus grand que ... >
let g = 10;
let h = 5;
console.log(h>g);
 // plus petit que ... <
console.log(h<g);
// plus grand ou egale ... >=
console.log(h>=g);
// plus petit ou egale  ... <=
console.log(h<=g);

// La négation simple (!=)
let i = 5;
let j = 2;
console.log(i != j);
// La négation strict (!==)
let k="5";
let l=5;
console.log(+k!==l);