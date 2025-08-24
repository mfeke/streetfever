import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
apisCountryUrl = "https://us1.locationiq.com/v1/reverse?key=pk.3c5eac87dd6fd7bf87f7197d983a62db&"
apiLocUrl ="https://restcountries.com/v3.1/name"
  constructor( private http: HttpClient) { }


  getCountry(lat:any, lng:any):Observable<any>{
    return this.http.get(`${this.apisCountryUrl}lat=${lat}&lon=${lng}&format=json&`)
  }
  getCountryDetails(name:any):Observable<any>{
    return this.http.get(`${this.apiLocUrl}/${name}`)
  }
}
