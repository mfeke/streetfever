import { Component, OnInit } from '@angular/core';
import { ApisService } from './services/apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  currentIndex = 1;
  details: any[] = [];
  phoneNumber:string= ""

  constructor(private apiService: ApisService) {}
  ngOnInit(): void {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log();
      this.apiService
        .getCountry(position.coords.latitude, position.coords.longitude)
        .subscribe({
          next: (data) => {
            console.log(data.address);
            this.apiService.getCountryDetails(data.address.country).subscribe({
              next: (data) => {
                console.log(data);
                this.details = data
              },
            });
          },
        });
    });
  }

  smsBtn(){
    this.apiService.sendSms(this.phoneNumber, "Hello from Angular").subscribe({
      next:data=>{
        console.log(data)
      }
    })
  }
}
