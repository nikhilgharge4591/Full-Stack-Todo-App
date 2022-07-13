import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'; 
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/Data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message:String = 'Some welcome Message';
  name = '';

  //ActivateRoute
  constructor(private route:ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log("Get Welcome Message");
  }

}
