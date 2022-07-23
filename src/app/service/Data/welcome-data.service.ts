import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { API_URL } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient, private basicAuthenticationService:BasicAuthenticationService) { }

  executeHelloWorldServiceWithPathvariable(name:any){

    let basicAuthenticationHeaderStr = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({ Authorization: basicAuthenticationHeaderStr});

    return this.httpClient.get(`${API_URL}/hello-world/path-variable/${name}`,{headers:headers});
    //console.log("Hello World");
  }

  createBasicAuthenticationHeader(){
    let username = "Nikhilgharge93@gmail.com";
    let password = "dummy";
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeaderString;
  }
}
