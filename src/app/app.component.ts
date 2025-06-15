import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bgurl = "https://i.postimg.cc/nc7MbMVs/335436589-1525615111294543-225423551462420608-n.jpg"
  bgUrls = [
    { image: "https://i.postimg.cc/KcgrXMcy/women-s-denim-J-Crew.jpg", name: "denim" },
    { image: "https://i.postimg.cc/90Snf5RF/original.jpg", name: "coats" },
    { image: "https://i.postimg.cc/jSpWnN84/HOME-d.jpg",name:"Decor" }
  ]
  name = "latest fashions"
}
