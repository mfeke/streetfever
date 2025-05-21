import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://streetfeverapi.vercel.app/api/product';

  constructor(private http: HttpClient,) { }

  getAllCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllProduct`)
  }
  getProductById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getProductById/${id}`)
  }
}
