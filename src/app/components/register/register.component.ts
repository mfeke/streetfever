import { Component } from '@angular/core';
import { GoogleService } from '../../service/google.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private googleService:GoogleService){}

  
}
