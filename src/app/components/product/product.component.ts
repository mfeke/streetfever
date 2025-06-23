import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  name = 'Sunrise Flower Oversized T-Shirt';
  obj: any = {};
  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  objList: any[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.obj = data;

        this.productService.getProductsByName(data.title).subscribe({
          next: (data) => {
            console.log(data);
            this.objList = data;
          },
        });
      },
    });
  }
  removeDuplicateImages(product: any): string[] {
    if (!product || !Array.isArray(product)) {
      return [];
    }
    return [...new Set(product as string[])];
  }
  getUniqueProductsByTitle(products: any[]): any[] {
    const seenTitles = new Set();
    return products.filter((product) => {
      if (seenTitles.has(product.colour)) return false;
      seenTitles.add(product.colour);
      return true;
    });
  }
}
