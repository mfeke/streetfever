import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  bgUrls = [
    { image: 'https://i.postimg.cc/90Snf5RF/original.jpg', name: 'coats' },
    {
      image: 'https://i.postimg.cc/KcgrXMcy/women-s-denim-J-Crew.jpg',
      name: 'denim',
    },
    { image: 'https://i.postimg.cc/mrDBSqjW/Sage-introductions-to-the-Represent-mainline.jpg', name: 'accessories' },
  ];
  urls = {
    img: [
      'https://i.postimg.cc/j2RfC8VB/Ladies-Leather-Purse-Coffee-color.jpg',
      'https://i.postimg.cc/jSSGyKQS/dunhill.jpg',
      'https://i.postimg.cc/Z54Q8dcG/download-5.jpg',
      'https://i.postimg.cc/sgmqmCVf/download-6.jpg',
    ],
    name: 'THE GIFT GUIDE',
  };
  name = 'WINTER ARRIVALS';
}
