function addlink(numberLink, element)
{
    let balise = document.querySelector(element);
    for (let index = 1; index <= numberLink; index++)
    {
        let elementA= document.createElement('a');
        elementA.textContent=`Lien : ${index}`;
        elementA.setAttribute("href",`www.lien${index}`);
        element.className ="menuLink";
        balise.appendChild(elementA);
    }
}

let nombreLien=Number(window.prompt("Veuillez saisir un nombre de lien.", "1"));

addlink(nombreLien,"nav");
