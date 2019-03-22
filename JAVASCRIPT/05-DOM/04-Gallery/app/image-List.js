 export class ImageListXhr
{
  static getList()
  {
    return fetch('./app/tux.json')
    .then(reponse =>reponse.json())
    .catch(error => console.log("Message erreur :",error));
  }
}
 
