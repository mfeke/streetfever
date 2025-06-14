import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bgurl = "https://i.postimg.cc/hjSW3dRD/New-wave-racket-club.jpg"
  bgUrls = [
    { image: "https://i.postimg.cc/KcgrXMcy/women-s-denim-J-Crew.jpg", name: "denim" },
    { image: "https://i.postimg.cc/90Snf5RF/original.jpg", name: "coats" }
  ]
  name = "latest fashions"
}
