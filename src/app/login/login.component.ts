import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

  handleLogin(){
    if(this.username === "Nikhilgharge93@gmail.com" && this.password === "dummy"){
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
