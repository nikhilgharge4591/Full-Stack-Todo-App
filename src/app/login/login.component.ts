import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Nikhilgharge@gmail.com';
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  // Add Router as Dependency Injection to route from Login to Welcome Page.
  // 

  constructor(private router: Router, public authenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {

  }

  handleLogin(){
    if(this.authenticationService.authenticate(this.username, this.password)){
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
