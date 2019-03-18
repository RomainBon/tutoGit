'use strict'

//Déclaration d'un tableau
let monTableau = [1,2,3,4,5,6,7,8,9,10];
console.log(monTableau);

console.log(monTableau[2]);

console.log("For red array");
for (let i = 0; i < monTableau.length; i++) {
    const element = monTableau[i];
    console.log(element);   
}
// pareil
console.log("A la main c'est plus chiant");
console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);
console.log(monTableau[3]);
console.log(monTableau[4]);
console.log(monTableau[5]);
console.log(monTableau[6]);
console.log(monTableau[7]);
console.log(monTableau[8]);
console.log(monTableau[9]);

// Tableau en 2d
let arrayDeuxDimension = [1,2,3,["one","Two","three"]];
console.log(arrayDeuxDimension);
console.log(arrayDeuxDimension[3][1]);

//helltab

let hellArray = [[[1],[2],[3]],[["one"],["two"],["three"]],[["uno"],["dos"],["tres"]],[[4],[5],[6]],[["four"],["five"],["six"]],[["quatro"],["cinquo"],["seis"]],[[7],[8],[9]],[["seven"],["height"],["nine"]],[["siete"],["ocho"],["nueve"]]];
console.log(hellArray);

// Tab assosiatif
let arrayAsso = {
    1: "1er valeur",
    deux:"2eme valeur",
    number:42,
    number2:32
}
console.log(arrayAsso);
console.log(arrayAsso["deux"]);
console.log(arrayAsso[1]);

let multiDimAsso = 
{
    MecA : 
    {
        article1 :
        {
            titre : 'titre1A',
            contenu :"lorem1A"
        },
        article2 :
        {
            titre : 'titre1A',
            contenu :"lorem2A"
        }
    },
    MecB : 
    {
        article1 :
        {
            titre : 'titre1B',
            contenu :"lorem1B"
        },
        article2 :
        {
            titre : 'titre1B',
            contenu :"lorem2B"
        }
    },
    MecC : 
    {
        article1 :
        {
            titre : 'titre1C',
            contenu :"lorem1C"
        },
        article2 :
        {
            titre : 'titre1C',
            contenu :"lorem2C"
        },
    },
}
console.log(multiDimAsso);
console.log(multiDimAsso["MecB"]["article1"]);
console.log(multiDimAsso["MecB"]["article1"]["titre"]);

