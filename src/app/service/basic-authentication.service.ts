import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { API_URL } from 'src/app.constants';

export const AuthenticatedUser = 'authenticaterUser'
export const Token = 'token'

@Injectable({
  providedIn: 'root'
})

// Service providing authentication logic

export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  // authenticate(username: any, password: any){
  //   if(username === "Nikhilgharge93@gmail.com" && password === "dummy"){
  //     sessionStorage.setItem('authenticaterUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  checkForUserLoggedIn(){
    let user = sessionStorage.getItem(AuthenticatedUser);
    if(user != null){
      return true
    }else{
      return false
    }
  }

  executeJWTAuthenticationService(username:string, password:string){
    return this.httpClient.post<any>(`${API_URL}/authenticate`,{username,password}).pipe(
      map(
        (data:any) => {
          console.log(data.token);
          sessionStorage.setItem(AuthenticatedUser,username);
          sessionStorage.setItem(Token,`Bearer ${data.token}`);
          return data;
        }
      )
    )
  }


  executeAuthenticationService(username:any, password:any){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString});

    // Pipe - Suggests what should be do if the requests succeeds
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:headers}).pipe(
      map(
        (data:any) =>{        
          sessionStorage.setItem(AuthenticatedUser, username);
          sessionStorage.setItem(Token, basicAuthHeaderString);
          }       
        )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AuthenticatedUser);
  }

  getToken(){
    return sessionStorage.getItem(Token);
  }

  logoutUser(){
    sessionStorage.removeItem(AuthenticatedUser);
    sessionStorage.removeItem(Token);
  }

  // createBasicAuthenticationHeader(username:any, password:any){
  //   // let username = "Nikhilgharge93@gmail.com";
  //   // let password = "dummy";
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }
}

export class AuthenticationBean{
  constructor(public message:String){}
}
