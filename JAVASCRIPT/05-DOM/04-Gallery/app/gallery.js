import { Viewers } from "./component/viewer.js";
import { Thumbnails } from "./component/thumbnails.js"
import { Component } from "./component/component.js";

export class Gallery extends Component
{
    init()
    {
        this.root.innerHTML =`
        <h1>My Awsome Gallery</h1>
        <div class="component veiwer-component"></div>
        <div class="component thumbnails-component"></div>
        `;
        const viewer = new Viewers (this.root.querySelector(".veiwer-component"));
        viewer.init();
        const thumbnails = new Thumbnails (this.root.querySelector(".thumbnails-component"));
        thumbnails.init();
    }
}