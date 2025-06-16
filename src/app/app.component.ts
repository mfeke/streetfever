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
    img:["https://i.postimg.cc/prkh9LrQ/Women-s-Bags-Shop-Accessories-Online.jpg",
      "https://i.postimg.cc/Zns2K68r/Tween-Girls-Sleeveless-Overhead-Hoodie-And-Short-With-Number-Print-2-Piece-Set-Back-To-School.jpg",
      "https://i.postimg.cc/x12hjjHp/Ass-Won.jpg",
      "https://i.postimg.cc/wTh4rKPX/sunglasses.jpg"
    ],
    name:""
  }
  name = "latest fashions"

}
