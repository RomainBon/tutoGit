'use strict'
function checkInput (input) {
    if(isNaN(input.value))
    {
        input.style.background="green";
    }else 
    {
        input.style.background="red";
    }
}
function InputFirstN() {
    return document.querySelector('#fristName');
}
//recupère la valeur dans le formulaire
let inputFristName = document.querySelector('#fristName');

let inputButton = document.querySelector('input[type=button]');
// quand on click sur le bouton
inputButton.addEventListener("click", function(event)
{
    let input = document.querySelector('#fristName')
    console.log(typeof(input.value));
    checkInput(input);  
});

//Quabd on appuie sur une touche et si c'est enter alors il se passe des choses
inputFristName.addEventListener("keydown",function(event)
{
    console.log(event.key);
    if(event.key=="Enter")
    {
        event.preventDefault();
        console.log(event.target.value); 
        let varInput = InputFirstN();
        checkInput(varInput);
    }
});
