import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import { BasicAuthenticationService } from '../service/basic-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Nikhilgharge93@gmail.com';
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  // Add Router as Dependency Injection to route from Login to Welcome Page.
  // 

  constructor(private router: Router, public authenticationService: HardcodedAuthenticationService, public basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {

  }

  // handleLogin(){
  //   if(this.authenticationService.authenticate(this.username, this.password)){
  //     // Redirect to welcome page
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   }else{
  //     this.invalidLogin = true;
  //   }
  // }

  handleBasicAuthLogin(){

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      (data:any) => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false;
      },
      (error:any) => {
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }

  handleJWTAuthLogin(){

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      (data:any) => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false;
      },
      (error:any) => {
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }

}
