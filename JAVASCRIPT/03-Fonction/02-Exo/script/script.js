// faire une fonction qui retourne Bonjour suivie de votre prénom
// Créer un tableau contenant , des strign et des numbers
// crée une fonction qui range les nobmre dans tableau de nombre et 
// string dans tab de string

function sayHello(nom)
{
    console.log("Bonjour "+ nom);
}
function triTab (tabNonTrier)
{
    let TabNumber=[];
    let TabString=[];
    for (const iterator of tabNonTrier) 
    {
        console.log(iterator);
        if (typeof iterator ==='string')
        {
            TabString.push(iterator);
        }else if (typeof iterator ==='number')
        {
            TabNumber.push(iterator);
        }
    }
    console.log("Traitement fini");
    return [TabNumber,TabString];
}

sayHello("Romain");
let tabPasTrier = ["Romain",21,"Phillipe",12,"Jean",45];
let tabTrier = triTab (tabPasTrier);

console.log("Tableau Trier : ",tabTrier);