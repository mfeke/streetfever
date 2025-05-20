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
  navArrays: any[] = []
  subArray: any[] = []

  constructor(private categoryService: CategoryService) { }
  ngOnInit() {
    this.categoryService.getMainCategory().subscribe({
      next: data => {
        this.navArrays = data.categories

        console.log(this.navArrays)
      }
    })
    this.categoryService.getAllCategory().subscribe({
      next: data => {
        this.subArray = data.categories
      }
    })

  }

  filterSubCategory(id:number){
    return this.subArray.filter((subCategory)=> subCategory.parent_id === id)
  }


}
