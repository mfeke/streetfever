import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: any = {}

  colourArray:any [] = []
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id']
      this.productService.getProductById(id).subscribe({
        next: data => {
          this.product = data
          console.log(data)

        }
      })
      this.productService.getAllCategory().subscribe({
        next:data=>{
          this.colourArray = data
          this.colourArray =this.colourArray.filter((x:any)=> this.product.title === x.title)
        }
      })
    })



  }


}
