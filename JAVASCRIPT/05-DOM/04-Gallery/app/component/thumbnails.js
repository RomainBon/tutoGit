import { Component } from "./component.js";
import {ImageListXhr} from "../image-List.js";

export class Thumbnails extends Component
{
    init()
    {
        ImageListXhr.getList().then((responseData)=>
        {
            this.root.innerHTML= Thumbnails.displayList(responseData);
        });
        this.root.innerHTML ="<p>Chargement des Images</p>";
    }

    static displayList(list)
    {
        const htmlImgArray =  list.map(img => `<li><img src="img/${img}"/></li>`);
        const htmlImgString = htmlImgArray.join('');
        return `<ul>${htmlImgString}</ul>`;
    }
}