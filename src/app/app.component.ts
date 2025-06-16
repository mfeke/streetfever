import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    currentIndex = 1;

  bgurl = "https://i.postimg.cc/1zMNgGHd/Grungy-Hood-Top.jpg"
  bgUrls = [
    { image: "https://i.postimg.cc/KcgrXMcy/women-s-denim-J-Crew.jpg", name: "denim" },
    { image: "https://i.postimg.cc/90Snf5RF/original.jpg", name: "coats" },
    { image: "https://i.postimg.cc/jSpWnN84/HOME-d.jpg",name:"Decor" }
  ]
  urls={
    img:["https://i.postimg.cc/j2RfC8VB/Ladies-Leather-Purse-Coffee-color.jpg",
      "https://i.postimg.cc/jSSGyKQS/dunhill.jpg",
      "https://i.postimg.cc/vTvN6S4n/dress.jpg",
      "https://i.postimg.cc/26rdBjhH/download-23.jpg"
    ],
    name:"THE GIFT GUIDE"
  }
  name = "latest fashions"

}
