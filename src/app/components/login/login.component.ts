import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  user = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router:Router){}

  submit() {
    console.log(this.user)
    this.authService.signin(this.user).subscribe({
      next: data => {

        console.log(data.id)
        if(data.id){
        this.router.navigate(["home"])
        }
      }
    })
  }
}
