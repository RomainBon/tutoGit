'use strict'

// création obj

let monObjet = 
{
    name : "DeLaRue",
    firstname : "Phillipe",
    city : "Nantes",
};
console.log(monObjet);

console.log(monObjet.name);

// Instanciation

let personne = new Object()
console.log(personne);

personne.prenom = "Phillipe";
personne.nom = "Delarue";
personne.ville ="Nantes";

 console.log(personne);
 console.log(personne.ville);

 //Property Shorthand
// déclare les propriere avant en variable
 let marque ="Ford";
 let modele = "Mustang";
 let annee ="1970";
// et ensuite on déclare l'objet
 let voiture = {marque,modele,annee};

 console.log(voiture);
 console.log(voiture.modele);

 //Définition d'un objet avec constructeur

 function Personne(lePrenom,leNom,laVille)
 {
     this.leNom =leNom;
     this.lePrenom=lePrenom;
     this.laVille=laVille;

     this.showCity =function()
     {
         console.log("Il Habite a "+this.laVille);
     }
 }

 let client1 = new Personne("Pierre","DuRocher","RockCity");
 client1.showCity();

 let client2 = new Personne("Jean","Jean","Jean");
 client2.showCity();

 // Ajout d'une méthode à l'objet Personne

 Personne.prototype.fullName = function()
{
    console.log( "Je m'appelle "+this.lePrenom+" "+this.leNom);
}

let client3 = new Personne("Edwouard","Mallard","Wachingtwon");

//delete.Perosonne.fullName(); //supprime la métho de

client3.showCity();
client1.fullName();
client2.fullName();
client3.fullName();

let newPersonne = Object.assign(
    {
        year:32,
        Profession:"DEV",     
    },monObjet);
console.log(newPersonne);
console.log(newPersonne.year);


  
  // nommée
  let Rectangle = class Rectangle {
    constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
  };