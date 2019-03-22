 export class ImageListXhr
{
  static async getList()
  {
    try {
      const reponse = await fetch('./app/tux.json');
      return await reponse.json();
    }
    catch (error) {
      return console.log("Message erreur :", error);
    }
  }
}
 
