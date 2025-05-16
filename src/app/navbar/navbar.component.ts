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

  nvaList: any[] = []
  name = ["women", "men", "kids"]
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
    const newCategory = this.nvaList.filter((category:any) => category.CategoryValue === data);
    console.log(newCategory)
  }

}
