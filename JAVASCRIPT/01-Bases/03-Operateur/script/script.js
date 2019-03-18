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

//Incrémantation et décrémentation
let incrDecr=10;
incrDecr++;
console.log("++ "+incrDecr);
incrDecr--;
console.log("-- "+incrDecr);

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

//Opérateur logique

//ET logique
//&&
// OU logique
//|| (AltGr + 6 pour | ) 
// ! Non logique 

// les conditions

//if / else /else if
 let m = 7;

if (m===10)
{
    console.log("C'EST EGALE A 10 OMG");
}else
{
    console.log("C'EST PAS EGALE A 10 OMG ")
}

if (m===10)
{
    console.log("C'EST EGALE A 10 OMG");
}else if(m===5)
{
    console.log("C'EST EGALE A 5 OMG ")
}else if (m===15)
{
    console.log("C'EST EGALE A 15 OMG ")
}
else if (m===20)
{
    console.log("C'EST EGALE A 20 OMG ")
}
else if (m===30)
{
    console.log("C'EST EGALE A 30 OMG ")
}
else
{
    console.log("ta valeur c de la merde");
}

//Ternaire
if (m >= 5 &&  m<=10 )
{
    console.log("var n : 5");
}
else
{
    console.log("var n != 5");
}
// le if en haut  
m >= 5 && m <= 10 ? console.log("var n : 5") : console.log("var n != 5");

let n = true;
//switch
switch (n) {
    case true:
        console.log("vrai");
        break;
    case false:
        console.log("faux");
        break;
    default:
        console.log("retry")
        break;
} 

// Structure intéractive ou boucles
console.log("Boucle While");
let resultwhile=0;
while (resultwhile <10)
{
    resultwhile++;
    console.log(resultwhile);
}

console.log("Boucle Do While");
let doWhile = 0;
do
{
    doWhile--;
    console.log(doWhile);
}while (doWhile >-10);

console.log("Boucle for");
for (let o =20; o <30; o++)
{
    console.log(o);
} 

console.log("boucle for of");
let array = ["Phillipe","Jean","Bidule","Turckmushe","Machin","Sacakaka"];
for (const iterator of array)
{
    console.log(iterator);
}

//JE NE MANGE PAS DE GRAINE 