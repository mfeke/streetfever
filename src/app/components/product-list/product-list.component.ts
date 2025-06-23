import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  cat: any = this.route.snapshot.paramMap.get('name');
  catObj: any = {};
  bgurl = 'https://i.postimg.cc/6Qk65cVs/accessories.webp';
  name = 'Sunrise Flower Oversized T-Shirt';

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.getCategory();
    this.getProducts();
  }
  getProducts() {
    this.productService.getAllCategory().subscribe({
      next: (data) => {
        console.log(data);

        this.products = this.getUniqueProductsByTitle(data);
      },
    });
  }
  getCategory() {
    this.categoryService.getAllCategoryByName(this.cat).subscribe({
      next: (data) => {
        console.log(data);

        this.catObj = data;
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
