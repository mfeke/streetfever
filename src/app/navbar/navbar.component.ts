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
navMain:any = ""
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
      CatName: "men",
      CategoriesArray: [
        {
          CatName: "shoes",
          CategoryValue: ""

        },
        {
          CatName: "clothing",
          CategoryValue: ""

        },
        {
          CatName: "accessories",
          CategoryValue: ""

        },
        {
          CatName: "sports",
          CategoryValue: ""

        }


      ],
      CategoryValue: ""
    },
    {
      CatName: "accessories",
      CategoriesArray: [],
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

  ]



  constructor(private categoryService: CategoryService) { }
  ngOnInit() {



  }
  open(data: any) {
    // console.log(data)
    console.log(data)
  }

}
