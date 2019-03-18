'use strict'
let listePrenom =["Romain","Remi","Lou","Nicolas"];
 console.log(listePrenom);
 for (let prenom of listePrenom)
 {
     console.log(prenom);
 }

 console.log("Boucle foreach");
 listePrenom.forEach(
     function(element)
 {
    console.log(element);
 })


 listePrenom.forEach
 (
     function(prenom)
     {
        if(prenom==="Remi")
        {
            console.log("YATA");
        }
    }
)