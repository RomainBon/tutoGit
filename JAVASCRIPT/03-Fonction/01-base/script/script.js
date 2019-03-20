'use strict'

ditBonjour();

let [a,b,c,d,e,f]=[5,10,15,20,25,30];

console.log(a,b,c,d,e,f);

let resultAB= calc(a,b);
console.log("AB = "+resultAB);

let resultCD= calc(c,d);
console.log("AB = "+resultCD);

let resultEF= calc(e,f);
console.log("AB = "+resultEF);
 
//definition de fonction

//fonction nommé
function calc(var1,var2) 
{
    return var1-var2;
}
function ditBonjour ()
{
    console.log("Bonjour !")
}

//autre déclaration de fonction ananyme

let multiplication = function (number1, number2)
{
    return number1*number2;
}

console.log(multiplication(resultAB,resultCD));

//Fonction immédiatement invoquer 

(function()
{
    console.log("Retour de la fonction immédiatement invoqué");
})();

(function(param)
{
    console.log("Hey ! : "+param);
})("Romain");

//Fonction flêché

// Syntaxe : ()=>{}
// Syntaxe plus court

let array = ["Alpha","Beta","Ceta"];
array.forEach(element => {
    console.log(element);
});

// Les closures
function closure()
{
    let prenom ="Phillipe"

    function affiche(){
        console.log(prenom);
    }
    return affiche();
}
closure();

//praram par def
function paramdef (a=12,b=45,c=20,d=20)
{
    console.log(a,b,c,d);
    return a+b+c+d;
}
console.log(paramdef(5,5,undefined,4));