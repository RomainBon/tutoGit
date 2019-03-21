export const PI = Math.round(Math.PI);

export const myFunction = function()
{
    console.log("Bonjour"); 
};

//apppel en tant que fonction
const exemple1 = function()
{
    console.log("Exemple1");
}

exemple1();

const kitty =
{
    name:'Felix',

    moew : function()
    {
        console.log(this.name);
    }
}

//appel en tant que méthode
kitty.moew();

const LittleCat = function LittleCat3(name)
{
    this.name = name;
}
function LittleCat2()
{
    console.log(toto);
    const toto =123;
}

const LittleCat = function (name)
{
    this.name = name;
}
LittleCat.prototype.meow = function()
{
    console.log("example11");
}
// en tant que constructeur
const bill = new LittleCat('BILL')

console.log(bill.meow);

//appel avec call ou apply
exemple1.apply(bill);