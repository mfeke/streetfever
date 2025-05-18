import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items = ["https://i.postimg.cc/4NCBBF2v/download-7.jpg"]
  text = "Sign up now & get R100 off your first purchase"
  itemImageUrl: any;
  isHelp: any
  imageUrl = "https://i.postimg.cc/Y2NyCDKC/1000002455.jpg"
  showHelp() {
    this.isHelp = !this.isHelp
    

  }
}
