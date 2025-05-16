import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../service/category.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  navLists = [
    {
      CatName: "sales",
      CategoriesArray: [
        {
          CatName: "all sales",
        },
        {
          CatName: "womens",
        },
        {
          CatName: "kids",
        }
      ],
      CategoryValue: "mens"
    },
    {
      CatName: "women",
      CategoriesArray: [
        {
          CatName: "Shoes",
          CategoryValue: ""

        },
        {
          CatName: "Clothing",
          CategoryValue: ""

        },
        {
          CatName: "Accessories and Equipment",
          CategoryValue: ""

        },
        {
          CatName: "Sports",
          CategoryValue: ""

        }


      ],
      CategoryValue: ""
    },
    {
      CatName: "kids",
      CategoriesArray: [
        {
          CatName: "Shoes",
          CategoryValue: ""

        },
        {
          CatName: "Clothing",
          CategoryValue: ""

        },
        {
          CatName: "Accessories and Equipment",
          CategoryValue: ""

        },
        {
          CatName: "Sports",
          CategoryValue: ""

        }


      ],
      CategoryValue: ""
    },
    {
      CatName: "men",
      CategoriesArray: [
        {
          CatName: "Shoes",
          CategoryValue: ""

        },
        {
          CatName: "Clothing",
          CategoryValue: ""

        },
        {
          CatName: "Accessories and Equipment",
          CategoryValue: ""

        },
        {
          CatName: "Sports",
          CategoryValue: ""

        }


      ],
      CategoryValue: ""
    },
  ]


  nvaList: any[] = []
  name = ["women", "men", "kids"]
  newList: any[] = []
  constructor(private categoryService: CategoryService) { }
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe({
      next: data => {
        // console.log(data)
        this.nvaList = data.categories
        console.log(this.nvaList)

      }
    })



  }
  click(data: any) {
    // console.log(data)
    this.nvaList = this.nvaList.filter((category: any) => category.CategoryValue === data);
  }

}
