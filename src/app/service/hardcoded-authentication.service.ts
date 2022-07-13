import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


// Service providing authentication logic

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    if(username === "Nikhilgharge93@gmail.com" && password === "dummy"){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  checkForUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    if(user != null){
      return true
    }else{
      return false
    }
  }

  logoutUser(){
    sessionStorage.removeItem("authenticaterUser");
  }
}
