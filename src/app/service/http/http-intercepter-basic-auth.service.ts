import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  

  // HTTPiNTERCEPTER helps us to add authorization headers on every request.
  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler) {
    // let username = 'Nikhilgharge93@gmail.com';
    // let password = 'dummy';
    let basicAuthenticationString = this.basicAuthenticationService.getToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    //Requests cannot be overriden thats why we are cloning it.

    if (basicAuthenticationString != null && username != null){
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthenticationString
        }
      })
    }
    return next.handle(request)
  }
}
