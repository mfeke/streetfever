import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://streetfeverapi.vercel.app/api/category';

  constructor(private http: HttpClient,) { }

  getAllCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllCategory`)
  }
  getMainCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/getMainCategory`)
  }
  getAllCategoryByName(name:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/getCategoryByName/${name}`)
  }
}
