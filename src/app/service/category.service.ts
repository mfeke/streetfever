import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/app';

  constructor(private http: HttpClient,) { }

  getAllCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllCategories`)
  }
}
