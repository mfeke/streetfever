import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../../services/apis.service';

@Component({
  selector: 'app-number-login',
  templateUrl: './number-login.component.html',
  styleUrl: './number-login.component.css'
})
export class NumberLoginComponent implements OnInit{
urrentIndex = 1;
  details: any[] = [];
  phoneNumber: string = '';
  countries: any[] = [];

  constructor(private apiService: ApisService) {}
  ngOnInit(): void {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.apiService
        .getCountry(position.coords.latitude, position.coords.longitude)
        .subscribe({
          next: (data) => {
            this.apiService.getCountryDetails(data.address.country).subscribe({
              next: (data) => {
                this.details = data;
              },
            });
          },
        });
    });
    this.apiService.getAllCountries().subscribe({
      next: (data) => {
        console.log(data);
        this.countries = data;
      },
    });
  }

  smsBtn() {
    this.apiService.sendSms(this.phoneNumber, 'Hello from Angular').subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
