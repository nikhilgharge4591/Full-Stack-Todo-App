import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

  executeHelloWorldService(){
    console.log("Hello World");
  }
}
