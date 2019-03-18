// permet de vérifier si une variable est bien déclaré"
// et si elle est pas présente plusieurs fois
'use strict'

//  Déclaration.
var nom ="Smith";
let prenom ="Jhon";
const age =42;

//Type de données
// tyê string ou chaine de caractère : "" ou ''
// Type Number  ou nombre 
// boolean 0 ou 1  / true ou false
// type Null (valeur null)
// type undefined (variable declaré sans valeur)
var toto; // toto sera undefined
// Array ou tableau
console.log(nom,prenom);
//changement valeur
prenom = 'PHILLIPE';
nom="JESAISOUTUTECACHE";
//console.log(var); permet de voir dans la console du navigateur
console.log(nom,prenom);
//impossible de  redef une const;
// age+=1;
nom =850;
console.log(nom);

// ptit turck
let description = 'je m\'appelle Henri';
description ="Je m'appelle Henrie";
let u =null;
let uu;
let nn = NaN;
console.log(typeof(u),typeof(uu),typeof(nn));

//déclaration d'un tableau
let listPrenom =["Fistlint","Jean-Edouard","Henrie-émile"];
console.log(listPrenom);

//déclaration d'intrution de bloc;
//porté de variable
var x=1;
{
    console.log("JE SUIS x DANS UN BLOC :"+x);
    x=2;
}
console.log("JE SUIS x SORTIE DU BLOC:"+x);

// Avec le mot clef let la variable ne sera accesible uniquement
// dans le bloc ou elle est déclaré
let v =10;
 {
    let v=2;
    let a =v+5;
    let b=a*2+v;
    let c=b+2*a+v;

    console.log("V:"+v);
    console.log("A: "+a+" B: "+b+" C: "+c);
 }
 console.log("hors bloc V :"+v);

 const c =42;
 {
     const c = 1;
     console.log("c en bloc : "+c);
 }
 console.log("C hors bloc")+c;