'use strict'

// rest : ... definit en param d'une fonction, permet de passer un nb idéfinie en parametre
function useRest (...isRest)
{
 let resultat = 0;
 console.log(isRest);

 isRest.forEach
 (
    function(element)
    {
        resultat += element;
    }
 )
  return console.log(resultat);
}

useRest(10,20,30,40,50,60,70,80,90);
useRest(10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200);

// Spread : Lorsque l'on définie les ... lors de l'appel de la fonction seulementent
//le nombre de prarametre définie lors de la déclaration seront utilisé

function useSpread(x,y,z)
{
    return x+y+z;
}

let mesParam = [2,4,5,2,8,9];
let mesParam2 = [5,4,8,4,5,6,4,1,215,454,11,24,8,6,40,45];

console.log(useSpread(...mesParam));
console.log(useSpread(...mesParam2));
