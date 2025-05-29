import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css'
})
export class ProductListsComponent implements OnInit {
  imageUrl = "https://i.postimg.cc/Y2NyCDKC/1000002455.jpg"

  productList: any[] = []
  uniqueProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe({
      next: (res) => {

        this.productList = res
      }
    })
  }


}
