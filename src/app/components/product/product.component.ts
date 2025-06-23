import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  name = 'Sunrise Flower Oversized T-Shirt';

  sizes = [ "XS", "S", "M", "L", "XL"]

}
