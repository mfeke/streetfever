import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  cat = 'new arrivals';
  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  name = 'Sunrise Flower Oversized T-Shirt';

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getAllCategory().subscribe({
      next: (data) => {
        console.log(data);
        this.products =  this.getUniqueProductsByTitle(data)
      },
    });
  }

  getUniqueProductsByTitle(products: any[]): any[] {
    const seenTitles = new Set();
    return products.filter((product) => {
      if (seenTitles.has(product.title)) return false;
      seenTitles.add(product.title);
      return true;
    });
  }
}
