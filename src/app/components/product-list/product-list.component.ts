import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  cat = 'new arrivals';
  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  name = 'Sunrise Flower Oversized T-Shirt';
}
