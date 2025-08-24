import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  apisCountryUrl =
    'https://us1.locationiq.com/v1/reverse?key=pk.3c5eac87dd6fd7bf87f7197d983a62db&';
  apiLocUrl = 'https://restcountries.com/v3.1/name';
  private apiUrl = 'https://rest.nexmo.com/sms/json';

  constructor(private http: HttpClient) {}

  getCountry(lat: any, lng: any): Observable<any> {
    return this.http.get(
      `${this.apisCountryUrl}lat=${lat}&lon=${lng}&format=json&`
    );
  }
  getCountryDetails(name: any): Observable<any> {
    return this.http.get(`${this.apiLocUrl}/${name}`);
  }

  sendSms(to: string, text: string): Observable<any> {
    const body = new HttpParams()
      .set('from', 'Vonage APIs')
      .set('to', "27835408531")
      .set('text', text)
      .set('api_key', '9d5a1e22')
      .set('api_secret', 'k0Kioi33');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
}
